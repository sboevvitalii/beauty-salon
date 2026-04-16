"use client";

import Loader from "@/src/shared/loader/Loader";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "../../_formInputs/PhoneInput";
import PasswordInput from "../../_formInputs/PasswordInput";
import LoginFormFooter from "./LoginFormFooter";

const initialFormData = { phoneNumber: "+7", password: "" };

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<{
    error: Error;
    userMassege: string;
  } | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [invalidFormMessage, setInvalidFormMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  const handleClose = () => {
    setFormData(initialFormData);
    router.back();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber.replace(/\D/g, ""),
          password: formData.password,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Ошибка авторизации");
      }
      router.back();
    } catch (err) {
      setError({
        error: err instanceof Error ? err : new Error("Неизвестная ошибка"),
        userMassege: "Ошибка авторизации",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    <Loader />;
  }

  if (error) {
    <div className="text-red-500 text-center mb-4">{error.userMassege}</div>;
  }

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
        <h1 className="text-2xl font-bold text-center mb-10">Авторизация</h1>
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
              <PasswordInput
                id="password"
                label="Пароль"
                value={formData.password}
                onChangeAction={handleChange}
                showPassword={showPassword}
                togglePasswordVisibilityAction={() =>
                  setShowPassword(!showPassword)
                }
              />
            </div>
          </div>
          <LoginFormFooter formData={formData} />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
