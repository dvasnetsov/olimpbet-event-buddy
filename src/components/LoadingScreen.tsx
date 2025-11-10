const LoadingScreen = () => {
  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Minimalist laurel wreath icon with shimmer animation */}
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute inset-0 blur-3xl bg-white/5 rounded-full scale-150" />
          
          {/* Laurel wreath SVG with shimmer */}
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 120 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Left branch */}
            <path
              d="M35 60 Q30 50, 28 40 Q26 30, 30 22 Q34 14, 40 18 Q36 26, 38 34 Q40 42, 42 50 Q44 58, 42 64"
              stroke="url(#shimmer-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="animate-[shimmer_3s_ease-in-out_infinite]"
            />
            <path
              d="M38 50 Q35 42, 33 34 Q31 26, 35 20 Q39 14, 43 18 Q40 24, 42 32 Q44 40, 46 48"
              stroke="url(#shimmer-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="animate-[shimmer_3s_ease-in-out_infinite_0.3s]"
            />
            
            {/* Right branch */}
            <path
              d="M85 60 Q90 50, 92 40 Q94 30, 90 22 Q86 14, 80 18 Q84 26, 82 34 Q80 42, 78 50 Q76 58, 78 64"
              stroke="url(#shimmer-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="animate-[shimmer_3s_ease-in-out_infinite_0.5s]"
            />
            <path
              d="M82 50 Q85 42, 87 34 Q89 26, 85 20 Q81 14, 77 18 Q80 24, 78 32 Q76 40, 74 48"
              stroke="url(#shimmer-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              className="animate-[shimmer_3s_ease-in-out_infinite_0.8s]"
            />
            
            {/* Bottom curves connecting branches */}
            <path
              d="M42 64 Q50 70, 60 72 Q70 70, 78 64"
              stroke="url(#shimmer-gradient)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
              className="animate-[shimmer_3s_ease-in-out_infinite_1s]"
            />

            {/* Gradient definition for shimmer effect */}
            <defs>
              <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#666666" stopOpacity="0.6">
                  <animate 
                    attributeName="stopColor" 
                    values="#666666; #E5E5E5; #FFFFFF; #E5E5E5; #666666" 
                    dur="3s" 
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#999999" stopOpacity="0.8">
                  <animate 
                    attributeName="stopColor" 
                    values="#999999; #F5F5F5; #FFFFFF; #F5F5F5; #999999" 
                    dur="3s" 
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#666666" stopOpacity="0.6">
                  <animate 
                    attributeName="stopColor" 
                    values="#666666; #E5E5E5; #FFFFFF; #E5E5E5; #666666" 
                    dur="3s" 
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Simple loading text */}
        <div className="text-center space-y-2">
          <p className="text-sm text-white/40 tracking-widest uppercase">Загрузка</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
