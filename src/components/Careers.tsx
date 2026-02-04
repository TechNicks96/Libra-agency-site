import { MapPin, Clock, Briefcase } from 'lucide-react';

export function Careers() {
  const jobs = [
    {
      title: 'Прораб',
      type: 'Полная занятость',
      location: 'Москва',
      description: 'Требуется опытный прораб для управления строительными работами на объектах. Опыт работы от 5 лет.',
    },
    {
      title: 'Инженер ПТО',
      type: 'Полная занятость',
      location: 'Москва',
      description: 'В команду требуется инженер производственно-технического отдела с опытом работы в строительстве.',
    },
    {
      title: 'Каменщик',
      type: 'Полная занятость',
      location: 'Москва / Московская область',
      description: 'Ищем квалифицированных каменщиков для работы на строительных объектах. Официальное трудоустройство.',
    },
    {
      title: 'Инженер-сметчик',
      type: 'Полная занятость',
      location: 'Москва / Удаленно',
      description: 'Требуется инженер-сметчик с опытом составления смет и расчета стоимости строительных работ.',
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-white to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Вакансии</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ищем профессионалов в строительной сфере! Стабильная работа, официальное
            трудоустройство и достойная заработная плата.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary/20 rounded-xl p-8 hover:border-primary hover:shadow-xl transition-all duration-200"
            >
              <h3 className="text-foreground mb-4">{job.title}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase size={18} className="text-primary" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="text-primary" />
                  <span>{job.location}</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{job.description}</p>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition-opacity duration-200">
                Откликнуться
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-foreground mb-3">Не нашли подходящую вакансию?</h3>
            <p className="text-muted-foreground mb-6">
              Отправьте нам своё резюме, и мы свяжемся с вами, когда появится подходящая позиция.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200">
              Отправить резюме
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}