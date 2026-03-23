import { EntryFormData } from "@/src/type/EntryFormData";
import { ArrowRight } from "lucide-react";

interface FourStepProps {
  step: number;
  formData: EntryFormData;
  nextStep: () => void;
  isSubmitting: boolean;
}

export default function FourStep({
  step,
  formData,
  nextStep,
  isSubmitting,
}: FourStepProps) {
  return (
    <>
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
    </>
  );
}
