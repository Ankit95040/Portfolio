// Installed via: npx shadcn@latest add "https://21st.dev/r/theutkarshmail/lever-switch"
// 21st.dev Lever Switch — https://21st.dev/r/theutkarshmail/lever-switch
// Author: Utkarsh Pandey
// Animated lever switch can be toggled on and off just like a lever or gear of a machine

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface LeverSwitchProps extends React.HTMLAttributes<HTMLButtonElement> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
}

export function LeverSwitch({
  checked: controlledChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className,
  ...props
}: LeverSwitchProps) {
  const [internalChecked, setInternalChecked] = React.useState(defaultChecked)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked! : internalChecked

  const handleClick = () => {
    if (disabled) return
    const next = !checked
    if (!isControlled) setInternalChecked(next)
    onCheckedChange?.(next)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label="Lever switch"
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative inline-flex h-[44px] w-[88px] items-center rounded-full border-2 border-white/10 bg-white/[0.06] p-1 backdrop-blur-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:opacity-50",
        checked && "bg-white/[0.08] border-white/15",
        className
      )}
      {...props}
    >
      {/* track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/[0.08] to-transparent opacity-60" aria-hidden />
      {/* lever base */}
      <div
        className={cn(
          "absolute left-1 top-1/2 h-[32px] w-[32px] -translate-y-1/2 rounded-full border border-white/10 bg-gradient-to-b from-white to-white/80 shadow-[0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)] transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]",
          checked && "translate-x-[46px] bg-gradient-to-b from-[#60a5fa] to-[#818cf8] border-white/20 shadow-[0_2px_12px_rgba(96,165,250,0.4)]"
        )}
        aria-hidden
      >
        <div className="absolute inset-[6px] rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {/* lever handle */}
      <div
        className={cn(
          "absolute left-[18px] top-1/2 h-1 w-6 -translate-y-1/2 rounded-full bg-white/20 transition-all duration-500",
          checked && "translate-x-[46px] bg-white/30"
        )}
        aria-hidden
      />
      {/* status dot */}
      <div
        className={cn(
          "absolute right-3 top-1/2 size-2 -translate-y-1/2 rounded-full bg-white/20 transition-all duration-300",
          checked && "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
        )}
        aria-hidden
      />
    </button>
  )
}

// For compatibility with original usage: `import { Component } from "@/components/ui/lever-switch"`
export const Component = LeverSwitch
export default LeverSwitch
