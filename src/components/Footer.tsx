import { Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const navLinks = [
  { label: 'Про нас', href: '#about' },
  { label: 'Формати', href: '#formats' },
  { label: 'Ціни', href: '#pricing' },
  { label: 'Викладачі', href: '#teachers' },
  { label: 'Відгуки', href: '#testimonials' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <AnimatedElement animation="fade-in-up" delay={0}>
            <div className="md:col-span-2">
              <img
                src="/logo/img_3159.png"
                alt="FOCUS School"
                className="h-16 w-auto mb-6"
              />
              <p className="text-white/70 leading-relaxed max-w-md mb-6">
                Онлайн школа словацької мови для тих, хто хоче впевнено говорити в реальних життєвих ситуаціях.
              </p>
              <div className="flex items-center gap-2 text-white/50">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Словаччина</span>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay={100}>
            <div>
              <h3 className="font-bold text-lg mb-6">Навігація</h3>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in-up" delay={200}>
            <div>
              <h3 className="font-bold text-lg mb-6">Контакти</h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@fokus.sk"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@fokus.sk</span>
                </a>
              </div>

              <h3 className="font-bold text-lg mt-8 mb-4">Соцмережі</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-orange transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-blue transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            2024 FOCUS School. Всі права захищені.
          </p>
          <p className="text-white/30 text-sm">
            ФОКУС. ДІЯ. РЕЗУЛЬТАТ.
          </p>
        </div>
      </div>
    </footer>
  );
}
