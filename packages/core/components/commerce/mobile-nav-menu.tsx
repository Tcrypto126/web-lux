'use client'
import React from 'react'

import type { LinkDef } from '@hanzo/ui/types'
import { LinkElement } from '@hanzo/ui/primitives'
import { cn } from '@hanzo/ui/util'
import type { LinkDefExtended } from '../../site-def/main-nav'
import MobileNavMenuAI from './mobile-nav-menu-ai'
import MobileNavMenuItem from './mobile-nav-menu-item'
import MobileAuthWidget from './mobile-login-button'

const MobileNav: React.FC<{
  currentAs: string | undefined
  links: LinkDefExtended[]
  className?: string
  commonItemClx?: string | ((def: LinkDef) => string),
  setChatbotOpen: (open: boolean) => void,
  /**
   * This is called *in addition* to the link's actual navigation 
   * action.  eg, I link is clicked, and the modal menu is closes
   */
  onAction?: () => void
    // TODO :aa shouldn't be so aware of parent context! 
  setMenuState: (arg: 'closed' | 'nav' | 'login' | 'bag') => void
}> = ({
  currentAs,
  links,
  onAction,
  setMenuState,
  className = '',
  commonItemClx,
  setChatbotOpen,
}) => (
  links.length > 0 ? (

    <div className={cn('flex flex-col h-full', className)} >
      <div className="flex flex-col flex-1">
        {links.map((el, index) => {
          const variant = el.variant ?? 'link'
          let internalClx = ''
          // note that linkFG (or any other variant of 'link') 
          // will not get assigned these classes,
          // and will remain styles is 'foreground' (hence the name)
          if (variant === 'link') {
            internalClx += ' text-muted hover:text-foreground active:text-accent rounded-none'
            if (currentAs && currentAs === el.href) {
              internalClx += ' text-accent '
            }
          }
          else {
            internalClx += ' min-w-0'
          }
          if (currentAs && currentAs === el.href) {
            internalClx += ' pointer-events-none'
          }
          const itemClx = (commonItemClx) ? (typeof commonItemClx === 'string' ? commonItemClx : commonItemClx(el)) : ''

          // return (
          //   <LinkElement 
          //     def={el}
          //     key={`common-${index}`}
          //     size='lg'
          //     className={cn(internalClx, itemClx)}
          //     onClick={onAction}  
          //   />
          // )
          if (el.isAIMenu) {
            return <MobileNavMenuAI link={el} setChatbotOpen={setChatbotOpen} />
          } 
          else {
            return <MobileNavMenuItem link={el} />
          }
        })}
      </div>
      <MobileAuthWidget className=' text-2xl' handleLogin={() => { setMenuState('login') }} />
    </div>
  ) : null
)

export default MobileNav
