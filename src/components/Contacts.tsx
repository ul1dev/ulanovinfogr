import { useState } from 'react';
import { MessageCircle, Mail, ArrowRight, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    productLink: '',
    comment: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет обработка формы
    toast({
      title: "Заявка отправлена!",
      description: "Скоро свяжусь с вами в Telegram",
    });
  };

  return (
    <section id="contacts" className="py-section bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto max-w-site px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Готовы увеличить конверсию карточки?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Напишите мне прямо сейчас, и мы обсудим ваш проект
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* CTA кнопки */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-heading font-bold mb-6">Быстрая связь</h3>
            
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero w-full justify-center group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Написать в Telegram
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://t.me/ulanov_dsgn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full justify-center"
            >
              Заказать дизайн
            </a>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h4 className="font-semibold mb-2">Полезные ссылки:</h4>
              <div className="space-y-2 text-sm">
                <a href="https://t.me/ulanov_otzvv" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">📝 Отзывы клиентов</a>
                <a href="https://t.me/ulanov_portfol" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">🎨 Портфолио в Telegram</a>
                <a href="https://t.me/ulanov_infogr/233" target="_blank" rel="noopener noreferrer" className="block text-primary hover:underline">💰 Подробный прайс</a>
              </div>
            </div>
          </div>

          {/* Telegram блок */}
          <div className="animate-scale-in">
            <div className="card-elegant text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Связаться в Telegram</h3>
              <p className="text-muted-foreground mb-8">
                Самый быстрый способ обсудить ваш проект и получить консультацию
              </p>
              <div className="space-y-4">
                <a
                  href="https://t.me/ulanov_dsgn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full text-center flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Написать в Telegram
                </a>
                <p className="text-sm text-muted-foreground">
                  Отвечаю в течение 30 минут в рабочее время
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;