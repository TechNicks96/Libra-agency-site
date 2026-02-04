import { Globe } from 'lucide-react';
import { useState } from 'react';
import { LibraLogo } from './LibraLogo';

interface PremiumHeaderProps {
  currentLanguage: 'EN' | 'PT' | 'RU' | 'UA';
  onLanguageChange: (lang: 'EN' | 'PT' | 'RU' | 'UA') => void;
}

export function PremiumHeader({ currentLanguage, onLanguageChange }: PremiumHeaderProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'PT', name: 'Português' },
    { code: 'RU', name: 'Русский' },
    { code: 'UA', name: 'Українська' }
  ];

  const content = {
    EN: { cta: 'Get Started' },
    PT: { cta: 'Começar' },
    RU: { cta: 'Начать' },
    UA: { cta: 'Почати' }
  };

  const text = content[currentLanguage];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50" 
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-1.5 md:py-2">
        <div className="flex items-center justify-between min-h-[60px] md:min-h-[64px]">
          {/* Official Libra Agency Logo - Left Aligned */}
          <div className="flex items-center">
            <LibraLogo />
          </div>

          {/* Right side - Language & CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{currentLanguage}</span>
              </button>

              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden min-w-[160px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code as 'EN' | 'PT' | 'RU' | 'UA');
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                        currentLanguage === lang.code
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="px-5 md:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm md:text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              {text.cta}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}