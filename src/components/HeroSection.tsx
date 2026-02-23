import { PenTool } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const stats = [
  { value: '700', label: 'учнів успішно закінчили навчання' },
  { value: '10', label: 'викладачів щодня доводять до результату' },
  { value: '86%', label: 'наших учнів рекомендують Focus' },
];

export default function HeroSection() {
  const handleTrialClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16"
        style={{
          backgroundImage: 'url(/logo/IMG_5071.PNG)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2D2D2D',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <AnimatedElement animation="fade-in-up" delay={100}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-6">
                Онлайн-школа словацької мови
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-in-up" delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mb-10">
                Для тих, хто хоче впевнено говорити в реальних життєвих ситуаціях.
              </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={300}>
              <button
                onClick={handleTrialClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                         rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                         shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Записатись на пробний
                <PenTool className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </AnimatedElement>
          </div>
        </div>

        <img
          src="/full_dekor/4.png"
          alt=""
          className="absolute bottom-8 right-8 w-24 md:w-32 opacity-40 pointer-events-none select-none z-20"
        />
        <img
          src="/logo/Logo2.png"
          alt="Logo"
          className="absolute top-8 left-1/2 -translate-x-1/2 w-32 md:w-40 pointer-events-none select-none z-20"
        />
      </section>

      <section className="relative py-16 px-4 bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <AnimatedElement key={stat.label} animation="fade-in-up" delay={(100 + index * 100) as 0 | 100 | 200 | 300}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-brand-orange mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-brand-dark/70 font-medium leading-relaxed">{stat.label}</div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement animation="scale-in" delay={200}>
            <div className="flex justify-center mb-12">
              <button
                onClick={handleTrialClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                         rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                         shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Записатись на пробний ✍️
              </button>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay={300}>
            <blockquote className="relative max-w-3xl border-l-4 border-brand-orange pl-6 py-2">
              <p className="text-xl md:text-2xl text-brand-dark/80 italic leading-relaxed font-pangolin">
                Focus school – школа, де готують до життя у Словаччині: робота, навчання, документи, лікарі, магазини, живе спілкування.
              </p>
            </blockquote>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}
