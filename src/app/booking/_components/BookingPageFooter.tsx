import { EntryFormData } from "@/src/type/EntryFormDataProps";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface BookingPageFooterProps {
  step: number;
  formData: EntryFormData;
  nextStep: () => void;
  isSubmitting: boolean;
  onReset: () => void;
  prevStep: () => void;
}

export default function BookingPageFooter({
  step,
  formData,
  nextStep,
  isSubmitting,
  onReset,
  prevStep,
}: BookingPageFooterProps) {
  return (
    <div className="flex w-full justify-center gap-4 mt-8 pt-4 border-t border-green-muted/20">
      {/* Кнопка отмены */}
      {step > 1 ? (
        <button
          type="button"
          onClick={prevStep}
          aria-label="Назад к предыдущему шагу"
          className="px-6 py-3 rounded-full border border-green-muted/20 text-text-main hover:border-primary hover:text-primary transition flex items-center gap-2"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Назад
        </button>
      ) : (
        <button
          type="button"
          onClick={onReset}
          className="px-6 py-3 rounded-full border border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transition flex items-center gap-2"
        >
          <X size={18} aria-hidden="true" />
          Отмена
        </button>
      )}

      {/* Кнопка продолжения/подтверждения */}
      {step < 3 ? (
        <button
          type="button"
          onClick={nextStep}
          disabled={
            (step === 1 && (!formData.name || !formData.phone)) ||
            (step === 2 &&
              (!formData.service || !formData.date || !formData.time))
          }
          className="flex-1 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Продолжить
          <ArrowRight size={18} />
        </button>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting ? "true" : "false"}
          className="flex-1 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              />
              Отправка...
            </span>
          ) : (
            "Подтвердить запись"
          )}
        </button>
      )}
    </div>
  );
}
