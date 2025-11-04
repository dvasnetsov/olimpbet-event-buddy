const Layout: React.FC<{
  children: React.ReactNode;
  onTelegramClick?: () => void;
}> = ({ children, onTelegramClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      {/* простой контейнер телефона */}
      <div className="relative flex items-center gap-6">
        <div className="relative w-[360px] h-[780px] rounded-[40px] bg-black border border-zinc-700 shadow-xl">
          {/* notch */}
          <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
            <div className="mt-2 h-6 w-36 bg-black rounded-full border border-zinc-700" />
          </div>

          {/* экран приложения */}
          <div className="h-full pt-10 pb-6 px-4 overflow-y-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {children}
          </div>
        </div>

        {/* Telegram-кнопка сбоку (как была) */}
        <button
          type="button"
          onClick={onTelegramClick}
          className="h-14 w-14 rounded-full bg-sky-500 text-white shadow-lg hover:bg-sky-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path d="M9.04 14.71 8.9 18.01c.3 0 .43-.13.59-.29l1.42-1.37 2.95 2.16c.54.3.92.14 1.06-.5l1.92-9.02c.17-.79-.28-1.1-.8-.9L4.34 10.7c-.78.3-.77.74-.13.94l3.08.96 7.16-4.52c.34-.21.65-.09.39.12l-5.8 5.51Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
