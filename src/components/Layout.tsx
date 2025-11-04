import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#05080F]">
      {/* 🔹 дымчатый фон */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.35),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[26rem] w-[26rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,15,30,0.9),transparent_70%)] opacity-70" />

      {/* 🔹 корпус телефона */}
      <div
        className="relative w-[390px] h-[760px] rounded-[50px] p-[3px]
                   bg-gradient-to-b from-zinc-200/30 via-zinc-500/30 to-zinc-900/40
                   shadow-[0_0_70px_rgba(0,0,0,0.8)]"
      >
        {/* внутренняя рамка */}
        <div
          className="relative w-full h-full bg-black rounded-[45px]
                     border border-zinc-700/70 shadow-[0_0_40px_rgba(15,23,42,0.8)]
                     overflow-hidden flex flex-col"
        >
          {/* вырез (notch) */}
          <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
            <div className="mt-2 h-6 w-40 bg-black/90 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* сам экран приложения */}
          <div className="flex-1 overflow-y-auto bg-white rounded-[42px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
