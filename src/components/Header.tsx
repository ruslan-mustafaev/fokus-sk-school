import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Про нас', href: '#about' },
  { label: 'Формати', href: '#formats' },
  { label: 'Ціни', href: '#pricing' },
  { label: 'Викладачі', href: '#teachers' },
  { label: 'Відгуки', href: '#testimonials' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-blue shadow-lg py-2'
          : 'bg-brand-blue py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img
              src="/logo/img_3159.png"
              alt="FOCUS School"
              className={`transition-all duration-300 w-auto ${
                isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 md:h-24'
              }`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-white/90 hover:text-white font-medium text-base
                         transition-all duration-200 rounded-lg hover:bg-white/10"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 px-6 py-3 bg-brand-orange text-white rounded-full font-semibold
                       hover:bg-brand-orange/90 transition-all duration-300 shadow-lg
                       hover:shadow-xl transform hover:scale-105"
            >
              Пробний урок
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-brand-blue border-t border-white/10
                   shadow-xl transition-all duration-300 overflow-hidden ${
                     isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                   }`}
      >
        <nav className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-3 text-white/90 hover:text-white font-medium text-lg
                       transition-all duration-200 rounded-lg hover:bg-white/10 text-left"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contact')}
            className="mt-4 px-6 py-4 bg-brand-orange text-white rounded-full font-semibold
                     hover:bg-brand-orange/90 transition-all duration-300 shadow-lg text-center"
          >
            Записатись на пробний урок
          </button>
        </nav>
      </div>
    </header>
  );
}
