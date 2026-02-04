import { Award, Globe, TrendingUp } from 'lucide-react';

export function FinalSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#FF10F0] rounded-full blur-[150px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#9D00FF] rounded-full blur-[150px] opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] border-2 border-[#D4AF37] rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#FF10F0]/10 rounded-3xl" />
            
            <div className="relative z-10">
              {/* Logo/Brand */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-black/40 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full">
                <Award className="w-6 h-6 text-[#D4AF37]" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent uppercase tracking-wider">
                  Libree
                </span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Agência Europeia.
                <br />
                <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
                  Renda Real.
                </span>
                <br />
                Grandes Perspectivas.
              </h3>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Construa sua carreira com quem entende de mercado internacional e está comprometido com seu sucesso
              </p>

              {/* Features */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 px-5 py-3 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full">
                  <Globe className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white font-semibold">Padrão Europeu</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full">
                  <TrendingUp className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white font-semibold">Crescimento Garantido</span>
                </div>
                <div className="flex items-center gap-2 px-5 py-3 bg-black/60 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full">
                  <Award className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white font-semibold">Suporte 24/7</span>
                </div>
              </div>

              {/* Flags */}
              <div className="flex justify-center items-center gap-6 pt-6 border-t border-[#D4AF37]/20">
                <div className="flex items-center gap-2">
                  <div className="text-3xl">🇪🇺</div>
                  <span className="text-gray-400 text-sm">Europa</span>
                </div>
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                <div className="flex items-center gap-2">
                  <div className="text-3xl">🇧🇷</div>
                  <span className="text-gray-400 text-sm">Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
