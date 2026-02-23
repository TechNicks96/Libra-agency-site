import { Shield, Eye, Sparkles, Lock } from 'lucide-react';
import { PremiumCTAButton } from './PremiumCTAButton';

interface PremiumHeroProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function PremiumHero({ language }: PremiumHeroProps) {
  const content = {
    EN: {
      eyebrow: 'Premium Creator Agency',
      title: 'Earn ',
      titleHighlight: '$1,000–$15,000',
      titleEnd: ' Monthly as a Webcam & OnlyFans Model',
      subtitle:
        'Work remotely. Choose your schedule. Build real financial independence with a premium creator agency.',
      cta: 'Start Earning Today',
      ctaSecondary: 'Learn More',
      trustSignals: [
        { icon: Shield, text: 'Safe & Confidential' },
        { icon: Eye, text: 'Full Support' },
        { icon: Sparkles, text: 'No Experience Needed' },
        { icon: Lock, text: 'Privacy Guaranteed' }
      ]
    },
    PT: {
      eyebrow: 'Agência Premium de Criadoras',
      title: 'Ganhe ',
      titleHighlight: '$1.000–$15.000',
      titleEnd: ' Por Mês como Modelo de Webcam & OnlyFans',
      subtitle:
        'Trabalhe remotamente. Escolha seu horário. Construa verdadeira independência financeira com uma agência premium de criadoras.',
      cta: 'Comece a Ganhar Hoje',
      ctaSecondary: 'Saiba Mais',
      trustSignals: [
        { icon: Shield, text: 'Seguro e Confidencial' },
        { icon: Eye, text: 'Suporte Completo' },
        { icon: Sparkles, text: 'Sem Experiência Necessária' },
        { icon: Lock, text: 'Privacidade Garantida' }
      ]
    },
    RU: {
      eyebrow: 'Премиум Агентство для Моделей',
      title: 'Зарабатывайте ',
      titleHighlight: '$1.000–$15.000',
      titleEnd: ' в Месяц как Вебкам & OnlyFans Модель',
      subtitle:
        'Работайте удаленно. Выбирайте свой график. Создайте настоящую финансовую независимость с премиум агентством для моделей.',
      cta: 'Начните Зарабатывать',
      ctaSecondary: 'Узнать Больше',
      trustSignals: [
        { icon: Shield, text: 'Безопасно и Конфиденциально' },
        { icon: Eye, text: 'Полная Поддержка' },
        { icon: Sparkles, text: 'Опыт Не Нужен' },
        { icon: Lock, text: 'Гарантия Конфиденциальности' }
      ]
    },
    UA: {
      eyebrow: 'Преміум Агентство для Моделей',
      title: 'Заробляйте ',
      titleHighlight: '$1.000–$15.000',
      titleEnd: ' на Місяць як Вебкам & OnlyFans Модель',
      subtitle:
        'Працюйте віддалено. Обирайте свій графік. Побудуйте справжню фінансову незалежність з преміум агентством для моделей.',
      cta: 'Почніть Заробляти',
      ctaSecondary: 'Дізнатися Більше',
      trustSignals: [
        { icon: Shield, text: 'Безпечно та Конфіденційно' },
        { icon: Eye, text: 'Повна Підтримка' },
        { icon: Sparkles, text: 'Досвід Не Потрібен' },
        { icon: Lock, text: 'Гарантія Конфіденційності' }
      ]
    }
  };

  const text = content[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        {/* ONE COLUMN (centered) */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-700">{text.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-gray-900 mb-6 leading-[1.08] tracking-tight">
            {text.title}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
            {text.titleEnd}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 font-medium leading-relaxed mx-auto">
            {text.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <PremiumCTAButton onClick={scrollToContact}>
              {text.cta}
            </PremiumCTAButton>
            <button
              type="button"
              onClick={scrollToContact}
              className="px-8 h-[56px] bg-white text-gray-700 rounded-[16px] font-medium text-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-gray-50 transition-all duration-200 ease-out"
            >
              {text.ctaSecondary}
            </button>
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {text.trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm"
                >
                  <Icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 leading-tight">
                    {signal.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}