import { contacts } from "@/src/shared/contacts";
import { Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";

interface TopContactsBarProps {
  isScrolled: boolean;
}
export default function TopContactsBar({ isScrolled }: TopContactsBarProps) {
  return (
    <>
      {/* Верхняя полоса с контактами */}
      <div
        className={`hidden lg:block border-b-4  border-primary transition-all ${
          isScrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-text-main">
              <Phone size={16} className="text-primary" />
              <a
                href="tel:+71234567890"
                className="hover:text-primary transition"
              >
                {contacts.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-text-main">
              <MapPin size={16} className="text-primary" />
              <span>{contacts.address}</span>
            </div>
            <Link
              href="/booking"
              className="flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary-dark transition"
            >
              <Calendar size={16} />
              <span>Записаться</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
