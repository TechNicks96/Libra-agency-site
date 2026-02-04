import { Star, TrendingUp } from 'lucide-react';

export function CasesSection() {
  const cases = [
    {
      name: "Camila",
      age: 24,
      experience: "1 ano de colaboração",
      income: "R$ 14.000",
      description: "Renda estável, crescimento constante, clientes internacionais",
      image: "https://images.unsplash.com/photo-1596095713029-5f68b397f1c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3Njg3NDIyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5
    },
    {
      name: "Júlia",
      age: 26,
      experience: "2 anos de colaboração",
      income: "R$ 18.000",
      description: "Top modelo, base de fãs internacional, crescimento contínuo",
      image: "https://images.unsplash.com/photo-1650978810653-112cb6018092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3Njg3NDIyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5
    },
    {
      name: "Larissa",
      age: 22,
      experience: "8 meses de colaboração",
      income: "R$ 11.500",
      description: "Início promissor, rápido crescimento, dedicação recompensada",
      image: "https://images.unsplash.com/photo-1763336016195-1942264993d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBsaWZlc3R5bGUlMjBsdXh1cnl8ZW58MXx8fHwxNzY4NzQyMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 5
    }
  ];

  return (
    <section id="cases" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Glow effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FF10F0] rounded-full blur-[150px] opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
            <span className="text-white">Casos Reais de</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Nossas Modelos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Histórias reais de mulheres que transformaram suas vidas trabalhando conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Rating stars */}
                <div className="absolute top-4 right-4 flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                {/* Income badge */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-sm border border-[#D4AF37]/40 rounded-full">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-[#D4AF37] font-bold">{item.income}</span>
                    <span className="text-gray-400 text-sm">/mês</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[#D4AF37] text-sm mb-3 uppercase tracking-wide">{item.age} anos • {item.experience}</p>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            <span className="text-[#D4AF37] font-semibold">Você pode ser a próxima!</span> Junte-se a centenas de modelos de sucesso
          </p>
          <button 
            onClick={() => document.getElementById('casting')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] uppercase tracking-wide"
          >
            Comece Sua Jornada
          </button>
        </div>
      </div>
    </section>
  );
}
