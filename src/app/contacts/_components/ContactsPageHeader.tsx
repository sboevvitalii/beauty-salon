export default function ContactsPageHeader() {
  return (
    <section className="relative py-20 bg-linear-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Контакты
          </h1>
          <p className="text-lg text-text-main/80 leading-relaxed">
            Мы всегда рядом и готовы ответить на ваши вопросы. Свяжитесь с нами
            любым удобным способом или приходите в гости.
          </p>
        </div>
      </div>
    </section>
  );
}
