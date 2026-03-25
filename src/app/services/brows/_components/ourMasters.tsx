import { ArrowRight, Star } from "lucide-react";
import { MasterProps } from "@/src/type/MasterProps";
import Link from "next/link";
import StarRating from "@/src/shared/StarRating/StarRating";

const OurMasters = async () => {
  let masters: MasterProps[] = [];
  let error = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/master`);
    masters = await res.json();
  } catch (err) {
    error = "Ошибка получения списка мастеров";
    console.error("Ошибка в компоненте brows", err);
  }
  if (error) {
    return <div>Ошибка:{error}</div>;
  }
  return (
    <section id="masters" className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Наши мастера</h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Профессионалы, которые знают о бровях и ресницах всё
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters
            .filter((master) =>
              [
                "Бровист-стилист",
                "Лэшмейкер",
                "Бровист-лэшмейкер",
                "Специалист по бровям",
              ].includes(master.position),
            )
            .map((master, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative mb-4">
                  {/* Аватар */}
                  <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl font-bold">
                    {master.name.charAt(0)}
                  </div>

                  {/* Рейтинг */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium text-sm">{master.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-center mb-1">
                  {master.name}
                </h3>
                <div className="flex justify-center py-2">
                  <StarRating rating={master.rating} />
                </div>
                <p className="text-text-main text-sm text-center mb-2">
                  {master.position}
                </p>

                <div className="flex justify-center items-center gap-4 mb-4 text-sm text-text-main">
                  <span>Опыт {master.experience}</span>
                  <span>•</span>
                  <span>{master.position} работ</span>
                </div>

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
};

export default OurMasters;
