"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import * as React from "react"
import { ParticleGimbal } from "@/components/originkit/particle-gimbal"

type LoadingScreenProps = {
  /** minimum time the loader stays visible – prevents flash */
  minDurationMs?: number
  /** maximum time before auto-dismiss even if still loading */
  maxDurationMs?: number
  /** optional callback when finished */
  onFinished?: () => void
}

/**
 * Loading experience built on Particle Gimbal.
 * - Briefly shows animation + "Loading..."
 * - Smooth fade into website
 * - No unnecessary artificial delay
 * - Respects prefers-reduced-motion
 */
export function LoadingScreen({
  minDurationMs = 720,
  maxDurationMs = 1800,
  onFinished,
}: LoadingScreenProps) {
  const [visible, setVisible] = React.useState(true)
  const [fading, setFading] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)
  const startRef = React.useRef<number>(0)
  const finishedRef = React.useRef(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  React.useEffect(() => {
    if (startRef.current === 0) startRef.current = Date.now()
    if (reducedMotion) {
      // almost instant – no animation needed, still show tiny fade for smoothness
      const t = window.setTimeout(() => {
        setFading(true)
        window.setTimeout(() => {
          setVisible(false)
          onFinished?.()
        }, 160)
      }, 120)
      return () => window.clearTimeout(t)
    }

    let minTimer: number | undefined

    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      const elapsed = Date.now() - startRef.current
      const remaining = Math.max(0, minDurationMs - elapsed)
      // respect min duration, then fade
      window.setTimeout(() => {
        setFading(true)
        window.setTimeout(() => {
          setVisible(false)
          onFinished?.()
        }, 420) // fade duration
      }, remaining)
    }

    // If document already loaded, finish respecting min
    if (document.readyState === "complete") {
      minTimer = window.setTimeout(finish, 0) as unknown as number
    } else {
      const onLoad = () => finish()
      window.addEventListener("load", onLoad, { once: true })
      // also listen for readyState change as fallback
      const onReady = () => {
        if (document.readyState === "complete") finish()
      }
      document.addEventListener("readystatechange", onReady)

      // cleanup helpers
      const cleanup = () => {
        window.removeEventListener("load", onLoad)
        document.removeEventListener("readystatechange", onReady)
      }
      // if already finished, cleanup will be handled in return
      // store for later cleanup
      ;(finish as unknown as { _cleanup?: () => void })._cleanup = cleanup
    }

    // hard cap – never block longer than max
    const maxTimer = window.setTimeout(() => finish(), maxDurationMs) as unknown as number

    return () => {
      if (minTimer) window.clearTimeout(minTimer)
      window.clearTimeout(maxTimer)
      const c = (finish as unknown as { _cleanup?: () => void })._cleanup
      if (c) c()
    }
  }, [minDurationMs, maxDurationMs, onFinished, reducedMotion])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#060608",
        opacity: fading ? 0 : 1,
        // smooth cinematic fade – respect reduced motion by shortening
        transition: reducedMotion
          ? "opacity 160ms ease"
          : "opacity 420ms cubic-bezier(0.32,0.72,0,1)",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* subtle vignette behind gimbal */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(60% 60% at 50% 38%, rgba(96,165,250,0.10), transparent 72%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        {/* ParticleGimbal handles its own reduced-motion static frame */}
        <ParticleGimbal size={220} showLabel={false} />
        <p
          style={{
            marginTop: 8,
            fontSize: 12,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.62)",
            fontWeight: 500,
          }}
        >
          Loading…
        </p>
        {/* tiny progress shimmer – purely decorative, not a real progress bar */}
        <div
          aria-hidden="true"
          style={{
            marginTop: 14,
            width: 72,
            height: 2,
            borderRadius: 999,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: "42%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
              animation: reducedMotion ? undefined : "loadingShimmer 1.1s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loadingShimmer {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(260%); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[role="status"] { transition: opacity 160ms ease !important; }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
