import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@stroymaster.ru',
      link: 'mailto:info@stroymaster.ru',
    },
    {
      icon: Phone,
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: MapPin,
      title: 'Адрес',
      value: 'Москва, ул. Строительная, д. 25',
      link: '#',
    },
  ];

  return (
    <section id="contacts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом,
            и мы ответим в ближайшее время.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-foreground mb-6">Контактная информация</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-6 bg-secondary/30 border border-primary/20 rounded-xl hover:border-primary transition-colors duration-200"
                    >
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">{info.title}</div>
                        <div className="text-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-primary/10 border-2 border-primary/20 rounded-xl p-8">
              <h4 className="text-foreground mb-3">Рабочие часы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота - Воскресенье: Выходной</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-foreground mb-6">Отправить сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background border-2 border-primary/20 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg hover:opacity-90 transition-opacity duration-200 flex items-center justify-center gap-2"
              >
                Отправить сообщение
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}