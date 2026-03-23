import { nailShapes } from "./nailShapesList";

export default function NailShapes() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Формы ногтей</h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Подберем идеальную форму под ваши пальцы
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {nailShapes.map((shape, index) => {
            const Icon = shape.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-full h-full text-fuchsia-950" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{shape.title}</h3>
                <p className="text-xs text-text-main">{shape.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
