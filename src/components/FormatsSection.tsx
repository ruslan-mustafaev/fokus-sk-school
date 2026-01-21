import { Clock, Users, UserPlus, Coffee } from 'lucide-react';

export default function FormatsSection() {
  const formats = [
    {
      icon: Users,
      title: 'Індивідуальні заняття',
      description: 'Повна увага викладача тільки тобі',
      benefits: [
        'Програма під твої цілі та темп',
        'Гнучкий графік',
        'Максимум розмовної практики',
      ],
      duration: '60 хв',
      frequency: '2-3 рази на тиждень',
      color: 'bg-brand-blue',
    },
    {
      icon: UserPlus,
      title: 'Парні заняття',
      description: 'Навчайтесь разом з другом або партнером',
      benefits: [
        'Додаткова мотивація від партнера',
        'Практика діалогів',
        'Вигідніша ціна',
      ],
      duration: '60 хв',
      frequency: '2 рази на тиждень',
      color: 'bg-brand-orange',
    },
    {
      icon: Users,
      title: 'Групові заняття',
      description: 'Вчись у компанії однодумців',
      benefits: [
        'Динамічна атмосфера групи',
        'Обмін досвідом',
        'Найдоступніша ціна',
      ],
      duration: '90 хв',
      frequency: '2 рази на тиждень',
      color: 'bg-brand-blue',
    },
    {
      icon: Coffee,
      title: 'Розмовний клуб',
      description: 'Практикуй мову в невимушеній обстановці',
      benefits: [
        'Тільки розмовна практика',
        'Цікаві теми для обговорення',
        'Знайомство з новими людьми',
      ],
      duration: '60 хв',
      frequency: 'Щотижня',
      color: 'bg-brand-orange',
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Формати <span className="text-brand-orange">навчання</span>
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Обери формат, який підходить саме тобі. Всі заняття проходять онлайн — вчись звідки зручно!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {formats.map((format, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${format.color} rounded-2xl flex items-center justify-center mb-6 text-white`}>
                <format.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{format.title}</h3>
              <p className="text-brand-dark/70 text-lg mb-6">{format.description}</p>

              <div className="space-y-3 mb-6">
                {format.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-brand-orange text-xl flex-shrink-0">•</span>
                    <span className="text-brand-dark/80">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-brand-light">
                <div className="flex items-center gap-2 text-brand-dark/70">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{format.duration}</span>
                </div>
                <div className="text-brand-dark/70">
                  <span className="font-medium">{format.frequency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-handwriting text-2xl text-brand-dark/70 mb-6">
            Не знаєш, який формат обрати? Запишись на пробний урок, і ми допоможемо визначитись! 💙
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
