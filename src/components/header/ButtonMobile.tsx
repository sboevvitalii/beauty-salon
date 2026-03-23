import { Menu, X } from "lucide-react";

interface ButtonMobileProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ButtonMobile({ isOpen, setIsOpen }: ButtonMobileProps) {
  return (
    <>
      {/* Мобильная кнопка меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative z-10 p-2 text-text-main hover:text-primary transition"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  );
}
