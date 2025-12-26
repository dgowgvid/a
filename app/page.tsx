'use client';

import { useState, useEffect, useCallback, memo, useRef, useMemo } from 'react';
import { FreeNoticeModal } from './FreeNoticeModal';
import { NavigationMenu, MenuButton } from '@/components/NavigationMenu';
import { countries, CountryConfig } from '@/lib/countryData';
import { Icon } from '@/components/Icon';
import { haptic } from '@/lib/utils';
import {
  generateName,
  generateBirthday,
  generatePhone,
  generatePassword,
  generateEmail,
  getCountryConfig,
  getAllDomains
} from '@/lib/generator';

// 动态导入国旗库
const loadFlagIcon = async (countryCode: string) => {
  try {
    const flags = await import('country-flag-icons/react/3x2');
    const FlagComponent = flags[countryCode as keyof typeof flags];
    if (FlagComponent && typeof FlagComponent === 'function') {
      return FlagComponent;
    }
    return null;
  } catch {
    return null;
  }
};

const CountryFlag = memo(({ countryCode, className = "w-8 h-6" }: { countryCode: string; className?: string }) => {
  const [FlagComponent, setFlagComponent] = useState<React.ComponentType<any> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    loadFlagIcon(countryCode)
      .then((component) => {
        if (component) {
          setFlagComponent(() => component);
        } else {
          setFlagComponent(null);
        }
      })
      .catch(() => {
        setFlagComponent(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [countryCode]);

  if (isLoading || !FlagComponent) {
    return (
      <div className={`${className} bg-gradient-to-br from-[#007AFF] to-[#0055b3] rounded flex items-center justify-center`}>
        <Icon name="globe" className="w-4 h-4 text-white" />
      </div>
    );
  }

  return (
    <div className={`${className} rounded overflow-hidden shadow-md border border-white/20`}>
      <FlagComponent className="w-full h-full object-cover" title={countryCode} />
    </div>
  );
});
CountryFlag.displayName = 'CountryFlag';

// --- 类型定义 ---
interface UserInfo {
  firstName: string;
  lastName: string;
  birthday: string;
  phone: string;
  password: string;
  email: string;
}

// --- 信息行组件 ---
const InfoRow = memo(({ label, value, onCopy, isCopied, isLast = false }: {
  label: string;
  value: string;
  onCopy: () => void;
  isCopied: boolean;
  isLast?: boolean;
}) => (
  <div 
    onClick={onCopy}
    className={`group relative flex items-center justify-between py-4 pl-5 pr-5 cursor-pointer transition-all duration-200 touch-manipulation active:scale-[0.99] ${
      isCopied ? 'bg-blue-500/20' : 'bg-transparent active:bg-white/15'
    }`}
  >
    <span className="text-[15px] font-medium text-white/80 w-20 shrink-0 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
      {label}
    </span>
    
    <div className="flex items-center gap-3 min-w-0 flex-1 justify-end h-6 relative overflow-hidden">
      <span 
        className={`absolute right-0 text-[17px] font-bold truncate select-all tracking-tight transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${
          isCopied ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100 text-white'
        }`}
      >
        {value || '---'}
      </span>

      <div 
        className={`absolute right-0 flex items-center gap-1.5 transition-all duration-300 ${
          isCopied ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        <div className="bg-[#34C759] rounded-full p-0.5 shadow-[0_0_8px_rgba(52,199,89,0.9)]">
          <Icon name="check" className="w-3 h-3 text-white" />
        </div>
        <span className="text-[15px] font-semibold text-[#34C759] drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
          已复制
        </span>
      </div>
    </div>
    
    {!isLast && <div className="absolute bottom-0 left-5 right-0 h-[0.5px] bg-white/20" />}
  </div>
));
InfoRow.displayName = 'InfoRow';

// --- 底部弹窗 ---
const BottomSheet = memo(({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  rightAction 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
  children: React.ReactNode;
  rightAction?: React.ReactNode;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity duration-300 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div 
        className="relative w-full max-w-md bg-black/40 border border-white/20 rounded-t-[24px] sm:rounded-[24px] max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
        style={{ 
          animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform'
        }}
      >
        <div className="p-4 border-b border-white/10 sticky top-0 z-10 shrink-0 bg-black/40 backdrop-blur-xl">
          <div className="w-10 h-1.5 bg-white/30 rounded-full mx-auto mb-4" />
          <div className="relative flex items-center justify-center min-h-[24px]">
            <h3 className="text-[17px] font-semibold text-white tracking-tight drop-shadow-md">
              {title}
            </h3>
            {rightAction ? (
              <div className="absolute right-0 top-1/2 -translate-y-1/2">{rightAction}</div>
            ) : (
              <button 
                onClick={onClose}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-1.5 rounded-full text-white/60 hover:bg-white/20 active:scale-95 transition-all touch-manipulation"
              >
                <Icon name="close" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
          {children}
        </div>
      </div>
    </div>
  );
});
BottomSheet.displayName = 'BottomSheet';

// --- 列表项 ---
const ListItem = memo(({ label, isSelected, onClick, icon }: { 
  label: string; 
  isSelected: boolean; 
  onClick: () => void; 
  icon?: string;
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 active:scale-[0.98] touch-manipulation border ${
      isSelected 
        ? 'bg-white/10 border-white/10 shadow-lg text-[#409CFF] font-semibold' 
        : 'bg-transparent border-transparent text-white/80 active:bg-white/10'
    }`}
  >
    <div className="flex items-center gap-3">
      {icon && (
        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#007AFF]/20' : 'bg-white/10'}`}>
          <Icon name={icon} className={`w-4 h-4 ${isSelected ? 'text-[#409CFF]' : 'text-white/50'}`} />
        </div>
      )}
      <span className="text-[16px] tracking-tight text-left drop-shadow-sm">{label}</span>
    </div>
    {isSelected && <Icon name="check" className="w-5 h-5 text-[#409CFF]" />}
  </button>
));
ListItem.displayName = 'ListItem';

// --- 国家和域名列表 ---
const CountryList = memo(({ countries, selectedCode, onSelect }: {
  countries: CountryConfig[];
  selectedCode: string;
  onSelect: (c: CountryConfig) => void;
}) => (
  <div className="p-4 space-y-2">
    {countries.map((country) => (
      <button
        key={country.code}
        onClick={() => onSelect(country)}
        className={`w-full flex items-center justify-between p-4 rounded-[16px] transition-all duration-200 active:scale-[0.98] touch-manipulation border ${
          selectedCode === country.code
            ? 'bg-white/10 border-white/20 shadow-lg'
            : 'bg-black/30 border-white/10 active:bg-white/15'
        }`}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <CountryFlag countryCode={country.code} className="w-10 h-7 shrink-0" />
          <span className="text-white font-semibold text-[16px] tracking-tight truncate">
            {country.name}
          </span>
        </div>
        {selectedCode === country.code && (
          <Icon name="check" className="w-5 h-5 text-[#34C759] shrink-0 ml-2" />
        )}
      </button>
    ))}
  </div>
));
CountryList.displayName = 'CountryList';

const DomainList = memo(({ allDomains, selectedDomain, onSelect }: {
  allDomains: string[];
  selectedDomain: string;
  onSelect: (d: string) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(50); // 初始只显示 50 个
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 搜索防抖
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setVisibleCount(50); // 重置显示数量
    }, 300);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchQuery]);

  // 过滤域名（使用防抖后的查询）
  const filteredDomains = useMemo(() => {
    if (!debouncedQuery) return allDomains;
    const query = debouncedQuery.toLowerCase();
    return allDomains.filter(d => d.toLowerCase().includes(query));
  }, [allDomains, debouncedQuery]);

  // 可见域名（分页加载）
  const visibleDomains = useMemo(() => {
    return filteredDomains.slice(0, visibleCount);
  }, [filteredDomains, visibleCount]);

  // IntersectionObserver 懒加载下一批
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredDomains.length) {
          setVisibleCount(prev => Math.min(prev + 50, filteredDomains.length));
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [visibleCount, filteredDomains.length]);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pb-2 sticky top-0 z-10 bg-black/40 backdrop-blur-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="w-4 h-4 text-white/40" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索域名"
            className="w-full pl-9 pr-8 py-2 bg-black/30 border border-white/10 rounded-[10px] text-[16px] text-white placeholder-white/30 focus:ring-2 focus:ring-white/20 focus:bg-black/40 transition-colors caret-[#007AFF] outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation active:scale-90 transition-transform"
            >
              <div className="bg-white/20 rounded-full p-0.5">
                <Icon name="close" className="w-3 h-3 text-white" />
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="p-4 pt-2 space-y-2" style={{ contain: 'layout style paint' }}>
        {!debouncedQuery && (
          <ListItem
            label="随机域名"
            isSelected={selectedDomain === 'random'}
            onClick={() => onSelect('random')}
            icon="sparkles"
          />
        )}
        {visibleDomains.map((domain) => (
          <ListItem
            key={domain}
            label={domain}
            isSelected={selectedDomain === domain}
            onClick={() => onSelect(domain)}
          />
        ))}
        {visibleCount < filteredDomains.length && (
          <div ref={sentinelRef} className="py-4 text-center">
            <div className="inline-block w-5 h-5 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
        )}
        {filteredDomains.length === 0 && debouncedQuery && (
          <div className="text-center py-8 text-white/30 text-sm">无匹配结果</div>
        )}
      </div>
    </div>
  );
});
DomainList.displayName = 'DomainList';

// --- 主组件 ---
export default function GlassStylePage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryConfig>(countries[0]);
  const [selectedDomain, setSelectedDomain] = useState<string>('random');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: '', lastName: '', birthday: '', phone: '', password: '', email: ''
  });
  const [showCountrySheet, setShowCountrySheet] = useState(false);
  const [showDomainSheet, setShowDomainSheet] = useState(false);
  const [ipInfo, setIpInfo] = useState({ ip: '...', country: 'US' });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isImmersive, setIsImmersive] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [inboxStatus, setInboxStatus] = useState<'idle' | 'opening'>('idle');
  const [showMenu, setShowMenu] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const copyTimerRef = useRef<NodeJS.Timeout | null>(null);

  const toggleImmersive = useCallback(() => {
    haptic(20);
    setIsImmersive(prev => !prev);
  }, []);

  const copyToClipboard = useCallback(async (text: string, label: string) => {
    haptic(30);
    try {
      await navigator.clipboard.writeText(text);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      setCopiedField(label);
      copyTimerRef.current = setTimeout(() => setCopiedField(null), 1500);
    } catch { 
      haptic(50); 
    }
  }, []);

  const generate = useCallback(() => {
    haptic(50);
    setCopiedField(null);
    
    try {
      const { firstName, lastName } = generateName(selectedCountry.code);
      const birthday = generateBirthday();
      const phone = generatePhone(selectedCountry);
      const password = generatePassword();
      const customDomain = selectedDomain === 'random' ? undefined : selectedDomain;
      const email = generateEmail(firstName, lastName, customDomain);
      setUserInfo({ firstName, lastName, birthday, phone, password, email });
    } catch (error) { 
      console.error(error); 
    }
  }, [selectedCountry, selectedDomain]);
  
  const handleInboxClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (inboxStatus === 'opening') return;
    haptic(30);
    setInboxStatus('opening');
    const emailName = userInfo.email.split('@')[0];
    setTimeout(() => {
      window.open(`https://yopmail.net/?login=${emailName}`, '_blank');
      setInboxStatus('idle');
    }, 600);
  }, [userInfo.email, inboxStatus]);

  useEffect(() => {
    let isMounted = true;
    const initializeApp = async () => {
      try {
        const response = await fetch('/api/ip-info');
        const data = await response.json();
        if (!isMounted) return;
        setIpInfo({ ip: data.ip || '未知', country: data.country || 'US' });
        if (data.country && data.accurate) {
          const detectedCountry = getCountryConfig(data.country);
          if (detectedCountry) setSelectedCountry(detectedCountry);
        }
        setIsInitialized(true);
      } catch (error) { 
        if (isMounted) { 
          setIpInfo({ ip: '检测失败', country: 'US' }); 
          setIsInitialized(true); 
        } 
      }
    };
    initializeApp();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (isInitialized && !userInfo.firstName) {
      try {
        const { firstName, lastName } = generateName(selectedCountry.code);
        const birthday = generateBirthday();
        const phone = generatePhone(selectedCountry);
        const password = generatePassword();
        const customDomain = selectedDomain === 'random' ? undefined : selectedDomain;
        const email = generateEmail(firstName, lastName, customDomain);
        setUserInfo({ firstName, lastName, birthday, phone, password, email });
      } catch (e) { 
        console.error(e); 
      }
    }
  }, [isInitialized, userInfo.firstName, selectedCountry, selectedDomain]);

  useEffect(() => {
    if (isInitialized && userInfo.firstName) generate();
  }, [selectedCountry.code]);

  const allDomains = useMemo(() => getAllDomains(), []);
  const displayDomain = selectedDomain === 'random' ? '随机' : selectedDomain;

  const handleCountrySelect = useCallback((country: CountryConfig) => {
    haptic(20); 
    setSelectedCountry(country); 
    setShowCountrySheet(false);
  }, []);

  const handleDomainSelect = useCallback((domain: string) => {
    haptic(20); 
    setSelectedDomain(domain); 
    setShowDomainSheet(false);
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-white pb-10 selection:bg-blue-400/30 overflow-x-hidden">
      
      {/* 免费提示弹窗 */}
      <FreeNoticeModal />

      {/* 沉浸模式恢复层 */}
      {isImmersive && (
        <div 
          className="fixed inset-0 z-30 cursor-pointer touch-manipulation" 
          onClick={() => setIsImmersive(false)}
        />
      )}

      {/* 内容层 */}
      <div className="relative z-10">
        
        {/* 头部 */}
        <header className="fixed top-0 left-0 right-0 h-[52px] z-40 flex items-center justify-between px-4 pt-2 transition-all duration-300">
          <h1
            onClick={toggleImmersive}
            className={`text-[17px] font-semibold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] cursor-pointer select-none transition-all duration-300 active:scale-95 touch-manipulation ${
              isImmersive ? 'opacity-50' : 'opacity-100'
            }`}
          >
            脸书小助手
          </h1>

          <div
            className={`flex items-center gap-2 transition-all duration-500 ${
              isImmersive ? 'opacity-0 translate-x-10 pointer-events-none' : 'opacity-100 translate-x-0'
            }`}
          >
            <div className="flex items-center gap-1.5 pl-2 pr-2.5 py-1 rounded-full bg-black/40 border border-white/20 shadow-lg">
              <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_6px_rgba(52,199,89,1)] animate-pulse" />
              <span className="text-[11px] font-semibold text-white/95 font-mono tracking-tight drop-shadow-md">
                {ipInfo.ip}
              </span>
            </div>
            <MenuButton onClick={() => { haptic(20); setShowMenu(true); }} />
          </div>
        </header>

        {/* 主内容 */}
        <main 
          className={`max-w-[420px] mx-auto px-5 pt-24 pb-10 space-y-6 transition-all duration-500 ${
            isImmersive 
              ? 'opacity-0 translate-y-[100px] pointer-events-none scale-95' 
              : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          
          {!isInitialized ? (
            <div className="flex flex-col items-center justify-center py-32 space-y-4">
              <div className="w-8 h-8 border-[3px] border-white/20 border-t-[#007AFF] rounded-full animate-spin drop-shadow-lg" />
              <p className="text-white/60 text-sm">加载中...</p>
            </div>
          ) : (
            <>
              {/* 信息卡片 */}
              <section className="bg-black/30 rounded-[20px] overflow-hidden border border-white/20 shadow-xl">
                <InfoRow label="姓氏" value={userInfo.lastName} onCopy={() => copyToClipboard(userInfo.lastName, '姓氏')} isCopied={copiedField === '姓氏'} />
                <InfoRow label="名字" value={userInfo.firstName} onCopy={() => copyToClipboard(userInfo.firstName, '名字')} isCopied={copiedField === '名字'} />
                <InfoRow label="生日" value={userInfo.birthday} onCopy={() => copyToClipboard(userInfo.birthday, '生日')} isCopied={copiedField === '生日'} />
                <InfoRow label="手机号" value={userInfo.phone} onCopy={() => copyToClipboard(userInfo.phone, '手机号')} isCopied={copiedField === '手机号'} />
                <InfoRow label="密码" value={userInfo.password} onCopy={() => copyToClipboard(userInfo.password, '密码')} isCopied={copiedField === '密码'} />
                
                <div className="relative flex flex-col py-4 pl-5 pr-5">
                  <div 
                    className="flex items-center justify-between mb-3 cursor-pointer touch-manipulation active:scale-[0.99] transition-transform" 
                    onClick={() => copyToClipboard(userInfo.email, '邮箱')}
                  >
                    <span className="text-[15px] font-medium text-white/80 w-20 shrink-0 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      邮箱
                    </span>
                    
                    <div className="flex items-center gap-3 min-w-0 flex-1 justify-end h-6 relative overflow-hidden">
                      <span 
                        className={`absolute right-0 text-[17px] font-bold truncate select-all tracking-tight transition-all duration-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
                          copiedField === '邮箱' ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100 text-white'
                        }`}
                      >
                        {userInfo.email}
                      </span>
                      <div 
                        className={`absolute right-0 flex items-center gap-1.5 transition-all duration-300 ${
                          copiedField === '邮箱' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-90 pointer-events-none'
                        }`}
                        style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
                      >
                        <div className="bg-[#34C759] rounded-full p-0.5 shadow-[0_0_8px_rgba(52,199,89,0.8)]">
                          <Icon name="check" className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[15px] font-semibold text-[#34C759] drop-shadow-md">已复制</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-1">
                    <button
                      onClick={handleInboxClick}
                      className={`inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-[13px] font-semibold transition-all duration-300 active:scale-95 touch-manipulation overflow-hidden relative border shadow-lg ${
                        inboxStatus === 'opening' 
                          ? 'bg-[#34C759]/40 border-[#34C759]/50 text-[#4ADE80]' 
                          : 'bg-[#007AFF]/30 border-[#007AFF]/40 text-[#409CFF] active:bg-[#007AFF]/50'
                      }`}
                    >
                      <div className={`flex items-center gap-1.5 transition-all duration-300 ${
                        inboxStatus === 'opening' ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                      }`}>
                        <Icon name="inbox" className="w-3.5 h-3.5" />
                        <span className="drop-shadow-sm">查看收件箱</span>
                      </div>
                      <div className={`absolute inset-0 flex items-center justify-center gap-1.5 transition-all duration-300 ${
                        inboxStatus === 'opening' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      }`}>
                        <Icon name="open" className="w-3.5 h-3.5" />
                        已打开
                      </div>
                    </button>
                  </div>
                </div>
              </section>

              {/* 生成按钮 */}
              <button
                ref={buttonRef}
                onClick={generate}
                className="w-full py-4 rounded-[18px] shadow-[0_0_20px_rgba(0,122,255,0.4)] border border-white/20 flex items-center justify-center gap-2.5 touch-manipulation overflow-hidden relative transition-all duration-200 bg-gradient-to-b from-[#007AFF]/90 to-[#0055b3]/90 active:scale-[0.96]"
              >
                <Icon name="sparkles" className="w-5 h-5 text-white/90 drop-shadow-sm" />
                <span className="text-[17px] font-semibold tracking-tight text-white drop-shadow-md">
                  生成新身份
                </span>
              </button>

              {/* 设置区域 */}
              <section>
                <div className="pl-5 mb-2 text-[13px] font-medium text-white/80 uppercase tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  生成设置
                </div>
                <div className="bg-black/30 rounded-[18px] overflow-hidden border border-white/20 shadow-xl">
                  <button
                    onClick={() => { haptic(20); setShowCountrySheet(true); }}
                    className="w-full flex items-center justify-between py-4 pl-5 pr-4 active:bg-white/15 transition-all duration-200 touch-manipulation active:scale-[0.99]"
                  >
                    <span className="text-[16px] font-medium text-white/90 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      选择地区
                    </span>
                    <div className="flex items-center gap-2">
                      <CountryFlag countryCode={selectedCountry.code} className="w-7 h-5" />
                      <span className="text-[16px] text-white/90 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {selectedCountry.name}
                      </span>
                      <Icon name="chevronRight" className="w-4 h-4 text-white/70 transition-transform duration-300 drop-shadow-md" />
                    </div>
                  </button>
                  <div className="ml-5 h-[0.5px] bg-white/20" />
                  <button
                    onClick={() => { haptic(20); setShowDomainSheet(true); }}
                    className="w-full flex items-center justify-between py-4 pl-5 pr-4 active:bg-white/15 transition-all duration-200 touch-manipulation active:scale-[0.99]"
                  >
                    <span className="text-[16px] font-medium text-white/90 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      邮箱域名
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[16px] text-white/90 tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {displayDomain}
                      </span>
                      <Icon name="chevronRight" className="w-4 h-4 text-white/70 transition-transform duration-300 drop-shadow-md" />
                    </div>
                  </button>
                </div>
              </section>

              {/* 页脚 */}
              <footer className="pt-4 pb-8 text-center space-y-4">
                <a 
                  href="https://t.me/fang180" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-[14px] text-[#409CFF] hover:text-[#60aeff] font-bold transition-all active:scale-95 py-2 px-4 rounded-full bg-black/40 touch-manipulation shadow-lg border border-white/10"
                >
                  <Icon name="link" className="w-4 h-4" />
                  <span className="drop-shadow-md">加入 Telegram 频道</span>
                </a>
                <p className="text-[12px] text-white/80 font-medium tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  支持 {countries.length} 个国家 • {allDomains.length} 个域名
                </p>
              </footer>
            </>
          )}
        </main>
      </div>

      {/* 底部弹窗 */}
      <BottomSheet 
        isOpen={showCountrySheet} 
        onClose={() => setShowCountrySheet(false)} 
        title="选择地区"
      >
        <CountryList 
          countries={countries} 
          selectedCode={selectedCountry.code} 
          onSelect={handleCountrySelect} 
        />
      </BottomSheet>

      <BottomSheet 
        isOpen={showDomainSheet} 
        onClose={() => setShowDomainSheet(false)} 
        title="选择域名"
        rightAction={
          <button 
            onClick={() => setShowDomainSheet(false)} 
            className="text-[#409CFF] font-medium text-[15px] p-2 -mr-2 touch-manipulation hover:text-white transition-colors active:scale-95"
          >
            完成
          </button>
        }
      >
        <DomainList 
          allDomains={allDomains} 
          selectedDomain={selectedDomain} 
          onSelect={handleDomainSelect} 
        />
      </BottomSheet>

      {/* 导航菜单 */}
      <NavigationMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />

      {/* 样式 */}
      <style jsx global>{`
        * {
          -webkit-tap-highlight-color: transparent;
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}