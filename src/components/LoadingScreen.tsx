const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: 'linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(199, 89%, 48%) 100%)' }}>
      <div className="flex flex-col items-center gap-8">
        {/* Logo with modern design */}
        <div className="relative">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">O</span>
          </div>
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/40 animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-white">OlimpBet</h2>
          <p className="text-sm text-white/80">Загрузка приложения...</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-56 h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div className="h-full bg-white shadow-lg animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
