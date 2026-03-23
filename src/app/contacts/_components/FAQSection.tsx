export default function FAQSection() {
  return (
    <section className="py-16 bg-bg-main">
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
              <div className="px-6 pb-6 text-text-main/70 border-t border-green-muted/10 pt-4">
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
    question: "Есть ли у вас парковка?",
    answer:
      "Да, у нас есть бесплатная парковка для клиентов салона. Парковочные места расположены перед входом.",
  },
  {
    question: "Работаете ли вы в праздничные дни?",
    answer:
      "Мы работаем ежедневно без выходных, включая праздничные дни. График работы может быть изменен, следите за объявлениями.",
  },
  {
    question: "Как отменить или перенести запись?",
    answer:
      "Вы можете отменить или перенести запись по телефону не позднее чем за 2 часа до процедуры.",
  },
  {
    question: "Нужно ли приходить заранее?",
    answer:
      "Рекомендуем приходить за 5-10 минут до начала процедуры, чтобы спокойно переодеться и выпить чашечку кофе.",
  },
  {
    question: "Есть ли у вас wi-fi?",
    answer: "Да, в салоне есть бесплатный Wi-Fi для гостей.",
  },
];
