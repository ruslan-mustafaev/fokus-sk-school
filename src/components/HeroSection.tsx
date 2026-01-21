import { MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleTrialClick = () => {
    alert('Форма запису на пробний урок буде підключена далі');
  };

  const handleLevelCheckClick = () => {
    alert('Перевірка рівня буде підключена далі');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden pt-24">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-orange rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Вивчай словацьку
            <span className="block text-brand-blue">з теплом і підтримкою</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-dark/80 leading-relaxed">
            Онлайн-школа, де ти не просто вчиш мову, а стаєш частиною ком'юніті.
            Жива розмовна словацька без зубріння та стресу.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleTrialClick}
              className="px-8 py-4 bg-brand-orange text-white rounded-full font-semibold text-lg hover:bg-brand-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Записатись на пробний урок
            </button>

            <button
              onClick={handleLevelCheckClick}
              className="px-8 py-4 bg-brand-blue text-white rounded-full font-semibold text-lg hover:bg-brand-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Перевір свій рівень
            </button>
          </div>

          <div className="pt-4">
            <p className="font-handwriting text-2xl text-brand-dark/70">
              ✨ Перший урок — безкоштовно!
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/5] bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-brand-light flex items-center justify-center">
                  <span className="text-5xl">👋</span>
                </div>
                <p className="text-sm text-brand-dark/60">
                  Тут буде фото власниці Нани
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl shadow-xl p-6 max-w-sm">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">Привіт! Я Нана,</span> власниця школи Фокус.
                  Ми створили місце, де кожен студент відчуває себе як вдома.
                  Тут немає місця страху помилитись — тільки підтримка і радість від навчання! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
