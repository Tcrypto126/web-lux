import React, { PropsWithChildren } from "react"
import "@/style/globals.css"
import "@/style/typo.css"
import { Metadata } from "next"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import ThemeProvider from "@/context-providers/theme-provider"
import { cn } from "@/util"
import { sans } from "@/style/fonts"

export const metadata: Metadata = {
  title: {
    default: "Lux.market - new",
    template: `%s - Lux.market - new`,
  },
  description: "Your destination for all cool things.",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const RootLayout: React.FC<PropsWithChildren> = ({ children }) =>  (
  <html lang="en" suppressHydrationWarning>
    <head />
    <body className={cn("min-h-screen bg-background font-sans antialiased", sans.variable )}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout