export default function Feedback() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Остались вопросы?
            </h2>
            <p className="text-lg text-text-main/80">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          <form className="bg-bg-main rounded-2xl p-8 shadow-lg">
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
                  className="w-full px-4 py-3 rounded-lg bg-white border border-green-muted/20 focus:border-primary focus:outline-none transition"
                  placeholder="Введите имя"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-main mb-2"
                >
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-green-muted/20 focus:border-primary focus:outline-none transition"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="question"
                className="block text-sm font-medium text-text-main mb-2"
              >
                Ваш вопрос
              </label>
              <textarea
                id="question"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white border border-green-muted/20 focus:border-primary focus:outline-none transition resize-none"
                placeholder="Напишите ваш вопрос..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all hover:scale-105"
            >
              Отправить сообщение
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
