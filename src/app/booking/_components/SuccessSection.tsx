import { Check, Clock } from "lucide-react";
import Link from "next/link";

export default function SuccessSection({
  handleReset,
}: {
  handleReset: () => void;
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <Check size={48} className="text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-primary mb-4">
          Заявка отправлена!
        </h1>
        <p className="text-lg text-text-main/80 mb-6">
          Спасибо за доверие! Наш администратор свяжется с вами в ближайшее
          время для подтверждения записи.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-text-main/60 mb-8">
          <Clock size={16} />
          <span>Ожидайте звонка в течение 15 минут</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition"
          >
            На главную
          </Link>
          <Link
            href="/booking"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition"
          >
            Новая запись
          </Link>
        </div>
      </div>
    </div>
  );
}
