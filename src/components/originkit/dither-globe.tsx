"use client"

import * as React from "react"
import gsap from "gsap"

type DitherGlobeProps = {
  className?: string
  size?: number
}

export function DitherGlobe({ className, size = 320 }: DitherGlobeProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef<number>(0)
  const mouseRef = React.useRef({ x: 0, y: 0 })
  const scrollRef = React.useRef(0)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1

    const updateSize = () => {
      const rect = container.getBoundingClientRect()
      w = rect.width
      h = rect.height
      if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    updateSize()
    const ro = new ResizeObserver(updateSize)
    ro.observe(container)

    // entrance
    gsap.set(canvas, { scale: 0.88, opacity: 0 })
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      gsap.set(canvas, { scale: 1, opacity: 1 })
    } else {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            gsap.to(canvas, { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" })
            io.disconnect()
          }
        },
        { threshold: 0.25 }
      )
      io.observe(container)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      gsap.to(mouseRef.current, { x, y, duration: 0.8, ease: "power2.out" })
    }
    window.addEventListener("mousemove", onMouseMove)

    const onScroll = () => {
      const rect = container.getBoundingClientRect()
      const vc = window.innerHeight / 2
      const cc = rect.top + rect.height / 2
      const delta = (cc - vc) / window.innerHeight
      gsap.to(scrollRef, { current: delta * 12, duration: 0.7, ease: "power2.out" })
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    // dither globe points — Fibonacci sphere with halftone size based on lighting
    const COUNT = 900
    const points: { x: number; y: number; z: number }[] = []
    const PHI = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = PHI * i
      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius
      points.push({ x, y, z })
    }

    let rotY = 0
    let rotX = 0.12

    const frame = () => {
      rafRef.current = requestAnimationFrame(frame)
      if (prefersReduced) return

      const width = canvas.width / dpr
      const height = canvas.height / dpr
      if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return
      const cx = width / 2 + mouseRef.current.x * 6
      const cy = height / 2 + mouseRef.current.y * 5 + scrollRef.current
      const base = Math.max(1, Math.min(width, height) * 0.42)
      if (!Number.isFinite(base) || base <= 0) return

      ctx.clearRect(0, 0, width, height)

      rotY += 0.0032
      rotX += 0.0006

      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      // subtle outer glow — no square
      const glow = ctx.createRadialGradient(cx, cy, base * 0.18, cx, cy, base * 0.95)
      glow.addColorStop(0, "rgba(10,10,10,0.04)")
      glow.addColorStop(1, "rgba(0,0,0,0)")
      if ([cx, cy, base * 0.18, cx, cy, base * 0.95].every(Number.isFinite)) {
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(cx, cy, base * 0.95, 0, Math.PI * 2)
        ctx.fill()
      }

      // project and draw dithered dots
      for (const p of points) {
        // rotate Y then X
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.x * sinY + p.z * cosY
        const y1 = p.y * cosX - z1 * sinX
        const z2 = p.y * sinX + z1 * cosX

        // back-face culling — only front hemisphere
        if (z2 < -0.08) continue

        // perspective
        const persp = 1.6 / (1.6 + z2 * 0.5)
        const px = cx + x1 * base * 0.52 * persp
        const py = cy + y1 * base * 0.52 * persp

        // dither size based on lighting (z) and latitude
        const light = (z2 + 1) * 0.5 // 0..1 front to back
        const dither = light * 0.9 + 0.1
        // use ordered dither threshold
        const r = dither * 1.35 * persp
        if (r < 0.3) continue

        // dark globe dots on light background
        const alpha = 0.92 * (0.5 + light * 0.5)
        ctx.fillStyle = `rgba(12,12,12,${alpha})`
        ctx.beginPath()
        ctx.arc(px, py, Math.max(0.5, r), 0, Math.PI * 2)
        ctx.fill()
      }

      // subtle orbiting ring — thin, no square
      ctx.strokeStyle = "rgba(10,10,10,0.07)"
      ctx.lineWidth = 0.7
      ctx.setLineDash([2, 4])
      ctx.beginPath()
      ctx.ellipse(cx, cy, base * 0.58, base * 0.18, -12 * (Math.PI / 180), 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.ellipse(cx, cy, base * 0.62, base * 0.22, 10 * (Math.PI / 180), 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(10,10,10,0.05)"
      ctx.stroke()
    }
    frame()

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className={className} style={{ width: size, height: size, maxWidth: "100%", maxHeight: "100%" }}>
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  )
}

export default DitherGlobe
