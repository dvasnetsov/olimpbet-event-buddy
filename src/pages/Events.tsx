import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, X, Trophy, Package, Calendar, ClipboardList, MessageCircle, Users, TrendingUp, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ContainedDialog as Dialog,
  ContainedDialogContent as DialogContent,
} from "@/components/ContainedDialog";
import {
  ContainedDrawer as Drawer,
  ContainedDrawerContent as DrawerContent,
  ContainedDrawerHeader as DrawerHeader,
  ContainedDrawerTitle as DrawerTitle,
} from "@/components/ContainedDrawer";

const Events = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrize, setSelectedPrize] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [isSupervisor, setIsSupervisor] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkMode = () => {
      const mode = localStorage.getItem("userMode") || "promoter";
      setIsSupervisor(mode === "supervisor");
    };
    
    checkMode();
    window.addEventListener("userModeChanged", checkMode);
    return () => window.removeEventListener("userModeChanged", checkMode);
  }, []);

  const currentEvent = {
    id: 1,
    name: "Чемпионат России по футболу",
    city: "Москва",
    venue: "Стадион Лужники",
    startDate: "01 ноября 2025",
    startTime: "10:00",
    endDate: "10 ноября 2025",
    endTime: "22:00",
    progress: 65,
    banner: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    betType: "Любой матч" as const,
    maxMerchPerPerson: 3,
    categories: [
      {
        id: "silver",
        name: "Silver",
        minBet: 1000,
        maxBet: 5000,
        prizes: [
          { 
            id: 1, 
            name: "Футболка OlimpBet", 
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
            sizes: [
              { size: "S", stock: 3 },
              { size: "M", stock: 5 },
              { size: "L", stock: 4 },
              { size: "XL", stock: 3 }
            ]
          },
          { 
            id: 2, 
            name: "Кепка OlimpBet", 
            image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&q=80",
            sizes: [{ size: "One Size", stock: 20 }]
          },
          { 
            id: 3, 
            name: "Термос", 
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=80",
            sizes: [
              { size: "500ml", stock: 6 },
              { size: "750ml", stock: 4 }
            ]
          },
        ],
      },
      {
        id: "gold",
        name: "Gold",
        minBet: 5000,
        maxBet: 15000,
        prizes: [
          { 
            id: 4, 
            name: "Толстовка Premium", 
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80",
            sizes: [
              { size: "M", stock: 2 },
              { size: "L", stock: 4 },
              { size: "XL", stock: 2 }
            ]
          },
          { 
            id: 5, 
            name: "Рюкзак спортивный", 
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80",
            sizes: [{ size: "One Size", stock: 12 }]
          },
          { 
            id: 6, 
            name: "Беспроводные наушники", 
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
            sizes: [{ size: "One Size", stock: 5 }]
          },
        ],
      },
      {
        id: "platinum",
        name: "Platinum",
        minBet: 15000,
        maxBet: 50000,
        prizes: [
          { 
            id: 7, 
            name: "Куртка зимняя", 
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
            sizes: [
              { size: "M", stock: 1 },
              { size: "L", stock: 1 },
              { size: "XL", stock: 1 }
            ]
          },
          { 
            id: 8, 
            name: "Умные часы", 
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80",
            sizes: [{ size: "One Size", stock: 4 }]
          },
          { 
            id: 9, 
            name: "Сертификат 5000₽", 
            image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=200&q=80",
            sizes: [{ size: "One Size", stock: 6 }]
          },
        ],
      },
    ],
  };

  const futureEvents = [
    {
      id: 2,
      name: "Хоккейный турнир",
      city: "Санкт-Петербург",
      venue: "Ледовый дворец",
      startDate: "15 декабря 2025",
      startTime: "12:00",
      endDate: "20 декабря 2025",
      endTime: "20:00",
      banner: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80",
    },
    {
      id: 3,
      name: "Баскетбольная лига",
      city: "Казань",
      venue: "Спорт-арена",
      startDate: "1 января 2026",
      startTime: "14:00",
      endDate: "10 января 2026",
      endTime: "21:00",
      banner: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
  ];

  const getTotalStock = (prize: any) => {
    return prize.sizes.reduce((sum: number, s: any) => sum + s.stock, 0);
  };

  const getSizeStock = (size: string) => {
    if (!selectedPrize) return 0;
    const sizeData = selectedPrize.sizes.find((s: any) => s.size === size);
    return sizeData ? sizeData.stock : 0;
  };

  // Промоутеры для супервайзера
  const promoters = [
    {
      id: "1",
      name: "Иван Петров",
      avatar: "ИП",
      status: "active" as const,
      totalMerch: 24,
      todayMerch: 8,
      totalBets: 156000,
    },
    {
      id: "2",
      name: "Анна Смирнова",
      avatar: "АС",
      status: "active" as const,
      totalMerch: 18,
      todayMerch: 5,
      totalBets: 98000,
    },
    {
      id: "3",
      name: "Дмитрий Козлов",
      avatar: "ДК",
      status: "inactive" as const,
      totalMerch: 15,
      todayMerch: 0,
      totalBets: 75000,
    },
    {
      id: "4",
      name: "Елена Новикова",
      avatar: "ЕН",
      status: "active" as const,
      totalMerch: 21,
      todayMerch: 6,
      totalBets: 132000,
    },
  ];

  if (selectedCategory) {
    const category = currentEvent.categories.find((c) => c.id === selectedCategory);
    if (!category) return null;

  return (
    <div className="px-4 pt-6 bg-white pb-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-5 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
        >
          ← Назад
        </button>
        
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Диапазон ставок: <span className="font-semibold text-foreground">{category.minBet.toLocaleString()} – {category.maxBet.toLocaleString()} ₽</span>
        </p>

        <div className="space-y-3 pb-4">
          {category.prizes.map((prize) => (
            <Card key={prize.id} className="p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4 items-center">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-20 h-20 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform flex-shrink-0"
                  onClick={() => setFullscreenImage(prize.image)}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base mb-1.5">{prize.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    В наличии: <span className="font-semibold text-foreground">{getTotalStock(prize)} шт</span>
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedPrize(prize)}
                    className="rounded-lg"
                  >
                    Выбрать размер
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Size Selection Drawer */}
        <Drawer open={!!selectedPrize} onOpenChange={() => { setSelectedPrize(null); setSelectedSize(""); }}>
          <DrawerContent className="max-h-[60vh]">
            <DrawerHeader className="pb-2">
              <DrawerTitle className="text-xl font-bold">{selectedPrize?.name}</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-6 pt-2">
              <p className="text-sm text-muted-foreground mb-4">Выберите размер</p>
              <div className="grid grid-cols-2 gap-3">
                {selectedPrize?.sizes.map((sizeData: any) => (
                  <Button
                    key={sizeData.size}
                    variant={selectedSize === sizeData.size ? "default" : "outline"}
                    onClick={() => setSelectedSize(sizeData.size)}
                    className="h-20 flex flex-col items-center justify-center rounded-xl"
                  >
                    <span className="font-bold text-lg">{sizeData.size}</span>
                    <span className="text-xs mt-1 opacity-80">{sizeData.stock} шт</span>
                  </Button>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        {/* Fullscreen Image Modal */}
        <Dialog open={!!fullscreenImage} onOpenChange={() => setFullscreenImage(null)}>
          <DialogContent className="p-0 bg-black border-0">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
            >
              <X className="w-7 h-7 text-white" />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={fullscreenImage || ""}
                alt="Fullscreen view"
                className="w-full h-full object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Если текущего мероприятия нет
  const hasCurrentEvent = currentEvent !== null;

  if (!hasCurrentEvent) {
    return (
      <div className="bg-white pb-8 px-4 pt-8 flex flex-col items-center justify-center min-h-[500px]">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Calendar className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-xl font-bold mb-2 text-center">Нет текущего мероприятия</h2>
        <p className="text-muted-foreground text-center mb-6">
          На данный момент активных мероприятий нет
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white pb-4 px-4 pt-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-5">Текущее мероприятие</h1>
      
      {/* Event Banner */}
      <div
        className="relative h-52 rounded-2xl overflow-hidden mb-6 shadow-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${currentEvent.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!isSupervisor && (
          <button
            onClick={() => navigate("/contact")}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg"
            aria-label="Связаться с супервайзером"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
        )}
        <div className="absolute bottom-5 left-5 right-5 text-white">
          <h1 className="text-2xl font-bold mb-2 leading-tight">{currentEvent.name}</h1>
          <div className="flex items-center gap-2 text-sm opacity-95">
            <MapPin className="w-4 h-4" />
            <span>{currentEvent.city}, {currentEvent.venue}</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <Card className="p-5 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            Прогресс мероприятия
          </span>
          <span className="text-sm font-bold text-primary">{currentEvent.progress}%</span>
        </div>
        <Progress value={currentEvent.progress} className="h-2.5 mb-4" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>
            {currentEvent.startDate}, {currentEvent.startTime}
          </span>
          <span>
            {currentEvent.endDate}, {currentEvent.endTime}
          </span>
        </div>
      </Card>

      {/* Event Rules */}
      <Card className="p-5 mb-6 shadow-sm">
        <h3 className="font-semibold mb-3">Правила мероприятия</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">На что ставить</p>
              <p className="font-semibold text-base">{currentEvent.betType}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Максимум в одни руки</p>
              <p className="font-semibold text-base">{currentEvent.maxMerchPerPerson} шт</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Выдача мерча</p>
              <p className="font-semibold text-base">Сразу при формировании ставки</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Кнопка заявок */}
      <Button
        onClick={() => navigate(`/event/${currentEvent.id}`)}
        className="w-full mb-6 h-14"
        size="lg"
      >
        <ClipboardList className="w-5 h-5 mr-2" />
        {isSupervisor ? "Все заявки" : "Заявки на мерч"}
      </Button>

      {/* Кнопка списка промоутеров для супервайзера */}
      {isSupervisor && (
        <Button
          onClick={() => navigate("/promoters")}
          variant="outline"
          className="w-full mb-6 h-14"
          size="lg"
        >
          <Users className="w-5 h-5 mr-2" />
          Команда промоутеров
        </Button>
      )}

      {/* Категории призов */}
      <h2 className="text-xl font-bold mb-4">Категории призов</h2>
      <div className="space-y-3 pb-4">
        {currentEvent.categories.map((category) => (
          <Card
            key={category.id}
            className="p-5 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] shadow-sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.minBet.toLocaleString()} – {category.maxBet.toLocaleString()} ₽
                </p>
              </div>
              <span className="text-primary font-medium text-xl">→</span>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {category.prizes.map((prize) => (
                <img
                  key={prize.id}
                  src={prize.image}
                  alt={prize.name}
                  className="w-16 h-16 object-cover rounded-xl flex-shrink-0 ring-1 ring-border"
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
