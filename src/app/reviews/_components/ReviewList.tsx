import { Star, ThumbsUp } from "lucide-react";
import { reviews } from "./reviews";

export default function ReviewList() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              {/* Шапка отзыва */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-xs text-text-main/60">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-primary text-primary"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Информация об услуге и мастере */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {review.service}
                </span>
                <span className="px-3 py-1 bg-bg-main text-text-main text-xs rounded-full">
                  Мастер: {review.master}
                </span>
              </div>

              {/* Текст отзыва */}
              <p className="text-text-main/80 mb-4 leading-relaxed">
                "{review.text}"
              </p>

              {/* Нижняя панель */}
              <div className="flex items-center justify-between pt-4 border-t border-green-muted/10">
                <button className="flex items-center gap-1 text-sm text-text-main/60 hover:text-primary transition">
                  <ThumbsUp size={16} />
                  <span>{review.likes}</span>
                </button>
                <button className="text-sm text-primary hover:text-primary-dark transition">
                  Ответить
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white text-text-main hover:bg-primary hover:text-white transition shadow-md">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white transition shadow-md">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-text-main hover:bg-primary hover:text-white transition shadow-md">
              2
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-text-main hover:bg-primary hover:text-white transition shadow-md">
              3
            </button>
            <span className="text-text-main/50">...</span>
            <button className="w-10 h-10 rounded-full bg-white text-text-main hover:bg-primary hover:text-white transition shadow-md">
              8
            </button>
            <button className="w-10 h-10 rounded-full bg-white text-text-main hover:bg-primary hover:text-white transition shadow-md">
              →
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
