import { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-14 h-14 bg-diary-pink text-white rounded-full shadow-2xl
                 hover:bg-diary-pink/90 transition-all duration-300 transform hover:scale-110
                 flex items-center justify-center relative"
        aria-label="Scroll to top"
        style={{ transform: 'rotate(-5deg)' }}
      >
        <ArrowUp className="w-6 h-6" />
        <Heart className="absolute -top-1 -right-1 w-4 h-4 fill-diary-yellow text-diary-yellow" />
      </button>
    </div>
  );
}
