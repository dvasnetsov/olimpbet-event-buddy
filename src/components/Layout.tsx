import React, { useState } from "react";

// === ГЛАВНЫЙ Layout, обертка под всё приложение ===
const Layout: React.FC<{
  children: React.ReactNode;
  onTelegramClick?: () => void;
}> = ({ children, onTelegramClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* мягкий фон с подсветками */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.45),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.35),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),transparent_65%)] opacity-70" />

      {/* корпус телефона */}
      <div className="relative flex items-center gap-6">
        {/* контур телефона */}
        <div
          className="relative w-[360px] h-[700px] rounded-[46px] p-[3px]
                     bg-gradient-to-b from-zinc-100/40 via-zinc-500/40 to-zinc-900/40
                     shadow-[0_0_60px_rgba(0,0,0,0.9)]"
        >
          {/* внутренняя рамка */}
          <div
            className="relative w-full h-full bg-zinc-950 rounded-[40px]
                       border border-zinc-600/80 shadow-[0_0_40px_rgba(15,23,42,0.9)]
                       overflow-hidden"
          >
            {/* вырез под динамик */}
            <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
              <div className="mt-2 h-6 w-40 bg-black/80 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
            </div>

            {/* экран */}
            <div className="h-full pt-10 pb-6 px-4 overflow-y-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {children}
            </div>
          </div>
        </div>

        {/* Telegram-кнопка */}
        <button
          type="button"
          onClick={onTelegramClick}
          className="h-16 w-16 rounded-full
                     bg-sky-500 border border-sky-300 shadow-[0_8px_20px_rgba(56,189,248,0.7)]
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

// === Вспомогательные экраны для превью ===
const IntroScreen: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-zinc-50">
    <h1 className="text-xl font-semibold">Прототип приложения</h1>
    <p className="text-sm text-zinc-400 max-w-[260px]">
      Нажми на круглую Telegram-кнопку сбоку, чтобы перейти на главный экран.
    </p>
  </div>
);

const LoadingScreenPreview: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center gap-4 text-zinc-900">
    <div className="h-10 w-10 rounded-full border-2 border-zinc-700 border-t-emerald-400 animate-spin" />
    <p className="text-sm text-zinc-500">Загружаем приложение...</p>
  </div>
);

const DemoScreen: React.FC = () => (
  <div className="flex flex-col gap-4 text-zinc-900">
    <h1 className="text-xl font-semibold">Главный раздел</h1>
    <p className="text-sm text-zinc-500">
      Здесь будет основной контент (Events, Menu, Check и т.п.)
    </p>
    <button className="mt-2 rounded-xl px-4 py-2 bg-emerald-500 text-sm font-medium hover:bg-emerald-400 transition">
      Пример кнопки
    </button>
  </div>
);

// === Превью телефона ===
const PreviewPhoneLayout: React.FC = () => {
  const [mode, setMode] = useState<"intro" | "loading" | "main">("intro");

  const handleTelegramClick = () => {
    if (mode === "loading") return;
    setMode("loading");
    setTimeout(() => setMode("main"), 1500);
  };

  let content: React.ReactNode;
  if (mode === "intro") content = <IntroScreen />;
  else if (mode === "loading") content = <LoadingScreenPreview />;
  else content = <DemoScreen />;

  return <Layout onTelegramClick={handleTelegramClick}>{content}</Layout>;
};

// === Экспорты ===
export default Layout;
export { PreviewPhoneLayout };
