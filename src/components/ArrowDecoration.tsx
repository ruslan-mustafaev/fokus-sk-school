export default function ArrowDecoration() {
  return (
    <div className="relative w-full flex items-center justify-center py-16 md:py-24">
      <div className="relative flex items-center justify-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto px-4">
        <svg
          className="hidden md:block w-20 h-32 md:w-24 md:h-40 text-brand-orange flex-shrink-0"
          viewBox="0 0 100 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 50 180 Q 30 140 20 80 Q 10 40 50 20" />
          <polyline points="50,20 40,35 50,30" />
        </svg>

        <div className="flex-1 max-w-2xl">
          <img
            src="/dekor/23.png"
            alt="Декоративный элемент"
            className="w-full h-auto"
          />
        </div>

        <svg
          className="hidden md:block w-20 h-32 md:w-24 md:h-40 text-brand-orange flex-shrink-0 scale-x-[-1]"
          viewBox="0 0 100 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 50 180 Q 30 140 20 80 Q 10 40 50 20" />
          <polyline points="50,20 40,35 50,30" />
        </svg>
      </div>

      <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
        <svg
          className="w-12 h-20 text-brand-orange"
          viewBox="0 0 100 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 50 180 Q 30 140 20 80 Q 10 40 50 20" />
          <polyline points="50,20 40,35 50,30" />
        </svg>
      </div>

      <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 scale-x-[-1]">
        <svg
          className="w-12 h-20 text-brand-orange"
          viewBox="0 0 100 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 50 180 Q 30 140 20 80 Q 10 40 50 20" />
          <polyline points="50,20 40,35 50,30" />
        </svg>
      </div>
    </div>
  );
}
