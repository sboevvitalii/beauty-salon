import { effects } from "./effects";

export default function LashEffects() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[--primary] mb-4">
            Эффекты наращивания ресниц
          </h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Выберите эффект, который подчеркнет вашу индивидуальность
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {effects.map((effect, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xl font-bold">
                {effect.title.charAt(0)}
              </div>
              <h3 className="font-semibold text-sm mb-1">{effect.title}</h3>
              <p className="text-xs text-text-main">{effect.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
