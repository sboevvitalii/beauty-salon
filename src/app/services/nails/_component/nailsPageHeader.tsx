import { Wand2 } from "lucide-react";

export default function NailsPageHeader() {
  return (
    <section className="relative py-12 bg-linear-to-b from-primary to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-6 flex-col lg:flex-row">
          {/* Иконка */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-linear-to-br from-accent to-green-soft p-5 text-white shadow-lg">
            <Wand2 className="w-full h-full" />
          </div>

          {/* Заголовок и описание */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Маникюр и педикюр
            </h1>
            <p className="text-lg text-text-main max-w-3xl">
              Профессиональный уход за руками и ногами. Классический,
              аппаратный, комбинированный маникюр и педикюр. Стойкое покрытие
              гель-лаком, дизайн ногтей, наращивание и укрепление. Только
              стерильные инструменты и премиальные материалы.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
