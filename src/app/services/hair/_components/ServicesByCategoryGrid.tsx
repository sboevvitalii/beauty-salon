import { ArrowRight, Clock } from "lucide-react";
import { hairServices } from "./hairServices";
import Link from "next/link";

export default function ServicesByCategoryGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {hairServices.map((category) => (
          <div
            key={category.category}
            id={category.category}
            className="mb-16 last:mb-0"
          >
            {/* Заголовок категории */}
            <h2 className="text-2xl font-semibold text-text-main mb-8 pb-2 border-b-2 border-primary inline-block">
              {category.category}
            </h2>

            {/* Карточки услуг */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-lg text-text-main group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <span className="text-primary font-bold text-lg">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-text-main text-sm mb-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-sm text-text-main">
                      <Clock size={14} />
                      {service.time}
                    </span>

                    <Link
                      href="/booking"
                      className="text-primary hover:text-primary-dark font-medium text-sm flex items-center gap-1 group/link"
                    >
                      Записаться
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
