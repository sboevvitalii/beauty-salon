import { contacts } from "@/src/shared/contacts";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactAndMap() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Как нас найти
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Адрес</h3>
                  <p className="text-text-main">{contacts.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Режим работы
                  </h3>
                  <p className="text-text-main">{contacts.workHours}</p>
                  <p className="text-sm text-text-main mt-1">
                    Без выходных и перерывов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Телефон</h3>
                  <a
                    href={contacts.phoneHref}
                    className="text-text-main hover:text-primary transition"
                  >
                    {contacts.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Email</h3>
                  <a
                    href={contacts.emailHref}
                    className="text-text-main hover:text-primary transition"
                  >
                    {contacts.email}
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/contacts"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-all hover:scale-105"
            >
              <MapPin size={18} />
              Подробная схема проезда
            </Link>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-md h-96 flex items-center justify-center">
            <span className="text-primary font-medium">Карта</span>
          </div>
        </div>
      </div>
    </section>
  );
}
