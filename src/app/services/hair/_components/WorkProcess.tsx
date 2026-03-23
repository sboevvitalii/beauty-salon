export default function WorkProcess() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Как мы работаем
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-2">{step.title}</h3>
              <p className="text-text-main text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Консультация",
    description: "Обсуждаем пожелания, подбираем оптимальный вариант",
  },
  {
    title: "Запись",
    description: "Выбираем удобное время и мастера",
  },
  {
    title: "Визит в салон",
    description: "Приходите в назначенное время без очереди",
  },
  {
    title: "Результат",
    description: "Наслаждаетесь новым образом",
  },
];
