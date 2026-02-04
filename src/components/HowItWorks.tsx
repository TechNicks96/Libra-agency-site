import { Shield, Clock, TrendingUp, Heart } from 'lucide-react';

interface HowItWorksProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function HowItWorks({ language }: HowItWorksProps) {
  const content = {
    EN: {
      eyebrow: 'Simple & Transparent',
      title: 'How We',
      titleHighlight: 'Support You',
      steps: [
        {
          icon: Heart,
          title: 'Personal Onboarding',
          description: 'We get to know you, understand your goals, and create a customized plan for your success'
        },
        {
          icon: Shield,
          title: 'Complete Security',
          description: 'Your data, privacy, and earnings are protected with bank-level security standards'
        },
        {
          icon: TrendingUp,
          title: 'Growth Strategy',
          description: 'Dedicated support to help you maximize your income and build a sustainable career'
        },
        {
          icon: Clock,
          title: 'Always There',
          description: '24/7 support team ready to help you with anything, anytime you need'
        }
      ]
    },
    PT: {
      eyebrow: 'Simples e Transparente',
      title: 'Como',
      titleHighlight: 'Apoiamos Você',
      steps: [
        {
          icon: Heart,
          title: 'Integração Pessoal',
          description: 'Conhecemos você, entendemos seus objetivos e criamos um plano personalizado para seu sucesso'
        },
        {
          icon: Shield,
          title: 'Segurança Completa',
          description: 'Seus dados, privacidade e ganhos são protegidos com padrões de segurança bancária'
        },
        {
          icon: TrendingUp,
          title: 'Estratégia de Crescimento',
          description: 'Suporte dedicado para ajudá-la a maximizar sua renda e construir uma carreira sustentável'
        },
        {
          icon: Clock,
          title: 'Sempre Presente',
          description: 'Equipe de suporte 24/7 pronta para ajudá-la com qualquer coisa, a qualquer momento'
        }
      ]
    },
    RU: {
      eyebrow: 'Просто и Прозрачно',
      title: 'Как Мы',
      titleHighlight: 'Поддерживаем Вас',
      steps: [
        {
          icon: Heart,
          title: 'Личная Адаптация',
          description: 'Мы узнаем вас, понимаем ваши цели и создаем персонализированный план вашего успеха'
        },
        {
          icon: Shield,
          title: 'Полная Безопасность',
          description: 'Ваши данные, конфиденциальность и заработок защищены банковскими стандартами безопасности'
        },
        {
          icon: TrendingUp,
          title: 'Стратегия Роста',
          description: 'Персональная поддержка, чтобы помочь вам максимизировать доход и построить устойчивую карьеру'
        },
        {
          icon: Clock,
          title: 'Всегда Рядом',
          description: 'Команда поддержки 24/7 готова помочь вам с чем угодно в любое время'
        }
      ]
    },
    UA: {
      eyebrow: 'Просто та Прозоро',
      title: 'Як Ми',
      titleHighlight: 'Підтримуємо Вас',
      steps: [
        {
          icon: Heart,
          title: 'Особиста Адаптація',
          description: 'Ми дізнаємося вас, розуміємо ваші цілі та створюємо персоналізований план вашого успіху'
        },
        {
          icon: Shield,
          title: 'Повна Безпека',
          description: 'Ваші дані, конфіденційність та заробіток захищені банківськими стандартами безпеки'
        },
        {
          icon: TrendingUp,
          title: 'Стратегія Зростання',
          description: 'Персональна підтримка, щоб допомогти вам максимізувати дохід та побудувати стійку кар\'єру'
        },
        {
          icon: Clock,
          title: 'Завжди Поруч',
          description: 'Команда підтримки 24/7 готова допомогти вам з будь-чим у будь-який час'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-40 px-6 bg-gradient-to-b from-blue-50/30 via-white to-white">
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
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
          {text.steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border-2 border-blue-100/60 rounded-[2rem] p-10 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-blue-500/40">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {step.description}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 rounded-b-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
