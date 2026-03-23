import type { Metadata } from "next";
import QuickNav from "./_components/quickNav";
import ServicesByCategory from "./_components/ServicesByCategory";
import LashEffects from "./_components/LashEffects";
import BrowShapesComponent from "./_components/BrowShapesComponent";
import OurMasters from "./_components/ourMasters";
import BenefitsSection from "./_components/BenefitsSection";
import ContraindicationsSection from "./_components/ContraindicationsSection";
import FAQSection from "./_components/FAQSection";
import PostProcedureCare from "./_components/PostProcedureCare";
import AppointmentSection from "@/src/shared/AppointmentSection";
import BackSection from "../_components/BackSection";
import BrowsPageHeader from "./_components/browsPageHeader";

export const metadata: Metadata = {
  title: "Брови и ресницы в Laims | Коррекция, окрашивание, ламинирование",
  description:
    "Профессиональный уход за бровями и ресницами в салоне Laims. Коррекция, окрашивание, ламинирование бровей. Наращивание ресниц.",
  keywords: [
    "брови",
    "ресницы",
    "коррекция бровей",
    "ламинирование",
    "наращивание ресниц",
  ],
  openGraph: {
    title: "Брови и ресницы Laims",
    description: "Идеальная форма бровей и объем ресниц",
    images: [
      {
        url: "/images/brows-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Брови и ресницы Laims",
      },
    ],
  },
};

export default function BrowsServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Навигация назад */}
      <BackSection />
      {/* Герой-секция */}
      <BrowsPageHeader />

      {/* Быстрая навигация */}
      <QuickNav />
      {/* Услуги по категориям */}
      <ServicesByCategory />

      {/* Эффекты наращивания ресниц */}
      <LashEffects />

      {/* Формы бровей */}
      <BrowShapesComponent />
      {/* Наши мастера */}
      <OurMasters />

      {/* Преимущества */}
      <BenefitsSection />

      {/* Противопоказания */}
      <ContraindicationsSection />
      {/* FAQ */}
      <FAQSection />

      {/* Уход после процедур */}
      <PostProcedureCare />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
