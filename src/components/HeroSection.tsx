import { ArrowRight, Sparkles, Target, Zap } from 'lucide-react';

export default function HeroSection() {
  const handleTrialClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-light pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="/brand_imgs/element_23.png" alt="" className="absolute top-10 -right-16 lg:top-20 lg:right-10 w-32 h-32 lg:w-48 lg:h-48 opacity-80 animate-float" />
        <img src="/brand_imgs/element_04.png" alt="" className="absolute -bottom-10 -left-16 lg:bottom-10 lg:left-10 w-40 h-40 lg:w-56 lg:h-56 opacity-70 animate-float" style={{ animationDelay: '1s' }} />

        <img src="/brand_imgs/element_09.png" alt="" className="absolute top-32 left-4 lg:top-40 lg:left-10 w-16 h-16 lg:w-20 lg:h-20 opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        <img src="/brand_imgs/element_05.png" alt="" className="hidden lg:block absolute bottom-32 right-16 w-20 h-20 opacity-70 animate-float" style={{ animationDelay: '3s' }} />

        <img src="/brand_imgs/element_06.png" alt="" className="hidden lg:block absolute top-1/4 right-32 w-12 h-12 opacity-50 animate-float" style={{ animationDelay: '1s' }} />
        <img src="/brand_imgs/element_08.png" alt="" className="absolute bottom-40 lg:bottom-1/4 left-8 lg:left-20 w-16 h-16 opacity-60 animate-float" style={{ animationDelay: '3s' }} />

        <img src="/brand_imgs/element_10.png" alt="" className="lg:hidden absolute top-24 right-8 w-14 h-14 opacity-50 animate-float" style={{ animationDelay: '1.5s' }} />
        <img src="/brand_imgs/element_11.png" alt="" className="lg:hidden absolute bottom-20 right-6 w-16 h-16 opacity-60 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-brand-blue">Онлайн школа словацької мови</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="text-brand-blue">FOCUS.</span>
              <br />
              <span className="text-brand-dark">ДІЯ.</span>
              <br />
              <span className="text-brand-orange">РЕЗУЛЬТАТ.</span>
            </h1>

            <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-xl">
              Вчися словацькій, щоб не лише розуміти, а й впевнено говорити.
              Практичний підхід, індивідуальна підтримка, реальні результати.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTrialClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                         rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                         shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Безкоштовний пробний урок
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-brand-blue" />
                </div>
                <span className="text-sm font-medium text-brand-dark/70">Чіткий план</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-sm font-medium text-brand-dark/70">Швидкий прогрес</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue to-brand-blue/50 rounded-[3rem] transform rotate-3" />
              <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-brand-light flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 flex items-center justify-center">
                      <span className="text-7xl">F</span>
                    </div>
                    <p className="text-sm text-brand-dark/50">
                      Тут буде фото
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-brand-orange text-white rounded-2xl p-6 shadow-2xl max-w-xs transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <p className="font-bold text-lg leading-snug">
                STAY FOCUSED,<br />GET RESULTS!
              </p>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-brand-blue/20 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-brand-orange/20 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-brand-blue/30 border-2 border-white" />
                </div>
                <span className="text-sm font-semibold text-brand-dark">100+ студентів</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden relative">
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-3xl p-8 text-white text-center">
              <p className="text-2xl font-bold mb-2">STAY FOCUSED,</p>
              <p className="text-2xl font-bold">GET RESULTS!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
