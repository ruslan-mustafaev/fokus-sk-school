import { Heart, MessageSquare, Users, TrendingUp } from 'lucide-react';
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

      </div>
    </section>
  );
}
