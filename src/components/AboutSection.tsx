import { Heart, MessageSquare, Target, Users } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: MessageSquare,
      title: 'Жива розмовна мова',
      description: 'Вчимо те, що справді потрібно в житті — не тільки граматику, а й живе спілкування',
    },
    {
      icon: Heart,
      title: 'Без зубріння',
      description: 'Навчання через практику, ігри та цікаві теми. Запам\'ятовується легко і природно',
    },
    {
      icon: Users,
      title: 'Підтримка та атмосфера',
      description: 'Безпечний простір, де можна помилятися і рости. Ми віримо в кожного студента',
    },
    {
      icon: Target,
      title: 'Результат та впевненість',
      description: 'Від перших слів до вільного спілкування — супроводжуємо тебе на кожному етапі',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Чому обирають <span className="text-brand-blue">Фокус</span>?
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Ми — не просто мовна школа. Ми — ком'юніті людей, які вчать словацьку
            з теплом, підтримкою та справжньою увагою до кожного студента.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-brand-beige rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-brand-dark/70 leading-relaxed text-lg">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Для кого підходить наша школа?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg font-semibold mb-2">🎯 Для початківців</p>
                <p className="text-white/90">Хто тільки починає свій шлях у вивченні словацької</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg font-semibold mb-2">📈 Для тих, хто вдосконалюється</p>
                <p className="text-white/90">Маєш базу, але хочеш говорити впевненіше</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg font-semibold mb-2">💼 Для життя та роботи</p>
                <p className="text-white/90">Потрібна словацька для переїзду чи кар'єри</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-handwriting text-3xl text-brand-orange">
            Тут ти знайдеш не просто викладача, а справжнього провідника у світ словацької мови ✨
          </p>
        </div>
      </div>
    </section>
  );
}
