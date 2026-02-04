import { useState } from 'react';
import { Globe, MessageSquare } from 'lucide-react';
import logo from 'figma:asset/9a203d6ccdc8d8fac78c7e62b6f221f148a54ed1.png';

type Language = 'EN' | 'PT' | 'RU' | 'UA';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ currentLanguage, onLanguageChange }: HeaderProps) {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages: Language[] = ['EN', 'PT', 'RU', 'UA'];

  const contactText = {
    EN: 'Contact Us',
    PT: 'Contate-nos',
    RU: 'Связаться',
    UA: 'Зв\'яжіться'
  };

  const ctaText = {
    EN: 'Start Your Journey',
    PT: 'Comece Agora',
    RU: 'Начать',
    UA: 'Почати'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <img 
              src={logo} 
              alt="Libra Agency" 
              className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Navigation & Language Switcher */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Get Started
              </button>
            </nav>

            {/* Contact Us Button */}
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-300 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm">{contactText[currentLanguage]}</span>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-blue-100 bg-blue-50/50 hover:bg-blue-100/70 transition-all duration-300 group"
              >
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">{currentLanguage}</span>
                <svg 
                  className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {isLanguageOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsLanguageOpen(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          onLanguageChange(lang);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors duration-200 ${
                          currentLanguage === lang
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-blue-50/50'
                        }`}
                      >
                        {lang === 'EN' && '🇬🇧 English'}
                        {lang === 'PT' && '🇧🇷 Português'}
                        {lang === 'RU' && '🇷🇺 Русский'}
                        {lang === 'UA' && '🇺🇦 Українська'}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 hover:scale-105"
            >
              {ctaText[currentLanguage]}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}