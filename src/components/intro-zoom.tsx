"use client"

import * as React from "react"
import gsap from "gsap"

// Cinematic entry: full-viewport subway cover with a centered magazine
// headline, then a controlled two-phase camera move into the "u" of
// "cuándo?". The zoom is deliberately capped so the letterform stays
// recognizable, and the reveal of Home overlaps the final push — the camera
// passes THROUGH the intro rather than stopping on a giant blurry letter.
// Plays once on mount (a refresh replays it as a fresh visit). While playing
// the layer is fixed and scroll is locked; on complete it unmounts fully so
// it can never interfere with scrolling, Home, or later sections.
export default function IntroZoom() {
  const [gone, setGone] = React.useState(false)
  const [reduced, setReduced] = React.useState(false)
  const layerRef = React.useRef<HTMLDivElement>(null)
  const headRef = React.useRef<HTMLHeadingElement>(null)
  const uRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  React.useEffect(() => {
    if (reduced) {
      setGone(true)
      return
    }
    const layer = layerRef.current
    if (!layer || typeof window === "undefined") return

    const prevBodyOverflow = document.body.style.overflow
    const prevHtmlOverflow = document.documentElement.style.overflow
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"

    const finish = () => {
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
      setGone(true)
      // Signal the Home landing exactly as the intro hands over — the navbar
      // teaser listens for this one-shot event.
      window.dispatchEvent(new CustomEvent("intro:home-landed"))
    }

    const cleanups: Array<() => void> = []
    let killed = false
    let zoomStarted = false

    const measureU = () => {
      if (!uRef.current) return null
      const r = uRef.current.getBoundingClientRect()
      if (r.width < 2 || r.height < 2) return null
      return {
        origin: `${r.left + r.width / 2}px ${r.top + r.height / 2}px`,
        // Capped so the "u" stays recognizable — never an abstraction.
        peak: Math.min(6.5, Math.max(4, (0.85 * window.innerWidth) / r.width)),
      }
    }

    // ONE continuous camera move, built up front — no waits, no gaps, no
    // second timeline: the headline settles, the zoom starts on its tail and
    // never stops until Home is revealed through the final push.
    const initial = measureU()
    if (!initial) {
      finish()
      return () => {
        document.body.style.overflow = prevBodyOverflow
        document.documentElement.style.overflow = prevHtmlOverflow
      }
    }
    gsap.set(layer, { transformOrigin: initial.origin })

    const master = gsap.timeline({
      defaults: { ease: "expo.inOut", overwrite: "auto" },
      onComplete: finish,
    })
    // 0.0–0.9: magazine cover settles while the photo holds still.
    master.fromTo(
      headRef.current,
      { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" },
      0
    )
    // Refine the target if the display font lands before the zoom starts.
    void Promise.race([
      document.fonts.load("100px Girassol"),
      new Promise((res) => window.setTimeout(res, 600)),
    ]).then(() => {
      if (killed || zoomStarted || !layerRef.current) return
      const refined = measureU()
      if (refined) gsap.set(layerRef.current, { transformOrigin: refined.origin })
    })
    // The camera is ONE uninterrupted move (0.9–3.7) with a single velocity
    // profile — no junctions, no ease restarts, nothing that can read as a
    // stop. The reveal starts mid-flight and lands on the exact same frame
    // the zoom ends, so no static final frame can ever sit on screen.
    master.add(() => {
      zoomStarted = true
    }, 0.9)
    master.to(layer, { scale: initial.peak, filter: "blur(3px)", duration: 2.8 }, 0.9)
    // Home is revealed THROUGH the still-moving zoom — overlapping, never
    // sequential, ending together.
    master.to(layer, { opacity: 0, duration: 1.3, ease: "power1.in" }, 2.4)
    cleanups.push(() => master.kill())

    return () => {
      killed = true
      cleanups.forEach((fn) => fn())
      if (layerRef.current) gsap.set(layerRef.current, { clearProps: "all" })
      document.body.style.overflow = prevBodyOverflow
      document.documentElement.style.overflow = prevHtmlOverflow
    }
  }, [reduced])

  if (gone) return null

  return (
    <div
      ref={layerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[100] overflow-hidden bg-[#0d0d10] will-change-transform"
    >
      <img
        src="/images/intro-bg.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
      />
      <h1
        ref={headRef}
        className="absolute inset-x-0 top-[8%] scale-x-110 px-6 text-center leading-[0.95] opacity-0 sm:top-[9%]"
        style={{
          fontFamily: "'Girassol', serif",
          fontWeight: 700,
          fontSize: "clamp(64px, 11vw, 190px)",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
          textShadow: "0 2px 34px rgba(0,0,0,0.38)",
        }}
      >
        <span className="text-white">Hasta </span>
        <span style={{ color: "#E8621A" }}>
          c<span ref={uRef} className="inline-block">u</span>ándo?
        </span>
      </h1>
    </div>
  )
}
