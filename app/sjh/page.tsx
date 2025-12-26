'use client';

import { useState, useEffect, useCallback, useMemo, useRef, memo, lazy, Suspense } from 'react';
import { countries, generatePhoneNumber, searchCountries, type CountryData } from '@/lib/phoneData';
import { NavigationMenu, MenuButton } from '@/components/NavigationMenu';
import { Icon } from '@/components/Icon';
import { haptic } from '@/lib/utils';

// 动态导入国旗库（按需加载）
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

const STORAGE_KEY_COUNTRY = 'phone_generator_selected_country';
const STORAGE_KEY_COUNT = 'phone_generator_count';

interface CountrySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (country: CountryData) => void;
  currentCountry: CountryData | null;
}

const CountrySelector = memo(({ isOpen, onClose, onSelect, currentCountry }: CountrySelectorProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [page, setPage] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 50;

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setPage(0);
    }, 200);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchQuery]);

  const filteredCountries = useMemo(() => {
    return searchCountries(debouncedQuery);
  }, [debouncedQuery]);

  const paginatedCountries = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return filteredCountries.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCountries, page]);

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setPage(0);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [page]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="h-full flex flex-col">
        <div className="shrink-0 pt-safe px-4 pb-4">
          <div className="h-[52px] flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-white tracking-tight drop-shadow-md">
              选择国家/地区
            </h2>
            <button
              onClick={() => { haptic(20); onClose(); }}
              className="p-2 rounded-full bg-black/30 border border-white/20 active:bg-white/20 transition-all active:scale-95 touch-manipulation"
            >
              <Icon name="close" className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="search" className="w-5 h-5 text-white/40" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索国家或区号..."
              className="w-full pl-10 pr-10 py-3 bg-black/30 border border-white/20 rounded-[16px] text-[16px] text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 focus:bg-black/40 transition-colors caret-[#007AFF] outline-none shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => { haptic(20); setSearchQuery(''); }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center touch-manipulation active:scale-90 transition-transform"
              >
                <div className="bg-white/20 rounded-full p-1">
                  <Icon name="close" className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            )}
          </div>

          <div className="text-white/60 text-[13px] mt-2">
            找到 {filteredCountries.length} 个国家
          </div>
        </div>

        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pb-2">
          <div className="space-y-2">
            {paginatedCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => {
                  haptic(30);
                  onSelect(country);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-4 rounded-[16px] transition-all duration-200 active:scale-[0.98] touch-manipulation border ${
                  currentCountry?.id === country.id
                    ? 'bg-white/10 border-white/20 shadow-lg'
                    : 'bg-black/30 border-white/10 active:bg-white/15'
                }`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <CountryFlag countryCode={country.id} className="w-12 h-9 shrink-0" />
                  <div className="flex-1 min-w-0 text-left">
                    <div className="text-white font-semibold text-[16px] tracking-tight truncate">
                      {country.name}
                    </div>
                    <div className="text-white/60 text-[14px]">
                      {country.code}
                    </div>
                  </div>
                </div>
                {currentCountry?.id === country.id && (
                  <Icon name="check" className="w-5 h-5 text-[#34C759] shrink-0 ml-2" />
                )}
              </button>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="shrink-0 px-4 py-4 pb-safe bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm border-t border-white/10">
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => { haptic(20); setPage(p => Math.max(0, p - 1)); }}
                disabled={page === 0}
                className="px-6 py-3 bg-black/30 border border-white/20 rounded-[14px] text-white text-[15px] font-semibold disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all touch-manipulation shadow-lg"
              >
                上一页
              </button>
              <span className="text-white/80 text-[15px] font-medium min-w-[60px] text-center">
                {page + 1} / {totalPages}
              </span>
              <button
                onClick={() => { haptic(20); setPage(p => Math.min(totalPages - 1, p + 1)); }}
                disabled={page >= totalPages - 1}
                className="px-6 py-3 bg-black/30 border border-white/20 rounded-[14px] text-white text-[15px] font-semibold disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all touch-manipulation shadow-lg"
              >
                下一页
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
CountrySelector.displayName = 'CountrySelector';

export default function PhoneGeneratorPage() {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [generatedNumbers, setGeneratedNumbers] = useState<string[]>([]);
  const [count, setCount] = useState<number>(10);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [isCopiedAll, setIsCopiedAll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const ITEMS_PER_PAGE = 20;

  useEffect(() => {
    try {
      const savedCountryId = localStorage.getItem(STORAGE_KEY_COUNTRY);
      const savedCount = localStorage.getItem(STORAGE_KEY_COUNT);

      if (savedCountryId) {
        const country = countries.find(c => c.id === savedCountryId);
        if (country) {
          setSelectedCountry(country);
        } else {
          setSelectedCountry(countries[0]);
        }
      } else {
        setSelectedCountry(countries[0]);
      }

      if (savedCount) {
        const parsedCount = parseInt(savedCount, 10);
        if (parsedCount > 0 && parsedCount <= 10000) {
          setCount(parsedCount);
        }
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
      setSelectedCountry(countries[0]);
    }
  }, []);

  const handleSelectCountry = useCallback((country: CountryData) => {
    setSelectedCountry(country);
    setGeneratedNumbers([]);
    setPage(0);
    try {
      localStorage.setItem(STORAGE_KEY_COUNTRY, country.id);
    } catch (error) {
      console.error('Failed to save country:', error);
    }
  }, []);

  const handleGenerate = useCallback(() => {
    if (!selectedCountry) return;
    haptic(50);

    requestAnimationFrame(() => {
      if (count <= 2000) {
        const numbers = generatePhoneNumber(selectedCountry, count);
        setGeneratedNumbers(numbers);
      } else {
        const batchSize = 1000;
        const batches = Math.ceil(count / batchSize);
        const allNumbers: string[] = [];

        for (let i = 0; i < batches; i++) {
          const currentBatchSize = Math.min(batchSize, count - i * batchSize);
          const batchNumbers = generatePhoneNumber(selectedCountry, currentBatchSize);
          allNumbers.push(...batchNumbers);
        }

        setGeneratedNumbers(allNumbers);
      }
    });

    try {
      localStorage.setItem(STORAGE_KEY_COUNT, count.toString());
    } catch (error) {
      console.error('Failed to save count:', error);
    }
  }, [selectedCountry, count]);

  const handleCopy = useCallback(async (text: string, index: number) => {
    haptic(30);
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (error) {
      console.error('Copy failed:', error);
      haptic(50);
    }
  }, []);

  const handleCopyAll = useCallback(async () => {
    haptic(30);
    try {
      const text = generatedNumbers.join('\n');
      await navigator.clipboard.writeText(text);
      setIsCopiedAll(true);
      setTimeout(() => setIsCopiedAll(false), 1500);
    } catch (error) {
      console.error('Copy all failed:', error);
      haptic(50);
    }
  }, [generatedNumbers]);

  const handleDownload = useCallback(() => {
    haptic(30);
    if (generatedNumbers.length === 0) return;

    const text = generatedNumbers.join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
    a.download = `${selectedCountry?.name || 'phone'}_${timestamp}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [generatedNumbers, selectedCountry]);

  const paginatedNumbers = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return generatedNumbers.slice(start, start + ITEMS_PER_PAGE);
  }, [generatedNumbers, page]);

  const totalPages = Math.ceil(generatedNumbers.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen relative font-sans text-white pb-10 selection:bg-blue-400/30 overflow-x-hidden">
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 h-[52px] z-40 flex items-center justify-between px-4 pt-2 transition-all duration-300">
          <h1 className="text-[17px] font-semibold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            手机号生成器
          </h1>
          <MenuButton onClick={() => { haptic(20); setShowMenu(true); }} />
        </header>

        <main className="max-w-[420px] mx-auto px-5 pt-20 pb-10 space-y-6">
          <section className="bg-black/30 rounded-[20px] border border-white/20 shadow-xl overflow-hidden">
            <button
              onClick={() => { haptic(20); setShowCountrySelector(true); }}
              className="w-full p-4 flex items-center justify-between active:bg-white/15 transition-all duration-200 touch-manipulation"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {selectedCountry ? (
                  <CountryFlag countryCode={selectedCountry.id} className="w-14 h-10 shrink-0" />
                ) : (
                  <div className="shrink-0 w-14 h-10 bg-gradient-to-br from-[#007AFF] to-[#0055b3] rounded flex items-center justify-center shadow-lg">
                    <Icon name="globe" className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-white/70 text-[13px] mb-0.5">当前地区</div>
                  <div className="text-white font-bold text-[17px] tracking-tight truncate drop-shadow-md">
                    {selectedCountry?.name || '选择国家'}
                  </div>
                  <div className="text-white/80 text-[14px]">
                    {selectedCountry?.code || ''}
                  </div>
                </div>
              </div>
              <Icon name="chevronRight" className="w-5 h-5 text-white/70 shrink-0" />
            </button>
          </section>

          <section className="bg-black/30 rounded-[20px] border border-white/20 shadow-xl p-4 space-y-4">
            <div>
              <label className="text-white/80 text-[14px] font-medium mb-2 block">
                生成数量
              </label>
              <input
                type="number"
                value={count}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  if (val > 0 && val <= 10000) setCount(val);
                }}
                min="1"
                max="10000"
                className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-[14px] text-white text-[16px] focus:ring-2 focus:ring-white/30 outline-none transition-colors"
              />
              <div className="text-white/60 text-[12px] mt-1.5">
                最多支持生成 10000 个号码
              </div>
            </div>

            <button
              ref={buttonRef}
              onClick={handleGenerate}
              disabled={!selectedCountry}
              className="w-full py-4 rounded-[18px] shadow-[0_0_20px_rgba(0,122,255,0.4)] border border-white/20 flex items-center justify-center gap-2.5 touch-manipulation overflow-hidden relative transition-all duration-150 bg-gradient-to-b from-[#007AFF]/90 to-[#0055b3]/90 active:scale-[0.92] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
              style={{
                transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease'
              }}
            >
              <Icon name="sparkles" className="w-5 h-5 text-white/90 drop-shadow-sm" />
              <span className="text-[17px] font-semibold tracking-tight text-white drop-shadow-md">
                生成号码
              </span>
            </button>
          </section>

          {generatedNumbers.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-semibold text-[16px] drop-shadow-md">
                  生成结果 ({generatedNumbers.length})
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyAll}
                    className="p-2 bg-black/30 border border-white/20 rounded-[12px] active:bg-white/20 transition-all active:scale-95 touch-manipulation relative overflow-hidden"
                  >
                    <div className={`transition-all duration-300 ${isCopiedAll ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                      <Icon name="copy" className="w-5 h-5 text-white/80" />
                    </div>
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isCopiedAll ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                      <Icon name="check" className="w-5 h-5 text-[#34C759]" />
                    </div>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 bg-black/30 border border-white/20 rounded-[12px] active:bg-white/20 transition-all active:scale-95 touch-manipulation"
                  >
                    <Icon name="download" className="w-5 h-5 text-white/80" />
                  </button>
                </div>
              </div>

              <div className="bg-black/30 rounded-[20px] border border-white/20 shadow-xl overflow-hidden">
                <div className="divide-y divide-white/10">
                  {paginatedNumbers.map((number, idx) => {
                    const actualIndex = page * ITEMS_PER_PAGE + idx;
                    const isCopied = copiedIndex === actualIndex;
                    return (
                      <button
                        key={actualIndex}
                        onClick={() => handleCopy(number, actualIndex)}
                        className="w-full px-4 py-3 flex items-center justify-between active:bg-white/20 active:scale-[0.97] transition-all duration-150 touch-manipulation hover:bg-white/10"
                      >
                        <span className="text-white font-mono text-[15px] truncate">
                          {number}
                        </span>
                        <div className="relative w-5 h-5 ml-3 shrink-0">
                          <div className={`absolute inset-0 transition-all duration-300 ${isCopied ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                            <Icon name="copy" className="w-5 h-5 text-white/60" />
                          </div>
                          <div className={`absolute inset-0 transition-all duration-300 ${isCopied ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                            <Icon name="check" className="w-5 h-5 text-[#34C759]" />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => { haptic(20); setPage(p => Math.max(0, p - 1)); }}
                    disabled={page === 0}
                    className="px-4 py-2 bg-black/30 border border-white/20 rounded-[12px] text-white text-[14px] font-medium disabled:opacity-30 active:scale-95 transition-all touch-manipulation"
                  >
                    上一页
                  </button>
                  <span className="text-white/60 text-[14px]">
                    {page + 1} / {totalPages}
                  </span>
                  <button
                    onClick={() => { haptic(20); setPage(p => Math.min(totalPages - 1, p + 1)); }}
                    disabled={page >= totalPages - 1}
                    className="px-4 py-2 bg-black/30 border border-white/20 rounded-[12px] text-white text-[14px] font-medium disabled:opacity-30 active:scale-95 transition-all touch-manipulation"
                  >
                    下一页
                  </button>
                </div>
              )}
            </section>
          )}

          <footer className="pt-4 text-center space-y-3">
            <p className="text-[12px] text-white/60 tracking-tight drop-shadow-md">
              支持 {countries.length} 个国家/地区
            </p>
            <p className="text-[11px] text-white/50">
              生成的号码仅供测试使用
            </p>
          </footer>
        </main>
      </div>

      <CountrySelector
        isOpen={showCountrySelector}
        onClose={() => setShowCountrySelector(false)}
        onSelect={handleSelectCountry}
        currentCountry={selectedCountry}
      />

      <NavigationMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />

      <style jsx global>{`
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}