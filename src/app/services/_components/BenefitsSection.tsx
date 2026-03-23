import { Award, Clock, Heart, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <>
      <section className="py-16 bg-bg-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                  <adv.icon className="w-8 h-8 text-primary-dark" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-text-main">
                  {adv.title}
                </h3>
                <p className="text-sm text-text-main">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const advantages = [
  {
    icon: Users,
    title: "Опытные мастера",
    description: "Дипломированные специалисты с опытом работы от 5 лет",
  },
  {
    icon: Award,
    title: "Качество",
    description: "Используем только профессиональные материалы",
  },
  {
    icon: Clock,
    title: "Удобное время",
    description: "Работаем ежедневно с 10:00 до 21:00",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "Учитываем все пожелания и особенности",
  },
];
