import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { services } from "../../shared/services";

export default function FooterServices() {
  return (
    <>
      {" "}
      {/* Колонка 3: Услуги */}
      <div>
        <h3 className="text-primary font-semibold text-lg mb-4">Услуги</h3>
        <ul className="space-y-2">
          {services.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-text-main hover:text-primary transition-colors inline-flex items-center gap-1 group"
              >
                <ChevronRight
                  size={14}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0"
                />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
