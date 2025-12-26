import { useState, useEffect, useCallback, memo } from 'react';
import { Icon } from '@/components/Icon';
import { haptic } from '@/lib/utils';

// Cookie 操作函数
const setCookie = (name: string, value: string, days: number = 365) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// 免费提示弹窗组件
export const FreeNoticeModal = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkNoticeStatus = () => {
      const shown = getCookie('freeNoticeShown');
      if (shown !== 'true') {
        setIsOpen(true);
      }
      setIsLoading(false);
    };
    checkNoticeStatus();
  }, []);

  const handleClose = useCallback(() => {
    haptic(20);
    setIsOpen(false);
  }, []);

  const handleDontShowAgain = useCallback(() => {
    haptic(30);
    setIsOpen(false);
    setCookie('freeNoticeShown', 'true', 365);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { 
        document.body.style.overflow = ''; 
      };
    }
  }, [isOpen]);

  if (isLoading || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4">
      <div 
        className="absolute inset-0 bg-black/20 transition-opacity duration-300"
        style={{
          animation: 'fadeIn 0.3s ease-out'
        }}
      />
      
      <div 
        className="relative w-full max-w-[360px] sm:max-w-sm bg-black/10 backdrop-blur-[6px] border border-white/30 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col"
        style={{ 
          animation: 'powerZoomIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          willChange: 'auto'
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-48 h-40 sm:h-48 bg-gradient-to-b from-[#007AFF]/15 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-tl from-[#34C759]/15 to-transparent rounded-full blur-2xl" />
        </div>

        <div className="relative p-4 sm:p-5 md:p-8 pt-6 sm:pt-8 md:pt-10 space-y-4 sm:space-y-5 md:space-y-6 overflow-y-auto flex-1">
          <div className="flex justify-center">
            <img 
              src="/favicon.ico" 
              alt="logo" 
              className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 drop-shadow-2xl"
            />
          </div>

          <div className="text-center space-y-1.5 sm:space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              欢迎使用
            </h2>
            <p className="text-white/70 text-sm sm:text-[15px] md:text-[16px]">
              无广告 • 无限制
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3 bg-white/5 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 md:p-5 border border-white/10">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="bg-[#34C759]/20 p-1.5 sm:p-2 rounded-lg sm:rounded-xl shrink-0 mt-0.5">
                <Icon name="check" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#34C759]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-[15px] md:text-[16px] mb-0.5 sm:mb-1">
                  无广告干扰
                </h3>
                <p className="text-white/60 text-xs sm:text-[13px] md:text-[14px] leading-relaxed">
                  纯净体验,专注使用
                </p>
              </div>
            </div>
            
            <div className="h-[0.5px] bg-white/10" />
            
            <div className="flex items-start gap-2.5 sm:gap-3">
              <div className="bg-[#007AFF]/20 p-1.5 sm:p-2 rounded-lg sm:rounded-xl shrink-0 mt-0.5">
                <Icon name="gift" className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#007AFF]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm sm:text-[15px] md:text-[16px] mb-0.5 sm:mb-1">
                  无使用限制
                </h3>
                <p className="text-white/60 text-xs sm:text-[13px] md:text-[14px] leading-relaxed">
                  随心使用,畅享所有功能
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-2.5 md:space-y-3 pb-safe">
            <button
              onClick={handleClose}
              className="w-full py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-[#007AFF] to-[#0055b3] rounded-[14px] sm:rounded-[16px] text-white font-semibold text-[15px] sm:text-[16px] md:text-[17px] shadow-lg active:scale-[0.97] transition-all touch-manipulation"
            >
              开始使用
            </button>
            
            <a
              href="https://t.me/fang180"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => haptic(20)}
              className="block w-full py-2.5 sm:py-3 text-white/60 hover:text-white/80 text-[13px] sm:text-[14px] md:text-[15px] font-medium transition-colors active:scale-95 touch-manipulation text-center"
            >
              加入交流群 @fang180
            </a>
            
            <button
              onClick={handleDontShowAgain}
              className="w-full py-2.5 sm:py-3 text-white/60 hover:text-white/80 text-[13px] sm:text-[14px] md:text-[15px] font-medium transition-colors active:scale-95 touch-manipulation"
            >
              不再提示
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes powerZoomIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          70% {
            transform: scale(0.98);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @supports (padding-bottom: env(safe-area-inset-bottom)) {
          .pb-safe {
            padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </div>
  );
});
FreeNoticeModal.displayName = 'FreeNoticeModal';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center">
      <FreeNoticeModal />
    </div>
  );
}