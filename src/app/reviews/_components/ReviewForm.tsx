import { Star } from "lucide-react";
import { Styles } from "./styles";
import { masters } from "@/src/shared/masters";

export default function ReviewForm() {
  return (
    <section className="py-16 bg-bg-main">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Оставьте свой отзыв
            </h2>
            <p className="text-lg text-text-main/80">
              Нам важно ваше мнение. Расскажите о вашем опыте посещения салона.
            </p>
          </div>

          <form className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-main mb-2"
                >
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition"
                  placeholder="Введите имя"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-main mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition"
                  placeholder="example@mail.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-text-main mb-2"
                >
                  Услуга
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition appearance-none pr-10"
                  style={Styles.inputArrow}
                >
                  <option value="">Выберите услугу</option>
                  <option value="hair">Парикмахерские услуги</option>
                  <option value="nails">Маникюр и педикюр</option>
                  <option value="makeup">Макияж</option>
                  <option value="cosmetology">Косметология</option>
                  <option value="brows">Брови и ресницы</option>
                  <option value="spa">Спа-процедуры</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="master"
                  className="block text-sm font-medium text-text-main mb-2"
                >
                  Мастер
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition appearance-none pr-10"
                  style={Styles.inputArrow}
                >
                  <option value="">Выберите мастера</option>
                  {masters.map((master) => (
                    <option key={master.id} value={master.id}>
                      {master.name} — {master.position}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-text-main mb-2">
                Оценка
              </label>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className="w-10 h-10 rounded-full bg-bg-section flex items-center justify-center hover:bg-primary hover:text-white transition"
                  >
                    <Star size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="review"
                className="block text-sm font-medium text-text-main mb-2"
              >
                Ваш отзыв
              </label>
              <textarea
                id="review"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-bg-section border border-green-muted/20 focus:border-primary focus:outline-none transition resize-none"
                placeholder="Поделитесь впечатлениями..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105"
            >
              Отправить отзыв
            </button>

            <p className="text-xs text-text-main/50 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных
              данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
