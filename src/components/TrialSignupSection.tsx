import { useState } from "react";
import AnimatedElement from "./AnimatedElement";
import { sendTrialSignupEmail } from "../lib/emailjs";

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function TrialSignupSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    agreed: false,
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendTrialSignupEmail({
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
      });
      setStatus('success');
      setFormData({ name: "", contact: "", email: "", agreed: false });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 bg-cover bg-center texture-bg" style={{ backgroundImage: 'url(/textures/blue.webp)' }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side — text */}
          <AnimatedElement animation="fade-in-left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Почни говорити{" "}
                <span className="text-brand-orange">
                  словацькою
                </span>{" "}
                вже на пробному!
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Заповни форму і ми підберемо для тебе зручний час.
              </p>
            </div>
          </AnimatedElement>

          {/* Right side — form */}
          <AnimatedElement animation="fade-in-right" delay={100}>
            {status === 'success' ? (
              <div
                className="rounded-3xl p-8 bg-cover bg-center flex flex-col items-center justify-center text-center gap-4 min-h-[300px]"
                style={{ backgroundImage: 'url(/textures/white.webp)' }}
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-brand-dark">Дякуємо!</h3>
                <p className="text-brand-dark/70 text-base leading-relaxed">
                  Ми отримали вашу заявку і зв'яжемося з вами найближчим часом.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-6 py-3 bg-brand-orange text-white rounded-2xl font-bold text-sm hover:bg-brand-orange/90 transition-all duration-300"
                >
                  Надіслати ще раз
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl p-8 bg-cover bg-center"
                style={{ backgroundImage: 'url(/textures/white.webp)' }}
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

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium mb-4">
                    Помилка надсилання. Спробуйте ще раз або напишіть нам напряму.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold text-base
                           hover:bg-brand-orange/90 transition-all duration-300
                           transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status === 'sending' ? 'Надсилаємо...' : 'Записатися на пробний урок ✍️'}
                </button>

                <p className="text-center text-xs text-brand-dark/40 mt-3">
                  Напишемо в месенджер
                </p>
              </form>
            )}
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
