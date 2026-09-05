"use client"

/* eslint-disable react-hooks/set-state-in-effect, @typescript-eslint/no-unused-vars */

import * as React from "react"

const VIDEO_SRC =
  "https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/cloudinarry%20to%20cloudflare/202606021731-e_hqa6sn.mp4"

type BackgroundVideoProps = {
  src?: string
  className?: string
  overlayOpacity?: number
}

export function BackgroundVideo({
  src = VIDEO_SRC,
  className,
  overlayOpacity: _overlayOpacity = 0.28,
}: BackgroundVideoProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)

    const checkMobile = () =>
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      mq.removeEventListener("change", onChange)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  React.useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (reducedMotion) {
      v.pause()
    } else {
      const p = v.play()
      if (p && typeof p.catch === "function") p.catch(() => {})
    }
  }, [reducedMotion])

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -10,
        overflow: "hidden",
        background: "#060608",
        pointerEvents: "none",
      }}
    >
      <video
        ref={videoRef}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          transform: isMobile ? "scale(1.02)" : "scale(1)",
          opacity: reducedMotion ? 0.72 : isMobile ? 0.82 : 0.88,
          filter: isMobile ? "saturate(0.95) brightness(0.99)" : "saturate(1) brightness(1)",
          transition: "opacity 600ms ease",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Subtle gradient – keep text readable, restored bright cinematic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.04) 48%, rgba(0,0,0,0.14) 100%)`,
          opacity: 1,
        }}
      />

      {/* very subtle radial vignette – restored bright */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(120% 75% at 50% 20%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.08) 100%)`,
          opacity: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E")`,
          opacity: isMobile ? 0.06 : 0.08,
          mixBlendMode: "overlay" as const,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.14), transparent)",
          opacity: isMobile ? 0.5 : 0.55,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? 90 : 110,
          background: "linear-gradient(to top, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 42%, transparent 100%)",
        }}
      />
    </div>
  )
}

export default BackgroundVideo
