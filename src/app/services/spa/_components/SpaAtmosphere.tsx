import { Check } from "lucide-react";

export default function SpaAtmosphere() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Атмосфера релакса
            </h2>
            <p className="text-lg text-text-main mb-8">
              В нашем спа-салоне создана особая атмосфера для полного
              расслабления:
            </p>

            <div className="space-y-4">
              {atmosphere.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-text-main">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Записаться на спа</h3>
            <p className="text-text-main mb-6">
              Оставьте свои контакты, и наш администратор свяжется с вами для
              подбора удобного времени.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 rounded-lg border border-green-muted focus:border-primary focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 rounded-lg border border-green-muted focus:border-primary focus:outline-none transition"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-green-muted focus:border-primary focus:outline-none transition">
                <option value="">Выберите процедуру</option>
                <option value="massage">Массаж</option>
                <option value="wrapping">Обертывание</option>
                <option value="program">Спа-программа</option>
                <option value="ritual">Спа-ритуал</option>
              </select>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105"
              >
                Записаться
              </button>
            </form>

            <p className="text-xs text-text-main text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных
              данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const atmosphere = [
  "Приглушенный свет и расслабляющая музыка",
  "Ароматерапия с натуральными маслами",
  "Травяной чай после процедур",
  "Мягкие халаты и тапочки",
  "Зона отдыха с шезлонгами",
  "Индивидуальный подход к каждому гостю",
];
