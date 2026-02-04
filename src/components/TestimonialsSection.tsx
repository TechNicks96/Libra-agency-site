interface TestimonialsSectionProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function TestimonialsSection({ language }: TestimonialsSectionProps) {
  const content = {
    EN: {
      eyebrow: 'Real Stories',
      title: 'They Took',
      titleHighlight: 'The First Step',
      subtitle: 'Just like you, they wanted more. Here\'s what changed for them.',
      testimonials: [
        {
          name: 'Maria S.',
          location: 'São Paulo',
          quote: 'I went from worrying about bills to planning my future. Libra gave me the freedom I always wanted.',
          income: '$8,500/month'
        },
        {
          name: 'Ana R.',
          location: 'Rio de Janeiro',
          quote: 'The support team feels like family. They genuinely care about my success.',
          income: '$12,000/month'
        },
        {
          name: 'Julia M.',
          location: 'Brasília',
          quote: 'I was skeptical at first, but the transparency and support convinced me. Best decision I made.',
          income: '$9,800/month'
        }
      ]
    },
    PT: {
      eyebrow: 'Histórias Reais',
      title: 'Elas Deram',
      titleHighlight: 'O Primeiro Passo',
      subtitle: 'Assim como você, elas queriam mais. Veja o que mudou para elas.',
      testimonials: [
        {
          name: 'Maria S.',
          location: 'São Paulo',
          quote: 'Passei de me preocupar com contas a planejar meu futuro. Libra me deu a liberdade que sempre quis.',
          income: '$8,500/mês'
        },
        {
          name: 'Ana R.',
          location: 'Rio de Janeiro',
          quote: 'A equipe de suporte parece família. Eles realmente se importam com meu sucesso.',
          income: '$12,000/mês'
        },
        {
          name: 'Julia M.',
          location: 'Brasília',
          quote: 'Fiquei cética no início, mas a transparência e o suporte me convenceram. Melhor decisão que tomei.',
          income: '$9,800/mês'
        }
      ]
    },
    RU: {
      eyebrow: 'Реальные Истории',
      title: 'Они Сделали',
      titleHighlight: 'Первый Шаг',
      subtitle: 'Так же как и вы, они хотели большего. Вот что изменилось для них.',
      testimonials: [
        {
          name: 'Мария С.',
          location: 'Сан-Паулу',
          quote: 'Я перешла от беспокойства о счетах к планированию своего будущего. Libra дала мне свободу, о которой я мечтала.',
          income: '$8,500/месяц'
        },
        {
          name: 'Ана Р.',
          location: 'Рио-де-Жанейро',
          quote: 'Команда поддержки как семья. Они искренне заботятся о моем успехе.',
          income: '$12,000/месяц'
        },
        {
          name: 'Юлия М.',
          location: 'Бразилиа',
          quote: 'Сначала я сомневалась, но прозрачность и поддержка убедили меня. Лучшее решение в моей жизни.',
          income: '$9,800/месяц'
        }
      ]
    },
    UA: {
      eyebrow: 'Реальні Історії',
      title: 'Вони Зробили',
      titleHighlight: 'Перший Крок',
      subtitle: 'Так само як і ви, вони хотіли більшого. Ось що змінилося для них.',
      testimonials: [
        {
          name: 'Марія С.',
          location: 'Сан-Паулу',
          quote: 'Я перейшла від турбот про рахунки до планування свого майбутнього. Libra дала мені свободу, про яку я мріяла.',
          income: '$8,500/місяць'
        },
        {
          name: 'Ана Р.',
          location: 'Ріо-де-Жанейро',
          quote: 'Команда підтримки як сім\'я. Вони щиро дбають про мій успіх.',
          income: '$12,000/місяць'
        },
        {
          name: 'Юлія М.',
          location: 'Бразиліа',
          quote: 'Спочатку я сумнівалася, але прозорість та підтримка переконали мене. Найкраще рішення в моєму житті.',
          income: '$9,800/місяць'
        }
      ]
    }
  };

  const text = content[language];

  return (
    <section className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">{text.eyebrow}</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
            {text.title}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {text.titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {text.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-blue-50/50 to-white border-2 border-blue-100/60 rounded-[2rem] p-8 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-500/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-gray-700 leading-relaxed font-light italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t-2 border-blue-100/60 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                      {testimonial.income}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
