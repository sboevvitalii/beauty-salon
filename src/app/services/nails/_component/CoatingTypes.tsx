import { Clock, Palette } from "lucide-react";
import { coatingTypesList } from "./coatingTypesList";

export default function CoatingTypes() {
  return (
    <section id="coatings" className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Виды покрытий
          </h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Выберите покрытие, которое подходит именно вам
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coatingTypesList.map((coating, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 mb-4 rounded-xl bg-linear-to-br from-primary to-primary-dark p-4 text-white group-hover:scale-110 transition-transform">
                <Palette className="w-full h-full" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{coating.title}</h3>
              <p className="text-sm text-text-main mb-3">
                {coating.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="flex items-center gap-1 text-text-main">
                  <Clock size={14} />
                  {coating.time}
                </span>
                <span className="font-bold text-primary">{coating.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
