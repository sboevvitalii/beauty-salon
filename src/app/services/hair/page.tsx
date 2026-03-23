import type { Metadata } from "next";
import HairPageHeader from "./_components/HairPageHeader";
import CategoriesQuickNav from "./_components/CategoriesQuickNav";
import ServicesByCategoryGrid from "./_components/ServicesByCategoryGrid";
import OurMasters from "./_components/OurMasters";
import BenefitsSection from "./_components/BenefitsSection";
import WorkProcess from "./_components/WorkProcess";
import FAQSection from "./_components/FAQSection";
import AppointmentSection from "@/src/shared/AppointmentSection";
import BackSection from "../_components/BackSection";

export const metadata: Metadata = {
  title: "Парикмахерские услуги в Laims | Стрижки, окрашивание, укладка волос",
  description:
    "Профессиональные парикмахерские услуги в салоне Laims. Женские и мужские стрижки, окрашивание, укладка, лечение волос. Опытные мастера в Москве.",
  keywords: [
    "парикмахерская",
    "стрижка",
    "окрашивание волос",
    "укладка",
    "лечение волос",
    "салон красоты",
  ],
  openGraph: {
    title: "Парикмахерские услуги Laims",
    description: "Стрижки, окрашивание и уход за волосами",
    type: "website",
    images: [
      {
        url: "/images/hair-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Парикмахерские услуги Laims",
      },
    ],
  },
  alternates: {
    canonical: "https://laims.ru/services/hair",
  },
};

export default function HairServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-20">
      {/* Навигация назад */}
      <BackSection />

      {/* Герой-секция */}
      <HairPageHeader />

      {/* Быстрая навигация по категориям */}
      <CategoriesQuickNav />

      {/* Сетка услуг по категориям */}
      <ServicesByCategoryGrid />

      {/* Наши мастера */}
      <OurMasters />

      {/* Преимущества */}
      <BenefitsSection />

      {/* Процесс работы */}
      <WorkProcess />

      {/* Часто задаваемые вопросы */}
      <FAQSection />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
