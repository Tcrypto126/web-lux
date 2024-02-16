import type { ReactNode } from 'react'

import type { Block } from '@hanzo/ui/blocks'

import type { ImageDef } from '@hanzo/ui/types'
import type { Product } from '@/types'

interface CardDetailBlock extends Block {
  blockType: 'card-detail'
  product: Product
  material: string
  image: ImageDef
  detail: ReactNode 
  initial: string
  annual: string
}

export {
  type CardDetailBlock as default
}
