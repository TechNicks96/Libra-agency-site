import { useState } from 'react';
import { Send, CheckCircle, Sparkles, MessageCircle, Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface CTASectionProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function CTASection({ language }: CTASectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    EN: {
      eyebrow: 'Ready for Change?',
      title: 'Your Future',
      titleHighlight: 'Starts Now',
      subtitle: 'Take the first step toward the life you deserve. We\'re here to help you succeed.',
      quickContactTitle: 'Prefer to message directly?',
      quickContactSubtitle: 'Choose your preferred way to connect',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      orDivider: 'Or fill out the form below',
      namePlaceholder: 'Your name',
      contactLabel: 'Best way to reach you',
      contactPlaceholder: 'WhatsApp, Telegram, or Email',
      messageLabel: 'Tell us about yourself (optional)',
      messagePlaceholder: 'Share your goals, questions, or anything else...',
      submitButton: 'Start Your Journey',
      disclaimer: 'We reply within 24 hours • Fully confidential • No pressure',
      successTitle: 'Welcome to Your Future!',
      successMessage: 'Thank you',
      successNote: 'Our team will reach out to you within 24 hours. Get ready to start your journey!',
      badges: ['Fast Response', 'Personal Approach', 'Zero Pressure']
    },
    PT: {
      eyebrow: 'Pronta para a Mudança?',
      title: 'Seu Futuro',
      titleHighlight: 'Começa Agora',
      subtitle: 'Dê o primeiro passo em direção à vida que você merece. Estamos aqui para ajudá-la a ter sucesso.',
      quickContactTitle: 'Prefere enviar uma mensagem diretamente?',
      quickContactSubtitle: 'Escolha a forma preferida de se conectar',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      orDivider: 'Ou preencha o formulário abaixo',
      namePlaceholder: 'Seu nome',
      contactLabel: 'Melhor forma de contato',
      contactPlaceholder: 'WhatsApp, Telegram ou Email',
      messageLabel: 'Conte-nos sobre você (opcional)',
      messagePlaceholder: 'Compartilhe seus objetivos, perguntas ou qualquer outra coisa...',
      submitButton: 'Entrar na Libra Agency',
      disclaimer: 'Responderemos em 24 horas • 100% confidencial • Sem pressão',
      successTitle: 'Bem-vinda ao Seu Futuro!',
      successMessage: 'Obrigado',
      successNote: 'Nossa equipe entrará em contato em até 24 horas. Prepare-se para começar sua jornada!',
      badges: ['Resposta Rápida', 'Abordagem Pessoal', 'Sem Pressão']
    },
    RU: {
      eyebrow: 'Готовы к Переменам?',
      title: 'Ваше Будущее',
      titleHighlight: 'Начинается Сейчас',
      subtitle: 'Сделайте первый шаг к жизни, которую вы заслуживаете. Мы здесь, чтобы помочь вам добиться успеха.',
      quickContactTitle: 'Предпочитаете отправить сообщение напрямую?',
      quickContactSubtitle: 'Выберите предпочитаемый способ связи',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      orDivider: 'Или заполните форму ниже',
      namePlaceholder: 'Ваше имя',
      contactLabel: 'Лучший способ связи',
      contactPlaceholder: 'WhatsApp, Telegram или Email',
      messageLabel: 'Расскажите о себе (необязательно)',
      messagePlaceholder: 'Поделитесь своими целями, вопросами или чем-то еще...',
      submitButton: 'Присоединиться к Libra Agency',
      disclaimer: 'Ответим в течение 24 часов • 100% конфиденциально • Без давления',
      successTitle: 'Добро Пожаловать в Ваше Будущее!',
      successMessage: 'Спасибо',
      successNote: 'Наша команда свяжется с вами в течение 24 часов. Приготовьтесь начать свой путь!',
      badges: ['Быстрый ответ', 'Личный подход', 'Без давления']
    },
    UA: {
      eyebrow: 'Готові до Змін?',
      title: 'Ваше Майбутнє',
      titleHighlight: 'Починається Зараз',
      subtitle: 'Зробіть перший крок до життя, на яке ви заслуговуєте. Ми тут, щоб допомогти вам досягти успіху.',
      quickContactTitle: 'Бажаєте надіслати повідомлення безпосередньо?',
      quickContactSubtitle: 'Виберіть улюблений спосіб зв\'язку',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email',
      orDivider: 'Або заповніть форму нижче',
      namePlaceholder: 'Ваше ім\'я',
      contactLabel: 'Найкращий спосіб зв\'язку',
      contactPlaceholder: 'WhatsApp, Telegram або Email',
      messageLabel: 'Розкажіть про себе (необов\'язково)',
      messagePlaceholder: 'Поділіться своїми цілями, питаннями або чимось іншим...',
      submitButton: 'Приєднатися до Libra Agency',
      disclaimer: 'Відповімо протягом 24 годин • 100% конфіденційно • Без тиску',
      successTitle: 'Ласкаво Просимо до Вашого Майбутнього!',
      successMessage: 'Дякуємо',
      successNote: 'Наша команда зв\'яжеться з вами протягом 24 годин. Приготуйтесь почати свій шлях!',
      badges: ['Швидка відповідь', 'Особистий підхід', 'Без тиску']
    }
  };

  const text = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="cta" className="py-24 md:py-40 px-6 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
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
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
            {text.subtitle}
          </p>
        </div>

        {/* Quick Contact Options */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-gray-700 mb-2">{text.quickContactTitle}</p>
            <p className="text-base text-gray-500">{text.quickContactSubtitle}</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {/* WhatsApp */}
            <button
              onClick={() => window.open("https://api.whatsapp.com/send?phone=5548984450110", "_blank", "noopener,noreferrer")}
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{text.whatsapp}</span>
            </button>

            {/* Telegram */}
            <button
              onClick={() => window.open('https://t.me/Nic_ks_ss', '_blank')}
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>{text.telegram}</span>
            </button>

            {/* Email */}
            <button
              onClick={() => window.open('mailto:libreeof@gmail.com', '_blank')}
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>{text.email}</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 text-sm font-medium text-gray-500 bg-gradient-to-b from-white to-blue-50/30">
                {text.orDivider}
              </span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white border-2 border-blue-100/60 rounded-[2rem] p-10 md:p-14 shadow-2xl shadow-blue-500/10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={text.namePlaceholder}
                  className="bg-blue-50/30 border-2 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 h-16 rounded-2xl text-lg px-6 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-gray-700 mb-3 font-semibold text-lg">
                  {text.contactLabel}
                </label>
                <Input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder={text.contactPlaceholder}
                  className="bg-blue-50/30 border-2 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 h-16 rounded-2xl text-lg px-6 shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-3 font-semibold text-lg">
                  {text.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={text.messagePlaceholder}
                  className="bg-blue-50/30 border-2 border-blue-100 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 min-h-[160px] rounded-2xl resize-none text-lg p-6 shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xl font-semibold rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-500 hover:scale-105"
              >
                <span>{text.submitButton}</span>
                <Send className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </button>

              <p className="text-center text-gray-500 text-sm md:text-base font-medium pt-2">
                {text.disclaimer}
              </p>
            </form>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-500 rounded-full mb-8 shadow-2xl shadow-green-500/20">
                <CheckCircle className="w-14 h-14 text-green-600" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{text.successTitle}</h3>
              <p className="text-xl text-gray-600 mb-3">
                {text.successMessage}, <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent font-semibold">{formData.name}</span>!
              </p>
              <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed">
                {text.successNote}
              </p>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500">
          {text.badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
              <span className="text-base font-medium group-hover:text-blue-600 transition-colors duration-300">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}