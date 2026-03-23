import { Gem } from "lucide-react";
import { brandsList } from "./brandsList";

export default function MaterialBrands() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-12">
          Профессиональные материалы
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brandsList.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-primary flex items-center justify-center">
                <Gem className="w-6 h-6 text-primary-dark" />
              </div>
              <p className="font-medium text-sm">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
