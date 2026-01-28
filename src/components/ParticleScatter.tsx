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
  const direction = (index % 2 === 0 ? 1 : -1);
  const verticalDirection = (index % 3 === 0 ? 1 : -1);
  const baseScatter = 50 + (index * 15);

  const [offset, setOffset] = useState({
    x: direction * baseScatter,
    y: verticalDirection * (baseScatter * 0.6),
    rotate: direction * 3,
    scale: 1
  });
  const targetOffset = useRef({
    x: direction * baseScatter,
    y: verticalDirection * (baseScatter * 0.6),
    rotate: direction * 3,
    scale: 1
  });
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!isInView) {
      const scattered = {
        x: direction * baseScatter,
        y: verticalDirection * (baseScatter * 0.6),
        rotate: direction * 3,
        scale: 1
      };
      targetOffset.current = scattered;
      return;
    }

    const intensityMultiplier = Math.max(1, Math.min(velocity * 2, 3));

    if (scrollDirection === 'down') {
      targetOffset.current = { x: 0, y: 0, rotate: 0, scale: 1 };
    } else {
      targetOffset.current = {
        x: direction * baseScatter * intensityMultiplier,
        y: verticalDirection * (baseScatter * 0.6) * intensityMultiplier,
        rotate: direction * 3 * intensityMultiplier,
        scale: 1 + (intensityMultiplier - 1) * 0.05,
      };
    }
  }, [scrollDirection, velocity, index, isInView, direction, verticalDirection, baseScatter]);

  useEffect(() => {
    const animate = () => {
      setOffset(prev => ({
        x: prev.x + (targetOffset.current.x - prev.x) * 0.15,
        y: prev.y + (targetOffset.current.y - prev.y) * 0.15,
        rotate: prev.rotate + (targetOffset.current.rotate - prev.rotate) * 0.15,
        scale: prev.scale + (targetOffset.current.scale - prev.scale) * 0.15,
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
