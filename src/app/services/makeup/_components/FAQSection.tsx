export default function FAQSection() {
  return (
    <section className="py-16 bg-bg-section">
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
                <span className="text-[--primary] text-2xl group-open:rotate-45 transition-transform">
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
    question: "Как долго держится макияж?",
    answer:
      "При использовании профессиональной косметики и фиксаторов макияж сохраняется 8-12 часов. Свадебный макияж держится до 16 часов.",
  },
  {
    question: "Нужно ли приходить с чистой кожей?",
    answer:
      "Да, желательно приходить с очищенной кожей. Если вы приедете с макияжем, мы удалим его профессиональным средством (это займет дополнительное время).",
  },
  {
    question: "Можно ли сделать пробный макияж перед свадьбой?",
    answer:
      "Обязательно рекомендуем сделать пробный макияж за 1-2 недели до торжества, чтобы обсудить все детали и подобрать идеальный образ.",
  },
  {
    question: "Какая косметика используется?",
    answer:
      "Мы работаем только с профессиональными брендами: MAC, Bobbi Brown, NARS, Urban Decay, Charlotte Tilbury, Dior, Chanel и другими.",
  },
  {
    question: "Выезжает ли визажист на дом?",
    answer:
      "Да, мы предоставляем услуги выездного визажиста. Стоимость выезда зависит от района и времени суток.",
  },
  {
    question: "Можно ли сделать макияж, если у меня проблемная кожа?",
    answer:
      "Конечно! Наши визажисты работают с любыми типами кожи и используют специальные средства для проблемной кожи.",
  },
];
