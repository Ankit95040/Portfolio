"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import * as React from "react"

type ScrambleTextProps = {
  text: string
  className?: string
  speed?: number
  scrambleCharset?: string
  revealDelay?: number
  scrambleDuration?: number
  as?: React.ElementType
}

// subtle elegant charset — not hacker terminal
const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

export function ScrambleText({
  text,
  className,
  speed = 28,
  scrambleCharset = DEFAULT_CHARSET,
  revealDelay = 90,
  scrambleDuration = 1400,
  as: Component = "span",
}: ScrambleTextProps) {
  const getScrambled = React.useCallback(
    (chars: string[]) =>
      chars
        .map((c) => (c === " " ? " " : scrambleCharset[Math.floor(Math.random() * scrambleCharset.length)]))
        .join(""),
    [scrambleCharset]
  )

  const [display, setDisplay] = React.useState(text)

  const frameRef = React.useRef<number>(0)

  React.useEffect(() => {
    const chars = text.split("")
    const total = chars.length
    const start = performance.now()

    // Each character gets a random reveal threshold so both words scramble together
    const thresholds = chars.map(() => Math.random() * 0.85 + 0.05)

    // Start visibly scrambled — hydration-safe (set after mount)
    setDisplay(getScrambled(chars))

    const update = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / scrambleDuration, 1)

      let next = ""
      for (let i = 0; i < total; i++) {
        const char = chars[i]
        if (char === " ") {
          next += " "
          continue
        }
        // reveal when progress exceeds this char's random threshold — both Ankit and Raj resolve together
        if (progress > thresholds[i]) {
          next += char
        } else {
          next += scrambleCharset[Math.floor(Math.random() * scrambleCharset.length)]
        }
      }

      setDisplay(next)

      if (progress < 1) {
        frameRef.current = window.setTimeout(() => {
          requestAnimationFrame(update)
        }, speed) as unknown as number
      } else {
        setDisplay(text)
      }
    }

    // respect reduced-motion: shorter, still visible, not disabled
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mql.matches) {
      // still scramble but faster and less
      frameRef.current = window.setTimeout(() => setDisplay(text), 400) as unknown as number
      // do a quick 2-frame scramble
      setDisplay(getScrambled(chars))
      return () => {
        if (frameRef.current) window.clearTimeout(frameRef.current)
      }
    }

    frameRef.current = requestAnimationFrame(update) as unknown as number

    return () => {
      if (frameRef.current) window.clearTimeout(frameRef.current)
    }
  }, [text, speed, scrambleCharset, revealDelay, scrambleDuration, getScrambled])

  return React.createElement(Component, { className, "aria-label": text }, display)
}

export default ScrambleText
