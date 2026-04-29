import { useEffect, useRef, useState } from 'react';

type BackgroundScene = {
  id: string;
  kind: 'image' | 'video';
  src: string;
  poster?: string;
  fallbackSrc?: string;
  posterFallback?: string;
  position?: string;
};

const sectionBackgrounds: BackgroundScene[] = [
  {
    id: 'hero',
    kind: 'video',
    src: '/hero-video.mp4',
    poster: '/IMG_2092.webp',
    fallbackSrc: '/IMG_2092.JPG',
    posterFallback: '/IMG_2092.JPG',
  },
  {
    id: 'about',
    kind: 'image',
    src: '/IMG_2092.webp',
    fallbackSrc: '/IMG_2092.JPG',
  },
  {
    id: 'formats',
    kind: 'image',
    src: '/textures/blue.webp',
    fallbackSrc: '/textures/blue.png',
  },
];

const PRELOAD_ROOT_MARGIN = '125% 0px';

export default function ScrollBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIds, setLoadedIds] = useState<Set<string>>(
    () => new Set([sectionBackgrounds[0].id])
  );
  const [failedIds, setFailedIds] = useState<Set<string>>(() => new Set());
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const activeIndexRef = useRef(0);

  const getSceneImageSrc = (scene: BackgroundScene) => {
    const preferredSrc = scene.kind === 'video' ? scene.poster ?? scene.src : scene.src;
    return failedIds.has(scene.id) ? scene.fallbackSrc ?? preferredSrc : preferredSrc;
  };

  const handleSceneError = (scene: BackgroundScene) => {
    if (!scene.fallbackSrc) return;

    setFailedIds((prev) => {
      if (prev.has(scene.id)) return prev;

      const next = new Set(prev);
      next.add(scene.id);
      return next;
    });
  };

  useEffect(() => {
    const sections = sectionBackgrounds.map((bg) => document.getElementById(bg.id));
    elementsRef.current = sections;

    const observer = new IntersectionObserver(
      (entries) => {
        setLoadedIds((prev) => {
          let next = prev;

          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            const id = (entry.target as HTMLElement).id;
            if (next.has(id)) continue;

            if (next === prev) {
              next = new Set(prev);
            }
            next.add(id);
          }

          return next;
        });
      },
      { rootMargin: PRELOAD_ROOT_MARGIN }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let nextIndex = 0;

      for (let i = elementsRef.current.length - 1; i >= 0; i -= 1) {
        const element = elementsRef.current[i];
        if (element && element.offsetTop <= scrollY) {
          nextIndex = i;
          break;
        }
      }

      if (nextIndex === activeIndexRef.current) return;

      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      setLoadedIds((prev) => {
        const id = sectionBackgrounds[nextIndex].id;
        if (prev.has(id)) return prev;

        const next = new Set(prev);
        next.add(id);
        return next;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activateHeroVideo = () => setShouldLoadHeroVideo(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(activateHeroVideo, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(activateHeroVideo, 900);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {sectionBackgrounds.map((scene, index) => {
        if (!loadedIds.has(scene.id)) return null;

        const opacity = index === activeIndex ? 1 : 0;
        const sharedClassName =
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out';

        if (scene.kind === 'video' && shouldLoadHeroVideo) {
          return (
            <video
              key={scene.id}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={scene.posterFallback ?? scene.fallbackSrc ?? scene.poster}
              className={sharedClassName}
              style={{ opacity }}
            >
              <source src={scene.src} type="video/mp4" />
            </video>
          );
        }

        return (
          <img
            key={scene.id}
            src={getSceneImageSrc(scene)}
            onError={() => handleSceneError(scene)}
            alt=""
            decoding="async"
            fetchPriority={scene.id === 'hero' ? 'high' : 'low'}
            className={sharedClassName}
            style={{ opacity, objectPosition: scene.position ?? 'center' }}
          />
        );
      })}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
