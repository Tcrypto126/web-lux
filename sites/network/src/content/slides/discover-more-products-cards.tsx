import { 
  VideoBlockComponent,
  type Block,
  type ElementBlock,
  type EnhHeadingBlock,
  type VideoBlock,
  type CarteBlancheBlock,
} from '@hanzo/ui/blocks'
import { DEF_VIDEO_PROPS } from '@hanzo/ui/util'
import Link from 'next/link'

const silverVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/luxsilver-poster.jpg',
  sources: [
    '/assets/video/luxsilver.mp4',
  ],
  dim: {md: { w: 1172, h: 1920}, lg: {w: 1172, h: 1920}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

const goldVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/luxgold-poster.jpg',
  sources: [
    '/assets/video/luxgold.mp4',
  ],
  dim: {md: { w: 1282, h: 1920}, lg: {w: 1282, h: 1920}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

const creditVideo = {
  blockType: 'video',
  videoProps: DEF_VIDEO_PROPS, 
  poster: '/assets/video/LUX-CARD-poster.jpg',
  sources: [
    '/assets/video/LUX-CARD-transcode.mp4', 
    '/assets/video/LUX-CARD-transcode.webm'
  ],
  dim: {md: { w: 758, h: 588}, lg: {w: 758, h: 588}},
  sizing: {vh: 30, mobile: {vw: 20}}
} as VideoBlock

export default [
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      {blockType: 'element',
        element: <>
          <Link href='https://lux.market/silver' target='_blank' className='border rounded-md hover:border-primary-lux h-[15rem] sm:h-[20rem] p-1'>
            <VideoBlockComponent block={silverVideo} className='h-full !my-0'/>
          </Link>
        </>
      } as ElementBlock,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'SILVER', level: 3},
      } as EnhHeadingBlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      {blockType: 'element',
        element: <>
          <Link href='https://lux.market/gold' target='_blank' className='border rounded-md hover:border-primary-lux h-[15rem] sm:h-[20rem] p-1'>
            <VideoBlockComponent block={goldVideo} className='h-full !my-0'/>
          </Link>
        </>
      } as ElementBlock,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'GOLD', level: 3},
      } as EnhHeadingBlock,
    ]
  } as CarteBlancheBlock,
  {blockType: 'carte-blanche',
    specifiers: 'no-outer-borders',
    content: [
      {blockType: 'element',
        element: <>
          <Link href='https://lux.market/credit' target='_blank' className='border rounded-md hover:border-primary-lux h-[15rem] sm:h-[20rem] p-1'>
            <VideoBlockComponent block={creditVideo} className='h-full !my-0'/>
          </Link>
        </>
      } as ElementBlock,
      {blockType: 'space', level: 0},
      {blockType: 'enh-heading',
        specifiers: 'center',
        heading: {text: 'CREDIT', level: 3},
      } as EnhHeadingBlock,
    ]
  } as CarteBlancheBlock,
] as Block[]