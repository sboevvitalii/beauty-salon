import { ArrowRight, Star } from "lucide-react";

import Link from "next/link";
import { makeupArtistsList } from "./makeupArtistsList";

export default function MakeupArtists() {
  return (
    <section id="artists" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Наши визажисты
          </h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Профессионалы, которые знают о макияже всё
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {makeupArtistsList.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative mb-4">
                {/* Аватар */}
                <div className="w-24 h-24 mx-auto rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white text-3xl font-bold">
                  {artist.name.charAt(0)}
                </div>

                {/* Рейтинг */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-medium text-sm">{artist.rating}</span>
                </div>
              </div>

              <h3 className="font-semibold text-lg text-center mb-1">
                {artist.name}
              </h3>
              <p className="text-primary text-sm text-center mb-2">
                {artist.position}
              </p>
              <p className="text-text-main text-xs text-center mb-2">
                {artist.education}
              </p>
              <p className="text-text-main text-sm text-center mb-3">
                {artist.specialization}
              </p>

              <div className="flex justify-center items-center gap-4 mb-4 text-sm text-text-main">
                <span>Опыт {artist.exp}</span>
                <span>•</span>
                <span>{artist.works} работ</span>
              </div>

              <Link
                href="#booking"
                className="block text-center text-primary hover:text-primary-dark font-medium text-sm border-t border-green-muted pt-4 group/link"
              >
                Записаться к визажисту
                <ArrowRight
                  size={14}
                  className="inline ml-1 group-hover/link:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
