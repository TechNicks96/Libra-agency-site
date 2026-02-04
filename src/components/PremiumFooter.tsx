interface PremiumFooterProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function PremiumFooter({ language }: PremiumFooterProps) {
  const content = {
    EN: {
      tagline: 'Libra Agency — Your partner in financial independence',
      copyright: '© 2026 Libra Agency. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    },
    PT: {
      tagline: 'Libra Agency — Sua parceira na independência financeira',
      copyright: '© 2026 Libra Agency. Todos os direitos reservados.',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço'
    },
    RU: {
      tagline: 'Libra Agency — Ваш партнер в финансовой независимости',
      copyright: '© 2026 Libra Agency. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования'
    },
    UA: {
      tagline: 'Libra Agency — Ваш партнер у фінансовій незалежності',
      copyright: '© 2026 Libra Agency. Всі права захищені.',
      privacy: 'Політика конфіденційності',
      terms: 'Умови використання'
    }
  };

  const text = content[language];

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Libra Agency
          </div>
          
          {/* Tagline */}
          <p className="text-gray-600 mb-6 font-light">
            {text.tagline}
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              {text.privacy}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              {text.terms}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            {text.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
