import Link from "next/link";

export default function Logo() {
  return (
    <>
      {/* Логотип */}
      <Link href="/" className="relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-bold text-4xl text-primary hidden sm:block">
            Laims
            <span className="block text-xs font-normal text-primary">
              Beauty Studio
            </span>
          </span>
        </div>
      </Link>
    </>
  );
}
