import { ChevronRight, MessageCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1762430047160-db0e2670c533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGNpdHklMjBsaWdodHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY4NzQyMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Night city"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        
        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9D00FF] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF10F0] rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="inline-block mb-6 px-4 py-2 border border-[#D4AF37]/30 rounded-full bg-black/40 backdrop-blur-sm">
          <span className="text-[#D4AF37] tracking-wider text-sm uppercase font-semibold">
            Europa • Brasil
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="block text-white uppercase">Agência Europeia</span>
          <span className="block bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent uppercase">
            Libree
          </span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-wide">
          Agora no Brasil. <span className="text-[#FF10F0]">Estamos Abertos!</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Parceria com agência europeia de webcam / OnlyFans
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button 
            onClick={() => document.getElementById('casting')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          >
            <span className="relative z-10 uppercase tracking-wide">Inscrever-se no Casting</span>
            <ChevronRight className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          <a
            href="https://wa.me/5548920037886"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#25D366]/20 border-2 border-[#25D366] text-[#25D366] text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="uppercase tracking-wide">WhatsApp</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">5+</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Anos na Europa</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">200+</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Modelos</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">15K+</div>
            <div className="text-gray-400 text-sm md:text-base uppercase tracking-wide">Ganhos Mensais (R$)</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}