import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package } from "lucide-react";
import { toast } from "sonner";

type ApplicationStatus = "reserved" | "issued";

interface Application {
  id: string;
  date: string;
  time: string;
  betId: string;
  merchName: string;
  merchSize: string;
  betAmount: number;
  status: ApplicationStatus;
}

const EventApplications = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/menu');
  };
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Симуляция данных мероприятия
  const eventName = "Чемпионат России по футболу";

  // Загрузка начальных заявок
  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = () => {
    setLoading(true);
    
    // Симуляция загрузки данных
    setTimeout(() => {
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
        },
      ];

      setApplications(prev => [...prev, ...newApplications]);
      setLoading(false);
      setHasMore(applications.length < 20); // Симуляция: больше нет данных после 20
    }, 800);
  };

  const handleStatusChange = (appId: string) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === appId
          ? { ...app, status: "issued" as ApplicationStatus }
          : app
      )
    );
    toast.success("Статус изменен на 'Получен'");
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const bottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 50;
    
    if (bottom && !loading && hasMore) {
      loadApplications();
    }
  };

  return (
    <div className="bg-background min-h-screen pb-4">
      {/* Header */}
      <div className="sticky top-0 bg-white z-20 shadow-sm border-b border-border">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={handleBack}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold leading-tight">{eventName}</h1>
            <p className="text-xs text-muted-foreground">Заявки на мероприятии</p>
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
                variant={app.status === "issued" ? "default" : "secondary"}
                className="shrink-0"
              >
                {app.status === "issued" ? "Получен" : "Зарезервирован"}
              </Badge>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-base mb-0.5">{app.merchName}</p>
                <p className="text-sm text-muted-foreground">
                  Ставка: <span className="font-semibold text-foreground">{app.betAmount.toLocaleString()} ₽</span>
                </p>
              </div>
            </div>

            {app.status === "reserved" && (
              <Button
                onClick={() => handleStatusChange(app.id)}
                className="w-full"
                size="sm"
              >
                Выдать
              </Button>
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
