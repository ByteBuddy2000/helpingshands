"use client"
import { useEffect } from "react"
import { ArrowRight, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { INFO_MODAL_MAP, InfoModalKey } from "../data/aboutData"

interface BranchInfoModalProps {
  activeKey: InfoModalKey | null
  onClose: () => void
  onProceedToEnquiry: (defaultTopic: string) => void
}

export function BranchInfoModal({
  activeKey,
  onClose,
  onProceedToEnquiry,
}: BranchInfoModalProps) {
  useEffect(() => {
    if (!activeKey) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeKey, onClose])

  const content = activeKey ? INFO_MODAL_MAP[activeKey] : null

  return (
    <AnimatePresence>
      {activeKey && content && (
        <motion.div
          key="branch-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#162842]/70 p-4 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="branch-info-modal-title"
          onClick={onClose}
        >
          <motion.div
            key="branch-modal-panel"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg rounded-lg border border-[#DBCEAC] bg-[#FFFEFA] p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close information dialog"
              className="absolute top-4 right-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded text-[#4a5a6f] transition-colors hover:bg-[#f5f2eb] hover:text-[#1A3150]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <p className="text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
              {content.kicker}
            </p>
            <h3
              id="branch-info-modal-title"
              className="font-display mt-2 pr-8 text-2xl font-extrabold tracking-[-0.03em] text-[#1A3150]"
            >
              {content.title}{" "}
              <span className="text-[#8a7040]">{content.accentWord}</span>
            </h3>

            <div className="mt-5 space-y-3.5 text-sm leading-[1.75] text-[#4a5a6f]">
              {content.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-[#e5dfd2] pt-5">
              <button
                type="button"
                onClick={() => {
                  onProceedToEnquiry(content.defaultTopic)
                  onClose()
                }}
                className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded bg-[#162842] px-5 py-2.5 text-xs font-bold text-[#FFFEFA] transition-colors hover:bg-[#213C5C]"
              >
                <span>{content.ctaLabel}</span>
                <ArrowRight
                  className="h-4 w-4 text-[#C6B993]"
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex min-h-[44px] cursor-pointer items-center rounded px-4 py-2 text-xs font-semibold text-[#4a5a6f] transition-colors hover:bg-[#f5f2eb] hover:text-[#1A3150]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
