import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  
  const faqs = [
    {
      question: "Как работает система выдачи мерча?",
      answer: "Игрок делает ставку на сумму, соответствующую категории приза (Silver, Gold или Platinum). После подтверждения ставки, промоутер сканирует QR-код игрока и выдает выбранный мерч из доступной категории.",
    },
    {
      question: "Что делать, если мерч закончился?",
      answer: "Если конкретный товар или размер закончился, предложите игроку альтернативу из той же категории. Если вся категория пуста, сообщите супервайзеру через раздел 'Связаться с супервайзером' для пополнения запасов.",
    },
    {
      question: "Сколько мерча можно выдать одному игроку?",
      answer: "Максимальное количество мерча на одного игрока указано в правилах конкретного мероприятия. Обычно это 3 единицы за всё мероприятие. Система автоматически отслеживает лимиты.",
    },
    {
      question: "Как отменить выдачу мерча?",
      answer: "Если игрок не забрал мерч в течение 15 минут после бронирования, заявка может быть отменена через кнопку 'Отменить' на странице заявок. После выдачи отменить нельзя.",
    },
    {
      question: "Когда начисляется бонус промоутеру?",
      answer: "Бонус начисляется после завершения мероприятия в течение 3 рабочих дней. Размер бонуса зависит от количества выданного мерча и общей суммы привлеченных ставок.",
    },
  ];

  const checklist = [
    "Проверить наличие всех категорий мерча перед началом смены",
    "Убедиться, что сканер QR-кодов работает исправно",
    "Подтвердить ставку игрока в системе перед выдачей мерча",
    "Попросить игрока выбрать размер товара из доступных",
    "Отсканировать QR-код игрока для фиксации выдачи",
    "Отметить выдачу в системе нажатием кнопки 'Выдать'",
    "Передать мерч игроку и пожелать удачи",
    "Связаться с супервайзером при любых проблемах",
  ];

  return (
    <div className="bg-white pb-8 px-4 pt-4">
      <button
        onClick={() => navigate("/menu")}
        className="mb-5 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Назад
      </button>
      
      <h1 className="text-2xl font-bold mb-6">FAQ</h1>

      <Card className="p-5 mb-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">Частые вопросы</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <Card className="p-5 shadow-sm">
        <h2 className="text-lg font-bold mb-4">Чек-лист промоутера</h2>
        <div className="space-y-3">
          {checklist.map((item, index) => (
            <div key={index} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FAQ;