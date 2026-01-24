import { Clock, Users, UserPlus, Coffee, Check, Layers, ArrowRight } from 'lucide-react';

export default function FormatsSection() {
  const formats = [
    {
      icon: Users,
      title: 'Індивідуальні',
      description: 'Повна увага викладача тільки тобі',
      benefits: [
        'Програма під твої цілі',
        'Гнучкий графік',
        'Максимум практики',
      ],
      duration: '60 хв',
      frequency: '2-3 рази/тиждень',
      accent: 'border-brand-blue',
      iconBg: 'bg-brand-blue',
    },
    {
      icon: UserPlus,
      title: 'Парні',
      description: 'Навчайтесь разом з другом',
      benefits: [
        'Мотивація від партнера',
        'Практика діалогів',
        'Вигідніша ціна',
      ],
      duration: '60 хв',
      frequency: '2 рази/тиждень',
      accent: 'border-brand-orange',
      iconBg: 'bg-brand-orange',
    },
    {
      icon: Users,
      title: 'Групові',
      description: 'Вчись у компанії однодумців',
      benefits: [
        'Динамічна атмосфера',
        'Обмін досвідом',
        'Найдоступніша ціна',
      ],
      duration: '90 хв',
      frequency: '2 рази/тиждень',
      accent: 'border-brand-blue',
      iconBg: 'bg-brand-blue',
    },
    {
      icon: Coffee,
      title: 'Розмовний клуб',
      description: 'Практикуй мову невимушено',
      benefits: [
        'Тільки розмова',
        'Цікаві теми',
        'Нові знайомства',
      ],
      duration: '60 хв',
      frequency: 'Щотижня',
      accent: 'border-brand-orange',
      iconBg: 'bg-brand-orange',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="formats" className="py-24 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
            <Layers className="w-4 h-4 text-brand-orange" />
            <span className="text-sm font-semibold text-brand-orange">Формати навчання</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Обери свій <span className="text-brand-orange">формат</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
            Всі заняття проходять онлайн. Вчись звідки зручно!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {formats.map((format, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500
                         transform hover:-translate-y-2 border-l-4 ${format.accent}`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 ${format.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  <format.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark">{format.title}</h3>
                  <p className="text-brand-dark/60">{format.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {format.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-blue" />
                    </div>
                    <span className="text-brand-dark/80">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-brand-light">
                <div className="flex items-center gap-2 text-sm text-brand-dark/60">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{format.duration}</span>
                </div>
                <div className="text-sm text-brand-dark/60 font-medium">
                  {format.frequency}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto">
            <p className="text-xl text-brand-dark/70 mb-6">
              Не знаєш, який формат обрати?
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                       rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                       shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Записатись на пробний урок
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
