"use client"

import * as React from "react"

type Point = { x: number; y: number }

type RibbonTrailsProps = {
  className?: string
  /**
   * Number of trailing points. Keep low for performance.
   * Default 12 keeps it lightweight and elegant.
   */
  count?: number
  /**
   * Base colors cycled as hue. Keeps palette restrained.
   */
  colors?: string[]
  /**
   * Width of the ribbon stroke.
   */
  strokeWidth?: number
  /**
   * Spring damping – higher = more elegant lag.
   */
  damping?: number
}

/**
 * Originkit – ribbon-trails
 * Silky spring-rope trail that chases the cursor, cycling through colors.
 * - Respects prefers-reduced-motion (disables)
 * - Disabled on touch / coarse pointer and small viewports
 * - Pointer-events none, canvas overlay
 */
export function RibbonTrails({
  className,
  count = 12,
  colors = ["#60a5fa", "#818cf8", "#22d3ee"],
  strokeWidth = 2.2,
  damping = 0.14,
}: RibbonTrailsProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const pointsRef = React.useRef<Point[]>([])
  const mouseRef = React.useRef<Point>({ x: 0, y: 0 })
  const hasMouseRef = React.useRef(false)
  const rafRef = React.useRef<number>(0)
  const reducedMotionRef = React.useRef(false)
  const enabledRef = React.useRef(true)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Respect prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedMotionRef.current = mq.matches
    const onMqChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches
      if (e.matches && rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      } else if (!e.matches) {
        start()
      }
    }
    mq.addEventListener("change", onMqChange)

    // Disable on touch / coarse pointer or small screens – keep it lightweight
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768

    if (isTouch || reducedMotionRef.current) {
      enabledRef.current = false
      canvas.style.display = "none"
      return
    }
    enabledRef.current = true
    canvas.style.display = "block"

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    // init points at center
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    pointsRef.current = Array.from({ length: count }, () => ({ x: cx, y: cy }))

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      hasMouseRef.current = true
    }
    const onLeave = () => {
      hasMouseRef.current = false
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave)

    let hueOffset = 0

    const frame = () => {
      if (reducedMotionRef.current || !enabledRef.current) return
      rafRef.current = requestAnimationFrame(frame)
      if (!hasMouseRef.current) {
        // gentle fade when idle
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        return
      }

      const points = pointsRef.current
      // spring: first point chases mouse, others chase previous
      points[0].x += (mouseRef.current.x - points[0].x) * 0.18
      points[0].y += (mouseRef.current.y - points[0].y) * 0.18
      for (let i = 1; i < count; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * damping
        points[i].y += (points[i - 1].y - points[i].y) * damping
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.lineCap = "round"
      ctx.lineJoin = "round"

      hueOffset = (hueOffset + 0.18) % 360

      for (let i = 0; i < count - 1; i++) {
        const p1 = points[i]
        const p2 = points[i + 1]
        const t = i / (count - 1) // 0 = head, 1 = tail
        const alpha = 1 - t * 0.88 // fade tail
        const width = strokeWidth * (1 - t * 0.65)

        // pick color by progress + subtle hue shift
        const colorIndex = Math.floor((t * colors.length + hueOffset / 120) % colors.length)
        const base = colors[colorIndex]

        ctx.beginPath()
        // quadratic curve for silky bend
        const mx = (p1.x + p2.x) / 2
        const my = (p1.y + p2.y) / 2
        if (i === 0) ctx.moveTo(p1.x, p1.y)
        else ctx.moveTo(points[i - 1].x, points[i - 1].y)
        ctx.quadraticCurveTo(p1.x, p1.y, mx, my)

        ctx.globalAlpha = alpha * 0.9
        ctx.strokeStyle = base
        ctx.lineWidth = width
        // subtle glow where ribbons cross – shadowBlur only at head for performance
        if (i < 3) {
          ctx.shadowBlur = 8
          ctx.shadowColor = base
        } else {
          ctx.shadowBlur = 0
        }
        ctx.stroke()
      }
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }

    const start = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(frame)
    }
    start()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      mq.removeEventListener("change", onMqChange)
      cancelAnimationFrame(rafRef.current)
    }
  }, [count, colors, strokeWidth, damping])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 30,
      }}
    />
  )
}

export default RibbonTrails
