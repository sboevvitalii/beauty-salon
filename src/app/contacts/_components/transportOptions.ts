import { Bus, Car, Train } from "lucide-react";

export const transportOptions = [
  {
    icon: Train,
    title: "На метро",
    description: "Станция 'Примерная' (5 минут пешком)",
    details: "Выход №3, далее прямо до дома 123",
  },
  {
    icon: Bus,
    title: "На автобусе",
    description: "Остановка 'Салон красоты'",
    details: "Автобусы № 12, 45, 78",
  },
  {
    icon: Car,
    title: "На машине",
    description: "Есть бесплатная парковка",
    details: "При въезде со стороны улицы Примерной",
  },
];
