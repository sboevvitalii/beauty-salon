"use client";

import Link from "next/link";

const RegFormFooter = ({
  isFormValid,
  isLoading,
}: {
  isFormValid: boolean;
  isLoading: boolean;
}) => {
  return (
    <>
      <div className="relative group w-fit mx-auto">
        <button
          disabled={isLoading}
          type="submit"
          className={`w-65 h-17 my-10 text-2xl rounded cursor-pointer duration-300 flex items-center justify-center ${
            isFormValid
              ? "bg-primary text-white hover:shadow-shadow-article active:shadow-shadow-button-active"
              : "bg-[#fcd5ba] text-[#ff6633]"
          }`}
        >
          Продолжить
        </button>

        {!isFormValid && (
          <div
            className="absolute top-0 right-0 left-0
            bg-red-200 text-red-800 text-sm px-3 py-1 rounded
            opacity-0 group-hover:opacity-100 transition duration-200
            pointer-events-none whitespace-nowrap"
          >
            заполните форму регистрации
          </div>
        )}
      </div>

      <Link
        href="/login"
        className="mb-10 mx-auto h-8 text-primary font-bold hover:text-white active:text-white border-2 border-primary bg-white hover:bg-primary active:shadow-(--shadow-button-default) w-30 rounded flex items-center justify-center duration-300"
      >
        Вход
      </Link>
    </>
  );
};

export default RegFormFooter;
