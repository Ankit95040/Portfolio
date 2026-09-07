"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DitherGlobe } from "@/components/originkit/dither-globe"
import { FlickerText } from "@/components/originkit/flickertext"

function AboutEditorialPanel() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col bg-[#F2F0EB] px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
      {/* header — ANKIT RAJ / PROBLEM SOLVING •  —  THINK › SOLVE › BUILD — DISCIPLINE */}
      <div data-animate data-from="top" className="flex shrink-0 items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[8px] font-medium tracking-[0.2em] text-black sm:text-[9px]">
          <span className="tracking-[0.18em]">ANKIT RAJ</span>
          <span className="hidden h-px w-14 bg-black/30 sm:block" aria-hidden="true" />
          <span className="tracking-[0.18em]">PROBLEM SOLVING</span>
          <span className="size-1 rounded-full bg-black" aria-hidden="true" />
        </div>
        <div className="hidden items-center gap-2 text-[9px] font-medium tracking-[0.18em] text-black/60 sm:flex">
          <span>THINK</span>
          <span className="text-black/30">›</span>
          <span>SOLVE</span>
          <span className="text-black/30">›</span>
          <span>BUILD</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="flex size-6 items-center justify-center rounded-full border border-black/15 text-[10px]">◈</span>
          <span className="text-right text-[7px] font-medium leading-[1.1] tracking-[0.14em] text-black/60">
            DISCIPLINE
            <br />
            CREATES
            <br />
            FREEDOM
          </span>
        </div>
      </div>

      {/* main editorial grid */}
      <div className="relative mt-3 grid flex-1 gap-4 lg:mt-4 lg:grid-cols-[1.08fr_1.22fr_0.78fr] lg:gap-3">
        {/* left headline */}
        <div className="relative z-10 flex flex-col">
          <h2
            data-animate="heading"
            data-from="top"
            className="flex flex-col gap-1 text-[36px] font-black uppercase leading-[0.96] tracking-[-0.015em] text-black sm:gap-1.5 sm:text-[44px] lg:text-[52px] xl:text-[60px]"
            style={{ fontFamily: "'Anton', 'Barlow Condensed', Impact, sans-serif" }}
          >
            <span className="block">MORE THAN</span>
            <span className="block">JUST SOLVING</span>
            <span className="block">PROBLEMS.</span>
          </h2>
          <p data-animate data-from="left" className="mt-3 max-w-[380px] font-serif text-[11px] leading-[1.65] text-black/70 sm:text-[12px]">
            I enjoy solving problems as much as I enjoy building products. Regular algorithmic practice has strengthened how I
            approach data structures, algorithms, complexity, and breaking complex problems into manageable steps.
          </p>
          <div data-animate data-from="left" className="mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-black/15" aria-hidden="true" />
            <span className="text-[8px] font-medium leading-[1.4] tracking-[0.16em] text-black/45">
              CONSISTENT PRACTICE
              <br />
              COMPOUNDS.
            </span>
          </div>
        </div>

        {/* globe — centered — living technical visualization */}
        <div data-animate="globe" data-from="scale" data-parallax="globe" className="relative flex min-h-[280px] items-center justify-center py-2 lg:min-h-0 lg:py-0 will-change-transform">
          {/* labels around globe — as in reference */}
          <span data-animate="note" data-from="right" className="pointer-events-none absolute left-[6%] top-[8%] hidden text-[7.5px] font-medium leading-[1.3] tracking-[0.12em] text-black/35 sm:block" aria-hidden="true">
            BETTER
            <br />
            PROBLEMS
            <br />
            A BRIGHTER
            <br />
            YOU
          </span>
          <span data-animate="note" data-from="left" className="pointer-events-none absolute bottom-[22%] left-[4%] hidden text-[7px] font-medium leading-[1.3] tracking-[0.12em] text-black/35 sm:block" aria-hidden="true">
            ALGORITHMS
            <br />
            SHAPE
            <br />
            PRESPective
          </span>
          <span data-animate="note" data-from="right" className="pointer-events-none absolute bottom-[20%] right-[6%] hidden text-[7px] font-medium leading-[1.3] tracking-[0.12em] text-black/35 sm:block" aria-hidden="true">
            SMALL STEPS
            <br />
            BIG PROGRESS
          </span>
          <span data-animate="deco" className="pointer-events-none absolute left-[28%] top-[14%] hidden text-[14px] font-light text-black/40 sm:block" aria-hidden="true">
            +
          </span>
          <span data-animate="deco" className="pointer-events-none absolute bottom-[14%] right-[30%] hidden text-[14px] font-light text-black/40 sm:block" aria-hidden="true">
            +
          </span>
          {/* vertical dashed line through globe */}
          <span data-animate="deco" className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 border-l border-dashed border-black/10 sm:block" aria-hidden="true" />
          <DitherGlobe className="h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] lg:h-[380px] lg:w-[380px]" />
          {/* red dots as in reference */}
          <span data-animate="deco" className="pointer-events-none absolute right-[24%] top-[16%] hidden size-1.5 rounded-full bg-[#E63946] sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute right-[18%] top-[42%] hidden size-1 rounded-full bg-black sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute left-[26%] top-[24%] hidden size-1.5 rounded-full bg-black sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute left-[18%] top-[38%] hidden size-1 rounded-full bg-black/60 sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute bottom-[28%] left-[32%] hidden size-1 rounded-full bg-black sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute bottom-[18%] left-1/2 hidden size-1.5 rounded-full bg-[#E63946] sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute bottom-[26%] right-[28%] hidden size-1 rounded-full bg-black sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute right-[16%] bottom-[36%] hidden size-1 rounded-full bg-[#E63946] sm:block" aria-hidden="true" />
          <span data-animate="deco" className="pointer-events-none absolute left-[20%] bottom-[46%] hidden size-1 rounded-full bg-[#E63946] sm:block" aria-hidden="true" />
        </div>

        {/* 01 */}
        <div data-animate="heading" data-from="right" className="relative hidden flex-col items-end justify-center lg:flex">
          <span
            className="select-none font-black leading-none tracking-[-0.05em] text-[#E8E3DA]"
            style={{ fontSize: "clamp(180px, 18vw, 280px)", lineHeight: 0.85 }}
            aria-hidden="true"
          >
            01
          </span>
          <div className="absolute bottom-10 right-0 flex items-start gap-2">
            <span className="mt-0.5 h-5 w-px rotate-12 bg-[#E63946]" aria-hidden="true" />
            <span className="text-[10px] font-medium leading-[1.3] tracking-[0.16em] text-black">
              PROBLEM
              <br />
              SOLVING
              <br />
              NEVER
              <br />
              STOPS
            </span>
          </div>
        </div>
      </div>

      {/* divider */}
      <div data-animate data-from="top" className="mt-3 h-px w-full bg-black/15 sm:mt-4" aria-hidden="true" />

      {/* stats + cards */}
      <div className="mt-3 grid gap-4 sm:mt-4 sm:grid-cols-5 sm:gap-0">
        <div data-animate="stats" data-from="bottom" className="sm:border-r sm:border-black/10 sm:pr-6">
          <div className="font-black leading-none tracking-[-0.03em] text-black" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px, 3vw, 42px)" }}>
            350+
          </div>
          <div className="mt-1 text-[9px] font-medium tracking-[0.14em] text-black/60">LEETCODE PROBLEMS SOLVED</div>
        </div>
        <div data-animate="stats" data-from="bottom" className="sm:border-r sm:border-black/10 sm:px-6">
          <div className="font-black leading-none tracking-[-0.03em] text-black" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px, 3vw, 42px)" }}>
            TOP 3.4%
          </div>
          <div className="mt-1 text-[9px] font-medium tracking-[0.14em] text-black/60">NEETCODE RANKING</div>
        </div>
        <div data-animate="stats" data-from="bottom" className="sm:border-r sm:border-black/10 sm:px-6">
          <div className="font-black leading-none tracking-[-0.03em] text-black" style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(28px, 3vw, 42px)" }}>
            JAVA
          </div>
          <div className="mt-1 text-[9px] font-medium tracking-[0.14em] text-black/60">PRIMARY DSA LANGUAGE</div>
        </div>
        <div data-animate="profile" data-from="bottom" className="flex flex-col justify-between sm:px-6">
          <div className="flex items-start justify-between gap-2">
            <span className="text-[10px] font-bold leading-tight tracking-[0.14em] text-black">
              01
              <br />
              LEETCODE
            </span>
            <span className="text-[14px] leading-none" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="mt-2 h-px w-full bg-black/15" aria-hidden="true" />
          <p className="mt-2 font-serif text-[11px] leading-4 text-black/60">350+ problems solved with consistent practice.</p>
          <a
            href="https://leetcode.com/u/Ankit95040/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-black hover:text-black/70"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-black text-[10px] text-white">↗</span> VIEW PROFILE
          </a>
        </div>
        <div data-animate="profile" data-from="bottom" className="flex flex-col justify-between sm:pl-6">
          <div className="flex items-start justify-between gap-2">
            <span className="text-[10px] font-bold leading-tight tracking-[0.14em] text-black">
              02
              <br />
              NEETCODE
            </span>
            <span className="text-[14px] leading-none" aria-hidden="true">
              ↗
            </span>
          </div>
          <div className="mt-2 h-px w-full bg-black/15" aria-hidden="true" />
          <p className="mt-2 font-serif text-[11px] leading-4 text-black/60">Top 3.4% on NeetCode with focused learning.</p>
          <a
            href="https://neetcode.io/user/FleetVulture435"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] text-black hover:text-black/70"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-black text-[10px] text-white">↗</span> VIEW PROFILE
          </a>
        </div>
      </div>

      {/* footer */}
      <div data-animate data-from="bottom" className="mt-3 flex items-center justify-between gap-4 border-t border-black/15 pt-3 sm:mt-4">
        <div className="flex items-center gap-3 text-[8px] font-medium tracking-[0.14em] text-black/45">
          <span>SOLVE TODAY</span>
          <span className="h-px w-10 bg-black/20 sm:w-14" aria-hidden="true" />
          <span>BUILD TOMORROW</span>
        </div>
        <div className="hidden items-center gap-3 text-[8px] font-medium tracking-[0.14em] text-black/30 sm:flex">
          <span>A MORE INTENTIONAL DEVELOPER</span>
          <span className="h-px w-10 bg-black/20 sm:w-14" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-2 text-[8px] font-medium tracking-[0.14em] text-black/30 sm:hidden">
          <span>INTENTIONAL</span>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}</style>
    </div>
  )
}

export default function AboutTransition() {
  const outerRef = React.useRef<HTMLDivElement>(null)
  const pinRef = React.useRef<HTMLDivElement>(null)
  const blackRef = React.useRef<HTMLDivElement>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!outerRef.current || !pinRef.current || !blackRef.current || !panelRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(panelRef)

      // initially hide all editorial elements — only off-white background visible
      gsap.set(q("[data-animate]"), { autoAlpha: 0 })
      gsap.set(q("[data-from='top']"), { y: -60 })
      gsap.set(q("[data-from='bottom']"), { y: 60 })
      gsap.set(q("[data-from='left']"), { x: -60 })
      gsap.set(q("[data-from='right']"), { x: 60 })
      gsap.set(q("[data-animate='heading']"), { rotation: -1.5 })
      gsap.set(q("[data-animate='globe']"), { scale: 0.88 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 0.85,
        },
      })

      // black interstitial holds, then panel slides in
      gsap.set(panelRef.current, { xPercent: 100 })
      tl.to(panelRef.current, { xPercent: 0, ease: "power3.inOut", duration: 0.5 }, 0.28).to(blackRef.current, { autoAlpha: 0, duration: 0.2 }, 0.52)

      // editorial falling — heading first
      tl.to(q("[data-animate='heading']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.22, ease: "back.out(1.15)" }, 0.58)
      // globe / collage
      tl.to(q("[data-animate='globe']"), { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 0.28, ease: "back.out(1.1)" }, 0.62)
      // supporting text + notes
      tl.to(q("[data-from='left']"), { autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.18, stagger: 0.04 }, 0.66)
      tl.to(q("[data-animate='note']"), { autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.16, stagger: 0.04 }, 0.68)
      // small deco
      tl.to(q("[data-animate='deco']"), { autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.14, stagger: 0.02 }, 0.72)
      // stats
      tl.to(q("[data-animate='stats']"), { autoAlpha: 1, y: 0, duration: 0.16, stagger: 0.05 }, 0.76)
      // profile links last
      tl.to(q("[data-animate='profile']"), { autoAlpha: 1, y: 0, x: 0, duration: 0.16, stagger: 0.06 }, 0.82)
      // generic any remaining
      tl.to(q("[data-animate]:not([data-animate='heading']):not([data-animate='globe']):not([data-animate='note']):not([data-animate='deco']):not([data-animate='stats']):not([data-animate='profile'])"), { autoAlpha: 1, x: 0, y: 0, rotation: 0, duration: 0.14, stagger: 0.02 }, 0.64)

      // center visualization parallax — minimal, elegant, stays visible, not distracting
      gsap.to(q("[data-parallax='globe']"), {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      })
    }, outerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === outerRef.current) t.kill()
      })
    }
  }, [])

  return (
    <div ref={outerRef} className="relative" style={{ height: "240vh" }}>
      <div ref={pinRef} className="relative h-[100svh] w-screen overflow-hidden bg-[#F2F0EB]">
        <div ref={blackRef} className="absolute inset-0 z-10 flex items-center justify-center bg-black">
          <h2 className="select-none text-center text-[42px] font-black tracking-[-0.02em] text-white sm:text-[56px] lg:text-[72px]" style={{ fontFamily: "'Anton', sans-serif" }}>
            <FlickerText text="What about me?" speed={70} />
          </h2>
        </div>
        <div ref={panelRef} className="absolute inset-0 z-20 will-change-transform bg-[#F2F0EB]">
          <AboutEditorialPanel />
        </div>
      </div>
    </div>
  )
}
