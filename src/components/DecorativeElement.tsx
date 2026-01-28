interface DecorativeElementProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function DecorativeElement({
  src,
  alt = 'decoration',
  className = ''
}: DecorativeElementProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute pointer-events-none select-none ${className}`}
      loading="lazy"
    />
  );
}
