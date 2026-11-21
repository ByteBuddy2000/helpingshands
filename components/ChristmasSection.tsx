
import React from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"

const ChristmasSection = () => {
    return (
        <section
            id="christmas"
            aria-labelledby="christmas-heading"
            className="bg-[#FFFEFA] py-16 sm:py-22 lg:py-26"
        >
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">

                {/* Christmas Banner */}
                <div className="relative overflow-hidden rounded-lg border border-[#315675] bg-gradient-to-br from-[#172B45] via-[#203E5D] to-[#315675] p-8 sm:p-12 lg:p-16">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        {/* Christmas Copy */}
                        <div className="relative z-10">
                            <p className="mb-5 text-[11px] font-bold tracking-[0.2em] text-[#C6B993] uppercase">
                                Season of Giving · UK Branch
                            </p>

                            <h2
                                id="christmas-heading"
                                className="font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.045em] text-white"
                            >
                                A little more hope
                                <br />
                                <em className="font-serif font-normal not-italic text-[#D8C18B]">
                                    this Christmas.
                                </em>
                            </h2>

                            <p className="mt-6 max-w-xl text-[15px] leading-[1.8] text-white/85 sm:text-base">
                                We are developing a Christmas community support campaign for
                                people and families facing a difficult season. The proposed
                                support range is shown below for planning purposes only.
                            </p>

                            <Link
                                href="#contact"
                                className="mt-8 inline-flex min-h-[48px] items-center gap-3 rounded-sm bg-[#142943] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#A95F48]"
                            >
                                Ask about the campaign
                                <ArrowRight size={16} className="text-[#D8C18B]" />
                            </Link>
                        </div>

                        {/* Christmas Artwork */}
                        <div
                            aria-hidden="true"
                            className="relative flex min-h-[280px] items-center justify-center"
                        >
                            {/* Decorative Stars */}
                            <span className="absolute left-8 top-4 text-4xl text-[#C6B993]">
                                ✦
                            </span>

                            <span className="absolute right-8 top-10 text-3xl text-[#D8C18B]">
                                ✧
                            </span>

                            <div className="relative">
                                {/* Gift Box */}
                                <div className="relative h-44 w-48 rounded-sm bg-gradient-to-br from-[#E5D5AA] to-[#C6B993] shadow-xl shadow-black/15 sm:h-52 sm:w-56">

                                    {/* Vertical Gift Ribbon */}
                                    <div className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-[#A95F48]" />

                                    {/* Gift Lid */}
                                    <div className="absolute -top-5 -left-3 h-10 w-[calc(100%+24px)] rounded-sm bg-[#E5D5AA] shadow-md" />

                                    {/* Gift Bow */}
                                    <div className="absolute -top-12 left-1/2 z-10 flex -translate-x-1/2">
                                        <div className="h-12 w-12 -rotate-45 rounded-full border-[10px] border-[#A95F48]" />
                                        <div className="-ml-3 h-12 w-12 rotate-45 rounded-full border-[10px] border-[#A95F48]" />
                                    </div>
                                </div>

                                <div className="mt-6 text-center text-[10px] font-bold tracking-[0.3em] text-[#D8C18B]">
                                    SHARE A LITTLE JOY
                                </div>
                            </div>

                            <span className="absolute bottom-10 right-8 text-3xl text-[#C6B993]">
                                ✦
                            </span>
                        </div>
                    </div>
                </div>


                {/* Campaign Heading */}
                <div className="mt-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-3 text-[11px] font-bold tracking-[0.2em] text-[#B66D50] uppercase">
                            Proposed Support Range
                        </p>

                        <h3 className="font-display text-3xl font-extrabold tracking-tight text-[#1A3150] sm:text-4xl">
                            Christmas giveaway
                        </h3>
                    </div>

                    <span className="inline-flex w-fit items-center border border-[#e5dfd2] bg-[#F5F2EB] px-4 py-2 text-xs font-semibold text-[#8a7040]">
                        Planning stage · Applications not open
                    </span>
                </div>

                {/* Campaign Cards */}
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {/* Community Support */}
                    <article className="rounded-lg border border-[#e5dfd2] bg-white p-8 transition-all duration-300 hover:border-[#C6B993] hover:shadow-lg hover:shadow-[#1A3150]/5">
                        <span className="text-[11px] font-bold tracking-[0.18em] text-[#B66D50] uppercase">
                            Community Support
                        </span>

                        <strong className="font-display mt-5 block text-4xl font-extrabold tracking-tight text-[#1A3150] sm:text-5xl">
                            £10,000
                        </strong>

                        <p className="mt-4 text-sm leading-7 text-[#4a5a6f]">
                            Proposed support level, subject to confirmed funding and
                            published terms.
                        </p>
                    </article>

                    {/* Extended Support */}
                    <article className="relative overflow-hidden rounded-lg border border-[#1A3150] bg-[#1A3150] p-8 text-white shadow-lg shadow-[#1A3150]/10">
                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C6B993]/15 blur-3xl" />

                        <div className="relative">
                            <span className="text-[11px] font-bold tracking-[0.18em] text-[#C6B993] uppercase">
                                Extended Support
                            </span>

                            <strong className="font-display mt-5 block text-4xl font-extrabold tracking-tight sm:text-5xl">
                                £20,000
                            </strong>

                            <p className="mt-4 text-sm leading-7 text-white/75">
                                Proposed upper support level, subject to confirmed funding
                                and published terms.
                            </p>
                        </div>
                    </article>
                </div>

                {/* Campaign Terms */}
                <div className="mt-8 flex flex-col gap-5 rounded-lg border border-[#e5dfd2] bg-[#F5F2EB]/70 p-6 sm:flex-row sm:p-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C6B993]/50 bg-[#C6B993]/15 text-[#8a7040]">
                        <ShieldCheck size={24} />
                    </div>

                    <div>
                        <h4 className="font-display text-base font-bold text-[#1A3150]">
                            Clear, fair and free to enter if the campaign launches
                        </h4>

                        <p className="mt-3 text-sm leading-[1.8] text-[#4a5a6f]">
                            There is no application fee, release fee, tax payment or
                            purchase required to receive a genuine award. We will publish
                            the organiser&apos;s verified details, eligibility rules,
                            closing date, selection method and confirmed funding before
                            accepting applications. Never send passwords, bank login
                            details or one-time security codes.
                        </p>

                        <p className="mt-4 text-xs font-medium leading-6 text-[#8a8174]">
                            This is a proposed campaign, not a confirmation that funds or
                            prizes are currently available. No applications are being
                            accepted at this time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChristmasSection
