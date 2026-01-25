import { Heart, Book, Star, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Tape, DoodleHeart, DoodleStar } from './DiaryDecorations';

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
      color: 'bg-diary-pink',
      rotation: -1,
    },
    {
      name: 'Марта',
      role: 'Викладач',
      favoriteWord: 'Srdiečko',
      hobby: 'Читання словацької літератури',
      fact: 'Можу пояснити будь-яке правило через мемі',
      love: 'Коли студенти починають жартувати словацькою',
      initials: 'М',
      color: 'bg-diary-blue',
      rotation: 2,
    },
    {
      name: 'Петро',
      role: 'Викладач розмовної практики',
      favoriteWord: 'Kamoš',
      hobby: 'Словацька музика та кіно',
      fact: 'Знаю всі словацькі приказки та їх історію',
      love: 'Розмови про культуру та традиції Словаччини',
      initials: 'П',
      color: 'bg-diary-purple',
      rotation: -2,
    },
    {
      name: 'Софія',
      role: 'Викладач для початківців',
      favoriteWord: 'Úsmev',
      hobby: 'Малювання та каліграфія',
      fact: 'Створюю власні навчальні матеріали з ілюстраціями',
      love: 'Перші успіхи новачків!',
      initials: 'С',
      color: 'bg-diary-green',
      rotation: 1,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="teachers" className="py-24 px-4 bg-white">
      <DoodleHeart className="top-20 left-10" />
      <DoodleStar className="bottom-32 right-16" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-diary-pink/20 rounded-full mb-6 border-2 border-diary-pink/30" style={{ transform: 'rotate(1deg)' }}>
            <Users className="w-4 h-4 text-diary-pink" />
            <span className="text-sm font-semibold text-diary-pink">Наша команда</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Наші <span className="text-diary-pink">викладачі</span>
          </h2>
          <p className="text-lg md:text-xl text-diary-dark/70 max-w-2xl mx-auto leading-relaxed">
            Не сухі резюме, а живі люди, які люблять свою справу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-4 border-diary-dark/10 relative"
              style={{
                transform: `rotate(${teacher.rotation}deg)`,
                clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
              }}
            >
              <Tape className="top-0 right-1/4" rotation={teacher.rotation * -5} />

              <div className="flex items-start gap-5 mb-6">
                <div className={`w-20 h-20 ${teacher.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-4 border-white`}>
                  <span className="text-3xl font-black text-white">{teacher.initials}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-diary-dark">{teacher.name}</h3>
                  <p className="text-diary-dark/60">{teacher.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-diary-yellow/30 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-diary-yellow fill-diary-yellow" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-diary-dark/50 uppercase tracking-wide">Улюблене слово</p>
                    <p className="text-diary-dark font-bold">{teacher.favoriteWord}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-diary-pink/30 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-diary-pink fill-diary-pink" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-diary-dark/50 uppercase tracking-wide">Хобі</p>
                    <p className="text-diary-dark/80">{teacher.hobby}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-diary-blue/30 flex items-center justify-center flex-shrink-0">
                    <Book className="w-4 h-4 text-diary-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-diary-dark/50 uppercase tracking-wide">Цікавий факт</p>
                    <p className="text-diary-dark/80">{teacher.fact}</p>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-dashed border-diary-dark/20">
                  <p className="text-diary-purple font-medium">
                    {teacher.love}
                  </p>
                </div>
              </div>

              {index % 2 === 0 && (
                <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-diary-purple/40" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-diary-paper rounded-3xl p-8 md:p-12 shadow-xl text-center transform -rotate-1 border-4 border-diary-pink/20">
          <Tape className="top-4 left-1/4" rotation={10} />
          <p className="text-lg text-diary-dark/70 mb-6">
            Ти можеш обрати викладача, з яким тобі найкомфортніше!
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-diary-pink text-white
                     rounded-full font-bold text-lg hover:bg-diary-pink/90 transition-all duration-300
                     shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Познайомитися на пробному уроці
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Heart className="absolute top-4 right-4 w-8 h-8 fill-diary-pink/30 text-diary-pink/30" />
        </div>
      </div>
    </section>
  );
}
