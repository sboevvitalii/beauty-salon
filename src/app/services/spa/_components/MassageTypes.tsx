import { massageTypes } from "./massageTypesList";

export default function MassageTypes() {
  return (
    <section id="massage-types" className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Виды массажа</h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Выберите массаж, который подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {massageTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
              >
                <div
                  className={`w-16 h-16 mb-4 rounded-xl bg-linear-to-br ${type.color} p-4 text-white group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                <p className="text-sm text-text-main">{type.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
