interface BenefitsSectionProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function BenefitsSection({ language }: BenefitsSectionProps) {
  const content = {
    EN: {
      eyebrow: 'What Makes Us Different',
      title: 'We Believe',
      titleHighlight: 'In You',
      description: 'Your success is our success. We\'ve built everything around one goal: helping you thrive.',
      benefits: [
        {
          title: 'Complete Transparency',
          description: 'See every transaction, every metric, every detail of your earnings in real-time'
        },
        {
          title: 'Personal Growth Plan',
          description: 'Custom strategy to help you reach your income goals faster and sustainably'
        },
        {
          title: 'Caring Support',
          description: 'Real people who genuinely care about your wellbeing and success, 24/7'
        },
        {
          title: 'Total Security',
          description: 'Your privacy, data, and earnings are protected with industry-leading security'
        }
      ]
    },
    PT: {
      eyebrow: 'O Que Nos Torna Diferentes',
      title: 'Acreditamos',
      titleHighlight: 'Em Você',
      description: 'Seu sucesso é nosso sucesso. Construímos tudo em torno de um objetivo: ajudá-la a prosperar.',
      benefits: [
        {
          title: 'Transparência Completa',
          description: 'Veja cada transação, cada métrica, cada detalhe dos seus ganhos em tempo real'
        },
        {
          title: 'Plano de Crescimento Pessoal',
          description: 'Estratégia personalizada para ajudá-la a alcançar suas metas de renda mais rápido e de forma sustentável'
        },
        {
          title: 'Suporte Atencioso',
          description: 'Pessoas reais que realmente se importam com seu bem-estar e sucesso, 24/7'
        },
        {
          title: 'Segurança Total',
          description: 'Sua privacidade, dados e ganhos são protegidos com segurança líder do setor'
        }
      ]
    },
    RU: {
      eyebrow: 'Что Делает Нас Особенными',
      title: 'Мы Верим',
      titleHighlight: 'В Вас',
      description: 'Ваш успех — наш успех. Мы построили всё вокруг одной цели: помочь вам процветать.',
      benefits: [
        {
          title: 'Полная Прозрачность',
          description: 'Видите каждую транзакцию, каждую метрику, каждую деталь ваших заработков в реальном времени'
        },
        {
          title: 'Личный План Роста',
          description: 'Индивидуальная стратегия, чтобы помочь вам достичь целей по доходу быстрее и стабильно'
        },
        {
          title: 'Заботливая Поддержка',
          description: 'Реальные люди, которые искренне заботятся о вашем благополучии и успехе, 24/7'
        },
        {
          title: 'Полная Безопасность',
          description: 'Ваша конфиденциальность, данные и заработок защищены передовой безопасностью отрасли'
        }
      ]
    },
    UA: {
      eyebrow: 'Що Робить Нас Особливими',
      title: 'Ми Віримо',
      titleHighlight: 'У Вас',
      description: 'Ваш успіх — наш успіх. Ми побудували все навколо однієї мети: допомогти вам процвітати.',
      benefits: [
        {
          title: 'Повна Прозорість',
          description: 'Бачите кожну транзакцію, кожну метрику, кожну деталь ваших заробітків у реальному часі'
        },
        {
          title: 'Особистий План Зростання',
          description: 'Індивідуальна стратегія, щоб допомогти вам досягти цілей щодо доходу швидше та стабільно'
        },
        {
          title: 'Турботлива Підтримка',
          description: 'Реальні люди, які щиро дбають про ваше благополуччя та успіх, 24/7'
        },
        {
          title: 'Повна Безпека',
          description: 'Ваша конфіденційність, дані та заробіток захищені передовою безпекою галузі'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-40 px-6 bg-gradient-to-b from-white via-blue-50/20 to-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            <span className="text-sm font-semibold text-blue-600">{text.eyebrow}</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
            {text.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            {text.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {text.benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border-2 border-blue-100/60 rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500"
            >
              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl text-white font-bold text-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {benefit.description}
              </p>

              {/* Decorative gradient */}
              <div className="absolute -top-3 -right-3 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
