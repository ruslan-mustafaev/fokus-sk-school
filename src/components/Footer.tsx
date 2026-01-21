import { Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/logo/img_3159.png"
              alt="Фокус"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 leading-relaxed">
              Онлайн-школа словацької мови з теплом і підтримкою.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакти</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@fokus.sk"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@fokus.sk</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Слідкуй за нами</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>© 2024 Фокус - Онлайн школа словацької мови. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
