"use client"

import * as React from "react"
import { useAnimate, useReducedMotion, type Transition } from "framer-motion"

type LiquidCarveButtonProps = {
  label: string
  link?: string
  newTab?: boolean
  fill?: string
  text?: string
  blob?: string
  blobSize?: number
  rounded?: number
  padding?: string
  transition?: Transition
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => void
}

const defaultTransition: Transition = {
  type: "tween",
  ease: [0.44, 0, 0.56, 1] as const,
  duration: 0.8,
}

export function LiquidCarveButton({
  label,
  link,
  newTab = false,
  fill = "#FFFFFF",
  text = "#000000",
  blob = "#FC731C",
  blobSize = 80,
  rounded = 32,
  padding = "40px 64px 40px 64px",
  transition = defaultTransition,
  className,
  onClick,
}: LiquidCarveButtonProps) {
  const [scope, animate] = useAnimate()
  const shouldReduceMotion = useReducedMotion()
  const buttonRef = React.useRef<HTMLAnchorElement & HTMLButtonElement>(null)
  const blobRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return
      const el = buttonRef.current
      const blobEl = blobRef.current
      if (!el || !blobEl) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // blob follows cursor with tween
      animate(
        blobEl,
        { x: x - blobSize / 2, y: y - blobSize / 2 },
        { type: "tween", ease: [0.44, 0, 0.56, 1], duration: 0.8 } as Transition
      )

      // squash based on velocity
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const distX = (x - centerX) / centerX
      const distY = (y - centerY) / centerY
      animate(
        el,
        { scaleX: 1 + Math.abs(distX) * 0.02, scaleY: 1 + Math.abs(distY) * 0.02 },
        { type: "tween", ease: [0.44, 0, 0.56, 1], duration: 0.3 }
      )
    },
    [animate, blobSize, shouldReduceMotion]
  )

  const handleMouseEnter = React.useCallback(() => {
    setIsHovered(true)
    if (shouldReduceMotion) return
    const blobEl = blobRef.current
    if (blobEl) {
      animate(blobEl, { scale: 1.1 }, transition)
    }
  }, [animate, shouldReduceMotion, transition])

  const handleMouseLeave = React.useCallback(() => {
    setIsHovered(false)
    const el = buttonRef.current
    const blobEl = blobRef.current
    if (!el || !blobEl) return
    const rect = el.getBoundingClientRect()
    animate(
      blobEl,
      { x: rect.width / 2 - blobSize / 2, y: rect.height / 2 - blobSize / 2, scale: 1 },
      transition
    )
    animate(el, { scaleX: 1, scaleY: 1 }, { type: "tween", ease: [0.44, 0, 0.56, 1], duration: 0.5 })
  }, [animate, blobSize, transition])

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => {
      if (link && link.startsWith("#")) {
        e.preventDefault()
        const targetId = link
        const target = document.querySelector(targetId)
        if (target) {
          target.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth", block: "start" })
          history.pushState(null, "", targetId)
        }
      }
      onClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement & HTMLButtonElement>)
    },
    [link, shouldReduceMotion, onClick]
  )

  const content = (
    <>
      {/* goo filter */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <filter id="goo-liquid-carve" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <mask id="carve-mask">
            <rect width="100%" height="100%" fill="white" />
            <circle ref={blobRef as unknown as React.Ref<SVGCircleElement>} cx="50%" cy="50%" r={blobSize / 2} fill="black" style={{ filter: "url(#goo-liquid-carve)" }} />
          </mask>
        </defs>
      </svg>

      {/* blob */}
      <div
        ref={blobRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: blobSize,
          height: blobSize,
          background: blob,
          borderRadius: "50%",
          pointerEvents: "none",
          filter: "url(#goo-liquid-carve)",
          opacity: isHovered && !shouldReduceMotion ? 1 : 0.92,
        }}
      />

      {/* label */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          color: text,
          fontSize: "16px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          pointerEvents: "none",
        }}
      >
        {label}
      </span>
    </>
  )

  const sharedStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: fill,
    color: text,
    borderRadius: rounded,
    padding: padding,
    fontFamily: "inherit",
    border: "none",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    isolation: "isolate",
    textDecoration: "none",
    pointerEvents: "auto",
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  }

  const sharedProps = {
    ref: scope as unknown as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: sharedStyle,
    className,
  } as const

  if (link) {
    return (
      <a
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        ref={buttonRef as unknown as React.Ref<HTMLAnchorElement>}
        {...(sharedProps as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button ref={buttonRef}
      onClick={handleClick}
      {...(sharedProps as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  )
}

export default LiquidCarveButton
