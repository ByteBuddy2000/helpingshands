"use client"
import { useState } from "react"
import { ArrowRight, MapPin, Menu, X } from "lucide-react"
import { BRAND_CONTACT, InfoModalKey, NAV_ITEMS } from "../data/aboutData"
import Image from "next/image"
import Link from "next/link"

interface NavbarProps {
  onOpenInfo: (key: InfoModalKey) => void
  onContactClick: () => void
}

export function Navbar({ onOpenInfo, onContactClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    sectionKey?: InfoModalKey
  ) => {
    setMobileOpen(false)
    if (sectionKey) {
      e.preventDefault()
      onOpenInfo(sectionKey)
      return
    }
    if (href.startsWith("#")) {
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div id="top">
      {/* Preserved Top Strip */}
      <div className="hidden bg-[#162842] text-[#DBCEAC]">
        <div className="mx-auto flex min-h-[34px] max-w-[1200px] items-center justify-between px-4 text-[10px] font-bold tracking-[0.15em] sm:px-6 lg:px-8">
          <span>{BRAND_CONTACT.tagline}</span>
          <span className="inline-flex items-center gap-1.5 tracking-[0.08em]">
            <MapPin className="h-3.5 w-3.5 text-[#C6B993]" aria-hidden="true" />
            <span>{BRAND_CONTACT.location}</span>
          </span>
        </div>
      </div>

      {/* Preserved Warm Ivory Header */}
      <header className="relative z-30 border-b border-[#e8e2d5] bg-[#FFFEFA]">
        <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link
            href="#top"
            onClick={() => setMobileOpen(false)}
            className="inline-flex shrink-0 items-center focus-visible:rounded"
            aria-label="Helping Hands Company — UK Branch home"
          >
            <Image
              src="/resources/helping-hands-logo.png"
              width={180}
              height={60}
              alt="Helping Hands Company — Together, We Make a Difference"
              className="block h-[60px] w-[180px] max-w-[54vw] object-contain object-left sm:h-[70px] sm:w-[224px]"
            />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-[#1A3150] lg:hidden"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 text-[13px] font-semibold text-[#4a5a6f] lg:flex"
          >
            {NAV_ITEMS.map((item) => {
              const isAbout = item.label === "About us"
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.sectionKey)}
                  aria-current={isAbout ? "page" : undefined}
                  className={`shrink-0 border-b-2 py-1 whitespace-nowrap transition-colors duration-150 ${
                    isAbout
                      ? "border-[#C6B993] text-[#1A3150]"
                      : "border-transparent hover:border-[#C6B993] hover:text-[#1A3150]"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                onContactClick()
              }}
              className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center gap-2.5 rounded bg-[#162842] px-5 py-2.5 text-[12px] font-bold whitespace-nowrap text-[#FFFEFA] transition-colors duration-150 hover:bg-[#213C5C]"
            >
              <span>Get in touch</span>
              <ArrowRight
                className="h-4 w-4 text-[#C6B993]"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-[#e8e2d5] bg-[#FFFEFA] px-4 py-4 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isAbout = item.label === "About us"
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href, item.sectionKey)
                    }
                    aria-current={isAbout ? "page" : undefined}
                    className={`flex min-h-[44px] items-center rounded px-3 text-sm font-semibold transition-colors ${
                      isAbout
                        ? "bg-[#f5f2eb] text-[#1A3150]"
                        : "text-[#4a5a6f] hover:bg-[#f5f2eb] hover:text-[#1A3150]"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  onContactClick()
                }}
                className="mt-2 inline-flex min-h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded bg-[#162842] px-5 py-3 text-sm font-bold text-[#FFFEFA] transition-colors hover:bg-[#213C5C]"
              >
                <span>Get in touch</span>
                <ArrowRight
                  className="h-4 w-4 text-[#C6B993]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>
        )}
      </header>
    </div>
  )
}
