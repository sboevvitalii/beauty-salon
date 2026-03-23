export default function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-xl shadow-md group"
            >
              <summary className="list-none p-6 cursor-pointer flex justify-between items-center">
                <span className="font-medium text-text-main group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-text-main border-t border-green-muted pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const faq = [
  {
    question: "Нужно ли мыть голову перед стрижкой?",
    answer:
      "Нет, не обязательно. Мастер вымоет волосы перед стрижкой специальным шампунем, подходящим вашему типу волос.",
  },
  {
    question: "Как часто нужно стричь волосы?",
    answer:
      "Рекомендуется обновлять стрижку каждые 1-2 месяца для поддержания формы. Для окрашенных волос - каждые 4-6 недель.",
  },
  {
    question: "Можно ли прийти со своими фото?",
    answer:
      "Конечно! Мы всегда рады, когда клиенты приносят фото-примеры желаемого результата. Это помогает лучше понять ваши пожелания.",
  },
  {
    question: "Как долго держится окрашивание?",
    answer:
      "Стойкость окрашивания зависит от типа краски и ухода. В среднем 4-8 недель. Мы дадим рекомендации по уходу для сохранения цвета.",
  },
];
