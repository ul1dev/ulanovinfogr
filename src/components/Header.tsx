import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Обо мне', href: '#about' },
    { label: 'Почему я', href: '#why' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Прайс', href: '#pricing' },
    { label: 'Тест CTR', href: '#ctr' },
    { label: 'Примерка', href: '#fitting' },
    { label: 'Этапы', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Контакты', href: '#contacts' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`sticky-header transition-all duration-300 ${
        isScrolled ? 'shadow-medium' : ''
      }`}>
        <div className="container mx-auto max-w-site px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Логотип */}
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/b49e4a25-3745-4ef4-a699-f214c1757792.png"
                alt="Дмитрий Уланов"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-heading font-bold text-xl">Дмитрий Уланов</span>
            </div>

            {/* Навигация для десктопа */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA кнопка для десктопа */}
            <div className="hidden lg:flex">
              <a
                href="https://t.me/ulanov_dsgn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Telegram
              </a>
            </div>

            {/* Мобильное меню кнопка */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent rounded-xl transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="container mx-auto max-w-site px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://t.me/ulanov_dsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-4 text-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать в Telegram
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Плавающая кнопка для мобильных */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a
          href="https://t.me/ulanov_dsgn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero shadow-glow"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Telegram
        </a>
      </div>
    </>
  );
};

export default Header;