import media from './video'
import buyLink from './buy-link'

export default {
  blockType: 'banner',
  title: 'LUX COIN',
  byline: <>Genesis Collection now available <br className='sm:hidden' /> on Open Sea.</>,
  media,
  cta: {
    blockType: 'cta',
    elements: [
      {
        title: "Learn More",
        href: "/coin",
        variant: 'outline'
      },
      buyLink
    ]
  } 
}