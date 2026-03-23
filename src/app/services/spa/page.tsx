import type { Metadata } from "next";
import BackSection from "../_components/BackSection";
import SPAPageNav from "./_components/SPAPageNav";
import QuickNav from "./_components/QuickNav";
import ServicesByCategory from "./_components/ServicesByCategory";
import MassageTypes from "./_components/MassageTypes";
import OurMasters from "./_components/OurMasters";
import BenefitsSection from "./_components/BenefitsSection";
import EssentialOils from "./_components/EssentialOils";
import SpaProcedureSteps from "./_components/SpaProcedureSteps";
import SpaAtmosphere from "./_components/SpaAtmosphere";
import Contraindications from "./_components/Contraindications";
import FAQSection from "./_components/FAQSection";
import AppointmentSection from "@/src/shared/AppointmentSection";

export const metadata: Metadata = {
  title: "Спа-процедуры в Laims | Релаксация и восстановление в Москве",
  description:
    "Расслабляющие спа-процедуры в салоне Laims. Массаж, обертывания, спа-программы для лица и тела. Восстановление и релаксация.",
  keywords: [
    "спа",
    "массаж",
    "обертывание",
    "релаксация",
    "спа процедуры",
    "уход за телом",
  ],
  openGraph: {
    title: "Спа-процедуры Laims",
    description: "Полное расслабление и восстановление",
    images: [
      {
        url: "/images/spa-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Спа-процедуры Laims",
      },
    ],
  },
};

export default function SpaServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Навигация назад */}
      <BackSection />

      {/* Герой-секция */}
      <SPAPageNav />

      {/* Быстрая навигация */}
      <QuickNav />
      {/* Услуги по категориям */}
      <ServicesByCategory />

      {/* Виды массажа */}
      <MassageTypes />

      {/* Наши специалисты */}
      <OurMasters />
      {/* Преимущества */}
      <BenefitsSection />

      {/* Эфирные масла */}
      <EssentialOils />
      {/* Как проходит спа-процедура */}
      <SpaProcedureSteps />
      {/* Атмосфера спа */}
      <SpaAtmosphere />

      {/* Противопоказания */}
      <Contraindications />
      {/* FAQ */}
      <FAQSection />
      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
