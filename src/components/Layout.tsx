import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05080F] relative overflow-hidden">
      {/* дымчатый фон */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.35),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,15,30,0.8),transparent_60%)] opacity-70" />

      {/* телефон */}
      <div className="relative flex items-center gap-8">
        <div
          className="relative w-[360px] h-[720px] rounded-[48px] p-[3px]
                     bg-gradient-to-b from-zinc-300/30 via-zinc-500/40 to-zinc-900/50
                     shadow-[0_0_60px_rgba(0,0,0,0.9)]"
        >
          {/* внутренняя часть */}
          <div
            className="relative w-full h-full bg-zinc-950 rounded-[42px]
                       border border-zinc-700/70 shadow-[0_0_35px_rgba(15,23,42,0.9)]
                       overflow-hidden"
          >
            {/* вырез */}
            <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
              <div className="mt-2 h-6 w-40 bg-black/90 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
            </div>

            {/* экран */}
            <div className="h-full pt-10 pb-6 px-4 overflow-y-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <Outlet />
            </div>
          </div>
        </div>

        {/* Telegram кнопка */}
        <button
          type="button"
          className="h-16 w-16 rounded-full bg-sky-500 border border-sky-300
                     shadow-[0_8px_20px_rgba(56,189,248,0.7)]
                     flex items-center justify-center hover:-translate-y-1
                     active:scale-95 transition-transform"
        >
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
