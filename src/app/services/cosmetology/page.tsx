import type { Metadata } from "next";
import CosmetologyPageHeader from "./_components/cosmetologyPageHeader";
import QuickNav from "./_components/quickNav";
import ServicesByCategory from "./_components/ServicesByCategory";
import SkinTypesSection from "./_components/SkinTypesSection";
import OurMasters from "./_components/ourMasters";
import BenefitsSection from "./_components/BenefitsSection";
import ConsultationSection from "./_components/ConsultationSection";
import ContraindicationsSection from "./_components/ContraindicationsSection";
import FAQSection from "./_components/FAQSection";
import AppointmentSection from "@/src/shared/AppointmentSection";
import BackSection from "../_components/BackSection";

export const metadata: Metadata = {
  title: "Косметология в Laims | Уход за кожей лица в Москве",
  description:
    "Профессиональная косметология в салоне Laims. Чистка лица, пилинги, массаж, уходовые процедуры. Индивидуальный подход к каждому типу кожи.",
  keywords: [
    "косметология",
    "уход за лицом",
    "чистка лица",
    "пилинг",
    "массаж лица",
    "омоложение",
  ],
  openGraph: {
    title: "Косметология Laims",
    description: "Профессиональный уход за кожей лица",
    images: [
      {
        url: "/images/cosmetology-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Косметология Laims",
      },
    ],
  },
};

export default function CosmetologyServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Навигация назад */}
      <BackSection />

      {/* Герой-секция */}
      <CosmetologyPageHeader />

      {/* Быстрая навигация */}
      <QuickNav />

      {/* Услуги по категориям */}
      <ServicesByCategory />

      {/* Типы кожи */}
      <SkinTypesSection />
      {/* Наши мастера */}
      <OurMasters />

      {/* Преимущества */}
      <BenefitsSection />

      {/* Консультация */}
      <ConsultationSection />

      {/* Противопоказания */}
      <ContraindicationsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
