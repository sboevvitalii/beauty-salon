import type { Metadata } from "next";
import WorksPageHeader from "./_components/WorksPageHeader";
import StatisticSection from "./_components/StatisticSection";
import CategorySection from "./_components/CategorySection";
import WorkGalerySection from "./_components/WorkGalerySection";
import AppointmentSection from "@/src/shared/AppointmentSection";
import InstagramFeed from "./_components/InstagramFeed";

export const metadata: Metadata = {
  title: "Наши работы | Laims Beauty Salon",
  description:
    "Портфолио работ салона красоты Laims. Стрижки, окрашивание, маникюр, педикюр, макияж, косметология. Реальные работы наших мастеров.",
  keywords: [
    "портфолио",
    "работы",
    "до и после",
    "салон красоты",
    "стрижки",
    "маникюр",
    "макияж",
    "Laims",
  ],
  openGraph: {
    title: "Наши работы | Laims Beauty Salon",
    description: "Портфолио работ наших мастеров",
    type: "website",
    images: [
      {
        url: "/images/works-og.jpg",
        width: 1200,
        height: 630,
        alt: "Наши работы Laims Beauty Salon",
      },
    ],
  },
};

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Герой-секция */}
      <WorksPageHeader />

      {/* Статистика */}
      <StatisticSection />

      {/* Категории */}
      <CategorySection />

      {/* Галерея работ */}
      <WorkGalerySection />

      {/* Запись на прием */}
      <AppointmentSection />

      {/* Инстаграм-лента */}
      <InstagramFeed />
    </div>
  );
}
