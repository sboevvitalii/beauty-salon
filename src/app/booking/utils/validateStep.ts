import { EntryFormData } from "@/src/type/EntryFormData";

export const validateStep = (
  currentStep: number,
  data: EntryFormData,
): Record<string, string> => {
  const newErrors: Record<string, string> = {};

  if (currentStep === 1) {
    if (!data.name) newErrors.name = "Имя обязательно";
    if (!data.phone) newErrors.phone = "Телефон обязателен";
  } else if (currentStep === 2) {
    if (!data.service) newErrors.service = "Выберите услугу";
    if (!data.date) newErrors.date = "Выберите дату";
    if (!data.time) newErrors.time = "Выберите время";
  }

  return newErrors;
};
