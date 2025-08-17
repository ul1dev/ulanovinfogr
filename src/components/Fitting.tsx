import { Eye, ExternalLink, MessageCircle } from 'lucide-react';

const Fitting = () => {
  return (
    <section id="fitting" className="py-section">
      <div className="container mx-auto max-w-site px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Примерка в выдаче
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Вставляю вашу обложку в реальную выдачу маркетплейса, 
              чтобы увидеть, как она выделяется среди конкурентов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Визуальная часть */}
            <div className="animate-scale-in">
              <div className="card-elegant p-8">
                <div className="space-y-4">
                  {/* Имитация выдачи маркетплейса */}
                  <div className="text-center mb-6">
                    <h3 className="font-semibold text-lg mb-2">Выдача Wildberries</h3>
                    <p className="text-sm text-muted-foreground">Визуальный мокап вашей карточки</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {/* Конкуренты (серые) */}
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-xs text-muted-foreground text-center">
                        Конкурент<br/>1
                      </div>
                    </div>
                    
                    {/* Ваша карточка (выделенная) */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center border-2 border-primary">
                      <div className="text-xs text-primary text-center font-semibold">
                        Ваша<br/>карточка
                      </div>
                    </div>
                    
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-xs text-muted-foreground text-center">
                        Конкурент<br/>2
                      </div>
                    </div>
                    
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-xs text-muted-foreground text-center">
                        Конкурент<br/>3
                      </div>
                    </div>
                    
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-xs text-muted-foreground text-center">
                        Конкурент<br/>4
                      </div>
                    </div>
                    
                    <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-xs text-muted-foreground text-center">
                        Конкурент<br/>5
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4">
                    <div className="inline-flex items-center space-x-2 text-sm text-primary">
                      <Eye className="w-4 h-4" />
                      <span>Ваша карточка выделяется!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Текстовая часть */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-heading font-bold">
                Зачем нужна примерка?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Реальная картина</strong> — 
                    видите, как карточка смотрится среди конкурентов
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Контрастность</strong> — 
                    проверяем, достаточно ли выделяется дизайн
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Корректировки</strong> — 
                    при необходимости дорабатываем детали
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Уверенность</strong> — 
                    запускаете рекламу с пониманием результата
                  </p>
                </div>
              </div>

              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Что вы получаете:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Визуальный мокап в реальной выдаче</li>
                  <li>• Сравнение с конкурентами</li>
                  <li>• Рекомендации по улучшению</li>
                  <li>• Финальную карточку для запуска</li>
                </ul>
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
              Хочу примерку
            </a>
            
            <div>
              <a
                href="https://t.me/ulanovdmitriy_info/7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors text-sm"
              >
                Подробнее о примерке
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitting;