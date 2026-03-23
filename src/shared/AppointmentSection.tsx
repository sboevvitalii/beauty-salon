import { contacts } from "@/src/shared/contacts";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function AppointmentSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-linear-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Запишитесь на процедуру
            </h2>
            <p className="text-white/90 mb-6">
              Подарите своим бровям и ресницам профессиональный уход. Запишитесь
              на удобное время прямо сейчас!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105"
              >
                <Calendar size={18} />
                Выбрать время
              </Link>
              <a
                href={contacts.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
              >
                <Clock size={18} />
                {contacts.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
