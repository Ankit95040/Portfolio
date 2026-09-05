"use client"

import * as React from "react"

export type Hero3DProps = {
  className?: string
}

/**
 * Hero 3D – cleaned
 * Previously contained particle sphere + wireframe icosahedron on bunny's chest.
 * Wireframe/black spherical object has been removed per request.
 * Bunny remains clean by itself with background video; no decorative 3D on bunny.
 * Component kept for layout compatibility – renders transparent placeholder.
 */
export function Hero3D({ className }: Hero3DProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: 420, position: "relative", background: "transparent" }}
    />
  )
}

export default Hero3D
