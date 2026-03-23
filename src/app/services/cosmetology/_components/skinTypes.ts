import { Droplet, Heart, Moon, Sun, Wind, Zap } from "lucide-react";

export const skinTypes = [
  {
    title: "Нормальная кожа",
    description: "Сбалансированная, без жирного блеска и шелушений",
    icon: Sun,
    color: "from-green-400 to-green-500",
  },
  {
    title: "Сухая кожа",
    description: "Чувство стянутости, шелушения, тусклый цвет",
    icon: Wind,
    color: "from-blue-400 to-blue-500",
  },
  {
    title: "Жирная кожа",
    description: "Повышенная выработка себума, расширенные поры",
    icon: Droplet,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    title: "Комбинированная кожа",
    description: "Жирная Т-зона и нормальные/сухие щеки",
    icon: Moon,
    color: "from-purple-400 to-purple-500",
  },
  {
    title: "Чувствительная кожа",
    description: "Склонность к раздражениям и покраснениям",
    icon: Heart,
    color: "from-pink-400 to-pink-500",
  },
  {
    title: "Проблемная кожа",
    description: "Акне, постакне, воспаления",
    icon: Zap,
    color: "from-red-400 to-red-500",
  },
];
