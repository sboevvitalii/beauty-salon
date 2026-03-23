import Link from "next/link";
import { NavLinkProps } from "../../shared/NavLinks";

interface DesktopMenuProps {
  navLinks: NavLinkProps[];
}

export default function DDesktopMenu({ navLinks }: DesktopMenuProps) {
  return (
    <>
      {/* Десктопное меню */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text-main hover:text-primary transition relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </Link>
        ))}
      </div>
    </>
  );
}
