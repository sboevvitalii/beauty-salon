import { Award, Heart, Sparkles } from "lucide-react";

export default function Advantages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Heart className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Нам доверяют</h3>
            <p className="text-sm text-text-main/70">
              Более 5000 клиентов выбрали нас за качество и профессионализм
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Sparkles className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Качество услуг</h3>
            <p className="text-sm text-text-main/70">
              95% клиентов рекомендуют нас друзьям и знакомым
            </p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <Award className="w-10 h-10" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Профессионализм</h3>
            <p className="text-sm text-text-main/70">
              Опытные мастера с международными сертификатами
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
