"use client"

import * as React from "react"
import { ExternalLink } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DitherGlobe } from "@/components/originkit/dither-globe"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.07a9.4 9.4 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  )
}

function LeetCodeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.48 6.5 11.5 4.5a1.5 1.5 0 0 0-2.12 0L2.7 11.18a1.5 1.5 0 0 0 0 2.12l3.02 3.02c.2.2.45.34.72.42l-3.11-3.11a1.2 1.2 0 0 1 0-1.7l5.02-5.02 1.41 1.41-4.3 4.3a1.2 1.2 0 0 0 0 1.7l4.02 4.02a1.5 1.5 0 0 0 2.12 0l1.99-1.99-1.41-1.41-1.99 1.99-.02-.02-3.99-3.99 4.3-4.3 1.1 1.1 1.41-1.42-1.1-1.1 1.99-1.99.02.02 3.55 3.55a1.2 1.2 0 0 1 0 1.7l-1.42 1.42 1.41 1.41 1.42-1.42a2.7 2.7 0 0 0 0-3.82l-3.55-3.55a1.5 1.5 0 0 0-2.12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function NeetCodeLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 15.5V8.5h1.6l3.1 4.3V8.5H13v7h-1.6l-3.1-4.3v4.3H7Z" fill="currentColor" />
    </svg>
  )
}

// Problem Solving preview// Problem Solving preview — fits inside Apple browser window, pure black + premium viz
function ProblemSolvingPreview() {
  return (
    <div className="relative flex h-full min-h-[380px] flex-col overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <DitherGlobe className="h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] lg:h-[380px] lg:w-[380px]" />
      </div>
      <div className="relative z-10 flex flex-1 flex-col p-3 sm:p-4">
        <div className="text-center">
          <p className="text-[9px] font-medium tracking-[0.28em] text-white/40 uppercase">PROBLEM SOLVING</p>
          <h3 className="mt-1.5 text-[15px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[17px]">More than just solving problems.</h3>
          <p className="mx-auto mt-2 max-w-[420px] text-[11px] leading-4 text-white/50">
            I enjoy solving problems as much as I enjoy building products. Regular practice has strengthened how I approach
            data structures and algorithms.
          </p>
        </div>
        <div className="mx-auto mt-3 grid w-full max-w-[420px] grid-cols-3 gap-2 border-y border-white/10 py-2.5">
          <div className="text-center">
            <div className="text-[15px] font-bold tracking-tight text-white">350+</div>
            <div className="text-[8px] font-medium leading-tight tracking-wide text-white/60">LeetCode Solved</div>
            <div className="text-[7px] text-white/30">Across 2 profiles</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-[15px] font-bold tracking-tight text-white">TOP 3.4%</div>
            <div className="text-[8px] font-medium leading-tight tracking-wide text-white/60">NeetCode</div>
            <div className="text-[7px] text-white/30">Top 3.4% </div>
          </div>
          <div className="text-center">
            <div className="text-[15px] font-bold tracking-tight text-white">JAVA</div>
            <div className="text-[8px] font-medium leading-tight tracking-wide text-white/60">Primary DSA</div>
            <div className="text-[7px] text-white/30">DSA</div>
          </div>
        </div>
        <div className="mt-3 grid flex-1 gap-2 sm:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-lg bg-[#FFA116] text-white">
                <LeetCodeLogo className="size-3.5" />
              </span>
              <span className="text-[11px] font-semibold text-white">LeetCode</span>
            </div>
            <p className="mt-2 flex-1 text-[10px] leading-4 text-white/55">350+ problems across two profiles — consistent practice.</p>
            <a
              href="https://leetcode.com/u/Ankit95040/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:text-white/80"
            >
              View LeetCode Profile <ExternalLink className="size-3 opacity-70" />
            </a>
          </div>
          <div className="flex flex-col rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-lg bg-white text-black">
                <NeetCodeLogo className="size-3.5" />
              </span>
              <span className="text-[11px] font-semibold text-white">NeetCode</span>
            </div>
            <p className="mt-2 flex-1 text-[10px] leading-4 text-white/55">Curated patterns and focused practice.</p>
            <div className="mt-1 text-[11px] font-bold text-white">Top 3.4%</div>
            <a
              href="https://neetcode.io/user/FleetVulture435"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-white hover:text-white/80"
            >
              View NeetCode Profile <ExternalLink className="size-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Previews (interactive, preserved) ──────────────

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ShopMPreview() {
  const [tab, setTab] = React.useState<"billing" | "inventory">("billing")
  return (
    <div className="grid h-full bg-white lg:grid-cols-[168px_1fr]">
      <div className="hidden border-r border-[#EFE9E1] bg-[#FCFBF9] p-3 lg:block">
        <div className="flex items-center gap-2 px-2 py-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-[#0F1115] text-white">
            <span className="text-[11px] font-bold">◈</span>
          </span>
          <span className="text-[13px] font-bold tracking-tight text-[#0F1115]">ShopM</span>
        </div>
        <nav className="mt-3 space-y-0.5" aria-label="ShopM navigation">
          <span className="flex items-center gap-2 rounded-lg bg-[#E8EEFF] px-2.5 py-2 text-xs font-semibold text-[#2F5BFF]">⌂ Dashboard</span>
          {[
            ["Billing", "▭"],
            ["Inventory", "⬢"],
            ["People", "◯"],
            ["Locations", "◎"],
            ["Reports", "▤"],
            ["Settings", "⚙"],
          ].map(([l, i]) => (
            <span key={l} className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium text-[#6B7280]">
              <span className="flex size-4 items-center justify-center text-[11px]">{i}</span> {l}
            </span>
          ))}
        </nav>
      </div>
      <div className="flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-[#0F1115]">Welcome back, Ankit 👋</h3>
            <p className="mt-1 text-[11px] leading-none text-[#9AA0A6]">Here&apos;s what&apos;s happening at your shop today.</p>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E0D6] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#6B7280]">
              SHOPM-DEMO <span className="text-[#9AA0A6]">⌄</span>
            </span>
            <span className="flex size-7 items-center justify-center rounded-full bg-[#0F1115] text-[11px] font-bold text-white">A</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { l: "Total Sales", v: "₹24,500", d: "↑ 12%", dc: "text-[#16A34A]", bg: "bg-[#E6F5EC]" },
            { l: "Total Items", v: "1,248", d: "↑ 8%", dc: "text-[#16A34A]", bg: "bg-[#E6EEFF]" },
            { l: "Pending Dues", v: "₹6,300", d: "↓ 5%", dc: "text-[#DC2626]", bg: "bg-[#FFF1E0]" },
            { l: "Total Customers", v: "320", d: "↑ 18%", dc: "text-[#16A34A]", bg: "bg-[#EDE9FF]" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-[#EFE9E1] bg-white p-3">
              <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#6B7280]">
                <span className={`flex size-5 items-center justify-center rounded-md text-[11px] ${s.bg}`}>◈</span> {s.l}
              </div>
              <div className="mt-2 text-[15px] font-bold text-[#0F1115]">{s.v}</div>
              <div className={`mt-1 text-[11px] font-semibold ${s.dc}`}>{s.d}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-1.5">
          <button
            onClick={() => setTab("billing")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${tab === "billing" ? "bg-[#0F1115] text-white" : "bg-white text-[#6B7280] border border-[#E8E0D6]"}`}
          >
            BILLING
          </button>
          <button
            onClick={() => setTab("inventory")}
            className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition ${tab === "inventory" ? "bg-[#0F1115] text-white" : "bg-white text-[#6B7280] border border-[#E8E0D6]"}`}
          >
            INVENTORY
          </button>
        </div>
        <div className="mt-3 grid flex-1 gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-xl border border-[#EFE9E1] bg-white p-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-[#0F1115]">Recent Bills</h4>
              <span className="text-[11px] font-semibold text-[#2F5BFF]">View all</span>
            </div>
            <div className="mt-3 overflow-hidden rounded-lg border border-[#F0EDE8]">
              <div className="grid grid-cols-[1.2fr_0.6fr_0.8fr_0.6fr] gap-px bg-[#F0EDE8] text-[10px] font-semibold text-[#9AA0A6]">
                <span className="bg-[#F8F6F3] px-2.5 py-1.5">Customer</span>
                <span className="bg-[#F8F6F3] px-2 py-1.5">Amount</span>
                <span className="bg-[#F8F6F3] px-2 py-1.5">Date</span>
                <span className="bg-[#F8F6F3] px-2 py-1.5">Status</span>
              </div>
              {tab === "billing"
                ? [
                    ["Rahul Sharma", "₹1,250", "Aug 28, 2026", "Paid"],
                    ["Priya Verma", "₹850", "Aug 28, 2026", "Pending"],
                    ["Amit Kumar", "₹2,400", "Aug 27, 2026", "Paid"],
                  ].map(([c, a, d, s]) => (
                    <div key={c} className="grid grid-cols-[1.2fr_0.6fr_0.8fr_0.6fr] gap-px bg-[#F0EDE8] text-[11px] text-[#374151]">
                      <span className="bg-white px-2.5 py-2 font-medium">{c}</span>
                      <span className="bg-white px-2 py-2">{a}</span>
                      <span className="bg-white px-2 py-2 text-[#6B7280]">{d}</span>
                      <span className="bg-white px-2 py-2">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${s === "Paid" ? "bg-[#E6F5EC] text-[#15803D]" : "bg-[#FFF1E0] text-[#B45309]"}`}>{s}</span>
                      </span>
                    </div>
                  ))
                : [
                    ["Rice (5kg)", "120 in stock"],
                    ["Wheat Flour (5kg)", "85 in stock"],
                    ["Cooking Oil (1L)", "42 in stock"],
                  ].map(([n, stock]) => (
                    <div key={n} className="grid grid-cols-[1.4fr_0.6fr] gap-px bg-[#F0EDE8] text-[11px] text-[#374151]">
                      <span className="bg-white px-2.5 py-2 font-medium">{n}</span>
                      <span className="bg-white px-2 py-2 text-[#6B7280]">{stock}</span>
                    </div>
                  ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#EFE9E1] bg-white p-3">
            <h4 className="text-xs font-bold text-[#0F1115]">Inventory Overview</h4>
            <div className="mt-3 space-y-2">
              {[
                ["Rice (5kg)", "120 in stock"],
                ["Wheat Flour (5kg)", "85 in stock"],
                ["Cooking Oil (1L)", "42 in stock"],
                ["Sugar (1kg)", "200 in stock"],
              ].map(([n, s]) => (
                <div key={n} className="flex items-center justify-between rounded-lg border border-[#F0EDE8] bg-[#FCFBF9] px-2.5 py-2">
                  <div className="flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-md bg-white border border-[#E8E0D6] text-[11px]">⧉</span>
                    <div>
                      <div className="text-[11px] font-semibold text-[#0F1115]">{n}</div>
                      <div className="text-[10px] text-[#9AA0A6]">{s}</div>
                    </div>
                  </div>
                  <span className="text-[#9AA0A6]">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PromptPreview() {
  const [stage, setStage] = React.useState(0)
  const stages = ["PROMPT", "GENERATING", "SANDBOX", "LIVE"]
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setStage((s) => (s + 1) % 4), 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex h-full flex-col bg-[#0C0A0A] p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] tracking-wide text-white/50">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE APPLICATION PREVIEW
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/60">UI</span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2">
        {stages.map((s, i) => (
          <React.Fragment key={s}>
            <div
              className={`flex-1 rounded-xl border px-2 py-3 text-center transition ${i === stage ? "border-[#E63946] bg-[#E63946]/20 text-white" : i < stage ? "border-white/10 bg-white/5 text-white/70" : "border-white/5 bg-white/[0.03] text-white/30"}`}
            >
              <div className="text-[9px] tracking-widest">{s}</div>
              <div className={`mx-auto mt-1 size-1.5 rounded-full ${i === stage ? "bg-[#E63946] animate-pulse" : i < stage ? "bg-emerald-400" : "bg-white/20"}`} />
            </div>
            {i < 3 && <span className="text-white/20 text-xs">→</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
        <div className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/10" />
          <span className="size-2 rounded-full bg-white/10" />
          <span className="ml-2 text-[10px] text-white/30">prompt: “Build a task manager with auth and billing…”</span>
          <span className="ml-auto rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2 py-1 text-[10px] text-emerald-300">Generated</span>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-3">
          <div className="col-span-4 rounded-xl border border-white/10 bg-black/20 p-3">
            <div className="h-2 w-1/2 rounded-full bg-white/10" />
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-white/5" />
              <div className="h-1.5 w-5/6 rounded-full bg-white/5" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <div className="h-6 rounded-lg bg-white/5 border border-white/5" />
              <div className="h-6 rounded-lg bg-white/5 border border-white/5" />
            </div>
          </div>
          <div className="col-span-8 rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex gap-1.5">
              <div className="h-2 w-12 rounded-full bg-white/10" />
              <div className="h-2 w-8 rounded-full bg-white/5" />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-white/[0.06] border border-white/5" />
              <div className="h-16 rounded-lg bg-white/[0.06] border border-white/5" />
              <div className="h-16 rounded-lg bg-white/[0.06] border border-white/5" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/30">
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">E2B Sandbox</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Docker</span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">Inngest</span>
      </div>
    </div>
  )
}

function ChatPreview() {
  const [typing, setTyping] = React.useState(true)
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => setTyping((v) => !v), 2500)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex h-full flex-col bg-[#080B14] p-4 sm:p-5">
      <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <div className="space-y-3">
          <div className="flex justify-end">
            <span className="max-w-[75%] rounded-2xl rounded-br-sm bg-[#4F6EF7] px-3 py-2 text-xs font-medium text-white shadow">Create a landing page with Tailwind?</span>
          </div>
          <div className="flex justify-start">
            <span className="max-w-[75%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/10 px-3 py-2 text-xs text-white/80">
              {typing ? (
                <span className="inline-flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.3s]" />
                  <span className="size-1.5 rounded-full bg-white/60 animate-bounce [animation-delay:-0.15s]" />
                  <span className="size-1.5 rounded-full bg-white/60 animate-bounce" />
                </span>
              ) : (
                "Here’s a clean Tailwind hero — streaming…"
              )}
            </span>
          </div>
          <div className="flex justify-start">
            <span className="max-w-[75%] rounded-2xl rounded-bl-sm border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100">
              <span className="font-mono text-[10px] text-cyan-300">{"<section className=\"hero\">…"}</span>
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] text-white/30">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Gemini • Vite • Streaming
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <span className="flex-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/40">Ask anything…</span>
        <span className="flex size-8 items-center justify-center rounded-full bg-[#4F6EF7] text-white text-xs">↑</span>
      </div>
    </div>
  )
}

// ─── Project definitions ────────────────────────────────

type ProjectDef = {
  number: string
  label: string
  headline: [string, string, string]
  description: string
  tech: string[]
  liveUrl: string
  githubUrl?: string
  variant: "warm" | "crimson" | "navy"
  preview: React.ReactNode
}

const PROJECTS: ProjectDef[] = [
  {
    number: "01",
    label: "SHOPM",
    headline: ["SHOP MANAGEMENT,", "BUILT FOR THE REAL", "WORLD."],
    description:
      "A comprehensive shop management platform to handle billing, inventory, multi-owner access, and more — built for real-world businesses.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Auth", "Multi-tenant", "Vercel"],
    liveUrl: "https://shop-m-pi.vercel.app/",
    githubUrl: "https://github.com/Ankit95040/ShopM",
    variant: "warm",
    preview: <ShopMPreview />,
  },
  {
    number: "02",
    label: "PROMPT-TO-APP",
    headline: ["TURN YOUR IDEAS", "INTO WORKING", "APPLICATIONS."],
    description:
      "An AI-powered platform that turns natural-language prompts into complete web applications — creating isolated execution environments, generating code and returning a live, interactive result.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC", "E2B", "Docker", "Inngest"],
    liveUrl: "https://next-gen-git-v1-ankit-rajs-projects-82de644e.vercel.app",
    githubUrl: "https://github.com/Ankit95040",
    variant: "crimson",
    preview: <PromptPreview />,
  },
  {
    number: "03",
    label: "AI CHAT BOT",
    headline: ["AN AI THAT", "TALKS BACK", "IN REAL TIME."],
    description:
      "An interactive conversational AI application built with React, Vite and the Gemini API — with streaming responses, message history and a clean, responsive chat experience.",
    tech: ["React", "Vite", "JavaScript", "Gemini API", "Vercel"],
    liveUrl: "https://gemini-clone-theta-six.vercel.app/",
    githubUrl: "https://github.com/Ankit95040",
    variant: "navy",
    preview: <ChatPreview />,
  },
]

// ─── Single project layer — full-screen, continuous progress ──

function ProjectLayer({
  project,
  progress,
}: {
  project: ProjectDef
  progress: number
}) {
  const isWarm = project.variant === "warm"
  const isCrimson = project.variant === "crimson"

  const sectionBg = isWarm ? "bg-[#FAF7F3]" : isCrimson ? "bg-[#7A0C15]" : "bg-[#0A1020]"
  const textC = isWarm ? "text-[#0F1115]" : "text-white"
  const subText = isWarm ? "text-[#4A4D52]" : "text-white/60"
  const pillCls = isWarm ? "border-[#D9D2C9] bg-white text-[#1A1C1E]" : "border-white/15 bg-white/5 text-white/80 backdrop-blur"
  const primaryBtn = isWarm ? "bg-[#0F1115] text-white hover:bg-black" : "bg-white text-[#0F1115] hover:bg-white/90"
  const secondaryBtn = isWarm
    ? "border-[#0F1115] bg-white text-[#0F1115] hover:bg-[#0F1115] hover:text-white"
    : "border-white/20 bg-transparent text-white hover:bg-white hover:text-[#0F1115]"
  const browserBorder = isWarm ? "border-[#E8E0D6]" : "border-white/10"
  const browserTopBg = isWarm ? "bg-[#FCFBF9] border-[#EFE9E1]" : "bg-white/5 border-white/10"
  const creditC = isWarm ? "text-[#1A1C1E]" : "text-white"
  const creditLine = isWarm ? "bg-[#1A1C1E]" : "bg-white/30"

  return (
    <div className={`flex h-full w-full flex-col overflow-hidden ${sectionBg}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-5 pb-6 pt-[68px] sm:px-8 sm:pb-8 sm:pt-[76px] lg:px-8 lg:pb-8 lg:pt-[84px]">
        <div className="grid min-h-[480px] flex-1 gap-6 sm:min-h-[500px] lg:min-h-[520px] lg:grid-cols-[1.05fr_1.45fr] lg:gap-8 xl:gap-10">
          {/* LEFT */}
          <div
            className="flex min-h-0 flex-col"
            style={{
              opacity: progress,
              transform: `translateY(${(1 - progress) * 16}px)`,
            }}
          >
            <div className="flex items-center gap-3">
              <span className={`text-[13px] font-semibold tracking-[0.14em] ${textC}`}>{project.number}</span>
              <span className={`h-px w-12 ${isWarm ? "bg-[#1A1C1E]/70" : "bg-white/40"}`} aria-hidden="true" />
              <span className={`text-[13px] font-semibold tracking-[0.18em] ${textC}`}>{project.label}</span>
            </div>
            <h2
              className={`mt-5 max-w-[520px] text-[38px] font-black uppercase leading-[0.92] tracking-[-0.015em] sm:text-[48px] lg:text-[56px] xl:text-[60px] ${textC}`}
              style={{ fontFamily: "'Anton', 'Barlow Condensed', 'Oswald', Impact, sans-serif" }}
            >
              <span className="block">{project.headline[0]}</span>
              <span className="block">{project.headline[1]}</span>
              <span className="block">{project.headline[2]}</span>
            </h2>
            <p className={`mt-4 max-w-[480px] text-[14px] leading-[1.6] sm:text-[15px] ${subText}`}>{project.description}</p>
            <div className="mt-5 flex max-w-[500px] flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className={`rounded-full border px-3 py-1.5 text-[12px] font-medium leading-none ${pillCls}`}>
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-11 items-center justify-center gap-2 rounded-[10px] px-6 text-[13px] font-bold tracking-[0.08em] transition ${primaryBtn}`}
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                VIEW LIVE
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border px-6 text-[13px] font-bold tracking-[0.08em] transition ${secondaryBtn}`}
                >
                  <GithubIcon className="size-4" aria-hidden="true" />
                  SEE GITHUB
                </a>
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="flex min-h-0 flex-col items-stretch"
            style={{
              opacity: progress,
              transform: `translateY(${(1 - progress) * 16}px) scale(${0.98 + progress * 0.02})`,
            }}
          >
            <div
              className={`flex h-[400px] w-full flex-col overflow-hidden rounded-[18px] border bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.22),0_4px_16px_-8px_rgba(0,0,0,0.08)] sm:h-[440px] lg:h-[480px] ${browserBorder}`}
            >
              <div className={`flex h-9 shrink-0 items-center gap-1.5 border-b px-4 ${browserTopBg}`}>
                <span className="size-3 rounded-full bg-[#FF5F56]" aria-hidden="true" />
                <span className="size-3 rounded-full bg-[#FFBD2E]" aria-hidden="true" />
                <span className="size-3 rounded-full bg-[#27C93F]" aria-hidden="true" />
              </div>
              <div className="min-h-0 flex-1 overflow-auto">{project.preview}</div>
            </div>
            <div className="mt-4 flex w-full items-center justify-end gap-3">
              <span className={`whitespace-nowrap text-[11px] font-bold tracking-[0.14em] ${creditC}`}>BUILT BY ANKIT RAJ</span>
              <span className={`h-px flex-1 max-w-[360px] ${creditLine}`} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}</style>
    </div>
  )
}

export default function ProjectsEditorial() {
  const outerRef = React.useRef<HTMLDivElement>(null)
  const pinRef = React.useRef<HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!outerRef.current || !pinRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // pinned accordion: ShopM → Prompt → AI driven by scroll progress
      // outer 350vh, stage 100vh → progress 0→1 drives height morph, no empty block
      ScrollTrigger.create({
        trigger: outerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
        },
      })
    }, outerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === outerRef.current) t.kill()
      })
    }
  }, [])

  const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

  // continuous: 0→0.5 ShopM 1→0, Prompt 0→1; 0.5→1 Prompt 1→0, AI 0→1
  const p0 = 1 - clamp(progress * 2, 0, 1)
  const p1 = 1 - Math.abs(progress * 2 - 1)
  const p2 = clamp(progress * 2 - 1, 0, 1)
  const ps = [p0, p1, p2]

  const [prefersReduced, setPrefersReduced] = React.useState(false)
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  if (prefersReduced) {
    return (
      <div id="projects">
        {PROJECTS.map((p) => (
          <section key={p.number} className={p.variant === "warm" ? "bg-[#FAF7F3]" : p.variant === "crimson" ? "bg-[#7A0C15]" : "bg-[#0A1020]"}>
            <ProjectLayer project={p} progress={1} />
          </section>
        ))}
      </div>
    )
  }

  // full-screen stage with absolute layers — each layer height = p_i * 100%, stacked top→bottom
  // at p=0 ShopM 100%, at p=0.25 ShopM 50% + Prompt 50%, at p=0.5 Prompt 100% etc.
  // viewport always 100% occupied, no small rows
  return (
    <div id="projects" ref={outerRef} className="relative isolate" style={{ height: "350vh" }}>
      <div ref={pinRef} className="relative z-10 h-[100vh] h-[100dvh] w-screen overflow-hidden">
        {PROJECTS.map((p, i) => {
          const h = ps[i] * 100
          const top = ps.slice(0, i).reduce((acc, v) => acc + v * 100, 0)
          return (
            <div
              key={p.number}
              className="absolute left-0 right-0 overflow-hidden will-change-[height,transform]"
              style={{
                top: `${top}%`,
                height: `${h}%`,
              }}
              aria-hidden={ps[i] === 0}
            >
              <div className="h-[100vh] w-screen">
                <ProjectLayer project={p} progress={ps[i]} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
