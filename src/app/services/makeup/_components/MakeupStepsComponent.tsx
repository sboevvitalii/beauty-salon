import { makeupStepsList } from "./makeupStepsList";

export default function MakeupSteps() {
  return (
    <section className="py-16 bg-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Как мы создаем макияж
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {makeupStepsList.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2 mt-2">{step.title}</h3>
              <p className="text-sm text-text-main">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
