import { TrendingUp, DollarSign, Crown } from 'lucide-react';

export function IncomeSection() {
  return (
    <section id="income" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9D00FF] rounded-full blur-[150px] opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Renda que muda vidas
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Entry Level */}
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6">
                <DollarSign className="w-8 h-8 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Iniciante
              </h3>
              
              <div className="mb-4">
                <span className="text-5xl font-bold text-[#D4AF37]">R$ 5.500</span>
                <span className="text-gray-400 text-lg ml-2">+</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Salário inicial para modelos começando na plataforma
              </p>
            </div>
          </div>

          {/* Card 2 - Experienced */}
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl p-8 hover:border-[#D4AF37]/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full mb-6">
                <TrendingUp className="w-8 h-8 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Experiente
              </h3>
              
              <div className="mb-4">
                <span className="text-5xl font-bold text-[#D4AF37]">R$ 10.000</span>
                <span className="text-gray-400 text-lg ml-2">+</span>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                Ganhos médios após alguns meses trabalhando conosco
              </p>
            </div>
          </div>

          {/* Card 3 - Top Models */}
          <div className="group relative bg-gradient-to-br from-[#2a1a0a] to-[#0a0a0a] border-2 border-[#D4AF37] rounded-2xl p-8 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-2xl" />
            
            {/* Top badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] rounded-full">
              <span className="text-black text-xs font-bold uppercase tracking-wider">Top Modelos</span>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full mb-6">
                <Crown className="w-8 h-8 text-[#D4AF37]" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                Top Modelos
              </h3>
              
              <div className="mb-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">R$ 15.000</span>
                <span className="text-[#D4AF37] text-lg ml-2">+</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Nossas top modelos ganham consistentemente acima de R$ 15.000
              </p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            💰 <span className="text-white">Pagamentos semanais.</span> Sem atrasos, sem burocracia. 
            <br className="hidden md:block" />
            Você trabalha, você recebe.
          </p>
        </div>
      </div>
    </section>
  );
}
