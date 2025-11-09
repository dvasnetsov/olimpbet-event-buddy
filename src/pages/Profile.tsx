import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Package, Award, Phone, Mail, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  
  const profile = {
    name: "Иван Петров",
    phone: "+7 (999) 123-45-67",
    email: "ivan.petrov@olimpbet.com",
    city: "Москва",
    role: "Промоутер",
    avatar: "ИП",
    joinDate: "15 января 2024",
    stats: {
      events: 12,
      requests: 156,
      totalBets: "₽2,450,000",
      rating: 4.8,
    },
  };

  return (
    <div className="bg-white pb-8 px-4 pt-4">
      <button
        onClick={() => navigate("/menu")}
        className="mb-5 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Назад
      </button>
      
      <h1 className="text-2xl font-bold mb-6">Профиль</h1>

      <Card className="p-6 mb-6 shadow-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-primary">{profile.avatar}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
            <Badge variant="secondary" className="mb-2">{profile.role}</Badge>
            <p className="text-sm text-muted-foreground">
              С нами с {profile.joinDate}
            </p>
          </div>
        </div>

        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>{profile.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>{profile.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>{profile.city}</span>
          </div>
        </div>
      </Card>

      <h3 className="text-lg font-bold mb-4">Статистика работы</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <Card className="p-4 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{profile.stats.events}</p>
            <p className="text-xs text-muted-foreground">Мероприятий</p>
          </div>
        </Card>

        <Card className="p-4 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{profile.stats.requests}</p>
            <p className="text-xs text-muted-foreground">Выдано мерча</p>
          </div>
        </Card>

        <Card className="p-4 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{profile.stats.totalBets}</p>
            <p className="text-xs text-muted-foreground">Сумма ставок</p>
          </div>
        </Card>

        <Card className="p-4 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{profile.stats.rating}</p>
            <p className="text-xs text-muted-foreground">Рейтинг</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;