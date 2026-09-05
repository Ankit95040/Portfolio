"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type LiquidCarveButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"
  size?: "sm" | "default" | "lg"
  asChild?: boolean
}

/**
 * Originkit – liquid-carve-button
 * A liquid blob carves into the button's surface and chases your cursor,
 * reforming into a teardrop as it moves and settling round when it stops.
 * - Keeps the effect subtle and accessible
 * - Works with keyboard focus (focus-visible ring)
 * - Respects pointer coarse / reduced motion via CSS fallback
 */
export function LiquidCarveButton({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: LiquidCarveButtonProps) {
  const btnRef = React.useRef<HTMLButtonElement>(null)
  const blobRef = React.useRef<HTMLDivElement>(null)
  const [pos, setPos] = React.useState({ x: 50, y: 50 })
  const [moving, setMoving] = React.useState(false)
  const timeoutRef = React.useRef<number | null>(null)

  const updatePosition = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const el = btnRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPos({ x, y })
    setMoving(true)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setMoving(false), 280) as unknown as number
  }, [])

  const handleLeave = React.useCallback(() => {
    setPos({ x: 50, y: 50 })
    setMoving(false)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
  }, [])

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const isPrimary = variant === "primary"

  return (
    <button
      ref={btnRef}
      onMouseMove={updatePosition}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ringOffset)] disabled:pointer-events-none disabled:opacity-50",
        // surface
        isPrimary
          ? "bg-[var(--main)] text-[var(--mtext)] border-[var(--border)] shadow-[var(--boxShadowX)_var(--boxShadowY)_0_0_var(--border)] hover:translate-y-[1px] active:translate-y-[var(--boxShadowY)] active:shadow-none"
          : "bg-[var(--bw)] text-[var(--text)] border-[var(--border)] shadow-[var(--boxShadowX)_var(--boxShadowY)_0_0_var(--border)] hover:translate-y-[1px] active:translate-y-[var(--boxShadowY)] active:shadow-none",
        size === "sm" && "h-9 px-5 text-[13px]",
        size === "default" && "h-11 px-7",
        size === "lg" && "h-12 px-8 text-[15px]",
        className
      )}
      {...props}
    >
      {/* liquid blob – carves / chases cursor */}
      <span
        ref={blobRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute size-[120%] -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-overlay transition-[border-radius,transform,width,height,opacity] duration-300 ease-out",
          isPrimary ? "bg-white/20" : "bg-[var(--main)]/15"
        )}
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          width: moving ? "42%" : "28%",
          height: moving ? "78%" : "28%",
          borderRadius: moving ? "55% 45% 42% 58% / 58% 42% 55% 45%" : "9999px",
          transform: `translate(-50%, -50%) rotate(${moving ? (pos.x - 50) * 0.6 : 0}deg)`,
          filter: "blur(0.4px)",
        }}
      />
      {/* inner highlight when hovered */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/12 to-transparent"
      />
      {/* carve inset shadow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[1px] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),inset_0_-1px_6px_rgba(0,0,0,0.15)]"
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  )
}

export default LiquidCarveButton
