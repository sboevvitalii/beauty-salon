import type { Metadata } from "next";
import MakeupPageHeader from "./_components/makeupPageHeader";
import QuickNav from "./_components/QuickNav";
import ServicesByCategory from "./_components/ServicesByCategory";
import MakeupVariants from "./_components/MakeupVariants";
import MakeupArtists from "./_components/MakeupArtistsComponent";
import BenefitsSection from "./_components/BenefitsSection";
import BeautyBrands from "./_components/BeautyBrands";
import MakeupSteps from "./_components/MakeupStepsComponent";
import MakeupTips from "./_components/MakeupTips";
import FAQSection from "./_components/FAQSection";
import AppointmentSection from "@/src/shared/AppointmentSection";
import BackSection from "../_components/BackSection";

export const metadata: Metadata = {
  title: "Макияж в Laims | Дневной, вечерний, свадебный макияж",
  description:
    "Профессиональный макияж в салоне Laims. Дневной, вечерний, свадебный, fashion макияж. Работаем с любыми типами кожи. Визажисты с опытом.",
  keywords: [
    "макияж",
    "визажист",
    "свадебный макияж",
    "вечерний макияж",
    "smoky eyes",
  ],
  openGraph: {
    title: "Макияж Laims",
    description: "Профессиональный макияж для любого события",
    images: [
      {
        url: "/images/makeup-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Макияж Laims",
      },
    ],
  },
};

export default function MakeupServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Навигация назад */}
      <BackSection />

      {/* Герой-секция */}
      <MakeupPageHeader />

      {/* Быстрая навигация */}
      <QuickNav />

      {/* Услуги по категориям */}
      <ServicesByCategory />

      {/* Виды макияжа */}
      <MakeupVariants />

      {/* Наши визажисты */}
      <MakeupArtists />

      {/* Преимущества */}
      <BenefitsSection />

      {/* Бренды косметики */}
      <BeautyBrands />

      {/* Процесс создания макияжа */}
      <MakeupSteps />

      {/* Советы визажиста */}
      <MakeupTips />

      {/* FAQ */}
      <FAQSection />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
