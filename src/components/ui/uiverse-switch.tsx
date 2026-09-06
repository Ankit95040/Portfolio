"use client"

import * as React from "react"

type UiverseSwitchProps = {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  "aria-label"?: string
}

export function UiverseSwitch({ checked, onCheckedChange, "aria-label": ariaLabel }: UiverseSwitchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked)
  }

  return (
    <label className="uiverse-switch">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        aria-label={ariaLabel ?? "Toggle night mode"}
      />
      <span className="uiverse-slider" />
      <style>{`
        .uiverse-switch {
          font-size: 1rem;
          position: relative;
          display: inline-block;
          width: 4em;
          height: 2em;
          vertical-align: middle;
        }
        .uiverse-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .uiverse-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: #eee;
          transition: 0.4s;
          border-radius: 0.5em;
          box-shadow: 0 0.2em #dfd9d9;
        }
        .uiverse-slider:before {
          position: absolute;
          content: "";
          height: 1.5em;
          width: 1.4em;
          border-radius: 0.3em;
          left: 0.3em;
          bottom: 0.7em;
          background-color: lightsalmon;
          transition: 0.4s;
          box-shadow: 0 0.4em #bcb4b4;
        }
        .uiverse-slider:hover::before {
          box-shadow: 0 0.2em #bcb4b4;
          bottom: 0.5em;
        }
        .uiverse-switch input:checked + .uiverse-slider:before {
          transform: translateX(2em);
          background: lightgreen;
        }
        .uiverse-switch input:focus-visible + .uiverse-slider {
          outline: 2px solid rgba(255,255,255,0.4);
          outline-offset: 2px;
        }
      `}</style>
    </label>
  )
}

export default UiverseSwitch
