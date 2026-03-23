import { Check } from "lucide-react";

export default function MakeupTips() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Советы визажиста
            </h2>
            <p className="text-lg text-text-main mb-8">
              Несколько простых рекомендаций, которые помогут сохранить макияж
              свежим в течение всего дня.
            </p>

            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-text-main">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Записаться на макияж</h3>
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
                <option value="">Выберите тип макияжа</option>
                <option value="day">Дневной</option>
                <option value="evening">Вечерний</option>
                <option value="wedding">Свадебный</option>
                <option value="photosession">Портретный</option>
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

const tips = [
  "Всегда очищайте и увлажняйте кожу перед нанесением макияжа",
  "Используйте праймер для стойкости макияжа",
  "Наносите тональный крем влажным спонжем для естественного покрытия",
  "Закрепляйте макияж спреем-фиксатором",
  "Обновляйте макияж в течение дня матирующими салфетками",
  "Снимайте макияж каждый вечер, не ложитесь спать с косметикой",
];
