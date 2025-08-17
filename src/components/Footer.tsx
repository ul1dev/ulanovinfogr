import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-site px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/b49e4a25-3745-4ef4-a699-f214c1757792.png"
                alt="Дмитрий Уланов"
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-xl font-heading font-bold">Дмитрий Уланов</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Дизайнер инфографики, специализируюсь на продающих карточках для маркетплейсов
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <div className="space-y-2 text-sm text-white/70">
              <div>Дизайн карточек</div>
              <div>Тест CTR</div>
              <div>Примерка в выдаче</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="https://t.me/ulanov_dsgn" className="text-white/70 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="https://t.me/ulanov_portfol" className="text-white/70 hover:text-white transition-colors">
                Портфолио
              </a>
              <a href="https://t.me/ulanov_otzvv" className="text-white/70 hover:text-white transition-colors">
                Отзывы
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <div>© 2025 Дмитрий Уланов. Все права защищены.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>
      </div>
      
      {/* Кнопка "Наверх" */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;