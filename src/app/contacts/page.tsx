import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Mail,
  Navigation,
  Car,
  Train,
  Bus,
} from "lucide-react";
import ContactsPageHeader from "./_components/ContactsPageHeader";
import MainInfo from "./_components/MainInfo";
import RouteMap from "./_components/RouteMap";
import FAQSection from "./_components/FAQSection";
import Feedback from "./_components/Feedback";
import AppointmentSection from "@/src/shared/AppointmentSection";

export const metadata: Metadata = {
  title: "Контакты | Laims Beauty Salon",
  description:
    "Контакты салона красоты Laims. Адрес, телефон, режим работы, схема проезда. Запись онлайн. Москва, ул. Примерная, 123.",
  keywords: [
    "контакты",
    "адрес",
    "телефон",
    "схема проезда",
    "салон красоты",
    "Laims",
  ],
  openGraph: {
    title: "Контакты Laims Beauty Salon",
    description: "Как нас найти и связаться с нами",
    type: "website",
    images: [
      {
        url: "/images/contacts-og.jpg",
        width: 1200,
        height: 630,
        alt: "Контакты Laims Beauty Salon",
      },
    ],
  },
};

// Варианты проезда

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Герой-секция */}
      <ContactsPageHeader />
      {/* Основная информация */}
      <MainInfo />

      {/* Схема проезда */}
      <RouteMap />
      {/* Часто задаваемые вопросы */}
      <FAQSection />
      {/* Обратная связь */}
      <Feedback />
      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
