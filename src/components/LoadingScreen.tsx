import React from 'react';
import logoCoin from '@/assets/logo-coin.png';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-40 animate-pulse">
            <div className="w-32 h-32 bg-slate-400/30 rounded-full" />
          </div>
          
          {/* Logo with shimmer effect - no rotation */}
          <div className="relative">
            <img 
              src={logoCoin} 
              alt="Loading" 
              className="w-32 h-32 object-contain"
              style={{
                filter: 'brightness(0.8) saturate(0) contrast(1.2)',
              }}
            />
            {/* Shimmer overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"
              style={{
                maskImage: `url(${logoCoin})`,
                WebkitMaskImage: `url(${logoCoin})`,
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>
        </div>

        {/* Loading text with dots animation */}
        <div className="text-xl font-bold text-slate-300 tracking-wide">
          <span className="inline-block animate-[bounce_1s_ease-in-out_infinite]">З</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.1s_infinite]">а</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.2s_infinite]">г</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.3s_infinite]">р</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.4s_infinite]">у</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.5s_infinite]">з</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.6s_infinite]">к</span>
          <span className="inline-block animate-[bounce_1s_ease-in-out_0.7s_infinite]">а</span>
          <span className="inline-block animate-[fade_1s_ease-in-out_infinite]">.</span>
          <span className="inline-block animate-[fade_1s_ease-in-out_0.2s_infinite]">.</span>
          <span className="inline-block animate-[fade_1s_ease-in-out_0.4s_infinite]">.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
