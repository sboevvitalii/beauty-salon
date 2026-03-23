"use client";

import { useState, useEffect } from "react";
import { navLinks } from "../../shared/NavLinks";
import TopContactsBar from "./TopContactsBar";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import ButtonMobile from "./ButtonMobile";
import ButtonMobileEntry from "./ButtonMobileEntry";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-bg-main shadow-lg py-2 `}
    >
      <TopContactsBar isScrolled={isScrolled} />

      {/* Основная навигация */}
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          <DesktopMenu navLinks={navLinks} />
          <ButtonMobile setIsOpen={setIsOpen} isOpen={isOpen} />
          <MobileMenu
            isOpen={isOpen}
            navLinks={navLinks}
            setIsOpen={setIsOpen}
          />

          <ButtonMobileEntry />
        </div>
      </nav>

      {/* Оверлей для мобильного меню */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-[-1]"
          onClick={() => setIsOpen(false)}
          style={{ top: "72px" }}
        />
      )}
    </header>
  );
}
