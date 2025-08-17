import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const Hero = () => {
  const metrics = [
    "Wildberries / Ozon",
    "Быстрые сроки",
    "2 круга правок бесплатно"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-light/10 to-background"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-site px-4 py-section relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Главный заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 animate-fade-in">
            Дизайн инфографики,{' '}
            <span className="text-gradient">который продаёт</span>{' '}
            на маркетплейсах
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-up max-w-3xl mx-auto">
            Создаю визуальные карточки, которые выделяют товар в выдаче 
            и убеждают купить за 3 секунды
          </p>

          {/* Метрики */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 animate-scale-in">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{metric}</span>
              </div>
            ))}
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero group"
            >
              Заказать дизайн
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Написать в Telegram
            </a>
          </div>

          {/* Декоративный элемент */}
          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-primary/10 animate-pulse">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Прокрутка вниз индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;