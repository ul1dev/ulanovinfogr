import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Плейсхолдеры для портфолио
  const portfolioItems = [
    {
      id: 1,
      title: "Карточка косметики для Wildberries",
      description: "Увеличение CTR на 40% через яркие акценты",
      image: "/portfolio/placeholder-1.jpg",
      category: "Wildberries"
    },
    {
      id: 2,
      title: "Инфографика для товаров здоровья",
      description: "Акцент на пользе и составе продукта",
      image: "/portfolio/placeholder-2.jpg",
      category: "Ozon"
    },
    {
      id: 3,
      title: "Дизайн для электроники",
      description: "Минимализм и технологичность",
      image: "/portfolio/placeholder-3.jpg",
      category: "Wildberries"
    },
    {
      id: 4,
      title: "Карточки детских товаров",
      description: "Яркие цвета и дружелюбный дизайн",
      image: "/portfolio/placeholder-4.jpg",
      category: "Ozon"
    },
    {
      id: 5,
      title: "Спортивные товары",
      description: "Динамика и энергия в каждом элементе",
      image: "/portfolio/placeholder-5.jpg",
      category: "Wildberries"
    },
    {
      id: 6,
      title: "Товары для дома",
      description: "Уют и комфорт в визуальном решении",
      image: "/portfolio/placeholder-6.jpg",
      category: "Ozon"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-section bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-site px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Портфолио
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Примеры работ, которые помогают товарам выделяться в выдаче и увеличивают продажи
          </p>
        </div>

        {/* Галерея */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className="card-elegant p-0 overflow-hidden cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Плейсхолдер изображения */}
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Загрузите изображение
                  </p>
                </div>
                
                {/* Overlay при hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {item.category}
                </div>
                <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Кнопка для полного портфолио */}
        <div className="text-center animate-fade-in">
          <a
            href="https://t.me/ulanov_portfol"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            Полное портфолио в Telegram
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Инструкция для загрузки */}
        <div className="mt-12 p-6 bg-muted/50 rounded-2xl border border-border">
          <h4 className="font-semibold mb-2">📁 Инструкция по загрузке портфолио:</h4>
          <p className="text-sm text-muted-foreground">
            1. Загрузите изображения ваших работ в папку <code className="bg-background px-2 py-1 rounded">/public/portfolio</code><br/>
            2. Обновите данные в файле <code className="bg-background px-2 py-1 rounded">portfolio.json</code><br/>
            3. Изображения будут автоматически отображаться в галерее
          </p>
        </div>
      </div>

      {/* Лайтбокс */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Кнопка закрытия */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Навигация */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Контент */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary/20 rounded-3xl flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {portfolioItems[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {portfolioItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;