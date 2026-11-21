"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
      className={`fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#315675] bg-gradient-to-br from-[#172B45] via-[#203E5D] to-[#315675] text-white shadow-lg shadow-[#172B45]/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172B45]/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6B993] ${
        isVisible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-5 scale-90 opacity-0"
      }`}
    >
      <ArrowUp size={21} strokeWidth={2.2} className="text-[#D8C18B]" />
    </button>
  )
}

export default ScrollToTop
