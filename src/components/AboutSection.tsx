import { Heart, MessageSquare, Target, Users, TrendingUp, Sparkles, BookOpen, Star } from 'lucide-react';
import { Tape, DoodleHeart, DoodleStar } from './DiaryDecorations';

export default function AboutSection() {
  const values = [
    {
      icon: MessageSquare,
      title: 'Практичний підхід',
      description: 'Вчимо те, що справді потрібно в житті. Жива розмовна мова для реальних ситуацій.',
      color: 'bg-diary-pink',
      rotation: -1,
    },
    {
      icon: TrendingUp,
      title: 'Постійний прогрес',
      description: 'Відстежуємо твої результати, долаємо бар\'єри, фіксуємо кожен успіх.',
      color: 'bg-diary-blue',
      rotation: 2,
    },
    {
      icon: Heart,
      title: 'Підтримка 24/7',
      description: 'Допомога між уроками, відповіді на питання, мотивація коли потрібно.',
      color: 'bg-diary-purple',
      rotation: -2,
    },
    {
      icon: Users,
      title: 'Індивідуальний план',
      description: 'Програма під твої цілі та темп. Кожен студент — унікальний.',
      color: 'bg-diary-green',
      rotation: 1,
    },
  ];

  const targetAudience = [
    {
      icon: Sparkles,
      title: 'Початківці',
      description: 'Тільки починаєш вивчати словацьку з нуля',
    },
    {
      icon: TrendingUp,
      title: 'Вдосконалення',
      description: 'Маєш базу, хочеш говорити впевненіше',
    },
    {
      icon: BookOpen,
      title: 'Життя та робота',
      description: 'Потрібна мова для переїзду чи кар\'єри',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-diary-paper relative overflow-hidden">
      <DoodleHeart className="top-10 right-10" />
      <DoodleStar className="bottom-20 left-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-diary-pink/20 rounded-full mb-6 border-2 border-diary-pink/30" style={{ transform: 'rotate(-1deg)' }}>
            <Target className="w-4 h-4 text-diary-pink" />
            <span className="text-sm font-semibold text-diary-pink">Наш підхід</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Чому обирають{' '}
            <span className="text-diary-pink">FOCUS</span>?
          </h2>
          <p className="text-lg md:text-xl text-diary-dark/70 max-w-2xl mx-auto leading-relaxed">
            Школа для тих, хто хоче впевнено говорити словацькою в реальних життєвих ситуаціях.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              style={{
                transform: `rotate(${value.rotation}deg)`,
                clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
              }}
            >
              <Tape className="top-0 left-1/4" rotation={-10} />

              <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6 text-white shadow-lg`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-diary-dark">{value.title}</h3>
              <p className="text-diary-dark/70 leading-relaxed text-lg">{value.description}</p>

              {index % 2 === 0 && (
                <Star className="absolute bottom-4 right-4 w-6 h-6 fill-diary-yellow text-diary-yellow opacity-60" />
              )}
              {index % 2 === 1 && (
                <Heart className="absolute bottom-4 right-4 w-6 h-6 fill-diary-pink text-diary-pink opacity-60" />
              )}
            </div>
          ))}
        </div>

        <div className="bg-diary-purple rounded-3xl p-8 md:p-12 text-white relative overflow-hidden transform -rotate-1 shadow-xl">
          <Tape className="top-4 right-1/4" rotation={15} />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black mb-8">Для кого школа?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {targetAudience.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors border-2 border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xl font-bold mb-2">{item.title}</p>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <Heart className="absolute top-4 right-4 w-8 h-8 fill-white/10 text-white/10" />
          <Star className="absolute bottom-4 left-4 w-6 h-6 fill-white/10 text-white/10" />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-diary-yellow rounded-2xl px-8 py-6 transform rotate-1 shadow-lg">
            <p className="text-xl md:text-2xl font-bold text-diary-dark">
              Вчуся, щоб не лише розуміти, а й говорити!
            </p>
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-diary-purple" />
          </div>
        </div>
      </div>
    </section>
  );
}
