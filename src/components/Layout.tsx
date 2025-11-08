import { Calendar, QrCode, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import LoadingScreen from "@/components/LoadingScreen"; // 👈 добавь импорт

import React from "react";

const Layout = () => {
  const [loading, setLoading] = React.useState(true);

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
    </div>
  );
};

export default Layout;
