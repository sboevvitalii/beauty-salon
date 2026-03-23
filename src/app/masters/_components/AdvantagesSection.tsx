import { Award, Clock, Gem, Heart } from "lucide-react";

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Почему выбирают наших мастеров
          </h2>
          <p className="text-lg text-text-main/80 max-w-2xl mx-auto">
            Мы гордимся своей командой и создали все условия для комфортной
            работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Постоянное развитие</h3>
            <p className="text-sm text-text-main/70">
              Регулярные мастер-классы и повышение квалификации
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Индивидуальный подход
            </h3>
            <p className="text-sm text-text-main/70">
              Учитываем все пожелания и особенности каждого клиента
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Gem className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Премиальные материалы
            </h3>
            <p className="text-sm text-text-main/70">
              Работаем только с лучшими профессиональными брендами
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Clock className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Пунктуальность</h3>
            <p className="text-sm text-text-main/70">
              Ценим ваше время, начинаем процедуры вовремя
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
