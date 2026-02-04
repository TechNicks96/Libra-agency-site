import { Code, Palette, Megaphone, BarChart3, Shield, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Жилищное строительство',
      description: 'Возведение частных домов, коттеджей и многоквартирных жилых комплексов любой сложности.',
    },
    {
      icon: Palette,
      title: 'Коммерческое строительство',
      description: 'Строительство офисных зданий, торговых центров и бизнес-парков под ключ.',
    },
    {
      icon: Megaphone,
      title: 'Промышленные объекты',
      description: 'Проектирование и строительство складских комплексов, производственных цехов.',
    },
    {
      icon: BarChart3,
      title: 'Реконструкция',
      description: 'Капитальный ремонт и модернизация существующих зданий и сооружений.',
    },
    {
      icon: Shield,
      title: 'Инженерные системы',
      description: 'Монтаж систем отопления, вентиляции, водоснабжения и электроснабжения.',
    },
    {
      icon: Zap,
      title: 'Отделочные работы',
      description: 'Внутренняя и внешняя отделка зданий с использованием качественных материалов.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Полный комплекс строительных услуг от проектирования до сдачи объекта.
            Работаем с частными и корпоративными клиентами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-primary/20 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-200 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center transition-colors duration-200">
                    <Icon className="text-primary group-hover:text-primary-foreground transition-colors duration-200" size={32} />
                  </div>
                </div>
                <h3 className="text-foreground text-center mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}