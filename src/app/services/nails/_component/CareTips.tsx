import { Check, Heart } from "lucide-react";

export default function CareTips() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Heart size={20} />
              Уход за руками
            </h3>
            <ul className="space-y-2">
              {handCareTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-main">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Heart size={20} />
              Уход за ногами
            </h3>
            <ul className="space-y-2">
              {footCareTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-main">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const handCareTips = [
  "Используйте перчатки при работе с бытовой химией",
  "Ежедневно наносите увлажняющий крем для рук",
  "Пейте достаточно воды для увлажнения кожи изнутри",
  "Делайте ванночки с морской солью 1 раз в неделю",
  "Массируйте кутикулу специальным маслом",
  "Защищайте руки от холода перчатками",
];

const footCareTips = [
  "Ежедневно увлажняйте стопы кремом",
  "Носите удобную обувь из натуральных материалов",
  "Делайте ванночки для ног 1-2 раза в неделю",
  "Используйте пемзу для удаления огрубевшей кожи",
  "Меняйте носки ежедневно",
  "Давайте ногам отдых в конце дня",
];
