import heroIllustration from 'figma:asset/0d3ccb862f9dd05a591d470e38df183a7d1846a6.png';

export function PremiumHeroIllustration() {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden rounded-[2rem]" 
         style={{ 
           boxShadow: '0 20px 80px -20px rgba(147, 51, 234, 0.14)' 
         }}>
      {/* Darker premium gradient background - deeper contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#1a1535] to-[#1f1640]" />
      
      {/* Subtle editorial gradient overlay - navy → violet */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a2e]/60 via-[#1e1552]/40 to-transparent" />
      
      {/* LIGHT UI INTEGRATION: Soft white gradient overlay from top */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/8 to-transparent" />
      
      {/* Reduced center glow - 40% less intensity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-purple-500/24 via-blue-600/12 to-transparent rounded-full blur-3xl" />
      
      {/* Subtle top accent - reduced from 25% to 15% */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-blue-400/15 via-purple-400/8 to-transparent blur-2xl" />
      
      {/* Minimal bottom warmth - reduced from 20% to 12% */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gradient-to-t from-pink-500/12 via-purple-500/6 to-transparent blur-2xl" />
      
      {/* Main illustration - FULL FILL with no internal margins */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Very subtle backdrop - reduced from 30% to 18% */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/18 via-purple-400/14 to-pink-400/10 rounded-full blur-3xl scale-85" />
          
          {/* Main illustration - FILL container fully */}
          <img 
            src={heroIllustration} 
            alt="Premium creator agency - elegant woman silhouette representing high-income digital work"
            className="relative w-full h-full object-cover"
            style={{
              filter: 'drop-shadow(0 8px 64px rgba(99, 102, 241, 0.28)) contrast(1.1) brightness(1.15) saturate(0.95)',
              transform: 'scale(1.05)'
            }}
          />
          
          {/* Refined light reflection - top left, more subtle */}
          <div className="absolute top-[12%] left-[22%] w-32 h-32 bg-gradient-to-br from-white/12 via-blue-200/6 to-transparent rounded-full blur-2xl" />
          
          {/* Refined accent - bottom right, minimal */}
          <div className="absolute bottom-[18%] right-[18%] w-28 h-28 bg-gradient-to-tl from-pink-200/10 via-purple-200/6 to-transparent rounded-full blur-xl" />
        </div>
      </div>
      
      {/* Minimal luxury particles - BLURRED for light UI integration */}
      <div className="absolute top-[18%] left-[18%] w-2 h-2 bg-blue-300/50 rounded-full blur-[2px] animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute top-[28%] right-[22%] w-1.5 h-1.5 bg-purple-300/45 rounded-full blur-[2px] animate-pulse" 
           style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-[32%] left-[20%] w-1.5 h-1.5 bg-pink-300/40 rounded-full blur-[2px] animate-pulse" 
           style={{ animationDuration: '4.5s', animationDelay: '2s' }} />
      <div className="absolute bottom-[20%] right-[16%] w-1.5 h-1.5 bg-blue-200/45 rounded-full blur-[2px] animate-pulse" 
           style={{ animationDuration: '5.5s', animationDelay: '3s' }} />
      
      {/* Natural edge blending vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      
      {/* Refined border */}
      <div className="absolute inset-0 ring-1 ring-white/8" />
    </div>
  );
}