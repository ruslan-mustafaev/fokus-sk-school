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
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-start pt-32 pb-16"
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <AnimatedElement animation="fade-in-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-brand-orange mb-6">
                Онлайн-школа словацької мови
              </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-in-up" delay={200}>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mb-20">
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
          src="/logo/Logo2.png"
          alt="Logo"
          className="absolute top-8 left-1/2 -translate-x-1/2 w-32 md:w-40 pointer-events-none select-none z-20"
        />
      </section>

    </>
  );
}
