"use client"

import { useState, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Mail } from "lucide-react"

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.07a9.4 9.4 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  )
}

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.7 3H4.3A1.3 1.3 0 0 0 3 4.3v15.4A1.3 1.3 0 0 0 4.3 21h15.4a1.3 1.3 0 0 0 1.3-1.3V4.3A1.3 1.3 0 0 0 19.7 3ZM8.34 18.34H5.66V9.8h2.68v8.54ZM6.99 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm10.68 9.79h-2.67v-4.14c0-.99-.35-1.66-1.23-1.66-.67 0-1.07.45-1.24.89-.06.15-.08.36-.08.57v4.34H9.78s.03-7.04 0-7.77h2.67v1.1c.36-.54 1-1.32 2.43-1.32 1.77 0 3.1 1.16 3.1 3.65v4.34Z" />
    </svg>
  )
}

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const SOCIALS = [
  { brand: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ankit-raj-128763327/" },
  { brand: "instagram", label: "Instagram", href: "https://www.instagram.com/r95ankit/" },
  { brand: "github", label: "GitHub", href: "https://github.com/Ankit95040" },
  { brand: "email", label: "Email", href: "mailto:asrsingh95040@gmail.com" },
] as const

const BRAND_BG = {
  linkedin: "#0A66C2",
  instagram: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
  github: "#181717",
  email: "#EA4335",
}

const ICONS = {
  linkedin: <Linkedin className="size-4" />,
  instagram: <Instagram className="size-4" />,
  github: <Github className="size-4" />,
  email: <Mail className="size-4" />,
}

export default function SocialHoverStack() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleActivate = useCallback(
    (index: number | null) => {
      if (shouldReduceMotion) return
      setActiveIndex(index)
    },
    [shouldReduceMotion]
  )

  return (
    <div className="flex items-center">
      {SOCIALS.map((social, index) => {
        const isActive = activeIndex === index
        return (
          <motion.a
            key={social.brand}
            href={social.href}
            target={social.brand === "email" ? undefined : "_blank"}
            rel={social.brand === "email" ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            onHoverStart={() => handleActivate(index)}
            onHoverEnd={() => handleActivate(null)}
            onFocus={() => handleActivate(index)}
            onBlur={() => handleActivate(null)}
            layout
            animate={{
              width: isActive ? undefined : 40,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              mass: 0.5,
            }}
            className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-2 text-white ${index > 0 ? "-ml-2 md:-ml-[10px]" : ""}`}
            style={{
              minWidth: 40,
              height: 40,
              background: BRAND_BG[social.brand],
            }}
          >
            <span className="shrink-0" style={{ color: "#ffffff" }}>
              {ICONS[social.brand]}
            </span>
            <motion.span
              animate={{ opacity: isActive ? 1 : 0, width: isActive ? "auto" : 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden whitespace-nowrap text-[12px] font-medium text-white"
            >
              {social.label}
            </motion.span>
          </motion.a>
        )
      })}
    </div>
  )
}
