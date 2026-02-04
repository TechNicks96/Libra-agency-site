import logo from 'figma:asset/9a203d6ccdc8d8fac78c7e62b6f221f148a54ed1.png';
import heroImage from 'figma:asset/9539e140bf485a6eab36ba1f8bb25e88e4141c46.png';

interface LibraHeroProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function LibraHero({ language }: LibraHeroProps) {
  const content = {
    EN: {
      badge: 'Your Future Starts Here',
      title: 'You Deserve',
      titleHighlight: 'More',
      subtitle: 'Freedom. Independence. Success on your terms.',
      description: 'Join confident models who took control of their income and lifestyle',
      cta: 'Start Your Journey',
      stats: [
        { value: '$1,000 – $15,000+', label: 'Monthly Income' },
        { value: '24/7', label: 'Support' },
        { value: '100%', label: 'Transparency' }
      ]
    },
    PT: {
      badge: 'Seu Futuro Começa Aqui',
      title: 'Você Merece',
      titleHighlight: 'Mais',
      subtitle: 'Liberdade. Independência. Sucesso nos seus termos.',
      description: 'Junte-se a modelos confiantes que assumiram o controle de sua renda e estilo de vida',
      cta: 'Comece Sua Jornada',
      stats: [
        { value: '$1.000 – $15.000+', label: 'Renda Mensal' },
        { value: '24/7', label: 'Suporte' },
        { value: '100%', label: 'Transparência' }
      ]
    },
    RU: {
      badge: 'Ваше Будущее Начинается Здесь',
      title: 'Вы Заслуживаете',
      titleHighlight: 'Большего',
      subtitle: 'Свобода. Независимость. Успех на ваших условиях.',
      description: 'Присоединяйтесь к уверенным моделям, которые взяли контроль над своим доходом и стилем жизни',
      cta: 'Начните Свой Путь',
      stats: [
        { value: '$1.000 – $15.000+', label: 'Ежемесячный доход' },
        { value: '24/7', label: 'Поддержка' },
        { value: '100%', label: 'Прозрачность' }
      ]
    },
    UA: {
      badge: 'Ваше Майбутнє Починається Тут',
      title: 'Ви Заслуговуєте',
      titleHighlight: 'Більшого',
      subtitle: 'Свобода. Незалежність. Успіх на ваших умовах.',
      description: 'Приєднуйтесь до впевнених моделей, які взяли контроль над своїм доходом та стилем життя',
      cta: 'Почніть Свій Шлях',
      stats: [
        { value: '$1.000 – $15.000+', label: 'Місячний дохід' },
        { value: '24/7', label: 'Підтримка' },
        { value: '100%', label: 'Прозорість' }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 md:py-0 overflow-hidden bg-white">
      {/* Hero Layout */}
      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Content */}
        <div className="relative z-10 pt-20 lg:pt-0 order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">{text.badge}</span>
          </div>

          {/* Logo */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            <img 
              src={logo} 
              alt="Libra Agency" 
              className="h-16 md:h-20 w-auto opacity-90"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            {text.title}{' '}
            <span className="block bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 font-light leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            {text.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-xl animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            {text.description}
          </p>

          {/* CTA Button */}
          <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-500 mb-12">
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg md:text-xl font-semibold rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-500 hover:scale-105"
            >
              <span>{text.cta}</span>
              <svg className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
            {text.stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative order-1 lg:order-2 animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/20">
              <img 
                src={heroImage}
                alt="Successful model lifestyle"
                className="w-full h-[500px] md:h-[650px] lg:h-[700px] object-cover"
              />
              {/* Elegant gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-40 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}