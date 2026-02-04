import { Check } from 'lucide-react';

interface IsThisForYouProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function IsThisForYou({ language }: IsThisForYouProps) {
  const content = {
    EN: {
      title: 'Is This',
      titleHighlight: 'For You?',
      subtitle: 'You might be a perfect fit if you...',
      checklist: [
        'Want financial independence',
        'Tired of unstable income',
        'Comfortable working online',
        'Ready for a lifestyle upgrade',
        'Value your time and freedom',
        'Want to work on your own terms'
      ],
      cta: 'Yes, This Is Me'
    },
    PT: {
      title: 'Isso É',
      titleHighlight: 'Para Você?',
      subtitle: 'Você pode ser perfeita se você...',
      checklist: [
        'Quer independência financeira',
        'Cansada de renda instável',
        'Confortável trabalhando online',
        'Pronta para um upgrade de estilo de vida',
        'Valoriza seu tempo e liberdade',
        'Quer trabalhar nos seus próprios termos'
      ],
      cta: 'Sim, Sou Eu'
    },
    RU: {
      title: 'Это',
      titleHighlight: 'Для Вас?',
      subtitle: 'Вы можете идеально подойти, если вы...',
      checklist: [
        'Хотите финансовую независимость',
        'Устали от нестабильного дохода',
        'Комфортно работаете онлайн',
        'Готовы к улучшению образа жизни',
        'Цените свое время и свободу',
        'Хотите работать на своих условиях'
      ],
      cta: 'Да, Это Про Меня'
    },
    UA: {
      title: 'Це',
      titleHighlight: 'Для Вас?',
      subtitle: 'Ви можете ідеально підійти, якщо ви...',
      checklist: [
        'Хочете фінансову незалежність',
        'Втомилися від нестабільного доходу',
        'Комфортно працюєте онлайн',
        'Готові до покращення способу життя',
        'Цінуєте свій час і свободу',
        'Хочете працювати на своїх умовах'
      ],
      cta: 'Так, Це Про Мене'
    }
  };

  const text = content[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          <span className="text-gray-900">{text.title}</span>{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {text.titleHighlight}
          </span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-16 font-light">
          {text.subtitle}
        </p>

        {/* Checklist */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {text.checklist.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-lg text-gray-700 font-medium pt-0.5">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
          >
            {text.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
