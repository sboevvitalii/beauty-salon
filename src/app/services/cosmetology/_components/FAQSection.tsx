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
    question: "Как часто нужно посещать косметолога?",
    answer:
      "Рекомендуемая частота зависит от возраста и состояния кожи. Для профилактики и поддержания результата достаточно 1 раза в месяц. Для решения конкретных проблем может потребоваться курс процедур.",
  },
  {
    question: "Болезненны ли инъекционные процедуры?",
    answer:
      "Мы используем современные препараты с анестетиками и специальные техники введения, чтобы минимизировать дискомфорт. Большинство клиентов отмечают, что процедуры вполне комфортны.",
  },
  {
    question: "Когда виден результат после процедур?",
    answer:
      "Результат может быть заметен сразу (например, после чистки) или проявляться постепенно в течение нескольких дней или недель (после инъекционных процедур).",
  },
  {
    question: "Нужна ли специальная подготовка к процедурам?",
    answer:
      "Для большинства процедур специальная подготовка не требуется. Все рекомендации вы получите на консультации перед процедурой.",
  },
  {
    question: "Есть ли возрастные ограничения?",
    answer:
      "Некоторые процедуры рекомендуются с определенного возраста. На консультации мы подберем процедуры, подходящие именно вам, независимо от возраста.",
  },
  {
    question: "Как ухаживать за кожей после процедур?",
    answer:
      "После каждой процедуры мы даем подробные рекомендации по домашнему уходу. Обычно они включают использование специальных средств и временные ограничения (не загорать, не посещать сауну и т.д.).",
  },
];
