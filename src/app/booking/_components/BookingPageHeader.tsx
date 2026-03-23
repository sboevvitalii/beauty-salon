export default function BookingPageHeader({ step }: { step: number }) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
        Запись на прием
      </h1>
      <p className="text-lg text-text-main/80 max-w-2xl mx-auto">
        Заполните форму, и мы подберем удобное время для вашего визита
      </p>
      <div
        className="flex items-center justify-center gap-2 mt-6"
        role="tablist"
      >
        <div
          className={`flex items-center gap-2 ${step >= 1 ? "text-primary" : "text-text-main/40"}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-white" : "bg-bg-section text-text-main/40"}`}
          >
            1
          </div>
          <span className="text-sm">Контакты</span>
        </div>
        <div className="w-12 h-0.5 bg-green-muted/20"></div>
        <div
          className={`flex items-center gap-2 ${step >= 2 ? "text-primary" : "text-text-main/40"}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-white" : "bg-bg-section text-text-main/40"}`}
          >
            2
          </div>
          <span className="text-sm">Услуга и время</span>
        </div>
        <div className="w-12 h-0.5 bg-green-muted/20"></div>
        <div
          className={`flex items-center gap-2 ${step >= 3 ? "text-primary" : "text-text-main/40"}`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-white" : "bg-bg-section text-text-main/40"}`}
          >
            3
          </div>
          <span className="text-sm">Подтверждение</span>
        </div>
      </div>
    </div>
  );
}
