import { contacts } from "@/src/shared/contacts";
import { Calendar, Phone } from "lucide-react";
import Link from "next/link";

export default function HowToChoose() {
  return (
    <section className="py-20 bg-bg-main">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Как выбрать мастера?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-dark">
                    Посмотрите портфолио
                  </h3>
                  <p className="text-text-main/70">
                    Изучите работы мастера в разделе{" "}
                    <Link href="/works">Наши работы</Link>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-dark">
                    Прочитайте отзывы
                  </h3>
                  <p className="text-text-main/70">
                    Узнайте мнение других клиентов о работе мастера
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-dark">
                    Проконсультируйтесь
                  </h3>
                  <p className="text-text-main/70">
                    Свяжитесь с администратором для подбора мастера под ваши
                    задачи
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-primary-dark">
                    Запишитесь на пробную процедуру
                  </h3>
                  <p className="text-text-main/70">
                    Попробуйте и убедитесь в профессионализме мастера
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Нужна помощь в выборе?
            </h3>
            <p className="text-text-main/70 mb-6">
              Наши администраторы помогут подобрать мастера под ваши пожелания и
              запишут на удобное время.
            </p>
            <div className="space-y-3">
              <a
                href={contacts.phoneHref}
                className="flex items-center gap-3 p-3 bg-bg-section rounded-lg hover:bg-primary/10 transition"
              >
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-text-main/60">Позвоните нам</p>
                  <p className="font-medium">{contacts.phone}</p>
                </div>
              </a>
              <a
                href="/booking"
                className="flex items-center gap-3 p-3 bg-bg-section rounded-lg hover:bg-primary/10 transition"
              >
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-text-main/60">Запишитесь онлайн</p>
                  <p className="font-medium">Выбрать время</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
