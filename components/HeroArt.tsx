import { HandHeart, HeartHandshake, Users } from "lucide-react"

export function HeroArt() {
    return (
        <div
            className="relative mx-auto w-full max-w-[420px]"
            aria-label="Illustration of people supporting one another"
        >
            {/* Main Art Card */}
            <div className="relative mx-auto h-[370px] w-[min(350px,85%)] overflow-hidden rounded-t-[180px] rounded-b-[15px] bg-gradient-to-br from-[#d9c99e] to-[#c6b58b] text-[#29483c] shadow-[0_25px_70px_#0000002e]">
                {/* Sun */}
                <div className="absolute top-[44px] right-[35px] h-[130px] w-[130px] rounded-full bg-white/25" />



                {/* Hands Illustration */}
                <div className="absolute top-[92px] left-1/2 z-[1] grid h-[160px] w-[160px] -translate-x-1/2 place-items-center text-[#315b4c]">
                    <HandHeart size={105} strokeWidth={1.15} />
                </div>

                {/* Caption */}
                <div className="absolute bottom-[28px] left-[32px] z-[2] flex flex-col gap-2">
                    <span className="text-[10px] font-bold tracking-[0.2em]">
                        COMMUNITY FIRST
                    </span>

                    <strong className="text-[28px] leading-[1.15] font-semibold tracking-tight">
                        Small acts.
                        <br />
                        Lasting impact.
                    </strong>
                </div>
            </div>

            {/* Top Floating Note */}
            <div className="absolute top-[55px] left-0 z-[3] flex items-center gap-[9px] rounded-[5px] border border-[#24483c]/10 bg-[#fffdf7] px-4 py-[13px] text-[10px] font-bold text-[#315447] shadow-[0_12px_35px_#00000024]">
                <HeartHandshake size={19} strokeWidth={2} />
                <span>Care that connects</span>
            </div>

            {/* Bottom Floating Note */}
            <div className="absolute right-0 bottom-[55px] z-[3] flex items-center gap-[9px] rounded-[5px] border border-[#24483c]/10 bg-[#fffdf7] px-4 py-[13px] text-[10px] font-bold text-[#315447] shadow-[0_12px_35px_#00000024]">
                <Users size={19} strokeWidth={2} />
                <span>People at the heart</span>
            </div>

            {/* Decorative Sun */}
            <div className="absolute bottom-[-90px] -left-16 h-64 w-64 rounded-full bg-[#A95F48]/20 blur-2xl" />

          {/* Decorative Sparkles */}
          <span className="absolute bottom-[10%] left-[0%] text-3xl text-[#D8C18B]">
            ✳
          </span>

          <span className="absolute top-[8%] right-[10%] text-2xl text-[#D8C18B]">
            ✦
          </span>
        </div>
    )
}
