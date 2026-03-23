import { NailServicesList } from "./nailServicesList";

export default function QuickNav() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {NailServicesList.map((category) => (
            <a
              key={category.category}
              href={`#${category.category}`}
              className="px-4 py-2 bg-white rounded-full text-sm text-text-main hover:bg-primary hover:text-white transition-colors shadow-sm"
            >
              {category.category}
            </a>
          ))}
          <a
            href="#coatings"
            className="px-4 py-2 bg-white rounded-full text-sm text-text-main hover:bg-primary hover:text-white transition-colors shadow-sm"
          >
            Покрытия
          </a>
        </div>
      </div>
    </section>
  );
}
