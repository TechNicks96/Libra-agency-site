import { MessageCircle, Send, Mail } from 'lucide-react';

interface PremiumCTAProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function PremiumCTA({ language }: PremiumCTAProps) {
  const content = {
    EN: {
      title: 'Ready To Change',
      titleHighlight: 'Your Life?',
      subtitle: 'Start with a simple message. No pressure. Fully confidential.',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      disclaimer: 'We reply within 24 hours • Completely confidential • No commitment required'
    },
    PT: {
      title: 'Pronta Para Mudar',
      titleHighlight: 'Sua Vida?',
      subtitle: 'Comece com uma mensagem simples. Sem pressão. Totalmente confidencial.',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      disclaimer: 'Respondemos em 24 horas • Completamente confidencial • Sem compromisso'
    },
    RU: {
      title: 'Готовы Изменить',
      titleHighlight: 'Свою Жизнь?',
      subtitle: 'Начните с простого сообщения. Без давления. Полная конфиденциальность.',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      disclaimer: 'Ответим в течение 24 часов • Полная конфиденциальность • Без обязательств'
    },
    UA: {
      title: 'Готові Змінити',
      titleHighlight: 'Своє Життя?',
      subtitle: 'Почніть з простого повідомлення. Без тиску. Повна конфіденційність.',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      disclaimer: 'Відповімо протягом 24 годин • Повна конфіденційність • Без зобов\'язань'
    }
  };

  const text = content[language];

  return (
    <section id="contact" className="py-32 md:py-40 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gray-900">{text.title}</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {text.titleHighlight}
          </span>
        </h2>

        <p className="text-2xl text-gray-600 mb-16 font-light">
          {text.subtitle}
        </p>

        {/* Contact Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-gray-900">
              {text.whatsapp}
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Send className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-gray-900">
              {text.telegram}
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@libraagency.com"
            className="group p-8 bg-white border-2 border-gray-200 rounded-3xl hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div className="text-xl font-bold text-gray-900">
              {text.email}
            </div>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 font-light">
          {text.disclaimer}
        </p>
      </div>
    </section>
  );
}
