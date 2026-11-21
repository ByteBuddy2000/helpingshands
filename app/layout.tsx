import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper"
import BrowserProtection from "@/components/Security/BrowserProtection"
import { TooltipProvider } from "@/components/ui/tooltip"
import ScrollToTop from "@/components/ScrollToTop"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
    >
      <body cz-shortcut-listen="true">
        <ThemeProvider>
          <TooltipProvider>

            <SessionWrapper>
              <BrowserProtection />

              {children}
              <ScrollToTop />

            </SessionWrapper>
          </TooltipProvider>

        </ThemeProvider>
      </body>
    </html>
  )
}
