const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* OlimpBet logo placeholder - красный круг с белой буквой O */}
        <div className="relative">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-pulse">
            <span className="text-4xl font-bold text-white">O</span>
          </div>
          {/* Spinning border */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold text-foreground">OlimpBet</h2>
          <p className="text-sm text-muted-foreground">Загрузка...</p>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
