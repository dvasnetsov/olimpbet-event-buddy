import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Package, TrendingUp, Award, Calendar } from "lucide-react";

const PromoterDetail = () => {
  const navigate = useNavigate();
  const { promoterId } = useParams();
  const [isSupervisor, setIsSupervisor] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const mode = localStorage.getItem("userMode") || "promoter";
    setIsSupervisor(mode === "supervisor");
    
    // Если пользователь не супервайзер, перенаправляем на главную
    if (mode !== "supervisor") {
      navigate("/");
    }
  }, [navigate]);

  // Здесь обычно был бы запрос к API по promoterId
  const promoters = [
    {
      id: "1",
      name: "Иван Петров",
      avatar: "ИП",
      status: "active" as const,
      totalMerch: 24,
      todayMerch: 8,
      totalBets: 156000,
      phone: "+7 (999) 123-45-67",
      telegram: "@ivan_petrov",
      joinDate: "15 октября 2024",
      activeEvents: 3,
    },
    {
      id: "2",
      name: "Анна Смирнова",
      avatar: "АС",
      status: "active" as const,
      totalMerch: 18,
      todayMerch: 5,
      totalBets: 98000,
      phone: "+7 (999) 234-56-78",
      telegram: "@anna_smirnova",
      joinDate: "20 октября 2024",
      activeEvents: 2,
    },
    {
      id: "3",
      name: "Дмитрий Козлов",
      avatar: "ДК",
      status: "inactive" as const,
      totalMerch: 15,
      todayMerch: 0,
      totalBets: 75000,
      phone: "+7 (999) 345-67-89",
      telegram: "@dmitry_kozlov",
      joinDate: "1 ноября 2024",
      activeEvents: 1,
    },
    {
      id: "4",
      name: "Елена Новикова",
      avatar: "ЕН",
      status: "active" as const,
      totalMerch: 21,
      todayMerch: 6,
      totalBets: 132000,
      phone: "+7 (999) 456-78-90",
      telegram: "@elena_novikova",
      joinDate: "10 ноября 2024",
      activeEvents: 2,
    },
  ];

  const promoter = promoters.find((p) => p.id === promoterId);

  if (!isSupervisor || !promoter) {
    return null;
  }

  return (
    <div className="px-4 pt-4 bg-white pb-4">
      <button
        onClick={() => navigate("/promoters")}
        className="mb-5 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
      >
        ← Назад
      </button>

      {/* Профиль промоутера */}
      <Card className="p-6 mb-6 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-3xl font-bold text-primary">{promoter.avatar}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold">{promoter.name}</h1>
              <Badge
                variant={promoter.status === "active" ? "default" : "secondary"}
                className="text-xs"
              >
                {promoter.status === "active" ? "Активен" : "Неактивен"}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>В команде с {promoter.joinDate}</span>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Всего мерча</p>
              <p className="text-lg font-bold">{promoter.totalMerch}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Сегодня</p>
              <p className="text-lg font-bold">{promoter.todayMerch}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 col-span-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Сумма ставок</p>
              <p className="text-lg font-bold">{promoter.totalBets.toLocaleString()} ₽</p>
            </div>
          </div>
        </div>

        {/* Контакты */}
        <div className="space-y-3 pt-4 border-t">
          <h3 className="font-semibold mb-3">Контакты</h3>
          <Button
            variant="outline"
            className="w-full justify-start h-14"
            onClick={() => window.open(`tel:${promoter.phone}`, "_blank")}
          >
            <Phone className="w-5 h-5 mr-3" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Телефон</p>
              <p className="font-semibold">{promoter.phone}</p>
            </div>
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start h-14"
            onClick={() => window.open(`https://t.me/${promoter.telegram.replace("@", "")}`, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Telegram</p>
              <p className="font-semibold">{promoter.telegram}</p>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default PromoterDetail;
