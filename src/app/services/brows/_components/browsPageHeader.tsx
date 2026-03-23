import { Eye } from "lucide-react";

export default function BrowsPageHeader() {
  return (
    <section className="relative py-12 bg-linear-to-b from-primary to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-6 flex-col lg:flex-row">
          {/* Иконка */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-linear-to-br from-primary-dark to-[#689d0c] p-5 text-white shadow-lg">
            <Eye className="w-full h-full" />
          </div>

          {/* Заголовок и описание */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-[--primary] mb-4">
              Брови и ресницы
            </h1>
            <p className="text-lg text-text-main max-w-3xl">
              Сделайте ваш взгляд выразительным с нашими услугами по уходу за
              бровями и ресницами. Профессиональная коррекция, окрашивание,
              ламинирование и наращивание. Только качественные материалы и
              индивидуальный подход.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
