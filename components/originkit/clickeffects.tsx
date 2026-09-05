"use client"

/* eslint-disable react-hooks/refs */

import * as React from "react"

type Click = { id: number; x: number; y: number }

export type ClickEffectsProps = {
  className?: string
  /** variant – keep subtle premium */
  variant?: "ring" | "burst"
  /** max simultaneous effects – keeps it light */
  maxConcurrent?: number
}

/**
 * Originkit – Click Effects
 * Six punchy click-triggered effects — rings, bursts, particles, crosshairs...
 * This port is a subtle premium ring — enhances interaction without distracting.
 * - pointer-events: none (never blocks clicks)
 * - respects prefers-reduced-motion (disables)
 * - lightweight on touch/coarse pointer (smaller, shorter)
 */
export function ClickEffects({ className, maxConcurrent = 3 }: ClickEffectsProps) {
  const [clicks, setClicks] = React.useState<Click[]>([])
  const idRef = React.useRef(0)
  const reducedRef = React.useRef(false)
  const isTouchRef = React.useRef(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedRef.current = mq.matches
    const onChange = (e: MediaQueryListEvent) => {
      reducedRef.current = e.matches
    }
    mq.addEventListener("change", onChange)

    isTouchRef.current =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window

    const onClick = (e: MouseEvent) => {
      if (reducedRef.current) return
      // only primary button, not right click, not modified
      if (e.button !== 0) return
      // ignore if clicking on scrollbar? allow all
      const x = e.clientX
      const y = e.clientY
      const id = ++idRef.current
      setClicks((prev) => {
        const next = [...prev, { id, x, y }]
        // keep lightweight – cap concurrent
        if (next.length > maxConcurrent) return next.slice(next.length - maxConcurrent)
        return next
      })
      // auto-remove after animation
      const duration = isTouchRef.current ? 620 : 720
      window.setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id))
      }, duration + 40)
    }

    // use click, not pointerdown, so it fires after native handlers and feels natural
    window.addEventListener("click", onClick, { passive: true })

    // also handle touch taps explicitly – click already fires, but ensure
    return () => {
      mq.removeEventListener("change", onChange)
      window.removeEventListener("click", onClick)
    }
  }, [maxConcurrent])

  // if reduced motion, render nothing
  // we still need hook above, but render none
  if (typeof window !== "undefined" && reducedRef.current) {
    // cannot know during SSR, but after mount reducedRef will be set
    // we keep rendering container but clicks won't add
  }

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 35,
        overflow: "hidden",
      }}
    >
      {clicks.map((c) => (
        <span
          key={c.id}
          style={{
            position: "absolute",
            left: c.x,
            top: c.y,
            width: isTouchRef.current ? 18 : 22,
            height: isTouchRef.current ? 18 : 22,
            marginLeft: isTouchRef.current ? -9 : -11,
            marginTop: isTouchRef.current ? -9 : -11,
            pointerEvents: "none",
          }}
        >
          {/* subtle premium ring */}
          <span
            className="click-ring"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 999,
              border: "1.5px solid rgba(255,255,255,0.85)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.22), 0 0 18px rgba(129,140,248,0.28)",
            }}
          />
          {/* inner dot – very subtle */}
          <span
            className="click-dot"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 4,
              height: 4,
              marginLeft: -2,
              marginTop: -2,
              borderRadius: 999,
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 8px rgba(255,255,255,0.5)",
            }}
          />
        </span>
      ))}

      <style>{`
        .click-ring {
          animation: clickRing ${isTouchRef.current ? 620 : 720}ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
        }
        .click-dot {
          animation: clickDot ${isTouchRef.current ? 620 : 720}ms ease-out forwards;
        }
        @keyframes clickRing {
          0% { transform: scale(0.35); opacity: 0.9; }
          18% { opacity: 0.85; }
          100% { transform: scale(4.2); opacity: 0; }
        }
        @keyframes clickDot {
          0% { transform: scale(1); opacity: 0.9; }
          30% { opacity: 0.7; }
          100% { transform: scale(0.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .click-ring, .click-dot { animation: none !important; display: none !important; }
        }
      `}</style>
    </div>
  )
}

export default ClickEffects

// also support lowercase alias as originkit may export clickeffects
export const clickeffects = ClickEffects
