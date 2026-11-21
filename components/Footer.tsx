import Image from "next/image"
import { BRAND_CONTACT, InfoModalKey } from "../data/aboutData"
import { RevealFromBottom } from "./ScrollReveal"
import Link from "next/link"

interface FooterProps {
  onOpenInfo: (key: InfoModalKey) => void
}

export function Footer({ onOpenInfo }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#162842] text-[#dce3eb]">
      <RevealFromBottom
        distance={24}
        className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8"
      >
        {/* Main Footer Row matching existing site */}
        <div className="flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
          <Link
            href="#top"
            onClick={scrollToTop}
            className="inline-flex shrink-0 items-center focus-visible:rounded"
            aria-label="Helping Hands Company — Back to top"
          >
            <Image
              src="/resources/helping-hands-logo.png"
              width={200}
              height={68}
              alt="Helping Hands Company — Together, We Make a Difference"
              className="h-[68px] w-[200px] max-w-full rounded bg-[#FFFEFA] object-contain object-center px-3.5 py-2"
            />
          </Link>

          <div className="text-sm leading-[1.8] text-[#dce3eb]">
            <p className="font-medium text-[#FFFEFA]">
              {BRAND_CONTACT.footerTagline}
            </p>
            <p className="mt-1">
              <Link
                href={`mailto:${BRAND_CONTACT.email}`}
                className="text-[#DBCEAC] transition-colors hover:text-[#FFFEFA]"
              >
                {BRAND_CONTACT.email}
              </Link>
              <span className="mx-2 text-[#C6B993]" aria-hidden="true">
                ·
              </span>
              <Link
                href={`tel:${BRAND_CONTACT.phone.replace(/\s+/g, "")}`}
                className="text-[#DBCEAC] transition-colors hover:text-[#FFFEFA]"
              >
                {BRAND_CONTACT.phone}
              </Link>
            </p>
          </div>

          <Link
            href="#top"
            onClick={scrollToTop}
            className="inline-flex min-h-[40px] items-center text-xs font-bold tracking-[0.16em] text-[#C6B993] uppercase transition-colors hover:text-[#FFFEFA]"
          >
            BACK TO TOP ↑
          </Link>
        </div>

        {/* Bottom Legal & Disclaimer Bar matching existing site */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#FFFEFA]/15 py-6 text-xs text-[#c0cad5] md:flex-row md:items-center">
          <span className="whitespace-nowrap">
            © {new Date().getFullYear()} {BRAND_CONTACT.organisation}
          </span>

          <span className="max-w-xl leading-relaxed text-[#c0cad5]">
            {BRAND_CONTACT.disclaimer}
          </span>

          <div className="flex items-center gap-2 whitespace-nowrap text-[#DBCEAC]">
            <button
              type="button"
              onClick={() => onOpenInfo("news")}
              className="cursor-pointer underline decoration-transparent underline-offset-4 transition-colors hover:text-[#FFFEFA] hover:decoration-[#C6B993]"
            >
              News
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenInfo("privacy")}
              className="cursor-pointer underline decoration-transparent underline-offset-4 transition-colors hover:text-[#FFFEFA] hover:decoration-[#C6B993]"
            >
              Privacy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenInfo("terms")}
              className="cursor-pointer underline decoration-transparent underline-offset-4 transition-colors hover:text-[#FFFEFA] hover:decoration-[#C6B993]"
            >
              Terms
            </button>
          </div>
        </div>
      </RevealFromBottom>
    </footer>
  )
}
