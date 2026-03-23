import { Calendar } from "lucide-react";
import Link from "next/link";

export default function ButtonMobileEntry() {
  return (
    <>
      {/* Мобильная кнопка записи */}
      <Link
        href="/booking"
        className="lg:hidden bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-primary-dark transition flex items-center gap-1"
      >
        <Calendar size={16} />
        <span>Запись</span>
      </Link>
    </>
  );
}
