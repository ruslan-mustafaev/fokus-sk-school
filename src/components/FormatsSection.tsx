import { Clock, Users, UserPlus, Coffee, Check, Layers, ArrowRight, Heart, Star } from 'lucide-react';
import { Tape, DoodleHeart, DoodleStar } from './DiaryDecorations';

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
      color: 'bg-diary-pink',
      rotation: -2,
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
      color: 'bg-diary-blue',
      rotation: 1,
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
      color: 'bg-diary-purple',
      rotation: -1,
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
      color: 'bg-diary-green',
      rotation: 2,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="formats" className="py-24 px-4 bg-white relative overflow-hidden">
      <DoodleHeart className="top-20 right-16" />
      <DoodleStar className="bottom-32 left-20" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-diary-blue/20 rounded-full mb-6 border-2 border-diary-blue/30" style={{ transform: 'rotate(1deg)' }}>
            <Layers className="w-4 h-4 text-diary-blue" />
            <span className="text-sm font-semibold text-diary-blue">Формати навчання</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Обери свій <span className="text-diary-pink">формат</span>
          </h2>
          <p className="text-lg md:text-xl text-diary-dark/70 max-w-2xl mx-auto leading-relaxed">
            Всі заняття проходять онлайн. Вчись звідки зручно!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {formats.map((format, index) => (
            <div
              key={index}
              className="group bg-white p-8 hover:shadow-2xl transition-all duration-500
                         transform hover:-translate-y-2 border-4 border-diary-dark/10 relative"
              style={{
                transform: `rotate(${format.rotation}deg)`,
                clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
              }}
            >
              <Tape className="-top-2 right-1/3" rotation={-8} />

              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 ${format.color} rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  <format.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-diary-dark">{format.title}</h3>
                  <p className="text-diary-dark/60">{format.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {format.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-diary-yellow/50 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-diary-dark" />
                    </div>
                    <span className="text-diary-dark/80">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-6 border-t-2 border-dashed border-diary-dark/20">
                <div className="flex items-center gap-2 text-sm text-diary-dark/60">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{format.duration}</span>
                </div>
                <div className="text-sm text-diary-dark/60 font-medium">
                  {format.frequency}
                </div>
              </div>

              {index % 2 === 0 && (
                <Heart className="absolute bottom-4 right-4 w-6 h-6 fill-diary-pink/40 text-diary-pink/40" />
              )}
              {index % 2 === 1 && (
                <Star className="absolute bottom-4 right-4 w-6 h-6 fill-diary-yellow/60 text-diary-yellow/60" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-diary-paper rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto transform -rotate-1 border-4 border-diary-pink/20">
            <Tape className="top-4 left-1/4" rotation={10} />
            <p className="text-xl text-diary-dark/70 mb-6">
              Не знаєш, який формат обрати?
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-diary-pink text-white
                       rounded-full font-bold text-lg hover:bg-diary-pink/90 transition-all duration-300
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
