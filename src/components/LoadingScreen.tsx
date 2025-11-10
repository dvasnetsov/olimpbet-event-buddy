import React from 'react';
import logoCoin from '@/assets/logo-coin.png';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl opacity-50 animate-pulse">
            <div className="w-32 h-32 bg-primary-foreground/30 rounded-full" />
          </div>
          
          {/* Logo with rotation and scale animation */}
          <div className="relative animate-[spin_3s_ease-in-out_infinite]">
            <img 
              src={logoCoin} 
              alt="Loading" 
              className="w-32 h-32 object-contain animate-[pulse_1.5s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* Loading text with dots animation */}
        <div className="text-xl font-bold text-primary-foreground tracking-wide">
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
