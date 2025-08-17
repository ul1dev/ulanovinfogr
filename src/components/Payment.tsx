import { CreditCard, ExternalLink, Shield, Clock } from 'lucide-react';

const Payment = () => {
  const paymentFeatures = [
    {
      icon: CreditCard,
      title: "Банковский перевод",
      description: "Удобная оплата на карту или через СБП"
    },
    {
      icon: Shield,
      title: "Предоплата 50%",
      description: "Безопасность для обеих сторон"
    },
    {
      icon: Clock,
      title: "Финал после утверждения",
      description: "Доплачиваете после получения результата"
    }
  ];

  return (
    <section className="py-section-sm bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto max-w-site px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Оплата
            </h2>
            <p className="text-muted-foreground">
              Прозрачные условия оплаты для вашего спокойствия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {paymentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-colors animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Оплата банковским переводом. Предоплата 50% перед началом работ.
            </p>
            <a
              href="https://t.me/ulanovdmitriy_info/6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-hover transition-colors text-sm"
            >
              Подробности об оплате
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;