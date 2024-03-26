import TravelBenefits from './travel-benefits.mdx'
import LifestyleBenefits from './lifestyle-benefits.mdx'
import Rewards from './rewards.mdx'
import KarmaRewards from './karma-rewards.mdx'
import type { Card } from '@/types/card'

const card: Card = {
  img: {
    src: '/assets/img/cards-flat/gold-f-700x442.png',
    dim: {w: 700, h: 442 },
    alt: 'Lux Elite Card'
  },
  title: 'Lux Elite Card',
  rarity: '1/10,000',
  materials: [
    {
      title: '24k Gold',
      img: '/assets/img/materials/elite-card-gold-100x99.png',
      sku: 'LXM-CR-E-24G'
    },
    {
      title: 'Sterling Silver',
      img: '/assets/img/materials/elite-card-silver-99x99.png',
      sku: 'LXM-CR-E-SS'
    }
  ],
  annualFee: 200,
  initiationFee: 4990,
  replacementFee: 79,
  rewardPct: 9,
  fxRatePct: 0.5,
  maxAccountHolders: 5,
  travelBenefits: <TravelBenefits/>,
  lifestyleBenefits: <LifestyleBenefits/>,
  rewards: <Rewards/>,
  karmaRewards: <KarmaRewards/>,
}

export {
  card as default
}