import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Сколько времени занимает проект?",
      answer: "Обычно 1–3 дня на базовый пакет, зависит от объёма и скорости обратной связи. Простые карточки могу сделать за день, сложные проекты с несколькими слайдами — за 2-3 дня."
    },
    {
      question: "Что входит в правки?",
      answer: "Два круга правок на утверждённую концепцию включены в стоимость. Это могут быть изменения цветов, текстов, расположения элементов. Кардинальная смена концепции считается новым заказом. Дальнейшие правки — 200 ₽ за круг."
    },
    {
      question: "Можете работать по моему ТЗ/брендбуку?",
      answer: "Да, обязательно! Если у вас есть брендбук, логотип или фирменные цвета — адаптирую дизайн под ваш стиль. Присылайте все материалы, и я учту каждую деталь."
    },
    {
      question: "Делаете тексты и тезисы для слайдов?",
      answer: "Да, помогу со структурой контента и продающими триггерами под конкретную площадку. Знаю, какие тезисы работают на Wildberries, Ozon и других маркетплейсах."
    },
    {
      question: "Можно ли получить исходники?",
      answer: "Да, PSD-исходники передаю бесплатно с каждым заказом. Также могу подготовить файлы в других форматах по вашему запросу — PNG, JPG, PDF."
    },
    {
      question: "Вы работаете по договору и с предоплатой?",
      answer: "Работаю с предоплатой 50% перед началом работ, остальные 50% после утверждения финального результата. Оплата удобным способом — банковским переводом."
    },
    {
      question: "Подготовите разные форматы под WB/Ozon?",
      answer: "Да, знаю требования всех основных площадок и подгоню дизайн под нужные размеры и форматы. Wildberries, Ozon, Яндекс.Маркет — везде свои нюансы, которые я учитываю."
    },
    {
      question: "Делаете анализ конкурентов?",
      answer: "Да, анализ конкурентов включён в базовый процесс работы. Изучаю успешные карточки в вашей нише, чтобы сделать дизайн, который будет выделяться и продавать лучше."
    }
  ];

  return (
    <section id="faq" className="py-section">
      <div className="container mx-auto max-w-site px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Частые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ответы на вопросы, которые чаще всего задают клиенты
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div 
                key={index}
                className="card-elegant overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Дополнительная помощь */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="card-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-muted-foreground mb-6">
              Напишите мне в Telegram, и я отвечу на любые вопросы о работе с карточками товаров
            </p>
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero"
            >
              Задать вопрос в Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;