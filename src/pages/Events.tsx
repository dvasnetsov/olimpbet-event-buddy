import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrize, setSelectedPrize] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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
    banner:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
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
            image:
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=80",
            sizes: [
              { size: "S", stock: 3 },
              { size: "M", stock: 5 },
              { size: "L", stock: 4 },
              { size: "XL", stock: 3 },
            ],
          },
          {
            id: 2,
            name: "Кепка OlimpBet",
            image:
              "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=200&q=80",
            sizes: [{ size: "One Size", stock: 20 }],
          },
          {
            id: 3,
            name: "Термос",
            image:
              "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=80",
            sizes: [
              { size: "500ml", stock: 6 },
              { size: "750ml", stock: 4 },
            ],
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
            image:
              "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&q=80",
            sizes: [
              { size: "M", stock: 2 },
              { size: "L", stock: 4 },
              { size: "XL", stock: 2 },
            ],
          },
          {
            id: 5,
            name: "Рюкзак спортивный",
            image:
              "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&q=80",
            sizes: [{ size: "One Size", stock: 12 }],
          },
          {
            id: 6,
            name: "Беспроводные наушники",
            image:
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
            sizes: [{ size: "One Size", stock: 5 }],
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
            image:
              "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80",
            sizes: [
              { size: "M", stock: 1 },
              { size: "L", stock: 1 },
              { size: "XL", stock: 1 },
            ],
          },
          {
            id: 8,
            name: "Умные часы",
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80",
            sizes: [{ size: "One Size", stock: 4 }],
          },
          {
            id: 9,
            name: "Сертификат 5000₽",
            image:
              "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=200&q=80",
            sizes: [{ size: "One Size", stock: 6 }],
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
      banner:
        "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80",
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
      banner:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
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

  // Экран категории призов (Silver / Gold / Platinum)
  if (selectedCategory) {
    const category = currentEvent.categories.find(
      (c) => c.id === selectedCategory,
    );
    if (!category) return null;

    return (
      <div className="p-4 pb-24">
        <button
          onClick={() => setSelectedCategory(null)}
          className="mb-4 text-primary font-medium flex items-center gap-2"
        >
          ← Назад
        </button>

        <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
        <p className="text-muted-foreground mb-6">
          Диапазон ставок: {category.minBet.toLocaleString()} –{" "}
          {category.maxBet.toLocaleString()} ₽
        </p>

        <div className="space-y-4">
          {category.prizes.map((prize) => (
            <Card key={prize.id} className="p-4 shadow-sm">
              <div className="flex gap-4">
                <img
                  src={prize.image}
                  alt={prize.name}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setFullscreenImage(prize.image)}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{prize.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Всего в наличии:{" "}
                    <span className="font-medium text-foreground">
                      {getTotalStock(prize)} шт
                    </span>
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedPrize(prize);
                      setSelectedSize("");
                    }}
                  >
                    Доступные размеры
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom sheet: выбор размера */}
        <Dialog
          open={!!selectedPrize}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedPrize(null);
              setSelectedSize("");
            }
          }}
        >
          <DialogContent
            className="
              w-full max-w-md
              fixed bottom-0 left-1/2 -translate-x-1/2
              rounded-t-3xl border-t bg-background px-6 pb-6 pt-4
              sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 sm:rounded-2xl
            "
          >
            <div className="h-1 w-10 bg-muted-foreground/40 rounded-full mx-auto mb-3" />

            <h3 className="text-lg font-semibold mb-1">
              {selectedPrize?.name}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Размеры и наличие
            </p>

            <div className="grid grid-cols-3 gap-3">
              {selectedPrize?.sizes.map((sizeData: any) => {
                const isActive = selectedSize === sizeData.size;
                return (
                  <button
                    key={sizeData.size}
                    type="button"
                    onClick={() => setSelectedSize(sizeData.size)}
                    className={[
                      "h-16 rounded-xl border text-center flex flex-col items-center justify-center text-sm transition",
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted/40 border-border hover:bg-muted",
                    ].join(" ")}
                  >
                    <span className="font-semibold text-base leading-none">
                      {sizeData.size}
                    </span>
                    <span className="text-[11px] mt-1">
                      {sizeData.stock} шт
                    </span>
                  </button>
                );
              })}
            </div>

            {selectedSize && (
              <p className="mt-4 text-xs text-muted-foreground">
                Выбран размер{" "}
                <span className="font-medium text-foreground">
                  {selectedSize}
                </span>
                , доступно{" "}
                <span className="font-medium text-foreground">
                  {getSizeStock(selectedSize)} шт
                </span>
                .
              </p>
            )}
          </DialogContent>
        </Dialog>

        {/* Fullscreen Image Modal */}
        <Dialog
          open={!!fullscreenImage}
          onOpenChange={() => setFullscreenImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-black/95">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <img
              src={fullscreenImage || ""}
              alt="Fullscreen view"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  // Главный экран "Текущее / Будущие"
  return (
    <div className="pb-24">
      <Tabs defaultValue="current" className="w-full">
        {/* Залипающая шапка с табами, сплошной белый фон сверху */}
        <div className="sticky top-0 z-20 bg-white pt-3 pb-3">
          <TabsList className="w-full grid grid-cols-2 h-14 rounded-2xl bg-muted">
            <TabsTrigger
              value="current"
              className="data-[state=active]:text-primary"
            >
              Текущее
            </TabsTrigger>
            <TabsTrigger
              value="future"
              className="data-[state=active]:text-primary"
            >
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
                <span>
                  {currentEvent.city}, {currentEvent.venue}
                </span>
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
              <span className="text-sm font-bold text-primary">
                {currentEvent.progress}%
              </span>
            </div>
            <Progress value={currentEvent.progress} className="h-2 mb-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>
                Начало: {currentEvent.startDate}, {currentEvent.startTime}
              </span>
              <span>
                Конец: {currentEvent.endDate}, {currentEvent.endTime}
              </span>
            </div>
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
                      {category.minBet.toLocaleString()} –{" "}
                      {category.maxBet.toLocaleString()} ₽
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
              <Card
                key={event.id}
                className="overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
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
                    <span>
                      {event.city}, {event.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>
                      {event.startDate} {event.startTime} - {event.endDate}{" "}
                      {event.endTime}
                    </span>
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
