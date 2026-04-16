"use client";

import Link from "next/link";

interface LoginFormFooterProps {
  formData: {
    phoneNumber: string;
    password: string;
  };
}

const LoginFormFooter = ({ formData }: LoginFormFooterProps) => {
  const { phoneNumber, password } = formData;
  const isFormValid = phoneNumber.trim() !== "" && password.trim() !== "";
  return (
    <>
      <div className="relative group w-fit mx-auto">
        <button
          disabled={!phoneNumber || !password}
          type="submit"
          className={`w-65 h-17 my-10 text-2xl rounded cursor-pointer duration-300 flex items-center justify-center ${
            isFormValid
              ? "bg-primary text-white hover:shadow-shadow-article active:shadow-shadow-button-active"
              : "bg-[#fcd5ba] text-[#ff6633]"
          }`}
        >
          Войти
        </button>

        {!isFormValid && (
          <div
            className="absolute top-0 right-0 left-0
            bg-red-200 text-red-800 text-sm px-3 py-1 rounded
            opacity-0 group-hover:opacity-100 transition duration-200
            pointer-events-none whitespace-nowrap"
          >
            заполните все поля для входа
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap mb-10 mx-auto text-xs gap-x-2">
        <Link
          href="/register"
          className="mb-10 mx-auto h-8 text-primary font-bold hover:text-white active:text-white border-2 border-primary bg-white hover:bg-primary  w-30 rounded flex items-center justify-center duration-300"
        >
          Регистрация
        </Link>
        <Link
          href="/forgot-password"
          className="mb-10 mx-auto h-8 text-primary font-bold hover:text-white active:text-white border-2 border-primary bg-white hover:bg-primary  w-30 rounded flex items-center justify-center duration-300"
        >
          Забыли пароль?
        </Link>
      </div>
    </>
  );
};

export default LoginFormFooter;
