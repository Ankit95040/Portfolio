"use client"

import * as React from "react"

type View = "ui" | "code"

type Props = {
  view: View
  onChange: (v: View) => void
  className?: string
}

export function ProjectPreviewToggle({ view, onChange, className }: Props) {
  return (
    <div
      role="group"
      aria-label="Preview toggle"
      className={
        "inline-flex items-center rounded-full border border-white/10 bg-black/20 p-0.5 backdrop-blur " +
        (className ?? "")
      }
    >
      <button
        type="button"
        aria-pressed={view === "ui"}
        aria-label="Show UI preview"
        onClick={() => onChange("ui")}
        className={
          "rounded-full px-2.5 py-1 text-[10px] font-medium leading-none tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 " +
          (view === "ui"
            ? "bg-white text-black shadow-sm"
            : "text-white/60 hover:text-white/80")
        }
      >
        UI
      </button>
      <button
        type="button"
        aria-pressed={view === "code"}
        aria-label="Show code preview"
        onClick={() => onChange("code")}
        className={
          "rounded-full px-2.5 py-1 text-[10px] font-medium leading-none tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 " +
          (view === "code"
            ? "bg-white text-black shadow-sm"
            : "text-white/60 hover:text-white/80")
        }
      >
        CODE
      </button>
    </div>
  )
}
