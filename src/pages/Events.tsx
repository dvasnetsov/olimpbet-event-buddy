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
