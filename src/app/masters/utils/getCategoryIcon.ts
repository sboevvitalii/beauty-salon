import {
  Eye,
  Flower2,
  Gem,
  Scissors,
  Sparkles,
  Users,
  Wand2,
} from "lucide-react";

export const getCategoryIcon = (position: string) => {
  if (position.includes("Стилист") || position.includes("Барбер"))
    return Scissors;
  if (position.includes("Визажист")) return Sparkles;
  if (position.includes("Косметолог")) return Flower2;
  if (position.includes("маникюра") || position.includes("педикюра"))
    return Wand2;
  if (position.includes("Бровист")) return Eye;
  if (position.includes("Спа")) return Gem;
  return Users;
};
