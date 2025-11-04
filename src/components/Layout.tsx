import { Calendar, Search, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#070B12]">
      {/* 🌫️ Дымчатый фон */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[22rem] w-[22rem] bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.35),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[26rem] w-[26rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(10,15,30,0.9),transparent_70%)] opacity-70" />

      {/* 📱 Корпус телефона */}
      <div
        className="relative w-[390px] h-[740px] rounded-[48px] p-[3px]
                   bg-gradient-to-b from-zinc-200/20 via-zinc-500/30 to-zinc-900/50
                   shadow-[0_0_90px_rgba(0,0,0,0.9),inset_0_0_20px_rgba(255,255,255,0.06)]
                   backdrop-blur-md"
      >
        {/* Внутренняя рамка */}
        <div
          className="relative w-full h-full bg-zinc-950 rounded-[44px]
                     border border-zinc-700/60
                     shadow-[inset_0_0_25px_rgba(255,255,255,0.05),0_0_50px_rgba(15,23,42,0.8)]
                     overflow-hidden flex flex-col"
        >
          {/* Вырез под динамик (notch) */}
          <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none">
            <div className="mt-2 h-6 w-40 bg-black/90 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.9)]" />
          </div>

          {/* Основной экран */}
          <div className="flex-1 overflow-y-auto bg-white rounded-[44px] pt-10 pb-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="max-w-md mx-auto">
              <Outlet />
            </div>
          </div>

          {/* Нижнее меню (оригинальное, без изменений) */}
          <nav className="absolute bottom-0 left-0 right-0 bg-background border-t border-border max-w-md mx-auto rounded-b-[44px]">
            <div className="flex justify-around items-center h-16">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={cn(
                        "p-2 rounded-full transition-colors",
                        isActive && "bg-primary/10"
                      )}
                    >
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Мероприятия</span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/check"
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={cn(
                        "p-2 rounded-full transition-colors",
                        isActive && "bg-primary/10"
                      )}
                    >
                      <Search className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Проверка</span>
                  </>
                )}
              </NavLink>

              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={cn(
                        "p-2 rounded-full transition-colors",
                        isActive && "bg-primary/10"
                      )}
                    >
                      <Menu className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium">Меню</span>
                  </>
                )}
              </NavLink>
            </div>
          </nav>
        </div>

        {/* 💫 Подсветка корпуса */}
        <div className="absolute inset-0 rounded-[48px] pointer-events-none shadow-[0_0_50px_rgba(59,130,246,0.2),0_0_80px_rgba(59,130,246,0.1)]" />
      </div>
    </div>
  );
};

export default Layout;
