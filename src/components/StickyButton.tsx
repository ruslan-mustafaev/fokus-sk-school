import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

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
        className="w-14 h-14 bg-brand-blue text-white rounded-2xl shadow-2xl
                 hover:bg-brand-blue/90 transition-all duration-300 transform hover:scale-110
                 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
