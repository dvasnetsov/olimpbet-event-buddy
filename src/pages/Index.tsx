import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, ChevronDown, ChevronUp, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Application {
  id: string;
  date: string;
  time: string;
  betId: string;
  merchName: string;
  betAmount: number;
  status: "reserved" | "issued";
}

interface Event {
  id: number;
  name: string;
  city: string;
  venue: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  status: "active" | "upcoming";
  applicationsCount: number;
  applications: Application[];
}

const Index = () => {
  const navigate = useNavigate();
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      name: "Чемпионат России по футболу",
      city: "Москва",
      venue: "Стадион Лужники",
      startDate: "01 ноября 2025",
      startTime: "10:00",
      endDate: "10 ноября 2025",
      endTime: "22:00",
      status: "active",
      applicationsCount: 45,
      applications: [
        {
          id: "123456",
          date: "10 ноября",
          time: "14:30",
          betId: "ID 123456",
          merchName: "Футболка M",
          betAmount: 3500,
          status: "issued",
        },
        {
          id: "789012",
          date: "10 ноября",
          time: "12:15",
          betId: "ID 789012",
          merchName: "Кепка One Size",
          betAmount: 2500,
          status: "reserved",
        },
      ],
    },
    {
      id: 2,
      name: "Хоккейный турнир",
      city: "Санкт-Петербург",
      venue: "Ледовый дворец",
      startDate: "15 декабря 2025",
      startTime: "12:00",
      endDate: "20 декабря 2025",
      endTime: "20:00",
      status: "upcoming",
      applicationsCount: 0,
      applications: [],
    },
  ];

  const activeEvents = events.filter(e => e.status === "active");
  const upcomingEvents = events.filter(e => e.status === "upcoming");

  const toggleExpand = (eventId: number) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const handleViewAll = (eventId: number) => {
    navigate(`/event/${eventId}`);
  };

  const renderEventCard = (event: Event) => {
    const isExpanded = expandedEvent === event.id;
    const hasApplications = event.applications.length > 0;

    return (
      <Card
        key={event.id}
        className="p-5 shadow-sm hover:shadow-md transition-shadow"
      >
        <div
          className="cursor-pointer"
          onClick={() => hasApplications && toggleExpand(event.id)}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-lg leading-tight flex-1 pr-2">
              {event.name}
            </h3>
            <div className="flex items-center gap-2 shrink-0">
              <Badge variant={event.status === "active" ? "default" : "secondary"}>
                {event.status === "active" ? "Активное" : "Предстоящее"}
              </Badge>
              {hasApplications && (
                isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">{event.city}, {event.venue}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="text-xs">
                {event.startDate} {event.startTime} - {event.endDate} {event.endTime}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Package className="w-4 h-4 shrink-0" />
              <span className="font-semibold text-foreground">{event.applicationsCount} заявок</span>
            </div>
          </div>
        </div>

        {/* Expanded Applications */}
        {isExpanded && hasApplications && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <p className="text-sm font-semibold mb-3">Заявки на мероприятии:</p>
            
            {event.applications.map((app) => (
              <div
                key={app.id}
                className="bg-muted/30 rounded-lg p-3 text-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {app.date}, {app.time}
                    </p>
                    <p className="font-medium text-muted-foreground">{app.betId}</p>
                  </div>
                  <Badge
                    variant={app.status === "issued" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {app.status === "issued" ? "Получен" : "Зарезервирован"}
                  </Badge>
                </div>
                <p className="font-semibold mb-1">{app.merchName}</p>
                <p className="text-xs text-muted-foreground">
                  Ставка: <span className="font-semibold text-foreground">{app.betAmount.toLocaleString()} ₽</span>
                </p>
              </div>
            ))}

            {event.applicationsCount > event.applications.length && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewAll(event.id);
                }}
                className="w-full py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Показать все ({event.applicationsCount})
              </button>
            )}
          </div>
        )}
      </Card>
    );
  };

  return (
    <div className="bg-background pb-4">
      <Tabs defaultValue="activity" className="w-full">
        <div className="sticky top-0 bg-background z-20 shadow-sm border-b border-border">
          <div className="px-4 pt-4 pb-3">
            <TabsList className="w-full grid grid-cols-2 h-11 rounded-xl bg-gradient-to-r from-muted to-muted/80 shadow-sm">
              <TabsTrigger
                value="activity"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
              >
                Активность
              </TabsTrigger>
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
              >
                Профиль
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="activity" className="mt-0 px-4 pt-4">
          {activeEvents.length > 0 && (
            <div className="space-y-3 mb-6">
              {activeEvents.map(renderEventCard)}
            </div>
          )}

          {upcomingEvents.length > 0 && (
            <>
              <h2 className="text-lg font-bold mb-3 mt-6">Предстоящие</h2>
              <div className="space-y-3">
                {upcomingEvents.map(renderEventCard)}
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="profile" className="mt-0 px-4 pt-4">
          <Card className="p-6 text-center">
            <p className="text-muted-foreground">Раздел профиля в разработке</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
