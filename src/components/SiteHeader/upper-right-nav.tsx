import React from 'react'
//import Link from "next/link"
//import { siteContent } from "@/content/site-content"
//import { buttonVariants } from "@/components/button"
//import { Icons } from "@/components/icons"

import ThemeToggle from "./theme-toggle"

const UpperRightNav: React.FC = () => (

  <nav className="flex items-center space-x-1">
    { /*
    <Link
      href={siteContent.links.twitter}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={buttonVariants({
          size: "icon",
          variant: "ghost",
        })}
      >
        <Icons.twitter className="h-5 w-5 fill-current" />
        <span className="sr-only">X</span>
      </div>
    </Link>
    */ }
    <ThemeToggle />
  </nav>
)

export default UpperRightNav
