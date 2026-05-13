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

declare global {
  interface Window {
    __hideLoader?: () => void;
  }
}

export default function ScrollBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIds, setLoadedIds] = useState<Set<string>>(
    () => new Set([sectionBackgrounds[0].id])
  );
  const [failedIds, setFailedIds] = useState<Set<string>>(() => new Set());
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [otherScenesReady, setOtherScenesReady] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const heroReadyRef = useRef(false);
  const loaderDismissedRef = useRef(false);

  const dismissLoader = () => {
    if (loaderDismissedRef.current) return;
    loaderDismissedRef.current = true;
    if (typeof window !== 'undefined' && window.__hideLoader) {
      window.__hideLoader();
    }
  };

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

  // Safety fallback: mark hero ready after 4 seconds even if onLoad never fires
  useEffect(() => {
    const safetyTimeout = setTimeout(() => {
      if (!heroReadyRef.current) {
        setHeroReady(true);
        heroReadyRef.current = true;
        setOtherScenesReady(true);
        dismissLoader();
      }
    }, 4000);
    return () => clearTimeout(safetyTimeout);
  }, []);

  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Delay rendering other scenes 500ms after hero is ready
  useEffect(() => {
    if (!heroReady) return;
    const timer = setTimeout(() => setOtherScenesReady(true), 500);
    return () => clearTimeout(timer);
  }, [heroReady]);

  // Observe sections for preloading
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

  // Scroll handler — only activates after hero is ready
  useEffect(() => {
    const handleScroll = () => {
      // IMPORTANT: never change activeIndex before hero is ready
      if (!heroReadyRef.current) return;

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
    // DO NOT call handleScroll() immediately
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load hero video after hero poster is ready
  useEffect(() => {
    if (!heroReady) return;

    const activateHeroVideo = () => setShouldLoadHeroVideo(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(activateHeroVideo, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(activateHeroVideo, 900);
    return () => window.clearTimeout(timeoutId);
  }, [heroReady]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {sectionBackgrounds.map((scene, index) => {
        if (!loadedIds.has(scene.id)) return null;

        // Don't render non-hero scenes until hero is shown AND 500ms passed
        if (index > 0 && !otherScenesReady) return null;

        const isActive = index === activeIndex;
        const opacity = isActive ? 1 : 0;

        const transitionClass =
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out';

        if (scene.kind === 'video') {
          const showPoster = !videoReady;
          const showVideo = shouldLoadHeroVideo;

          return (
            <div key={scene.id} className="absolute inset-0">
              {showPoster && (
                <img
                  src={getSceneImageSrc(scene)}
                  onLoad={() => {
                    setHeroReady(true);
                    heroReadyRef.current = true;
                    // Use rAF to ensure browser paints the hero img before hiding loader
                    requestAnimationFrame(() => {
                      requestAnimationFrame(() => dismissLoader());
                    });
                  }}
                  onError={() => {
                    handleSceneError(scene);
                    setHeroReady(true);
                    heroReadyRef.current = true;
                    dismissLoader();
                  }}
                  alt=""
                  decoding="async"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: scene.position ?? 'center' }}
                />
              )}
              {showVideo && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onCanPlay={() => setVideoReady(true)}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{ opacity: videoReady && isActive ? 1 : 0 }}
                >
                  <source src={scene.src} type="video/mp4" />
                </video>
              )}
            </div>
          );
        }

        return (
          <img
            key={scene.id}
            src={getSceneImageSrc(scene)}
            onError={() => handleSceneError(scene)}
            alt=""
            decoding="async"
            fetchPriority="low"
            className={transitionClass}
            style={{ opacity, objectPosition: scene.position ?? 'center' }}
          />
        );
      })}
    </div>
  );
}