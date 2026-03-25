import type { Metadata } from "next";
import ReviewsPageHeader from "./_components/ReviewsPageHeader";
import Statistics from "./_components/Statistics";
import FilterHeader from "./_components/FilterHeader";
import FilteredList from "./_components/FelteredList";
import Advantages from "./_components/Advantages";
import ReviewForm from "./_components/ReviewForm";
import AppointmentSection from "@/src/shared/AppointmentSection";
import FilteredBlock from "./_components/FilteredBlock";

export const metadata: Metadata = {
  title: "Отзывы | Laims Beauty Salon",
  description:
    "Реальные отзывы клиентов о салоне красоты Laims. Узнайте, что говорят о нас гости. Маникюр, стрижки, косметология, макияж.",
  keywords: [
    "отзывы",
    "мнения клиентов",
    "салон красоты",
    "рекомендации",
    "Laims",
  ],
  openGraph: {
    title: "Отзывы о Laims Beauty Salon",
    description: "Что говорят о нас клиенты",
    type: "website",
    images: [
      {
        url: "/images/reviews-og.jpg",
        width: 1200,
        height: 630,
        alt: "Отзывы Laims Beauty Salon",
      },
    ],
  },
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-bg-main pt-30">
      {/* Герой-секция */}
      <ReviewsPageHeader />

      {/* Статистика */}
      <Statistics />

      <FilteredBlock />

      {/* Преимущества */}
      <Advantages />

      {/* Форма отзыва */}
      <ReviewForm />

      {/* Запись на прием */}
      <AppointmentSection />
    </div>
  );
}
