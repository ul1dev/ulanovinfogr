import { MessageCircle, FileText, Check } from 'lucide-react';

const Pricing = () => {
  const pricingItems = [
    {
      title: "Обложка карточки",
      price: "700 ₽",
      description: "Основная карточка товара для маркетплейса"
    },
    {
      title: "Дополнительный слайд",
      price: "500 ₽/шт",
      description: "Каждый дополнительный слайд с информацией"
    },
    {
      title: "3 обложки для теста CTR",
      price: "1 800 ₽",
      description: "Тестирование разных вариантов дизайна"
    },
    {
      title: "Замена/ресайз товара, цвета, вкуса",
      price: "50% от бюджета",
      description: "Адаптация под разные варианты товара"
    }
  ];

  const standardPackage = {
    title: "Стандартный пакет",
    price: "3 000 ₽",
    description: "1 обложка + 5 дополнительных слайдов",
    features: [
      "1 основная обложка",
      "5 информационных слайдов",
      "PSD-исходник бесплатно",
      "2 круга правок бесплатно"
    ]
  };

  const additionalServices = [
    "PSD-исходник — бесплатно",
    "2 круга правок — бесплатно",
    "Каждый дополнительный круг правок — 200 ₽"
  ];

  return (
    <section id="pricing" className="py-section">
      <div className="container mx-auto max-w-site px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Прайс
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Прозрачные цены без скрытых платежей. Качественный результат по фиксированной стоимости
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Основные услуги */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-heading font-bold mb-6">Основные услуги</h3>
            
            {pricingItems.map((item, index) => (
              <div 
                key={index}
                className="card-elegant flex items-center justify-between animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
                <div className="text-right ml-6">
                  <div className="text-2xl font-bold text-primary">{item.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Рекомендуемый пакет */}
          <div className="animate-scale-in">
            <div className="card-elegant relative overflow-hidden">
              {/* Бейдж "Популярно" */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                Популярно
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold mb-4">{standardPackage.title}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{standardPackage.price}</div>
                <p className="text-muted-foreground mb-6">{standardPackage.description}</p>

                <div className="space-y-3 mb-8">
                  {standardPackage.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://t.me/ulanov_dsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Заказать пакет
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительные услуги */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-elegant animate-fade-in">
            <h3 className="text-xl font-heading font-semibold mb-4">Что входит в стоимость</h3>
            <div className="space-y-3">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elegant animate-fade-in">
            <h3 className="text-xl font-heading font-semibold mb-4">Особые условия</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              При большом объёме и долгосрочном сотрудничестве — индивидуальные условия и скидки.
            </p>
            <a
              href="https://t.me/ulanov_infogr/233"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              <FileText className="w-4 h-4 mr-2" />
              Подробный прайс
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-scale-in">
          <div className="card-elegant max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-muted-foreground mb-6">
              Напишите мне в Telegram, и мы подберём оптимальное решение для ваших задач
            </p>
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Обсудить проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;