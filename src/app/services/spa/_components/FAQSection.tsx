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
    question: "Как часто можно делать массаж?",
    answer:
      "Рекомендуемая частота - 1-2 раза в неделю для лечебного массажа и 1 раз в 2-4 недели для расслабляющего.",
  },
  {
    question: "Болезненны ли спа-процедуры?",
    answer:
      "Спа-процедуры направлены на расслабление и комфорт. Если вы испытываете дискомфорт, мастер всегда может скорректировать интенсивность воздействия.",
  },
  {
    question: "Что надеть на спа?",
    answer:
      "Мы предоставляем одноразовое белье и халаты. Вы можете взять с собой купальник, если планируете посещение хаммама или гидромассажной ванны.",
  },
  {
    question: "Нужна ли подготовка к процедурам?",
    answer:
      "Рекомендуется принять душ перед процедурой. Не рекомендуется плотно есть за 1-2 часа до спа.",
  },
  {
    question: "Можно ли делать спа при беременности?",
    answer:
      "Да, есть специальные программы для беременных. Обязательно сообщите о беременности при записи.",
  },
  {
    question: "С какого возраста можно посещать спа?",
    answer:
      "Большинство процедур рекомендованы с 18 лет. Для подростков есть специальные программы с согласия родителей.",
  },
];
