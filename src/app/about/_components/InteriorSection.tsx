import { Check } from "lucide-react";

export default function InteriorSection() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Пространство для красоты
            </h2>
            <p className="text-lg text-text-main mb-8 leading-relaxed">
              Мы создали уютное пространство, где каждый чувствует себя
              комфортно. Светлые и просторные кабинеты, современное
              оборудование, зона отдыха с ароматным чаем и кофе — все для вашего
              удовольствия.
            </p>

            <div className="space-y-4">
              {interiorFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-text-main">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-md h-48 flex items-center justify-center">
              <span className="text-primary font-medium">Фото салона 1</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md h-48 flex items-center justify-center">
              <span className="text-primary font-medium">Фото салона 2</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md h-48 flex items-center justify-center">
              <span className="text-primary font-medium">Фото салона 3</span>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md h-48 flex items-center justify-center">
              <span className="text-primary font-medium">Фото салона 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const interiorFeatures = [
  "Светлые просторные кабинеты с панорамными окнами",
  "Профессиональное оборудование премиум-класса",
  "Уютная зона ожидания с кофе и чаем",
  "Чистота и стерильность во всем",
  "Продуманное освещение для макияжа и фото",
  "Комфортные кресла и приятная музыка",
];
