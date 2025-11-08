const LoadingScreen = () => {
  return (
    <div
      className="h-full w-full flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0, 72%, 51%) 0%, hsl(0, 5%, 10%) 50%, hsl(0, 0%, 5%) 100%)"
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated logo with glow */}
        <div className="relative w-28 h-28">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(0,72%,51%)] via-[hsl(0,85%,65%)] to-[hsl(0,72%,51%)] opacity-30 blur-2xl animate-pulse" />
          
          {/* Spinning gradient ring */}
          <div className="absolute inset-0 rounded-full border-[6px] border-transparent bg-gradient-to-r from-white/80 via-[hsl(0,85%,70%)] to-[hsl(0,72%,51%)] animate-spin [border-image:linear-gradient(90deg,rgba(255,255,255,0.8),hsl(0,85%,70%),hsl(0,72%,51%))_1] opacity-90"
               style={{ animationDuration: '3s' }} />
          
          {/* Inner shadow circle with gradient */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/20 to-[hsl(0,72%,51%)]/30 animate-pulse" />
          
          {/* Center icon with gradient background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-white to-white/90 rounded-full flex items-center justify-center shadow-2xl shadow-[hsl(0,72%,51%)]/60">
              <span className="text-3xl font-black bg-gradient-to-br from-[hsl(0,72%,51%)] to-[hsl(0,85%,65%)] bg-clip-text text-transparent drop-shadow-lg">O</span>
            </div>
          </div>
        </div>

        {/* Loading text with gradient */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            OlimpBet
          </h2>
          <p className="text-sm text-white/70 tracking-wide">Загрузка приложения...</p>
          
          {/* Animated dots */}
          <div className="flex gap-2 justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-white to-[hsl(0,85%,70%)] rounded-full animate-bounce shadow-lg shadow-white/50" style={{ animationDelay: '-0.3s' }} />
            <div className="w-3 h-3 bg-gradient-to-br from-white to-[hsl(0,85%,70%)] rounded-full animate-bounce shadow-lg shadow-white/50" style={{ animationDelay: '-0.15s' }} />
            <div className="w-3 h-3 bg-gradient-to-br from-white to-[hsl(0,85%,70%)] rounded-full animate-bounce shadow-lg shadow-white/50" />
          </div>
        </div>

        {/* Progress bar with gradient */}
        <div className="w-3/4 max-w-[260px] h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20 shadow-inner">
          <div className="h-full bg-gradient-to-r from-white via-[hsl(0,85%,70%)] to-white shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
