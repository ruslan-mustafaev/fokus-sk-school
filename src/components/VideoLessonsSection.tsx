import AnimatedElement from './AnimatedElement';

const lessons = [
  {
    number: 1,
    title: 'Що таке som/sa/si, де використовувати ці часточки, а де не треба?',
    description:
      'Більше не будете плутати: som/sa/si. Зрозумієте, чому Словаки використовують ці слова, на якому місці в реченні вони мають стояти та вивчите купу нових дієслів з SA та SI. Подарунок: Чек-лист з усіма зворотніми дієсловами.',
    free: true,
    bg: 'from-brand-blue to-brand-blue/70',
  },
  {
    number: 2,
    title: 'Словацька для адаптації та вирішення побутових питань',
    description:
      'Ти точно вже відчував невпевненість в поліції, лікарні, аптеці чи банку. Після цієї лекції ти почнеш відчувати впевненість у вирішенні будь-яких побутових ситуацій словацькою.',
    free: false,
    bg: 'from-brand-dark to-gray-700',
  },
  {
    number: 3,
    title: 'Вимовляй як Словак: впевнена вимова та подолання мовного бар\'єру',
    description:
      'Урок від носійки мови Lenky. Після цієї лекції ти перестанеш соромитись свого акценту. Розберемо найпоширеніші помилки у вимові, які роблять українці словацькою.',
    free: false,
    bg: 'from-brand-orange to-brand-orange/70',
  },
  {
    number: 4,
    title: 'Розмовна словацька: скорочення, неформальні слова, популярні фрази та живі вирази',
    description:
      'Після цього уроку ти звучатимеш природніше, розумітимеш скорочення та розмовні вирази й почуватимешся впевнено в реальному спілкуванні зі словаками.',
    free: false,
    bg: 'from-purple-600 to-purple-400',
  },
  {
    number: 5,
    title: 'Як швидко формулювати думки словацькою',
    description:
      'Цей урок допоможе тобі перестати перекладати з української в голові. Ти навчишся швидко будувати речення за готовими мовними моделями, які словаки використовують щодня.',
    free: false,
    bg: 'from-teal-600 to-teal-400',
  },
];

export default function VideoLessonsSection() {
  return (
    <section
      id="video-lessons"
      className="py-24 px-4 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-brand-dark">
              Відео-<span className="text-brand-orange font-pangolin">уроки</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={100}>
            <p className="text-lg md:text-xl text-brand-dark/60 max-w-2xl mx-auto">
              Прокачай свою словацьку за допомогою наших відео-уроків
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">

                {/* Thumbnail */}
                <div className={`relative w-full h-48 bg-gradient-to-br ${lesson.bg} flex items-center justify-center`}>
                  <span className="text-7xl font-black text-white/20">{lesson.number}</span>

                  {/* Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                    lesson.free
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-brand-dark'
                  }`}>
                    {lesson.free ? 'Безкоштовно' : '7 євро'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-brand-dark mb-3 leading-snug">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-brand-dark/60 leading-relaxed flex-1">
                    {lesson.description}
                  </p>
                  <button className={`mt-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    lesson.free
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-brand-orange text-white hover:bg-brand-orange/90'
                  }`}>
                    {lesson.free ? 'Переглянути безкоштовно' : 'Придбати за 7 євро'}
                  </button>
                </div>

              </div>
            </AnimatedElement>
          ))}
        </div>

      </div>
    </section>
  );
}
