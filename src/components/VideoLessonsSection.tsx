import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { renderLapkoiText } from './renderLapkoiText';

const lessons = [
  {
    number: 1,
    title: 'Що таке som/sa/si, де використовувати ці часточки, а де не треба?',
    description:
      'Більше не будете плутати: som/sa/si. Зрозумієте, чому Словаки використовують ці слова, на якому місці в реченні вони мають стояти та вивчите купу нових дієслів з SA та SI. Подарунок: Чек-лист з усіма зворотніми дієсловами.',
    bg: 'from-brand-blue to-brand-blue/70',
  },
  {
    number: 2,
    title: 'Словацька для адаптації та вирішення побутових питань',
    description:
      'Ти точно вже відчував невпевненість в поліції, лікарні, аптеці чи банку. Після цієї лекції ти почнеш відчувати впевненість у вирішенні будь-яких побутових ситуацій словацькою.',
    bg: 'from-brand-dark to-gray-700',
  },
  {
    number: 3,
    title: 'Вимовляй як Словак: впевнена вимова та подолання мовного бар\'єру',
    description:
      'Урок від носійки мови Lenky. Після цієї лекції ти перестанеш соромитись свого акценту. Розберемо найпоширеніші помилки у вимові, які роблять українці словацькою.',
    bg: 'from-brand-orange to-brand-orange/70',
  },
  {
    number: 4,
    title: 'Розмовна словацька: скорочення, неформальні слова, популярні фрази та живі вирази',
    description:
      'Після цього уроку ти звучатимеш природніше, розумітимеш скорочення та розмовні вирази й почуватимешся впевнено в реальному спілкуванні зі словаками.',
    bg: 'from-purple-600 to-purple-400',
  },
  {
    number: 5,
    title: 'Як швидко формулювати думки словацькою',
    description:
      'Цей урок допоможе тобі перестати перекладати з української в голові. Ти навчишся швидко будувати речення за готовими мовними моделями, які словаки використовують щодня.',
    bg: 'from-teal-600 to-teal-400',
  },
];

export default function VideoLessonsSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="video-lessons"
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
              Відео-<span className="text-brand-orange font-lapkoi">{renderLapkoiText('уроки')}</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={100}>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Прокачай свою словацьку за допомогою наших відео-уроків
            </p>
          </AnimatedElement>
        </div>

        {/* Cards with blur + coming soon overlay */}
        <div className="relative">
          {/* Blurred cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 select-none pointer-events-none">
            {lessons.map((lesson, index) => (
              <AnimatedElement
                key={index}
                animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
                delay={(index * 100) as 0 | 100 | 200 | 300}
              >
                <div
                  className="rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/textures/white.webp)',
                    filter: 'blur(6px) grayscale(0.3)',
                    opacity: 0.5,
                  }}
                >
                  {/* Thumbnail */}
                  <div className={`relative w-full h-48 bg-gradient-to-br ${lesson.bg} flex items-center justify-center`}>
                    <span className="text-7xl font-black text-white/20">{lesson.number}</span>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-white/80 text-brand-dark">
                      Скоро
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
                    <div className="mt-5 py-3 rounded-2xl font-bold text-sm bg-gray-300 text-gray-500 text-center">
                      Скоро буде доступно
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>

          {/* Center overlay — "Coming Soon" */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <AnimatedElement animation="scale-in" delay={300}>
              <div
                className="rounded-3xl p-10 md:p-14 text-center max-w-lg mx-4 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: 'url(/textures/white.webp)' }}
              >
                {/* Pulsing ring decoration */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-64 h-64 rounded-full border-2 border-brand-orange/20"
                    style={{
                      animation: 'comingSoonPulse 3s ease-in-out infinite',
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-80 h-80 rounded-full border border-brand-blue/10"
                    style={{
                      animation: 'comingSoonPulse 3s ease-in-out infinite 0.5s',
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Animated icon */}
                  <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-orange/10 flex items-center justify-center"
                    style={{
                      animation: 'comingSoonBounce 2s ease-in-out infinite',
                    }}
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-brand-dark mb-3">
                    Скоро буде доступно
                  </h3>
                  <p className="text-brand-dark/60 mb-8 leading-relaxed">
                    Ми готуємо для тебе відео-уроки, які допоможуть швидше заговорити словацькою. Залиш свою пошту, щоб дізнатися першим!
                  </p>

                  {/* Email notify form */}
                  {submitted ? (
                    <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-lg">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Дякуємо! Ми повідомимо тебе
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Твоя пошта"
                        className="flex-1 px-5 py-3.5 rounded-full border-2 border-brand-dark/10 bg-white text-brand-dark
                                   placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-orange
                                   transition-colors duration-300 text-base"
                      />
                      <button
                        onClick={handleNotify}
                        className="px-8 py-3.5 bg-brand-orange text-white rounded-full font-bold text-base
                                   hover:bg-brand-orange/90 transition-all duration-300 transform hover:-translate-y-0.5
                                   whitespace-nowrap"
                      >
                        Повідомити мене
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Inline keyframes */}
        <style>{`
          @keyframes comingSoonPulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.15); opacity: 0.6; }
          }
          @keyframes comingSoonBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}</style>

      </div>
    </section>
  );
}