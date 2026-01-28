import { useState, useEffect, useRef } from 'react';

type ScrollDirection = 'up' | 'down' | 'none';

interface ScrollDirectionResult {
  scrollDirection: ScrollDirection;
  scrollY: number;
  velocity: number;
}

export const useScrollDirection = (): ScrollDirectionResult => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [scrollY, setScrollY] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastTime.current;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (timeDelta > 0) {
        const currentVelocity = Math.abs(scrollDelta / timeDelta) * 100;
        setVelocity(currentVelocity);
      }

      if (scrollDelta > 2) {
        setScrollDirection('down');
      } else if (scrollDelta < -2) {
        setScrollDirection('up');
      }

      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
      lastTime.current = currentTime;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollDirection, scrollY, velocity };
};
