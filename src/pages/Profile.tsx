import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Package, Award, Phone, Mail, ArrowLeft, Users, TrendingUp, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [isSupervisor, setIsSupervisor] = useState(false);

  useEffect(() => {
    const checkMode = () => {
      const mode = localStorage.getItem("userMode") || "promoter";
      setIsSupervisor(mode === "supervisor");
    };
    
    checkMode();
    window.addEventListener("userModeChanged", checkMode);
    return () => window.removeEventListener("userModeChanged", checkMode);
  }, []);
  
  const promoterProfile = {
    name: "Иван Петров",
    phone: "+7 (999) 123-45-67",
    email: "ivan.petrov@olimpbet.com",
    city: "Москва",
    role: "Промоутер",
    avatar: "ИП",
    joinDate: "15 января 2024",
    stats: {
      events: 12,
      totalMerch: 156,
      totalBets: "₽2,450,000",
      newPlayers: 68,
    },
  };

  const supervisorProfile = {
    name: "Александр Смирнов",
    phone: "+7 (999) 987-65-43",
    email: "aleksandr.smirnov@olimpbet.com",
    city: "Москва",
    role: "Супервайзер",
    avatar: "АС",
    joinDate: "10 июля 2023",
    stats: {
      events: 28,
      totalMerch: 1240,
      totalBets: "₽15,680,000",
    },
  };

  const profile = isSupervisor ? supervisorProfile : promoterProfile;

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
        <h1 className="text-2xl font-bold">Профиль</h1>
      </div>

      <div className="px-4 pt-6 pb-8">
        <Card className="p-6 mb-6 shadow-md border-l-4 border-l-primary">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30">
              <span className="text-3xl font-bold text-primary">{profile.avatar}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
              <Badge variant="default" className="mb-2">{profile.role}</Badge>
              <p className="text-sm text-muted-foreground">
                С нами с {profile.joinDate}
              </p>
            </div>
          </div>

          <div className="space-y-3 border-t pt-4">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{profile.city}</span>
            </div>
          </div>
        </Card>

        <h3 className="text-lg font-bold mb-4">Статистика работы</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <Card className="p-4 shadow-sm bg-muted/30 border-primary/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold">{profile.stats.events}</p>
              <p className="text-xs text-muted-foreground">Мероприятий</p>
            </div>
          </Card>

          {isSupervisor ? (
            <>
              <Card className="p-4 shadow-sm bg-muted/30 border-primary/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{supervisorProfile.stats.totalMerch}</p>
                  <p className="text-xs text-muted-foreground">Выдано мерча</p>
                </div>
              </Card>

              <Card className="p-4 shadow-sm bg-muted/30 border-primary/10 col-span-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{supervisorProfile.stats.totalBets}</p>
                  <p className="text-xs text-muted-foreground">Сумма ставок</p>
                </div>
              </Card>
            </>
          ) : (
            <>
              <Card className="p-4 shadow-sm bg-muted/30 border-primary/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{promoterProfile.stats.totalMerch}</p>
                  <p className="text-xs text-muted-foreground">Выдано мерча</p>
                </div>
              </Card>

              <Card className="p-4 shadow-sm bg-muted/30 border-primary/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{promoterProfile.stats.totalBets}</p>
                  <p className="text-xs text-muted-foreground">Сумма ставок</p>
                </div>
              </Card>

              <Card className="p-4 shadow-sm bg-muted/30 border-primary/10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <UserPlus className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{promoterProfile.stats.newPlayers}</p>
                  <p className="text-xs text-muted-foreground">Новых игроков</p>
                </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;