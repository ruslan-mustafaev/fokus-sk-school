import { useState, useRef } from "react";
import AnimatedElement from "./AnimatedElement";
import { sendTrialSignupEmail } from "../lib/emailjs";

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

/* ── Валидация ────────────────────────────────────────── */

const BANNED_WORDS = [
  'fuck','shit','bitch','ass','dick','pussy','cunt','bastard',
  'сука','блять','блядь','хуй','пизд','ебат','ёбан','нахуй','пошёл нах',
  'kurva','piča','kokot','jebať','do piče','prdel',
];

function containsBannedWords(text: string): boolean {
  const lower = text.toLowerCase();
  return BANNED_WORDS.some((w) => lower.includes(w));
}

function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (trimmed.length < 2) return "Ім'я має містити мінімум 2 символи";
  if (trimmed.length > 50) return "Ім'я занадто довге";
  if (/\d/.test(trimmed)) return "Ім'я не може містити цифри";
  if (!/^[\p{L}\s'-]+$/u.test(trimmed)) return "Ім'я містить недопустимі символи";
  if (containsBannedWords(trimmed)) return "Будь ласка, введіть справжнє ім'я";
  return null;
}

function validateContact(contact: string): string | null {
  const trimmed = contact.trim();
  if (trimmed.length < 3) return "Введіть телефон або Telegram";

  // Telegram username
  if (trimmed.startsWith('@')) {
    if (!/^@[a-zA-Z0-9_]{4,32}$/.test(trimmed)) return "Невірний формат Telegram (мін. 5 символів після @)";
    return null;
  }

  // Phone — должен начинаться с + или 0
  if (!trimmed.startsWith('+') && !trimmed.startsWith('0')) {
    return "Введіть номер у форматі +380 / +421 або Telegram @username";
  }

  const digitsOnly = trimmed.replace(/[\s\-\(\)\.+]/g, '');
  if (!/^\d+$/.test(digitsOnly)) return "Номер має містити лише цифри";
  if (digitsOnly.length < 7) return "Телефон занадто короткий (мін. 7 цифр)";
  if (digitsOnly.length > 15) return "Телефон занадто довгий";

  // Повтор одной цифры: 0000000
  if (/^(\d)\1+$/.test(digitsOnly)) return "Введіть справжній номер телефону";

  // Мало уникальных цифр — мусор
  const unique = new Set(digitsOnly.split('')).size;
  if (digitsOnly.length >= 9 && unique <= 3) return "Введіть справжній номер телефону";

  return null;
}

function validateEmail(email: string): string | null {
  if (!email.trim()) return null; // email необов'язковий
  const trimmed = email.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!re.test(trimmed)) return "Невірний формат email";
  // Локальная часть — минимум 3 символа и хотя бы 1 буква
  const local = trimmed.split('@')[0];
  if (local.length < 3) return "Email занадто короткий";
  if (!/[a-zA-Z]/.test(local)) return "Введіть справжній email";
  return null;
}

function validateAllFields(name: string, contact: string, email: string): string | null {
  const combined = `${name} ${contact} ${email}`;
  if (containsBannedWords(combined)) return "Форма містить неприпустимий текст";
  return null;
}

/* ── Компонент ────────────────────────────────────────── */

export default function TrialSignupSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    agreed: false,
    website: "", // honeypot
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSubmitRef = useRef<number>(0);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    const nameErr = validateName(formData.name);
    if (nameErr) newErrors.name = nameErr;

    const contactErr = validateContact(formData.contact);
    if (contactErr) newErrors.contact = contactErr;

    const emailErr = validateEmail(formData.email);
    if (emailErr) newErrors.email = emailErr;

    const globalErr = validateAllFields(formData.name, formData.contact, formData.email);
    if (globalErr) newErrors.global = globalErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot — бот заполнит скрытое поле
    if (formData.website) return;

    // Rate limit — не чаще 1 раз в 10 секунд
    const now = Date.now();
    if (now - lastSubmitRef.current < 10_000) {
      setErrors({ global: "Зачекайте трохи перед повторною відправкою" });
      return;
    }

    if (!validate()) return;

    lastSubmitRef.current = now;
    setStatus('sending');
    try {
      await sendTrialSignupEmail({
        name: formData.name.trim(),
        contact: formData.contact.trim(),
        email: formData.email.trim(),
      });
      setStatus('success');
      setFormData({ name: "", contact: "", email: "", agreed: false, website: "" });
      setErrors({});
    } catch {
      setStatus('error');
    }
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
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
                {/* Honeypot — невидимое поле для ботов */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-brand-dark/60 uppercase tracking-wide mb-1">
                      Ім'я
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={50}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        clearError('name');
                      }}
                      className={`w-full border-b-2 ${errors.name ? 'border-red-400' : 'border-brand-dark/20'} focus:border-brand-blue outline-none py-2
                               text-brand-dark placeholder-brand-dark/30 transition-colors duration-200 bg-transparent`}
                      placeholder="Твоє ім'я"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-dark/60 uppercase tracking-wide mb-1">
                      Телефон або нік Telegram
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={40}
                      value={formData.contact}
                      onChange={(e) => {
                        setFormData({ ...formData, contact: e.target.value });
                        clearError('contact');
                      }}
                      className={`w-full border-b-2 ${errors.contact ? 'border-red-400' : 'border-brand-dark/20'} focus:border-brand-blue outline-none py-2
                               text-brand-dark placeholder-brand-dark/30 transition-colors duration-200 bg-transparent`}
                      placeholder="+421..., +380... або @username"
                    />
                    {errors.contact && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.contact}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-dark/60 uppercase tracking-wide mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      maxLength={100}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        clearError('email');
                      }}
                      className={`w-full border-b-2 ${errors.email ? 'border-red-400' : 'border-brand-dark/20'} focus:border-brand-blue outline-none py-2
                               text-brand-dark placeholder-brand-dark/30 transition-colors duration-200 bg-transparent`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                    )}
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

                {(status === 'error' || errors.global) && (
                  <p className="text-red-500 text-sm font-medium mb-4">
                    {errors.global || 'Помилка надсилання. Спробуйте ще раз або напишіть нам напряму.'}
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