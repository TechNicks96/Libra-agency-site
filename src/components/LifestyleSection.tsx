import modelImage from 'figma:asset/6315ffb8670ec8d2357174203ffb09979c4c5c81.png';
import { CURRENCY } from '../config/currency';

interface LifestyleSectionProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function LifestyleSection({ language }: LifestyleSectionProps) {
  const content = {
    EN: {
      eyebrow: 'The Lifestyle You Dream Of',
      title: 'Live Life',
      titleHighlight: 'On Your Terms',
      description: 'Imagine waking up every day knowing your income is stable, your work is flexible, and your future is secure. This isn\'t just a dream — it\'s what our models experience every day.',
      metrics: [
        { value: '$1,000 – $15,000+', label: 'Average Monthly Income' },
        { value: '100%', label: 'Remote Work' },
        { value: '500+', label: 'Successful Models' }
      ]
    },
    PT: {
      eyebrow: 'O Estilo de Vida Que Você Sonha',
      title: 'Viva a Vida',
      titleHighlight: 'Nos Seus Termos',
      description: 'Imagine acordar todos os dias sabendo que sua renda é estável, seu trabalho é flexível e seu futuro é seguro. Isso não é apenas um sonho — é o que nossas modelos vivem todos os dias.',
      metrics: [
        { value: '$1.000 – $15.000+', label: 'Renda Mensal Média' },
        { value: '100%', label: 'Trabalho Remoto' },
        { value: '500+', label: 'Modelos de Sucesso' }
      ]
    },
    RU: {
      eyebrow: 'Стиль Жизни, О Котором Вы Мечтаете',
      title: 'Живите',
      titleHighlight: 'На Своих Условиях',
      description: 'Представьте, что вы просыпаетесь каждый день, зная, что ваш доход стабилен, работа гибкая, а будущее — под контролем. Это не просто мечта — это реальность наших моделей.',
      metrics: [
        { value: '$1.000 – $15.000+', label: 'Средний месячный доход' },
        { value: '100%', label: 'Удаленная работа' },
        { value: '500+', label: 'Успешных моделей' }
      ]
    },
    UA: {
      eyebrow: 'Стиль Життя, Про Який Ви Мрієте',
      title: 'Живіть',
      titleHighlight: 'На Своїх Умовах',
      description: 'Уявіть, що ви прокидаєтесь щодня, знаючи, що ваш дохід стабільний, робота гнучка, а майбутнє — під контролем. Це не просто мрія — це реальність наших моделей.',
      metrics: [
        { value: '$1.000 – $15.000+', label: 'Середній місячний дохід' },
        { value: '100%', label: 'Віддалена робота' },
        { value: '500+', label: 'Успішних моделей' }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
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

            {/* Metrics */}
            <div className="space-y-6 pt-6">
              {text.metrics.map((metric, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300 inline-block">
                    {metric.value}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/15">
              <img 
                src={modelImage}
                alt="Model lifestyle"
                className="w-full h-[550px] md:h-[650px] object-cover"
              />
              {/* Elegant overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-52 h-52 bg-gradient-to-br from-cyan-100 to-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-44 h-44 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-25 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}