import { Award, Droplets, Heart, Leaf, Sun, Wind } from "lucide-react";

export const massageTypes = [
  {
    title: "Расслабляющий",
    description: "Снятие стресса и напряжения",
    icon: Heart,
    color: "from-blue-400 to-blue-500",
  },
  {
    title: "Лечебный",
    description: "Терапия проблемных зон",
    icon: Award,
    color: "from-green-400 to-green-500",
  },
  {
    title: "Антицеллюлитный",
    description: "Коррекция фигуры",
    icon: Leaf,
    color: "from-orange-400 to-orange-500",
  },
  {
    title: "Лимфодренажный",
    description: "Снятие отеков",
    icon: Droplets,
    color: "from-purple-400 to-purple-500",
  },
  {
    title: "Спортивный",
    description: "Восстановление мышц",
    icon: Wind,
    color: "from-red-400 to-red-500",
  },
  {
    title: "Точечный",
    description: "Воздействие на активные точки",
    icon: Sun,
    color: "from-yellow-400 to-yellow-500",
  },
];
