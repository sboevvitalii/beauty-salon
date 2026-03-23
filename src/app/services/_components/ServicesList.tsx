import { services } from "@/src/shared/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesList() {
  return (
    <>
      {" "}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Градиентный фон при наведении */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 transition-opacity duration-300`}
                  />

                  <div className="p-6 lg:p-8 flex flex-col justify-between h-full ">
                    {/* Иконка */}
                    <div>
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-linear-to-br ${service.color} p-4 text-white transform transition-transform duration-300 group-hover:scale-125`}
                      >
                        <Icon className="w-full h-full" />
                      </div>

                      {/* Заголовок */}
                      <h2 className="text-xl lg:text-2xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">
                        {service.name}
                      </h2>

                      {/* Описание */}
                      <p className="text-text-main mb-4 line-clamp-2">
                        {service.description}
                      </p>
                    </div>

                    {/* Ссылка */}
                    <div className="flex items-center text-primary font-medium  ">
                      <span>Подробнее</span>
                      <ArrowRight
                        size={18}
                        className="ml-2 group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
