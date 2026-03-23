import { masters } from "@/src/shared/masters";
import { ArrowRight, Link, Star } from "lucide-react";

export default function OurMasters() {
  return (
    <section className="py-16 bg-[--bg-section]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[--primary] mb-4">
            Наши мастера
          </h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Профессионалы своего дела с многолетним опытом работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters
            .filter((master) =>
              [
                "Стилист-универсал",
                "Колорист",
                "Барбер-стилист",
                "Стилист",
              ].includes(master.position),
            )
            .map((master, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-[--primary] to-primary-dark flex items-center justify-center text-white text-3xl font-bold">
                    {master.name.charAt(0)}
                  </div>

                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium text-sm">{master.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-center mb-1">
                  {master.name}
                </h3>
                <p className="text-primary text-sm text-center mb-2">
                  {master.position}
                </p>
                <p className="text-text-main text-sm text-center mb-3">
                  {master.specialization}
                </p>
                <p className="text-sm text-center text-text-main mb-4">
                  Опыт {master.exp}
                </p>

                <Link
                  href="#booking"
                  className="block text-center text-primary hover:text-primary-dark font-medium text-sm border-t border-green-muted pt-4 group/link"
                >
                  Записаться к мастеру
                  <ArrowRight
                    size={14}
                    className="inline ml-1 group-hover/link:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
