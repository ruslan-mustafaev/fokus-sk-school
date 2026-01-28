import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'rotate-in';
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  className?: string;
}

export default function AnimatedElement({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}: AnimatedElementProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true,
  });

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={elementRef}
      className={`scroll-animate ${animation} ${delayClass} ${isVisible ? 'animate-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
