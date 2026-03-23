import { consultationSteps } from "./consultationSteps";

export default function ConsultationSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Консультация косметолога
            </h2>
            <p className="text-lg text-text-main mb-8">
              Перед любой процедурой мы проводим подробную консультацию, чтобы
              подобрать оптимальный план ухода именно для вашей кожи.
            </p>

            <div className="space-y-4">
              {consultationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-main text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-text-main">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Записаться на консультацию
            </h3>
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
                <option value="">Выберите удобное время</option>
                <option value="10-12">10:00 - 12:00</option>
                <option value="12-14">12:00 - 14:00</option>
                <option value="14-16">14:00 - 16:00</option>
                <option value="16-18">16:00 - 18:00</option>
                <option value="18-20">18:00 - 20:00</option>
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
