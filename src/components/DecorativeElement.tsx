interface DecorativeElementProps {
  src: string;
  alt?: string;
  className?: string;
  animation?: 'float' | 'rotate' | 'pulse' | 'sway';
  delay?: number;
}

export default function DecorativeElement({
  src,
  alt = 'decoration',
  className = '',
  animation = 'float',
  delay = 0
}: DecorativeElementProps) {
  const animations = {
    float: 'animate-float',
    rotate: 'animate-rotate-slow',
    pulse: 'animate-pulse-slow',
    sway: 'animate-sway',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`absolute pointer-events-none select-none opacity-40 ${animations[animation]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      loading="lazy"
    />
  );
}
