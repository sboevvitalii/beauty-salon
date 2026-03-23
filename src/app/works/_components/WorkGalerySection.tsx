import { ArrowRight, Eye, Heart, ImageIcon } from "lucide-react";
import { works } from "./works";
import Link from "next/link";

export default function WorkGalerySection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Изображение */}
              <div className="relative aspect-square overflow-hidden bg-bg-section">
                <div className="w-full h-full bg-linear-to-br from-primary/20 to-bg-main flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-primary/50" />
                </div>

                {/* Badge "До/После" */}
                {work.beforeAfter && (
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    До/После
                  </div>
                )}

                {/* Оверлей при наведении */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition">
                    <Eye size={20} />
                  </button>
                  <button className="bg-white text-primary p-2 rounded-full hover:bg-primary hover:text-white transition">
                    <Heart size={20} />
                  </button>
                </div>
              </div>

              {/* Информация */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg text-text-main group-hover:text-primary transition">
                    {work.title}
                  </h3>
                  <span className="text-xs text-text-main/60">{work.date}</span>
                </div>

                <p className="text-sm text-text-main/70 mb-3">
                  {work.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-main/60">Мастер</p>
                    <p className="text-sm font-medium text-primary">
                      {work.master}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-main/60">Категория</p>
                    <p className="text-sm text-text-main/70">
                      {work.categoryName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-green-muted/10">
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-xs text-text-main/60 hover:text-primary transition">
                      <Heart size={14} />
                      <span>{work.likes}</span>
                    </button>
                    <div className="flex items-center gap-1 text-xs text-text-main/60">
                      <Eye size={14} />
                      <span>{work.views}</span>
                    </div>
                  </div>
                  <Link
                    href={`/works/${work.id}`}
                    className="text-sm text-primary hover:text-primary-dark font-medium flex items-center gap-1"
                  >
                    Подробнее
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
