import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Package, MapPin, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Menu = () => {
  const [expandedActivity, setExpandedActivity] = useState<number | null>(null);

  const activities = [
    {
      id: 1,
      name: "Чемпионат России по футболу",
      dates: "01 ноября 10:00 - 10 ноября 22:00, 2025",
      city: "Москва",
      requests: 45,
      active: true,
      requestsList: [
        {
          id: 1,
          date: "10 ноября, 14:30",
          playerId: "123456",
          merch: "Футболка M",
          amount: 3500,
          status: "received",
        },
        {
          id: 2,
          date: "10 ноября, 12:15",
          playerId: "789012",
          merch: "Кепка One Size",
          amount: 2500,
          status: "reserved",
        },
      ],
    },
    {
      id: 2,
      name: "Хоккейный турнир",
      dates: "15 октября 12:00 - 20 октября 20:00, 2025",
      city: "Санкт-Петербург",
      requests: 32,
      active: false,
      requestsList: [
        {
          id: 3,
          date: "20 октября, 18:45",
          playerId: "345678",
          merch: "Толстовка L",
          amount: 8500,
          status: "received",
        },
        {
          id: 4,
          date: "19 октября, 16:20",
          playerId: "901234",
          merch: "Рюкзак",
          amount: 12000,
          status: "cancelled",
        },
      ],
    },
    {
      id: 3,
      name: "Баскетбольная лига",
      dates: "5 сентября 14:00 - 12 сентября 21:00, 2025",
      city: "Казань",
      requests: 28,
      active: false,
      requestsList: [
        {
          id: 5,
          date: "12 сентября, 15:00",
          playerId: "567890",
          merch: "Футболка L",
          amount: 4500,
          status: "received",
        },
      ],
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
        <div className="sticky top-0 bg-background z-10 shadow-sm px-4 pt-3 pb-0">
          <TabsList className="w-full grid grid-cols-2 h-11 rounded-xl bg-muted mb-3">
            <TabsTrigger value="activity" className="data-[state=active]:text-primary font-medium rounded-lg">
              Активность
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:text-primary font-medium rounded-lg">
              Профиль
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="activity" className="mt-0 px-4 pt-2">
          <h2 className="text-xl font-bold mb-4">История мероприятий</h2>
          <div className="space-y-3">
            {activities.map((activity) => (
              <Card
                key={activity.id}
                className={`shadow-sm ${activity.active ? "border-2 border-primary" : ""}`}
              >
                <div 
                  className="p-4 cursor-pointer"
                  onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{activity.name}</h3>
                      {activity.active && (
                        <Badge className="mb-2">Активное</Badge>
                      )}
                    </div>
                    {expandedActivity === activity.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
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
                </div>

                {expandedActivity === activity.id && (
                  <div className="border-t border-border p-4 space-y-3 bg-muted/30">
                    <h4 className="font-semibold text-sm">Заявки на мероприятии:</h4>
                    {activity.requestsList.map((request) => (
                      <Card key={request.id} className="p-3 bg-background">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">{request.date}</p>
                            <p className="font-semibold text-sm">ID {request.playerId}</p>
                          </div>
                          {getStatusBadge(request.status)}
                        </div>
                        
                        <div className="space-y-1 text-xs">
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
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="profile" className="mt-0 px-4 pt-2">
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
                  <p className="text-sm text-muted-foreground">Выдано мерча</p>
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
