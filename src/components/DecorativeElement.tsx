interface DecorativeElementProps {
  src: string;
  alt?: string;
  className?: string;
  delay?: number;
}

export default function DecorativeElement({
  src,
  alt = 'decoration',
  className = '',
  delay = 0
}: DecorativeElementProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute pointer-events-none select-none animate-magnet ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      loading="lazy"
    />
  );
}
