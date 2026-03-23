import { advantages } from "./advantages";

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-12">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-sm font-medium">{adv.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
