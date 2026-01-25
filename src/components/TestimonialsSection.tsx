import { Star, Quote, MessageSquare, ArrowRight, Heart } from 'lucide-react';
import { Tape, DoodleHeart, DoodleStar, DoodleSparkle } from './DiaryDecorations';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Олена',
      level: 'A1 - B1 за 8 місяців',
      text: 'Після 3 місяців не могла зв\'язати двох слів, а зараз вільно спілкуюся на роботі! Нана та її команда справжні професіонали.',
      rating: 5,
      rotation: -1,
    },
    {
      name: 'Андрій',
      level: 'Почав з нуля',
      text: 'Завжди думав, що мови це не моє. Але тут навчання настільки цікаве і без стресу, що я сам не помітив, як заговорив!',
      rating: 5,
      rotation: 2,
    },
    {
      name: 'Марія',
      level: 'Розмовний клуб',
      text: 'Розмовний клуб це просто кайф! Практикую мову, знайомлюсь з цікавими людьми, обговорюємо різні теми.',
      rating: 5,
      rotation: -2,
    },
    {
      name: 'Дмитро',
      level: 'B1 - B2',
      text: 'Готувався до іспиту B2, і завдяки індивідуальним заняттям здав з першого разу! Викладач побудував програму під мене.',
      rating: 5,
      rotation: 1,
    },
    {
      name: 'Ірина',
      level: 'Групові заняття',
      text: 'Навчаюсь у групі вже 4 місяці це дуже мотивує! Бачу прогрес не тільки свій, а й інших студентів.',
      rating: 5,
      rotation: -1,
    },
    {
      name: 'Віктор',
      level: 'Індивідуальні заняття',
      text: 'Потрібна була словацька для роботи, і тут мені швидко допомогли. Заняття завжди цікаві. Рекомендую всім!',
      rating: 5,
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
    <section id="testimonials" className="py-24 px-4 bg-diary-paper">
      <DoodleHeart className="top-16 left-12" />
      <DoodleStar className="top-32 right-20" />
      <DoodleSparkle className="bottom-40 left-24" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-diary-blue/20 rounded-full mb-6 border-2 border-diary-blue/30" style={{ transform: 'rotate(-1deg)' }}>
            <MessageSquare className="w-4 h-4 text-diary-blue" />
            <span className="text-sm font-semibold text-diary-blue">Відгуки</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Що кажуть <span className="text-diary-pink">студенти</span>
          </h2>
          <p className="text-lg md:text-xl text-diary-dark/70 max-w-2xl mx-auto leading-relaxed">
            Реальні відгуки від людей, які досягли своїх цілей разом з нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative border-4 border-diary-yellow/20"
              style={{
                transform: `rotate(${testimonial.rotation}deg)`,
                clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
              }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-diary-purple/10" />
              <Tape className="top-0 right-1/4" rotation={-8} />

              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-diary-yellow text-diary-yellow" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-diary-dark">{testimonial.name}</h3>
                <p className="text-sm text-diary-purple font-semibold">{testimonial.level}</p>
              </div>

              <p className="text-diary-dark/70 leading-relaxed">
                {testimonial.text}
              </p>

              {index % 3 === 0 && (
                <Heart className="absolute bottom-4 right-4 w-5 h-5 fill-diary-pink/40 text-diary-pink/40" />
              )}
            </div>
          ))}
        </div>

        <div id="contact" className="mt-20 bg-diary-pink rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden transform -rotate-1 shadow-2xl">
          <Tape className="top-8 left-1/4" rotation={15} />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-6">
              Готовий до результату?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Запишись на безкоштовний пробний урок і відчуй на собі наш підхід!
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-diary-pink
                       rounded-full font-bold text-lg hover:bg-diary-paper transition-all duration-300
                       shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Записатись безкоштовно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-8 text-white/70 text-lg">
              Це безкоштовно і ні до чого не зобов'язує
            </p>
          </div>

          <Heart className="absolute top-8 right-8 w-12 h-12 fill-white/10 text-white/10" />
          <Star className="absolute bottom-8 left-8 w-10 h-10 fill-white/10 text-white/10" />
        </div>
      </div>
    </section>
  );
}
