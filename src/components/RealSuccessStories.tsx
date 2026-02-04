import modelPhoto1 from 'figma:asset/80a283cab670fa9860537ad44636ffd1d1b76da3.png';
import modelPhoto2 from 'figma:asset/2f4961734bd88977ba640690160de8ae79039bde.png';
import modelPhoto3 from 'figma:asset/6315ffb8670ec8d2357174203ffb09979c4c5c81.png';
import { MapPin, DollarSign } from 'lucide-react';

interface RealSuccessStoriesProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function RealSuccessStories({ language }: RealSuccessStoriesProps) {
  const content = {
    EN: {
      title: 'Real Girls.',
      titleHighlight: 'Real Results.',
      subtitle: 'Join models who are already earning and building their independence.',
      stories: [
        {
          photo: modelPhoto1,
          name: 'Sofia',
          location: 'Miami, USA',
          income: '$8,500/month',
          quote: 'I finally have the freedom to live life on my own terms. Best decision ever.'
        },
        {
          photo: modelPhoto2,
          name: 'Isabella',
          location: 'Barcelona, Spain',
          income: '$12,000/month',
          quote: 'The support and guidance made everything so easy. I wish I started sooner.'
        },
        {
          photo: modelPhoto3,
          name: 'Emma',
          location: 'São Paulo, Brazil',
          income: '$6,800/month',
          quote: 'From unstable income to financial security. My life completely changed.'
        }
      ]
    },
    PT: {
      title: 'Garotas Reais.',
      titleHighlight: 'Resultados Reais.',
      subtitle: 'Junte-se a modelos que já estão ganhando e construindo sua independência.',
      stories: [
        {
          photo: modelPhoto1,
          name: 'Sofia',
          location: 'Miami, EUA',
          income: '$8.500/mês',
          quote: 'Finalmente tenho a liberdade de viver a vida nos meus próprios termos. Melhor decisão.'
        },
        {
          photo: modelPhoto2,
          name: 'Isabella',
          location: 'Barcelona, Espanha',
          income: '$12.000/mês',
          quote: 'O suporte e orientação tornaram tudo tão fácil. Queria ter começado antes.'
        },
        {
          photo: modelPhoto3,
          name: 'Emma',
          location: 'São Paulo, Brasil',
          income: '$6.800/mês',
          quote: 'De renda instável para segurança financeira. Minha vida mudou completamente.'
        }
      ]
    },
    RU: {
      title: 'Реальные Девушки.',
      titleHighlight: 'Реальные Результаты.',
      subtitle: 'Присоединяйтесь к моделям, которые уже зарабатывают и строят свою независимость.',
      stories: [
        {
          photo: modelPhoto1,
          name: 'София',
          location: 'Майами, США',
          income: '$8.500/месяц',
          quote: 'Наконец-то у меня есть свобода жить на своих условиях. Лучшее решение.'
        },
        {
          photo: modelPhoto2,
          name: 'Изабелла',
          location: 'Барселона, Испания',
          income: '$12.000/месяц',
          quote: 'Поддержка и руководство сделали все так просто. Жаль, что не начала раньше.'
        },
        {
          photo: modelPhoto3,
          name: 'Эмма',
          location: 'Сан-Паулу, Бразилия',
          income: '$6.800/месяц',
          quote: 'От нестабильного дохода к финансовой безопасности. Моя жизнь полностью изменилась.'
        }
      ]
    },
    UA: {
      title: 'Реальні Дівчата.',
      titleHighlight: 'Реальні Результати.',
      subtitle: 'Приєднуйтесь до моделей, які вже заробляють та будують свою незалежність.',
      stories: [
        {
          photo: modelPhoto1,
          name: 'Софія',
          location: 'Маямі, США',
          income: '$8.500/місяць',
          quote: 'Нарешті у мене є свобода жити на своїх умовах. Найкраще рішення.'
        },
        {
          photo: modelPhoto2,
          name: 'Ізабелла',
          location: 'Барселона, Іспанія',
          income: '$12.000/місяць',
          quote: 'Підтримка та керівництво зробили все таким простим. Шкода, що не почала раніше.'
        },
        {
          photo: modelPhoto3,
          name: 'Емма',
          location: 'Сан-Паулу, Бразилія',
          income: '$6.800/місяць',
          quote: 'Від нестабільного доходу до фінансової безпеки. Моє життя повністю змінилося.'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
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
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {text.stories.map((story, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Income badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-bold text-gray-900">{story.income}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {story.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{story.location}</span>
                </div>

                {/* Quote */}
                <blockquote className="relative">
                  <span className="text-4xl text-blue-200 absolute -top-2 -left-1">"</span>
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    {story.quote}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
