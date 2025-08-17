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

          {/* Форма заявки */}
          <div className="animate-scale-in">
            <div className="card-elegant">
              <h3 className="text-2xl font-heading font-bold mb-6">Форма заявки</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telegram @username</label>
                  <input
                    type="text"
                    value={formData.telegram}
                    onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Ссылка на карточку/товар</label>
                  <input
                    type="url"
                    value={formData.productLink}
                    onChange={(e) => setFormData({...formData, productLink: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий</label>
                  <textarea
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-hero w-full justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;