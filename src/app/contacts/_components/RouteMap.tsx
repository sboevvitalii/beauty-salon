import { transportOptions } from "./transportOptions";

export default function RouteMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Как к нам проехать
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="bg-bg-main rounded-xl p-6 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mb-4 rounded-xl bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-full h-full" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                <p className="text-text-main/70 text-sm mb-2">
                  {option.description}
                </p>
                <p className="text-xs text-text-main/60">{option.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
