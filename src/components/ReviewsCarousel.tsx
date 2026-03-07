import AnimatedElement from './AnimatedElement';

const reviews = [
  {
    name: 'Каріна',
    text: 'Добре, з нетерпінням чекаю вже занять з улюбленою викладачкою 🫶🥹 Словами не передати як сумую ❤️',
  },
  {
    name: 'Ксенія Гусар',
    text: 'Вчора були на цікавому розмовному клубі, де змогли попрактикуватися розмовляти словацькою. Хочу висловити свою подяку викладачці нашого заняття Ленці за легкість у спілкуванні, багато тем які завжди актуальні і необхідні. З нетерпінням чекаю наступного такого заняття ❤️',
  },
  {
    name: 'Лера Волошина',
    text: 'Я дуже приємно вражена. Була на багатьох курсах, але ваш найбільше сподобався, я з вами на довго. Особливо дякую за підбір вчителів, Юля просто 🔥',
  },
  {
    name: 'Юлія Василів',
    text: 'Я теж дуже задоволена. Спочатку я злякалась, що буде носій мови викладати, але після першого заняття, зрозуміла, що це величезна перевага. Тому хочу з Вами дійти до В2 точно, маю ціль :)',
  },
  {
    name: 'Тетяна',
    text: 'Заняття проходять в дуже легкій приємній обстановці, з вами дуже легко і приємно спілкуватися. Звичайно великий плюс, що Ви носій мови і одразу пояснюєте як у вас в Словаччині говорять. В цілому я дуже задоволена заняттями 🥰',
  },
  {
    name: 'Саша',
    text: 'Заняття дуже сподобалося, вчителька дуже комфортна, приємно слухати і відчула класну атмосферу під час заняття. Платформа на занятті зручна і має гарний інтерфейс. Вже чекаю наступного уроку!',
  },
  {
    name: 'Яна',
    text: 'За два місяці у мене майже повністю зник мовний бар\'єр. Раніше в голові я формувала речення, але коли починала їх вимовляти, вони виходили зовсім не такі. Впевнена, що то завдяки нашим викладачам я позбулась страху говорити.',
  },
  {
    name: 'Вікторія',
    text: 'Мені все дуже сподобалось на курсі, все максимально зрозуміло, а якщо щось ні то не страшно перепитати ще раз. Саме головне що на роботі вже колеги помітили самі, що я набагато краще граматичніше і краще говорю — дякую велике ❤️',
  },
];

const duplicatedReviews = [...reviews, ...reviews];

export default function ReviewsCarousel() {
  return (
    <section className="py-16 px-4 overflow-hidden">
      <AnimatedElement animation="fade-in-down">
        <div className="max-w-7xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Що кажуть наші <span className="text-brand-blue font-lapkoi">студенти</span>
          </h2>
        </div>
      </AnimatedElement>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10" />

        <div className="flex animate-scroll gap-6 py-6">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-orange text-base">★</span>
                ))}
              </div>

              <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-brand-dark">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
