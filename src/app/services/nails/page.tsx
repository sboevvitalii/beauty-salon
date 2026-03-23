import type { Metadata } from "next";
import BackSection from "../_components/BackSection";
import NailsPageHeader from "./_component/nailsPageHeader";
import QuickNav from "./_component/QuickNav";
import ServicesByCategory from "./_component/ServicesByCategory";
import CoatingTypes from "./_component/CoatingTypes";
import NailShapes from "./_component/NailShapes";
import OurMasters from "./_component/OurMasters";
import BenefitsSection from "./_component/BenefitsSection";
import MaterialBrands from "./_component/MaterialBrands";
import ProcedureProcess from "./_component/ProcedureProcess";
import Contraindications from "./_component/Contraindications";
import FAQSection from "./_component/FAQSection";
import CareTips from "./_component/CareTips";
import AppointmentSection from "@/src/shared/AppointmentSection";

export const metadata: Metadata = {
  title: "Маникюр и педикюр в Laims | Уход за ногтями в Москве",
  description:
    "Профессиональный маникюр и педикюр в салоне Laims. Классический, аппаратный, комбинированный. Дизайн ногтей, укрепление, покрытие гель-лаком.",
  keywords: [
    "маникюр",
    "педикюр",
    "ногти",
    "гель-лак",
    "дизайн ногтей",
    "салон",
  ],
  openGraph: {
    title: "Маникюр и педикюр Laims",
    description: "Идеальный маникюр и педикюр от профессионалов",
    images: [
      {
        url: "/images/nails-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Маникюр и педикюр Laims",
      },
    ],
  },
};

export default function NailsServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Навигация назад */}
      <BackSection />

      {/* Герой-секция */}
      <NailsPageHeader />
      {/* Быстрая навигация */}
      <QuickNav />
      {/* Услуги по категориям */}
      <ServicesByCategory />
      {/* Типы покрытий */}
      <CoatingTypes />

      {/* Формы ногтей */}
      <NailShapes />

      {/* Наши мастера */}
      <OurMasters />
      {/* Преимущества */}
      <BenefitsSection />

      {/* Бренды материалов */}
      <MaterialBrands />

      {/* Как проходит процедура */}
      <ProcedureProcess />

      {/* Противопоказания */}
      <Contraindications />

      {/* FAQ */}
      <FAQSection />

      {/* Советы по уходу */}
      <CareTips />
      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
