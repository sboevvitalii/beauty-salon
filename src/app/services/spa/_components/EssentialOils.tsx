import { essentialOils } from "./essentialOilsList";

export default function EssentialOils() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Эфирные масла в наших программах
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {essentialOils.map((oil, index) => {
            const Icon = oil.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-full h-full text-accent" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{oil.name}</h3>
                <p className="text-xs text-text-main">{oil.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
