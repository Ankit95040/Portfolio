"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type UiverseCTAProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
}

export function UiverseCTA({ className, children, asChild, ...props }: UiverseCTAProps) {
  return (
    <>
      <button className={cn("uiverse-cta", className)} {...props}>
        <span className="uiverse-cta-text">{children}</span>
        <span className="uiverse-cta-decor" aria-hidden>
          <span className="uiverse-cta-icon icon-1">✦</span>
          <span className="uiverse-cta-icon icon-2">✧</span>
          <span className="uiverse-cta-icon icon-3">✦</span>
          <span className="uiverse-cta-icon icon-4">✧</span>
          <span className="uiverse-cta-icon icon-5">✦</span>
        </span>
      </button>
      <style>{`
        .uiverse-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #fef3c7;
          background: linear-gradient(to bottom, #fffbeb, #fef3c7);
          color: #1f2937;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
          padding: 12px 24px;
          border-radius: 9999px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.9);
          cursor: pointer;
          overflow: visible;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .uiverse-cta:hover {
          background: linear-gradient(to bottom, #fffbeb, #fde68a);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9);
          transform: translateY(-1px);
        }
        .uiverse-cta:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9);
        }
        .uiverse-cta:focus-visible {
          outline: 2px solid rgba(31,41,55,0.3);
          outline-offset: 2px;
        }
        .uiverse-cta-text {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .uiverse-cta-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: visible;
        }
        .uiverse-cta-icon {
          position: absolute;
          font-size: 10px;
          opacity: 0;
          transform: translateY(10px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }
        .uiverse-cta:hover .uiverse-cta-icon {
          opacity: 1;
          transform: translateY(-8px) scale(1);
        }
        .uiverse-cta .icon-1 { left: 10%; top: -2px; transition-delay: 0ms; }
        .uiverse-cta .icon-2 { left: 28%; top: -6px; transition-delay: 40ms; }
        .uiverse-cta .icon-3 { left: 50%; top: -8px; transform: translateX(-50%) translateY(10px) scale(0.8); transition-delay: 80ms; }
        .uiverse-cta:hover .icon-3 { transform: translateX(-50%) translateY(-8px) scale(1); }
        .uiverse-cta .icon-4 { right: 28%; top: -6px; transition-delay: 120ms; }
        .uiverse-cta .icon-5 { right: 10%; top: -2px; transition-delay: 160ms; }
      `}</style>
    </>
  )
}

export function UiverseCTALink({
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <>
      <a className={cn("uiverse-cta", className)} {...props}>
        <span className="uiverse-cta-text">{children}</span>
        <span className="uiverse-cta-decor" aria-hidden>
          <span className="uiverse-cta-icon icon-1">✦</span>
          <span className="uiverse-cta-icon icon-2">✧</span>
          <span className="uiverse-cta-icon icon-3">✦</span>
          <span className="uiverse-cta-icon icon-4">✧</span>
          <span className="uiverse-cta-icon icon-5">✦</span>
        </span>
      </a>
      <style>{`
        .uiverse-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #fef3c7;
          background: linear-gradient(to bottom, #fffbeb, #fef3c7);
          color: #1f2937;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
          padding: 12px 24px;
          border-radius: 9999px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.9);
          cursor: pointer;
          overflow: visible;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .uiverse-cta:hover {
          background: linear-gradient(to bottom, #fffbeb, #fde68a);
          box-shadow: 0 6px 16px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9);
          transform: translateY(-1px);
        }
        .uiverse-cta:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.9);
        }
        .uiverse-cta:focus-visible {
          outline: 2px solid rgba(31,41,55,0.3);
          outline-offset: 2px;
        }
        .uiverse-cta-text {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .uiverse-cta-decor {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: visible;
        }
        .uiverse-cta-icon {
          position: absolute;
          font-size: 10px;
          opacity: 0;
          transform: translateY(10px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          pointer-events: none;
        }
        .uiverse-cta:hover .uiverse-cta-icon {
          opacity: 1;
          transform: translateY(-8px) scale(1);
        }
        .uiverse-cta .icon-1 { left: 10%; top: -2px; transition-delay: 0ms; }
        .uiverse-cta .icon-2 { left: 28%; top: -6px; transition-delay: 40ms; }
        .uiverse-cta .icon-3 { left: 50%; top: -8px; transform: translateX(-50%) translateY(10px) scale(0.8); transition-delay: 80ms; }
        .uiverse-cta:hover .icon-3 { transform: translateX(-50%) translateY(-8px) scale(1); }
        .uiverse-cta .icon-4 { right: 28%; top: -6px; transition-delay: 120ms; }
        .uiverse-cta .icon-5 { right: 10%; top: -2px; transition-delay: 160ms; }
      `}</style>
    </>
  )
}
