"use client"

import * as React from "react"

type PixelTetrisProps = {
  backgroundColor?: string
  boardColor?: string
  movement?: number
  cellSize?: number
  gap?: number
  rounded?: number
  dropSpeed?: number
  colors?: string[]
  className?: string
  style?: React.CSSProperties
}

// Simple tetromino shapes
const SHAPES: number[][][] = [
  [[1, 1, 1, 1]], // I
  [
    [1, 1],
    [1, 1],
  ], // O
  [
    [0, 1, 0],
    [1, 1, 1],
  ], // T
  [
    [1, 1, 0],
    [0, 1, 1],
  ], // S
  [
    [0, 1, 1],
    [1, 1, 0],
  ], // Z
  [
    [1, 0, 0],
    [1, 1, 1],
  ], // J
  [
    [0, 0, 1],
    [1, 1, 1],
  ], // L
]

export function PixelTetris({
  backgroundColor = "rgba(0,0,0,0)",
  boardColor = "rgba(255,255,255,0.06)",
  movement = 4,
  cellSize = 29,
  gap = 1,
  rounded = 20,
  dropSpeed = 2,
  colors = ["#60a5fa", "#34d399", "#f472b6", "#facc15", "#a78bfa", "#fb7185"],
  className,
  style,
}: PixelTetrisProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const rafRef = React.useRef<number | null>(null)
  const boardRef = React.useRef<number[][]>([])
  const pieceRef = React.useRef<{ shape: number[][]; x: number; y: number; color: string } | null>(null)
  const timeRef = React.useRef(0)

  const cols = 10
  const rows = 18

  const initBoard = React.useCallback(() => {
    boardRef.current = Array.from({ length: rows }, () => Array(cols).fill(0))
  }, [cols, rows])

  const spawnPiece = React.useCallback(() => {
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
    const color = colors[Math.floor(Math.random() * colors.length)] ?? "#60a5fa"
    // movement controls horizontal jitter from center
    const jitter = Math.floor((Math.random() - 0.5) * movement)
    const x = Math.floor(cols / 2 - shape[0].length / 2) + jitter
    pieceRef.current = {
      shape,
      x: Math.max(0, Math.min(cols - shape[0].length, x)),
      y: 0,
      color,
    }
  }, [colors, movement, cols])

  const isValid = (shape: number[][], x: number, y: number) => {
    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (!shape[r][c]) continue
        const nx = x + c
        const ny = y + r
        if (nx < 0 || nx >= cols || ny >= rows) return false
        if (ny >= 0 && boardRef.current[ny]?.[nx]) return false
      }
    }
    return true
  }

  const placePiece = () => {
    const p = pieceRef.current
    if (!p) return
    for (let r = 0; r < p.shape.length; r++) {
      for (let c = 0; c < p.shape[r].length; c++) {
        if (!p.shape[r][c]) continue
        const y = p.y + r
        const x = p.x + c
        if (y >= 0 && y < rows && x >= 0 && x < cols) {
          boardRef.current[y][x] = 1
        }
      }
    }
    // clear full rows
    for (let r = rows - 1; r >= 0; r--) {
      if (boardRef.current[r].every((v) => v)) {
        boardRef.current.splice(r, 1)
        boardRef.current.unshift(Array(cols).fill(0))
      }
    }
    spawnPiece()
    if (pieceRef.current && !isValid(pieceRef.current.shape, pieceRef.current.x, pieceRef.current.y)) {
      initBoard()
    }
  }

  React.useEffect(() => {
    initBoard()
    spawnPiece()
  }, [initBoard, spawnPiece])

  React.useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1

    const resize = () => {
      const rect = container.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    const render = () => {
      // background
      ctx.clearRect(0, 0, width, height)
      if (backgroundColor && backgroundColor !== "rgba(0,0,0,0)" && backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor
        ctx.fillRect(0, 0, width, height)
      }

      const totalGapW = gap * (cols + 1)
      const totalGapH = gap * (rows + 1)
      const cellW = (width - totalGapW) / cols
      const cellH = (height - totalGapH) / rows
      const size = Math.min(cellW, cellH, cellSize)
      const boardW = cols * size + totalGapW
      const boardH = rows * size + totalGapH
      const offsetX = (width - boardW) / 2 + gap
      const offsetY = (height - boardH) / 2 + gap

      const drawCell = (x: number, y: number, color: string) => {
        const px = offsetX + x * (size + gap)
        const py = offsetY + y * (size + gap)
        const r = Math.min(rounded, size / 2)
        ctx.fillStyle = color
        if (r > 0) {
          ctx.beginPath()
          if ((ctx as unknown as { roundRect?: typeof ctx.roundRect }).roundRect) {
            ;(ctx as unknown as { roundRect: typeof ctx.roundRect }).roundRect(px, py, size, size, r)
          } else {
            ctx.moveTo(px + r, py)
            ctx.arcTo(px + size, py, px + size, py + size, r)
            ctx.arcTo(px + size, py + size, px, py + size, r)
            ctx.arcTo(px, py + size, px, py, r)
            ctx.arcTo(px, py, px + size, py, r)
            ctx.closePath()
          }
          ctx.fill()
        } else {
          ctx.fillRect(px, py, size, size)
        }
      }

      // board cells
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const v = boardRef.current[r]?.[c]
          drawCell(c, r, v ? "#ffffff" : boardColor)
        }
      }

      // active piece
      const p = pieceRef.current
      if (p) {
        for (let r = 0; r < p.shape.length; r++) {
          for (let c = 0; c < p.shape[r].length; c++) {
            if (!p.shape[r][c]) continue
            drawCell(p.x + c, p.y + r, p.color)
          }
        }
      }
    }

    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      render()
      return () => {
        ro.disconnect()
      }
    }

    const loop = (now: number) => {
      if (!timeRef.current) timeRef.current = now
      const delta = now - timeRef.current
      // dropSpeed 2 => ~ 500ms per drop, higher dropSpeed => faster
      const interval = Math.max(50, 600 - dropSpeed * 80)
      if (delta > interval) {
        timeRef.current = now
        const p = pieceRef.current
        if (p) {
          if (isValid(p.shape, p.x, p.y + 1)) {
            p.y += 1
          } else {
            placePiece()
          }
        }
      }
      render()
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundColor, boardColor, cellSize, gap, rounded, dropSpeed, colors, movement])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", ...style }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  )
}

export default PixelTetris
