import { ReactNode } from "react";
import CloseButton from "./CloseButton";

type AuthFormVariant = "register" | "default";

export default function AuthFormLayout({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: AuthFormVariant;
}) {
  return (
    <div className="absolute inset-0 z-100 flex items-center justify-center bg-[#fcd5bacc] min-h-screen text-[#414141] py-10 px-3 backdrop-blur-sm ">
      <div
        className={`${
          variant === "register" ? "max-w-171.75" : "max-w-105"
        } bg-white rounded shadow-(--shadow-auth-form) w-full max-h-[calc(100vh-80px)] relative flex flex-col  p-5`}
      >
        <CloseButton />
        <div className="pt-18 pb-10 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
