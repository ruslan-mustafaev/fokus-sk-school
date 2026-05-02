import { ArrowRight, Check, Clock, Users } from "lucide-react";
import AnimatedElement from "./AnimatedElement";
import { renderLapkoiText } from "./renderLapkoiText";

type PricingItem = { label: string; price: string; old?: string };

const courses: {
  question: string;
  title: string;
  duration: string | null;
  frequency: string;
  lessonDuration: string;
  features: string[];
  pricing: PricingItem[];
  accent: string;
  badgeColor: string;
}[] = [
  {
    question: "Ти новачок?",
    title: "Курс А1–А2",
    duration: "4 місяці",
    frequency: "2 рази/тиждень",
    lessonDuration: "60 хв урок",
    features: [
      "міні-групи (3–4 учні)",
      "+24 відео-уроків",
      "конспекти",
      "картки вивчення слів",
      "життєві теми",
    ],
    pricing: [
      { label: "1 місяць навчання", price: "88 євро" },
      { label: "2 місяці навчання", price: "176 євро", old: "166 євро" },
      { label: "3 місяці навчання", price: "264 євро", old: "230 євро" },
    ],
    accent: "border-brand-blue",
    badgeColor: "bg-brand-blue",
  },
  {
    question: "Ти вже трошки говориш, але з помилками?",
    title: "Курс А2",
    duration: "3 місяці",
    frequency: "2 рази/тиждень",
    lessonDuration: "60 хв урок",
    features: [
      "міні-групи (3–4 учні)",
      "+16 відео-уроків",
      "конспекти",
      "картки вивчення слів",
      "життєві теми",
    ],
    pricing: [
      { label: "1 місяць навчання", price: "96 євро" },
      { label: "2 місяці навчання", price: "152 євро", old: "192 євро" },
      { label: "3 місяці навчання", price: "230 євро", old: "288 євро" },
    ],
    accent: "border-brand-orange",
    badgeColor: "bg-brand-orange",
  },
  {
    question: "Хочеш впевнено говорити словацькою?",
    title: "Курс В1",
    duration: "3 місяці",
    frequency: "2 рази/тиждень",
    lessonDuration: "60 хв урок",
    features: [
      "міні-групи (3–4 учні)",
      "багато розмовної практики",
      "сленг та словацькі тонкощі",
      "конспекти",
      "граматичні конструкції",
    ],
    pricing: [
      { label: "1 місяць навчання", price: "96 євро" },
      { label: "2 місяці навчання", price: "152 євро", old: "192 євро" },
      { label: "3 місяці навчання", price: "230 євро", old: "288 євро" },
    ],
    accent: "border-brand-blue",
    badgeColor: "bg-brand-blue",
  },
];

const additionalFormats = [
  {
    title: "Індивідуальні уроки",
    benefits: [
      "Програма під твої цілі: іспит, співбесіда, робота",
      "Гнучкий графік",
      "60 хв",
      "1–3 рази на тиждень",
    ],
    price: "18 євро/урок",
    priceNote: null as string | null,
    accent: "border-brand-blue",
  },
  {
    title: "Парні уроки",
    benefits: [
      "Навчайся разом з другом/партнером",
      "Гнучкий графік, але вигідніша ціна",
      "60 хв",
      "2 рази на тиждень",
    ],
    price: "13 євро/урок",
    priceNote: null as string | null,
    accent: "border-brand-orange",
  },
  {
    title: "Курси для студентів",
    benefits: [
      "Теми для студентського життя",
      "Додаткові відео-уроки для закріплення",
      "Особистий кабінет кожного учня",
      "Конспекти та карточки для вивчення слів",
      "міні-групи (3–4 учні)",
    ],
    price: "72 євро/місяць",
    priceNote: "6–12 місяців навчання" as string | null,
    accent: "border-brand-blue",
  },
];

export default function FormatsSection({
  onQuizClick,
}: {
  onQuizClick?: () => void;
}) {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="formats" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <AnimatedElement animation="fade-in-down">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              <span className="uppercase tracking-wide">Обери свій</span>{" "}
              <span className="text-brand-orange italic font-lapkoi">
                {renderLapkoiText("Формат")}
              </span>{" "}
              <span className="uppercase tracking-wide">навчання</span>
            </h2>
          </AnimatedElement>
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {courses.map((course, index) => (
            <AnimatedElement
              key={index}
              animation={index % 2 === 0 ? "fade-in-left" : "fade-in-up"}
              delay={(index * 100) as 0 | 100 | 200 | 300}
            >
              <div
                className={`rounded-3xl p-8 transition-all duration-500 transform hover:-translate-y-2 border-t-4 ${course.accent} h-full flex flex-col bg-cover bg-center`}
                style={{ backgroundImage: "url(/textures/white.webp)" }}
              >
                <p className="text-brand-blue font-black text-lg mb-1">
                  {course.question}
                </p>
                <h3 className="text-base font-semibold text-brand-dark/50 mb-1">
                  {course.title}
                </h3>
                {course.duration && (
                  <span
                    className={`inline-block text-white text-xs font-bold px-3 py-1 rounded-full mb-4 ${course.badgeColor}`}
                  >
                    {course.duration}
                  </span>
                )}

                <div className="flex items-center gap-4 mb-5 text-sm text-brand-dark/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.lessonDuration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.frequency}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-blue" />
                      </div>
                      <span className="text-brand-dark/80 text-base">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-brand-light space-y-3">
                  {course.pricing.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-brand-dark/60">{p.label}</span>
                      <div className="text-right">
                        {p.old && (
                          <div className="text-xs text-brand-dark/40 line-through leading-none mb-0.5">
                            {p.old}
                          </div>
                        )}
                        <div className="text-lg font-bold leading-none">
                          {p.old ? (
                            <span className="text-brand-orange">{p.price}</span>
                          ) : (
                            <span className="text-brand-blue">{p.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="mt-5 w-full py-3 bg-brand-orange text-white rounded-2xl font-bold text-sm
                           hover:bg-brand-orange/90 transition-all duration-300"
                >
                  Записатись
                </button>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Additional formats */}
        <AnimatedElement animation="fade-in-up" delay={100}>
          <div
            className="rounded-3xl p-8 md:p-12 mb-12 bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: "url(/textures/orange.webp)" }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">
              Також ти можеш обрати:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalFormats.map((fmt, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-6 border-l-4 ${fmt.accent} transition-all duration-300 bg-cover bg-center`}
                  style={{ backgroundImage: "url(/textures/white.webp)" }}
                >
                  <h4 className="text-lg font-bold text-brand-dark mb-4">
                    {fmt.title}
                  </h4>
                  <ul className="space-y-2 mb-5">
                    {fmt.benefits.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-base text-brand-dark/70"
                      >
                        <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-brand-orange font-bold text-xl">
                    {fmt.price}
                  </div>
                  {fmt.priceNote && (
                    <div className="text-brand-dark/50 text-sm mt-1">
                      {fmt.priceNote}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Quiz CTA */}
        <AnimatedElement animation="scale-in" delay={300}>
          <div className="mt-4 text-center">
            <div
              className="rounded-3xl p-8 md:p-10 max-w-2xl mx-auto bg-cover bg-center"
              style={{ backgroundImage: "url(/textures/white.webp)" }}
            >
              <p className="text-xl text-brand-dark/70 mb-6">
                Не знаєш який формат обрати?
              </p>
              <button
                onClick={onQuizClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white
                         rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300
                         transform hover:-translate-y-1"
              >
                Пройди тест на рівень
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}