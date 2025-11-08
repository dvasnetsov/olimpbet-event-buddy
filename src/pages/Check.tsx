import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QrCode, User, DollarSign, Tag, Check as CheckIcon, X, Package } from "lucide-react";
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

type BetResult = {
  playerId: string;
  amount: number;
  category: string;
  merchReceived: number;
  isNewbie: boolean;
};

const Check = () => {
  const [playerId, setPlayerId] = useState("");
  const [betResult, setBetResult] = useState<BetResult | null>(null);
  const [selectedMerch, setSelectedMerch] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const availableMerch = [
    {
      id: 1,
      name: "Футболка OlimpBet",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
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
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
      sizes: [{ size: "One Size", stock: 20 }],
    },
    {
      id: 3,
      name: "Термос брендированный",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
      sizes: [
        { size: "500ml", stock: 6 },
        { size: "750ml", stock: 4 },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTotalStock = (merch: any) => merch.sizes.reduce((sum: number, s: any) => sum + s.stock, 0);

  const handleCheck = () => {
    if (playerId) {
      setBetResult({
        playerId: playerId,
        amount: 3500,
        category: "Silver",
        merchReceived: 2,
        isNewbie: Math.random() > 0.5,
      });
    }
  };

  const handleReserve = () => {
    if (!selectedMerch || !selectedSize) return;
    
    // Уменьшаем остаток выбранного размера
    const sizeIndex = selectedMerch.sizes.findIndex((s: any) => s.size === selectedSize);
    if (sizeIndex !== -1 && selectedMerch.sizes[sizeIndex].stock > 0) {
      selectedMerch.sizes[sizeIndex].stock -= 1;
    }
    
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setBetResult(null);
      setPlayerId("");
      setSelectedMerch(null);
      setSelectedSize("");
      setFullscreenImage(null);
    }, 2500);
  };

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center p-6 bg-white py-20">
        <Card className="p-10 text-center max-w-sm shadow-xl">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Мерч зарезервирован</h2>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            {selectedMerch?.name} ({selectedSize})
            <br />
            для ID {betResult?.playerId}
          </p>
          <Button className="w-full rounded-xl" size="lg" onClick={() => setShowSuccess(false)}>
            Готово
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-white pb-4">
      <Tabs defaultValue="check" className="w-full">
        {/* верхняя залипающая плашка */}
        <div className="sticky top-0 z-20 bg-white shadow-sm border-b border-border">
          <div className="px-4 pt-4 pb-3">
            <TabsList className="w-full grid grid-cols-2 h-11 rounded-xl bg-gradient-to-r from-muted to-muted/80 shadow-sm">
              <TabsTrigger
                value="check"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
              >
                Ставка
              </TabsTrigger>
              <TabsTrigger
                value="join"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
              >
                Приложение
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* --- Проверка ставки --- */}
        <TabsContent value="check" className="mt-0 px-4 pt-4 bg-white">
          {!betResult ? (
            <div className="max-w-sm mx-auto w-full bg-white">
              <h1 className="text-2xl font-bold mb-3">Проверка ставки</h1>
              <p className="text-muted-foreground mb-6 text-sm">
                Введите ID игрока или отсканируйте QR-код
              </p>

              <Card className="p-6 mb-4 shadow-md">
                <label className="block text-sm font-semibold mb-3">ID игрока (6 цифр)</label>
                <Input
                  placeholder="Например: 123456"
                  value={playerId}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setPlayerId(value);
                  }}
                  maxLength={6}
                  className="mb-4 h-12 text-base rounded-xl"
                />

                <Button variant="outline" className="w-full mb-4 rounded-xl" size="lg">
                  <QrCode className="w-5 h-5 mr-2" />
                  Сканировать QR-код
                </Button>

                <Button
                  className="w-full rounded-xl"
                  size="lg"
                  onClick={handleCheck}
                  disabled={playerId.length !== 6}
                >
                  Проверить
                </Button>
              </Card>
            </div>
          ) : (
            <div className="pb-4 bg-white">
              <button
                onClick={() => setBetResult(null)}
                className="mb-6 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
              >
                ← Назад
              </button>

              <Card className="p-6 mb-6 shadow-md">
                <h2 className="text-xl font-bold mb-5">Данные игрока</h2>
                <div className="space-y-4">
                  <InfoRow icon={User} label="ID игрока" value={betResult.playerId} />
                  <InfoRow icon={DollarSign} label="Сумма ставки" value={`${betResult.amount.toLocaleString()} ₽`} />
                  <InfoRow 
                    icon={User} 
                    label="Статус" 
                    value={betResult.isNewbie ? "Новичок" : "Постоянный игрок"} 
                  />
                  <InfoRow icon={Package} label="Получено мерча" value={`${betResult.merchReceived} шт`} />
                </div>
              </Card>

              <h3 className="text-lg font-bold mb-4">Доступный мерч: {betResult.category}</h3>
              <div className="space-y-3">
                {availableMerch.map((merch) => (
                  <Card
                    key={merch.id}
                    className="p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.01] shadow-sm"
                    onClick={() => setSelectedMerch(merch)}
                  >
                    <div className="flex gap-4">
                      <img
                        src={merch.image}
                        alt={merch.name}
                        className="w-20 h-20 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFullscreenImage(merch.image);
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-base">{merch.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          В наличии: <span className="font-semibold text-foreground">{getTotalStock(merch)} шт</span>
                        </p>
                      </div>
                      <span className="text-primary text-xl">→</span>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Fullscreen Image Modal */}
              <Dialog open={!!fullscreenImage} onOpenChange={() => setFullscreenImage(null)}>
                <DialogContent className="max-w-full max-h-full w-full h-full p-0 bg-black border-0 rounded-none">
                  <button
                    onClick={() => setFullscreenImage(null)}
                    className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                  >
                    <X className="w-7 h-7 text-white" />
                  </button>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={fullscreenImage || ""}
                      alt="Fullscreen view"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Size Selection Drawer */}
              <Drawer open={!!selectedMerch} onOpenChange={() => { setSelectedMerch(null); setSelectedSize(""); }}>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle className="text-xl font-bold">{selectedMerch?.name}</DrawerTitle>
                  </DrawerHeader>
                  <div className="px-4 pb-8">
                    <p className="text-sm text-muted-foreground mb-4">Выберите размер</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {selectedMerch?.sizes.map((sizeData: any) => (
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
                    <Button
                      className="w-full rounded-xl"
                      size="lg"
                      disabled={!selectedSize}
                      onClick={handleReserve}
                    >
                      Зарезервировать
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </TabsContent>

        {/* --- QR-код для скачивания --- */}
        <TabsContent value="join" className="mt-0 px-4 pt-8 bg-white">
          <div className="flex flex-col items-center justify-center text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Скачай приложение</h2>
            <p className="text-muted-foreground max-w-xs mb-10 text-sm leading-relaxed">
              Делай ставки, следи за событиями и получай бонусы в одном месте!
            </p>

            <Card className="p-8 flex flex-col items-center shadow-lg">
              <div className="w-56 h-56 bg-white flex items-center justify-center rounded-2xl border-2 border-border shadow-md">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https://olimp.bet"
                  alt="QR-код"
                  className="w-48 h-48 object-contain"
                />
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const InfoRow = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-4">
    <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <div>
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      <p className="font-semibold text-base">{value}</p>
    </div>
  </div>
);

export default Check;
