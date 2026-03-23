import { Flower2 } from "lucide-react";

export default function CosmetologyPageHeader() {
  return (
    <section className="relative py-12 bg-linear-to-b from-primary to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-6 flex-col lg:flex-row">
          {/* Иконка */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-linear-to-br from-green-muted to-bg-section p-5 text-white shadow-lg">
            <Flower2 className="w-full h-full" />
          </div>

          {/* Заголовок и описание */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Косметология
            </h1>
            <p className="text-lg text-text-main max-w-3xl">
              Профессиональный уход за кожей лица. Индивидуальный подход к
              каждому типу кожи. Современные методики, премиальная косметика и
              опытные врачи-косметологи. Поможем сохранить молодость и здоровье
              вашей кожи.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
