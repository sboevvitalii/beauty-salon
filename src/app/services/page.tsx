import ServicesPageHeader from "./_components/ServicesPageHeader";
import ServicesList from "./_components/ServicesList";
import BenefitsSection from "./_components/BenefitsSection";
import AppointmentSection from "./_components/AppointmentSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Услуги салона красоты Laims | Парикмахерские услуги, маникюр, косметология",
  description:
    "Полный спектр услуг салона красоты Laims: стрижки, окрашивание, маникюр, педикюр, макияж, косметология, брови, ресницы, спа-процедуры. Профессиональные мастера в Москве.",
  keywords: [
    "услуги салона красоты",
    "парикмахерская",
    "маникюр",
    "педикюр",
    "макияж",
    "косметология",
    "брови",
    "ресницы",
    "спа",
    "Laims",
  ],
  openGraph: {
    title: "Услуги салона красоты Laims",
    description: "Профессиональные услуги для вашей красоты и здоровья",
    type: "website",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Салон красоты Laims - услуги",
      },
    ],
  },
  alternates: {
    canonical: "https://laims.kz/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-20">
      {/* Герой-секция */}
      <ServicesPageHeader />

      {/* Сетка услуг */}
      <ServicesList />

      {/* Преимущества */}
      <BenefitsSection />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
