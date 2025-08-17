import { User, ExternalLink } from 'lucide-react';

const About = () => {
    return (
        <section
            id="about"
            className="py-section bg-gradient-to-b from-background to-accent/30"
        >
            <div className="container mx-auto max-w-site px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Текстовая часть */}
                        <div className="space-y-6 animate-fade-in">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                                    Обо мне
                                </h2>
                            </div>

                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Меня зовут{' '}
                                <span className="font-semibold text-foreground">
                                    Дмитрий, мне 17
                                </span>
                                . Я — дизайнер инфографики, специализируюсь на
                                продающих карточках для маркетплейсов.
                            </p>

                            <p className="text-lg leading-relaxed text-muted-foreground">
                                Упаковка — первое, что видит покупатель. Моя
                                задача — сделать так, чтобы он не ушёл без
                                заказа.
                            </p>

                            <div className="pt-4">
                                <p className="text-xl font-semibold text-primary mb-6">
                                    «Превращаю обычные карточки в инструменты
                                    продаж»
                                </p>
                            </div>

                            {/* Кнопки */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a
                                    href="#portfolio"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document
                                            .querySelector('#portfolio')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            });
                                    }}
                                    className="btn-hero"
                                >
                                    Портфолио
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>

                                <a
                                    href="https://t.me/ulanov_otzvv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                >
                                    Отзывы
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>

                        {/* Визуальная часть */}
                        <div className="relative animate-scale-in">
                            <div className="relative">
                                {/* Карточка с фото */}
                                <div className="card-elegant p-8 text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center">
                                        <img
                                            src="/lovable-uploads/b49e4a25-3745-4ef4-a699-f214c1757792.png"
                                            alt="Дмитрий Уланов"
                                            className="w-20 h-20 rounded-2xl object-cover"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold mb-2">
                                        Дмитрий Уланов
                                    </h3>
                                    <p className="text-primary font-medium mb-4">
                                        Дизайнер инфографики
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Специализируюсь на продающих карточках
                                        для маркетплейсов
                                    </p>
                                </div>

                                {/* Декоративные элементы */}
                                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/10 rounded-full"></div>
                            </div>

                            {/* Статистика */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/50">
                                    <div className="text-2xl font-bold text-primary">
                                        17
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        лет
                                    </div>
                                </div>
                                <div className="text-center p-4 bg-background/50 rounded-2xl border border-border/50">
                                    <div className="text-2xl font-bold text-primary">
                                        100+
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        проектов
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
