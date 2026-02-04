import { DollarSign, TrendingUp, Calendar, Shield } from 'lucide-react';
import { CURRENCY } from '../config/currency';

interface FinancialTrustStripProps {
  language: 'EN' | 'PT' | 'RU' | 'UA';
}

export function FinancialTrustStrip({ language }: FinancialTrustStripProps) {
  const payouts = CURRENCY.payouts[language];
  
  const content = {
    EN: {
      items: [
        { icon: DollarSign, text: 'Starting from $1,000/month' },
        { icon: TrendingUp, text: 'Top models earn $10K–$15K+' },
        { icon: Calendar, text: 'Payouts twice per month' },
        { icon: Shield, text: '100% financial transparency' }
      ]
    },
    PT: {
      items: [
        { icon: DollarSign, text: 'A partir de $1.000/mês' },
        { icon: TrendingUp, text: 'Top modelos ganham $10K–$15K+' },
        { icon: Calendar, text: 'Pagamentos duas vezes por mês' },
        { icon: Shield, text: '100% transparência financeira' }
      ]
    },
    RU: {
      items: [
        { icon: DollarSign, text: 'Начиная с $1.000/месяц' },
        { icon: TrendingUp, text: 'Топ модели зарабатывают $10K–$15K+' },
        { icon: Calendar, text: 'Выплаты дважды в месяц' },
        { icon: Shield, text: '100% финансовая прозрачность' }
      ]
    },
    UA: {
      items: [
        { icon: DollarSign, text: 'Починаючи з $1.000/місяць' },
        { icon: TrendingUp, text: 'Топ моделі заробляють $10K–$15K+' },
        { icon: Calendar, text: 'Виплати двічі на місяць' },
        { icon: Shield, text: '100% фінансова прозорість' }
      ]
    }
  };

  const text = content[language];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {text.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 text-white group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-sm md:text-base leading-tight">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
