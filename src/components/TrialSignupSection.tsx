import { useState } from "react";
import AnimatedElement from "./AnimatedElement";

export default function TrialSignupSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url(/IMG_7364.JPEG)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side — text */}
          <AnimatedElement animation="fade-in-left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Почни говорити{" "}
                <span className="text-brand-orange font-pangolin">
                  словацькою
                </span>{" "}
                вже на пробному!
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Заповни форму і ми підберемо для тебе зручний час. Перший урок —
                безкоштовно!
              </p>
            </div>
          </AnimatedElement>

          {/* Right side — form */}
          <AnimatedElement animation="fade-in-right" delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark/60 uppercase tracking-wide mb-1">
                    Ім'я
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full border-b-2 border-brand-dark/20 focus:border-brand-blue outline-none py-2
                             text-brand-dark placeholder-brand-dark/30 transition-colors duration-200 bg-transparent"
                    placeholder="Твоє ім'я"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark/60 uppercase tracking-wide mb-1">
                    Телефон або нік Telegram
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full border-b-2 border-brand-dark/20 focus:border-brand-blue outline-none py-2
                             text-brand-dark placeholder-brand-dark/30 transition-colors duration-200 bg-transparent"
                    placeholder="+380... або @username"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark/60 uppercase tracking-wide mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b-2 border-brand-dark/20 focus:border-brand-blue outline-none py-2
                             text-brand-dark placeholder-brand-dark/30 transition-colors duration-200 bg-transparent"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreed}
                  onChange={(e) =>
                    setFormData({ ...formData, agreed: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 accent-brand-blue flex-shrink-0"
                />
                <span className="text-xs text-brand-dark/60 leading-relaxed">
                  Я підтверджую, що ознайомився(-лась) та погоджуюся з умовами
                  Політики конфіденційності
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold text-base
                         hover:bg-brand-orange/90 transition-all duration-300 shadow-lg hover:shadow-xl
                         transform hover:-translate-y-0.5"
              >
                Записатися на пробний урок ✍️
              </button>

              <p className="text-center text-xs text-brand-dark/40 mt-3">
                Напишемо в месенджер
              </p>
            </form>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
