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
    question: "Как долго держится гель-лак?",
    answer:
      "При правильном нанесении и уходе гель-лак держится 2-3 недели. Срок носки зависит от скорости роста ногтей и образа жизни.",
  },
  {
    question: "Вреден ли гель-лак для ногтей?",
    answer:
      "При профессиональном нанесении, использовании качественных материалов и правильном снятии гель-лак не вредит ногтям. Важно делать перерывы между покрытиями.",
  },
  {
    question: "Как часто нужно делать коррекцию?",
    answer:
      "Коррекция наращенных ногтей рекомендуется каждые 3-4 недели. Обновление покрытия гель-лаком - каждые 2-3 недели.",
  },
  {
    question: "Можно ли делать маникюр беременным?",
    answer:
      "Да, можно. Мы используем безопасные материалы без запаха. Рекомендуем проконсультироваться с врачом.",
  },
  {
    question: "Как подготовиться к маникюру?",
    answer:
      "Специальная подготовка не требуется. Желательно не наносить жирный крем на руки перед процедурой.",
  },
  {
    question: "Почему отслаивается гель-лак?",
    answer:
      "Причин может быть несколько: индивидуальные особенности ногтей, нарушение техники нанесения, попадание влаги в первые 24 часа.",
  },
];
