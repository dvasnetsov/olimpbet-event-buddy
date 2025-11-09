import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, Package, Award, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SupervisorPanel = () => {
  // Текущее мероприятие
  const currentEvent = {
    id: 1,
    name: "Чемпионат России по футболу",
    city: "Москва",
    venue: "Стадион Лужники",
    startDate: "01 ноября 2025",
    endDate: "10 ноября 2025",
    progress: 65,
  };

  // Статистика по мероприятию
  const eventStats = {
    totalBets: 847,
    totalAmount: 2847000,
    merchIssued: 423,
    newPlayers: 156,
  };

  // Промоутеры
  const promoters = [
    {
      id: 1,
      name: "Алексей Иванов",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      betsProcessed: 87,
      merchIssued: 52,
      totalAmount: 304500,
      status: "active" as const,
      lastActive: "2 мин назад",
    },
    {
      id: 2,
      name: "Мария Петрова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      betsProcessed: 124,
      merchIssued: 89,
      totalAmount: 542000,
      status: "active" as const,
      lastActive: "5 мин назад",
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      betsProcessed: 65,
      merchIssued: 41,
      totalAmount: 228000,
      status: "inactive" as const,
      lastActive: "1 час назад",
    },
    {
      id: 4,
      name: "Екатерина Смирнова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kate",
      betsProcessed: 98,
      merchIssued: 67,
      totalAmount: 412500,
      status: "active" as const,
      lastActive: "1 мин назад",
    },
  ];

  // Топ мерча
  const topMerch = [
    { name: "Футболка OlimpBet", issued: 156, stock: 44 },
    { name: "Кепка OlimpBet", issued: 98, stock: 102 },
    { name: "Термос", issued: 76, stock: 24 },
    { name: "Рюкзак спортивный", issued: 54, stock: 46 },
    { name: "Толстовка Premium", issued: 39, stock: 11 },
  ];

  return (
    <Tabs defaultValue="overview" className="w-full">
      {/* Верхняя навигация */}
      <div className="sticky top-0 bg-white z-20 shadow-sm border-b border-border">
        <div className="px-4 pt-4 pb-3">
          <h2 className="text-xl font-bold mb-3">Панель супервайзера</h2>
          <TabsList className="w-full grid grid-cols-2 h-11 rounded-xl bg-gradient-to-r from-muted to-muted/80 shadow-sm">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
            >
              Обзор
            </TabsTrigger>
            <TabsTrigger
              value="promoters"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
            >
              Промоутеры
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      {/* Вкладка: Обзор */}
      <TabsContent value="overview" className="mt-0 px-4 pt-4">
        {/* Текущее мероприятие */}
        <Card className="p-5 mb-6 shadow-sm">
          <h3 className="font-bold text-lg mb-3">{currentEvent.name}</h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{currentEvent.city}, {currentEvent.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{currentEvent.startDate} - {currentEvent.endDate}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Прогресс</span>
            <span className="text-sm font-bold text-primary">{currentEvent.progress}%</span>
          </div>
          <Progress value={currentEvent.progress} className="h-2.5" />
        </Card>

        {/* Общая статистика */}
        <h3 className="text-lg font-bold mb-4">Статистика мероприятия</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{eventStats.totalBets}</p>
            <p className="text-xs text-muted-foreground">Обработано ставок</p>
          </Card>

          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{eventStats.totalAmount.toLocaleString()} ₽</p>
            <p className="text-xs text-muted-foreground">Сумма ставок</p>
          </Card>

          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-purple-500" />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{eventStats.merchIssued}</p>
            <p className="text-xs text-muted-foreground">Выдано мерча</p>
          </Card>

          <Card className="p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{eventStats.newPlayers}</p>
            <p className="text-xs text-muted-foreground">Новых игроков</p>
          </Card>
        </div>

        {/* Топ мерча */}
        <h3 className="text-lg font-bold mb-4">Популярный мерч</h3>
        <div className="space-y-3 pb-4">
          {topMerch.map((item, index) => (
            <Card key={index} className="p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">#{index + 1}</span>
                  </div>
                  <h4 className="font-semibold">{item.name}</h4>
                </div>
                <Badge variant={item.stock > 50 ? "default" : item.stock > 20 ? "secondary" : "destructive"}>
                  {item.stock} шт
                </Badge>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Выдано: {item.issued} шт</span>
                <span className="font-semibold text-foreground">{Math.round((item.issued / (item.issued + item.stock)) * 100)}%</span>
              </div>
              <Progress value={(item.issued / (item.issued + item.stock)) * 100} className="h-2 mt-2" />
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Вкладка: Промоутеры */}
      <TabsContent value="promoters" className="mt-0 px-4 pt-4">
        <h3 className="text-lg font-bold mb-4">Команда промоутеров</h3>
        <div className="space-y-3 pb-4">
          {promoters.map((promoter) => (
            <Card key={promoter.id} className="p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img
                    src={promoter.avatar}
                    alt={promoter.name}
                    className="w-14 h-14 rounded-full border-2 border-border"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    promoter.status === "active" ? "bg-green-500" : "bg-gray-400"
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-base">{promoter.name}</h4>
                    <Badge variant={promoter.status === "active" ? "default" : "secondary"}>
                      {promoter.status === "active" ? "Активен" : "Неактивен"}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{promoter.lastActive}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{promoter.betsProcessed}</p>
                  <p className="text-xs text-muted-foreground">Ставок</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{promoter.merchIssued}</p>
                  <p className="text-xs text-muted-foreground">Мерча</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">{(promoter.totalAmount / 1000).toFixed(0)}К</p>
                  <p className="text-xs text-muted-foreground">Сумма ₽</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default SupervisorPanel;
