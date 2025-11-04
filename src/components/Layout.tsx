import { Calendar, Search, Menu } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto">
      <main className="flex-1 pb-20 overflow-y-auto">
        <Outlet />
      </main>
      
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border max-w-md mx-auto">
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
  );
};

export default Layout;
