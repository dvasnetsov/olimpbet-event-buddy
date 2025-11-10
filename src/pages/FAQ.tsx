import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const FAQ = () => {
  const navigate = useNavigate();
  const [isSupervisor, setIsSupervisor] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mode = localStorage.getItem("userMode") || "promoter";
    setIsSupervisor(mode === "supervisor");
  }, []);
  
  const promoterFaqs = [
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

  const supervisorFaqs = [
    {
      question: "Как управлять командой промоутеров?",
      answer: "В разделе 'Команда промоутеров' вы можете просмотреть статистику каждого промоутера, связаться с ними через телефон или Telegram, отслеживать их активность и результаты работы.",
    },
    {
      question: "Как контролировать запасы мерча?",
      answer: "Следите за заявками промоутеров и остатками мерча по категориям. При необходимости пополнения, свяжитесь с центральным офисом через систему заявок на поставку.",
    },
    {
      question: "Что делать при проблемах у промоутеров?",
      answer: "Оперативно реагируйте на обращения промоутеров, решайте конфликтные ситуации с игроками, при необходимости выезжайте на место для координации работы команды.",
    },
    {
      question: "Как анализировать эффективность мероприятия?",
      answer: "Используйте раздел 'Все заявки' для просмотра статистики по всем промоутерам. Отслеживайте количество выданного мерча, сумму привлеченных ставок и активность каждого члена команды.",
    },
    {
      question: "Когда формируется отчет по мероприятию?",
      answer: "Отчет формируется автоматически после завершения мероприятия и включает статистику по всем промоутерам, выданному мерчу, привлеченным ставкам и новым игрокам.",
    },
  ];

  const promoterChecklist = [
    "Проверить наличие всех категорий мерча перед началом смены",
    "Убедиться, что сканер QR-кодов работает исправно",
    "Подтвердить ставку игрока в системе перед выдачей мерча",
    "Попросить игрока выбрать размер товара из доступных",
    "Отсканировать QR-код игрока для фиксации выдачи",
    "Отметить выдачу в системе нажатием кнопки 'Выдать'",
    "Передать мерч игроку и пожелать удачи",
    "Связаться с супервайзером при любых проблемах",
  ];

  const supervisorChecklist = [
    "Провести брифинг с командой промоутеров перед началом мероприятия",
    "Проверить наличие всех категорий мерча и распределить по промоутерам",
    "Убедиться, что у всех промоутеров работает оборудование",
    "Отслеживать активность команды в реальном времени",
    "Оперативно реагировать на запросы промоутеров",
    "Контролировать остатки мерча и вовремя запрашивать пополнение",
    "Анализировать результаты работы и давать обратную связь",
    "Подготовить итоговый отчет по завершению мероприятия",
  ];

  const faqs = isSupervisor ? supervisorFaqs : promoterFaqs;
  const checklist = isSupervisor ? supervisorChecklist : promoterChecklist;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="bg-primary text-primary-foreground px-4 py-4 shadow-md">
        <button
          onClick={() => navigate("/menu")}
          className="mb-3 text-primary-foreground/90 hover:text-primary-foreground font-semibold flex items-center gap-2 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Назад
        </button>
        <h1 className="text-2xl font-bold">FAQ</h1>
      </div>

      <div className="px-4 pt-6 pb-8">
        <Card className="p-5 mb-6 shadow-md border-l-4 border-l-primary">
          <h2 className="text-lg font-bold mb-4">Частые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <Card className="p-5 shadow-md border-l-4 border-l-primary">
          <h2 className="text-lg font-bold mb-4">
            {isSupervisor ? "Чек-лист супервайзера" : "Чек-лист промоутера"}
          </h2>
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
    </div>
  );
};

export default FAQ;