"use client"

import * as React from "react"

type FlickerTextProps = {
  text: string
  className?: string
  speed?: number
  startOnView?: boolean
}

export function FlickerText({ text, className, speed = 80, startOnView = true }: FlickerTextProps) {
  const [visible, setVisible] = React.useState(false)
  const [flicker, setFlicker] = React.useState(true)
  const ref = React.useRef<HTMLSpanElement>(null)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFlicker(false)
      return
    }

    let interval: number | undefined

    const start = () => {
      setVisible(true)
      let count = 0
      const max = 14
      interval = window.setInterval(() => {
        count += 1
        // random flicker
        setFlicker(Math.random() > 0.35)
        if (count >= max) {
          if (interval) window.clearInterval(interval)
          setFlicker(true)
        }
      }, speed)
    }

    if (startOnView) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            start()
            io.disconnect()
          }
        },
        { threshold: 0.6 }
      )
      io.observe(el)
      return () => {
        io.disconnect()
        if (interval) window.clearInterval(interval)
      }
    } else {
      start()
      return () => {
        if (interval) window.clearInterval(interval)
      }
    }
  }, [speed, startOnView])

  return (
    <span
      ref={ref}
      className={className}
      aria-label={text}
      style={{
        opacity: visible ? (flicker ? 1 : 0.2) : 0,
        transition: visible ? "opacity 0.08s step-end" : "opacity 0.6s ease",
        textShadow: flicker ? "0 0 12px rgba(255,255,255,0.35)" : "none",
      }}
    >
      {text}
    </span>
  )
}

export default FlickerText
