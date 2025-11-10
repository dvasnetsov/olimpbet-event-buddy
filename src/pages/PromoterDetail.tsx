import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Package, TrendingUp, Award, Users } from "lucide-react";

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
      role: "Промоутер",
      totalMerch: 24,
      totalBets: 156000,
      uniquePlayers: 42,
      newPlayers: 18,
      phone: "+7 (999) 123-45-67",
      telegram: "@ivan_petrov",
    },
    {
      id: "2",
      name: "Анна Смирнова",
      avatar: "АС",
      status: "active" as const,
      role: "Промоутер",
      totalMerch: 18,
      totalBets: 98000,
      uniquePlayers: 35,
      newPlayers: 12,
      phone: "+7 (999) 234-56-78",
      telegram: "@anna_smirnova",
    },
    {
      id: "3",
      name: "Дмитрий Козлов",
      avatar: "ДК",
      status: "inactive" as const,
      role: "Промоутер",
      totalMerch: 15,
      totalBets: 75000,
      uniquePlayers: 28,
      newPlayers: 8,
      phone: "+7 (999) 345-67-89",
      telegram: "@dmitry_kozlov",
    },
    {
      id: "4",
      name: "Елена Новикова",
      avatar: "ЕН",
      status: "active" as const,
      role: "Промоутер",
      totalMerch: 21,
      totalBets: 132000,
      uniquePlayers: 38,
      newPlayers: 15,
      phone: "+7 (999) 456-78-90",
      telegram: "@elena_novikova",
    },
  ];

  const promoter = promoters.find((p) => p.id === promoterId);

  if (!isSupervisor || !promoter) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-primary text-primary-foreground px-4 py-4 shadow-md">
        <button
          onClick={() => navigate("/promoters")}
          className="mb-3 text-primary-foreground/90 hover:text-primary-foreground font-semibold flex items-center gap-2 transition-all"
        >
          ← Назад
        </button>
        <h1 className="text-xl font-bold">Детали промоутера</h1>
      </div>

      <div className="px-4 pt-6 pb-4">
        {/* Профиль промоутера */}
        <Card className="p-6 mb-4 shadow-md border-l-4 border-l-primary">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/30">
              <span className="text-3xl font-bold text-primary">{promoter.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold mb-2">{promoter.name}</h2>
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant={promoter.status === "active" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {promoter.status === "active" ? "Активен" : "Неактивен"}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {promoter.role}
                </Badge>
              </div>
            </div>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Card className="p-3 bg-muted/30 border-primary/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Всего мерча</p>
                  <p className="text-xl font-bold">{promoter.totalMerch}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3 bg-muted/30 border-primary/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Уникальных</p>
                  <p className="text-xl font-bold">{promoter.uniquePlayers}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3 bg-muted/30 border-primary/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Новых игроков</p>
                  <p className="text-xl font-bold">{promoter.newPlayers}</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-3 bg-muted/30 border-primary/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Ставок</p>
                  <p className="text-lg font-bold">{promoter.totalBets.toLocaleString()} ₽</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Контакты */}
          <div className="space-y-3 pt-4 border-t">
            <h3 className="font-semibold mb-3">Контакты</h3>
            <Button
              variant="outline"
              className="w-full justify-start h-14 hover:bg-primary/5 hover:border-primary/30"
              onClick={() => window.open(`tel:${promoter.phone}`, "_blank")}
            >
              <Phone className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Телефон</p>
                <p className="font-semibold">{promoter.phone}</p>
              </div>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start h-14 hover:bg-primary/5 hover:border-primary/30"
              onClick={() => window.open(`https://t.me/${promoter.telegram.replace("@", "")}`, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-3 text-primary" />
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Telegram</p>
                <p className="font-semibold">{promoter.telegram}</p>
              </div>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PromoterDetail;
