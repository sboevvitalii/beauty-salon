import { contacts } from "@/src/shared/contacts";
import { Calendar, MapPin, Phone } from "lucide-react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  setIsOpen: (open: boolean) => void;
}

export default function MobileMenu({
  isOpen,
  navLinks,
  setIsOpen,
}: MobileMenuProps) {
  return (
    <>
      {/* Мобильное меню */}
      <div
        className={`lg:hidden fixed inset-0 bg-bg-main z-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col p-6 gap-4">
          {/* Контакты для мобильной версии */}
          <div className="border-b border-green-muted pb-4 mb-2">
            <div className="flex items-center gap-2 mb-3 text-text-main">
              <Phone size={18} className="text-primary" />
              <a
                href="tel:+71234567890"
                className="hover:text-primary transition"
              >
                {contacts.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-text-main">
              <MapPin size={18} className="text-primary" />
              <span>{contacts.address}</span>
            </div>
          </div>

          {/* Навигационные ссылки */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-text-main hover:text-primary transition py-2 text-lg border-b border-green-muted"
            >
              {link.label}
            </Link>
          ))}

          {/* Кнопка записи для мобильной версии */}
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-full text-center hover:bg-primary-dark transition mt-4 flex items-center justify-center gap-2"
          >
            <Calendar size={20} />
            <span>Записаться онлайн</span>
          </Link>
        </div>
      </div>
    </>
  );
}
