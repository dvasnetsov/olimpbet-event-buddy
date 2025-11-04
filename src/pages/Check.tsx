import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { QrCode, User, DollarSign, Tag, Check as CheckIcon } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type BetResult = {
  playerId: string;
  amount: number;
  category: string;
};

const Check = () => {
  const [playerId, setPlayerId] = useState("");
  const [betResult, setBetResult] = useState<BetResult | null>(null);
  const [selectedMerch, setSelectedMerch] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);

  const availableMerch = [
    {
      id: 1,
      name: "Футболка OlimpBet",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
      sizes: [
        { size: "S", stock: 3 },
        { size: "M", stock: 5 },
        { size: "L", stock: 4 },
        { size: "XL", stock: 3 }
      ],
    },
    {
      id: 2,
      name: "Кепка OlimpBet",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
      sizes: [{ size: "One Size", stock: 20 }],
    },
    {
      id: 3,
      name: "Термос брендированный",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
      sizes: [
        { size: "500ml", stock: 6 },
        { size: "750ml", stock: 4 }
      ],
    },
  ];

  const getTotalStock = (merch: any) => {
    return merch.sizes.reduce((sum: number, s: any) => sum + s.stock, 0);
  };

  const handleCheck = () => {
    // Simulate bet check
    if (playerId) {
      setBetResult({
        playerId: playerId,
        amount: 3500,
        category: "Silver",
      });
    }
  };

  const handleReserve = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setBetResult(null);
      setPlayerId("");
      setSelectedMerch(null);
      setSelectedSize("");
    }, 2500);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <Card className="p-8 text-center max-w-sm shadow-lg">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Мерч зарезервирован</h2>
          <p className="text-muted-foreground mb-6">
            {selectedMerch?.name} ({selectedSize})
            <br />
            для ID {betResult?.playerId}
          </p>
          <Button className="w-full" size="lg">
            Готово
          </Button>
        </Card>
      </div>
    );
  }

  if (betResult) {
    return (
      <div className="p-4">
        <button
          onClick={() => setBetResult(null)}
          className="mb-4 text-primary font-medium"
        >
          ← Назад
        </button>

        <Card className="p-6 mb-6 shadow-md">
          <h2 className="text-xl font-bold mb-4">Данные игрока</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ID игрока</p>
                <p className="font-semibold">{betResult.playerId}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Сумма ставки</p>
                <p className="font-semibold">{betResult.amount.toLocaleString()} ₽</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <Tag className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Категория</p>
                <p className="font-semibold">{betResult.category}</p>
              </div>
            </div>
          </div>
        </Card>

        <h3 className="text-lg font-bold mb-3">Доступный мерч</h3>
        <div className="space-y-3">
          {availableMerch.map((merch) => (
            <Card
              key={merch.id}
              className="p-4 cursor-pointer hover:shadow-md transition-shadow shadow-sm"
              onClick={() => setSelectedMerch(merch)}
            >
              <div className="flex gap-4">
                <img
                  src={merch.image}
                  alt={merch.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{merch.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    В наличии: {getTotalStock(merch)} шт
                  </p>
                </div>
                <span className="text-primary">→</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Size Selection Dialog */}
        <Dialog open={!!selectedMerch} onOpenChange={() => { setSelectedMerch(null); setSelectedSize(""); }}>
          <DialogContent>
            <h3 className="text-xl font-bold mb-4">{selectedMerch?.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">Выберите размер</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {selectedMerch?.sizes.map((sizeData: any) => (
                <Button
                  key={sizeData.size}
                  variant={selectedSize === sizeData.size ? "default" : "outline"}
                  onClick={() => setSelectedSize(sizeData.size)}
                  className="h-16 flex flex-col items-center justify-center"
                >
                  <span className="font-semibold">{sizeData.size}</span>
                  <span className="text-xs mt-1">{sizeData.stock} шт</span>
                </Button>
              ))}
            </div>
            <Button
              className="w-full"
              size="lg"
              disabled={!selectedSize}
              onClick={handleReserve}
            >
              Зарезервировать
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 flex flex-col justify-center">
      <div className="max-w-sm mx-auto w-full">
        <h1 className="text-3xl font-bold mb-2">Проверка ставки</h1>
        <p className="text-muted-foreground mb-8">
          Введите ID игрока или отсканируйте QR-код
        </p>

        <Card className="p-6 mb-4 shadow-md">
          <label className="block text-sm font-medium mb-2">ID игрока (6 цифр)</label>
          <Input
            placeholder="Например: 123456"
            value={playerId}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 6);
              setPlayerId(value);
            }}
            maxLength={6}
            className="mb-4"
          />

          <Button variant="outline" className="w-full mb-4" size="lg">
            <QrCode className="w-5 h-5 mr-2" />
            Сканировать QR-код
          </Button>

          <Button
            className="w-full"
            size="lg"
            onClick={handleCheck}
            disabled={playerId.length !== 6}
          >
            Проверить
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Check;
