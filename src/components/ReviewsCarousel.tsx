import { Star } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function ReviewsCarousel() {
  const reviews = [
    {
      name: 'Олена',
      level: 'A1 - B1 за 8 місяців',
      text: 'Після 3 місяців не могла зв\'язати двох слів, а зараз вільно спілкуюся на роботі!',
    },
    {
      name: 'Андрій',
      level: 'Почав з нуля',
      text: 'Навчання настільки цікаве і без стресу, що я сам не помітив, як заговорив!',
    },
    {
      name: 'Марія',
      level: 'Розмовний клуб',
      text: 'Розмовний клуб це просто кайф! Практикую мову, знайомлюсь з цікавими людьми.',
    },
    {
      name: 'Дмитро',
      level: 'B1 - B2',
      text: 'Готувався до іспиту B2, і завдяки індивідуальним заняттям здав з першого разу!',
    },
    {
      name: 'Ірина',
      level: 'Групові заняття',
      text: 'Навчаюсь у групі вже 4 місяці це дуже мотивує і бачу прогрес!',
    },
    {
      name: 'Віктор',
      level: 'Індивідуальні заняття',
      text: 'Потрібна була словацька для роботи, і тут мені швидко допомогли. Рекомендую!',
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-brand-blue/5 via-brand-orange/5 to-brand-blue/5 overflow-hidden">
      <AnimatedElement animation="fade-in-down">
        <div className="max-w-7xl mx-auto mb-8"> 
          <h2 className="text-3xl md:text-4xl font-bold text-center font-pangolin text-brand-dark">
            Що кажуть наші <span className="text-brand-blue font-pangolin">студенти</span>
          </h2>
        </div>
      </AnimatedElement>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-scroll gap-6 py-6">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-brand-dark">{review.name}</h4>
                <p className="text-xs text-brand-blue font-semibold">{review.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
