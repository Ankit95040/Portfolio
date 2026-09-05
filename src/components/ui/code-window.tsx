"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CodeWindowProps = {
  filename: string
  code: string
  className?: string
}

// subtle syntax highlighter – 2-4 colors max, no rainbow
function highlightLine(line: string): React.ReactNode {
  // comment
  if (line.trim().startsWith("//")) {
    return <span className="text-white/30">{line}</span>
  }

  // token split: keep strings, keywords, numbers, punctuation
  // naive but sufficient for short snippets
  const keywordRegex =
    /\b(const|let|var|await|async|return|import|from|where|data|name|model|prompt)\b/g

  // Escape is not needed – we render as text nodes inside spans
  const parts: React.ReactNode[] = []
  // First highlight strings
  // We'll walk line and apply keyword + string coloring via sequential parsing
  // Simple approach: split by quoted strings, then highlight keywords in non-string parts
  const stringRegex = /(['"`])(.*?)\1/g
  const segments: { text: string; isString: boolean }[] = []
  let sLast = 0
  let sm: RegExpExecArray | null
  while ((sm = stringRegex.exec(line)) !== null) {
    if (sm.index > sLast) {
      segments.push({ text: line.slice(sLast, sm.index), isString: false })
    }
    segments.push({ text: sm[0], isString: true })
    sLast = sm.index + sm[0].length
  }
  if (sLast < line.length) segments.push({ text: line.slice(sLast), isString: false })
  if (segments.length === 0) segments.push({ text: line, isString: false })

  segments.forEach((seg, segIdx) => {
    if (seg.isString) {
      parts.push(
        <span key={`s-${segIdx}`} className="text-amber-200/80">
          {seg.text}
        </span>
      )
      return
    }
    // highlight keywords inside non-string segment
    let idx = 0
    let km: RegExpExecArray | null
    const re = new RegExp(keywordRegex)
    while ((km = re.exec(seg.text)) !== null) {
      if (km.index > idx) {
        parts.push(<span key={`${segIdx}-${idx}-t`} className="text-white/75">{seg.text.slice(idx, km.index)}</span>)
      }
      parts.push(
        <span key={`${segIdx}-${km.index}-k`} className="text-[#9aa8ff]">
          {km[0]}
        </span>
      )
      idx = km.index + km[0].length
    }
    if (idx < seg.text.length) {
      const tail = seg.text.slice(idx)
      parts.push(
        <span key={`${segIdx}-tail`} className="text-white/75">
          {tail}
        </span>
      )
    }
    if (seg.text.length === 0) parts.push(null)
  })

  // fallback if parts empty
  if (parts.length === 0) return <span className="text-white/75">{line}</span>
  return <>{parts}</>
}

export function CodeWindow({ filename, code, className }: CodeWindowProps) {
  const lines = React.useMemo(() => code.trim().split("\n"), [code])

  return (
    <div
      aria-hidden="true"
      className={cn(
        "group/code relative overflow-hidden rounded-xl border border-white/10 bg-[#0e0e14]/90 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur",
        className
      )}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-3.5 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="group/code flex size-3 items-center justify-center rounded-full bg-[#ff5f56] shadow-[0_0_0_1px_rgba(0,0,0,0.12)_inset] text-[7px] font-bold leading-none text-black/0 group-hover/code:text-black/60">
            ×
          </span>
          <span className="group/code flex size-3 items-center justify-center rounded-full bg-[#ffbd2e] shadow-[0_0_0_1px_rgba(0,0,0,0.12)_inset] text-[8px] font-bold leading-none text-black/0 group-hover/code:text-black/60">
            −
          </span>
          <span className="group/code flex size-3 items-center justify-center rounded-full bg-[#27c93f] shadow-[0_0_0_1px_rgba(0,0,0,0.12)_inset] text-[7px] font-bold leading-none text-black/0 group-hover/code:text-black/60">
            +
          </span>
        </div>
        <span className="ml-1 flex-1 text-center font-mono text-[11px] font-medium tracking-wide text-white/45 sm:text-left">
          {filename}
        </span>
        <span className="hidden size-1.5 rounded-full bg-white/10 sm:block" aria-hidden />
      </div>

      {/* code */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent px-3 py-3 sm:px-3.5 sm:py-3.5">
        <pre className="m-0 overflow-x-auto font-mono text-[11px] leading-5 antialiased sm:text-[12px] sm:leading-[20px]">
          <code className="block">
            {lines.map((line, i) => (
              <div key={i} className="flex gap-3 whitespace-pre">
                <span className="w-6 shrink-0 select-none text-right font-mono text-[10px] leading-5 text-white/20 sm:text-[11px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 whitespace-pre">
                  {highlightLine(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
