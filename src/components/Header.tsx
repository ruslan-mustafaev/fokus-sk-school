import { useState, useEffect } from 'react';

export default function Header({ onQuizClick }: { onQuizClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-transparent backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img
              src="/logo/img_3159.png"
              alt="FOCUS School"
              className={`transition-all duration-300 w-auto ${
                isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16 md:h-20'
              }`}
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={onQuizClick}
              className="hidden sm:inline-flex px-4 sm:px-6 py-2 sm:py-3 bg-white text-brand-blue rounded-full font-semibold
                       hover:bg-white/90 transition-all duration-300 shadow-lg
                       hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Перевірити знання
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-brand-orange text-white rounded-full font-semibold
                       hover:bg-brand-orange/90 transition-all duration-300 shadow-lg
                       hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Пробний урок
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
