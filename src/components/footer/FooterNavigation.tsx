import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { navLinks } from "../../shared/NavLinks";

export default function FooterNavigation() {
  const mainNavigation = navLinks;
  return (
    <>
      {" "}
      {/* Колонка 2: Основная навигация */}
      <div>
        <h3 className="text-primary font-semibold text-lg mb-4">Навигация</h3>
        <ul className="space-y-2">
          {mainNavigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-text-main hover:text-primary transition-colors inline-flex items-center gap-1 group"
              >
                <ChevronRight
                  size={14}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
