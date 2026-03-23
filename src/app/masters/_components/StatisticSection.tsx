import { masters } from "@/src/shared/masters";
import { Award, Heart, Star, Users } from "lucide-react";

export default function StatisticSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">
              {masters.length}+
            </div>
            <div className="text-sm text-text-main/70">Профессионалов</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">8+</div>
            <div className="text-sm text-text-main/70">Лет средний опыт</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">4.9</div>
            <div className="text-sm text-text-main/70">Средний рейтинг</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">5000+</div>
            <div className="text-sm text-text-main/70">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </section>
  );
}
