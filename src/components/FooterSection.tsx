import { Instagram, Send, Mail, Phone } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="relative bg-black border-t border-[#D4AF37]/20 py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#D4AF37] rounded-full blur-[150px] opacity-5" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent uppercase tracking-wider">
                Libree
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Agência europeia de webcam e OnlyFans agora no Brasil. Transformando vidas através de oportunidades internacionais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">Links Rápidos</h4>
            <div className="space-y-2">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Renda', href: '#income' },
                { label: 'Casos de Sucesso', href: '#cases' },
                { label: 'Nossa Equipe', href: '#team' },
                { label: 'Benefícios', href: '#benefits' },
                { label: 'Casting', href: '#casting' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wide">Contato</h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/5548920037886"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>+55 48 92 003 7886</span>
              </a>
              <a 
                href="mailto:contato@libree.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>contato@libree.com</span>
              </a>
              <div className="flex gap-4 pt-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-[#D4AF37]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/5548920037886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#25D366]/20 border border-[#25D366]/40 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 text-[#25D366]"
                >
                  <Send className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Libree Agency. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <button className="hover:text-[#D4AF37] transition-colors duration-300">
                Privacidade
              </button>
              <span>•</span>
              <button className="hover:text-[#D4AF37] transition-colors duration-300">
                Termos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}