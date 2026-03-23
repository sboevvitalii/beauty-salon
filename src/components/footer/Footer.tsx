"use client";

import FooterBrand from "./FooterBrand";
import FooterNavigation from "./FooterNavigation";
import FooterServices from "./FooterServices";
import FooterContacts from "./FooterContacts";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="bg-bg-main border-t border-green-muted">
      {/* Основная часть футера */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <FooterBrand />
          <FooterNavigation />
          <FooterServices />
          <FooterContacts />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
