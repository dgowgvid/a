import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

// --- 类型定义 ---

interface GeoData {
  source: string;
  ip: string;
  country: string;
  countryName: string;
  city: string;
  region: string;
  timezone: string;
  latitude: number | null;
  longitude: number | null;
  accurate: boolean;
  error?: string;
}

interface IpApiCoResponse {
  ip?: string;
  country_code?: string;
  country_name?: string;
  city?: string;
  region?: string;
  timezone?: string;
  latitude?: number;
  longitude?: number;
  error?: boolean;
  reason?: string;
}

interface IpInfoResponse {
  ip?: string;
  city?: string;
  region?: string;
  country?: string;
  loc?: string;
  timezone?: string;
}

interface IpWhoIsResponse {
  success?: boolean;
  ip?: string;
  country_code?: string;
  country?: string;
  region?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  timezone?: { id: string };
}

interface FreeIpApiResponse {
  ipVersion: number;
  ipAddress: string;
  latitude: number;
  longitude: number;
  countryName: string;
  countryCode: string;
  timeZone: string;
  zipCode: string;
  cityName: string;
  regionName: string;
  isProxy: boolean;
}

// --- 常量与正则 ---

const PRIVATE_IP_RANGES = [
  /^127\./,
  /^10\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^192\.168\./,
  /^::1$/,
  /^fd[0-9a-f]{2}:.+/i,
  /^fe80:.+/i,
  /^localhost$/i
];

const COMMON_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Edge-Runtime-GeoIP/1.0)',
  'Accept': 'application/json'
};

// --- LRU 缓存实现 ---

class LRUCache<V> {
  private cache: Map<string, { value: V; expiresAt: number }>;
  private readonly maxEntries: number;
  private readonly ttlMs: number;

  constructor(maxEntries: number, ttlMs: number) {
    this.cache = new Map();
    this.maxEntries = maxEntries;
    this.ttlMs = ttlMs;
  }

  get(key: string): V | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }

    this.cache.delete(key);
    this.cache.set(key, entry);
    
    return entry.value;
  }

  set(key: string, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxEntries) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }

    this.cache.set(key, {
      value,
      expiresAt: Date.now() + this.ttlMs
    });
  }
}

// --- 全局状态 ---

const ipCache = new LRUCache<GeoData>(1000, 1000 * 60 * 5);
const inflightRequests = new Map<string, Promise<GeoData>>();

// --- 工具函数 ---

const isValidPublicIP = (ip: string | null | undefined): boolean => {
  if (!ip || ip === '未知') return false;
  if (!ip.includes('.') && !ip.includes(':')) return false;
  return !PRIVATE_IP_RANGES.some(pattern => pattern.test(ip));
};

async function fetchService<T>(
  url: string,
  timeout: number = 3000
): Promise<T | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      headers: COMMON_HEADERS,
      signal: controller.signal,
      cache: 'no-store' 
    });
    
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return await res.json() as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

function createResponse(data: GeoData, status: number = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60',
      'X-Geo-Source': data.source
    }
  });
}

// --- 服务提供商逻辑 ---

async function queryIpApiCo(ip: string): Promise<GeoData> {
  const data = await fetchService<IpApiCoResponse>(`https://ipapi.co/${ip}/json/`);
  if (!data || data.error || !data.country_code) throw new Error('Invalid response');
  
  return {
    source: 'ipapi.co',
    ip: data.ip || ip,
    country: data.country_code,
    countryName: data.country_name || data.country_code,
    city: data.city || '',
    region: data.region || '',
    timezone: data.timezone || '',
    latitude: data.latitude || null,
    longitude: data.longitude || null,
    accurate: true
  };
}

async function queryIpInfo(ip: string): Promise<GeoData> {
  const data = await fetchService<IpInfoResponse>(`https://ipinfo.io/${ip}/json`);
  if (!data || !data.country) throw new Error('Invalid response');
  
  const [lat, lon] = data.loc ? data.loc.split(',').map(Number) : [null, null];
  return {
    source: 'ipinfo',
    ip: data.ip || ip,
    country: data.country,
    countryName: data.country,
    city: data.city || '',
    region: data.region || '',
    timezone: data.timezone || '',
    latitude: lat,
    longitude: lon,
    accurate: true
  };
}

async function queryIpWhoIs(ip: string): Promise<GeoData> {
  const data = await fetchService<IpWhoIsResponse>(`https://ipwho.is/${ip}`);
  if (!data || !data.success || !data.country_code) throw new Error('Invalid response');

  return {
    source: 'ipwhois',
    ip: data.ip || ip,
    country: data.country_code,
    countryName: data.country || data.country_code,
    city: data.city || '',
    region: data.region || '',
    timezone: data.timezone?.id || '',
    latitude: data.latitude || null,
    longitude: data.longitude || null,
    accurate: true
  };
}

async function queryFreeIpApi(ip: string): Promise<GeoData> {
  const data = await fetchService<FreeIpApiResponse>(`https://freeipapi.com/api/json/${ip}`);
  if (!data || !data.countryCode) throw new Error('Invalid response');

  return {
    source: 'freeipapi',
    ip: data.ipAddress || ip,
    country: data.countryCode,
    countryName: data.countryName,
    city: data.cityName,
    region: data.regionName,
    timezone: data.timeZone,
    latitude: data.latitude,
    longitude: data.longitude,
    accurate: true
  };
}

// --- 主逻辑 ---

export async function GET(request: NextRequest) {
  // IP 提取
  let ip = '未知';
  
  const xff = request.headers.get('x-forwarded-for');
  const cfIp = request.headers.get('cf-connecting-ip');
  const realIp = request.headers.get('x-real-ip');

  if (xff) {
    const ips = xff.split(',').map(s => s.trim());
    const publicIp = ips.find(i => isValidPublicIP(i));
    if (publicIp) ip = publicIp;
  }
  
  if (!isValidPublicIP(ip)) {
    if (isValidPublicIP(cfIp)) ip = cfIp!;
    else if (isValidPublicIP(realIp)) ip = realIp!;
  }

  // 校验 IP 有效性
  if (!isValidPublicIP(ip)) {
    return createResponse({
      source: 'internal',
      ip,
      country: 'US',
      countryName: 'United States',
      city: '',
      region: '',
      timezone: '',
      latitude: null,
      longitude: null,
      accurate: false,
      error: 'Invalid or Private IP address detected'
    }, 200);
  }

  // 检查缓存
  const cachedData = ipCache.get(ip);
  if (cachedData) {
    return createResponse({ ...cachedData, source: `${cachedData.source} (cache)` });
  }

  // 检查去重
  let fetchPromise = inflightRequests.get(ip);

  if (!fetchPromise) {
    // 竞速策略
    const strategies = [
      queryIpApiCo(ip),
      queryIpInfo(ip),
      queryIpWhoIs(ip)
    ];

    fetchPromise = Promise.any(strategies)
      .catch(async () => {
        // 兜底服务
        return await queryFreeIpApi(ip);
      })
      .then(data => {
        ipCache.set(ip, data);
        return data;
      })
      .finally(() => {
        inflightRequests.delete(ip);
      });

    inflightRequests.set(ip, fetchPromise);
  }

  try {
    const result = await fetchPromise;
    return createResponse(result);
  } catch {
    return createResponse({
      source: 'fallback',
      ip,
      country: 'US',
      countryName: 'United States',
      city: '',
      region: '',
      timezone: '',
      latitude: null,
      longitude: null,
      accurate: false,
      error: 'All IP geolocation services failed'
    });
  }
}