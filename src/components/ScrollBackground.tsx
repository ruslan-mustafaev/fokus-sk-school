import { useState, useEffect, useRef } from 'react';

const sectionBackgrounds: { id: string; image: string; position?: string }[] = [
  { id: 'hero', image: '/logo/IMG_5071.PNG' },
  { id: 'about', image: '/IMG_2092.JPG' },
  { id: 'formats', image: '/IMG_7363.JPEG' },
  { id: 'contact', image: '/IMG_7364.JPEG' },
  { id: 'teachers', image: '/IMG_4363.JPG', position: 'top' },
];

export default function ScrollBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    elementsRef.current = sectionBackgrounds.map((bg) =>
      document.getElementById(bg.id)
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;

      for (let i = elementsRef.current.length - 1; i >= 0; i--) {
        const el = elementsRef.current[i];
        if (el && el.offsetTop <= scrollY) {
          setActiveIndex(i);
          return;
        }
      }
      setActiveIndex(0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {sectionBackgrounds.map((bg, index) => (
        <img
          key={bg.id}
          src={bg.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === activeIndex ? 1 : 0, objectPosition: bg.position || 'center' }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
