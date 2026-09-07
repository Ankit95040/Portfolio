"use client"

import * as React from "react"
import { ExternalLink } from "lucide-react"
import { GlobeMesh } from "@/components/originkit/globe-mesh"

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
      <path
        d="M7 15.5V8.5h1.6l3.1 4.3V8.5H13v7h-1.6l-3.1-4.3v4.3H7Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function ProblemSolvingSection() {
  return (
    <section
      id="problem-solving"
      aria-label="Problem Solving"
      className="relative flex h-[100vh] min-h-[100vh] w-full items-center justify-center overflow-hidden bg-[#000000] px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
    >
      {/* pure black background */}
      <div className="absolute inset-0 bg-[#000000]" aria-hidden="true" />

      {/* animated globe behind content */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <GlobeMesh className="h-[120%] w-[120%] opacity-55 sm:h-[110%] sm:w-[110%] sm:opacity-60" />
      </div>

      {/* content above globe */}
      <div className="relative z-10 flex h-full max-h-[100vh] w-full max-w-[1100px] flex-col justify-center">
        {/* header */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[11px] font-medium tracking-[0.28em] text-white/45 uppercase">PROBLEM SOLVING</p>
          <h2 className="mt-2 text-[26px] font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-[30px] lg:text-[36px]">
            More than just solving problems.
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[13px] leading-5 text-white/55 sm:text-[14px] sm:leading-6">
            I enjoy solving problems as much as I enjoy building products. Regular algorithmic practice has strengthened how I
            approach data structures, algorithms, complexity, and breaking complex problems into manageable steps.
          </p>
        </div>

        {/* stats — compact */}
        <div className="mx-auto mt-5 grid w-full max-w-[720px] grid-cols-3 gap-3 border-y border-white/10 py-4 sm:mt-6 sm:gap-6">
          <div className="text-center">
            <div className="text-[24px] font-bold tracking-tight text-white sm:text-[28px]">350+</div>
            <div className="mt-1 text-[10px] font-medium leading-tight tracking-wide text-white/70 sm:text-[11px]">LeetCode Problems Solved</div>
            <div className="mt-0.5 text-[9px] tracking-wide text-white/35">Across 2 profiles</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-[24px] font-bold tracking-tight text-white sm:text-[28px]">TOP 3.4%</div>
            <div className="mt-1 text-[10px] font-medium leading-tight tracking-wide text-white/70 sm:text-[11px]">NeetCode Ranking</div>
            <div className="mt-0.5 text-[9px] tracking-wide text-white/35">Top 3.4% on NeetCode</div>
          </div>
          <div className="text-center">
            <div className="text-[24px] font-bold tracking-tight text-white sm:text-[28px]">JAVA</div>
            <div className="mt-1 text-[10px] font-medium leading-tight tracking-wide text-white/70 sm:text-[11px]">Primary DSA Language</div>
            <div className="mt-0.5 text-[9px] tracking-wide text-white/35">Data Structures & Algorithms</div>
          </div>
        </div>

        {/* cards — compact, side-by-side */}
        <div className="mx-auto mt-5 grid w-full max-w-[820px] gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
          {/* LeetCode */}
          <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md transition-colors hover:bg-white/[0.08] sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#FFA116] text-white shadow-sm">
                <LeetCodeLogo className="size-4" />
              </span>
              <h3 className="text-[14px] font-semibold tracking-tight text-white">LeetCode</h3>
            </div>
            <p className="mt-3 text-[12.5px] leading-5 text-white/60">
              I&apos;ve solved 350+ algorithmic problems across two LeetCode profiles, using consistent practice to strengthen
              data structures and coding fundamentals.
            </p>
            <p className="mt-3 text-[11px] font-medium tracking-wide text-white/40">350+ Problems Solved · 2 Profiles</p>
            <a
              href="https://leetcode.com/u/Ankit95040/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LeetCode profile (opens in new tab)"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-full"
            >
              View LeetCode Profile <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
            </a>
          </div>

          {/* NeetCode */}
          <div className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md transition-colors hover:bg-white/[0.08] sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-xl bg-white text-black shadow-sm">
                <NeetCodeLogo className="size-4" />
              </span>
              <h3 className="text-[14px] font-semibold tracking-tight text-white">NeetCode</h3>
            </div>
            <p className="mt-3 text-[12.5px] leading-5 text-white/60">
              I use NeetCode as a structured way to study and reinforce data structures and algorithms through curated
              problem patterns and focused practice.
            </p>
            <p className="mt-3 text-[11px] font-medium tracking-wide text-white/40">Top 3.4% on NeetCode</p>
            <div className="mt-1.5 inline-flex items-center gap-2">
              <span className="text-[16px] font-bold tracking-tight text-white">Top 3.4%</span>
              <span className="text-[11px] text-white/40">percentile</span>
            </div>
            <a
              href="https://neetcode.io/user/FleetVulture435"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View NeetCode profile (opens in new tab)"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-full"
            >
              View NeetCode Profile <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
