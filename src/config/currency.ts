/**
 * Global Currency Configuration for Libra Agency
 * 
 * ALL financial displays across the website use USD only.
 * This ensures complete consistency and clarity.
 */

export const CURRENCY = {
  symbol: '$',
  code: 'USD',
  
  // Standardized income ranges
  income: {
    starting: '$1,000+',
    startingRange: '$1,000 – $15,000+',
    topModels: '$10K – $15K+',
    topModelsLong: '$10,000 – $15,000+',
  },
  
  // Payout schedule (standardized messaging)
  payouts: {
    EN: {
      schedule: 'Bi-Monthly',
      scheduleAlt: 'Twice Per Month',
      description: 'Reliable payouts directly to you — always on schedule'
    },
    PT: {
      schedule: 'Quinzenal',
      scheduleAlt: 'Duas Vezes Por Mês',
      description: 'Pagamentos confiáveis direto para você — sempre no prazo'
    },
    RU: {
      schedule: 'Дважды в месяц',
      scheduleAlt: 'Два раза в месяц',
      description: 'Надежные выплаты напрямую вам — всегда по графику'
    },
    UA: {
      schedule: 'Двічі на місяць',
      scheduleAlt: 'Два рази на місяць',
      description: 'Надійні виплати безпосередньо вам — завжди за графіком'
    }
  }
} as const;

/**
 * Format a number as USD currency
 * @param amount - The numeric amount
 * @param abbreviated - Use K for thousands (e.g., $10K instead of $10,000)
 */
export function formatCurrency(amount: number, abbreviated = false): string {
  if (abbreviated && amount >= 1000) {
    const thousands = amount / 1000;
    return `$${thousands}K`;
  }
  return `$${amount.toLocaleString('en-US')}`;
}

/**
 * Income range formatter
 * @param min - Minimum income
 * @param max - Maximum income
 * @param abbreviated - Use abbreviated format (K)
 */
export function formatIncomeRange(min: number, max: number, abbreviated = false): string {
  const minFormatted = formatCurrency(min, abbreviated);
  const maxFormatted = formatCurrency(max, abbreviated);
  return `${minFormatted} – ${maxFormatted}+`;
}
