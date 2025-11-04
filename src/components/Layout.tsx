import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLaunching, setIsLaunching] = useState(false);

  const handleTelegramClick = () => {
    if (isLaunching) return;

    setIsLaunching(true);

    setTimeout(() => {
      setIsLaunching(false);
      // после прелоадера переходим на главную (Events)
      if (location.pathname !== "/") {
        navigate("/");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* контейнер телефона + боковая кнопка */}
      <div className="flex items-center gap-6">
        {/* оболочка телефона */}
        <div
          className="relative w-[360px] h-[780px] bg-zinc-900 rounded-[40px]
                     border border-zinc-700 shadow-[0_0_40px_rgba(0,0,0,0.7)]
                     overflow-hidden"
        >
          {/* notch */}
          <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
            <div className="mt-2 h-6 w-40 bg-black/70 rounded-full" />
          </div>

          {/* экран приложения (белый) */}
          <div
            className="
              h-full pt-10 pb-6 px-4
              overflow-y-auto bg-white
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <Outlet />
          </div>

          {/* ЛОКАЛЬНЫЙ ПРЕЛОАДЕР ТОЛЬКО ВНУТРИ ТЕЛЕФОНА */}
          {isLaunching && (
            <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full border-2 border-zinc-300 border-t-emerald-500 animate-spin" />
              <p className="text-xs text-zinc-600">Загружаем приложение...</p>
            </div>
          )}
        </div>

        {/* круглая выпуклая кнопка Telegram справа от телефона */}
        <button
          type="button"
          onClick={handleTelegramClick}
          className="h-16 w-16 rounded-full
                     bg-sky-500 border border-sky-300 shadow-[0_8px_16px_rgba(56,189,248,0.6)]
                     flex items-center justify-center
                     hover:-translate-y-1 active:scale-95
                     transition-transform"
        >
          {/* иконка Telegram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-white"
            fill="currentColor"
          >
            <path d="M9.04 14.71 8.9 18.01c.3 0 .43-.13.59-.29l1.42-1.37 2.95 2.16c.54.3.92.14 1.06-.5l1.92-9.02c.17-.79-.28-1.1-.8-.9L4.34 10.7c-.78.3-.77.74-.13.94l3.08.96 7.16-4.52c.34-.21.65-.09.39.12l-5.8 5.51Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Layout;
