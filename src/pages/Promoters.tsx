import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Package, Award } from "lucide-react";

const Promoters = () => {
  const navigate = useNavigate();
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

  const promoters = [
    {
      id: "1",
      name: "Иван Петров",
      avatar: "ИП",
      status: "active" as const,
      totalMerch: 24,
      totalBets: 156000,
      phone: "+7 (999) 123-45-67",
      telegram: "@ivan_petrov",
    },
    {
      id: "2",
      name: "Анна Смирнова",
      avatar: "АС",
      status: "active" as const,
      totalMerch: 18,
      totalBets: 98000,
      phone: "+7 (999) 234-56-78",
      telegram: "@anna_smirnova",
    },
    {
      id: "3",
      name: "Дмитрий Козлов",
      avatar: "ДК",
      status: "inactive" as const,
      totalMerch: 15,
      totalBets: 75000,
      phone: "+7 (999) 345-67-89",
      telegram: "@dmitry_kozlov",
    },
    {
      id: "4",
      name: "Елена Новикова",
      avatar: "ЕН",
      status: "active" as const,
      totalMerch: 21,
      totalBets: 132000,
      phone: "+7 (999) 456-78-90",
      telegram: "@elena_novikova",
    },
  ];

  if (!isSupervisor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-primary text-primary-foreground px-4 py-4 shadow-md">
        <button
          onClick={() => navigate("/")}
          className="mb-3 text-primary-foreground/90 hover:text-primary-foreground font-semibold flex items-center gap-2 transition-all"
        >
          ← Назад
        </button>
        <h1 className="text-2xl font-bold">Команда промоутеров</h1>
        <p className="text-primary-foreground/80 text-sm mt-1">
          Всего промоутеров: <span className="font-semibold">{promoters.length}</span>
        </p>
      </div>

      <div className="px-4 pt-6 pb-4 space-y-3">
        {promoters.map((promoter) => (
          <Card
            key={promoter.id}
            className="p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border-l-4 border-l-primary/40 hover:border-l-primary"
            onClick={() => navigate(`/promoters/${promoter.id}`)}
          >
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
                <span className="text-xl font-bold text-primary">{promoter.avatar}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2.5">
                  <h3 className="font-bold text-lg">{promoter.name}</h3>
                  <Badge
                    variant={promoter.status === "active" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {promoter.status === "active" ? "Активен" : "Неактивен"}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2.5 text-sm">
                  <div className="flex items-center gap-1.5">
                    <Package className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Всего:</span>
                    <span className="font-bold text-foreground">{promoter.totalMerch}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Сумма ставок:</span>
                    <span className="font-bold text-foreground">{promoter.totalBets.toLocaleString()} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Promoters;
