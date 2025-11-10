import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package, Users, TrendingUp, Award } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

type ApplicationStatus = "reserved" | "issued" | "cancelled";

interface Application {
  id: string;
  date: string;
  time: string;
  betId: string;
  merchName: string;
  merchSize: string;
  betAmount: number;
  status: ApplicationStatus;
  isNewbie: boolean;
  promoterName?: string;
  promoterAvatar?: string;
}

interface Promoter {
  id: string;
  name: string;
  avatar: string;
  status: "active" | "inactive";
  totalMerch: number;
  todayMerch: number;
  totalBets: number;
  merchDetails: {
    category: string;
    count: number;
  }[];
}

const EventApplications = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [isSupervisor, setIsSupervisor] = useState(false);

  const handleBack = () => {
    navigate('/');
  };
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Симуляция данных мероприятия
  const eventName = "Чемпионат России по футболу";

  // Промоутеры для супервайзера
  const [promoters] = useState<Promoter[]>([
    {
      id: "1",
      name: "Иван Петров",
      avatar: "ИП",
      status: "active",
      totalMerch: 24,
      todayMerch: 8,
      totalBets: 156000,
      merchDetails: [
        { category: "Silver", count: 12 },
        { category: "Gold", count: 8 },
        { category: "Platinum", count: 4 },
      ],
    },
    {
      id: "2",
      name: "Анна Смирнова",
      avatar: "АС",
      status: "active",
      totalMerch: 18,
      todayMerch: 5,
      totalBets: 98000,
      merchDetails: [
        { category: "Silver", count: 10 },
        { category: "Gold", count: 6 },
        { category: "Platinum", count: 2 },
      ],
    },
    {
      id: "3",
      name: "Дмитрий Козлов",
      avatar: "ДК",
      status: "inactive",
      totalMerch: 15,
      todayMerch: 0,
      totalBets: 75000,
      merchDetails: [
        { category: "Silver", count: 9 },
        { category: "Gold", count: 4 },
        { category: "Platinum", count: 2 },
      ],
    },
    {
      id: "4",
      name: "Елена Новикова",
      avatar: "ЕН",
      status: "active",
      totalMerch: 21,
      todayMerch: 6,
      totalBets: 132000,
      merchDetails: [
        { category: "Silver", count: 11 },
        { category: "Gold", count: 7 },
        { category: "Platinum", count: 3 },
      ],
    },
  ]);

  // Проверка режима
  useEffect(() => {
    const checkMode = () => {
      const mode = localStorage.getItem("userMode") || "promoter";
      setIsSupervisor(mode === "supervisor");
    };
    
    checkMode();
    window.addEventListener("userModeChanged", checkMode);
    return () => window.removeEventListener("userModeChanged", checkMode);
  }, []);

  const loadApplications = () => {
    setLoading(true);
    
    // Симуляция загрузки данных
    setTimeout(() => {
      const promotersList = ["Иван Петров", "Анна Смирнова", "Дмитрий Козлов", "Елена Новикова"];
      const avatarsList = ["ИП", "АС", "ДК", "ЕН"];
      
      const newApplications: Application[] = [
        {
          id: "123456",
          date: "10 ноября",
          time: "14:30",
          betId: "ID 123456",
          merchName: "Футболка M",
          merchSize: "M",
          betAmount: 3500,
          status: "issued",
          isNewbie: true,
          promoterName: promotersList[0],
          promoterAvatar: avatarsList[0],
        },
        {
          id: "789012",
          date: "10 ноября",
          time: "12:15",
          betId: "ID 789012",
          merchName: "Кепка One Size",
          merchSize: "One Size",
          betAmount: 2500,
          status: "reserved",
          isNewbie: false,
          promoterName: promotersList[1],
          promoterAvatar: avatarsList[1],
        },
        {
          id: "345678",
          date: "9 ноября",
          time: "18:45",
          betId: "ID 345678",
          merchName: "Термос 500ml",
          merchSize: "500ml",
          betAmount: 4200,
          status: "reserved",
          isNewbie: true,
          promoterName: promotersList[0],
          promoterAvatar: avatarsList[0],
        },
        {
          id: "901234",
          date: "9 ноября",
          time: "16:20",
          betId: "ID 901234",
          merchName: "Футболка L",
          merchSize: "L",
          betAmount: 3800,
          status: "issued",
          isNewbie: false,
          promoterName: promotersList[2],
          promoterAvatar: avatarsList[2],
        },
        {
          id: "567890",
          date: "8 ноября",
          time: "11:10",
          betId: "ID 567890",
          merchName: "Рюкзак спортивный",
          merchSize: "One Size",
          betAmount: 8500,
          status: "reserved",
          isNewbie: false,
          promoterName: promotersList[3],
          promoterAvatar: avatarsList[3],
        },
      ];

      setApplications(prev => [...prev, ...newApplications]);
      setLoading(false);
      setHasMore(applications.length < 20); // Симуляция: больше нет данных после 20
    }, 800);
  };

  const handleStatusChange = (appId: string, newStatus: ApplicationStatus) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === appId
          ? { ...app, status: newStatus }
          : app
      )
    );
    const statusText = newStatus === "issued" ? "Получен" : "Отменена";
    toast.success(`Статус изменен на '${statusText}'`);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const bottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    
    if (bottom && !loading && hasMore) {
      loadApplications();
    }
  };

  // Загрузка начальных заявок
  useEffect(() => {
    window.scrollTo(0, 0);
    loadApplications();
  }, []);

  // Общий рендер для обоих режимов
  return (
    <div className="bg-white min-h-screen pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-white z-20 shadow-sm border-b border-border pt-6">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={handleBack}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold leading-tight">{eventName}</h1>
            <p className="text-xs text-muted-foreground">
              {isSupervisor ? "Все заявки от промоутеров" : "Мои заявки на мероприятии"}
            </p>
          </div>
          <Badge variant="secondary" className="text-xs">
            {applications.length} заявок
          </Badge>
        </div>
      </div>

      {/* Applications List */}
      <div className="px-4 pt-6 space-y-3 pb-20" onScroll={handleScroll}>
        {applications.map((app) => (
          <Card key={app.id} className="p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted-foreground">
                    {app.date}, {app.time}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{app.betId}</p>
              </div>
              <Badge
                variant={
                  app.status === "issued" 
                    ? "default" 
                    : app.status === "cancelled" 
                    ? "destructive" 
                    : "secondary"
                }
                className="shrink-0"
              >
                {app.status === "issued" ? "Получен" : app.status === "cancelled" ? "Отменена" : "Зарезервирован"}
              </Badge>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-base mb-0.5">{app.merchName}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm text-muted-foreground">
                    Ставка: <span className="font-semibold text-foreground">{app.betAmount.toLocaleString()} ₽</span>
                  </p>
                  {app.isNewbie && (
                    <Badge variant="outline" className="text-xs">Новичок</Badge>
                  )}
                </div>
                {/* Информация о промоутере - только для супервайзера */}
                {isSupervisor && app.promoterName && (
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">{app.promoterAvatar}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Промоутер: <span className="font-semibold text-foreground">{app.promoterName}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>

            {app.status === "reserved" && !isSupervisor && (
              <div className="flex gap-2">
                <Button
                  onClick={() => handleStatusChange(app.id, "issued")}
                  className="flex-1"
                  size="sm"
                >
                  Выдать
                </Button>
                <Button
                  onClick={() => handleStatusChange(app.id, "cancelled")}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  Отменить
                </Button>
              </div>
            )}
          </Card>
        ))}

        {loading && (
          <div className="text-center py-4">
            <div className="inline-block w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!hasMore && applications.length > 0 && (
          <p className="text-center text-sm text-muted-foreground py-4">
            Все заявки загружены
          </p>
        )}
      </div>
    </div>
  );
};

export default EventApplications;
