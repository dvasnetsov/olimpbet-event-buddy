const LoadingScreen = () => {
  return (
    // ВАЖНО: родительский "экран телефона" должен быть с className="relative"
    <div
      className="
        absolute inset-0          /* растягиваемся строго по рамке телефона */
        h-full w-full
        flex items-center justify-center
        overflow-hidden            /* ничего не вылезает за края */
        rounded-[24px]             /* закругление под рамку, если нужно */
      "
      style={{
        background:
          "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(199, 89%, 48%) 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Лого (размеры чуть меньше и адаптивные) */}
        <div className="relative">
          <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              O
            </span>
          </div>
          {/* Вращающееся кольцо — вписываемся в круг */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/40 animate-spin" />
        </div>

        {/* Текст */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-xl md:text-2xl font-bold text-white">OlimpBet</h2>
          <p className="text-xs md:text-sm text-white/80">Загрузка приложения...</p>
        </div>

        {/* Прогресс-бар — ширина от контейнера, не фиксированная */}
        <div className="w-3/4 max-w-[240px] h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div className="h-full bg-white shadow-lg animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
