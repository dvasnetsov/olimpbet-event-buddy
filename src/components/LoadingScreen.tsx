import ReactDOM from "react-dom";

const LoadingScreen = () => {
  // Ищем контейнер телефона (его создаёт Layout)
  const phoneContainer = document.querySelector(".phone-screen-container");

  // Если контейнер не найден — ничего не показываем (во время первой загрузки)
  if (!phoneContainer) return null;

  // Создаём сам прелоадер
  const loader = (
    <div
      className="absolute inset-0 h-full w-full flex items-center justify-center overflow-hidden rounded-[44px] z-50"
      style={{
        background:
          "linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(199, 89%, 48%) 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Лого */}
        <div className="relative">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <span className="text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              O
            </span>
          </div>
          {/* Вращающееся кольцо */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/40 animate-spin" />
        </div>

        {/* Текст */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold text-white">OlimpBet</h2>
          <p className="text-sm text-white/80">Загрузка приложения...</p>
        </div>

        {/* Прогресс-бар */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/80 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
            style={{ width: "40%" }}
          />
        </div>
      </div>
    </div>
  );

  // Через портал вставляем внутрь контейнера телефона
  return ReactDOM.createPortal(loader, phoneContainer);
};

export default LoadingScreen;
