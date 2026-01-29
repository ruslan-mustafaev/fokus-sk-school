import { Heart, MessageSquare, Users, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function AboutSection() {
  const values = [
    {
      icon: MessageSquare,
      title: 'Практичний підхід',
      description: 'Вчимо те, що справді потрібно в житті. Жива розмовна мова для реальних ситуацій.',
      color: 'bg-brand-blue',
    },
    {
      icon: TrendingUp,
      title: 'Постійний прогрес',
      description: 'Відстежуємо твої результати, долаємо бар\'єри, фіксуємо кожен успіх.',
      color: 'bg-brand-orange',
    },
    {
      icon: Heart,
      title: 'Підтримка 24/7',
      description: 'Допомога між уроками, відповіді на питання, мотивація коли потрібно.',
      color: 'bg-brand-blue',
    },
    {
      icon: Users,
      title: 'Індивідуальний план',
      description: 'Програма під твої цілі та темп. Кожен студент — унікальний.',
      color: 'bg-brand-orange',
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
    <section id="about" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Чому обирають{' '}
              <span className="text-brand-blue">FOCUS</span>?
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto leading-relaxed">
              Школа для тих, хто хоче впевнено говорити словацькою в реальних життєвих ситуаціях.
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {values.map((value, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <div className="group bg-brand-light rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-dark">{value.title}</h3>
                <p className="text-brand-dark/70 leading-relaxed text-lg">{value.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="scale-in">
          <div className="relative">
            <img
              src="/dekor/40.png"
              alt="Вчуся, щоб не лише розуміти, а й говорити!"
              className="absolute -top-6 -right-2 md:-right-10 w-56 md:w-80 h-auto z-30"
              style={{ transform: 'rotate(20deg)' }}
            />

            <div className="bg-brand-blue rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full -ml-32 -mb-32" />

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-8">Для кого школа?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {targetAudience.map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-xl font-bold mb-2">{item.title}</p>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
