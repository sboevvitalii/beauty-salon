"use client";

import { getCategoryIcon } from "../utils/getCategoryIcon";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Heart, Star } from "lucide-react";
import { MasterProps } from "@/src/type/MasterProps";
import { useEffect, useState } from "react";

export default function MastersList() {
  const [masters, setMasters] = useState<MasterProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMasters = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL!}/api/master`,
        );
        if (!res.ok) throw new Error("Ошибка ответа от сервера");
        const data = await res.json();
        setMasters(data);
      } catch (err) {
        console.error("Ошибка в компоненте MastersList:", err);
        setError("Ошибка получения списка мастеров");
      }
    };

    fetchMasters();
  }, []);

  if (error) return <div>{error}</div>;
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {masters.map((master) => {
            const CategoryIcon = getCategoryIcon(master.position);
            return (
              <Link
                key={master.id}
                href={`/masters/${master.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Фото мастера */}
                <div className="relative aspect-square bg-linear-to-br from-primary/20 to-bg-main flex items-center justify-center">
                  {master.image ? (
                    <Image
                      src={master.image}
                      alt={master.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                        <span className="text-5xl font-bold text-primary">
                          {master.name}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Категория */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-xs text-primary">
                    <CategoryIcon size={12} />
                    <span>{master.position}</span>
                  </div>

                  {/* Рейтинг */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-xs">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <span className="font-medium">{master.rating}</span>
                  </div>
                </div>

                {/* Информация */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-text-main group-hover:text-primary transition mb-1">
                    {master.name}
                  </h3>
                  <p className="text-sm text-text-main/70 mb-2">
                    {master.position}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-text-main/60 mb-3">
                    <Clock size={12} />
                    <span>Опыт {master.experience}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-green-muted/10">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-xs text-text-main/60">
                        <Heart size={12} />
                        <span>156</span>
                      </div>
                    </div>
                    <div className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Подробнее
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
