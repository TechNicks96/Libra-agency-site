import { Sparkles } from 'lucide-react';
import lifestyleImage from 'figma:asset/00f0b8cd04de93fa315006ce6b1ec7038225dbe1.png';

interface PremiumLifestyleProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function PremiumLifestyle({ language }: PremiumLifestyleProps) {
  const content = {
    EN: {
      title: 'Your Life.',
      titleHighlight: 'Your Rules.',
      subtitle: 'Work on your terms. Build real independence. Upgrade your life.',
      features: [
        'Work from anywhere in the world',
        'Set your own schedule',
        'Earn while you sleep',
        'Build financial security',
        'Join a supportive community',
        'Grow at your own pace'
      ]
    },
    PT: {
      title: 'Sua Vida.',
      titleHighlight: 'Suas Regras.',
      subtitle: 'Trabalhe nos seus termos. Construa independência real. Melhore sua vida.',
      features: [
        'Trabalhe de qualquer lugar do mundo',
        'Defina seu próprio horário',
        'Ganhe enquanto dorme',
        'Construa segurança financeira',
        'Junte-se a uma comunidade de apoio',
        'Cresça no seu próprio ritmo'
      ]
    },
    RU: {
      title: 'Ваша Жизнь.',
      titleHighlight: 'Ваши Правила.',
      subtitle: 'Работайте н�� своих условиях. Создайте настоящую независимость. Улучшите свою жизнь.',
      features: [
        'Работайте из любой точки мира',
        'Устанавливайте свой график',
        'Зарабатывайте во сне',
        'Создайте финансовую безопасность',
        'Присоединяйтесь к поддерживающему сообществу',
        'Растите в своем темпе'
      ]
    },
    UA: {
      title: 'Ваше Життя.',
      titleHighlight: 'Ваші Правила.',
      subtitle: 'Працюйте на своїх умовах. Створіть справжню незалежність. Покращте своє життя.',
      features: [
        'Працюйте з будь-якої точки світу',
        'Встановлюйте свій графік',
        'Заробляйте уві сні',
        'Створіть фінансову безпеку',
        'Приєднуйтесь до підтримуючої спільноти',
        'Ростіть у своєму темпі'
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">{text.title}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {text.titleHighlight}
              </span>
            </h2>

            <p className="text-2xl text-gray-600 mb-12 font-light leading-relaxed">
              {text.subtitle}
            </p>

            {/* Features */}
            <div className="space-y-4">
              {text.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100"
                >
                  <Sparkles className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lifestyle Photo - Slightly Dominant */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-500/25">
              <img 
                src={lifestyleImage}
                alt="Luxury lifestyle - financial freedom and success"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            {/* Decorative accents */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-2xl opacity-40 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-2xl opacity-40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}