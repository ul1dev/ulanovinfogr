import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto max-w-site px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4">Дмитрий Уланов</h3>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Дизайнер инфографики, специализируюсь на продающих карточках для маркетплейсов
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <div className="space-y-2 text-sm text-background/70">
              <div>Дизайн карточек</div>
              <div>Тест CTR</div>
              <div>Примерка в выдаче</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-background/70">
              <a href="https://t.me/ulanov_dsgn" className="hover:text-background transition-colors">Telegram</a>
              <a href="https://t.me/ulanov_portfol" className="hover:text-background transition-colors">Портфолио</a>
              <a href="https://t.me/ulanov_otzvv" className="hover:text-background transition-colors">Отзывы</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <div>© 2024 Дмитрий Уланов. Все права защищены.</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-background transition-colors">Оферта</a>
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