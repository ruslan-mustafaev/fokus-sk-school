import { Heart, Book, Star, Users } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function TeachersSection() {
  const teachers = [
    {
      name: 'Нана',
      role: 'Засновниця та викладач',
      favoriteWord: 'Pohoda',
      hobby: 'Подорожі та фотографія',
      fact: 'Вивчила словацьку за 6 місяців і тепер допомагаю іншим!',
      love: 'Бачити, як студенти починають впевнено говорити',
      initials: 'Н',
      color: 'bg-brand-blue',
    },
    {
      name: 'Марта',
      role: 'Викладач',
      favoriteWord: 'Srdiečko',
      hobby: 'Читання словацької літератури',
      fact: 'Можу пояснити будь-яке правило через мемі',
      love: 'Коли студенти починають жартувати словацькою',
      initials: 'М',
      color: 'bg-brand-orange',
    },
    {
      name: 'Петро',
      role: 'Викладач розмовної практики',
      favoriteWord: 'Kamoš',
      hobby: 'Словацька музика та кіно',
      fact: 'Знаю всі словацькі приказки та їх історію',
      love: 'Розмови про культуру та традиції Словаччини',
      initials: 'П',
      color: 'bg-brand-blue',
    },
    {
      name: 'Софія',
      role: 'Викладач для початківців',
      favoriteWord: 'Úsmev',
      hobby: 'Малювання та каліграфія',
      fact: 'Створюю власні навчальні матеріали з ілюстраціями',
      love: 'Перші успіхи новачків!',
      initials: 'С',
      color: 'bg-brand-orange',
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="teachers" className="py-24 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-semibold text-brand-orange">Наша команда</span>
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Наші <span className="text-brand-orange">викладачі</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
              Не сухі резюме, а живі люди, які люблять свою справу
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teachers.map((teacher, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-20 h-20 ${teacher.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-3xl font-black text-white">{teacher.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">{teacher.name}</h3>
                    <p className="text-brand-dark/60">{teacher.role}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-dark/50 uppercase tracking-wide">Улюблене слово</p>
                      <p className="text-brand-dark font-bold">{teacher.favoriteWord}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-dark/50 uppercase tracking-wide">Хобі</p>
                      <p className="text-brand-dark/80">{teacher.hobby}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                      <Book className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-dark/50 uppercase tracking-wide">Цікавий факт</p>
                      <p className="text-brand-dark/80">{teacher.fact}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-light">
                    <p className="text-brand-blue font-medium">
                      {teacher.love}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

      </div>
    </section>
  );
}
