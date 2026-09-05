// Installed via: npx shadcn@latest add "https://21st.dev/r/rahil1202/bell-notify"
// 21st.dev BellNotify — https://21st.dev/r/rahil1202/bell-notify
// Author: Rahil Vahora
// Custom bell notify me button with light/illuminated animation

"use client"

import * as React from "react"
import { Bell } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BellNotifyProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

export function BellNotify({
  checked: controlledChecked,
  defaultChecked = false,
  onCheckedChange,
  className,
  ...props
}: BellNotifyProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked! : internalChecked

  const handleClick = () => {
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    onCheckedChange?.(next)
  }

  return (
    <button
      type="button"
      aria-pressed={checked}
      aria-label={checked ? "Disable night mode" : "Enable night mode"}
      onClick={handleClick}
      className={cn(
        "relative inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl transition-all hover:bg-white/[0.08] hover:border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
        checked && "bg-white text-black border-white shadow-[0_0_18px_rgba(255,255,255,0.22)]",
        className
      )}
      {...props}
    >
      <Bell
        className={cn(
          "size-5 transition-all",
          checked ? "text-black fill-black/10" : "text-white/80"
        )}
      />
      {checked && (
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)] animate-pulse" aria-hidden />
      )}
      {checked && (
        <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-20" aria-hidden />
      )}
    </button>
  )
}

export default BellNotify
