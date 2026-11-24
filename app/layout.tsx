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

export const metadata = {
  title: "helpingshands",
  description: "helpingshands is a platform that connects people in need with those who can help. We provide a safe and secure environment for users to offer and request assistance, fostering a community of care and support.",
  keywords: [
    "helpingshands",
    "community support",
    "assistance platform",
  ],
    
  icons: {
    icon: "/logo.png",
  },
};


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
              {/* <BrowserProtection /> */}

              {children}
              <ScrollToTop />
            </SessionWrapper>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
