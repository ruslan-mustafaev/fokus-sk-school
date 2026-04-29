import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { renderLapkoiText } from './renderLapkoiText';

const stats = [
  { value: '700', label: 'учнів успішно закінчили навчання' },
  { value: '10', label: 'викладачів щодня доводять до результату' },
  { value: '86%', label: 'наших учнів рекомендують Focus' },
];

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

  const handleTrialClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <AnimatedElement key={stat.label} animation="fade-in-up" delay={(100 + index * 100) as 0 | 100 | 200 | 300}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-brand-orange mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-white/70 font-medium leading-relaxed">{stat.label}</div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="scale-in" delay={200}>
          <div className="flex justify-center mb-24 md:mb-28">
            <button
              onClick={handleTrialClick}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                       rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                       shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Записатись на пробний ✍️
            </button>
          </div>
        </AnimatedElement>

        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-up" delay={100}>
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white relative z-10">
                Наші <span className="text-brand-orange font-lapkoi">{renderLapkoiText('Фішки')}</span>
              </h2>
              <img
                src="/full_dekor/16_trim.png"
                alt=""
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none z-0 scale-[2.5]"
                decoding="async"
                loading="lazy"
              />
            </div>
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
                className={`group relative rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-2 h-full cursor-default bg-cover bg-center ${
                  hoveredIndex === index
                    ? 'shadow-2xl shadow-brand-orange/20'
                    : 'hover:shadow-xl'
                }`}
                style={{ backgroundImage: hoveredIndex === index ? 'url(/textures/orange.webp)' : 'url(/textures/white.webp)' }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={feature.dekor}
                    alt=""
                    className={`w-10 h-10 object-contain flex-shrink-0 transition-all duration-300 ${
                      hoveredIndex === index ? 'brightness-0 invert' : ''
                    }`}
                    decoding="async"
                    loading="lazy"
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
