import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const teachers = [
  {
    name: 'Юля',
    role: 'Викладач',
    videoId: 'NRqoDtDHx3s',
    hasVideo: true,
  },
  {
    name: 'Яна',
    role: 'Викладач',
    videoId: null,
    hasVideo: false,
    initials: 'Я',
    color: 'bg-brand-orange',
  },
  {
    name: 'Настя',
    role: 'Викладач',
    videoId: 'xNHj_Ijuod4',
    hasVideo: true,
  },
  {
    name: 'Настя',
    role: 'Викладач',
    videoId: 'KmgPR349Lko',
    hasVideo: true,
  },
  {
    name: 'Яна',
    role: 'Викладач',
    videoId: null,
    hasVideo: false,
    initials: 'Я',
    color: 'bg-brand-blue',
  },
  {
    name: 'Віка',
    role: 'Викладач',
    videoId: 'DafLvRLuwI8',
    hasVideo: true,
  },
  {
    name: 'Lenka',
    role: 'Носійка, що говорить українською',
    videoId: 'xp0-08DLXwI',
    hasVideo: true,
  },
  {
    name: 'Gabriela',
    role: 'Носійка мови',
    videoId: 'WQgluo4_dt8',
    hasVideo: true,
  },
  {
    name: 'Даша',
    role: 'Викладач',
    videoId: null,
    hasVideo: false,
    initials: 'Д',
    color: 'bg-brand-orange',
  },
];

function TeacherCard({ teacher }: { teacher: typeof teachers[0] }) {
  if (teacher.hasVideo && teacher.videoId) {
    return (
      <div className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${teacher.videoId}`}
            title={teacher.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-brand-dark">{teacher.name}</h3>
          <p className="text-sm text-brand-dark/60">{teacher.role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div
        className={`w-full h-48 ${(teacher as { color?: string }).color ?? 'bg-brand-blue'} flex items-center justify-center`}
      >
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
          <span className="text-4xl font-black text-white">
            {(teacher as { initials?: string }).initials ?? teacher.name[0]}
          </span>
        </div>
        <div className="absolute">
          <Play className="w-8 h-8 text-white/30" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-brand-dark">{teacher.name}</h3>
        <p className="text-sm text-brand-dark/60">{teacher.role}</p>
      </div>
    </div>
  );
}

export default function TeachersSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -320 : 320,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="teachers"
      className="relative py-24 px-4 overflow-hidden bg-brand-dark"
      style={{
        backgroundImage: 'url(/IMG_4314_copy.JPG)',
        backgroundSize: '100% auto',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <AnimatedElement animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Не сухі резюме, а живі люди,{' '}
              <span className="text-brand-orange font-pangolin">які люблять свою справу</span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in-up" delay={100}>
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Кожен викладач FOCUS — це людина, яка по-справжньому горить своєю справою.
              Для нас урок — це не процес, а результат. Ми працюємо не "для галочки",
              а щоб довести кожного учня до впевненого рівня та реальних змін.
            </p>
          </AnimatedElement>
        </div>

        {/* Carousel */}
        <AnimatedElement animation="fade-in-up" delay={200}>
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
                       w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center
                       hover:bg-brand-orange hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Cards */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto py-4 px-2 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {teachers.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20
                       w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center
                       hover:bg-brand-orange hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </AnimatedElement>

      </div>
    </section>
  );
}
