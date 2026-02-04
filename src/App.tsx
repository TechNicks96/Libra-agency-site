import { useState } from 'react';
import { PremiumHeader } from './components/PremiumHeader';
import { PremiumHero } from './components/PremiumHero';
import { IncomePotential } from './components/IncomePotential';
import { IsThisForYou } from './components/IsThisForYou';
import { RealSuccessStories } from './components/RealSuccessStories';
import { ZeroStressStart } from './components/ZeroStressStart';
import { PremiumLifestyle } from './components/PremiumLifestyle';
import { PremiumCTA } from './components/PremiumCTA';
import { PremiumFooter } from './components/PremiumFooter';
import { FloatingContactButtons } from './components/FloatingContactButtons';

type Language = 'EN' | 'PT' | 'RU' | 'UA';

export default function App() {
  const [language, setLanguage] = useState<Language>('EN');

  return (
    <div className="min-h-screen bg-white antialiased">
      <PremiumHeader currentLanguage={language} onLanguageChange={setLanguage} />
      <PremiumHero language={language} />
      <IncomePotential language={language} />
      <IsThisForYou language={language} />
      <RealSuccessStories language={language} />
      <ZeroStressStart language={language} />
      <PremiumLifestyle language={language} />
      <PremiumCTA language={language} />
      <PremiumFooter language={language} />
      <FloatingContactButtons language={language} />
    </div>
  );
}