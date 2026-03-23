import { Eye, Flower2, Heart, Scissors, Sparkles, Wand2 } from "lucide-react";

export interface ServiceProps {
  href: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  color: string;
}

export const services = [
  {
    id: "hair",
    href: "/services/hair",
    name: "Парикмахерские услуги",
    description: "Стрижки, укладки, окрашивание и уход за волосами",
    icon: Scissors,
    price: "от 2000 ₽",
    color: "from-[#689d0c] to-[#8bc34a]",
  },
  {
    id: "nails",
    href: "/services/nails",
    name: "Маникюр и педикюр",
    description: "Классический, аппаратный, комбинированный маникюр и педикюр",
    icon: Wand2,
    price: "от 1500 ₽",
    color: "from-[#bdd345] to-[#d4e38b]",
  },
  {
    id: "makeup",
    href: "/services/makeup",
    name: "Макияж",
    description: "Дневной, вечерний, свадебный и fashion макияж",
    icon: Sparkles,
    color: "from-[#e4e66c] to-[#bdd345]",
  },
  {
    id: "cosmetology",
    href: "/services/cosmetology",
    name: "Косметология",
    description: "Уход за кожей лица, чистки, пилинги и массажи",
    icon: Flower2,
    price: "от 3000 ₽",
    color: "from-[#8ca474] to-[#bfd4b2]",
  },
  {
    id: "brows",
    href: "/services/brows",
    name: "Брови и ресницы",
    description: "Коррекция, окрашивание бровей и наращивание ресниц",
    icon: Eye,
    price: "от 800 ₽",
    color: "from-[#376405] to-[#689d0c]",
  },
  {
    id: "spa",
    href: "/services/spa",
    name: "Спа-процедуры",
    description: "Расслабляющие и оздоровительные спа-программы",
    icon: Heart,
    color: "from-[#bfd4b2] to-[#8ca474]",
  },
];
