import { Calendar, Search, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0E19]">
      {/* 🔮 Атмосферный дымчатый фон */}
      <div className="pointer-events-none absolute -left-56 -top-48 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] bottom-[-8rem] h-[32rem] w-[32rem] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.2),transparent_75%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_80%)]" />

      {/* 📱 Корпус телефона */}
      <div
        className="relative w-[390px] h-[720px] rounded-[50px] p-[4px]
                   bg-gradient-to-b from-zinc-200/25 via-zinc-500/30 to-zinc-900/50
                   shadow-[0_0_80px_rgba(0,0,0,0.9),inset_0_0_10px_rgba(255,255,255,0.06)]
                   backdrop-blur-md"
      >
        {/* 💎 Внутренний корпус */}
        <div
          className="relative w-full h-full bg-zinc-950 rounded-[46px]
                     border border-zinc-600/50 shadow-[inset_0_0_25px_rgba(255,255,255,0.04)]
                     overflow-hidden flex flex-col"
        >
          {/* 🔘 Notch (вырез под динамик) */}
          <div className="absolute top-0 inset-x-0 h-10 flex justify-center pointer-events-none z-20">
            <div className="mt-2 h-6 w-40 bg-black/90 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.7)]" />
          </div>

          {/* 📄 Экран */}
          <div className="flex-1 overflow-y-auto bg-white rounded-[46px] pt-10 pb-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* добавляем внутренний отступ, чтобы контент не вылезал */}
            <div className="max-w-md mx-auto px-4 pb-4">
              <Outlet />
            </div>
          </div>

          {/* ⚙️ Нижняя панель навигации (без изменений) */}
          <nav className="absolute bottom-0 left-0 right-0 bg-background border-t border-border max-w-md mx-auto rounded-b-[46px]">
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

        {/* 💫 Мягкое боковое освещение корпуса */}
        <div className="absolute inset-0 rounded-[50px] pointer-events-none shadow-[0_0_50px_rgba(59,130,246,0.1),inset_0_0_20px_rgba(255,255,255,0.05)]" />
      </div>
    </div>
  );
};

export default Layout;
