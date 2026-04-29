import AnimatedElement from './AnimatedElement';

export default function FounderSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Layer 1: Background texture (no letters) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/textures/white.webp)' }}
      />

      {/* Layer 2: FOCUS letters (transparent background) */}
      <img
        src="/textures/focus-letters.webp"
        alt=""
        className="absolute left-0 top-0 h-full w-auto pointer-events-none select-none"
        style={{ filter: 'none', boxShadow: 'none' }}
        decoding="async"
        loading="lazy"
      />

      {/* Layer 3: Animated shimmer masked to letter shapes */}
      <div
        className="absolute left-0 top-0 h-full pointer-events-none select-none founder-shimmer-anim"
        style={{
          aspectRatio: '469 / 1920',
          backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(255,255,255,0.6) 42%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.6) 58%, transparent 70%, transparent 100%)',
          backgroundSize: '100% 500%',
          WebkitMaskImage: 'url(/textures/focus-mask.png)',
          maskImage: 'url(/textures/focus-mask.png)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        } as React.CSSProperties}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Photo */}
          <AnimatedElement animation="fade-in-left">
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-3xl shadow-xl overflow-hidden">
                <img
                  src="/IMG_4314.webp"
                  alt="Нана, засновниця Focus School"
                  className="w-full h-full object-cover"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-orange text-white rounded-2xl px-6 py-3 shadow-lg">
                <p className="text-sm font-bold">Засновниця Focus School</p>
              </div>
            </div>
          </AnimatedElement>

          {/* Bio text */}
          <AnimatedElement animation="fade-in-right" delay={100}>
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-brand-dark mb-2">Нана</h2>
              <p className="text-brand-blue text-lg mb-8" style={{ fontFamily: 'Cygre, sans-serif', fontWeight: 400 }}>Засновниця Focus School</p>

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
                <blockquote className="border-l-4 border-brand-orange pl-4 italic text-brand-dark font-body text-2xl md:text-[1.8rem]">
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
