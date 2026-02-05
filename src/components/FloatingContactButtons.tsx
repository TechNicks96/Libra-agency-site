import { MessageCircle, Send, Mail } from 'lucide-react';

interface FloatingContactButtonsProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function FloatingContactButtons({ language }: FloatingContactButtonsProps) {
  const tooltips = {
    EN: {
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email'
    },
    PT: {
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Email'
    },
    RU: {
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Почта'
    },
    UA: {
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      email: 'Пошта'
    }
  };

  const text = tooltips[language];

  const handleContact = (type: 'whatsapp' | 'telegram' | 'email') => {
    const contacts = {
      whatsapp: 'https://wa.me/YOUR_NUMBER', // Replace with actual WhatsApp number
      telegram: 'https://t.me/Nic_ks_ss', // Replace with actual Telegram username
      email: 'mailto:contact@libraagency.com' // Replace with actual email
    };

    window.open(contacts[type], '_blank');
  };

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <button
        onClick={() => handleContact('whatsapp')}
        className="group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={text.whatsapp}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {text.whatsapp}
        </span>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-50 animate-ping" />
      </button>

      {/* Telegram */}
      <button
        onClick={() => handleContact('telegram')}
        className="group relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={text.telegram}
      >
        <Send className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {text.telegram}
        </span>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-50 animate-ping" />
      </button>

      {/* Email */}
      <button
        onClick={() => handleContact('email')}
        className="group relative w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label={text.email}
      >
        <Mail className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-16 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {text.email}
        </span>

        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-purple-400 opacity-0 group-hover:opacity-50 animate-ping" />
      </button>
    </div>
  );
}
