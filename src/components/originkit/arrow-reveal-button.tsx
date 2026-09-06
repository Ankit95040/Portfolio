"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

type ArrowRevealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  href?: string
}

export function ArrowRevealButton({ children, className, href, onClick, ...props }: ArrowRevealButtonProps) {
  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        <span>{children}</span>
        <span className="relative inline-flex size-5 items-center justify-center overflow-hidden rounded-full bg-black text-white dark:bg-white dark:text-black">
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </>
  )

  const baseClass = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white text-black px-7 py-3 text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_12px_32px_-8px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
    className
  )

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={baseClass} onClick={onClick} {...props}>
      {content}
    </button>
  )
}

export default ArrowRevealButton
