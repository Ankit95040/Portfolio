"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type GlobeMeshProps = {
  className?: string
}

/**
 * Local Globe Mesh – Originkit-style globe-mesh fallback.
 * Canvas2D wireframe globe with latitude/longitude grid,
 * subtle rotation, depth-sorted strokes. Used as background
 * inside the Apple window. pointer-events-none externally.
 * Lightweight, no three.js required.
 */
export function GlobeMesh({ className }: GlobeMeshProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const rafRef = React.useRef<number>(0)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let w = 0
    let h = 0
    let dpr = 1

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      w = rect.width
      h = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    if (prefersReduced) {
      const drawStatic = () => {
        ctx.clearRect(0, 0, w, h)
        const cx = w / 2
        const cy = h / 2
        const R = Math.min(w, h) * 0.38
        ctx.strokeStyle = "rgba(255,255,255,0.08)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(cx, cy, R, 0, Math.PI * 2)
        ctx.stroke()
      }
      drawStatic()
      return () => ro.disconnect()
    }

    let t = 0
    const ROT_Y_SPEED = 0.002
    const ROT_X = 0.22

    const frame = () => {
      rafRef.current = requestAnimationFrame(frame)
      t += 1
      ctx.clearRect(0, 0, w, h)

      const cx = w / 2
      const cy = h * 0.52
      const R = Math.min(w, h) * 0.42
      // slightly off-center vertical to keep header readable
      // horizontal ellipsoid stretch for cinematic feel
      const scaleX = w > 900 ? 1.35 : w > 640 ? 1.15 : 0.95
      const ry = t * ROT_Y_SPEED

      // subtle radial vignette behind globe
      const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.35)
      g.addColorStop(0, "rgba(96,165,250,0.09)")
      g.addColorStop(0.45, "rgba(129,140,248,0.05)")
      g.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(cx, cy, R * 1.35, 0, Math.PI * 2)
      ctx.fill()

      const project = (theta: number, phi: number) => {
        // spherical to cartesian
        const x0 = R * Math.sin(phi) * Math.cos(theta)
        const y0 = R * Math.cos(phi)
        const z0 = R * Math.sin(phi) * Math.sin(theta)
        // tilt X
        const cosX = Math.cos(ROT_X)
        const sinX = Math.sin(ROT_X)
        const y1 = y0 * cosX - z0 * sinX
        const z1 = y0 * sinX + z0 * cosX
        const x1 = x0
        // rotate Y
        const cosY = Math.cos(ry)
        const sinY = Math.sin(ry)
        const x2 = x1 * cosY - z1 * sinY
        const z2 = x1 * sinY + z1 * cosY
        const y2 = y1
        // perspective
        const persp = 420 / (420 + z2 * 0.45)
        return {
          x: cx + x2 * scaleX * persp,
          y: cy + y2 * persp,
          z: z2,
          s: persp,
          visible: z2 > -R * 0.55,
        }
      }

      // draw latitude lines (horizontal)
      const latSteps = 7
      const lonSteps = 18
      // latitude circles
      for (let li = 1; li < latSteps; li++) {
        const phi = (Math.PI * li) / latSteps
        const pts: ReturnType<typeof project>[] = []
        for (let j = 0; j <= lonSteps * 4; j++) {
          const theta = (j / (lonSteps * 4)) * Math.PI * 2
          const p = project(theta, phi)
          pts.push(p)
        }
        // split into visible segments
        let seg: typeof pts = []
        const flush = () => {
          if (seg.length < 2) { seg = []; return }
          // sort check: skip if mostly hidden
          const avgZ = seg.reduce((a, b) => a + b.z, 0) / seg.length
          const alpha = avgZ > 0 ? 0.18 : 0.07
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`
          ctx.lineWidth = 0.9
          ctx.beginPath()
          ctx.moveTo(seg[0].x, seg[0].y)
          for (let k = 1; k < seg.length; k++) ctx.lineTo(seg[k].x, seg[k].y)
          ctx.stroke()
          seg = []
        }
        for (const p of pts) {
          if (p.visible) seg.push(p)
          else flush()
        }
        flush()
      }

      // longitude lines (vertical)
      for (let lj = 0; lj < lonSteps; lj++) {
        const theta = (lj / lonSteps) * Math.PI * 2
        const pts: ReturnType<typeof project>[] = []
        for (let i = 0; i <= 24; i++) {
          const phi = (i / 24) * Math.PI
          const p = project(theta, phi)
          pts.push(p)
        }
        let seg: typeof pts = []
        const flush = () => {
          if (seg.length < 2) { seg = []; return }
          const avgZ = seg.reduce((a, b) => a + b.z, 0) / seg.length
          const alpha = avgZ > 0 ? 0.16 : 0.055
          ctx.strokeStyle = `rgba(180,190,255,${alpha})`
          ctx.lineWidth = 0.85
          ctx.beginPath()
          ctx.moveTo(seg[0].x, seg[0].y)
          for (let k = 1; k < seg.length; k++) ctx.lineTo(seg[k].x, seg[k].y)
          ctx.stroke()
          seg = []
        }
        for (const p of pts) {
          if (p.visible) seg.push(p)
          else flush()
        }
        flush()
      }

      // equator highlight
      {
        const phi = Math.PI / 2
        const pts: ReturnType<typeof project>[] = []
        for (let j = 0; j <= 80; j++) {
          const theta = (j / 80) * Math.PI * 2
          pts.push(project(theta, phi))
        }
        // draw only front half
        ctx.strokeStyle = "rgba(255,255,255,0.11)"
        ctx.lineWidth = 1
        ctx.beginPath()
        let started = false
        for (const p of pts) {
          if (!p.visible) { started = false; continue }
          if (!started) { ctx.moveTo(p.x, p.y); started = true }
          else ctx.lineTo(p.x, p.y)
        }
        ctx.stroke()
      }

      // dots at intersections – subtle tech feel
      for (let li = 1; li < latSteps; li += 2) {
        for (let lj = 0; lj < lonSteps; lj += 3) {
          const phi = (Math.PI * li) / latSteps
          const theta = (lj / lonSteps) * Math.PI * 2
          const p = project(theta, phi)
          if (!p.visible || p.z < 0) continue
          const a = 0.55 + (p.z / R) * 0.3
          ctx.fillStyle = `rgba(255,255,255,${a * 0.5})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, 1.25 * p.s, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }
    frame()

    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(rafRef.current)
      else frame()
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* soft fade to keep content readable – bottom denser */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060608]/15 via-transparent to-transparent" />
    </div>
  )
}

export default GlobeMesh
