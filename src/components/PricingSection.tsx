import { Check, CreditCard, ArrowRight, Heart, Star, Sparkles } from 'lucide-react';
import { Tape, DoodleHeart, DoodleStar } from './DiaryDecorations';

export default function PricingSection() {
  const pricing = {
    individual: {
      title: 'Індивідуальні',
      price: '25',
      unit: 'за урок',
      features: [
        'Персональна програма',
        'Гнучкий графік',
        'Матеріали включені',
        'Підтримка 24/7',
      ],
      color: 'diary-pink',
      rotation: -2,
    },
    pair: {
      title: 'Парні',
      price: '15',
      unit: 'за урок / людина',
      features: [
        'Навчання вдвох',
        'Практика діалогів',
        'Спільна мотивація',
        'Матеріали включені',
      ],
      color: 'diary-blue',
      rotation: 1,
    },
    group: {
      title: 'Групові заняття',
      packages: [
        { lessons: 8, price: '120', perLesson: '15' },
        { lessons: 16, price: '224', perLesson: '14', badge: 'Популярно' },
        { lessons: 24, price: '312', perLesson: '13', badge: 'Вигідно' },
      ],
      features: [
        'Група до 6 осіб',
        'Структурована програма',
        'Обмін досвідом',
        'Матеріали включені',
      ],
    },
    club: {
      title: 'Розмовний клуб',
      price: '10',
      unit: 'за зустріч',
      features: [
        'Тільки розмова',
        'Цікаві теми',
        'Невимушена атмосфера',
        'Нові знайомства',
      ],
      color: 'diary-green',
      rotation: -1,
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-diary-paper">
      <DoodleHeart className="top-24 left-16" />
      <DoodleStar className="bottom-40 right-20" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-diary-purple/20 rounded-full mb-6 border-2 border-diary-purple/30" style={{ transform: 'rotate(-1deg)' }}>
            <CreditCard className="w-4 h-4 text-diary-purple" />
            <span className="text-sm font-semibold text-diary-purple">Ціни</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Прозорі <span className="text-diary-pink">ціни</span>
          </h2>
          <p className="text-lg md:text-xl text-diary-dark/70 max-w-2xl mx-auto leading-relaxed">
            Без прихованих платежів. Перший урок безкоштовно!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className={`bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-${pricing.individual.color}/20 relative`}
            style={{
              transform: `rotate(${pricing.individual.rotation}deg)`,
              clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
            }}
          >
            <Tape className="top-0 right-1/4" rotation={-5} />
            <h3 className="text-2xl font-bold mb-2 text-diary-dark">{pricing.individual.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-diary-pink">{pricing.individual.price}</span>
              <span className="text-2xl font-bold text-diary-pink">EUR</span>
              <span className="text-diary-dark/50 ml-2">{pricing.individual.unit}</span>
            </div>
            <ul className="space-y-3">
              {pricing.individual.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-diary-yellow/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-diary-dark" />
                  </div>
                  <span className="text-diary-dark/70">{feature}</span>
                </li>
              ))}
            </ul>
            <Heart className="absolute bottom-4 right-4 w-6 h-6 fill-diary-pink/30 text-diary-pink/30" />
          </div>

          <div className={`bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-${pricing.pair.color}/20 relative`}
            style={{
              transform: `rotate(${pricing.pair.rotation}deg)`,
              clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
            }}
          >
            <Tape className="top-0 left-1/3" rotation={8} />
            <h3 className="text-2xl font-bold mb-2 text-diary-dark">{pricing.pair.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-diary-blue">{pricing.pair.price}</span>
              <span className="text-2xl font-bold text-diary-blue">EUR</span>
              <span className="text-diary-dark/50 ml-2">{pricing.pair.unit}</span>
            </div>
            <ul className="space-y-3">
              {pricing.pair.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-diary-yellow/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-diary-dark" />
                  </div>
                  <span className="text-diary-dark/70">{feature}</span>
                </li>
              ))}
            </ul>
            <Star className="absolute bottom-4 right-4 w-6 h-6 fill-diary-yellow/60 text-diary-yellow/60" />
          </div>

          <div className={`bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-${pricing.club.color}/20 relative`}
            style={{
              transform: `rotate(${pricing.club.rotation}deg)`,
              clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
            }}
          >
            <Tape className="top-0 right-1/4" rotation={-10} />
            <h3 className="text-2xl font-bold mb-2 text-diary-dark">{pricing.club.title}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-black text-diary-green">{pricing.club.price}</span>
              <span className="text-2xl font-bold text-diary-green">EUR</span>
              <span className="text-diary-dark/50 ml-2">{pricing.club.unit}</span>
            </div>
            <ul className="space-y-3">
              {pricing.club.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-diary-yellow/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-diary-dark" />
                  </div>
                  <span className="text-diary-dark/70">{feature}</span>
                </li>
              ))}
            </ul>
            <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-diary-purple/50" />
          </div>
        </div>

        <div className="bg-diary-purple rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-12 transform rotate-1 shadow-xl">
          <Tape className="top-4 right-1/4" rotation={15} />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-8">{pricing.group.title}</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricing.group.packages.map((pkg, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative hover:bg-white/20 transition-colors border-2 border-white/20">
                  {pkg.badge && (
                    <div className="absolute -top-3 -right-3 bg-diary-yellow text-diary-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <div className="text-5xl font-black mb-1">{pkg.lessons}</div>
                    <div className="text-sm text-white/70">уроків</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{pkg.price} EUR</div>
                    <div className="text-sm text-white/70 mt-1">{pkg.perLesson} EUR / урок</div>
                  </div>
                </div>
              ))}
            </div>

            <ul className="grid md:grid-cols-2 gap-3">
              {pricing.group.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Heart className="absolute top-4 right-4 w-8 h-8 fill-white/10 text-white/10" />
          <Star className="absolute bottom-4 left-4 w-6 h-6 fill-white/10 text-white/10" />
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 text-center transform -rotate-1 shadow-xl border-4 border-diary-pink/20">
          <Tape className="top-4 left-1/3" rotation={-8} />
          <p className="text-2xl md:text-3xl font-bold text-diary-dark mb-4">
            Перший пробний урок безкоштовно!
          </p>
          <p className="text-diary-dark/70 mb-8 max-w-xl mx-auto">
            Познайомся з викладачем, спробуй наш метод та відчуй атмосферу школи
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-diary-pink text-white
                     rounded-full font-bold text-lg hover:bg-diary-pink/90 transition-all duration-300
                     shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Записатись безкоштовно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Star className="absolute top-4 right-4 w-8 h-8 fill-diary-yellow/40 text-diary-yellow/40" />
        </div>
      </div>
    </section>
  );
}
