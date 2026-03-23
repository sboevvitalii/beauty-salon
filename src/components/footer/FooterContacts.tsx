import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contacts } from "../../shared/contacts";
import Link from "next/link";

export default function FooterContacts() {
  return (
    <>
      {" "}
      {/* Колонка 4: Контакты */}
      <div>
        <h3 className="text-primary font-semibold text-lg mb-4">Контакты</h3>
        <ul className="space-y-3">
          <li>
            <a
              href={contacts.phoneHref}
              className="flex items-start gap-3 text-text-main hover:text-primary transition-colors group"
            >
              <Phone
                size={18}
                className="text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
              />
              <span>{contacts.phone}</span>
            </a>
          </li>
          <li>
            <a
              href={contacts.emailHref}
              className="flex items-start gap-3 text-text-main hover:text-primary transition-colors group"
            >
              <Mail
                size={18}
                className="text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
              />
              <span>{contacts.email}</span>
            </a>
          </li>
          <li>
            <div className="flex items-start gap-3 text-text-main">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <span>{contacts.address}</span>
            </div>
          </li>
          <li>
            <div className="flex items-start gap-3 text-text-main">
              <Clock size={18} className="text-primary shrink-0 mt-0.5" />
              <span>{contacts.workHours}</span>
            </div>
          </li>
        </ul>

        {/* Кнопка записи */}
        <Link
          href="/booking"
          className="mt-6 inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-all hover:scale-105 w-full sm:w-auto"
        >
          <Calendar size={18} />
          <span>Записаться онлайн</span>
        </Link>
      </div>
    </>
  );
}
