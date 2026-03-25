"use client";

import { MasterProps } from "@/src/type/MasterProps";
import { getMasters } from "@/src/utils/getMasrers";
import { shuffleArray } from "@/src/utils/shuffleArray";
import { Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeamSection() {
  const [masters, setMasters] = useState<MasterProps[]>([]);

  useEffect(() => {
    const fetchMasters = async () => {
      const data = await getMasters();
      setMasters(data);
    };
    fetchMasters();
  }, []);

  const shuffledMasters = shuffleArray(masters).slice(0, 4);
  return (
    <section className="py-16 bg-bg-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Наша команда</h2>
          <p className="text-lg text-text-main max-w-2xl mx-auto">
            Профессионалы, которые любят свое дело и дарят красоту каждый день
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shuffledMasters.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="relative mb-4">
                    {/* Аватар */}
                    <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm text-center mb-2">
                    {member.position}
                  </p>
                  <p className="text-xs text-center text-text-main mb-3">
                    Опыт {member.experience}
                  </p>
                  <p className="text-sm text-text-main text-center mb-4">
                    {member.description}
                  </p>
                </div>
                <div className="border-t-2 border-green-muted pt-4">
                  <p className="text-xs text-center italic text-primary">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/masters"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary-dark transition-all hover:scale-105"
          >
            <Users size={18} />
            Познакомиться со всеми мастерами
          </Link>
        </div>
      </div>
    </section>
  );
}
