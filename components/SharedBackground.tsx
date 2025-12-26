'use client';

import { memo, useMemo } from 'react';
import { useBackground } from '@/lib/backgroundContext';

export const SharedBackground = memo(() => {
  const { backgroundUrl, isLoaded, setLoaded } = useBackground();

  // 判断是否为渐变背景
  const isGradient = backgroundUrl.startsWith('gradient:');
  const gradientValue = isGradient ? backgroundUrl.replace('gradient:', '') : null;

  // 渲染样式
  const backgroundStyle = useMemo(() => {
    if (isGradient && gradientValue) {
      return {
        background: gradientValue,
        opacity: 1,
      };
    }
    return {};
  }, [isGradient, gradientValue]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]"
      style={backgroundStyle}
    >
      {!isGradient && backgroundUrl && (
        <img
          src={backgroundUrl}
          alt="background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          onLoad={setLoaded}
          style={{ willChange: 'opacity' }}
        />
      )}
    </div>
  );
});

SharedBackground.displayName = 'SharedBackground';
