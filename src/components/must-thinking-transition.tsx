"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Typewriter } from "@/components/originkit/typewriter"

function ThoughtIllustration() {
  return (
    <div className="relative h-[340px] w-full max-w-[560px] sm:h-[400px] lg:h-[440px]">
      {/* browsers */}
      <div className="absolute left-[4%] top-[6%] w-[42%] rotate-[-6deg] rounded-xl border border-white bg-[#0A0A0A] p-2 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
        </div>
        <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <div className="flex gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-white/10">
              <span className="ml-0.5 size-0 border-y-[6px] border-l-[8px] border-y-transparent border-l-white/60" />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-full rounded bg-white/15" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
              <div className="h-1 w-1/2 rounded bg-white/10" />
            </div>
          </div>
          <div className="mt-2 h-2 w-12 rounded-full bg-[#E63946]" />
        </div>
        <span className="pointer-events-none absolute -left-2 top-1/2 hidden text-[#E63946] sm:block" aria-hidden="true">
          <span className="block h-0.5 w-3 rotate-[-20deg] rounded-full bg-[#E63946]" />
          <span className="mt-1 block h-0.5 w-2 rotate-[-10deg] rounded-full bg-[#E63946]" />
          <span className="mt-1 block h-0.5 w-2.5 rotate-[-25deg] rounded-full bg-[#E63946]" />
        </span>
      </div>

      <div className="absolute left-[28%] top-[14%] z-10 w-[44%] rotate-[2deg] rounded-xl border border-white bg-[#0F0F0F] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="size-1.5 rounded-full bg-white/20" />
          </div>
          <span className="h-1.5 w-6 rounded-full bg-[#E63946]" />
        </div>
        <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <div className="flex h-8 w-full items-center rounded border border-white/5 bg-white/[0.03] px-2">
            <svg viewBox="0 0 100 20" className="h-3 w-full text-white/40" preserveAspectRatio="none">
              <path d="M2 14 L 18 6 L 32 10 L 46 4 L 60 12 L 78 2 L 96 6" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <div className="h-6 rounded border border-white/5 bg-white/5" />
            <div className="h-6 rounded border border-white/5 bg-white/5" />
            <div className="h-6 rounded border border-white/5 bg-white/5" />
          </div>
          <div className="mt-1.5 grid grid-cols-3 gap-1.5">
            <div className="h-4 rounded border border-white/5 bg-white/5" />
            <div className="h-4 rounded border border-white/5 bg-white/5" />
            <div className="h-4 rounded border border-white/5 bg-white/5" />
          </div>
        </div>
        <span className="pointer-events-none absolute -right-2 -top-2 hidden text-[#E63946] sm:block" aria-hidden="true">
          <span className="block h-0.5 w-4 rotate-[45deg] rounded-full bg-[#E63946]" />
          <span className="ml-1 mt-1 block h-0.5 w-3 rotate-[25deg] rounded-full bg-[#E63946]" />
          <span className="ml-2 mt-1 block h-0.5 w-2 rotate-[15deg] rounded-full bg-[#E63946]" />
        </span>
      </div>

      <div className="absolute bottom-[38%] right-[2%] w-[38%] rotate-[4deg] rounded-xl border border-white bg-[#0A0A0A] p-2 shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
        </div>
        <div className="mt-2 flex gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <div className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
            <span className="text-lg text-white">🛒</span>
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-1.5 w-3/4 rounded bg-white/15" />
            <div className="h-1 w-1/2 rounded bg-white/10" />
            <div className="h-1 w-1/3 rounded bg-white/10" />
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <span className="h-2 w-8 rounded-full bg-[#E63946]" />
        </div>
      </div>

      {/* thought bubbles */}
      <div className="absolute bottom-[42%] left-[44%] z-0 flex flex-col items-center gap-1.5">
        <span className="size-5 rounded-full bg-white shadow" />
        <span className="size-3 rounded-full bg-white/90" />
        <span className="size-2 rounded-full bg-white/80" />
      </div>

      {/* person */}
      <div className="absolute bottom-0 left-[18%] right-[8%] flex items-end justify-center">
        <svg viewBox="0 0 400 260" className="h-[210px] w-full sm:h-[250px] lg:h-[270px]" aria-hidden="true">
          <line x1="0" y1="245" x2="400" y2="245" stroke="white" strokeWidth="1" />
          <g transform="translate(340 200)">
            <rect x="0" y="0" width="36" height="32" rx="3" fill="white" stroke="white" />
            <path d="M36 8 A8 8 0 0 1 36 24" fill="none" stroke="white" strokeWidth="2" />
            <text x="18" y="20" textAnchor="middle" fontSize="10" fill="black" fontFamily="monospace">
              &lt;/&gt;
            </text>
          </g>
          <g transform="translate(80 170)">
            <rect x="0" y="0" width="170" height="75" rx="4" fill="#0A0A0A" stroke="white" strokeWidth="1.2" />
            <rect x="8" y="8" width="154" height="50" rx="2" fill="#1A1A1A" />
            <circle cx="85" cy="38" r="8" fill="white" opacity="0.95" />
            <rect x="-6" y="75" width="182" height="4" rx="1" fill="white" opacity="0.9" />
          </g>
          <g transform="translate(200 30)">
            <ellipse cx="50" cy="45" rx="38" ry="42" fill="white" stroke="black" strokeWidth="1" />
            <ellipse cx="50" cy="45" rx="38" ry="42" fill="white" />
            <path d="M12 28 C 8 10, 28 0, 50 4 C 72 0, 90 10, 88 30 C 86 18, 78 8, 64 10 C 58 14, 48 16, 36 12 C 24 8, 16 18, 12 28 Z" fill="black" />
            <path d="M22 38 C 20 28, 26 22, 32 24" fill="black" />
            <ellipse cx="36" cy="52" rx="3" ry="4.5" fill="black" />
            <ellipse cx="62" cy="52" rx="3" ry="4.5" fill="black" />
            <path d="M28 44 Q 36 40 44 44" fill="none" stroke="black" strokeWidth="1" />
            <path d="M54 44 Q 62 40 70 44" fill="none" stroke="black" strokeWidth="1" />
            <path d="M50 56 L 46 68 L 52 68" fill="none" stroke="black" strokeWidth="1" />
            <path d="M42 74 Q 50 78 58 74" fill="none" stroke="black" strokeWidth="1" />
            <path d="M10 110 Q 18 90 32 78 Q 42 70 48 74 L 38 88 Q 28 96 22 112 Z" fill="white" stroke="black" strokeWidth="1" />
            <path d="M32 78 Q 36 76 38 80" fill="none" stroke="black" strokeWidth="0.8" />
            <path d="M 5 115 Q 18 90 50 92 Q 82 90 95 115 L 95 165 L 5 165 Z" fill="black" stroke="white" strokeWidth="1" />
            <path d="M50 92 Q 52 108 48 125" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5" />
            <path d="M5 125 Q -2 140 10 155 L 70 155 Q 60 135 50 125" fill="black" stroke="white" strokeWidth="1" />
            <path d="M32 92 L 50 115 L 68 92" fill="none" stroke="white" strokeWidth="0.8" />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default function MustBeThinkingTransition() {
  const outerRef = React.useRef<HTMLDivElement>(null)
  const pinRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!outerRef.current || !pinRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Home block slides up as one, black transition takes over viewport
      gsap.fromTo(
        pinRef.current,
        { yPercent: 30 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: outerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.9,
          },
        }
      )
    }, outerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === outerRef.current) t.kill()
      })
    }
  }, [])

  return (
    <div ref={outerRef} className="relative bg-black" style={{ height: "140vh" }}>
      <div ref={pinRef} className="sticky top-0 flex h-[100vh] min-h-[100vh] w-screen items-center overflow-hidden bg-black will-change-transform">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
          {/* left text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.22em] text-white/35">
              <span className="h-px w-10 bg-white/25" aria-hidden="true" />
              <span>PAUSE FOR A MOMENT</span>
            </div>

            <motion.div
              className="mt-6 max-w-[560px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            >
              <h2 className="font-black leading-[0.9] tracking-[-0.015em] text-white" style={{ fontFamily: "'Anton', 'Barlow Condensed', Impact, sans-serif" }}>
                <span className="flex gap-3 text-[46px] sm:text-[58px] lg:text-[66px]">
                  <motion.span variants={{ hidden: { y: -50, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>MUST</motion.span>
                  <motion.span variants={{ hidden: { y: -50, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>BE</motion.span>
                </span>
                <motion.span className="block text-[54px] sm:text-[70px] lg:text-[82px]" variants={{ hidden: { y: -50, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>THINKING<span className="text-[#E63946]">?</span></motion.span>
              </h2>
              <motion.div className="mt-3 font-black leading-[0.9] tracking-[-0.015em] text-white" style={{ fontFamily: "'Anton', 'Barlow Condensed', Impact, sans-serif" }}>
                <span className="flex flex-wrap gap-x-3 text-[30px] sm:text-[38px] lg:text-[44px]">
                  <motion.span variants={{ hidden: { y: -40, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>WHAT</motion.span>
                  <motion.span variants={{ hidden: { y: -40, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>PROJECTS</motion.span>
                  <motion.span variants={{ hidden: { y: -40, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>I&apos;VE</motion.span>
                </span>
                <motion.span className="block text-[30px] sm:text-[38px] lg:text-[44px]" variants={{ hidden: { y: -40, opacity: 0, rotate: -2 }, visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 14, stiffness: 120 } } }}>BUILT<span className="text-[#E63946]">?</span></motion.span>
              </motion.div>
            </motion.div>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}</style>
          </div>

          {/* right illustration */}
          <div className="flex items-center justify-center lg:justify-end">
            <ThoughtIllustration />
          </div>
        </div>
      </div>
    </div>
  )
}
