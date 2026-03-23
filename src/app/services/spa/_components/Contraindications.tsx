export default function Contraindications() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-8">
            Противопоказания
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <p className="text-text-main mb-6">
              Перед процедурами обязательна консультация специалиста.
              Противопоказания могут варьироваться в зависимости от типа
              процедуры:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contraindications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span className="text-text-main text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const contraindications = [
  "Онкологические заболевания",
  "Острые воспалительные процессы",
  "Инфекционные заболевания",
  "Повышенная температура тела",
  "Варикозное расширение вен (для некоторых процедур)",
  "Беременность (для некоторых процедур)",
  "Кожные заболевания в активной фазе",
  "Сердечно-сосудистые заболевания",
  "Эпилепсия",
  "Психические расстройства",
];
