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

  if (selectedCategory) {
    const category = currentEvent.categories.find(
      (c) => c.id === selectedCategory,
    );
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
                    onClick={() => setSelectedPrize(prize)}
                  >
                    Выбрать размер
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Size Selection Dialog */}
        <Dialog
          open={!!selectedPrize}
          onOpenChange={() => {
            setSelectedPrize(null);
            setSelectedSize("");
          }}
        >
          <DialogContent>
            <h3 className="text-xl font-bold mb-4">{selectedPrize?.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Выберите размер для просмотра остатков
            </p>
            <div className="grid grid-cols-2 gap-3">
              {selectedPrize?.sizes.map((sizeData: any) => (
                <Button
                  key={sizeData.size}
                  variant={
                    selectedSize === sizeData.size ? "default" : "outline"
                  }
                  onClick={() => setSelectedSize(sizeData.size)}
                  className="h-16 flex flex-col items-center justify-center"
                >
                  <span className="font-semibold">{sizeData.size}</span>
                  <span className="text-xs mt-1">{sizeData.stock} шт</span>
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
