import Link from "next/link";

export default function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {" "}
      {/* Нижняя часть с копирайтом */}
      <div className="border-t border-green-muted py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-main">
            <div>© {currentYear} Laims Beauty Studio. Все права защищены.</div>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
