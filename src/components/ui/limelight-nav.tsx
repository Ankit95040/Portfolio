// Installed via: npx shadcn@latest add "https://21st.dev/r/jahed/limelight-nav"
// 21st.dev Limelight Nav — https://21st.dev/r/jahed/limelight-nav
// Author: Hossain Jahed (EaseMize UI Registry)
// Preserved original visual: limelight effect, active state, animation, spacing, icons, typography, hover, transitions, shape, shadows, responsive.

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type NavItem = {
  id: string
  icon: React.ReactNode
  label: string
  onClick?: () => void
  href?: string
}

// Keep legacy alias for backward compat
export type LimelightNavItem = NavItem

export interface LimelightNavProps {
  items?: NavItem[]
  defaultActiveIndex?: number
  activeIndex?: number
  onTabChange?: (index: number) => void
  className?: string
  limelightClassName?: string
  itemClassName?: string
}

export function LimelightNav({
  items: providedItems,
  defaultActiveIndex = 0,
  activeIndex: controlledActiveIndex,
  onTabChange,
  className,
  limelightClassName,
  itemClassName,
}: LimelightNavProps) {
  // Default items (fallback) - will be overridden by portfolio
  const defaultItems: NavItem[] = [
    { id: "home", icon: null, label: "Home" },
  ]
  const items = providedItems ?? defaultItems

  const [internalIndex, setInternalIndex] = React.useState(defaultActiveIndex)
  const isControlled = controlledActiveIndex !== undefined
  const activeIndex = isControlled ? controlledActiveIndex! : internalIndex

  const navRef = React.useRef<HTMLDivElement>(null)
  const itemRefs = React.useRef<(HTMLButtonElement | null)[]>([])
  const [indicatorStyle, setIndicatorStyle] = React.useState<{ left: number; width: number } | null>(null)

  const updateIndicator = React.useCallback(() => {
    const activeEl = itemRefs.current[activeIndex]
    const navEl = navRef.current
    if (!activeEl || !navEl) return
    const navRect = navEl.getBoundingClientRect()
    const rect = activeEl.getBoundingClientRect()
    setIndicatorStyle({
      left: rect.left - navRect.left,
      width: rect.width,
    })
  }, [activeIndex])

  React.useEffect(() => {
    updateIndicator()
    const handleResize = () => updateIndicator()
    window.addEventListener("resize", handleResize)
    const id = window.setTimeout(updateIndicator, 100)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.clearTimeout(id)
    }
  }, [updateIndicator, items])

  const handleClick = (index: number, item: NavItem) => {
    if (!isControlled) setInternalIndex(index)
    onTabChange?.(index)
    if (item.onClick) item.onClick()
    if (item.href) {
      if (item.href === "/") {
        window.history.pushState(null, "", "/")
        window.scrollTo({ top: 0, behavior: "smooth" })
        const homeEl = document.querySelector("#home")
        if (homeEl) homeEl.scrollIntoView({ behavior: "smooth", block: "start" })
        return
      }
      const el = document.querySelector(item.href)
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number | null = null
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault()
      next = (index + 1) % items.length
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault()
      next = (index - 1 + items.length) % items.length
    } else if (e.key === "Home") {
      e.preventDefault()
      next = 0
    } else if (e.key === "End") {
      e.preventDefault()
      next = items.length - 1
    }
    if (next !== null) {
      itemRefs.current[next]?.focus()
      if (!isControlled) setInternalIndex(next)
      onTabChange?.(next)
      const nItem = items[next]
      if (nItem?.onClick) nItem.onClick()
    }
  }

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "relative inline-flex items-center rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/[0.06] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)_inset] dark:bg-black/20 dark:border-white/10",
        "max-w-[calc(100vw-2rem)] overflow-x-auto scrollbar-none",
        "overscroll-x-contain",
        className
      )}
      style={{ scrollbarWidth: "none" } as React.CSSProperties}
    >
      <div ref={navRef} className="relative flex items-center gap-1" role="tablist">
        {indicatorStyle && (
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute top-1/2 -translate-y-1/2 h-[32px] rounded-full bg-white/10 dark:bg-white/[0.08] border border-white/10 shadow-[0_2px_12px_-2px_rgba(59,130,246,0.35),0_0_20px_-4px_rgba(139,92,246,0.25)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-60",
              limelightClassName
            )}
            style={{
              left: indicatorStyle.left,
              width: indicatorStyle.width,
              willChange: "left, width",
            }}
          />
        )}

        {items.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={item.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              role="tab"
              aria-selected={isActive}
              aria-current={isActive ? "page" : undefined}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleClick(index, item)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={cn(
                "relative z-10 inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-0",
                "text-white/70 hover:text-white/90",
                isActive && "text-white",
                "min-h-[44px] sm:min-h-[32px]",
                itemClassName
              )}
            >
              <span
                className={cn(
                  "shrink-0 opacity-40 transition-opacity",
                  isActive && "opacity-100",
                  "[&_svg]:size-4 [&_svg]:shrink-0"
                )}
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden text-[13px]">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default LimelightNav
