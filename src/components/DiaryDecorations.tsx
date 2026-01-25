import { Heart, Star, Sparkles, Smile, Music } from 'lucide-react';

export function Tape({ className = '', rotation = 0 }: { className?: string; rotation?: number }) {
  return (
    <div
      className={`absolute w-20 h-8 bg-white/40 backdrop-blur-sm border-t border-b border-white/60 ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

export function Sticker({
  icon: Icon,
  color,
  className = ''
}: {
  icon: typeof Heart;
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-10 h-10 rounded-full ${color} flex items-center justify-center shadow-lg ${className}`}
      style={{ transform: 'rotate(-12deg)' }}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
}

export function DoodleHeart({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <Heart className="w-6 h-6 text-diary-pink fill-diary-pink opacity-60 animate-bounce-soft" />
    </div>
  );
}

export function DoodleStar({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <Star className="w-5 h-5 text-diary-yellow fill-diary-yellow opacity-70 animate-float" />
    </div>
  );
}

export function DoodleSparkle({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <Sparkles className="w-4 h-4 text-diary-purple opacity-60" />
    </div>
  );
}

export function PolaroidFrame({
  children,
  rotation = -2,
  className = ''
}: {
  children: React.ReactNode;
  rotation?: number;
  className?: string;
}) {
  return (
    <div
      className={`bg-white p-3 pb-12 shadow-xl ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      }}
    >
      {children}
    </div>
  );
}

export function MagazineCutout({
  children,
  rotation = 1,
  borderColor,
  className = ''
}: {
  children: React.ReactNode;
  rotation?: number;
  borderColor?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={`absolute inset-0 ${borderColor || 'bg-diary-pink'} opacity-20`}
        style={{
          clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
        }}
      />
      <div className="relative bg-white p-6 shadow-lg"
        style={{
          clipPath: 'polygon(2% 0%, 98% 1%, 99% 98%, 1% 99%)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
