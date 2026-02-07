import { PenTool } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

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
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Team"
            className="absolute inset-0 w-full h-full object-cover"
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
                Записатись на пробний
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
      </section>

      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedElement animation="fade-in-up">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-dark leading-relaxed">
              <span className="text-brand-blue font-black">Focus school</span> -- школа, де готують до життя у Словаччині:
              робота, навчання, документи, лікарі, магазини, живе спілкування.
            </p>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
}
