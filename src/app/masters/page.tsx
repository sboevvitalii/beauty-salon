import type { Metadata } from "next";
import MastersPageHeader from "./_components/MastersPageHeader";
import StatisticSection from "./_components/StatisticSection";
import CatogorySection from "./_components/CatogorySection";
import MastersList from "./_components/MastersList";
import AdvantagesSection from "./_components/AdvantagesSection";
import HowToChoose from "./_components/HowToChoose";
import AppointmentSection from "@/src/shared/AppointmentSection";

export const metadata: Metadata = {
  title: "Наши мастера | Laims Beauty Salon",
  description:
    "Команда профессионалов салона красоты Laims. Стилисты, визажисты, косметологи, мастера маникюра и педикюра. Выбирайте своего мастера!",
  keywords: [
    "мастера",
    "стилисты",
    "визажисты",
    "косметологи",
    "маникюр",
    "педикюр",
    "команда",
    "Laims",
  ],
  openGraph: {
    title: "Наши мастера | Laims Beauty Salon",
    description: "Профессионалы, которые любят свое дело",
    type: "website",
    images: [
      {
        url: "/images/masters-og.jpg",
        width: 1200,
        height: 630,
        alt: "Мастера Laims Beauty Salon",
      },
    ],
  },
};

export default function MastersPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Герой-секция */}
      <MastersPageHeader />

      {/* Статистика */}
      <StatisticSection />

      {/* Категории */}
      <CatogorySection />

      {/* Список мастеров */}
      <MastersList />
      {/* Преимущества работы с нашими мастерами */}
      <AdvantagesSection />

      {/* Как выбрать мастера */}
      <HowToChoose />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
