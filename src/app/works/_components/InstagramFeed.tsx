export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Мы в Instagram
          </h2>
          <p className="text-lg text-text-main/80 max-w-2xl mx-auto">
            Подписывайтесь на наш Instagram, чтобы видеть новые работы первыми
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-bg-section rounded-xl flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            >
              <InstagramIcon size={32} className="text-primary/50" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all"
          >
            <InstagramIcon size={20} />
            Подписаться в Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
