import type { Metadata } from "next";
import AboutPageHeader from "./_components/AboutPageHeader";
import MissionSection from "./_components/MissionSection";
import StatistiSection from "./_components/StatistiSection";
import HistorySection from "./_components/HistorySection";
import TeamSection from "./_components/TeamSection";
import BenefitsSection from "./_components/BenefitsSection";
import ReviewsSection from "./_components/ReviewsSection";
import PartnersAndBrands from "./_components/PartnersAndBrands";
import InteriorSection from "./_components/InteriorSection";
import ContactAndMap from "./_components/ContactAndMap";
import AppointmentSection from "@/src/shared/AppointmentSection";

export const metadata: Metadata = {
  title: "О нас | Laims Beauty Salon",
  description:
    "Салон красоты Laims - история, миссия, команда профессионалов. Узнайте больше о нашем салоне, наших ценностях и преимуществах. Профессиональный уход и индивидуальный подход в Москве.",
  keywords: [
    "о нас",
    "салон красоты",
    "команда",
    "миссия",
    "история",
    "преимущества",
    "Laims",
  ],
  openGraph: {
    title: "О салоне красоты Laims",
    description: "Профессиональный уход и индивидуальный подход",
    type: "website",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Салон красоты Laims",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Герой-секция */}
      <AboutPageHeader />

      {/* Миссия */}
      <MissionSection />
      {/* Статистика */}
      <StatistiSection />

      {/* История */}
      <HistorySection />

      {/* Команда */}
      <TeamSection />
      {/* Преимущества */}
      <BenefitsSection />

      {/* Отзывы */}
      <ReviewsSection />

      {/* Партнеры и бренды */}
      <PartnersAndBrands />

      {/* Интерьер салона */}
      <InteriorSection />

      {/* Контакты и схема проезда */}
      <ContactAndMap />
      {/* Запись */}
      <AppointmentSection />
    </div>
  );
}
