import {
  Eye,
  Flower2,
  Gem,
  Scissors,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

export const categories = [
  { id: "all", name: "Все мастера", icon: Users },
  { id: "stylist", name: "Стилисты", icon: Scissors },
  { id: "makeup", name: "Визажисты", icon: Sparkles },
  { id: "cosmetologist", name: "Косметологи", icon: Flower2 },
  { id: "nail", name: "Мастера маникюра", icon: Wand2 },
  { id: "brow", name: "Бровисты", icon: Eye },
  { id: "spa", name: "Спа-терапевты", icon: Gem },
];
