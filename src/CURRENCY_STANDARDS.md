# Libra Agency - Currency & Financial Messaging Standards

## CURRENCY POLICY

**ALL financial displays use USD ONLY** - No exceptions.

### ❌ NEVER USE:
- R$ (Brazilian Real)
- € (Euro)  
- Any local currency symbols
- Mixed currencies

### ✅ ALWAYS USE:
- $ (US Dollar symbol)
- USD format

---

## STANDARD INCOME RANGES

### Correct Formats:

```
✔ $1,000+
✔ $1,000 – $15,000+
✔ $10K – $15K+
✔ Top models earn $10,000+
```

### Incorrect Formats:

```
❌ R$ 5.500
❌ €5,000
❌ $5K-$15K (missing space around dash)
❌ 10-15K USD
```

---

## PAYOUT MESSAGING

### Standard Payout Schedule:

**Primary:** "Bi-Monthly Payouts" or "Payouts Twice Per Month"

**Supporting line:** "Reliable payouts directly to you — always on schedule"

### Translations:

| Language | Schedule | Description |
|----------|----------|-------------|
| EN | Bi-Monthly / Twice Per Month | Reliable payouts directly to you — always on schedule |
| PT | Quinzenal / Duas Vezes Por Mês | Pagamentos confiáveis direto para você — sempre no prazo |
| RU | Дважды в месяц / Два раза в месяц | Надежные выплаты напрямую вам — всегда по графику |
| UA | Двічі на місяць / Два рази на місяць | Надійні виплати безпосередньо вам — завжди за графіком |

### ❌ DO NOT USE:
- "Weekly payouts"
- "Payouts every two weeks"  
- "Flexible payout timing"
- Any vague or inconsistent messaging

---

## GLOBAL CURRENCY CONFIGURATION

All currency data is centralized in `/config/currency.ts`

```typescript
import { CURRENCY } from '../config/currency';

// Use predefined income ranges
CURRENCY.income.starting        // "$1,000+"
CURRENCY.income.startingRange   // "$1,000 – $15,000+"
CURRENCY.income.topModels       // "$10K – $15K+"

// Use standardized payout messaging
CURRENCY.payouts[language].schedule
CURRENCY.payouts[language].description
```

---

## FINANCIAL TRUST MESSAGING

### Core Trust Points (must appear prominently):

1. ✅ **Starting from $1,000/month** - Clear entry point
2. ✅ **Top models earn $10K–$15K+** - Realistic ceiling
3. ✅ **Payouts twice per month** - Consistent schedule
4. ✅ **100% financial transparency** - Trust builder

### Visual Hierarchy Requirements:

- Income numbers must be **impossible to miss** when scanning
- Font size for income: **4xl to 5xl** minimum
- Use gradient text for income figures
- Bold trust strip with all 4 points above the fold

---

## COMPONENT CHECKLIST

### Active Components (✅ Updated):
- [x] `/components/LibraHero.tsx` - Uses USD
- [x] `/components/IncomeTrustBlock.tsx` - Uses USD + bi-monthly payouts
- [x] `/components/LifestyleSection.tsx` - Uses USD
- [x] `/components/FinancialTrustStrip.tsx` - Uses USD + standardized messaging
- [x] `/components/FloatingContactButtons.tsx` - No currency
- [x] `/components/CTASection.tsx` - No currency
- [x] `/components/BenefitsSection.tsx` - References earnings (no specific amounts)

### Deprecated Components (Not in use, but contain old R$ currency):
- [ ] `/components/HeroSection.tsx` - Contains R$
- [ ] `/components/IncomeSection.tsx` - Contains R$
- [ ] `/components/CasesSection.tsx` - Contains R$

**Recommendation:** Delete deprecated components or update to USD standards.

---

## DESIGN CONSISTENCY RULES

### Typography for Income:
- **Minimum size:** text-4xl (36px)
- **Recommended:** text-5xl to text-7xl for hero sections
- **Weight:** font-bold
- **Color:** Gradient from blue-600 to blue-500

### CTA Button Text:
- "Start Your Journey"
- "Talk to Us"
- "Apply Now"  
- "Message Us"

❌ Avoid generic: "Submit", "Send", "Contact"

### Visual Scannability:
Users should understand within **3 seconds**:
1. How much they can earn ($1,000 – $15,000+)
2. That it is safe (100% transparency, security)
3. That support exists (24/7, bi-monthly payouts)

---

## MULTI-LANGUAGE CURRENCY FORMATTING

### Number Formatting by Region:

| Language | Format | Example |
|----------|--------|---------|
| EN | $1,000 – $15,000+ | Uses comma separator |
| PT | $1.000 – $15.000+ | Uses period separator (BR convention) |
| RU | $1.000 – $15.000+ | Uses period separator |
| UA | $1.000 – $15.000+ | Uses period separator |

**Important:** All use **$** symbol, only the thousand separator changes.

---

## QUALITY ASSURANCE

Before deploying any changes:

1. ✅ Search entire codebase for `R$` - should find 0 results in active files
2. ✅ Search entire codebase for `€` - should find 0 results
3. ✅ Verify all income displays use `$` symbol
4. ✅ Verify payout messaging is "Bi-Monthly" or "Twice Per Month"
5. ✅ Check FinancialTrustStrip displays prominently
6. ✅ Verify no contradictory income claims across pages

---

## NOTES

- **Precision is premium.** No contradictions = increased trust.
- **One currency.** One message. One truth.
- Keep this document updated whenever financial messaging changes.

Last Updated: 2026-02-04
