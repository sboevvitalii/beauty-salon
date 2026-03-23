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
    question: "Как часто нужно делать коррекцию бровей?",
    answer:
      "Рекомендуется проводить коррекцию каждые 2-3 недели. Скорость роста волосков индивидуальна, но в среднем этого интервала достаточно для поддержания идеальной формы.",
  },
  {
    question: "Как долго держится ламинирование бровей?",
    answer:
      "Эффект сохраняется от 4 до 8 недель, в зависимости от скорости роста волосков и соблюдения рекомендаций по уходу.",
  },
  {
    question: "Больно ли делать наращивание ресниц?",
    answer:
      "Процедура абсолютно безболезненна. Во время наращивания вы отдыхаете с закрытыми глазами, многие клиенты даже засыпают.",
  },
  {
    question: "Как часто нужно делать коррекцию ресниц?",
    answer:
      "Коррекция рекомендуется каждые 2-3 недели. Это позволяет поддерживать объем и аккуратный вид наращенных ресниц.",
  },
  {
    question: "Можно ли красить брови после ламинирования?",
    answer:
      "Да, можно. Но обычно ламинирование уже включает окрашивание. Для поддержания цвета можно использовать оттеночные гели.",
  },
  {
    question: "Вредно ли наращивание для своих ресниц?",
    answer:
      "При правильной технике и использовании качественных материалов, наращивание не вредит своим ресницам. Важно соблюдать рекомендации по уходу и вовремя делать коррекцию.",
  },
];
