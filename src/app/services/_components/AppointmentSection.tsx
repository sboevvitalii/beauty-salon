import { Calendar } from "lucide-react";
import Link from "next/link";

export default function AppointmentSection() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Готовы преобразиться?
            </h2>
            <p className="text-lg text-text-main mb-8">
              Запишитесь на удобное для вас время. Наши администраторы подберут
              оптимальное время и ответят на все вопросы.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[--primary-dark] transition-all hover:scale-105 shadow-lg"
            >
              <Calendar size={20} />
              Записаться онлайн
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
