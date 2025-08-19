import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const portfolioItems: {
        id: number;
        title: string;
        image: string;
        category?: string;
        description?: string;
    }[] = [
        {
            id: 1,
            title: 'Бейсболка',
            image: '/lovable-uploads/8a420b52-0be9-42a6-af23-83ced2aa840f.jpg',
        },
        {
            id: 2,
            title: 'Смесь семян',
            image: '/lovable-uploads/7739adf4-68d1-4094-9019-d7b1eb53a64e.jpg',
        },
        {
            id: 3,
            title: 'Чипсы',
            image: '/lovable-uploads/e2e1ba54-4e05-4b1b-a504-745f68305e27.jpg',
        },
        {
            id: 4,
            title: 'Кофе зерновое',
            image: '/lovable-uploads/075d31ad-2045-41a0-ad03-8f63aef8dac1.jpg',
        },
        {
            id: 5,
            title: 'Креманка',
            image: '/lovable-uploads/81ef6c7f-38a8-451c-970a-a916f442fe9b.jpg',
        },
        {
            id: 6,
            title: 'Микрофон петличный',
            image: '/lovable-uploads/e9530610-3e6f-4e2c-a1d3-2dd70d08facd.jpg',
        },
        {
            id: 7,
            title: 'Катушка для рыбалки',
            image: '/lovable-uploads/17d5b3ca-78cd-495f-8f07-a1adb2da6541.jpg',
        },
        {
            id: 8,
            title: 'Вязаная сумка',
            image: '/lovable-uploads/c0464529-b18e-4a63-bea5-3ee310b1c3e4.jpg',
        },
        {
            id: 9,
            title: 'Ламинатор',
            image: '/lovable-uploads/0742ddd1-386d-461e-a82e-a19bd67bcc12.jpg',
        },
    ];

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % portfolioItems.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                selectedImage === 0
                    ? portfolioItems.length - 1
                    : selectedImage - 1
            );
        }
    };

    return (
        <section
            id="portfolio"
            className="py-section bg-gradient-to-b from-background to-accent/20"
        >
            <div className="container mx-auto max-w-site px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Портфолио
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Примеры работ, которые помогают товарам выделяться в
                        выдаче и увеличивают продажи
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
                            {/* Изображение портфолио */}
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />

                                {/* Overlay при hover */}
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <ExternalLink className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="p-6">
                                {item.category && (
                                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                                        {item.category}
                                    </div>
                                )}

                                <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {item.description}
                                    </p>
                                )}
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
            </div>

            {/* Лайтбокс */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-hidden"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-3xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
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
                        <div className="bg-[#081325] rounded-2xl overflow-hidden max-h-[85vh]">
                            <div className="aspect-[4/3] relative">
                                <img
                                    src={portfolioItems[selectedImage].image}
                                    alt={portfolioItems[selectedImage].title}
                                    className="w-full h-full object-contain bg-gray-700"
                                />
                            </div>
                            <div className="p-4">
                                {portfolioItems[selectedImage].category && (
                                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                                        {portfolioItems[selectedImage].category}
                                    </div>
                                )}

                                <h3 className="text-lg font-bold">
                                    {portfolioItems[selectedImage].title}
                                </h3>

                                {portfolioItems[selectedImage].description && (
                                    <p className="text-muted-foreground text-sm mt-2">
                                        {
                                            portfolioItems[selectedImage]
                                                .description
                                        }
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;
