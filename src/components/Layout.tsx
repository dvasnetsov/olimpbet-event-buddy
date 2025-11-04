import { Calendar, Search, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#090D14]">
      {/* 🌫️ Атмосферный дымчатый фон */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.15),transparent_75%),linear-gradient(to_bottom,rgba(10,15,25,1),rgba(4,6,10,1))]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.25),transparent_60%)] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)] blur-[160px]" />

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
          {/* 🔘 Notch (вырез под динамик) */}
          <div className="absolute top-0 inset-x-0 flex justify-center z-30 pointer-events-none">
            <div className="mt-[6px] h-[18px] w-[110px] bg-black rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
          </div>

          {/* 📄 Экран */}
          <div className="flex-1 overflow-y-auto bg-white rounded-[44px] pt-10 pb-20 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Отступ сверху, чтобы контент не залезал под вырез */}
            <div className="max-w-md mx-auto px-4 pb-4 pt-3">
              <Outlet />
            </div>
          </div>

          {/* ⚙️ Нижняя панель навигации (выравнена по краю) */}
          <nav className="absolute bottom-0 left-0 right-0 bg-background border-t border-border max-w-md mx-auto rounded-b-[44px] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
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

        {/* 💫 Эффект корпуса */}
        <div className="absolute inset-0 rounded-[48px] pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.08),inset_0_0_20px_rgba(255,255,255,0.05)]" />
      </div>
    </div>
  );
};

export default Layout;
