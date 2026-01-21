import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Олена',
      level: 'A1 → B1 за 8 місяців',
      text: 'Після 3 місяців не могла зв\'язати двох слів, а зараз вільно спілкуюся на роботі! Нана та її команда — справжні професіонали, які вміють підтримати і мотивувати.',
      rating: 5,
    },
    {
      name: 'Андрій',
      level: 'Почав з нуля',
      text: 'Завжди думав, що мови — це не моє. Але тут навчання настільки цікаве і без стресу, що я сам не помітив, як заговорив! Дякую за атмосферу та підтримку 🙏',
      rating: 5,
    },
    {
      name: 'Марія',
      level: 'Розмовний клуб',
      text: 'Розмовний клуб — це просто кайф! Практикую мову, знайомлюсь з цікавими людьми, обговорюємо різні теми. Відчуваю, що мій словацький стає все кращим!',
      rating: 5,
    },
    {
      name: 'Дмитро',
      level: 'B1 → B2',
      text: 'Готувався до іспиту B2, і завдяки індивідуальним заняттям здав з першого разу! Викладач чудово зрозумів мої потреби і побудував програму під мене.',
      rating: 5,
    },
    {
      name: 'Ірина',
      level: 'Групові заняття',
      text: 'Навчаюсь у групі вже 4 місяці — це дуже мотивує! Бачу прогрес не тільки свій, а й інших студентів. Викладач знаходить підхід до кожного, і атмосфера завжди тепла.',
      rating: 5,
    },
    {
      name: 'Віктор',
      level: 'Індивідуальні заняття',
      text: 'Потрібна була словацька для роботи, і тут мені швидко допомогли. Заняття завжди цікаві, викладач пояснює все максимально доступно. Рекомендую всім! 💯',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Що кажуть наші <span className="text-brand-blue">студенти</span>
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Живі відгуки від реальних людей, які вже досягли своїх цілей разом з нами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-brand-beige rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-orange/20" />

              <div className="mb-4">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-sm text-brand-blue font-medium">{testimonial.level}</p>
              </div>

              <p className="text-brand-dark/80 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-brand-orange to-brand-orange/80 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Готовий приєднатися до нашої ком'юніті?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Запишись на безкоштовний пробний урок і відчуй на собі, чому наші студенти такі задоволені!
          </p>
          <button
            onClick={() => alert('Форма запису на пробний урок буде підключена далі')}
            className="px-10 py-5 bg-white text-brand-orange rounded-full font-bold text-lg hover:bg-brand-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Записатись на пробний урок
          </button>
          <p className="mt-6 text-white/80 font-handwriting text-xl">
            ✨ Це безкоштовно і ні до чого не зобов'язує!
          </p>
        </div>
      </div>
    </section>
  );
}
