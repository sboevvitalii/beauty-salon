import { advantagesList } from "./advantagesList";

export default function BenefitsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Почему выбирают Laims
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantagesList.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 mb-4 rounded-xl bg-primary p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="w-full h-full text-cyan-900" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-sm text-text-main">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
