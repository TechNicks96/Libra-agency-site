import { DollarSign, TrendingUp, Calendar, Shield } from 'lucide-react';
import { CURRENCY } from '../config/currency';

interface IncomeTrustBlockProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function IncomeTrustBlock({ language }: IncomeTrustBlockProps) {
  const payoutSchedule = CURRENCY.payouts[language];
  
  const content = {
    EN: {
      eyebrow: 'Income & Transparency',
      title: 'Real Numbers.',
      titleHighlight: 'Real Opportunity.',
      stats: [
        {
          icon: DollarSign,
          value: '$1,000+',
          label: 'Starting Income',
          description: 'First month realistic earnings'
        },
        {
          icon: TrendingUp,
          value: '$10K – $15K+',
          label: 'Top Models Earn',
          description: 'Monthly with dedication'
        },
        {
          icon: Calendar,
          value: payoutSchedule.schedule,
          label: 'Payout Schedule',
          description: payoutSchedule.description
        },
        {
          icon: Shield,
          value: '100%',
          label: 'Transparency',
          description: 'Full financial clarity'
        }
      ]
    },
    PT: {
      eyebrow: 'Renda e Transparência',
      title: 'Números Reais.',
      titleHighlight: 'Oportunidade Real.',
      stats: [
        {
          icon: DollarSign,
          value: '$1.000+',
          label: 'Renda Inicial',
          description: 'Ganhos realistas no primeiro mês'
        },
        {
          icon: TrendingUp,
          value: '$10K – $15K+',
          label: 'Top Modelos Ganham',
          description: 'Mensal com dedicação'
        },
        {
          icon: Calendar,
          value: payoutSchedule.schedule,
          label: 'Pagamentos',
          description: payoutSchedule.description
        },
        {
          icon: Shield,
          value: '100%',
          label: 'Transparência',
          description: 'Clareza financeira total'
        }
      ]
    },
    RU: {
      eyebrow: 'Доход и Прозрачность',
      title: 'Реальные Цифры.',
      titleHighlight: 'Реальная Возможность.',
      stats: [
        {
          icon: DollarSign,
          value: '$1.000+',
          label: 'Начальный Доход',
          description: 'Реалистичный заработок в первый месяц'
        },
        {
          icon: TrendingUp,
          value: '$10K – $15K+',
          label: 'Топ Модели Зарабатывают',
          description: 'Ежемесячно при усердии'
        },
        {
          icon: Calendar,
          value: payoutSchedule.schedule,
          label: 'Выплаты',
          description: payoutSchedule.description
        },
        {
          icon: Shield,
          value: '100%',
          label: 'Прозрачность',
          description: 'Полная финансовая ясность'
        }
      ]
    },
    UA: {
      eyebrow: 'Дохід та Прозорість',
      title: 'Реальні Цифри.',
      titleHighlight: 'Реальна Можливість.',
      stats: [
        {
          icon: DollarSign,
          value: '$1.000+',
          label: 'Початковий Дохід',
          description: 'Реалістичний заробіток у перший місяць'
        },
        {
          icon: TrendingUp,
          value: '$10K – $15K+',
          label: 'Топ Моделі Заробляють',
          description: 'Щомісяця при старанності'
        },
        {
          icon: Calendar,
          value: payoutSchedule.schedule,
          label: 'Виплати',
          description: payoutSchedule.description
        },
        {
          icon: Shield,
          value: '100%',
          label: 'Прозорість',
          description: 'Повна фінансова ясність'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">{text.eyebrow}</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {text.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {text.stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:scale-105 hover:border-blue-200"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}