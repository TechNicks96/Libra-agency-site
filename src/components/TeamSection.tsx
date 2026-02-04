import { Users, Headphones, Code, Camera, Shield, TrendingUp } from 'lucide-react';

export function TeamSection() {
  const teamRoles = [
    {
      icon: Users,
      title: "Gerentes",
      description: "Suporte 24/7 para orientação e crescimento",
      count: "15+"
    },
    {
      icon: Headphones,
      title: "Administradores",
      description: "Gestão completa da sua presença online",
      count: "10+"
    },
    {
      icon: Code,
      title: "Especialistas em TI",
      description: "Plataforma segura e tecnologia de ponta",
      count: "8+"
    },
    {
      icon: Camera,
      title: "Produção",
      description: "Fotógrafos e editores profissionais",
      count: "12+"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção de privacidade e dados",
      count: "5+"
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "Estratégias para maximizar seus ganhos",
      count: "7+"
    }
  ];

  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#9D00FF] rounded-full blur-[150px] opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight leading-tight">
            <span className="text-white">Com Você Trabalha</span>
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Uma Equipe Inteira
            </span>
            <br />
            <span className="text-white">de Profissionais</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            Não somos gerentes individuais. <span className="text-[#D4AF37] font-semibold">Somos uma grande equipe</span> com anos de experiência na Europa
          </p>
        </div>

        {/* Team photo */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/30 group">
            <img 
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODY2NjI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our professional team"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            {/* Overlay text */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] border-2 border-black flex items-center justify-center text-black font-bold">
                      {i + 1}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-black/80 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold backdrop-blur-sm">
                    50+
                  </div>
                </div>
              </div>
              <p className="text-white text-xl font-semibold">
                Mais de 50 profissionais dedicados ao seu sucesso
              </p>
            </div>
          </div>
        </div>

        {/* Team roles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamRoles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#D4AF37]/20 rounded-2xl p-6 hover:border-[#D4AF37]/60 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl">
                      <Icon className="w-7 h-7 text-[#D4AF37]" />
                    </div>
                    <div className="px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-full">
                      <span className="text-[#D4AF37] font-bold text-sm">{role.count}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">
                    {role.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {role.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#D4AF37] rounded-3xl p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-3xl" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                "Nossa equipe europeia agora está no Brasil para trazer o <span className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">padrão internacional</span> de suporte e resultados"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
