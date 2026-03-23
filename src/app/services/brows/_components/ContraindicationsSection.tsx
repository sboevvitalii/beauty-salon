export default function ContraindicationsSection() {
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-8">
            Противопоказания
          </h2>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <p className="text-text-main)">
              Пожалуйста, ознакомьтесь с противопоказаниями перед процедурой:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contraindications.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">•</span>
                  <span className="text-text-main text-sm">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-text-main italic">
              * При наличии сомнений, проконсультируйтесь с мастером перед
              процедурой
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const contraindications = [
  "Индивидуальная непереносимость материалов",
  "Воспалительные процессы в области глаз",
  "Инфекционные заболевания глаз (конъюнктивит, ячмень)",
  "Повышенная слезоточивость",
  "Аллергические реакции в активной фазе",
  "Период беременности и лактации (требуется консультация)",
  "Недавно перенесенные операции на глазах",
  "Прием антибиотиков и гормональных препаратов",
];
