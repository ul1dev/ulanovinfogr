import { BarChart3, ExternalLink, MessageCircle } from 'lucide-react';

const CTRTest = () => {
  const testSteps = [
    {
      title: "Анализ конкурентов",
      description: "Изучаю успешные карточки в вашей нише"
    },
    {
      title: "3 варианта дизайна",
      description: "Создаю обложки с разными цветами, шрифтами, эмоциями"
    },
    {
      title: "Тестирование",
      description: "Запускаете все варианты и смотрите статистику"
    },
    {
      title: "Выбор лучшего",
      description: "Определяете самый кликабельный вариант"
    }
  ];

  return (
    <section id="ctr" className="py-section bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto max-w-site px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Тест CTR — 3 обложки
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Тестируем кликабельность: делаю 3 варианта обложки на основе анализа конкурентов, 
              чтобы понять, что работает лучше
            </p>
          </div>

          {/* Процесс тестирования */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {testSteps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Преимущества */}
          <div className="card-elegant mb-12 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">варианта дизайна</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1800 ₽</div>
                <div className="text-sm text-muted-foreground">фиксированная цена</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">+40%</div>
                <div className="text-sm text-muted-foreground">средний рост CTR</div>
              </div>
            </div>
          </div>

          {/* Объяснение */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-heading font-bold">
                Почему важно тестировать?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Разные цвета</strong> по-разному воздействуют на целевую аудиторию
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Эмоции и триггеры</strong> влияют на решение о покупке
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Шрифты и композиция</strong> определяют восприятие товара
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="card-elegant p-8 text-center bg-gradient-to-br from-primary/5 to-primary/10">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h4 className="text-xl font-semibold mb-4">Результат тестирования</h4>
                <p className="text-muted-foreground text-sm">
                  Вы получаете данные о том, какой дизайн лучше конвертирует посетителей в покупателей, 
                  и можете использовать этот вариант для максимальных продаж
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4 animate-fade-in">
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Написать за консультацией
            </a>
            
            <div>
              <a
                href="https://t.me/ulanovdmitriy_info/5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors text-sm"
              >
                Подробнее о тестировании CTR
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTRTest;