import { Users, Target, Award, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '300+', label: 'Довольных клиентов' },
    { icon: Target, value: '450+', label: 'Построенных объектов' },
    { icon: Award, value: '15', label: 'Лет на рынке' },
    { icon: TrendingUp, value: '100%', label: 'Сданных в срок проектов' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">О нас</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Строительная компания «СтройМастер» специализируется на возведении жилых домов,
            коммерческих зданий и промышленных объектов. Мы гарантируем высокое качество работ,
            соблюдение сроков и использование современных технологий строительства.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-secondary/30 border border-primary/20 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                </div>
                <div className="text-foreground mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-foreground mb-4">Наша миссия</h3>
            <p className="text-muted-foreground">
              Мы стремимся создавать надёжные и качественные строительные объекты, которые служат
              д��сятилетиями. Наша цель — превосходить ожидания клиентов, применяя передовые технологии
              и лучшие строительные практики. Ваша мечта — наша ответственность.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}