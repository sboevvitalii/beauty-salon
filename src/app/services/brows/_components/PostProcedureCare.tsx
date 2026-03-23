import { Check, Eye, Sparkles } from "lucide-react";

export default function PostProcedureCare() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-8">
            Рекомендации по уходу
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-primary flex items-center gap-2">
                <Eye size={20} />
                После ламинирования бровей
              </h3>
              <ul className="space-y-2">
                {careAfterBrows.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="text-[--primary] shrink-0 mt-0.5"
                    />
                    <span className="text-text-main">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-lg mb-4 text-primary flex items-center gap-2">
                <Sparkles size={20} />
                После наращивания ресниц
              </h3>
              <ul className="space-y-2">
                {careAfterLashes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className="text-[--primary] shrink-0 mt-0.5"
                    />
                    <span className="text-text-main">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const careAfterBrows = [
  "Не мочить брови 24 часа после процедуры",
  "Не посещать сауну, баню, бассейн 48 часов",
  "Не тереть брови и не использовать скрабы в зоне бровей",
  "Наносить уходовое масло через 2 дня после процедуры",
  "Не использовать агрессивные косметические средства",
];

const careAfterLashes = [
  "Не мочить ресницы 3-4 часа после наращивания",
  "Не тереть глаза и не спать лицом в подушку",
  "Не использовать щипцы для завивки",
  "Избегать жирных кремов и масел в зоне глаз",
  "Расчесывать ресницы специальной щеточкой ежедневно",
];
