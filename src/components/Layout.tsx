import React, { useState } from "react";
import { Outlet } from "react-router-dom"; // 👈 обязательно добавить!

const Layout: React.FC<{
  children?: React.ReactNode;
  onTelegramClick?: () => void;
}> = ({ children, onTelegramClick }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
      {/* фоновая подсветка */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.45),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.35),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),transparent_65%)] opacity-70" />

      <div className="relative flex items-center gap-6">
        {/* корпус телефона */}
        <div
          className="relative w-[360px] h-[700px] rounded-[46px] p-[3px]
                     bg-gradient-to-b from-zinc-100/40 via-zinc-500/40 to-zinc-900/40
                     shadow-[0_0_60px_rgba(0,0,0,0.9)]"
        >
          {/* рамка и экран */}
          <div
            className="relative w-full h-full bg-zinc-950 rounded-[40px]
                       border border-zinc-600/80 shadow-[0_0_40px_rgba(15,23,42,0.9)]
                       overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
              <div className="mt-2 h-6 w-40 bg-black/80 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
            </div>

            {/* экран приложения */}
            <div className="h-full pt-10 pb-6 px-4 overflow-y-auto bg-white [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {/* 👇 вот сюда вставляем Outlet */}
              {children || <Outlet />}
            </div>
          </div>
        </div>

        {/* Telegram side button */}
        <button
          type="button"
          onClick={onTelegramClick}
          className="h-16 w-16 rounded-full
                     bg-sky-500 border border-sky-300 shadow-[0_8px_20px_rgba(56,189,248,0.7)]
                     flex items-center justify-center
                     hover:-translate-y-1 active:scale-95
                     transition-transform"
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
