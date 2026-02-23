import AnimatedElement from './AnimatedElement';

export default function FounderSection() {
  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Photo placeholder */}
          <AnimatedElement animation="fade-in-left">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/IMG_4314.JPG"
                  alt="Нана, засновниця Focus School"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white rounded-2xl px-6 py-3 shadow-lg">
                <p className="text-sm font-bold">Засновниця Focus School</p>
              </div>
            </div>
          </AnimatedElement>

          {/* Bio text */}
          <AnimatedElement animation="fade-in-right" delay={100}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-brand-dark mb-2">Нана</h2>
              <p className="text-brand-blue font-semibold text-lg mb-8">Засновниця Focus School</p>

              <div className="space-y-5 text-brand-dark/80 leading-relaxed text-base md:text-lg">
                <p>
                  Я створила Focus School як простір, де мову не вчать "для галочки",
                  а починають нею жити.
                </p>
                <p>
                  Для мене мова — це інструмент свободи, адаптації та впевненості,
                  тому ми не зубримо правила, а вчимо говорити й діяти в реальних ситуаціях.
                </p>
                <p>
                  Я починала як репетитор і добре знаю, з якими труднощами стикаються учні,
                  тому для мене важливий не процес, а реальний ріст — у вимові,
                  впевненості та свободі спілкування.
                </p>
                <p>
                  Я постійно вдосконалюю програми, розвиваю команду та масштабую школу,
                  щоб ще більше українців могли почуватися впевнено у Словаччині.
                </p>
                <blockquote className="border-l-4 border-brand-orange pl-4 italic text-brand-dark font-pangolin text-xl">
                  Focus School — це про результат, систему і любов до мови.
                </blockquote>
              </div>
            </div>
          </AnimatedElement>

        </div>
      </div>
    </section>
  );
}
