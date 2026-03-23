"use client";

import { useState, useCallback, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { EntryFormData } from "@/src/type/EntryFormData";
import { validateStep } from "./utils/validateStep";
import ConfirmModal from "@/src/components/Modal/ConfirmModal";
import BookingPageHeader from "./_components/BookingPageHeader";
import FirstStep from "./_components/FirstStep";
import { FormErrors } from "@/src/type/FormErrors";
import SecondStep from "./_components/SecondStep";
import ThreeStep from "./_components/ThreeStep";
import FourStep from "./_components/FourStep";
import SuccessSection from "./_components/SuccessSection";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [formData, setFormData] = useState<EntryFormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    masterId: "",
    date: "",
    time: "",
    comment: "",
  });

  useEffect(() => {
    if (step === 1) {
      const nameInput = document.getElementById("name");
      if (nameInput) nameInput.focus();
    }
  }, [step]);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Здесь ваш реальный API-запрос
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Ошибка отправки заявки");

      setIsSuccess(true);
    } catch (error) {
      setError(
        `${error}:'Не удалось отправить заявку. Попробуйте ещё раз или свяжитесь с нами по телефону.'`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const nextStep = useCallback(() => {
    const newErrors = validateStep(step, formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStep((prevStep) => prevStep + 1);
    }
  }, [step, formData, setErrors, setStep]);

  const handleReset = () => {
    setIsResetModalOpen(true);
  };

  const handleConfirmReset = () => {
    setStep(1);
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      masterId: "",
      date: "",
      time: "",
      comment: "",
    });
    setIsSuccess(false);
    setErrors({});
    setError(null);
    setIsResetModalOpen(false);
  };

  const handleCancelReset = () => {
    setIsResetModalOpen(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-bg-main pt-30 flex items-center justify-center py-20">
        <SuccessSection handleReset={handleReset} />
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>{error}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-main pt-30 py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <BookingPageHeader step={step} />

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            {/* Шаг 1 - Контактные данные */}
            <FirstStep
              step={step}
              errors={errors}
              formData={formData}
              handleChange={handleChange}
            />
            {/* Шаг 2 - Выбор услуги, мастера, даты и времени */}
            <SecondStep
              step={step}
              formData={formData}
              handleChange={handleChange}
              setFormData={setFormData}
            />
            {/* Шаг 3 - Подтверждение */}
            <ThreeStep step={step} formData={formData} />

            {/* Кнопки навигации */}
            <div className="flex justify-between gap-4 mt-8 pt-4 border-t border-green-muted/20">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  aria-label="Назад к предыдущему шагу"
                  className="px-6 py-3 rounded-full border border-green-muted/20 text-text-main hover:border-primary hover:text-primary transition flex items-center gap-2"
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  Назад
                </button>
              )}

              <FourStep
                step={step}
                formData={formData}
                nextStep={nextStep}
                isSubmitting={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
      {/* Модальное окно подтверждения сброса */}
      <ConfirmModal
        isOpen={isResetModalOpen}
        onConfirm={handleConfirmReset}
        onCancel={handleCancelReset}
        title="Начало заново"
        message="Вы уверены, что хотите начать заново? Все введённые данные будут потеряны."
      />
    </div>
  );
}
