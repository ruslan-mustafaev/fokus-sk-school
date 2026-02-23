import { PenTool, BookOpen, Users, Globe, MessageCircle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const stats = [
  { icon: BookOpen, value: '500+', label: 'Студентів навчились' },
  { icon: Users, value: '10+', label: 'Досвідчених викладачів' },
  { icon: Globe, value: '5', label: 'Рівнів навчання' },
  { icon: MessageCircle, value: '95%', label: 'Задоволених студентів' },
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0">
          <img
            src="/logo/IMG_5071.PNG"
            alt="Teacher"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

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
                Записатись на пробний урок
                <PenTool className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
            </AnimatedElement>
          </div>
        </div>

        <img
          src="/full_dekor/4.png"
          alt=""
          className="absolute bottom-8 right-8 w-24 md:w-32 opacity-40 pointer-events-none select-none"
        />
        <img
          src="/logo/Logo2.png"
          alt="Logo"
          className="absolute top-8 left-1/2 -translate-x-1/2 w-32 md:w-40 pointer-events-none select-none z-20"
        />
      </section>

      <section className="relative py-56 md:py-72 lg:py-80 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/IMG_7364.JPEG"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedElement animation="fade-in-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-pangolin">
                Focus school
              </h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/90 leading-relaxed max-w-4xl mx-auto mb-4">
                -- школа, де готують до життя у Словаччині
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
                Робота, навчання, документи, лікарі, магазини, живе спілкування --
                ми навчаємо мови через реальні ситуації, з якими ви зіткнетесь щодня.
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8">
            {stats.map((stat, index) => (
              <AnimatedElement key={stat.label} animation="fade-in-up" delay={100 + index * 100}>
                <div className="text-center group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4
                                  group-hover:bg-brand-orange/80 transition-colors duration-300">
                    <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/60 font-medium">{stat.label}</div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
