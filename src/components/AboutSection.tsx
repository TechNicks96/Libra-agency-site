import modelImage from 'figma:asset/fc3c1f43a254a9393aaa43c994b1c12edcfc271d.png';

interface AboutSectionProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    EN: {
      eyebrow: 'Your Success Story',
      title: 'You Are',
      titleHighlight: 'In Control',
      description: 'We believe in your potential. That\'s why we handle everything — technical setup, payments, support — so you can focus on what matters: building your success, your way.',
      features: [
        'Complete financial transparency',
        'Dedicated personal support',
        'Freedom to work anywhere',
        'No hidden fees or surprises'
      ]
    },
    PT: {
      eyebrow: 'Sua História de Sucesso',
      title: 'Você Está',
      titleHighlight: 'No Controle',
      description: 'Acreditamos no seu potencial. Por isso cuidamos de tudo — configuração técnica, pagamentos, suporte — para que você possa se concentrar no que importa: construir seu sucesso, do seu jeito.',
      features: [
        'Transparência financeira completa',
        'Suporte pessoal dedicado',
        'Liberdade para trabalhar de qualquer lugar',
        'Sem taxas ocultas ou surpresas'
      ]
    },
    RU: {
      eyebrow: 'Ваша История Успеха',
      title: 'Вы',
      titleHighlight: 'Контролируете Всё',
      description: 'Мы верим в ваш потенциал. Поэтому мы берем на себя всё — техническую настройку, платежи, поддержку — чтобы вы могли сосредоточиться на главном: строить свой успех по-своему.',
      features: [
        'Полная финансовая прозрачность',
        'Персональная поддержка',
        'Свобода работать откуда угодно',
        'Никаких скрытых комиссий'
      ]
    },
    UA: {
      eyebrow: 'Ваша Історія Успіху',
      title: 'Ви',
      titleHighlight: 'Контролюєте Все',
      description: 'Ми віримо у ваш потенціал. Тому ми беремо на себе все — технічне налаштування, платежі, підтримку — щоб ви могли зосередитися на головному: будувати свій успіх по-своєму.',
      features: [
        'Повна фінансова прозорість',
        'Персональна підтримка',
        'Свобода працювати звідки завгодно',
        'Жодних прихованих комісій'
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-40 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/15">
              <img 
                src={modelImage}
                alt="Confident model"
                className="w-full h-[550px] md:h-[650px] object-cover"
              />
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-52 h-52 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl opacity-25 -z-10" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              <span className="text-sm font-semibold text-blue-600">{text.eyebrow}</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
              {text.title}{' '}
              <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                {text.titleHighlight}
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              {text.description}
            </p>

            {/* Features List */}
            <div className="space-y-4 pt-6">
              {text.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
