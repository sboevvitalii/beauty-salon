import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HairPageNav() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Link
        href="/services"
        className="inline-flex items-center gap-2 text-text-main hover:text-primary transition group"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span>Назад к услугам</span>
      </Link>
    </div>
  );
}
