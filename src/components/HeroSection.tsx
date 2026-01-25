import { ArrowRight, Sparkles, Target, Zap, Heart, Star } from 'lucide-react';
import { DoodleHeart, DoodleStar, DoodleSparkle } from './DiaryDecorations';

export default function HeroSection() {
  const handleTrialClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-diary-paper pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DoodleHeart className="top-32 left-4 lg:top-40 lg:left-10" />
        <DoodleStar className="top-40 right-12 lg:top-48 lg:right-20" />
        <DoodleSparkle className="bottom-32 left-12 lg:bottom-40 lg:left-24" />
        <DoodleHeart className="bottom-20 right-8 lg:bottom-24 lg:right-16" />
        <DoodleStar className="top-64 left-32 hidden lg:block" />

        <div className="absolute top-20 right-20 w-3 h-3 bg-diary-pink rounded-full animate-float" />
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-diary-blue rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-diary-yellow rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-diary-purple/20 rounded-full border-2 border-diary-purple/30" style={{ transform: 'rotate(-1deg)' }}>
              <Sparkles className="w-4 h-4 text-diary-purple" />
              <span className="text-sm font-semibold text-diary-purple">Онлайн школа словацької мови</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="text-diary-pink">FOCUS.</span>
              <br />
              <span className="text-diary-dark">ДІЯ.</span>
              <br />
              <span className="text-diary-blue">РЕЗУЛЬТАТ.</span>
            </h1>

            <p className="text-lg md:text-xl text-diary-dark/70 leading-relaxed max-w-xl">
              Вчися словацькій, щоб не лише розуміти, а й впевнено говорити.
              Практичний підхід, індивідуальна підтримка, реальні результати.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleTrialClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-diary-pink text-white
                         rounded-full font-bold text-lg hover:bg-diary-pink/90 transition-all duration-300
                         shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Безкоштовний пробний урок
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-diary-purple/20 rounded-full flex items-center justify-center border-2 border-diary-purple/30">
                  <Target className="w-5 h-5 text-diary-purple" />
                </div>
                <span className="text-sm font-medium text-diary-dark/70">Чіткий план</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-diary-blue/20 rounded-full flex items-center justify-center border-2 border-diary-blue/30">
                  <Zap className="w-5 h-5 text-diary-blue" />
                </div>
                <span className="text-sm font-medium text-diary-dark/70">Швидкий прогрес</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative" style={{ transform: 'rotate(2deg)' }}>
              <div className="bg-white p-4 pb-16 shadow-2xl">
                <div className="aspect-[4/5] overflow-hidden bg-diary-lavender/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-diary-pink/30 to-diary-purple/30 flex items-center justify-center">
                      <span className="text-7xl">F</span>
                    </div>
                    <p className="text-sm text-diary-dark/50">
                      Тут буде фото
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center font-handwriting text-diary-dark/70">
                  <span className="italic">My language journey</span>
                </div>
              </div>

              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-10 bg-white/50 backdrop-blur-sm border-t border-b border-white/80" style={{ transform: 'rotate(-5deg)' }} />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-diary-pink text-white p-6 shadow-2xl max-w-xs transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              style={{
                clipPath: 'polygon(3% 0%, 97% 2%, 98% 98%, 2% 99%)',
              }}
            >
              <p className="font-bold text-lg leading-snug">
                STAY FOCUSED,<br />GET RESULTS!
              </p>
              <Heart className="absolute top-2 right-2 w-6 h-6 fill-white/30 text-white/30" />
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-4 shadow-xl transform rotate-3"
              style={{
                clipPath: 'polygon(2% 1%, 98% 0%, 99% 97%, 1% 98%)',
              }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-diary-pink/30 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-diary-blue/30 border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-diary-yellow/30 border-2 border-white" />
                </div>
                <span className="text-sm font-semibold text-diary-dark">100+ студентів</span>
              </div>
              <Star className="absolute bottom-1 right-1 w-5 h-5 fill-diary-yellow text-diary-yellow" />
            </div>
          </div>

          <div className="lg:hidden relative">
            <div className="bg-diary-pink p-8 text-white text-center transform -rotate-2 shadow-xl"
              style={{
                clipPath: 'polygon(3% 0%, 97% 2%, 98% 98%, 2% 99%)',
              }}
            >
              <p className="text-2xl font-bold mb-2">STAY FOCUSED,</p>
              <p className="text-2xl font-bold">GET RESULTS!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
