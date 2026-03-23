import { historyList } from "./historyList";

export default function HistorySection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Наша история
        </h2>

        <div className="relative">
          {/* Линия времени */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary hidden lg:block"></div>

          <div className="space-y-12">
            {historyList.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8`}
              >
                {/* Точка на линии */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white z-10 hidden lg:block"></div>

                {/* Год */}
                <div className="lg:w-1/2 text-center lg:text-right lg:pr-12">
                  <div className="text-4xl font-bold text-primary opacity-30">
                    {item.year}
                  </div>
                </div>

                {/* Контент */}
                <div className="lg:w-1/2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-main">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
