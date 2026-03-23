import { Flower2 } from "lucide-react";

export default function SPAPageNav() {
  return (
    <section className="relative py-12 bg-linear-to-b from-primary to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-6 flex-col lg:flex-row">
          {/* Иконка */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-linear-to-br from-bg-section to-green-muted p-5 text-white shadow-lg">
            <Flower2 className="w-full h-full" />
          </div>

          {/* Заголовок и описание */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Спа-процедуры
            </h1>
            <p className="text-lg text-text-main max-w-3xl">
              Полное расслабление и восстановление организма. Профессиональный
              массаж, обертывания, спа-программы для лица и тела. Погрузитесь в
              атмосферу гармонии и релаксации с нашими спа-ритуалами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
