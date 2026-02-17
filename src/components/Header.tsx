import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Курси', href: '#formats' },
  { label: 'Ціни', href: '#pricing' },
  { label: 'Онлайн-лекції', href: '#about' },
  { label: 'Викладачі', href: '#teachers' },
];

export default function Header({ onQuizClick }: { onQuizClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setMobileOpen(false);
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md shadow-lg py-2'
          : 'backdrop-blur-sm py-3'
      }`}
      style={{ backgroundColor: '#eaeaea' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/logo/image.png"
              alt="FOCUS School"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-brand-dark/80 font-semibold text-sm uppercase tracking-wide
                         hover:text-brand-blue transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onQuizClick}
              className="relative px-5 py-2.5 bg-brand-orange text-white rounded-full font-semibold
                       hover:bg-brand-orange/90 transition-all duration-300 shadow-md
                       hover:shadow-lg transform hover:scale-105 text-sm"
            >
              Тест на рівень
              <span className="absolute -top-2.5 -right-2 bg-white text-brand-orange text-[10px] font-bold
                             px-2 py-0.5 rounded-full shadow-md border border-brand-orange/20">
                3 хв
              </span>
            </button>
            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full font-semibold
                       hover:bg-brand-blue/90 transition-all duration-300 shadow-md
                       hover:shadow-lg transform hover:scale-105 text-sm"
            >
              Пробний урок
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-dark"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-300 shadow-xl" style={{ backgroundColor: '#eaeaea' }}>
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-brand-dark/80 font-semibold
                         text-sm uppercase tracking-wide hover:text-brand-blue hover:bg-brand-light
                         rounded-xl transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
              <button
                onClick={() => { setMobileOpen(false); onQuizClick?.(); }}
                className="w-full px-5 py-3 bg-brand-orange text-white rounded-full font-semibold
                         text-sm text-center"
              >
                Тест на рівень -- 3 хв твого часу
              </button>
              <button
                onClick={scrollToContact}
                className="w-full px-5 py-3 bg-brand-blue text-white rounded-full font-semibold
                         text-sm text-center"
              >
                Пробний урок
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
