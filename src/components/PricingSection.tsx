import { Check } from 'lucide-react';

export default function PricingSection() {
  const pricing = {
    individual: {
      title: 'Індивідуальні заняття',
      price: '€25',
      unit: 'за урок',
      features: [
        'Персональна програма',
        'Гнучкий графік',
        'Матеріали включені',
        'Підтримка між уроками',
      ],
    },
    pair: {
      title: 'Парні заняття',
      price: '€15',
      unit: 'за урок на людину',
      features: [
        'Навчання вдвох',
        'Практика діалогів',
        'Спільна мотивація',
        'Матеріали включені',
      ],
    },
    group: {
      title: 'Групові заняття',
      packages: [
        { lessons: 8, price: '€120', perLesson: '€15' },
        { lessons: 16, price: '€224', perLesson: '€14', badge: 'Популярно' },
        { lessons: 24, price: '€312', perLesson: '€13', badge: 'Вигідно' },
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
      price: '€10',
      unit: 'за зустріч',
      features: [
        'Тільки розмова',
        'Цікаві теми',
        'Невимушена атмосфера',
        'Знайомства',
      ],
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-brand-blue">Ціни</span> на навчання
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Прозорі ціни без прихованих платежів. Перший урок — безкоштовно!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-brand-beige rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">{pricing.individual.title}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-brand-blue">{pricing.individual.price}</span>
              <span className="text-brand-dark/70">{pricing.individual.unit}</span>
            </div>
            <ul className="space-y-3">
              {pricing.individual.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-brand-dark/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-beige rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2">{pricing.pair.title}</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-brand-blue">{pricing.pair.price}</span>
              <span className="text-brand-dark/70">{pricing.pair.unit}</span>
            </div>
            <ul className="space-y-3">
              {pricing.pair.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-brand-dark/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-3xl p-8 md:p-10 text-white mb-12">
          <h3 className="text-3xl font-bold mb-8">{pricing.group.title}</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {pricing.group.packages.map((pkg, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 relative">
                {pkg.badge && (
                  <div className="absolute -top-3 -right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold mb-2">{pkg.lessons}</div>
                  <div className="text-sm text-white/80">уроків</div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold">{pkg.price}</div>
                  <div className="text-sm text-white/80 mt-1">{pkg.perLesson} за урок</div>
                </div>
              </div>
            ))}
          </div>

          <ul className="grid md:grid-cols-2 gap-3">
            {pricing.group.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-brand-orange/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{pricing.club.title}</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-brand-orange">{pricing.club.price}</span>
                <span className="text-brand-dark/70">{pricing.club.unit}</span>
              </div>
              <ul className="space-y-2">
                {pricing.club.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="text-brand-dark/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-brand-light rounded-2xl p-8">
          <p className="font-handwriting text-3xl text-brand-dark mb-4">
            ✨ Перший пробний урок — безкоштовно! ✨
          </p>
          <p className="text-brand-dark/70 mb-6">
            Познайомся з викладачем, спробуй наш метод навчання та відчуй атмосферу школи
          </p>
          <button
            onClick={() => alert('Форма запису на пробний урок буде підключена далі')}
            className="px-8 py-4 bg-brand-orange text-white rounded-full font-semibold text-lg hover:bg-brand-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Записатись на пробний урок
          </button>
        </div>
      </div>
    </section>
  );
}
