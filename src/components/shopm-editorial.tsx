"use client"

import { ExternalLink, Home, User, Folder, Code, Mail } from "lucide-react"

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.07a9.4 9.4 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  )
}

export default function ShopMEditorial() {
  return (
    <section
      id="shopm-editorial"
      aria-label="ShopM — A modern shop management tool for real businesses"
      className="relative w-full overflow-hidden border-y border-[#E8E0D6] bg-[#FAF7F3]"
    >
      {/* floating nav pill — matches reference top pill */}
      <div className="pointer-events-none absolute left-1/2 top-5 z-20 hidden -translate-x-1/2 sm:flex">
        <div className="flex items-center gap-1.5 rounded-full border border-[#E8E0D6] bg-white px-2 py-1.5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]">
          <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#1A1C1E]">
            <Home className="size-[15px]" aria-hidden="true" />
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#1A1C1E]">
            <User className="size-[15px]" aria-hidden="true" />
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-[#E8E6E2] text-[#1A1C1E]">
            <Folder className="size-[15px]" aria-hidden="true" />
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#1A1C1E]">
            <Code className="size-[14px]" aria-hidden="true" />
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#1A1C1E]">
            <Mail className="size-[15px]" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-8 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1.45fr] lg:gap-8 xl:gap-10">
          {/* LEFT */}
          <div className="flex flex-col">
            {/* number + label */}
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-semibold tracking-[0.14em] text-[#1A1C1E]">01</span>
              <span className="h-px w-12 bg-[#1A1C1E]/70" aria-hidden="true" />
              <span className="text-[13px] font-semibold tracking-[0.18em] text-[#1A1C1E]">SHOPM</span>
            </div>

            {/* headline — condensed ultra bold */}
            <h2
              className="mt-6 max-w-[560px] text-[42px] font-black uppercase leading-[0.86] tracking-[-0.03em] text-[#0F1115] sm:text-[54px] lg:text-[62px] xl:text-[72px]"
              style={{
                fontFamily: "'Anton', 'Barlow Condensed', 'Oswald', Impact, sans-serif",
                fontStretch: "condensed",
              }}
            >
              <span className="block">A MODERN SHOP</span>
              <span className="block">MANAGEMENT TOOL</span>
              <span className="block">FOR REAL BUSINESSES</span>
            </h2>

            <p className="mt-6 max-w-[520px] text-[15px] leading-[1.65] text-[#4A4D52] sm:text-[16px]">
              A comprehensive shop management platform to handle billing, inventory, multi-owner access, and more — built for
              real-world businesses.
            </p>

            {/* pills */}
            <div className="mt-7 flex max-w-[520px] flex-wrap gap-2">
              {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Auth", "Multi-tenant", "Vercel"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#D9D2C9] bg-white px-3.5 py-1.5 text-[13px] font-medium leading-none text-[#1A1C1E]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            {/* buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://shop-m-pi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live ShopM project (opens in new tab)"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] bg-[#0F1115] px-6 text-[13px] font-bold tracking-[0.08em] text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1115]/20"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                VIEW LIVE
              </a>
              <a
                href="https://github.com/Ankit95040/ShopM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View ShopM GitHub repository (opens in new tab)"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border border-[#0F1115] bg-white px-6 text-[13px] font-bold tracking-[0.08em] text-[#0F1115] transition hover:bg-[#0F1115] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F1115]/20"
              >
                <GithubIcon className="size-4" aria-hidden="true" />
                SEE GITHUB
              </a>
            </div>
          </div>

          {/* RIGHT — browser window */}
          <div className="relative flex flex-col items-stretch lg:items-end">
            <div className="w-full overflow-hidden rounded-[18px] border border-[#E8E0D6] bg-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.18),0_4px_16px_-8px_rgba(0,0,0,0.08)] sm:rounded-[20px]">
              {/* browser top bar */}
              <div className="flex h-9 items-center gap-1.5 border-b border-[#EFE9E1] bg-[#FCFBF9] px-4">
                <span className="size-3 rounded-full bg-[#FF5F56] shadow-[0_0_0_1px_rgba(0,0,0,0.06)_inset]" aria-hidden="true" />
                <span className="size-3 rounded-full bg-[#FFBD2E] shadow-[0_0_0_1px_rgba(0,0,0,0.06)_inset]" aria-hidden="true" />
                <span className="size-3 rounded-full bg-[#27C93F] shadow-[0_0_0_1px_rgba(0,0,0,0.06)_inset]" aria-hidden="true" />
              </div>

              {/* dashboard mock — polished ShopM interface */}
              <div className="grid bg-white lg:grid-cols-[168px_1fr]">
                {/* sidebar */}
                <div className="hidden border-r border-[#EFE9E1] bg-[#FCFBF9] p-3 lg:block">
                  <div className="flex items-center gap-2 px-2 py-2">
                    <span className="flex size-6 items-center justify-center rounded-md bg-[#0F1115] text-white">
                      <span className="text-[11px] font-bold">◈</span>
                    </span>
                    <span className="text-[13px] font-bold tracking-tight text-[#0F1115]">ShopM</span>
                  </div>
                  <nav className="mt-3 space-y-0.5" aria-label="ShopM navigation">
                    <a className="flex items-center gap-2 rounded-lg bg-[#E8EEFF] px-2.5 py-2 text-xs font-semibold text-[#2F5BFF]" href="#">
                      <span className="flex size-4 items-center justify-center">⌂</span> Dashboard
                    </a>
                    {[
                      { label: "Billing", icon: "▭" },
                      { label: "Inventory", icon: "⬢" },
                      { label: "People", icon: "◯" },
                      { label: "Locations", icon: "◎" },
                      { label: "Reports", icon: "▤" },
                      { label: "Settings", icon: "⚙" },
                    ].map((it) => (
                      <span
                        key={it.label}
                        className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium text-[#6B7280]"
                      >
                        <span className="flex size-4 items-center justify-center text-[11px]">{it.icon}</span> {it.label}
                      </span>
                    ))}
                  </nav>
                </div>

                {/* main */}
                <div className="p-4 sm:p-5">
                  {/* header */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-bold text-[#0F1115]">Welcome back, Ankit 👋</h3>
                      <p className="mt-1 text-[11px] leading-none text-[#9AA0A6]">Here&apos;s what&apos;s happening at your shop today.</p>
                    </div>
                    <div className="hidden items-center gap-2 sm:flex">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E8E0D6] bg-white px-2.5 py-1.5 text-[10px] font-medium text-[#6B7280]">
                        <span className="size-3 rounded bg-[#F3F4F6] border border-[#E5E7EB] inline-flex items-center justify-center text-[8px]">▭</span>
                        SHOPM-DEMO
                        <span className="ml-1 text-[#9AA0A6]">⌄</span>
                      </span>
                      <span className="flex size-7 items-center justify-center rounded-full bg-[#0F1115] text-[11px] font-bold text-white">
                        A
                      </span>
                    </div>
                  </div>

                  {/* stats */}
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      { label: "Total Sales", value: "₹24,500", delta: "↑ 12%", deltaColor: "text-[#16A34A]", bg: "bg-[#E6F5EC]" },
                      { label: "Total Items", value: "1,248", delta: "↑ 8%", deltaColor: "text-[#16A34A]", bg: "bg-[#E6EEFF]" },
                      { label: "Pending Dues", value: "₹6,300", delta: "↓ 5%", deltaColor: "text-[#DC2626]", bg: "bg-[#FFF1E0]" },
                      { label: "Total Customers", value: "320", delta: "↑ 18%", deltaColor: "text-[#16A34A]", bg: "bg-[#EDE9FF]" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#EFE9E1] bg-white p-3 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.08)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-medium text-[#6B7280]">
                          <span className={`flex size-5 items-center justify-center rounded-md text-[11px] ${s.bg}`}>◈</span>
                          {s.label}
                        </div>
                        <div className="mt-2 text-[15px] font-bold text-[#0F1115]">{s.value}</div>
                        <div className={`mt-1 text-[11px] font-semibold ${s.deltaColor}`}>{s.delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* tables */}
                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
                    {/* Recent Bills */}
                    <div className="rounded-xl border border-[#EFE9E1] bg-white p-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#0F1115]">Recent Bills</h4>
                        <a href="#" className="text-[11px] font-semibold text-[#2F5BFF]">
                          View all
                        </a>
                      </div>
                      <div className="mt-3 overflow-hidden rounded-lg border border-[#F0EDE8]">
                        <div className="grid grid-cols-[1.2fr_0.6fr_0.8fr_0.6fr] gap-px bg-[#F0EDE8] text-[10px] font-semibold text-[#9AA0A6]">
                          <span className="bg-[#F8F6F3] px-2.5 py-1.5">Customer</span>
                          <span className="bg-[#F8F6F3] px-2 py-1.5">Amount</span>
                          <span className="bg-[#F8F6F3] px-2 py-1.5">Date</span>
                          <span className="bg-[#F8F6F3] px-2 py-1.5">Status</span>
                        </div>
                        {[
                          ["Rahul Sharma", "₹1,250", "Aug 28, 2026", "Paid"],
                          ["Priya Verma", "₹850", "Aug 28, 2026", "Pending"],
                          ["Amit Kumar", "₹2,400", "Aug 27, 2026", "Paid"],
                          ["Sneha Patel", "₹960", "Aug 27, 2026", "Pending"],
                        ].map(([customer, amount, date, status]) => (
                          <div
                            key={customer}
                            className="grid grid-cols-[1.2fr_0.6fr_0.8fr_0.6fr] gap-px bg-[#F0EDE8] text-[11px] text-[#374151]"
                          >
                            <span className="bg-white px-2.5 py-2 font-medium">{customer}</span>
                            <span className="bg-white px-2 py-2">{amount}</span>
                            <span className="bg-white px-2 py-2 text-[#6B7280]">{date}</span>
                            <span className="bg-white px-2 py-2">
                              <span
                                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                  status === "Paid" ? "bg-[#E6F5EC] text-[#15803D]" : "bg-[#FFF1E0] text-[#B45309]"
                                }`}
                              >
                                {status}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inventory Overview */}
                    <div className="rounded-xl border border-[#EFE9E1] bg-white p-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-[#0F1115]">Inventory Overview</h4>
                        <a href="#" className="text-[11px] font-semibold text-[#2F5BFF]">
                          View all
                        </a>
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          ["Rice (5kg)", "120 in stock"],
                          ["Wheat Flour (5kg)", "85 in stock"],
                          ["Cooking Oil (1L)", "42 in stock"],
                          ["Sugar (1kg)", "200 in stock"],
                        ].map(([name, stock]) => (
                          <div
                            key={name}
                            className="flex items-center justify-between rounded-lg border border-[#F0EDE8] bg-[#FCFBF9] px-2.5 py-2"
                          >
                            <div className="flex items-center gap-2">
                              <span className="flex size-6 items-center justify-center rounded-md bg-white border border-[#E8E0D6] text-[11px]">
                                ⧉
                              </span>
                              <div>
                                <div className="text-[11px] font-semibold text-[#0F1115]">{name}</div>
                                <div className="text-[10px] text-[#9AA0A6]">{stock}</div>
                              </div>
                            </div>
                            <span className="text-[#9AA0A6]">›</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* tech pills + bullets — as in reference bottom of browser */}
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Auth", "+2"].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#E8E0D6] bg-white px-2.5 py-1 text-[11px] font-medium text-[#374151]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-3 text-[11px] leading-5 text-[#6B7280]">
                      <li>Multi-owner authentication and secure access control</li>
                      <li>Real-time inventory, billing, and customer management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* BUILT BY — bottom right */}
            <div className="mt-6 flex w-full items-center justify-end gap-3">
              <span className="whitespace-nowrap text-[11px] font-bold tracking-[0.14em] text-[#1A1C1E]">BUILT BY ANKIT RAJ</span>
              <span className="h-px flex-1 max-w-[360px] bg-[#1A1C1E]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      {/* Anton font — condensed display */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}</style>
    </section>
  )
}
