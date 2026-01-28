import React, { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface MagneticElementProps {
  children: React.ReactNode;
  index: number;
  scrollDirection: 'up' | 'down' | 'none';
  velocity: number;
  isInView: boolean;
}

const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  index,
  scrollDirection,
  velocity,
  isInView
}) => {
  const [offset, setOffset] = useState({ x: 0, y: 0, rotate: 0, scale: 1 });
  const targetOffset = useRef({ x: 0, y: 0, rotate: 0, scale: 1 });
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isInView) {
      targetOffset.current = { x: 0, y: 0, rotate: 0, scale: 1 };
      return;
    }

    const baseIntensity = Math.min(velocity * 0.5, 30);
    const direction = (index % 2 === 0 ? 1 : -1);
    const verticalDirection = (index % 3 === 0 ? 1 : -1);

    if (scrollDirection === 'up') {
      targetOffset.current = {
        x: direction * baseIntensity * (1 + index * 0.3),
        y: verticalDirection * baseIntensity * 0.8,
        rotate: direction * baseIntensity * 0.15,
        scale: 1 + baseIntensity * 0.002,
      };
    } else if (scrollDirection === 'down') {
      targetOffset.current = { x: 0, y: 0, rotate: 0, scale: 1 };
    }
  }, [scrollDirection, velocity, index, isInView]);

  useEffect(() => {
    const animate = () => {
      setOffset(prev => ({
        x: prev.x + (targetOffset.current.x - prev.x) * 0.08,
        y: prev.y + (targetOffset.current.y - prev.y) * 0.08,
        rotate: prev.rotate + (targetOffset.current.rotate - prev.rotate) * 0.08,
        scale: prev.scale + (targetOffset.current.scale - prev.scale) * 0.08,
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.rotate}deg) scale(${offset.scale})`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

interface ParticleScatterProps {
  children: React.ReactNode;
  className?: string;
}

export const ParticleScatter: React.FC<ParticleScatterProps> = ({ children, className = '' }) => {
  const { scrollDirection, velocity } = useScrollDirection();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const wrappedChildren = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return (
        <MagneticElement
          index={index}
          scrollDirection={scrollDirection}
          velocity={velocity}
          isInView={isInView}
        >
          {child}
        </MagneticElement>
      );
    }
    return child;
  });

  return (
    <div ref={containerRef} className={className}>
      {wrappedChildren}
    </div>
  );
};

export default ParticleScatter;
