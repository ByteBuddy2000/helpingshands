"use client"
import { useState } from "react"
import { HandHeart } from "lucide-react"

interface ResilientImageProps {
  src: string
  alt: string
  fallbackTitle: string
  className?: string
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = "",
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#1A3150] via-[#213C5C] to-[#162842] p-8 text-center text-[#FFFEFA] ${className}`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C6B993]/40 bg-[#162842]/70 text-[#C6B993]">
          <HandHeart className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="font-display text-base font-bold tracking-tight text-[#FFFEFA]">
          {fallbackTitle}
        </p>
        <p className="max-w-xs text-xs text-[#DBCEAC]">
          Helping Hands Company – UK Branch
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  )
}
