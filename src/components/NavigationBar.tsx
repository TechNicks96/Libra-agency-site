import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Renda', href: '#income' },
    { label: 'Casos', href: '#cases' },
    { label: 'Equipe', href: '#team' },
    { label: 'Benefícios', href: '#benefits' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent uppercase tracking-wider">
                Libree
              </span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#casting')}
                className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] uppercase tracking-wide text-sm"
              >
                Casting
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl text-gray-300 hover:text-[#D4AF37] transition-colors duration-300 font-bold uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#casting')}
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-xl font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] uppercase tracking-wide mt-4"
          >
            Casting
          </button>
        </div>
      </div>
    </>
  );
}
