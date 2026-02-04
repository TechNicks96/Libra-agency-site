import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'ЖК "Солнечный"',
      category: 'Жилой комплекс',
      image: 'https://images.unsplash.com/photo-1747555094127-9a922d56a64c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NTczNjczNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Современный жилой комплекс на 300 квартир с подземной парковкой',
    },
    {
      title: 'Бизнес-центр "Альфа"',
      category: 'Коммерческое здание',
      image: 'https://images.unsplash.com/photo-1580741753044-b3f303ad361b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY1Nzc2NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: '12-этажный бизнес-центр класса А в центре города',
    },
    {
      title: 'Логистический комплекс',
      category: 'Промышленный объект',
      image: 'https://images.unsplash.com/photo-1684695749267-233af13276d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc2NTcwNDM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Складской комплекс площадью 15,000 м² с автоматизированными системами',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Наши проекты</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Примеры реализованных объектов. Каждый проект выполнен с соблюдением всех
            строительных норм и стандартов качества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-primary/20 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                    Подробнее
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
