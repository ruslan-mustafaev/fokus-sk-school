import { Sparkles, TrendingUp, BookOpen } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function ForWhoSection() {
  const targetAudience = [
    {
      icon: Sparkles,
      title: 'Початківці',
      description: 'Тільки починаєш вивчати словацьку з нуля',
    },
    {
      icon: TrendingUp,
      title: 'Вдосконалення',
      description: 'Маєш базу, хочеш говорити впевненіше',
    },
    {
      icon: BookOpen,
      title: 'Життя та робота',
      description: 'Потрібна мова для переїзду чи кар\'єри',
    },
  ];

  return (
    <section id="for-who" className="py-20 md:py-32 px-4 bg-brand-light">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <AnimatedElement animation="scale-in">
            <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/90 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full -ml-32 -mb-32" />

              <div className="relative z-10">
                <div className="mb-12">
                  <AnimatedElement animation="fade-in-down" delay={100}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
                      Для кого школа?
                    </h2>
                  </AnimatedElement>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {targetAudience.map((item, index) => (
                    <AnimatedElement
                      key={index}
                      animation="fade-in-up"
                      delay={(index * 100 + 200) as 0 | 100 | 200 | 300}
                    >
                      <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/25 transition-all duration-300 transform hover:-translate-y-2 h-full group cursor-default">
                        <div className="w-14 h-14 bg-brand-orange rounded-xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <item.icon className="w-7 h-7" />
                        </div>
                        <p className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</p>
                        <p className="text-white/90 text-base leading-relaxed">{item.description}</p>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>

              <div className="absolute -top-6 -right-8 md:-right-4 md:-top-4 transform rotate-12 z-20">
                <div className="bg-brand-orange rounded-3xl px-6 py-3 md:px-8 md:py-4 shadow-2xl transform -rotate-12">
                  <p className="text-white font-black text-sm md:text-base text-center leading-tight">
                    ВУССЯ ШКОЛЕ<br />НЕ ЛИШЕ<br />РОЗУМИТИ,<br />А Й ГОВОРИТИ!
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
