import { categories } from "./categories";

export default function CatogorySection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm transition-all shadow-sm flex items-center gap-2 ${
                  category.id === "all"
                    ? "bg-primary text-white"
                    : "bg-white text-text-main hover:bg-primary hover:text-white"
                }`}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
