import { Eye } from "lucide-react";
import { browShapesList } from "./browShapesList";

export default function BrowShapesComponent() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Формы бровей</h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Подберем идеальную форму под ваш тип лица
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {browShapesList.map((shape, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center group hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-primary flex items-center justify-center group-hover:border-primary transition-colors">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{shape.title}</h3>
              <p className="text-sm text-text-main">{shape.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
