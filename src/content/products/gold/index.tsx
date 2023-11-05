import type * as C from '@/types/blocks'

import MiniChart from '@/components/mini-chart'

import media from './video'
import accordian from './accordian'

export default {
  blockType: 'product-detail',
  title: 'LUX GOLD',
  desc: 'Experience unparalleled access to gold with 1:1 asset-backed Lux Gold NFTs, sovereign ownership of physical gold without management fees, and mine-direct discount pricing.',
  media,
  accordian,
  price: {
    heading: 'Price',
    priceCard: {
      blockType: 'card',
      title: 'Lux Gold Price / Oz',
      content: <h5>USD 2000</h5>,
    },
    msCard: {
      blockType: 'card',
      cardType: 'full-width',
      title: 'Market Spot Price / Oz',
      content: <MiniChart widgetProps ={{
        symbol: 'GOLD',
        autosize: true,
        colorTheme: 'dark',
        lineColor: "rgb(114, 27, 228)",
        bottomGradientColor: "rgba(255, 255, 255, 0.1)",
        dateRange: '60M',
      }}/>
    }
  },
  blocks: [
    {
      blockType: 'heading',
      heading: 'Editions'
    } as C.HeadingBlock,
    {
      blockType: 'card',
      cardType: 'media-left',
      title: 'NEXT MINT',
      content: <>
        <p>Available: 1,000,100 oz</p>
        <p>Price: $2000 / oz</p>
        <p>Spot price:: ~$2050 / oz</p>
      </>,
      media,
    } as C.CardBlock,
    {
      blockType: 'cta',
      elements: [{
        title: 'Buy Now',
        href: '/', // TOOD
        variant: 'primary'
      }]
    } as C.CTABlock,
  ] as C.Block[]
} as C.ProductDetailBlock
