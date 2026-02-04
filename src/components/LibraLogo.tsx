interface LibraLogoProps {
  variant?: 'dark' | 'gradient' | 'white';
  className?: string;
}

export function LibraLogo({ variant = 'gradient', className = "" }: LibraLogoProps) {
  // Variation 1: Solid Dark Version
  if (variant === 'dark') {
    return (
      <div className={`flex items-baseline gap-2 ${className}`}>
        <span 
          className="font-bold text-gray-900"
          style={{
            fontSize: '28px',
            letterSpacing: '-0.03em',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          Libra
        </span>
        <span 
          className="font-semibold text-gray-700"
          style={{
            fontSize: '28px',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          Agency
        </span>
      </div>
    );
  }

  // Variation 3: White Version (for dark backgrounds)
  if (variant === 'white') {
    return (
      <div className={`flex items-baseline gap-2 ${className}`}>
        <span 
          className="font-bold text-white"
          style={{
            fontSize: '28px',
            letterSpacing: '-0.03em',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          Libra
        </span>
        <span 
          className="font-semibold text-white/80"
          style={{
            fontSize: '28px',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          Agency
        </span>
      </div>
    );
  }

  // Variation 2: Gradient Premium Version (default)
  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span 
        className="font-bold"
        style={{
          fontSize: '28px',
          letterSpacing: '-0.03em',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #db2777 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Libra
      </span>
      <span 
        className="font-semibold"
        style={{
          fontSize: '28px',
          letterSpacing: '-0.01em',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: 'linear-gradient(135deg, #4b5563 0%, #6b7280 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Agency
      </span>
    </div>
  );
}