import { Heart } from "lucide-react";
import { valuesList } from "./valuesList";

export default function MissionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Наша миссия
            </h2>
            <p className="text-lg text-text-main mb-6 leading-relaxed">
              Мы верим, что каждый человек прекрасен. Наша задача — помочь вам
              раскрыть эту красоту и почувствовать себя уверенно в любой
              ситуации.
            </p>
            <p className="text-lg text-text-main mb-8 leading-relaxed">
              В Laims мы создали пространство, где вы можете расслабиться,
              довериться профессионалам и получить удовольствие от процесса
              преображения.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-dark" />
              </div>
              <div>
                <p className="font-semibold text-lg text-white">
                  Екатерина Волкова
                </p>
                <p className="text-sm text-text-main">Основатель салона</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Наши ценности</h3>
            <div className="space-y-6">
              {valuesList.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-text-main">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
