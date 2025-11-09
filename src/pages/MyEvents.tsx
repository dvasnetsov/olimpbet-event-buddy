import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Package } from "lucide-react";

const MyEvents = () => {
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
      banner: "https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80",
      status: "Скоро",
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
      banner: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      status: "Скоро",
    },
  ];

  const pastEvents = [
    {
      id: 4,
      name: "Теннисный турнир",
      city: "Москва",
      venue: "Олимпийский",
      startDate: "1 октября 2025",
      endDate: "10 октября 2025",
      banner: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
      status: "Завершен",
      merchGiven: 45,
    },
    {
      id: 5,
      name: "Волейбольная лига",
      city: "Екатеринбург",
      venue: "Уралочка",
      startDate: "5 сентября 2025",
      endDate: "15 сентября 2025",
      banner: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
      status: "Завершен",
      merchGiven: 32,
    },
  ];

  return (
    <div className="bg-white pb-4">
      <Tabs defaultValue="future" className="w-full">
        <div className="sticky top-0 bg-white z-20 shadow-sm border-b border-border">
          <div className="px-4 pt-4 pb-3">
            <h1 className="text-2xl font-bold mb-3">Мои мероприятия</h1>
            <TabsList className="w-full grid grid-cols-2 h-11 rounded-xl bg-gradient-to-r from-muted to-muted/80 shadow-sm">
              <TabsTrigger 
                value="future" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
              >
                Будущие
              </TabsTrigger>
              <TabsTrigger 
                value="past" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md font-semibold text-sm rounded-lg transition-all"
              >
                Прошедшие
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="future" className="mt-0 px-4 pt-4">
          <div className="space-y-4 pb-4">
            {futureEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer">
                <div
                  className="h-36 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${event.banner})`,
                  }}
                >
                  <Badge className="absolute top-3 right-3">{event.status}</Badge>
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="font-bold text-lg leading-tight">{event.name}</h3>
                  </div>
                </div>
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.city}, {event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.startDate} {event.startTime} - {event.endDate} {event.endTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-0 px-4 pt-4">
          <div className="space-y-4 pb-4">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-sm hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer">
                <div
                  className="h-36 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${event.banner})`,
                  }}
                >
                  <Badge variant="secondary" className="absolute top-3 right-3">{event.status}</Badge>
                  <div className="absolute bottom-3 left-4 text-white">
                    <h3 className="font-bold text-lg leading-tight">{event.name}</h3>
                  </div>
                </div>
                <div className="p-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.city}, {event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.startDate} - {event.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Package className="w-4 h-4 text-primary" />
                    <span>Выдано мерча: {event.merchGiven}</span>
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

export default MyEvents;