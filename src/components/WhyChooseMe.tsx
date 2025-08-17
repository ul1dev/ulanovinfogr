import { 
  Brain, 
  Clock, 
  MessageSquare, 
  Palette, 
  Target, 
  Zap 
} from 'lucide-react';

const WhyChooseMe = () => {
  const features = [
    {
      icon: Brain,
      title: "Работаю с нейросетями",
      description: "Создаю уникальные детализированные элементы и фоны"
    },
    {
      icon: Clock,
      title: "Быстрая работа",
      description: "Не затягиваю сроки, всегда укладываюсь в договорённости"
    },
    {
      icon: MessageSquare,
      title: "Всегда на связи",
      description: "Быстро отвечаю, открыт к диалогу и обратной связи"
    },
    {
      icon: Palette,
      title: "Гибкость",
      description: "Учту все пожелания, внесу правки и корректировки"
    },
    {
      icon: Target,
      title: "Работаю с умом",
      description: "Адаптирую дизайн под специфику площадки (Wildberries, Ozon)"
    },
    {
      icon: Zap,
      title: "Фокус на результат",
      description: "Красивого мало — важно продать. Рассказываю о товаре за 3 секунды"
    }
  ];

  return (
    <section id="why" className="py-section">
      <div className="container mx-auto max-w-site px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Почему выбирают меня
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Красивого мало — важно продать. Я визуально рассказываю о товаре за 3 секунды
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card-elegant text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Выделенная цитата */}
        <div className="mt-16 text-center animate-scale-in">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              "Красивого мало — важно продать"
            </blockquote>
            <p className="text-lg text-muted-foreground">
              Я визуально рассказываю о товаре за 3 секунды и делаю так, 
              чтобы покупатель не ушёл без заказа
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;