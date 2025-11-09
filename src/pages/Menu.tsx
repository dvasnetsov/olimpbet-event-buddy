import { Card } from "@/components/ui/card";
import { Calendar, HelpCircle, Phone, User, ChevronRight, Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Menu = () => {
  const navigate = useNavigate();

  const profile = {
    name: "Иван Петров",
    city: "Москва",
    balance: "₽12,500",
    avatar: "ИП",
  };

  const menuItems = [
    {
      id: "home",
      title: "Текущее мероприятие",
      description: "Вернуться на главную",
      icon: Home,
      path: "/",
    },
    {
      id: "events",
      title: "Мои мероприятия",
      description: "Будущие и прошедшие",
      icon: Calendar,
      path: "/my-events",
    },
    {
      id: "faq",
      title: "FAQ",
      description: "Правила и инструкции",
      icon: HelpCircle,
      path: "/faq",
    },
    {
      id: "contact",
      title: "Связаться с супервайзером",
      description: "Телефон, чат, email",
      icon: Phone,
      path: "/contact",
    },
  ];

  return (
    <div className="bg-white pb-8 min-h-screen">
      {/* Back Button */}
      <div className="px-4 pt-4 pb-2">
        <button
          onClick={() => navigate("/")}
          className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад
        </button>
      </div>

      {/* Profile Header */}
      <div 
        className="mx-4 mt-3 mb-6 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl cursor-pointer hover:from-primary/15 hover:to-primary/10 transition-colors shadow-sm"
        onClick={() => navigate("/profile")}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{profile.avatar}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-sm text-muted-foreground">{profile.city}</p>
            <p className="text-lg font-bold text-primary mt-1">{profile.balance}</p>
          </div>
          <ChevronRight className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className="p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] shadow-sm"
              onClick={() => navigate(item.path)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
