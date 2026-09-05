"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type ParticleGimbalProps = {
  className?: string
  size?: number
  /** shows “Loading…” text below */
  showLabel?: boolean
  label?: string
}

/**
 * Originkit – particle-gimbal
 * Canvas orb of depth-sorted dots: three rings tumbling at one, two and three
 * turns per loop around a counter-spinning core, draggable with flick inertia.
 * Lightweight Canvas2D only – no three.js.
 */
export function ParticleGimbal({
  className,
  size = 220,
  showLabel = true,
  label = "Loading…",
}: ParticleGimbalProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef<number>(0)
  const rotRef = React.useRef({ x: -0.2, y: 0 })
  const velRef = React.useRef({ x: 0, y: 0 })
  const draggingRef = React.useRef(false)
  const lastRef = React.useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const S = size
    canvas.width = S * dpr
    canvas.height = S * dpr
    canvas.style.width = S + "px"
    canvas.style.height = S + "px"
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    // Respect reduced motion – static frame
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      ctx.clearRect(0, 0, S, S)
      ctx.fillStyle = "rgba(255,255,255,0.85)"
      ctx.beginPath()
      ctx.arc(S / 2, S / 2, S * 0.32, 0, Math.PI * 2)
      ctx.fill()
      return
    }

    const cx = S / 2
    const cy = S / 2

    // Generate points: 3 rings + core
    type Pt = { theta: number; phi: number; r: number; ring: number }
    const points: Pt[] = []
    const rings = [
      { count: 48, r: S * 0.34, speed: 1 },
      { count: 56, r: S * 0.29, speed: 2 },
      { count: 64, r: S * 0.24, speed: 3 },
    ]
    rings.forEach((ring, idx) => {
      for (let i = 0; i < ring.count; i++) {
        const theta = (i / ring.count) * Math.PI * 2
        // slight wobble in phi to avoid perfect equatorial line
        const phi = Math.PI / 2 + (Math.sin(theta * 3) * 0.08)
        points.push({ theta, phi, r: ring.r, ring: idx })
      }
    })
    // core – Fibonacci-ish sphere
    for (let i = 0; i < 42; i++) {
      const y = 1 - (i / 41) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = i * 2.39996
      const phi = Math.acos(y)
      void radius
      points.push({ theta, phi, r: S * 0.11, ring: 3 })
    }

    let t = 0

    const project = (p: Pt, time: number) => {
      // ring rotations at 1x,2x,3x and core counter-spins
      const speed = p.ring < 3 ? rings[p.ring].speed : -0.7
      const theta = p.theta + time * 0.5 * speed * 0.02
      const phi = p.phi
      // spherical to cartesian
      const x0 = p.r * Math.sin(phi) * Math.cos(theta)
      const y0 = p.r * Math.cos(phi)
      const z0 = p.r * Math.sin(phi) * Math.sin(theta)

      // apply drag rotation
      const rx = rotRef.current.x
      const ry = rotRef.current.y
      const cosX = Math.cos(rx)
      const sinX = Math.sin(rx)
      const cosY = Math.cos(ry)
      const sinY = Math.sin(ry)

      // rotate X then Y
      const y1 = y0 * cosX - z0 * sinX
      const z1 = y0 * sinX + z0 * cosX
      const x1 = x0
      const x2 = x1 * cosY - z1 * sinY
      const z2 = x1 * sinY + z1 * cosY
      const y2 = y1

      // perspective scale (very subtle)
      const persp = 220 / (220 + z2 * 0.6)
      return {
        x: cx + x2 * persp,
        y: cy + y2 * persp,
        z: z2,
        s: persp,
      }
    }

    const frame = () => {
      rafRef.current = requestAnimationFrame(frame)
      t += 1

      if (!draggingRef.current) {
        // inertia decay + auto spin
        velRef.current.x *= 0.98
        velRef.current.y *= 0.98
        rotRef.current.x += velRef.current.x
        rotRef.current.y += velRef.current.y + 0.004
      }

      ctx.clearRect(0, 0, S, S)

      // soft halo
      const grad = ctx.createRadialGradient(cx, cy, S * 0.08, cx, cy, S * 0.5)
      grad.addColorStop(0, "rgba(96,165,250,0.14)")
      grad.addColorStop(0.5, "rgba(129,140,248,0.08)")
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(cx, cy, S * 0.5, 0, Math.PI * 2)
      ctx.fill()

      // depth sort
      const projected = points.map((p) => ({ p, pr: project(p, t) }))
      projected.sort((a, b) => a.pr.z - b.pr.z)

      for (const { p, pr } of projected) {
        const depth = (pr.z / (S * 0.42) + 1) / 2 // 0..1
        const alpha = 0.28 + depth * 0.72
        const radius = (p.ring === 3 ? 1.35 : 1.85) * pr.s + depth * 0.5

        // color per ring – restrained blue/purple/cyan
        let col: string
        if (p.ring === 0) col = `rgba(96,165,250,${alpha})`
        else if (p.ring === 1) col = `rgba(129,140,248,${alpha})`
        else if (p.ring === 2) col = `rgba(34,211,238,${alpha})`
        else col = `rgba(255,255,255,${alpha * 0.95})`

        ctx.beginPath()
        ctx.fillStyle = col
        // depth shadow for 3D feel
        if (depth > 0.6) {
          ctx.shadowBlur = 6
          ctx.shadowColor = col
        } else ctx.shadowBlur = 0
        ctx.arc(pr.x, pr.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0
    }
    frame()

    // drag handling
    const el = containerRef.current
    if (!el) return

    const onDown = (e: PointerEvent) => {
      draggingRef.current = true
      lastRef.current = { x: e.clientX, y: e.clientY }
      ;(e.target as Element).setPointerCapture?.(e.pointerId)
    }
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return
      const dx = e.clientX - lastRef.current.x
      const dy = e.clientY - lastRef.current.y
      velRef.current.y += dx * 0.004
      velRef.current.x += dy * 0.004
      lastRef.current = { x: e.clientX, y: e.clientY }
    }
    const onUp = (e: PointerEvent) => {
      draggingRef.current = false
      ;(e.target as Element).releasePointerCapture?.(e.pointerId)
    }

    el.addEventListener("pointerdown", onDown)
    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    return () => {
      cancelAnimationFrame(rafRef.current)
      el.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
    }
  }, [size])

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col items-center justify-center select-none touch-none", className)}
      style={{ width: size, height: showLabel ? size + 28 : size }}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        aria-hidden="true"
        className="block cursor-grab active:cursor-grabbing rounded-full"
        style={{ width: size, height: size }}
      />
      {showLabel && (
        <p className="mt-3 text-xs tracking-[0.2em] text-white/60 dark:text-white/55 font-medium uppercase">
          {label}
        </p>
      )}
    </div>
  )
}

export default ParticleGimbal
