import type { FacetValueDesc } from '@hanzo/commerce/types'

const BLACK_IMAGE = '/assets/img/cards-flat/black-f-700x441.png'
const ELITE_IMAGE = '/assets/img/cards-flat/gold-f-700x442.png'
const FOUNDER_IMAGE = '/assets/img/cards-flat/chrome-cool-f-700x441.png'
const SOVEREIGN_IMAGE = '/assets/img/cards-flat/titanium-f-700x441.png'

const CC_AR = 1.58577251 // international spec for CC's and our images

const CARD_LEVELS = [
  {
    value: 'B',
    label: 'Black',
    img: BLACK_IMAGE,
    imgAR: CC_AR
  },
  {
    value: 'E',
    label: 'Elite',
    img: ELITE_IMAGE,
    imgAR: CC_AR,
  },
  {
    value: 'F',
    label: 'Founder',
    img: FOUNDER_IMAGE,
    imgAR: CC_AR,
  },
  {
    value: 'S',
    label: 'Sovereign',
    img: SOVEREIGN_IMAGE,
    imgAR: CC_AR,
  },
] satisfies FacetValueDesc[]

const level1 = [
  {
    value: 'CR',
    label: 'Credit',
    img: BLACK_IMAGE,
    imgAR: CC_AR,
    sub: [...CARD_LEVELS]
  },
]

export default {
  value: 'LXM',
  label: '',
  sub: level1
}





