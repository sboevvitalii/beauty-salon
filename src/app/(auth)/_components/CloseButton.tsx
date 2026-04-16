"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();
  const handleClose = () => {
    router.replace("/");
  };
  return (
    <button
      onClick={handleClose}
      className="bg-[#f3f2f1] rounded duration-300 cursor-pointer mb-8 absolute top-1 right-1"
      aria-label="Закрыть"
    >
      <X />
    </button>
  );
}
