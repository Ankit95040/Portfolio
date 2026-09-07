"use client"

import * as React from "react"

type TypewriterProps = {
  text: string
  speed?: number
  delay?: number
  cursor?: string
  className?: string
  startOnView?: boolean
  loop?: boolean
}

export function Typewriter({
  text,
  speed = 45,
  delay = 0,
  cursor = "▌",
  className,
  startOnView = true,
  loop = false,
}: TypewriterProps) {
  const [displayed, setDisplayed] = React.useState("")
  const [showCursor, setShowCursor] = React.useState(true)
  const ref = React.useRef<HTMLSpanElement>(null)
  const started = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    let typingId: number | undefined

    const startTyping = () => {
      if (started.current && !loop) return
      started.current = true
      let i = 0
      setDisplayed("")
      window.setTimeout(() => {
        typingId = window.setInterval(() => {
          i += 1
          setDisplayed(text.slice(0, i))
          if (i >= text.length) {
            if (typingId) window.clearInterval(typingId)
            if (!loop) return
            window.setTimeout(() => {
              let j = text.length
              const delId = window.setInterval(() => {
                j -= 1
                setDisplayed(text.slice(0, j))
                if (j <= 0) {
                  window.clearInterval(delId)
                  window.setTimeout(startTyping, 800)
                }
              }, speed * 0.6)
            }, 1200)
          }
        }, speed)
      }, delay)
    }

    // cursor blink
    const cursorId = window.setInterval(() => setShowCursor((v) => !v), 530)

    if (startOnView) {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startTyping()
            io.disconnect()
          }
        },
        { threshold: 0.5 }
      )
      io.observe(el)
      return () => {
        io.disconnect()
        if (typingId) window.clearInterval(typingId)
        if (cursorId) window.clearInterval(cursorId)
      }
    } else {
      startTyping()
      return () => {
        if (typingId) window.clearInterval(typingId)
        if (cursorId) window.clearInterval(cursorId)
      }
    }
  }, [text, speed, delay, loop, startOnView])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {displayed}
      <span
        className="inline-block translate-y-[1px] font-light"
        style={{ opacity: showCursor ? 1 : 0, transition: "opacity 0.1s" }}
        aria-hidden="true"
      >
        {cursor}
      </span>
    </span>
  )
}

export default Typewriter
