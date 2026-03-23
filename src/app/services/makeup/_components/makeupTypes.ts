import {
  Camera,
  Eye,
  Heart,
  Palette,
  Sparkles,
  VenetianMask,
} from "lucide-react";

export const makeupTypes = [
  {
    title: "Дневной",
    description: "Естественный, легкий, подходит для повседневной жизни",
    icon: Sparkles,
    color: "from-green-400 to-green-500",
  },
  {
    title: "Вечерний",
    description: "Яркий, выразительный, стойкий",
    icon: Camera,
    color: "from-purple-400 to-purple-500",
  },
  {
    title: "Свадебный",
    description: "Нежный, романтичный, очень стойкий",
    icon: Heart,
    color: "from-pink-400 to-pink-500",
  },
  {
    title: "Fashion",
    description: "Креативный, модный, для съемок",
    icon: Palette,
    color: "from-blue-400 to-blue-500",
  },
  {
    title: "Smoky eyes",
    description: "Дымчатый, загадочный, выразительный",
    icon: Eye,
    color: "from-gray-600 to-gray-800",
  },
  {
    title: "Возрастной",
    description: "Лифтинг-эффект, деликатная коррекция",
    icon: VenetianMask,
    color: "from-amber-400 to-amber-500",
  },
];
