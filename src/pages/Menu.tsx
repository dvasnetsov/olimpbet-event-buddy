import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Package, User, MapPin, Award } from "lucide-react";

const Menu = () => {
  const activities = [
    {
      id: 1,
      name: "Чемпионат России по футболу",
      dates: "01-10 ноября 2025",
      city: "Москва",
      requests: 45,
      active: true,
    },
    {
      id: 2,
      name: "Хоккейный турнир",
      dates: "15-20 октября 2025",
      city: "Санкт-Петербург",
      requests: 32,
      active: false,
    },
    {
      id: 3,
      name: "Баскетбольная лига",
      dates: "05-12 сентября 2025",
      city: "Казань",
      requests: 28,
      active: false,
    },
  ];

  const requests = [
    {
      id: 1,
      date: "10 ноября, 14:30",
      username: "user123",
      merch: "Футболка M",
      amount: 3500,
      status: "received",
    },
    {
      id: 2,
      date: "10 ноября, 12:15",
      username: "player456",
      merch: "Кепка One Size",
      amount: 2500,
      status: "reserved",
    },
    {
      id: 3,
      date: "09 ноября, 18:45",
      username: "bettor789",
      merch: "Толстовка L",
      amount: 8500,
      status: "received",
    },
    {
      id: 4,
      date: "09 ноября, 16:20",
      username: "gamer101",
      merch: "Рюкзак",
      amount: 12000,
      status: "cancelled",
    },
  ];

  const profile = {
    name: "Иван Петров",
    city: "Москва",
    role: "Промоутер",
    avatar: "ИП",
    stats: {
      events: 12,
      requests: 156,
      totalBets: "₽2,450,000",
    },
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: "default" | "secondary" | "destructive" }> = {
      reserved: { label: "Зарезервирован", variant: "default" },
      received: { label: "Получен", variant: "secondary" },
      cancelled: { label: "Отменён", variant: "destructive" },
    };
    const config = variants[status] || variants.reserved;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen">
      <Tabs defaultValue="activity" className="w-full">
        <div className="sticky top-0 bg-background z-10 border-b border-border">
          <TabsList className="w-full grid grid-cols-3 h-14 rounded-none">
            <TabsTrigger value="activity" className="data-[state=active]:text-primary">
              Активность
            </TabsTrigger>
            <TabsTrigger value="requests" className="data-[state=active]:text-primary">
              Заявки
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:text-primary">
              Профиль
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="activity" className="mt-0 p-4">
          <h2 className="text-xl font-bold mb-4">История мероприятий</h2>
          <div className="space-y-3">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className={`p-4 shadow-sm ${activity.active ? "border-2 border-primary" : ""}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{activity.name}</h3>
                    {activity.active && (
                      <Badge className="mb-2">Активное</Badge>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{activity.dates}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{activity.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Package className="w-4 h-4" />
                    <span>{activity.requests} заявок</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="mt-0 p-4">
          <h2 className="text-xl font-bold mb-4">История заявок</h2>
          <div className="space-y-3">
            {requests.map((request) => (
              <Card key={request.id} className="p-4 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{request.date}</p>
                    <p className="font-semibold">@{request.username}</p>
                  </div>
                  {getStatusBadge(request.status)}
                </div>
                
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground">
                    Мерч: <span className="text-foreground font-medium">{request.merch}</span>
                  </p>
                  <p className="text-muted-foreground">
                    Ставка: <span className="text-foreground font-medium">{request.amount.toLocaleString()} ₽</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-0 p-4">
          <Card className="p-6 mb-6 shadow-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">{profile.avatar}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{profile.name}</h2>
                <p className="text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {profile.city}
                </p>
                <Badge variant="secondary" className="mt-1">{profile.role}</Badge>
              </div>
            </div>
          </Card>

          <h3 className="text-lg font-bold mb-4">Статистика</h3>
          <div className="grid grid-cols-1 gap-3">
            <Card className="p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{profile.stats.events}</p>
                  <p className="text-sm text-muted-foreground">Мероприятий</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{profile.stats.requests}</p>
                  <p className="text-sm text-muted-foreground">Заявок обработано</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{profile.stats.totalBets}</p>
                  <p className="text-sm text-muted-foreground">Общая сумма ставок</p>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Menu;
