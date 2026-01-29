import { Check, ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

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
      highlight: false,
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
      highlight: false,
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
    },
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Прозорі <span className="text-brand-blue">ціни</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={100}>
            <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
              Без прихованих платежів. Перший урок безкоштовно!
            </p>
          </AnimatedElement>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <div className="bg-brand-light rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{pricing.individual.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-brand-blue">{pricing.individual.price}</span>
                <span className="text-2xl font-bold text-brand-blue">EUR</span>
                <span className="text-brand-dark/50 ml-2">{pricing.individual.unit}</span>
              </div>
              <ul className="space-y-3">
                {pricing.individual.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-blue" />
                    </div>
                    <span className="text-brand-dark/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay={200}>
            <div className="bg-brand-light rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{pricing.pair.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-brand-blue">{pricing.pair.price}</span>
                <span className="text-2xl font-bold text-brand-blue">EUR</span>
                <span className="text-brand-dark/50 ml-2">{pricing.pair.unit}</span>
              </div>
              <ul className="space-y-3">
                {pricing.pair.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-blue" />
                    </div>
                    <span className="text-brand-dark/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay={300}>
            <div className="bg-brand-orange/10 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-brand-orange/20 h-full">
              <h3 className="text-2xl font-bold mb-2 text-brand-dark">{pricing.club.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-brand-orange">{pricing.club.price}</span>
                <span className="text-2xl font-bold text-brand-orange">EUR</span>
                <span className="text-brand-dark/50 ml-2">{pricing.club.unit}</span>
              </div>
              <ul className="space-y-3">
                {pricing.club.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-orange" />
                    </div>
                    <span className="text-brand-dark/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement animation="scale-in">
          <div className="bg-brand-blue rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-8">{pricing.group.title}</h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricing.group.packages.map((pkg, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative hover:bg-white/20 transition-colors">
                  {pkg.badge && (
                    <div className="absolute -top-3 -right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
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
          </div>
        </AnimatedElement>

        <AnimatedElement animation="fade-in-up" delay={100}>
          <div className="bg-brand-light rounded-3xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Перший пробний урок безкоштовно!
          </p>
          <p className="text-brand-dark/70 mb-8 max-w-xl mx-auto">
            Познайомся з викладачем, спробуй наш метод та відчуй атмосферу школи
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                     rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                     shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Записатись безкоштовно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
