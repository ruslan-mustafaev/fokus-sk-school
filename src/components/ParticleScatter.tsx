import React, { useEffect, useRef, useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

interface ParticleScatterProps {
  children: React.ReactNode;
  intensity?: number;
}

export const ParticleScatter: React.FC<ParticleScatterProps> = ({ children, intensity = 1 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { scrollDirection } = useScrollDirection();
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newParticles: Particle[] = [];
      const particleCount = Math.min(12, Math.ceil((rect.width * rect.height) / 5000));

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        newParticles.push({
          id: i,
          x,
          y,
          vx: 0,
          vy: 0,
          originalX: x,
          originalY: y,
        });
      }

      setParticles(newParticles);
      particlesRef.current = newParticles;
    };

    createParticles();

    const handleResize = () => createParticles();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const animate = () => {
      const updatedParticles = particlesRef.current.map((particle) => {
        const force = 0.08 * intensity;
        let tx: number, ty: number;

        if (scrollDirection === 'down') {
          tx = particle.originalX;
          ty = particle.originalY;
        } else {
          tx = particle.originalX + (Math.random() - 0.5) * 80 * intensity;
          ty = particle.originalY + (Math.random() - 0.5) * 80 * intensity;
        }

        const dx = tx - particle.x;
        const dy = ty - particle.y;

        const newVx = particle.vx + dx * force;
        const newVy = particle.vy + dy * force;

        return {
          ...particle,
          x: particle.x + newVx * 0.85,
          y: particle.y + newVy * 0.85,
          vx: newVx * 0.85,
          vy: newVy * 0.85,
        };
      });

      particlesRef.current = updatedParticles;
      setParticles([...updatedParticles]);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollDirection, intensity]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {children}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-brand-blue/40 rounded-full blur-sm"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              transform: 'translate(-50%, -50%)',
              transition: 'none',
            }}
          />
        ))}
      </div>
    </div>
  );
};
