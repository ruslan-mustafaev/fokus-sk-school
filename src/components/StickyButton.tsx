import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    alert('Форма запису на пробний урок буде підключена далі');
  };

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={handleClick}
          className="px-6 py-4 bg-brand-orange text-white rounded-full font-semibold shadow-2xl hover:bg-brand-orange/90 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <span className="hidden sm:inline">Записатись на пробний</span>
          <span className="sm:hidden">Пробний урок</span>
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
