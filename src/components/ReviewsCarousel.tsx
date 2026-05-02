import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const reviews = [
  {
    name: 'Каріна',
    text: 'Добре, з нетерпінням чекаю вже занять з улюбленою викладачкою 🫶🥹 Словами не передати як сумую ❤️',
  },
  {
    name: 'Ксенія Гусар',
    text: 'Вчора були на цікавому розмовному клубі, де змогли попрактикуватися розмовляти словацькою. Хочу висловити свою подяку викладачці нашого заняття Ленці за легкість у спілкуванні, багато тем які завжди актуальні і необхідні. З нетерпінням чекаю наступного такого заняття ❤️',
  },
  {
    name: 'Лера Волошина',
    text: 'Я дуже приємно вражена. Була на багатьох курсах, але ваш найбільше сподобався, я з вами на довго. Особливо дякую за підбір вчителів, Юля просто 🔥',
  },
  {
    name: 'Юлія Василів',
    text: 'Я теж дуже задоволена. Спочатку я злякалась, що буде носій мови викладати, але після першого заняття, зрозуміла, що це величезна перевага. Тому хочу з Вами дійти до В2 точно, маю ціль :)',
  },
  {
    name: 'Тетяна',
    text: 'Заняття проходять в дуже легкій приємній обстановці, з вами дуже легко і приємно спілкуватися. Звичайно великий плюс, що Ви носій мови і одразу пояснюєте як у вас в Словаччині говорять. В цілому я дуже задоволена заняттями 🥰',
  },
  {
    name: 'Саша',
    text: 'Заняття дуже сподобалося, вчителька дуже комфортна, приємно слухати і відчула класну атмосферу під час заняття. Платформа на занятті зручна і має гарний інтерфейс. Вже чекаю наступного уроку!',
  },
  {
    name: 'Яна',
    text: 'За два місяці у мене майже повністю зник мовний бар\'єр. Раніше в голові я формувала речення, але коли починала їх вимовляти, вони виходили зовсім не такі. Впевнена, що то завдяки нашим викладачам я позбулась страху говорити.',
  },
  {
    name: 'Вікторія',
    text: 'Мені все дуже сподобалось на курсі, все максимально зрозуміло, а якщо щось ні то не страшно перепитати ще раз. Саме головне що на роботі вже колеги помітили самі, що я набагато краще граматичніше і краще говорю — дякую велике ❤️',
  },
];

const duplicatedReviews = [...reviews, ...reviews];

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Auto-scroll animation
  useEffect(() => {
    if (isPaused || !scrollRef.current) return;

    const container = scrollRef.current;
    let animationId: number;
    let lastTime = 0;

    const step = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      container.scrollLeft += delta * 0.03; // speed

      // Reset scroll when halfway (duplicated content)
      const halfScroll = container.scrollWidth / 2;
      if (container.scrollLeft >= halfScroll) {
        container.scrollLeft -= halfScroll;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -340 : 340,
      behavior: 'smooth',
    });
    // Resume auto-scroll after 4 seconds
    setTimeout(() => setIsPaused(false), 4000);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - dx;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsPaused(false), 4000);
  };

  // Touch drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    dragStartX.current = e.touches[0].clientX;
    scrollStartX.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - dx;
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />
      <AnimatedElement animation="fade-in-down">
        <div className="max-w-7xl mx-auto mb-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Що кажуть наші <span className="text-brand-orange">студенти</span>
          </h2>
        </div>
      </AnimatedElement>

      <div className="relative overflow-hidden">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent z-10 pointer-events-none" />

        {/* Navigation buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 py-6 overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsDragging(false); setIsPaused(false); }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 rounded-2xl p-6 transition-all duration-300 bg-cover bg-center select-none"
              style={{ backgroundImage: 'url(/textures/white.webp)' }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-orange text-base">★</span>
                ))}
              </div>

              <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div>
                <h4 className="font-bold text-brand-dark">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}