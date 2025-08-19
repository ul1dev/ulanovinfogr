import {
    FileText,
    Search,
    Lightbulb,
    PaintBucket,
    BarChart3,
    Download,
} from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: FileText,
            title: 'Бриф и цели',
            description: 'Изучаю ваш товар, целевую аудиторию и задачи проекта',
        },
        {
            icon: Search,
            title: 'Анализ ниши и конкурентов',
            description: 'Исследую успешные решения в вашей категории товаров',
        },
        {
            icon: Lightbulb,
            title: 'Концепты и обложки',
            description: 'Создаю варианты дизайна и выбираю наилучший',
        },
        {
            icon: PaintBucket,
            title: 'Подготовка слайдов',
            description:
                'Дорабатываю детали, делаю ретушь и финальные корректуры',
        },
        {
            icon: BarChart3,
            title: 'Тест CTR / Примерка',
            description:
                'При необходимости тестируем варианты или делаем примерку',
            duration: 'по запросу',
        },
        {
            icon: Download,
            title: 'Передача файлов',
            description:
                'Отправляю готовые файлы и исходники в нужных форматах',
            duration: 'сразу',
        },
    ];

    return (
        <section
            id="process"
            className="py-section bg-gradient-to-b from-background to-accent/20"
        >
            <div className="container mx-auto max-w-site px-4">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Этапы работы
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Прозрачный процесс от брифа до готового результата.
                        Каждый этап продуман для максимального качества
                    </p>
                </div>

                {/* Временная шкала */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Линия прогресса */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

                        <div className="space-y-12">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 animate-slide-up"
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                        }}
                                    >
                                        {/* Иконка и номер */}
                                        <div className="flex items-center gap-4 flex-shrink-0">
                                            <div className="relative">
                                                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center relative z-10">
                                                    <Icon className="w-8 h-8" />
                                                </div>
                                                {/* Номер этапа */}
                                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary border-2 border-white rounded-full flex items-center justify-center text-xs font-bold text-white z-10">
                                                    {index + 1}
                                                </div>
                                            </div>

                                            <div className="lg:hidden">
                                                <h3 className="text-xl font-heading font-semibold">
                                                    {step.title}
                                                </h3>
                                                {step.duration && (
                                                    <div className="text-sm text-primary font-medium">
                                                        {step.duration}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Контент */}
                                        <div className="card-elegant flex-1 lg:ml-8">
                                            <div className="lg:flex lg:items-center lg:justify-between">
                                                <div className="flex-1">
                                                    <div className="hidden lg:flex lg:items-center lg:gap-4 lg:mb-2">
                                                        <h3 className="text-xl font-heading font-semibold">
                                                            {step.title}
                                                        </h3>
                                                        {step.duration && (
                                                            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                                                                {step.duration}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Итоговая информация */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
                    <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-2">
                            1-3
                        </div>
                        <div className="text-sm text-muted-foreground">
                            дня на базовый пакет
                        </div>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-2">
                            100%
                        </div>
                        <div className="text-sm text-muted-foreground">
                            прозрачность процесса
                        </div>
                    </div>

                    <div className="text-center p-6 rounded-2xl bg-primary/5 border border-primary/20">
                        <div className="text-3xl font-bold text-primary mb-2">
                            24/7
                        </div>
                        <div className="text-sm text-muted-foreground">
                            поддержка в Telegram
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
