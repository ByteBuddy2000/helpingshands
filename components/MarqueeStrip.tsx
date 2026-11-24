"use client"

import {
  Heart,
  HandHeart,
  Users,
  HeartHandshake,
  ShieldCheck,
  MessageCircleHeart,
  House,
} from "lucide-react"

const MARQUEE_ITEMS = [
  {
    text: "Compassionate Community Support",
    Icon: Heart,
  },
  {
    text: "Guidance That Makes a Difference",
    Icon: HandHeart,
  },
  {
    text: "Stronger Local Connections",
    Icon: Users,
  },
  {
    text: "Care That Connects",
    Icon: HeartHandshake,
  },
  {
    text: "Respect, Dignity & Transparency",
    Icon: ShieldCheck,
  },
  {
    text: "A Listening Ear When It Matters",
    Icon: MessageCircleHeart,
  },
  {
    text: "Building Supportive Communities",
    Icon: House,
  },
]

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden border-y border-[#29483c]/10 bg-[#29483c] py-4">
      <div className="flex w-max animate-marquee">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
          ({ text, Icon }, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-3 px-8 text-sm font-semibold tracking-wide text-[#f8f5ec] md:text-base"
            >
              <Icon
                size={19}
                strokeWidth={1.7}
                className="text-[#d9c99e]"
              />

              <span>{text}</span>

              <span className="ml-8 text-[#d9c99e]">✳</span>
            </div>
          )
        )}
      </div>
    </div>
  )
}