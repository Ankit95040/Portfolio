"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import * as React from "react"
import dynamic from "next/dynamic"
import {
  Home,
  User,
  Folder,
  Layers,
  Mail,
  Store,
  ExternalLink,
  Send,
  Shield,
  Workflow,
  MessageSquare,
  Container,
  Code,
} from "lucide-react"

function Github(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.07a9.4 9.4 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A9.5 9.5 0 0 0 12 2.5Z" />
    </svg>
  )
}
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.7 3H4.3A1.3 1.3 0 0 0 3 4.3v15.4A1.3 1.3 0 0 0 4.3 21h15.4a1.3 1.3 0 0 0 1.3-1.3V4.3A1.3 1.3 0 0 0 19.7 3ZM8.34 18.34H5.66V9.8h2.68v8.54ZM6.99 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm10.68 9.79h-2.67v-4.14c0-.99-.35-1.66-1.23-1.66-.67 0-1.07.45-1.24.89-.06.15-.08.36-.08.57v4.34H9.78s.03-7.04 0-7.77h2.67v1.1c.36-.54 1-1.32 2.43-1.32 1.77 0 3.1 1.16 3.1 3.65v4.34Z" />
    </svg>
  )
}
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

import { Button } from "@/components/ui/button"
import { LeverSwitch } from "@/components/ui/lever-switch"
import { BellNotify } from "@/components/ui/bell-notify"
import { ScrambleText } from "@/components/originkit/scramble-text"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Spotlight } from "@/components/ui/spotlight"
import { CodeWindow } from "@/components/ui/code-window"
import { ProjectPreviewToggle } from "@/components/ui/project-preview-toggle"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { FloatingDock } from "@/components/ui/floating-dock"
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const Hero3D = dynamic(() => import("@/components/hero-3d").then((m) => m.Hero3D), {
  ssr: false,
  loading: () => (
    <div className="flex h-[360px] w-full items-center justify-center">
      <div className="size-2 animate-pulse rounded-full bg-white/40" />
    </div>
  ),
})

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: <Home />, href: "/" },
  { id: "about", label: "About", icon: <User />, href: "#about" },
  { id: "projects", label: "Projects", icon: <Folder />, href: "#projects" },
  { id: "skills", label: "Skills", icon: <Layers />, href: "#skills" },
  { id: "contact", label: "Contact", icon: <Mail />, href: "#contact" },
]

const floatingDockItems = [
  { title: "Home", icon: <Home className="h-4 w-4" />, href: "#home" },
  { title: "About", icon: <User className="h-4 w-4" />, href: "#about" },
  { title: "Projects", icon: <Folder className="h-4 w-4" />, href: "#projects" },
  { title: "Skills", icon: <Code className="h-4 w-4" />, href: "#skills" },
  { title: "Contact", icon: <Mail className="h-4 w-4" />, href: "#contact" },
]

// ─── Project Data ──────────────────────────────────────────────────────────
// Keep project data in a clean structure for easy maintenance.
// Live URLs are optional placeholders — update when deployed.
const PROMPT_TO_APP_LIVE_URL = "https://next-gen-git-v1-ankit-rajs-projects-82de644e.vercel.app"
const SHOPM_LIVE_URL = "https://shop-m-pi.vercel.app/"
const SHOPM_GITHUB_URL = "https://github.com/Ankit95040/ShopM"
const GEMINI_LIVE_URL = "https://gemini-clone-theta-six.vercel.app/"

type Project = {
  number: string
  title: string
  category: string
  description: string
  tech: string[]
  highlights: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    number: "01",
    title: "Prompt-to-App Platform",
    category: "AI / Full-Stack / Infrastructure",
    description: "An AI-powered platform that turns natural-language prompts into complete web applications.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "tRPC", "E2B", "Docker", "Inngest", "Clerk"],
    highlights: [
      "AI generation from natural-language prompts",
      "E2B cloud sandboxes + Docker isolated runtime",
      "Inngest async workflows for long-running generation",
      "Production architecture — 250 requests, 50 concurrent, zero failures",
      "Clerk auth + billing & credit-based access",
    ],
    liveUrl: PROMPT_TO_APP_LIVE_URL || undefined,
    featured: true,
  },
  {
    number: "02",
    title: "ShopM",
    category: "Full-Stack / SaaS / Business Software",
    description: "A full-stack shop management platform built around Billing and Inventory workflows.",
    tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma"],
    highlights: [
      "Billing and Inventory — two core workflows",
      "Multi-shop/location organization + customer records",
      "Bill amount tracking & image attachment",
      "Multi-owner authentication and authorization",
      "Shop-scoped data isolation & relational modeling",
    ],
    liveUrl: SHOPM_LIVE_URL || undefined,
    githubUrl: SHOPM_GITHUB_URL,
  },
  {
    number: "03",
    title: "AI Interactive Chat Bot",
    category: "AI / Frontend",
    description:
      "An interactive AI conversational web application built with React and Vite using the Gemini API.",
    tech: ["React", "Vite", "JavaScript", "Gemini API", "Vercel"],
    highlights: [
      "Real-time conversational AI via Gemini API",
      "Interactive chat interface with custom styling",
      "Client-side state management",
      "Secure env-based API configuration",
      "Production deployment on Vercel",
    ],
    liveUrl: GEMINI_LIVE_URL,
  },
]

const draggableAboutCards = [
  {
    id: 1,
    title: "Full-stack Engineering",
    definition: "I build complete products across frontend, backend, APIs, authentication, authorization, and data.",
    tech: "React · Next.js · TypeScript · Spring Boot",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "AI Systems",
    definition:
      "I build production-oriented AI applications around model APIs, secure execution, asynchronous workflows, and real infrastructure.",
    tech: "E2B · Inngest · AI APIs · Docker",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Backend & Data",
    definition:
      "I care about reliable APIs, clean data models, authentication, authorization, and backend architecture that can evolve.",
    tech: "Java · Spring Boot · PostgreSQL · Prisma",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Interactive Web",
    definition:
      "I enjoy building interfaces that feel alive through thoughtful motion, 3D experiences, WebGL, and carefully controlled interaction.",
    tech: "React · Three.js · R3F · GLSL",
    thumbnail:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Engineering Fundamentals",
    definition:
      "Strong fundamentals shape how I approach real-world software: DSA, OOP, APIs, SQL, system design, and maintainable architecture.",
    tech: "DSA · OOP · SQL · System Design",
    thumbnail:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const cardFanConfig = [
  { x: -70, y: 35, rotate: -5, scale: 0.94, zIndex: 1, mobileX: -42, mobileY: 20, mobileRotate: -4 },
  { x: -35, y: 0, rotate: -2.5, scale: 0.97, zIndex: 2, mobileX: -21, mobileY: 0, mobileRotate: -2 },
  { x: 0, y: -30, rotate: 0, scale: 1.0, zIndex: 5, mobileX: 0, mobileY: -18, mobileRotate: 0 },
  { x: 35, y: 0, rotate: 2.5, scale: 0.97, zIndex: 3, mobileX: 21, mobileY: 0, mobileRotate: 2 },
  { x: 70, y: 35, rotate: 5, scale: 0.94, zIndex: 4, mobileX: 42, mobileY: 20, mobileRotate: 4 },
]

function AboutCardDeck() {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <div
      onMouseLeave={() => setHoveredId(null)}
      className="relative flex h-[460px] w-full max-w-[360px] items-center justify-center overflow-visible sm:h-[500px] sm:max-w-[480px] lg:max-w-[540px]"
    >
      {draggableAboutCards.map((card, idx) => {
        const config = cardFanConfig[idx] || cardFanConfig[0]
        const isHovered = hoveredId === card.id

        const restingX = isMobile ? config.mobileX : config.x
        const restingY = isMobile ? config.mobileY : config.y
        const restingRotate = isMobile ? config.mobileRotate : config.rotate
        const restingScale = config.scale

        return (
          <motion.div
            key={card.id}
            initial={false}
            animate={{
              x: isHovered ? 0 : restingX,
              y: isHovered ? (isMobile ? -14 : -22) : restingY,
              rotate: isHovered ? 0 : restingRotate,
              scale: isHovered ? (isMobile ? 1.04 : 1.06) : restingScale,
            }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 25,
              mass: 0.6,
            }}
            onMouseEnter={() => setHoveredId(card.id)}
            onClick={() => setHoveredId((prev) => (prev === card.id ? null : card.id))}
            style={{
              zIndex: isHovered ? 50 : config.zIndex,
              transformOrigin: "center center",
            }}
            className="absolute w-[260px] sm:w-[310px] md:w-[330px] rounded-2xl border border-white/10 bg-[#0d0d14]/95 p-4 sm:p-5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl cursor-pointer select-none transition-[border-color,background-color,box-shadow] hover:border-white/25 hover:bg-[#12121c] hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.12)]"
          >
            <img
              src={card.thumbnail}
              alt={card.title}
              className="pointer-events-none h-32 sm:h-36 w-full rounded-xl object-cover"
            />
            <h3 className="mt-3.5 text-sm sm:text-[15px] font-semibold tracking-tight text-white">
              {card.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-[12.5px] leading-relaxed text-white/60">
              {card.definition}
            </p>
            <p className="mt-3 pt-2 text-[11px] font-medium tracking-wide text-white/40 border-t border-white/5">
              {card.tech}
            </p>
          </motion.div>
        )
      })}
    </div>
  )
}

function useReveal<T extends HTMLElement>() {
  const ref = React.useRef<T>(null)
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, visible } as const
}

function ArchitectureReveal() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const steps = [
    { label: "NATURAL LANGUAGE PROMPT", sub: "Prompt" },
    { label: "AI GENERATION", sub: "tRPC • Type-safe" },
    { label: "E2B SANDBOX", sub: "Isolated" },
    { label: "DOCKER RUNTIME", sub: "Container" },
    { label: "INNGEST WORKFLOW", sub: "Async" },
    { label: "GENERATED APPLICATION", sub: "Deployed" },
  ]
  return (
    <div ref={ref} className="relative mt-8 sm:mt-10">
      <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block" aria-hidden />
      <div className="grid gap-2 sm:gap-3">
        {steps.map((s, i) => (
          <div
            key={s.label}
            className="flex items-center gap-3 transition-[transform,opacity,filter] duration-700 will-change-transform"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(10px) scale(0.98)",
              filter: visible ? "blur(0px)" : "blur(4px)",
              transitionDelay: visible ? `${i * 90}ms` : "0ms",
            }}
          >
            <div className="hidden sm:flex size-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[9px] font-bold text-white/50">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 backdrop-blur sm:px-4">
              <span className="hidden sm:block size-1.5 rounded-full bg-white/30" />
              <span className="text-xs font-medium tracking-wide text-white/80">{s.label}</span>
              <span className="ml-auto hidden text-[10px] tracking-wide text-white/30 sm:block">{s.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden sm:block text-white/20 text-[10px]">↓</span>
            )}
          </div>
        ))}
      </div>
      {/* mobile: vertical line */}
      <div className="pointer-events-none absolute left-[14px] top-2 bottom-2 w-px bg-white/5 sm:hidden" aria-hidden />
    </div>
  )
}

function ProjectsIntro() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="mx-auto max-w-[720px] text-center sm:max-w-none sm:text-left transition-[transform,opacity,filter] duration-1000 will-change-transform"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
        filter: visible ? "blur(0px)" : "blur(6px)",
      }}
    >
      <p
        className="text-[12px] sm:text-[13px] font-medium tracking-[0.28em] text-white/40 uppercase transition-[transform,opacity] duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transitionDelay: visible ? "80ms" : "0ms",
        }}
      >
        SELECTED WORK
      </p>
      <h2
        className="mt-4 mb-4 text-white font-normal leading-[1.0] text-[clamp(42px,5vw,68px)] tracking-normal transition-[transform,opacity,filter] duration-1000"
        style={{
          fontFamily: "'Amarante', serif",
          fontWeight: 400,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(14px) scale(0.97)",
          filter: visible ? "blur(0px)" : "blur(8px)",
          transitionDelay: visible ? "180ms" : "0ms",
        }}
      >
        Things I&apos;ve built.
      </h2>
      <p
        className="mx-auto mt-4 max-w-[650px] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.7] text-white/60 sm:mx-0 transition-[transform,opacity] duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transitionDelay: visible ? "320ms" : "0ms",
        }}
      >
        Three systems that show how I build — from AI infrastructure to business software to interactive
        frontends.
      </p>
    </div>
  )
}

function ShopMVisual() {
  const [tab, setTab] = React.useState<"billing" | "inventory">("billing")
  const [view, setView] = React.useState<"ui" | "code">("ui")
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-blue-500/[0.05] to-violet-500/[0.06]" />
      <div className="relative p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[10px] tracking-wide text-white/40">
            <Store className="size-3 text-white/50" /> SHOP WORKFLOW
          </div>
          <ProjectPreviewToggle view={view} onChange={setView} />
        </div>
        <div className="mt-4 min-h-[176px]">
          <AnimatePresence mode="wait" initial={false}>
            {view === "ui" ? (
              <motion.div
                key="ui"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/20 p-1 w-fit">
                  <button
                    onClick={() => setTab("billing")}
                    onMouseEnter={() => setTab("billing")}
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium transition ${tab === "billing" ? "bg-white text-black" : "text-white/60 hover:text-white/80"}`}
                  >
                    BILLING
                  </button>
                  <button
                    onClick={() => setTab("inventory")}
                    onMouseEnter={() => setTab("inventory")}
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium transition ${tab === "inventory" ? "bg-white text-black" : "text-white/60 hover:text-white/80"}`}
                  >
                    INVENTORY
                  </button>
                </div>
                <div className="mt-3">
                  {tab === "billing" ? (
                    <div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                          <div className="text-[10px] text-white/40">BILL #1042</div>
                          <div className="mt-1 text-xs font-medium text-white">₹4,820</div>
                          <div className="mt-1 text-[9px] text-white/30">+ image attached</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                          <div className="text-[10px] text-white/40">CUSTOMER</div>
                          <div className="mt-1 text-xs font-medium text-white">Amit • 98***</div>
                          <div className="mt-1 text-[9px] text-white/30">Shop-scoped</div>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                          <div className="text-[10px] text-white/40">STATUS</div>
                          <div className="mt-1 inline-flex rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2 py-1 text-[10px] text-emerald-300">Paid</div>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-[9px] text-white/25 justify-center">Auth → Shop Context → Billing • Inventory → Shop Data</div>
                    </div>
                  ) : (
                    <div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-[62px] rounded-xl border border-white/10 bg-white/[0.04] p-2">
                          <div className="h-2 w-3/4 rounded-full bg-white/10" /><div className="mt-2 h-2 w-1/2 rounded-full bg-white/5" /><div className="mt-2 text-[9px] text-white/30">Rice • 42 kg</div>
                        </div>
                        <div className="h-[62px] rounded-xl border border-white/10 bg-white/[0.04] p-2">
                          <div className="h-2 w-3/4 rounded-full bg-white/10" /><div className="mt-2 h-2 w-1/2 rounded-full bg-white/5" /><div className="mt-2 text-[9px] text-white/30">Oil • 18 L</div>
                        </div>
                        <div className="h-[62px] rounded-xl border border-white/10 bg-white/[0.04] p-2">
                          <div className="h-2 w-3/4 rounded-full bg-white/10" /><div className="mt-2 h-2 w-1/2 rounded-full bg-white/5" /><div className="mt-2 text-[9px] text-white/30">Sugar • 25 kg</div>
                        </div>
                      </div>
                      <div className="mt-3 text-center text-[9px] text-white/30">Relational • Stock • Multi-location</div>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <CodeWindow
                  filename="billing.ts"
                  code={`const bill = await prisma.bill.create({
  data: {
    shopId: session.shopId,
    amount: 4820,
  },
});`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  const [view, setView] = React.useState<"ui" | "code">("ui")
  if (project.number === "01") {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-blue-500/[0.06] to-cyan-500/[0.08]" />
        <div className="relative p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[10px] tracking-wide text-white/40">
              <span className="size-2 rounded-full bg-emerald-400/70 animate-pulse" /> LIVE APPLICATION PREVIEW
            </div>
            <ProjectPreviewToggle view={view} onChange={setView} />
          </div>
          <div className="mt-4 min-h-[176px]">
            <AnimatePresence mode="wait" initial={false}>
              {view === "ui" ? (
                <motion.div
                  key="ui"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 sm:p-4">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-white/10" /><span className="size-2 rounded-full bg-white/10" />
                      <span className="ml-2 hidden text-[10px] text-white/30 sm:block">prompt: “Build a task manager with auth and billing…”</span>
                      <span className="ml-auto hidden items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 text-[10px] text-emerald-300 sm:inline-flex">
                        <span className="size-1.5 rounded-full bg-emerald-400" /> Generated
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-12 gap-3">
                      <div className="col-span-4 rounded-xl border border-white/10 bg-black/20 p-3">
                        <div className="h-2 w-1/2 rounded-full bg-white/10" /><div className="mt-2 space-y-1.5"><div className="h-1.5 w-full rounded-full bg-white/5" /><div className="h-1.5 w-5/6 rounded-full bg-white/5" /><div className="h-1.5 w-4/6 rounded-full bg-white/5" /></div>
                        <div className="mt-3 grid grid-cols-2 gap-1.5"><div className="h-6 rounded-lg bg-white/5 border border-white/5" /><div className="h-6 rounded-lg bg-white/5 border border-white/5" /></div>
                      </div>
                      <div className="col-span-8 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                        <div className="flex gap-1.5"><div className="h-2 w-12 rounded-full bg-white/10" /><div className="h-2 w-8 rounded-full bg-white/5" /></div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-lg bg-white/[0.06] border border-white/5" />
                          <div className="h-16 rounded-lg bg-white/[0.06] border border-white/5" />
                          <div className="h-16 rounded-lg bg-white/[0.06] border border-white/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-white/30">
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><Shield className="size-3" /> E2B Sandbox</span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><Container className="size-3" /> Docker</span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"><Workflow className="size-3" /> Inngest</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <CodeWindow
                    filename="workflow.ts"
                    code={`const result = await inngest.send({
  name: "app.generate",
  data: {
    prompt: userPrompt,
  },
});

await sandbox.run(result);`}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    )
  }
  if (project.number === "02") {
    return <ShopMVisual />
  }
  // AI Interactive Chat Bot
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-violet-500/[0.06] to-fuchsia-500/[0.07]" />
      <div className="relative p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[10px] tracking-wide text-white/40">
            <MessageSquare className="size-3 text-white/50" /> CONVERSATIONAL PREVIEW
          </div>
          <ProjectPreviewToggle view={view} onChange={setView} />
        </div>
        <div className="mt-4 min-h-[176px]">
          <AnimatePresence mode="wait" initial={false}>
            {view === "ui" ? (
              <motion.div
                key="ui"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 space-y-2">
                  <div className="flex justify-end"><span className="max-w-[75%] rounded-2xl rounded-br-sm bg-white text-black px-3 py-2 text-xs">Create a landing page with Tailwind?</span></div>
                  <div className="flex justify-start"><span className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white/10 border border-white/10 text-white/80 px-3 py-2 text-xs">Here’s a clean Tailwind hero — streaming…</span></div>
                  <div className="flex items-center gap-2 text-[10px] text-white/25"><span className="size-1.5 rounded-full bg-emerald-400/60 animate-pulse" /> Gemini • Vite • Streaming</div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <CodeWindow
                  filename="chat.tsx"
                  code={`const response = await generateContent({
  model: "gemini",
  prompt: message,
});

setMessages((prev) => [
  ...prev,
  response,
]);`}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [pos, setPos] = React.useState({ x: 50, y: 50 })
  const [hovered, setHovered] = React.useState(false)

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 })
  }

  const isFlagship = project.featured

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden rounded-[24px] border bg-white/[0.04] p-[1px] backdrop-blur-xl transition-[transform,border-color,background-color,box-shadow] duration-500 hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.06)_inset] ${isFlagship ? "border-white/[0.10] hover:border-white/[0.16] hover:bg-white/[0.07]" : "border-white/[0.08] hover:border-white/[0.14] hover:bg-white/[0.06]"}`}
      style={{ transform: hovered ? "translateY(-3px)" : "translateY(0)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.55] transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(96,165,250,0.09), transparent 42%), radial-gradient(700px circle at ${pos.x}% ${pos.y}%, rgba(129,140,248,0.07), transparent 52%), linear-gradient(to bottom, rgba(255,255,255,0.03), transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.10), transparent 40%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: 1,
        }}
      />

      <div className={`relative rounded-[22px] bg-[#0a0a0f]/70 ${isFlagship ? "p-6 sm:p-8" : "p-6 sm:p-7"}`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`hidden size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur sm:flex ${isFlagship ? "size-12" : ""}`}>
              <span className="text-[11px] font-bold tracking-widest text-white/70">{project.number}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="sm:hidden text-[11px] font-bold tracking-widest text-white/40">{project.number}</span>
                {isFlagship && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium tracking-wide text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    Flagship
                  </span>
                )}
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/50">
                  {project.category}
                </span>
              </div>
              <h3 className={`mt-2 font-semibold tracking-tight text-white ${isFlagship ? "text-[22px] sm:text-[26px]" : "text-[20px] sm:text-[22px]"}`}>
                {project.title}
              </h3>
              <p className="mt-2 max-w-[640px] text-[13.5px] leading-6 text-white/60">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className={`mt-6 ${isFlagship ? "" : "sm:mt-5"}`}>
          <ProjectVisual project={project} />
        </div>

        {/* Highlights */}
        <ul className="mt-6 grid gap-2">
          {project.highlights.slice(0, 5).map((h) => (
            <li key={h} className="flex items-start gap-2 text-[13px] leading-5 text-white/65">
              <span className="mt-1.5 size-1 rounded-full bg-white/40 shrink-0" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/65 backdrop-blur transition-colors group-hover:border-white/15 group-hover:text-white/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            >
              View Live <ExternalLink className="size-3.5 opacity-70" />
            </a>
          ) : (
            <span className="inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white/40">
              Live URL — update when deployed
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm font-medium text-white/80 backdrop-blur transition hover:bg-white/[0.10] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15"
            >
              <Github className="size-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Project3DCard({ project }: { project: Project }) {
  const isFlagship = project.featured
  return (
    <CardContainer containerClassName="py-0" className="w-full">
      <CardBody
        className={`group/card relative flex h-full min-h-[480px] w-full flex-col rounded-xl border bg-black p-6 dark:border-white/[0.12] dark:bg-[#0a0a0f] border-black/[0.08] sm:p-7 ${isFlagship ? "dark:border-emerald-500/20" : ""}`}
      >
        {/* Number + category */}
        <CardItem translateZ="20" className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-widest text-white/40">{project.number}</span>
          <span className="text-white/20">/</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/50">
            {project.category}
          </span>
          {isFlagship && (
            <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" /> Flagship
            </span>
          )}
        </CardItem>

        {/* Title */}
        <CardItem translateZ="50" className="mt-4 text-[22px] font-bold tracking-tight text-white sm:text-[24px]">
          {project.title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="40"
          className="mt-2 text-[13.5px] leading-6 text-white/60"
        >
          {project.description}
        </CardItem>

        {/* Visual preview — subtle 3D depth */}
        <CardItem translateZ="80" className="mt-5 w-full">
          <ProjectVisual project={project} />
        </CardItem>

        {/* Tech badges */}
        <CardItem translateZ="30" className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/60">
              {t}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40">
              +{project.tech.length - 6}
            </span>
          )}
        </CardItem>

        {/* Highlights — keep concise, 2 lines */}
        <CardItem translateZ="30" className="mt-4">
          <ul className="grid gap-1.5">
            {project.highlights.slice(0, 2).map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs leading-5 text-white/55">
                <span className="mt-1.5 size-1 rounded-full bg-white/30 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </CardItem>

        {/* View Project — real link, keyboard accessible */}
        <div className="mt-auto pt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live project ${project.title}`}
            className="inline-flex w-fit items-center justify-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
          >
            View Project <ExternalLink className="size-3.5 opacity-70" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

export default function HomePage() {
  const [active, setActive] = React.useState(0)
  const [leverOn, setLeverOn] = React.useState(false)
  const [isDark, setIsDark] = React.useState(true)

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [isDark])

  // Scroll spy — update active nav as user scrolls
  React.useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = ids.indexOf(entry.target.id)
            if (index !== -1) setActive(index)
          }
        })
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  // keep active used for scroll spy (FloatingDock handles own hover state)
  void active

  return (
    <main id="home" className="relative">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-center gap-3 px-4 pt-[14px] sm:pt-6">
        <div className="pointer-events-auto">
          <FloatingDock items={floatingDockItems} />
        </div>
        <div className="pointer-events-auto">
          <BellNotify checked={isDark} onCheckedChange={setIsDark} />
        </div>
      </header>

      {/* Hero */}
      <section aria-label="Hero" className="relative flex min-h-[100dvh] items-center overflow-visible">
        <Spotlight className="-top-16 -left-16 md:-top-10 md:left-10 opacity-[0.28]" fill="white" />
        <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-28 lg:flex-row lg:items-center lg:px-8 lg:pt-8">
          <div className="relative z-10 flex w-full max-w-[720px] flex-col gap-6 sm:gap-7">
            <p className="text-[10px] font-medium tracking-[0.28em] text-white/55 sm:text-[11px] sm:tracking-[0.32em]">
              FULL-STACK DEVELOPER • BUILDER • PROBLEM SOLVER
            </p>

            <div className="space-y-1 sm:space-y-2">
              <p className="font-serif text-[15px] leading-none tracking-[-0.01em] text-white/70 sm:text-[17px]">
                Hi, I&apos;m
              </p>
              <h1
                className="text-[62px] leading-[0.82] tracking-[-0.02em] text-white sm:text-[84px] lg:text-[110px]"
                style={{ fontFamily: "'Italianno', cursive", fontWeight: 400 }}
              >
                <ScrambleText text="Ankit Raj" />
              </h1>
              <p className="pt-2 font-serif text-[19px] leading-[1.3] tracking-[-0.015em] text-white/85 sm:pt-3 sm:text-[24px] lg:text-[26px]">
                I build software that feels alive.
              </p>
            </div>

            <p className="max-w-[560px] text-[15px] leading-7 text-white/60 sm:text-[16px] sm:leading-7">
              Full-stack developer focused on Java, Spring Boot, React, Next.js and modern
              AI-powered applications.
            </p>

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="flex flex-col items-start gap-3">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => {
                      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                      setLeverOn(true)
                    }}
                    className="w-full sm:w-auto"
                  >
                    View My Work
                  </Button>
                  <LeverSwitch checked={leverOn} onCheckedChange={setLeverOn} aria-label="Lever switch" />
                </div>
                <Button
                  variant="neutral"
                  size="lg"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto"
                >
                  Let&apos;s Connect
                </Button>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/35">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(52,211,153,0.55)]" aria-hidden />
                Available for new opportunities
              </span>
              <span className="text-white/20">•</span>
              <span className="tracking-wide">India — Remote</span>
            </div>

            <div className="relative mt-2 w-full lg:hidden">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[24px] bg-gradient-to-b from-white/[0.03] to-transparent blur-xl" />
              <React.Suspense
                fallback={
                  <div className="flex h-[280px] items-center justify-center">
                    <div className="size-2 animate-pulse rounded-full bg-white/30" />
                  </div>
                }
              >
                <Hero3D />
              </React.Suspense>
            </div>
          </div>

          <div aria-hidden="true" className="relative hidden w-full flex-1 items-center justify-center lg:flex lg:pl-10">
            <React.Suspense
              fallback={
                <div className="flex size-[420px] items-center justify-center">
                  <div className="size-2 animate-pulse rounded-full bg-white/30" />
                </div>
              }
            >
              <Hero3D className="w-[420px]" />
            </React.Suspense>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
      </section>

      {/* Projects — clean premium showcase */}
      <section
        id="projects"
        aria-label="Projects"
        className="relative w-full px-6 py-16 sm:px-8 sm:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1280px]">
          <div className="mx-auto max-w-[720px] text-center sm:max-w-none sm:text-left">
            <p className="text-[12px] sm:text-[13px] font-medium tracking-[0.28em] text-white/40 uppercase">
              SELECTED WORK
            </p>
            <h2
              className="mt-2 mb-3 text-[56px] sm:text-[76px] lg:text-[96px] font-normal leading-[0.88] tracking-normal text-white"
              style={{ fontFamily: "'Italianno', cursive", fontWeight: 400 }}
            >
              Things I&apos;ve built.
            </h2>
            <p className="mx-auto mt-4 max-w-[650px] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.7] text-white/60 sm:mx-0">
              A selection of production-focused projects I&apos;ve built across AI platforms, business software, and interactive web applications.
            </p>
          </div>

          {/* Zig-zag — alternating text ↔ card */}
          <div className="mt-20 space-y-28 sm:space-y-36 lg:space-y-44">
            {/* Project 01 — TEXT LEFT, CARD RIGHT */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
              <div className="order-1 flex flex-col gap-5 max-w-[600px] w-full">
                <span className="text-xs font-mono font-medium tracking-[0.25em] text-white/35 sm:text-sm">01</span>
                <h3
                  className="text-white font-normal leading-[0.98] sm:leading-[1.0] tracking-[-0.01em] text-[clamp(44px,5.5vw,78px)]"
                  style={{ fontFamily: "'Amarante', serif", fontWeight: 400 }}
                >
                  Prompt-to-App Platform
                </h3>
                <div className="space-y-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.75] text-white/65">
                  <p>
                    An AI-powered full-stack platform that turns natural-language prompts into complete web applications. Instead of simply generating code, the platform takes a prompt through an end-to-end workflow: it creates an isolated execution environment, generates and runs application code, and returns a working result that the user can interact with.
                  </p>
                  <p>
                    The system uses <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">E2B</span> sandboxes and <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Docker</span>-based isolation for secure execution, while <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Inngest</span> coordinates asynchronous workflows. The application also includes <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">authentication</span>, <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">credit-based access control</span>, <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">billing</span>, persistent database state, and a production-oriented architecture built around <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Next.js</span>, <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">tRPC</span>, <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">PostgreSQL</span>, and <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Prisma</span>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "Clerk", "Inngest", "E2B", "Docker"].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/65 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hidden lg:block pt-3">
                  <a
                    href="https://next-gen-git-v1-ankit-rajs-projects-82de644e.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-white/80 transition group"
                  >
                    VIEW PROJECT <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </a>
                </div>
              </div>
              <div className="order-2 flex w-full flex-col items-center justify-center lg:justify-end">
                <div className="w-full max-w-[560px]">
                  <Project3DCard project={projects[0]} />
                </div>
                <div className="mt-6 flex w-full justify-start lg:hidden">
                  <a
                    href="https://next-gen-git-v1-ankit-rajs-projects-82de644e.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-white/80 transition group"
                  >
                    VIEW PROJECT <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 02 — CARD LEFT, TEXT RIGHT (reversed on desktop) */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
              <div className="order-1 lg:order-2 flex flex-col gap-5 max-w-[600px] w-full">
                <span className="text-xs font-mono font-medium tracking-[0.25em] text-white/35 sm:text-sm">02</span>
                <h3
                  className="text-white font-normal leading-[0.98] sm:leading-[1.0] tracking-[-0.01em] text-[clamp(44px,5.5vw,78px)]"
                  style={{ fontFamily: "'Amarante', serif", fontWeight: 400 }}
                >
                  ShopM
                </h3>
                <div className="space-y-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.75] text-white/65">
                  <p>
                    ShopM is a full-stack shop management platform designed around the two workflows a physical shop relies on most: Billing and Inventory. It provides a structured way to manage customers, track bills, attach bill images, and keep operational data organized across a shop.
                  </p>
                  <p>
                    The application supports <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">multi-owner authentication</span>, <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">shop-scoped data</span> isolation, and role-aware owner/member management. The backend uses <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">PostgreSQL</span> and <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Prisma</span> while the frontend is built with <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Next.js</span>, <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">React</span>, and <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">TypeScript</span>, giving the application a strong separation between user experience, business logic, and persistent data.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma", "Authentication"].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/65 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hidden lg:block pt-3">
                  <a
                    href="https://shop-m-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-white/80 transition group"
                  >
                    VIEW PROJECT <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </a>
                </div>
              </div>
              <div className="order-2 lg:order-1 flex w-full flex-col items-center justify-center lg:justify-start">
                <div className="w-full max-w-[560px]">
                  <Project3DCard project={projects[1]} />
                </div>
                <div className="mt-6 flex w-full justify-start lg:hidden">
                  <a
                    href="https://shop-m-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-white/80 transition group"
                  >
                    VIEW PROJECT <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 03 — TEXT LEFT, CARD RIGHT */}
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
              <div className="order-1 flex flex-col gap-5 max-w-[600px] w-full">
                <span className="text-xs font-mono font-medium tracking-[0.25em] text-white/35 sm:text-sm">03</span>
                <h3
                  className="text-white font-normal leading-[0.98] sm:leading-[1.0] tracking-[-0.01em] text-[clamp(44px,5.5vw,78px)]"
                  style={{ fontFamily: "'Amarante', serif", fontWeight: 400 }}
                >
                  AI Interactive Chat Bot
                </h3>
                <div className="space-y-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.75] text-white/65">
                  <p>
                    AI Interactive Chat Bot is a conversational AI web application built with <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">React</span> and <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Vite</span> around the <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Gemini API</span>. I built the interface and application state from the ground up to create a responsive chat experience with message history, loading states, and a clean conversational workflow.
                  </p>
                  <p>
                    The project also demonstrates practical API integration, environment-based configuration, frontend <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">state management</span>, and deployment of a production-ready React application through <span className="font-medium text-white/95 underline decoration-white/30 decoration-1 underline-offset-[3px]">Vercel</span>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["React", "Vite", "Gemini API", "JavaScript", "Vercel"].map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/65 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="hidden lg:block pt-3">
                  <a
                    href="https://gemini-clone-theta-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-white/80 transition group"
                  >
                    VIEW PROJECT <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </a>
                </div>
              </div>
              <div className="order-2 flex w-full flex-col items-center justify-center lg:justify-end">
                <div className="w-full max-w-[560px]">
                  <Project3DCard project={projects[2]} />
                </div>
                <div className="mt-6 flex w-full justify-start lg:hidden">
                  <a
                    href="https://gemini-clone-theta-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white hover:text-white/80 transition group"
                  >
                    VIEW PROJECT <span className="transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-16 text-center text-xs text-white/30 sm:text-left">
            Only verified builds — no stock templates, no invented metrics.
          </p>
        </div>
      </section>

      {/* About — Card Deck */}
      <section
        id="about"
        aria-label="About"
        className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="mx-auto max-w-[520px] text-center sm:mx-0 sm:text-left">
            <p className="text-xs font-medium tracking-[0.22em] text-white/40 uppercase">ABOUT</p>
            <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-white sm:text-[36px]">
              More than just code.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/60">
              I enjoy building complete products — from polished frontend to reliable backend. I
              like owning the whole flow: interfaces that feel alive, APIs that are predictable, and
              data models that stay coherent as the product grows.
            </p>
            <p className="mt-3 hidden text-[15px] leading-7 text-white/45 lg:block">
              My focus is clean, maintainable engineering over clever one-offs. Ship, learn, iterate.
            </p>
          </div>
          <div className="relative flex w-full justify-center lg:justify-end">
            <AboutCardDeck />
          </div>
        </div>
      </section>

      {/* hidden skills anchor to preserve navbar scroll target */}
      <div id="skills" aria-hidden className="sr-only" />

      {/* Contact */}
      <section
        id="contact"
        aria-label="Contact"
        className="relative mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-8 sm:py-24"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-[1px] backdrop-blur-xl">
          <div className="rounded-[26px] bg-gradient-to-b from-white/[0.06] via-[#0a0a0f]/80 to-[#060608] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-medium tracking-[0.22em] text-white/40">CONTACT</p>
                <h2 className="mt-3 text-[30px] font-semibold tracking-[-0.03em] text-white sm:text-[40px]">
                  Let&apos;s build something.
                </h2>
                <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/60">
                  Have an idea, a product to ship, or a system to improve? I&apos;m open to
                  product-focused work and thoughtful collaborations.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      label: "Email",
                      value: "asrsingh95040@gmail.com",
                      href: "mailto:asrsingh95040@gmail.com",
                      icon: Mail,
                    },
                    {
                      label: "GitHub",
                      value: "github.com/Ankit95040",
                      href: "https://github.com/Ankit95040",
                      icon: Github,
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin.com/in/ankit-raj-128763327",
                      href: "https://www.linkedin.com/in/ankit-raj-128763327/",
                      icon: Linkedin,
                    },
                  ].map(({ label, value, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label === "Email" ? undefined : "_blank"}
                      rel={label === "Email" ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:border-white/15 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                        <Icon className="size-4 text-white/80" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium tracking-wide text-white/50">{label}</span>
                        <span className="block truncate text-sm font-medium text-white group-hover:text-white">{value}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="w-full lg:w-auto">
                  <a
                    href="mailto:asrsingh95040@gmail.com"
                    className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-[15px] font-semibold text-black shadow-[0_12px_32px_-12px_rgba(255,255,255,0.35)] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 lg:w-auto"
                  >
                    Get In Touch
                    <Send className="size-4" />
                  </a>
                  <p className="mt-3 text-center text-xs text-white/40 lg:text-right">
                    Replies within 24h • Remote, India
                  </p>
                </div>

                <div className="hidden w-full max-w-[360px] rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur lg:block" aria-hidden>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gradient-to-br from-[#60a5fa] to-[#818cf8]" />
                    <div>
                      <div className="text-sm font-medium text-white">Ankit Raj</div>
                      <div className="text-xs text-white/50">Full-stack developer</div>
                    </div>
                    <span className="ml-auto size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs text-white/40">
                    <span className="rounded-full bg-white/[0.04] py-1">Fast</span>
                    <span className="rounded-full bg-white/[0.04] py-1">Reliable</span>
                    <span className="rounded-full bg-white/[0.04] py-1">Clean</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mx-auto w-full max-w-[1280px] px-6 pb-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row">
          <p className="text-sm">© 2026 Ankit Raj</p>
          <nav aria-label="Footer" className="flex items-center gap-5">
            <a
              href="https://github.com/Ankit95040"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15 rounded-full px-1"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ankit-raj-128763327/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15 rounded-full px-1"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/r95ankit/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15 rounded-full px-1"
            >
              <Instagram className="size-4" />
              Instagram
            </a>
            <a
              href="mailto:asrsingh95040@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/15 rounded-full px-1"
            >
              <Mail className="size-4" />
              Email
            </a>
          </nav>
        </div>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          header { padding-top: 12px; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { scroll-behavior: auto !important; }
        }
      `}</style>
    </main>
  )
}
