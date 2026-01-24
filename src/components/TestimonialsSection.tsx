import { Star, Quote, MessageSquare, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Олена',
      level: 'A1 - B1 за 8 місяців',
      text: 'Після 3 місяців не могла зв\'язати двох слів, а зараз вільно спілкуюся на роботі! Нана та її команда справжні професіонали.',
      rating: 5,
    },
    {
      name: 'Андрій',
      level: 'Почав з нуля',
      text: 'Завжди думав, що мови це не моє. Але тут навчання настільки цікаве і без стресу, що я сам не помітив, як заговорив!',
      rating: 5,
    },
    {
      name: 'Марія',
      level: 'Розмовний клуб',
      text: 'Розмовний клуб це просто кайф! Практикую мову, знайомлюсь з цікавими людьми, обговорюємо різні теми.',
      rating: 5,
    },
    {
      name: 'Дмитро',
      level: 'B1 - B2',
      text: 'Готувався до іспиту B2, і завдяки індивідуальним заняттям здав з першого разу! Викладач побудував програму під мене.',
      rating: 5,
    },
    {
      name: 'Ірина',
      level: 'Групові заняття',
      text: 'Навчаюсь у групі вже 4 місяці це дуже мотивує! Бачу прогрес не тільки свій, а й інших студентів.',
      rating: 5,
    },
    {
      name: 'Віктор',
      level: 'Індивідуальні заняття',
      text: 'Потрібна була словацька для роботи, і тут мені швидко допомогли. Заняття завжди цікаві. Рекомендую всім!',
      rating: 5,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 px-4 bg-white relative overflow-hidden">
      <img src="/brand_imgs/element_30.png" alt="" className="absolute top-16 right-8 w-20 h-20 lg:w-28 lg:h-28 opacity-30 animate-float pointer-events-none" />
      <img src="/brand_imgs/element_31.png" alt="" className="absolute top-1/2 left-8 w-16 h-16 lg:w-24 lg:h-24 opacity-35 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <img src="/brand_imgs/element_32.png" alt="" className="absolute bottom-40 right-12 w-18 h-18 lg:w-20 lg:h-20 opacity-30 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-semibold text-brand-blue">Відгуки</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Що кажуть <span className="text-brand-blue">студенти</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
            Реальні відгуки від людей, які досягли своїх цілей разом з нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-light rounded-3xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-blue/10" />

              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-brand-dark">{testimonial.name}</h3>
                <p className="text-sm text-brand-blue font-semibold">{testimonial.level}</p>
              </div>

              <p className="text-brand-dark/70 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-20 bg-brand-orange rounded-[2.5rem] p-8 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/20 rounded-full -ml-32 -mb-32" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black mb-6">
              Готовий до результату?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Запишись на безкоштовний пробний урок і відчуй на собі наш підхід!
            </p>
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-brand-orange
                       rounded-full font-bold text-lg hover:bg-brand-light transition-all duration-300
                       shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Записатись безкоштовно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-8 text-white/70 text-lg">
              Це безкоштовно і ні до чого не зобов'язує
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
