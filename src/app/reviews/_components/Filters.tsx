import Link from "next/link";
import { serviceFilters } from "./serviceFilters";

export default function Filters() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {serviceFilters.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`px-4 py-2 rounded-full text-sm transition-colors shadow-sm ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-white text-text-main hover:bg-primary hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
