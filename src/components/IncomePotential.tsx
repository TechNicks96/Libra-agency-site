import { TrendingUp, DollarSign, Calendar } from 'lucide-react';

interface IncomePotentialProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function IncomePotential({ language }: IncomePotentialProps) {
  const content = {
    EN: {
      title: 'Real Income.',
      titleHighlight: 'Real Freedom.',
      stats: [
        {
          icon: DollarSign,
          value: '$1,000+',
          label: 'Starting Income',
          description: 'First month potential'
        },
        {
          icon: TrendingUp,
          value: '$15,000+',
          label: 'Top Models Earn',
          description: 'With dedication'
        },
        {
          icon: Calendar,
          value: 'Twice/Month',
          label: 'Payouts',
          description: 'Always on time'
        }
      ]
    },
    PT: {
      title: 'Renda Real.',
      titleHighlight: 'Liberdade Real.',
      stats: [
        {
          icon: DollarSign,
          value: '$1.000+',
          label: 'Renda Inicial',
          description: 'Potencial primeiro mês'
        },
        {
          icon: TrendingUp,
          value: '$15.000+',
          label: 'Top Modelos Ganham',
          description: 'Com dedicação'
        },
        {
          icon: Calendar,
          value: 'Duas/Mês',
          label: 'Pagamentos',
          description: 'Sempre no prazo'
        }
      ]
    },
    RU: {
      title: 'Реальный Доход.',
      titleHighlight: 'Реальная Свобода.',
      stats: [
        {
          icon: DollarSign,
          value: '$1.000+',
          label: 'Начальный Доход',
          description: 'Потенциал первого месяца'
        },
        {
          icon: TrendingUp,
          value: '$15.000+',
          label: 'Топ Модели Зарабатывают',
          description: 'При усердии'
        },
        {
          icon: Calendar,
          value: 'Дважды/Месяц',
          label: 'Выплаты',
          description: 'Всегда вовремя'
        }
      ]
    },
    UA: {
      title: 'Реальний Дохід.',
      titleHighlight: 'Реальна Свобода.',
      stats: [
        {
          icon: DollarSign,
          value: '$1.000+',
          label: 'Початковий Дохід',
          description: 'Потенціал першого місяця'
        },
        {
          icon: TrendingUp,
          value: '$15.000+',
          label: 'Топ Моделі Заробляють',
          description: 'При старанності'
        },
        {
          icon: Calendar,
          value: 'Двічі/Місяць',
          label: 'Виплати',
          description: 'Завжди вчасно'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          <span className="text-gray-900">{text.title}</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {text.titleHighlight}
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {text.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-3xl p-10 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Value */}
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-500 font-light">
                  {stat.description}
                </p>

                {/* Decorative gradient */}
                <div className="absolute -bottom-px left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
