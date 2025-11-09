import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  
  const supervisor = {
    name: "Анна Смирнова",
    role: "Главный супервайзер",
    phone: "+7 (999) 888-77-66",
    telegram: "@supervisor_anna",
    avatar: "АС",
  };

  const handleCall = () => {
    toast.success("Совершаю звонок...");
    window.location.href = `tel:${supervisor.phone.replace(/[^0-9+]/g, '')}`;
  };

  const handleTelegramChat = () => {
    toast.success("Открываю Telegram...");
    // В реальном приложении здесь будет переход в Telegram супервайзера
    window.open(`https://t.me/${supervisor.telegram.replace('@', '')}`, '_blank');
  };

  return (
    <div className="bg-white pb-8 px-4 pt-4 min-h-screen">
      <button
        onClick={() => navigate("/")}
        className="mb-5 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Назад
      </button>
      
      <h1 className="text-2xl font-bold mb-6">Связаться с супервайзером</h1>

      <Card className="p-6 mb-6 shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{supervisor.avatar}</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">{supervisor.name}</h2>
            <p className="text-sm text-muted-foreground">{supervisor.role}</p>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleCall}
            className="w-full h-14 flex items-center justify-start gap-4 text-left"
            size="lg"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">Позвонить</p>
              <p className="text-xs opacity-90">{supervisor.phone}</p>
            </div>
          </Button>

          <Button
            onClick={handleTelegramChat}
            variant="outline"
            className="w-full h-14 flex items-center justify-start gap-4 text-left border-[#0088cc]/30 hover:bg-[#0088cc]/5"
            size="lg"
          >
            <div className="w-10 h-10 bg-[#0088cc]/10 rounded-full flex items-center justify-center">
              <Send className="w-5 h-5 text-[#0088cc]" />
            </div>
            <div>
              <p className="font-semibold">Написать в чат</p>
              <p className="text-xs text-muted-foreground">Быстрый ответ</p>
            </div>
          </Button>
        </div>
      </Card>

      <Card className="p-5 shadow-sm">
        <h3 className="font-semibold mb-3">Когда обращаться к супервайзеру?</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Закончился мерч определенной категории</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Возникли технические проблемы со сканером</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Нужна помощь с конфликтной ситуацией</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Требуется уточнение правил мероприятия</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Любые другие вопросы по работе</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Contact;