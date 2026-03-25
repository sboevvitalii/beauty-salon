import StarRating from "@/src/shared/StarRating/StarRating";
import { Review } from "@/src/type/ReviewsProps";
import { ThumbsUp } from "lucide-react";

interface FilteredListProps {
  reviews: Review[];
}

export default function FilteredList({ reviews }: FilteredListProps) {
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
                  <div>
                    <h3 className="font-semibold text-lg">{review.user_id}</h3>
                    <p className="text-xs text-text-main/60">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Информация об услуге и мастере */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  {review.service_id}
                </span>
                <span className="px-3 py-1 bg-bg-main text-text-main text-xs rounded-full">
                  Мастер: {review.master_id}
                </span>
              </div>

              {/* Текст отзыва */}
              <p className="text-text-main/80 mb-4 leading-relaxed">
                {review.comment}
              </p>

              {/* Нижняя панель */}
              <div className="flex items-center justify-between pt-4 border-t border-green-muted/10">
                <button className="flex items-center gap-1 text-sm text-text-main/60 hover:text-primary transition">
                  <ThumbsUp size={16} />
                  <span>{review.rating}</span>
                </button>
                <button className="text-sm text-primary hover:text-primary-dark transition">
                  Ответить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
