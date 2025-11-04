import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "@/components/BottomNav"; // твой компонент нижнего меню

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05080F]">
      {/* 🌫️ Дымчатый фон вокруг телефона */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.35),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[24rem] w-[24rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,15,30,0.9),transparent_70%)] opacity-70" />

      {/* 📱 Корпус телефона */}
      <div
        className="relative w-[380px] h-[720px] rounded-[48px] p-[3px]
                   bg-gradient-to-b from-zinc-100/20 via-zinc-400/30 to-zinc-900/40
                   shadow-[0_0_80px_rgba(0,0,0,0.9),inset_0_0_15px_rgba(255,255,255,0.05)]
                   backdrop-blur-md"
      >
        {/* Внутренняя рамка */}
        <div
          className="relative w-full h-full bg-black rounded-[42px]
                     border border-zinc-700/60
                     shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_0_40px_rgba(15,23,42,0.8)]
                     overflow-hidden flex flex-col"
        >
          {/* Вырез под динамик (notch) */}
          <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
            <div className="mt-2 h-6 w-40 bg-black/90 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.9)]" />
          </div>

          {/* Сам экран приложения */}
          <div className="flex-1 overflow-y-auto bg-white pt-10 pb-20 rounded-[42px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Outlet />
          </div>

          {/* 🔹 Нижнее меню внутри телефона */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-b-[42px] shadow-[0_-3px_10px_rgba(0,0,0,0.1)]">
            <BottomNav />
          </div>
        </div>

        {/* 💫 Неоновое свечение вокруг корпуса */}
        <div className="absolute inset-0 rounded-[48px] pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.2),0_0_80px_rgba(59,130,246,0.15)]" />
      </div>
    </div>
  );
};

export default Layout;
