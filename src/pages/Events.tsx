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
    ],
  };

  const getTotalStock = (prize: any) =>
    prize.sizes.reduce((sum: number, s: any) => sum + s.stock, 0);

  const getSizeStock = (size: string) => {
    if (!selectedPrize) return 0;
    const sizeData = selectedPrize.sizes.find((s: any) => s.size === size);
    return sizeData ? sizeData.stock : 0;
  };

  // === ЭКРАН КАТЕГОРИИ ПРИЗОВ ===
  if (selectedCategory) {
    const category = currentEvent.categories.find(
      (c) => c.id === selectedCategory
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

        {/* === НИЖНИЙ ДИАЛОГ (bottom sheet) === */}
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
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md rounded-t-3xl border-t bg-background px-6 pb-6 pt-4 sm:static sm:translate-x-0 sm:rounded-2xl"
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
                    className={`h-16 rounded-xl border text-center flex flex-col items-center justify-center text-sm transition ${
                      isActive
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted/40 border-border hover:bg-muted"
                    }`}
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

        {/* === Фуллскрин изображение === */}
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

  // === ГЛАВНЫЙ ЭКРАН ===
  return (
    <div className="bg-white pb-24">
      <Tabs defaultValue="current" className="w-full">
        {/* залипающий верхний блок */}
        <div className="sticky top-0 z-30 bg-white pt-3 pb-3 shadow-sm">
          <div className="absolute top-0 left-0 w-full h-4 bg-white" />
          <TabsList className="w-full grid grid-cols-2 h-14 rounded-2xl bg-muted">
            <TabsTrigger value="current" className="data-[state=active]:text-primary">
              Текущее
            </TabsTrigger>
            <TabsTrigger value="future" className="data-[state=active]:text-primary">
              Будущие
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="current" className="mt-0 p-4">
          {/* баннер мероприятия */}
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

          {/* прогресс */}
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

          {/* категории */}
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
      </Tabs>

      {/* нижнее навигационное меню */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around py-2 z-50">
        <button className="text-gray-600 hover:text-primary text-sm flex flex-col items-center">
          <span>🏠</span>
          Главная
        </button>
        <button className="text-gray-600 hover:text-primary text-sm flex flex-col items-center">
          <span>🎁</span>
          Призы
        </button>
        <button className="text-gray-600 hover:text-primary text-sm flex flex-col items-center">
          <span>👤</span>
          Профиль
        </button>
      </nav>
    </div>
  );
};

export default Events;
