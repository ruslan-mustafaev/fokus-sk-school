import { useState } from 'react';
import AnimatedElement from './AnimatedElement';

const features = [
  {
    title: 'Не тільки україномовні викладачі, але й носії мови',
    description: 'Нам важлива ваша вимова, у Словаччині ви маєте почувати себе ВПЕВНЕНО',
    dekor: '/full_dekor/30.png',
  },
  {
    title: 'Власна інтерактивна платформа',
    description: 'Відеопояснення, граматика "по поличках", зручний особистий кабінет, картки для вивчення слів',
    dekor: '/full_dekor/4.png',
  },
  {
    title: 'Безкоштовні розмовні клуби для учнів школи',
    description: 'Раз на місяць онлайн розмовні клуби для новачків та для просунутих',
    dekor: '/full_dekor/30.png',
  },
  {
    title: 'Регулярні повторення та тестування в кінці місяця',
    description: 'Нам важливо, щоб ви бачили прогрес, тому кожного місяця ви будете проходити усне тестування і отримувати бали по окремих частинах мови: граматика, словниковий запас та комунікація.',
    dekor: '/full_dekor/4.png',
  },
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/IMG_2092.JPG"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '50% 30%' }}
        />
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Наші <span className="text-brand-orange">Фішки</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={200}>
            <p className="text-lg md:text-xl text-brand-dark/60 font-medium">
              Фішки навчання у Focus
            </p>
          </AnimatedElement>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-2 h-full cursor-default ${
                  hoveredIndex === index
                    ? 'bg-brand-orange shadow-2xl shadow-brand-orange/20'
                    : 'bg-brand-light hover:shadow-xl'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={feature.dekor}
                    alt=""
                    className={`w-10 h-10 object-contain flex-shrink-0 transition-all duration-300 ${
                      hoveredIndex === index ? 'brightness-0 invert' : ''
                    }`}
                  />
                </div>
                <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-white' : 'text-brand-dark'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed text-base md:text-lg transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-white/90' : 'text-brand-dark/70'
                }`}>
                  {feature.description}
                </p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
