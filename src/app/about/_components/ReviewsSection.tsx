import { Star } from "lucide-react";
import { testimonials } from "./testimonialsList";
import Link from "next/link";

export default function ReviewsSection() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Отзывы наших гостей
        </h2>
        <p className="text-lg text-center text-text-main mb-12 max-w-2xl mx-auto">
          Мы гордимся доверием наших клиентов и ценим каждое мнение
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-text-main mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-text-main">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
          >
            Все отзывы
          </Link>
        </div>
      </div>
    </section>
  );
}
