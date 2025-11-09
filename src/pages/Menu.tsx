import { Card } from "@/components/ui/card";
import { Calendar, HelpCircle, User, ChevronRight, Home, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Menu = () => {
  const navigate = useNavigate();

  const profile = {
    name: "Иван Петров",
    role: "Промоутер",
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
      id: "support",
      title: "Написать в саппорт",
      description: "Техническая поддержка",
      icon: MessageSquare,
      action: "support",
    },
  ];

  const handleSupportChat = () => {
    toast.success("Открываю чат поддержки...");
    // В реальном приложении здесь будет переход в Telegram саппорта
    window.open('https://t.me/olimpbet_support', '_blank');
  };

  return (
    <div className="bg-white pb-8 min-h-screen">
      {/* Profile Header */}
      <Card 
        className="mx-4 mt-4 mb-6 p-5 cursor-pointer hover:shadow-lg transition-all shadow-sm"
        onClick={() => navigate("/profile")}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{profile.avatar}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1.5">{profile.name}</h2>
            <Badge variant="secondary">{profile.role}</Badge>
          </div>
          <ChevronRight className="w-6 h-6 text-muted-foreground" />
        </div>
      </Card>

      <Separator className="mb-6" />

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              className="p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] shadow-sm"
              onClick={() => {
                if (item.action === "support") {
                  handleSupportChat();
                } else if (item.path) {
                  navigate(item.path);
                }
              }}
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
