import React from 'react';
import logoCoin from '@/assets/logo-coin.png';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo with shimmer */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-3xl opacity-40 animate-pulse">
            <div className="w-32 h-32 bg-slate-400/30 rounded-full" />
          </div>
          
          {/* Logo with shimmer effect overlay */}
          <div className="relative w-32 h-32">
            <img 
              src={logoCoin} 
              alt="Loading" 
              className="w-full h-full object-contain relative z-10"
              style={{
                filter: 'brightness(0.9) saturate(0) contrast(1.3)',
              }}
            />
            {/* Shimmer sweep effect */}
            <div 
              className="absolute inset-0 z-20 overflow-hidden rounded-full"
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
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"
                style={{
                  transform: 'translateX(-100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
