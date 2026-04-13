"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "../../_formInputs/PhoneInput";
import PersonInput from "../../_formInputs/PersonInput";
import PasswordInput from "../../_formInputs/PasswordInput";
import DateInput from "../../_formInputs/DateInput";
import EmailInput from "../../_formInputs/EmailInput";
import RegFormFooter from "./RegFormFooter";
import { validateRegisterForm } from "@/src/utils/validation/validateForm";

const initialFormData = {
  phoneNumber: "",
  surname: "",
  firstName: "",
  password: "",
  confirmPassword: "",
  birthdayDate: "",
  region: "",
  location: "",
  gender: "",
  email: "",
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState("");

  const router = useRouter();

  const handleClose = () => {
    setFormData(initialFormData);
    router.back();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, type } = e.target;
    const value = type === "checkbox" ? e.target.checked : e.target.value;

    if (invalidFormMessage) {
      setInvalidFormMessage("");
    }

    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setInvalidFormMessage("");

    const validation = validateRegisterForm(formData);

    if (!validation.isValid) {
      setInvalidFormMessage(validation.errorMessage || "Некорректные данные");
      setIsLoading(false);
      return;
    }
  };

  const isFormValid = () => validateRegisterForm(formData).isValid;
  console.log(formData.phoneNumber);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-primary-dark min-h-screen text-primary-dark">
      <div className="bg-white rounded-2xl shadow-accent-light w-full max-w-170 max-h-screen overflow-y-auto">
        <div className="flex justify-end">
          <button
            className="rounded duration-300 cursor-pointer m-4"
            onClick={handleClose}
            aria-label="Close"
          >
            <X />
          </button>
        </div>
        <h1 className="text-2xl font-bold text-center mb-10">Регистрация</h1>
        <h2 className="text-lg font-bold text-center mb-6">
          Обязательные поля
        </h2>
        <form
          onSubmit={handleSubmit}
          autoCapitalize="off"
          className="w-full w-max-[552px] mx-auto max-h-screen flex flex-col justify-center overflow-y-auto "
        >
          <div className="w-full flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            <div className="flex flex-col gap-y-4 items-start">
              <PhoneInput
                value={formData.phoneNumber}
                onChangeAction={handleChange}
              />
              <PersonInput
                id="surname"
                label="Фамилия"
                value={formData.surname}
                onChange={handleChange}
              />
              <PersonInput
                id="firstName"
                label="Имя"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-y-4 items-start">
              <DateInput
                id="birthdayDate"
                value={formData.birthdayDate}
                onChangeAction={(value) =>
                  setFormData((prev) => ({ ...prev, birthdayDate: value }))
                }
              />
              <PasswordInput
                id="password"
                label="Пароль"
                value={formData.password}
                onChangeAction={handleChange}
                showPassword={showPassword}
                togglePasswordVisibilityAction={() =>
                  setShowPassword(!showPassword)
                }
                showRequirements={true}
              />
              <PasswordInput
                id="confirmPassword"
                label="Подтвердите пароль"
                value={formData.confirmPassword}
                onChangeAction={handleChange}
                showPassword={showPassword}
                togglePasswordVisibilityAction={() =>
                  setShowPassword(!showPassword)
                }
                compareWith={formData.password}
              />
            </div>
          </div>
          <h2 className="text-lg font-bold text-center mb-6">
            Необязательные поля
          </h2>
          <div className="w-full flex flex-row flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            <div className="flex flex-col gap-y-4 items-start">
              <EmailInput
                value={formData.email}
                onChangeAction={handleChange}
              />
            </div>
          </div>
          {invalidFormMessage && (
            <div className="text-red-500 text-center mb-4">
              {invalidFormMessage}
            </div>
          )}
          <RegFormFooter isFormValid={isFormValid()} isLoading={isLoading} />
        </form>
      </div>
    </div>
  );
}
