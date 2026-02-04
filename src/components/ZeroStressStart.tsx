import { Shield, HeartHandshake, UserCheck, Lock } from 'lucide-react';

interface ZeroStressStartProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function ZeroStressStart({ language }: ZeroStressStartProps) {
  const content = {
    EN: {
      title: 'Zero Stress.',
      titleHighlight: 'Full Support.',
      subtitle: 'We guide you every step of the way',
      features: [
        {
          icon: HeartHandshake,
          title: 'Step-by-Step Guidance',
          description: 'Personal onboarding and continuous support to help you succeed'
        },
        {
          icon: Shield,
          title: 'Safe Onboarding',
          description: 'Secure process designed with your safety and comfort in mind'
        },
        {
          icon: UserCheck,
          title: 'You Stay In Control',
          description: 'Your schedule, your boundaries, your decisions — always'
        },
        {
          icon: Lock,
          title: 'Privacy Protected',
          description: 'Your information and identity are completely confidential'
        }
      ]
    },
    PT: {
      title: 'Zero Estresse.',
      titleHighlight: 'Suporte Completo.',
      subtitle: 'Nós guiamos você em cada passo do caminho',
      features: [
        {
          icon: HeartHandshake,
          title: 'Orientação Passo a Passo',
          description: 'Integração pessoal e suporte contínuo para ajudá-la a ter sucesso'
        },
        {
          icon: Shield,
          title: 'Integração Segura',
          description: 'Processo seguro projetado pensando na sua segurança e conforto'
        },
        {
          icon: UserCheck,
          title: 'Você Mantém o Controle',
          description: 'Seu horário, seus limites, suas decisões — sempre'
        },
        {
          icon: Lock,
          title: 'Privacidade Protegida',
          description: 'Suas informações e identidade são completamente confidenciais'
        }
      ]
    },
    RU: {
      title: 'Без Стресса.',
      titleHighlight: 'Полная Поддержка.',
      subtitle: 'Мы проведем вас на каждом этапе',
      features: [
        {
          icon: HeartHandshake,
          title: 'Пошаговое Руководство',
          description: 'Персональная адаптация и постоянная поддержка для вашего успеха'
        },
        {
          icon: Shield,
          title: 'Безопасная Регистрация',
          description: 'Защищенный процесс, созданный с учетом вашей безопасности и комфорта'
        },
        {
          icon: UserCheck,
          title: 'Вы Контролируете',
          description: 'Ваш график, ваши границы, ваши решения — всегда'
        },
        {
          icon: Lock,
          title: 'Конфиденциальность Защищена',
          description: 'Ваша информация и личность полностью конфиденциальны'
        }
      ]
    },
    UA: {
      title: 'Без Стресу.',
      titleHighlight: 'Повна Підтримка.',
      subtitle: 'Ми проведемо вас на кожному етапі',
      features: [
        {
          icon: HeartHandshake,
          title: 'Покрокове Керівництво',
          description: 'Персональна адаптація та постійна підтримка для вашого успіху'
        },
        {
          icon: Shield,
          title: 'Безпечна Реєстрація',
          description: 'Захищений процес, створений з урахуванням вашої безпеки та комфорту'
        },
        {
          icon: UserCheck,
          title: 'Ви Контролюєте',
          description: 'Ваш графік, ваші межі, ваші рішення — завжди'
        },
        {
          icon: Lock,
          title: 'Конфіденційність Захищена',
          description: 'Ваша інформація та особистість повністю конфіденційні'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900">{text.title}</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {text.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
