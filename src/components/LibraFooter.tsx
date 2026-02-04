import { Mail, MessageCircle } from 'lucide-react';
import logo from 'figma:asset/9a203d6ccdc8d8fac78c7e62b6f221f148a54ed1.png';

interface LibraFooterProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function LibraFooter({ language }: LibraFooterProps) {
  const content = {
    EN: {
      tagline: 'Stable online income agency for models. Transparency, security, growth.',
      nav: 'Navigation',
      home: 'Home',
      apply: 'Apply',
      contact: 'Contact',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2026 Libra Agency. All rights reserved.'
    },
    PT: {
      tagline: 'Agência de renda online estável para modelos. Transparência, segurança, crescimento.',
      nav: 'Navegação',
      home: 'Início',
      apply: 'Candidatar-se',
      contact: 'Contato',
      privacy: 'Privacidade',
      terms: 'Termos',
      copyright: '© 2026 Libra Agency. Todos os direitos reservados.'
    },
    RU: {
      tagline: 'Агентство стабильного онлайн-дохода для моделей. Прозрачность, безопасность, рост.',
      nav: 'Навигация',
      home: 'Главная',
      apply: 'Оставить заявку',
      contact: 'Контакты',
      privacy: 'Конфиденциальность',
      terms: 'Условия',
      copyright: '© 2026 Libra Agency. Все права защищены.'
    },
    UA: {
      tagline: 'Агенція стабільного онлайн-доходу для моделей. Прозорість, безпека, зростання.',
      nav: 'Навігація',
      home: 'Головна',
      apply: 'Залишити заявку',
      contact: 'Контакти',
      privacy: 'Конфіденційність',
      terms: 'Умови',
      copyright: '© 2026 Libra Agency. Всі права захищені.'
    }
  };

  const text = content[language];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50/50 border-t-2 border-blue-100/60 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Libra Agency" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed font-light">
              {text.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-lg">{text.nav}</h4>
            <div className="space-y-3">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {text.home}
              </button>
              <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                {text.apply}
              </button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6 text-lg">{text.contact}</h4>
            <div className="space-y-4">
              <a 
                href="mailto:info@libraagency.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">info@libraagency.com</span>
              </a>
              <a 
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium">Telegram / WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-blue-100/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left font-medium">
              {text.copyright}
            </p>
            <div className="flex items-center gap-6 text-gray-500 text-sm">
              <button className="hover:text-blue-600 transition-colors font-medium">
                {text.privacy}
              </button>
              <span className="text-gray-300">•</span>
              <button className="hover:text-blue-600 transition-colors font-medium">
                {text.terms}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
