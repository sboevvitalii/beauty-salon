import { ArrowRight, Clock } from "lucide-react";
import { makeupServices } from "./makeupServices";
import Link from "next/link";

export default function ServicesByCategory() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {makeupServices.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.category}
              id={category.category}
              className="mb-16 last:mb-0 scroll-mt-24"
            >
              {/* Заголовок категории с иконкой */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary p-3 text-primary shrink-0">
                  <CategoryIcon className="w-full h-full text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-text-main mb-2">
                    {category.category}
                  </h2>
                  <p className="text-text-main">{category.description}</p>
                </div>
              </div>

              {/* Карточки услуг */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg text-text-main group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <span className="text-primary font-bold text-lg whitespace-nowrap ml-2">
                          {service.price}
                        </span>
                      </div>

                      <p className="text-text-main text-sm mb-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-green-muted">
                      <span className="flex items-center gap-1 text-sm text-text-main">
                        <Clock size={14} />
                        {service.time}
                      </span>

                      <Link
                        href="#booking"
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
          );
        })}
      </div>
    </section>
  );
}
