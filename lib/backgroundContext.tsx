'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface BackgroundContextType {
  backgroundUrl: string;
  isLoaded: boolean;
  setLoaded: () => void;
  refreshBackground: () => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

const BG_CACHE_KEY = 'app_background_cache';
const BG_EXPIRE_TIME = 24 * 60 * 60 * 1000; // 24小时过期
const LOAD_TIMEOUT = 8000; // 8秒超时

// 本地备用渐变背景（高质量美观的渐变）
const FALLBACK_GRADIENTS = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
];

interface BackgroundCache {
  url: string;
  timestamp: number;
  type: 'image' | 'gradient';
  value: string;
}

// 获取缓存的背景
function getCachedBackground(): BackgroundCache | null {
  if (typeof window === 'undefined') return null;

  try {
    const cached = localStorage.getItem(BG_CACHE_KEY);
    if (!cached) return null;

    const data: BackgroundCache = JSON.parse(cached);
    const now = Date.now();

    // 检查是否过期
    if (now - data.timestamp > BG_EXPIRE_TIME) {
      localStorage.removeItem(BG_CACHE_KEY);
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

// 保存背景到缓存
function setCachedBackground(type: 'image' | 'gradient', value: string): void {
  if (typeof window === 'undefined') return;

  try {
    const data: BackgroundCache = {
      url: value,
      timestamp: Date.now(),
      type,
      value
    };
    localStorage.setItem(BG_CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to cache background:', error);
  }
}

// 获取随机渐变背景
function getRandomGradient(): string {
  const index = Math.floor(Math.random() * FALLBACK_GRADIENTS.length);
  return FALLBACK_GRADIENTS[index];
}

// 带超时的图片加载
function loadImageWithTimeout(url: string, timeout: number): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    let timeoutId: NodeJS.Timeout;
    let resolved = false;

    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId);
      img.onload = null;
      img.onerror = null;
    };

    const handleSuccess = () => {
      if (resolved) return;
      resolved = true;
      cleanup();
      resolve(url);
    };

    const handleError = () => {
      if (resolved) return;
      resolved = true;
      cleanup();
      resolve(null);
    };

    img.onload = handleSuccess;
    img.onerror = handleError;

    timeoutId = setTimeout(() => {
      if (resolved) return;
      resolved = true;
      cleanup();
      resolve(null);
    }, timeout);

    img.src = url;
  });
}

// 尝试从多个源加载图片
async function tryLoadImageFromSources(): Promise<string | null> {
  const timestamp = Date.now();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const size = isMobile ? 'w=800' : 'w=1920';

  // 多个图片源
  const sources = [
    `https://loliapi.com/acg/?${size}&${timestamp}`,
    `https://api.vvhan.com/api/wallpaper/acg?type=json&${timestamp}`,
    `https://api.ixiaowai.cn/api/api.php?${timestamp}`,
  ];

  for (const source of sources) {
    try {
      const result = await loadImageWithTimeout(source, LOAD_TIMEOUT);
      if (result) return result;
    } catch {
      continue;
    }
  }

  return null;
}

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [backgroundUrl, setBackgroundUrl] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const initBackground = async () => {
      // 1. 先检查缓存
      const cached = getCachedBackground();

      if (cached) {
        if (mounted) {
          if (cached.type === 'gradient') {
            setBackgroundUrl(`gradient:${cached.value}`);
            setIsLoaded(true);
          } else {
            setBackgroundUrl(cached.url);
          }
        }
        return;
      }

      // 2. 立即显示随机渐变背景（瞬间加载，用户体验好）
      const gradient = getRandomGradient();
      if (mounted) {
        setBackgroundUrl(`gradient:${gradient}`);
        setIsLoaded(true);
        setCachedBackground('gradient', gradient);
      }

      // 3. 后台尝试加载真实图片（不阻塞界面）
      try {
        const imageUrl = await tryLoadImageFromSources();
        if (imageUrl && mounted) {
          setBackgroundUrl(imageUrl);
          setIsLoaded(false);
          setCachedBackground('image', imageUrl);
        }
      } catch (error) {
        console.error('Failed to load background image:', error);
        // 保持渐变背景
      }
    };

    initBackground();

    return () => {
      mounted = false;
    };
  }, []);

  const setLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const refreshBackground = useCallback(async () => {
    setIsLoaded(false);

    // 尝试加载新图片
    const imageUrl = await tryLoadImageFromSources();

    if (imageUrl) {
      setBackgroundUrl(imageUrl);
      setCachedBackground('image', imageUrl);
    } else {
      // 如果失败，使用新的渐变背景
      const gradient = getRandomGradient();
      setBackgroundUrl(`gradient:${gradient}`);
      setCachedBackground('gradient', gradient);
      setIsLoaded(true);
    }
  }, []);

  return (
    <BackgroundContext.Provider value={{ backgroundUrl, isLoaded, setLoaded, refreshBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}
