import { ArrowRight } from 'lucide-react';

interface PremiumCTAButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function PremiumCTAButton({ onClick, children }: PremiumCTAButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center justify-center gap-2 px-8 h-[56px] rounded-[16px] font-medium text-lg text-white overflow-visible transition-all duration-200 ease-out hover:-translate-y-[3px] hover:scale-[1.03]"
    >
      {/* Gradient glow - positioned behind button */}
      <div 
        className="absolute inset-0 rounded-[16px] opacity-30 blur-[50px] scale-110 transition-opacity duration-200 ease-out group-hover:opacity-40"
        style={{
          background: 'linear-gradient(135deg, #6C5CFF 0%, #A855F7 100%)',
        }}
      />
      
      {/* Main button with gradient */}
      <div 
        className="absolute inset-0 rounded-[16px] transition-all duration-200 ease-out group-hover:brightness-105"
        style={{
          background: 'linear-gradient(135deg, #5B6CFF 0%, #A855F7 100%)',
        }}
      />
      
      {/* Content with text shadow */}
      <span 
        className="relative flex items-center justify-center gap-2"
        style={{
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.2)',
        }}
      >
        {children}
        <ArrowRight className="w-5 h-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </span>
    </button>
  );
}