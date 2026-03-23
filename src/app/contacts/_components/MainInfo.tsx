import { contacts } from "@/src/shared/contacts";
import { socials } from "@/src/shared/social";
import { Calendar, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Link from "next/link";

export default function MainInfo() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Левая колонка - контакты */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">
              Как с нами связаться
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">
                    Телефон
                  </h3>
                  <a
                    href={contacts.phoneHref}
                    className="text-2xl font-bold text-primary hover:text-primary-dark transition"
                  >
                    {contacts.phone}
                  </a>
                  <p className="text-sm text-text-main/60 mt-1">
                    {contacts.workHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">
                    Email
                  </h3>
                  <a
                    href={contacts.emailHref}
                    className="text-xl text-primary hover:text-primary-dark transition"
                  >
                    {contacts.email}
                  </a>
                  <p className="text-sm text-text-main/60 mt-1 ">
                    Ответим в течение 2 часов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">
                    Адрес
                  </h3>
                  <p className="text-xl text-text-main">{contacts.address}</p>
                  <p className="text-sm text-text-main/60 mt-1">
                    Алматы. Турксибский район
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">
                    Режим работы
                  </h3>
                  <p className="text-xl text-text-main">{contacts.workHours}</p>
                  <p className="text-sm text-text-main/60 mt-1">
                    Без выходных и перерывов
                  </p>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Кнопка записи */}
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
            >
              <Calendar size={20} />
              Записаться онлайн
            </Link>
          </div>

          {/* Правая колонка - карта */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 bg-bg-section flex items-center justify-center">
              <span className="text-primary font-medium">Карта</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Ориентиры</h3>
              <p className="text-text-main/70 mb-4">
                Мы находимся {contacts.address}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
              >
                <Navigation size={18} />
                Построить маршрут
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
