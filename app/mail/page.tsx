'use client';

import { useState, useEffect, useCallback, useMemo, memo, useRef } from 'react';
import { tempMailList, isFavorite, toggleFavorite, type TempMail } from '@/lib/mailData';
import { NavigationMenu, MenuButton } from '@/components/NavigationMenu';
import { Icon } from '@/components/Icon';
import { haptic } from '@/lib/utils';

interface MailCardProps {
  mail: TempMail;
  isFav: boolean;
  onToggleFavorite: (mail: TempMail) => void;
  onCopy: (url: string, name: string) => void;
  copiedId: string | null;
}

const MailCard = memo(({ mail, isFav, onToggleFavorite, onCopy, copiedId }: MailCardProps) => {
  const isCopied = copiedId === mail.id;

  return (
    <div className="bg-black/30 rounded-[18px] overflow-hidden border border-white/20 shadow-xl p-4 space-y-3 transition-all duration-200 hover:border-white/30">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] font-bold text-white tracking-tight drop-shadow-md truncate">
            {mail.name}
          </h3>
          {mail.description && (
            <p className="text-[13px] text-white/60 mt-1 drop-shadow-sm">
              {mail.description}
            </p>
          )}
        </div>
        <button
          onClick={() => { haptic(30); onToggleFavorite(mail); }}
          className="shrink-0 p-2 rounded-full bg-white/10 active:bg-white/20 transition-all active:scale-95 touch-manipulation"
        >
          <Icon
            name={isFav ? 'star' : 'starOutline'}
            className={`w-5 h-5 ${isFav ? 'text-[#FFD700]' : 'text-white/60'}`}
          />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <a
          href={mail.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => haptic(20)}
          className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#007AFF]/90 to-[#0055b3]/90 rounded-[14px] text-white font-semibold text-[15px] text-center shadow-lg active:scale-[0.97] transition-all touch-manipulation truncate"
        >
          访问网站
        </a>
        <button
          onClick={() => { haptic(30); onCopy(mail.url, mail.id); }}
          className="shrink-0 p-2.5 bg-white/10 rounded-[14px] active:bg-white/20 transition-all active:scale-95 touch-manipulation relative overflow-hidden"
        >
          <div className={`transition-all duration-300 ${isCopied ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            <Icon name="copy" className="w-5 h-5 text-white/80" />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isCopied ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Icon name="check" className="w-5 h-5 text-[#34C759]" />
          </div>
        </button>
      </div>
    </div>
  );
});
MailCard.displayName = 'MailCard';

export default function MailPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const favs = new Set(
      tempMailList.filter(mail => isFavorite(mail.id)).map(mail => mail.id)
    );
    setFavorites(favs);
  }, []);

  // 搜索防抖
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 200);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchQuery]);

  const filteredMails = useMemo(() => {
    if (!debouncedQuery) return tempMailList;
    const query = debouncedQuery.toLowerCase();
    return tempMailList.filter(mail =>
      mail.name.toLowerCase().includes(query) ||
      mail.description?.toLowerCase().includes(query) ||
      mail.url.toLowerCase().includes(query)
    );
  }, [debouncedQuery]);

  const handleToggleFavorite = useCallback((mail: TempMail) => {
    const newIsFav = toggleFavorite(mail);
    setFavorites(prev => {
      const next = new Set(prev);
      if (newIsFav) {
        next.add(mail.id);
      } else {
        next.delete(mail.id);
      }
      return next;
    });
  }, []);

  const handleCopy = useCallback(async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch (error) {
      console.error('Copy failed:', error);
      haptic(50);
    }
  }, []);

  return (
    <div className="min-h-screen relative font-sans text-white pb-10 selection:bg-blue-400/30 overflow-x-hidden">
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 h-[52px] z-40 flex items-center justify-between px-4 pt-2 transition-all duration-300">
          <h1 className="text-[17px] font-semibold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            临时邮箱大全
          </h1>
          <MenuButton onClick={() => { haptic(20); setShowMenu(true); }} />
        </header>

        <main className="max-w-[420px] mx-auto px-5 pt-20 pb-10 space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon name="search" className="w-5 h-5 text-white/40" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索临时邮箱..."
              className="w-full pl-11 pr-10 py-3 bg-black/30 border border-white/20 rounded-[16px] text-[16px] text-white placeholder-white/40 focus:ring-2 focus:ring-white/30 focus:bg-black/40 transition-colors caret-[#007AFF] outline-none shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => { haptic(20); setSearchQuery(''); }}
                className="absolute inset-y-0 right-0 pr-4 flex items-center touch-manipulation active:scale-90 transition-transform"
              >
                <div className="bg-white/20 rounded-full p-1">
                  <Icon name="close" className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            )}
          </div>

          <div className="space-y-3">
            {filteredMails.length > 0 ? (
              filteredMails.map((mail) => (
                <MailCard
                  key={mail.id}
                  mail={mail}
                  isFav={favorites.has(mail.id)}
                  onToggleFavorite={handleToggleFavorite}
                  onCopy={handleCopy}
                  copiedId={copiedId}
                />
              ))
            ) : (
              <div className="text-center py-16 text-white/50 text-[15px]">
                未找到匹配的邮箱服务
              </div>
            )}
          </div>
        </main>
      </div>

      <NavigationMenu isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}
