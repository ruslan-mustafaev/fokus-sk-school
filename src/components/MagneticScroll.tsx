import { useEffect, useRef } from 'react';

export default function MagneticScroll() {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY.current;

          if (scrollingDown) {
            sections.forEach((section) => {
              const rect = section.getBoundingClientRect();
              const sectionMiddle = rect.top + rect.height / 2;
              const viewportMiddle = window.innerHeight / 2;

              if (Math.abs(sectionMiddle - viewportMiddle) < 200) {
                const magnetStrength = 1 - Math.abs(sectionMiddle - viewportMiddle) / 200;

                window.scrollTo({
                  top: window.scrollY + (sectionMiddle - viewportMiddle) * magnetStrength * 0.1,
                  behavior: 'auto',
                });
              }
            });
          }

          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
