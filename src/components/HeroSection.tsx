import { ArrowRight, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedElement from './AnimatedElement';

const WORDS = ['FOCUS.', 'ДІЯ.', 'РЕЗУЛЬТАТ.'];
const TYPING_SPEED = 150;
const PAUSE_BETWEEN_WORDS = 1000;
const PAUSE_AT_END = 5000;

export default function HeroSection() {
  const [displayText, setDisplayText] = useState(['', '', '']);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      const word = WORDS[currentWordIndex];

      if (currentCharIndex < word.length) {
        setDisplayText(prev => {
          const newText = [...prev];
          newText[currentWordIndex] = word.substring(0, currentCharIndex + 1);
          return newText;
        });
        setCurrentCharIndex(prev => prev + 1);
      } else {
        if (currentWordIndex < WORDS.length - 1) {
          setCurrentWordIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), PAUSE_BETWEEN_WORDS);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentWordIndex(0);
            setCurrentCharIndex(0);
            setDisplayText(['', '', '']);
            setIsTyping(true);
          }, PAUSE_AT_END);
        }
      }
    }, TYPING_SPEED);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isTyping]);

  const handleTrialClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-light pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Большие blur круги - размещены на краях */}
        <div className="absolute top-10 -right-32 lg:top-20 lg:right-10 w-64 h-64 lg:w-96 lg:h-96 bg-brand-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-32 lg:bottom-10 lg:left-10 w-56 h-56 lg:w-80 lg:h-80 bg-brand-orange/5 rounded-full blur-3xl animate-pulse-slow" />

        {/* Декоративные картинки в фоне */}
        <div className="hidden lg:block absolute top-32 right-20 w-20 h-20 rounded-2xl overflow-hidden opacity-30 animate-float shadow-lg" style={{ animationDelay: '0s' }}>
          <img src="/visual/1.png" alt="decoration" className="w-full h-full object-cover" />
        </div>
        <div className="hidden lg:block absolute bottom-40 right-32 w-24 h-24 rounded-2xl overflow-hidden opacity-20 animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
          <img src="/visual/3.png" alt="decoration" className="w-full h-full object-cover" />
        </div>
        <div className="hidden lg:block absolute top-1/2 right-16 w-16 h-16 rounded-xl overflow-hidden opacity-25 animate-float shadow-lg" style={{ animationDelay: '2.5s' }}>
          <img src="/visual/5.png" alt="decoration" className="w-full h-full object-cover" />
        </div>

        {/* Звезда на правой стороне */}
        <svg className="hidden lg:block absolute bottom-32 right-16 w-12 h-12 text-brand-orange/30 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>

        {/* Маленькие круги - размещены на периферии */}
        <div className="hidden lg:block absolute top-1/4 right-32 w-4 h-4 bg-brand-orange rounded-full animate-float" style={{ animationDelay: '1s' }} />

        {/* Дополнительные элементы для мобильной версии */}
        <svg className="lg:hidden absolute bottom-20 right-6 w-10 h-10 text-brand-orange/30 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <AnimatedElement animation="fade-in-right" delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight">
              <span className="text-brand-blue inline-block">
                {displayText[0]}
                <span className={`inline-block w-[0.15em] transition-opacity duration-200 ${currentWordIndex === 0 && currentCharIndex < WORDS[0].length ? 'opacity-100 animate-pulse' : 'opacity-0'}`}>|</span>
              </span>
              <br />
              <span className="text-brand-dark inline-block">
                {displayText[1]}
                <span className={`inline-block w-[0.15em] transition-opacity duration-200 ${currentWordIndex === 1 && currentCharIndex < WORDS[1].length ? 'opacity-100 animate-pulse' : 'opacity-0'}`}>|</span>
              </span>
              <br />
              <span className="text-brand-orange inline-block">
                {displayText[2]}
                <span className={`inline-block w-[0.15em] transition-opacity duration-200 ${currentWordIndex === 2 && currentCharIndex < WORDS[2].length ? 'opacity-100 animate-pulse' : 'opacity-0'}`}>|</span>
              </span>
            </h1>
            </AnimatedElement>

            <AnimatedElement animation="fade-in-up" delay={200}>
              <p className="text-lg md:text-xl text-brand-dark/70 leading-relaxed max-w-xl">
              Вчися словацькій, щоб не лише розуміти, а й впевнено говорити.
              Практичний підхід, індивідуальна підтримка, реальні результати.
            </p>
            </AnimatedElement>

            <AnimatedElement animation="scale-in" delay={300}>
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
            </AnimatedElement>

            <AnimatedElement animation="fade-in-up" delay={400}>
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
            </AnimatedElement>
          </div>

          <AnimatedElement animation="fade-in-left" delay={300}>
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
          </AnimatedElement>

        </div>
      </div>
    </section>
  );
}
