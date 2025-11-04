import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const currentEvent = {
    id: 1,
    name: "Чемпионат России по футболу",
    city: "Москва",
    venue: "Стадион Лужники",
    progress: 65,
    banner: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    categories: [
      {
        id: "silver",
        name: "Silver",
        minBet: 1000,
        maxBet: 5000,
        prizes: [
          { id: 1, name: "Футболка OlimpBet", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80", stock: 15 },
          { id: 2, name: "Кепка OlimpBet", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&q=80", stock: 20 },
          { id: 3, name: "Термос", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=80", stock: 10 },
        ],
      },
      {
        id: "gold",
        name: "Gold",
        minBet: 5000,
        maxBet: 15000,
        prizes: [
          { id: 4, name: "Толстовка Premium", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80", stock: 8 },
          { id: 5, name: "Рюкзак спортивный", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80", stock: 12 },
          { id: 6, name: "Беспроводные наушники", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80", stock: 5 },
        ],
      },
      {
        id: "platinum",
        name: "Platinum",
        minBet: 15000,
        maxBet: 50000,
        prizes: [
          { id: 7, name: "Куртка зимняя", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80", stock: 3 },
          { id: 8, name: "Умные часы", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80", stock: 4 },
          { id: 9, name: "Сертификат 5000₽", image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=200&q=80", stock: 6 },
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
      dates: "15-20 декабря 2025",
      banner: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80",
    },
    {
      id: 3,
      name: "Баскетбольная лига",
      city: "Казань",
      venue: "Спорт-арена",
      dates: "1-10 января 2026",
      banner: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
  ];

  if (selectedCategory) {
    const category = currentEvent.categories.find((c) => c.id === selectedCategory);
    if (!category) return null;

    return (
      <div className="p-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-4 text-primary font-medium flex items-center gap-2"
        >
          ← Назад
        </button>
        
        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-muted-foreground mb-6">
          Диапазон ставок: {category.minBet.toLocaleString()} – {category.maxBet.toLocaleString()} ₽
        </p>

        <div className="space-y-4">
          {category.prizes.map((prize) => (
            <Card key={prize.id} className="p-4 shadow-sm">
              <div className="flex gap-4">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{prize.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    В наличии: <span className="font-medium text-foreground">{prize.stock} шт</span>
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-muted rounded text-xs">S</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">M</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">L</span>
                    <span className="px-2 py-1 bg-muted rounded text-xs">XL</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Tabs defaultValue="current" className="w-full">
        <div className="sticky top-0 bg-background z-10 border-b border-border">
          <TabsList className="w-full grid grid-cols-2 h-14 rounded-none">
            <TabsTrigger value="current" className="data-[state=active]:text-primary">
              Текущее
            </TabsTrigger>
            <TabsTrigger value="future" className="data-[state=active]:text-primary">
              Будущие
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="current" className="mt-0 p-4">
          {/* Event Banner */}
          <div
            className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-md"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${currentEvent.banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h1 className="text-2xl font-bold mb-2">{currentEvent.name}</h1>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{currentEvent.city}, {currentEvent.venue}</span>
              </div>
            </div>
          </div>

          {/* Progress */}
          <Card className="p-4 mb-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Прогресс мероприятия
              </span>
              <span className="text-sm font-bold text-primary">{currentEvent.progress}%</span>
            </div>
            <Progress value={currentEvent.progress} className="h-2" />
          </Card>

          {/* Categories */}
          <h2 className="text-xl font-bold mb-4">Категории призов</h2>
          <div className="space-y-3">
            {currentEvent.categories.map((category) => (
              <Card
                key={category.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow shadow-sm"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.minBet.toLocaleString()} – {category.maxBet.toLocaleString()} ₽
                    </p>
                  </div>
                  <span className="text-primary font-medium">→</span>
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {category.prizes.map((prize) => (
                    <img
                      key={prize.id}
                      src={prize.image}
                      alt={prize.name}
                      className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="future" className="mt-0 p-4">
          <h2 className="text-xl font-bold mb-4">Предстоящие мероприятия</h2>
          <div className="space-y-4">
            {futureEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div
                  className="h-32 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${event.banner})`,
                  }}
                >
                  <div className="absolute bottom-2 left-3 text-white">
                    <h3 className="font-bold text-lg">{event.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.city}, {event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.dates}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;
