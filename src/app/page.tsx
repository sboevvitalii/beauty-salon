import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Eye,
  Flower2,
  Wand2,
  Heart,
  ArrowRight,
  Award,
  Clock,
  Calendar,
  Star,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Gem,
} from "lucide-react";
import { contacts } from "../shared/contacts";
import Image from "next/image";
import { socials } from "../shared/social";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-main">
      {/* Герой-секция */}
      <section className="relative h-screen flex items-start justify-center pt-52 overflow-hidden">
        {/* Фоновое изображение/градиент */}
        <div className="absolute inset-0 bg-linear-to-br from-primary to-bg-main z-0"></div>

        <div className="mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-9xl font-bold text-primary mb-6 animate-bounce">
              Laims
              <span className="block text-2xl md:text-3xl font-light text-text-main mt-2">
                beauty salon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-main mb-12 max-w-2xl mx-auto leading-relaxed">
              Пространство, где рождается красота. Профессиональный уход и
              индивидуальный подход.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-dark transition-all hover:scale-105 shadow-lg"
              >
                <Calendar size={20} />
                Записаться онлайн
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary]hover:text-white transition-all"
              >
                Наши услуги
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div
            className="relative flex items-center justify-center 
                  w-20 h-20 md:w-64 md:h-64 
                  rounded-full 
                  bg-linear-to-br from-primary to-primary-dark 
                  shadow-lg shadow-amber-400/50 
                  animate-pulse"
          >
            {/* Декоративное свечение */}
            <div className="absolute inset-0 rounded-full bg-primary blur-2xl opacity-30"></div>

            {/* Логотип */}
            <div className="relative w-[95%] h-[95%] rounded-full overflow-hidden">
              <Image
                src="/main-page-logo.png"
                alt="Laims Beauty Salon"
                fill
                priority
                sizes="(max-width: 768px) 80px, 256px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-text-main max-w-2xl mx-auto">
              Мы создали пространство, где каждый чувствует себя особенным
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, index) => {
              const Icon = adv.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{adv.title}</h3>
                  <p className="text-text-main">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-20 bg-bg-main">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-text-main/80 max-w-2xl mx-auto">
              Полный спектр услуг для вашей красоты и здоровья
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-linear-to-br from-primary to-primary-dark p-4 text-white group-hover:scale-110 transition-transform">
                    <Icon className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-main mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-main mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Подробнее</span>
                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
            >
              Все услуги
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* О салоне */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                О салоне Laims
              </h2>
              <p className="text-lg text-text-main mb-6 leading-relaxed">
                Мы открыли салон в 2014 году с одной простой целью — создать
                место, где каждый может расслабиться, довериться профессионалам
                и получить удовольствие от преображения.
              </p>
              <p className="text-lg text-text-main/80 mb-8 leading-relaxed">
                Сегодня Laims — это команда из 20+ специалистов, тысячи
                довольных клиентов и широкий спектр услуг. Мы постоянно
                развиваемся, следим за трендами и используем только лучшие
                материалы.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-bg-main rounded-xl">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-text-main">лет опыта</div>
                </div>
                <div className="text-center p-4 bg-bg-main rounded-xl">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-text-main/70">клиентов</div>
                </div>
                <div className="text-center p-4 bg-bg-main rounded-xl">
                  <div className="text-3xl font-bold text-primary">20+</div>
                  <div className="text-sm text-text-main/70">специалистов</div>
                </div>
                <div className="text-center p-4 bg-bg-main rounded-xl">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-text-main/70">услуг</div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-primary-dark transition-all"
              >
                Узнать больше
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-section rounded-2xl p-6 h-48 flex items-center justify-center">
                <span className="text-primary font-medium">Фото 1</span>
              </div>
              <div className="bg-section rounded-2xl p-6 h-48 flex items-center justify-center mt-8">
                <span className="text-primary font-medium">Фото 2</span>
              </div>
              <div className="bg-section rounded-2xl p-6 h-48 flex items-center justify-center -mt-8">
                <span className="text-primary font-medium">Фото 3</span>
              </div>
              <div className="bg-section rounded-2xl p-6 h-48 flex items-center justify-center">
                <span className="text-primary font-medium">Фото 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Мастера */}
      <section className="py-20 bg-bg-main">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Наши мастера
            </h2>
            <p className="text-lg text-text-main max-w-2xl mx-auto">
              Профессионалы, которые любят свое дело
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masters.slice(0, 4).map((master, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl font-bold">
                    {master.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-medium text-sm">{master.rating}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-center mb-1">
                  {master.name}
                </h3>
                <p className="text-primary text-sm text-center mb-2">
                  {master.position}
                </p>
                <p className="text-xs text-center text-text-main mb-3">
                  Опыт {master.exp}
                </p>
                <p className="text-sm text-text-main text-center mb-4">
                  {master.specialization}
                </p>

                <Link
                  href={`/masters/${master.id}`}
                  className="block text-center text-primary hover:text-primary-dark font-medium text-sm border-t border-green-muted pt-4"
                >
                  Подробнее
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/masters"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
            >
              Все мастера
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Наши работы */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Наши работы
            </h2>
            <p className="text-lg text-text-main max-w-2xl mx-auto">
              Примеры наших работ, которые вдохновляют
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-bg-section rounded-xl p-4 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
              >
                <span className="text-primary font-medium">
                  Работа {index + 1}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-all"
            >
              Больше работ
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-bg-main">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-text-main max-w-2xl mx-auto">
              Мы гордимся доверием наших гостей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-text-main mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-text-main">
                      {testimonial.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
            >
              Все отзывы
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Запись */}
      <section className="py-20 bg-linear-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Запишитесь прямо сейчас
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Оставьте заявку, и мы подберем удобное время для визита. Подарите
            себе красоту и расслабление!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all hover:scale-105"
            >
              <Calendar size={20} />
              Записаться онлайн
            </Link>
            <a
              href={contacts.phoneHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all"
            >
              <Phone size={20} />
              {contacts.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Контакты</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Адрес</h3>
                    <p className="text-text-main">{contacts.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Режим работы</h3>
                    <p className="text-text-main">{contacts.workHours}</p>
                    <p className="text-sm text-text-main mt-1">
                      Без выходных и перерывов
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <a
                      href="tel:+71234567890"
                      className="text-text-main hover:text-primary transition"
                    >
                      {contacts.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
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
            </div>

            <div className="bg-bg-section rounded-2xl p-6 h-96 flex items-center justify-center">
              <span className="text-primary font-medium">Карта</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Данные для преимуществ
const advantages = [
  {
    icon: Award,
    title: "Профессионализм",
    description: "Опытные мастера с международными сертификатами",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "Учитываем все пожелания и особенности",
  },
  {
    icon: Clock,
    title: "Точность",
    description: "Ценим ваше время, начинаем вовремя",
  },
  {
    icon: Gem,
    title: "Премиум-бренды",
    description: "Только профессиональная косметика",
  },
];

// Данные для услуг
const services = [
  {
    icon: Scissors,
    title: "Парикмахерские услуги",
    description: "Стрижки, окрашивание, укладка, лечение волос",
    href: "/services/hair",
  },
  {
    icon: Wand2,
    title: "Маникюр и педикюр",
    description: "Классический, аппаратный, дизайн, покрытие",
    href: "/services/nails",
  },
  {
    icon: Sparkles,
    title: "Макияж",
    description: "Дневной, вечерний, свадебный, fashion",
    href: "/services/makeup",
  },
  {
    icon: Flower2,
    title: "Косметология",
    description: "Чистка, пилинги, массаж, уход",
    href: "/services/cosmetology",
  },
  {
    icon: Eye,
    title: "Брови и ресницы",
    description: "Коррекция, окрашивание, ламинирование",
    href: "/services/brows",
  },
  {
    icon: Heart,
    title: "Спа-процедуры",
    description: "Массаж, обертывания, спа-программы",
    href: "/services/spa",
  },
];

// Данные для мастеров
const masters = [
  {
    id: 1,
    name: "Анна Петрова",
    position: "Стилист",
    exp: "8 лет",
    rating: 4.9,
    specialization: "Стрижки, окрашивание",
  },
  {
    id: 2,
    name: "Елена Соколова",
    position: "Косметолог",
    exp: "10 лет",
    rating: 5.0,
    specialization: "Уход за лицом",
  },
  {
    id: 3,
    name: "Мария Иванова",
    position: "Мастер маникюра",
    exp: "6 лет",
    rating: 4.8,
    specialization: "Дизайн ногтей",
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    position: "Барбер",
    exp: "7 лет",
    rating: 4.9,
    specialization: "Мужские стрижки",
  },
];

// Данные для отзывов
const testimonials = [
  {
    name: "Анна К.",
    text: "Хожу в Laims уже 3 года. Очень довольна качеством услуг и отношением.",
    rating: 5,
    service: "Маникюр, стрижка",
  },
  {
    name: "Елена М.",
    text: "Отличный салон! Делала сложное окрашивание. Результат превзошел ожидания.",
    rating: 5,
    service: "Окрашивание",
  },
  {
    name: "Ольга В.",
    text: "Очень рада, что нашла этот салон. Косметолог творит чудеса с моей кожей.",
    rating: 5,
    service: "Косметология",
  },
];
