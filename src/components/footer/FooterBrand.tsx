import { socials } from "@/src/shared/social";
import Link from "next/link";

export default function FooterBrand() {
  return (
    <>
      {/* Колонка 1: Логотип и описание */}
      <div className="space-y-4">
        <Link href="/" className="inline-block">
          <span className="font-bold text-2xl text-primary">
            Laims
            <span className="block text-sm font-normal text-primary opacity-80">
              Beauty Studio
            </span>
          </span>
        </Link>
        <p className="text-text-main text-sm leading-relaxed">
          Ваш островок красоты и релаксации. Профессиональный уход и
          индивидуальный подход к каждому клиенту.
        </p>

        {/* Социальные сети */}
        <div className="flex items-center gap-3 pt-2">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 bg-primary/10 text-primary rounded-full  transition-all duration-300 ${social.color} w-9 h-9 flex items-center justify-center`}
                aria-label={social.name}
                title={social.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
