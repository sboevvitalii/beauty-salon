import {
  Scissors,
  Sparkles,
  Flower2,
  Wand2,
  Eye,
  Gem,
  Users,
} from "lucide-react";
type IconType =
  | typeof Scissors
  | typeof Sparkles
  | typeof Flower2
  | typeof Wand2
  | typeof Eye
  | typeof Gem
  | typeof Users;

const positionIconsMap: Record<string, IconType> = {
  Стилист: Scissors,
  Барбер: Scissors,
  Визажист: Sparkles,
  Лэшмейкер: Sparkles,
  Косметолог: Flower2,
  Дерматокосметолог: Flower2,
  маникюра: Wand2,
  педикюра: Wand2,
  Бровист: Eye,
  Спа: Gem,
  Массажист: Gem,
  "Специалист по телу": Gem,
};

export const getCategoryIcon = (position?: string): IconType => {
  if (!position) return Users; // защита от undefined или пустой строки

  for (const key in positionIconsMap) {
    if (position.includes(key)) {
      return positionIconsMap[key];
    }
  }

  return Users; // по умолчанию
};
