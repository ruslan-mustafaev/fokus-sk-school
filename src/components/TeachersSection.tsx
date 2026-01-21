import { Heart, Book, Star } from 'lucide-react';

export default function TeachersSection() {
  const teachers = [
    {
      name: 'Нана',
      role: 'Засновниця та викладач',
      favoriteWord: 'Pohoda',
      hobby: 'Подорожі та фотографія',
      fact: 'Вивчила словацьку за 6 місяців і тепер допомагаю іншим!',
      love: 'Бачити, як студенти починають впевнено говорити',
    },
    {
      name: 'Марта',
      role: 'Викладач',
      favoriteWord: 'Srdiečko',
      hobby: 'Читання словацької літератури',
      fact: 'Можу пояснити будь-яке правило через мемі',
      love: 'Коли студенти починають жартувати словацькою',
    },
    {
      name: 'Петро',
      role: 'Викладач розмовної практики',
      favoriteWord: 'Kamoš',
      hobby: 'Словацька музика та кіно',
      fact: 'Знаю всі словацькі приказки та їх історію',
      love: 'Розмови про культуру та традиції Словаччини',
    },
    {
      name: 'Софія',
      role: 'Викладач для початківців',
      favoriteWord: 'Úsmev',
      hobby: 'Малювання та каліграфія',
      fact: 'Створюю власні навчальні матеріали з ілюстраціями',
      love: 'Перші успіхи новачків — це найкраще!',
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Наші <span className="text-brand-orange">викладачі</span>
          </h2>
          <p className="text-xl text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
            Познайомся з нашою командою! Не сухі резюме, а живі люди, які люблять свою справу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">👤</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{teacher.name}</h3>
                  <p className="text-brand-dark/70">{teacher.role}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-brand-dark/70 mb-1">Улюблене слово:</p>
                    <p className="text-brand-dark font-medium">{teacher.favoriteWord}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-brand-dark/70 mb-1">Хобі:</p>
                    <p className="text-brand-dark">{teacher.hobby}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Book className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-brand-dark/70 mb-1">Цікавий факт:</p>
                    <p className="text-brand-dark">{teacher.fact}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-light">
                  <p className="font-handwriting text-lg text-brand-blue">
                    💙 {teacher.love}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 rounded-3xl p-8">
          <p className="text-lg text-brand-dark/80 mb-6">
            <span className="font-bold">Важливо:</span> Ти можеш обрати викладача, з яким тобі найкомфортніше!
            На пробному уроці ми допоможемо знайти ідеальне поєднання.
          </p>
          <button
            onClick={() => alert('Форма запису на пробний урок буде підключена далі')}
            className="px-8 py-4 bg-brand-orange text-white rounded-full font-semibold text-lg hover:bg-brand-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Познайомитися на пробному уроці
          </button>
        </div>
      </div>
    </section>
  );
}
