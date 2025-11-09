import { Calendar, QrCode, Menu, Users, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/LoadingScreen";
import { useUserMode } from "@/contexts/UserModeContext";

import React from "react";

const Layout = () => {
  const [loading, setLoading] = React.useState(true);
  const { mode, setMode, isSupervisor } = useUserMode();

  React.useEffect(() => {
    // имитация загрузки
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -right-40 bottom-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Wrapper для телефона и кнопок */}
      <div className="relative flex items-center gap-6">
        {/* 📱 Корпус телефона */}
        <div
          className="relative w-[390px] h-[720px] rounded-[48px] p-[4px]
                     bg-gradient-to-b from-zinc-100/20 via-zinc-400/25 to-zinc-900/60
                     shadow-[0_0_70px_rgba(0,0,0,0.9),inset_0_0_12px_rgba(255,255,255,0.05)]
                     backdrop-blur-md"
        >

        {/* 💎 Внутренний корпус */}
        <div
          className="relative w-full h-full bg-zinc-950 rounded-[44px]
                     border border-zinc-600/50 shadow-[inset_0_0_25px_rgba(255,255,255,0.03)]
                     overflow-hidden flex flex-col"
        >
          {/* 🔘 Notch */}
          <div className="absolute top-0 inset-x-0 flex justify-center z-30 pointer-events-none">
            <div className="mt-[6px] h-[18px] w-[110px] bg-black rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* 📄 Экран */}
          <div className="flex-1 overflow-y-auto bg-white rounded-[44px] pt-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden phone-screen-container relative">
            {/* 🔹 Добавили лоадер внутрь экрана */}
            {loading && (
              <div className="absolute inset-0 z-[60]">
                <LoadingScreen />
              </div>
            )}

            <div className="max-w-md mx-auto pb-24 relative z-10">
              <Outlet />
            </div>
          </div>

          {/* ⚙️ Нижняя панель */}
          <nav className="absolute bottom-0 left-0 right-0 bg-background border-t border-border max-w-md mx-auto rounded-b-[44px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-50">
            <div className="flex justify-around items-center h-16 px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center transition-all duration-200",
                    isActive ? "text-primary scale-110" : "text-muted-foreground"
                  )
                }
              >
                <div
                  className={cn(
                    "p-3 rounded-full transition-colors",
                    "hover:bg-primary/5"
                  )}
                >
                  <Calendar className="w-6 h-6" />
                </div>
              </NavLink>

              <NavLink
                to="/check"
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center transition-all duration-200",
                    isActive ? "text-primary scale-110" : "text-muted-foreground"
                  )
                }
              >
                <div
                  className={cn(
                    "p-3 rounded-full transition-colors",
                    "hover:bg-primary/5"
                  )}
                >
                  <QrCode className="w-6 h-6" />
                </div>
              </NavLink>

              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-center transition-all duration-200",
                    isActive ? "text-primary scale-110" : "text-muted-foreground"
                  )
                }
              >
                <div
                  className={cn(
                    "p-3 rounded-full transition-colors",
                    "hover:bg-primary/5"
                  )}
                >
                  <Menu className="w-6 h-6" />
                </div>
              </NavLink>
            </div>
          </nav>
        </div>

        {/* 💫 Эффект корпуса */}
        <div className="absolute inset-0 rounded-[48px] pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.08),inset_0_0_20px_rgba(255,255,255,0.05)]" />
      </div>

      {/* 🎮 Кнопки доступа - справа от телефона */}
      <div className="flex flex-col gap-6">
        {/* Промоутер */}
        <button 
          onClick={() => setMode('promoter')}
          className={cn(
            "group relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-[0_10px_40px_rgba(59,130,246,0.5),inset_0_-3px_10px_rgba(0,0,0,0.25),inset_0_3px_10px_rgba(255,255,255,0.5)] hover:shadow-[0_15px_60px_rgba(59,130,246,0.7),inset_0_-3px_10px_rgba(0,0,0,0.25),inset_0_3px_10px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 active:scale-95",
            mode === "promoter" && "animate-pulse ring-4 ring-blue-400/50"
          )}
          style={{ animationDuration: '3s' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-70" />
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-blue-400/50 to-transparent" />
          <div className="relative flex items-center justify-center h-full">
            <Users className="w-10 h-10 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" />
          </div>
          <div className="absolute left-24 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold text-white/90 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/20">
            Промоутер
          </div>
        </button>

        {/* Супервайзер */}
        <button 
          onClick={() => setMode('supervisor')}
          className={cn(
            "group relative w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 shadow-[0_10px_40px_rgba(168,85,247,0.5),inset_0_-3px_10px_rgba(0,0,0,0.25),inset_0_3px_10px_rgba(255,255,255,0.5)] hover:shadow-[0_15px_60px_rgba(168,85,247,0.7),inset_0_-3px_10px_rgba(0,0,0,0.25),inset_0_3px_10px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-110 active:scale-95",
            mode === "supervisor" && "animate-pulse ring-4 ring-purple-400/50"
          )}
          style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/50 to-transparent opacity-70" />
          <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-purple-400/50 to-transparent" />
          <div className="relative flex items-center justify-center h-full">
            <User className="w-10 h-10 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" />
          </div>
          <div className="absolute left-24 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-bold text-white/90 bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/20">
            Супервайзер
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Layout;
