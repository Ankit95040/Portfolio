"use client"

/* eslint-disable react-hooks/set-state-in-effect */

import * as React from "react"
import {
  Store,
  ExternalLink,
  Send,
  Shield,
  Workflow,
  MessageSquare,
  Container,
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

import { LiquidCarveButton } from "@/components/originkit/liquid-carve-button"
import { ArrowRevealButton } from "@/components/originkit/arrow-reveal-button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { CodeWindow } from "@/components/ui/code-window"
import { ProjectPreviewToggle } from "@/components/ui/project-preview-toggle"
import { PointerHighlight } from "@/components/ui/pointer-highlight"
import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"
import { HeartFavorite } from "@/components/ui/heart-favorite"
import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39"
import styled from "styled-components"
import ProjectsEditorial from "@/components/projects-editorial"
import AboutTransition from "@/components/about-transition"
import MustBeThinkingTransition from "@/components/must-thinking-transition"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`

const SocialLink = styled.a<{ $brand?: string }>`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.15);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.2);
    outline-offset: 2px;
  }

  /* Brand colors */
  &[data-brand="linkedin"] {
    color: #0a66c2;
    &:hover {
      color: #004182;
      background: rgba(10, 102, 194, 0.12);
      border-color: rgba(10, 102, 194, 0.2);
    }
  }

  &[data-brand="instagram"] {
    color: #e1306c;
    &:hover {
      color: #c13584;
      background: linear-gradient(45deg, rgba(254, 218, 117, 0.12), rgba(250, 126, 30, 0.12), rgba(214, 41, 118, 0.12), rgba(150, 47, 191, 0.12));
      border-color: rgba(225, 48, 108, 0.2);
    }
  }

  &[data-brand="github"] {
    color: #ffffff;
    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.12);
    }
  }

  &[data-brand="email"] {
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.12);
    }
  }
`

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
function AboutCardDeck() {
  const [activeCard, setActiveCard] = React.useState<number | null>(2)
  const shouldReduceMotion = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false

  const cards = draggableAboutCards.slice(0, 5)

  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:mx-0">
      <div className="flex w-full items-stretch justify-center gap-1 sm:gap-2 overflow-hidden">
        {cards.map((card, idx) => {
          const isActive = activeCard === idx
          return (
            <motion.div
              key={card.id}
              className="relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14]/95 backdrop-blur-xl flex flex-col shrink-0"
              initial={false}
              animate={{
                width: isActive ? "22rem" : "5rem",
                flexGrow: isActive ? 2 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveCard(idx)}
              onHoverStart={() => {
                if (!shouldReduceMotion) setActiveCard(idx)
              }}
              onHoverEnd={() => {}}
              style={{
                height: "320px",
                minWidth: isActive ? "220px" : "60px",
              } as React.CSSProperties}
            >
              <div className="absolute inset-0">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="relative z-10 flex h-full flex-col p-3 sm:p-4">
                <h3 className="text-sm font-semibold tracking-tight text-white leading-tight">
                  {card.title}
                </h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="mt-2 flex flex-1 flex-col"
                    >
                      <p className="text-xs leading-5 text-white/70 line-clamp-3">
                        {card.definition}
                      </p>
                      <p className="mt-auto pt-3 text-[10px] font-medium tracking-wide text-white/50 border-t border-white/10">
                        {card.tech}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                {!isActive && (
                  <div className="mt-auto hidden sm:block">
                    <p className="text-[10px] font-medium tracking-wide text-white/40 [writing-mode:vertical-lr] rotate-180">
                      {card.title}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
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
  return { ref, visible } as const;
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
        <div className="absolute right-4 top-4 z-[60] pointer-events-auto" style={{ transform: "translateZ(100px)" } as React.CSSProperties}>
          <HeartFavorite ariaLabel={`Like ${project.title}`} />
        </div>
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

// ─── Home hero — orange cinematic editorial (reference composition) ────────

const HERO_NAV_ITEMS = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
]

// Handwritten signature entrance — reveals left-to-right once on page load,
// like a pen signing the page. Runs a single time, then stays visible.
function SignatureName({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <span className="relative inline-block">
      <motion.span
        aria-label="Ankit Raj"
        className="block whitespace-nowrap"
        style={{ fontFamily: "'Allura', 'Italianno', cursive", fontWeight: 400 }}
        initial={reduceMotion ? false : { clipPath: "inset(-12% 100% -12% 0%)" }}
        animate={{ clipPath: "inset(-12% 0% -12% 0%)" }}
        transition={{ duration: 2.4, delay: 0.7, ease: [0.45, 0, 0.2, 1] }}
      >
        Ankit Raj
      </motion.span>
      {!reduceMotion && (
        <motion.span
          aria-hidden="true"
          className="absolute top-[62%] size-[7px] rounded-full bg-black/85"
          style={{ boxShadow: "0 0 8px rgba(0,0,0,0.45)" }}
          initial={{ left: "0%", opacity: 0 }}
          animate={{ left: "98%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.4, delay: 0.7, ease: [0.45, 0, 0.2, 1] }}
        />
      )}
    </span>
  )
}

export default function HomePage() {
  const [isDark, setIsDark] = React.useState(true)
  const [navOpen, setNavOpen] = React.useState(false)
  const reduceMotion = useReducedMotion() ?? false

  React.useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add("dark")
    else root.classList.remove("dark")
  }, [isDark])

  // Close the hero nav with Escape
  React.useEffect(() => {
    if (!navOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [navOpen])

  const goToSection = (href: string) => {
    setNavOpen(false)
    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 320)
  }
  // final LET'S BUILD SOMETHING — distributed editorial canvas, scroll-controlled collage assembly
  const finalOuterRef = React.useRef<HTMLDivElement>(null)
  const finalPinRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!finalOuterRef.current || !finalPinRef.current) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(finalPinRef)
      gsap.set(q("[data-animate]"), { autoAlpha: 0 })
      gsap.set(q("[data-from='top']"), { y: -60 })
      gsap.set(q("[data-from='bottom']"), { y: 60 })
      gsap.set(q("[data-from='left']"), { x: -60 })
      gsap.set(q("[data-from='right']"), { x: 60 })
      gsap.set(q("[data-rotate]"), { rotation: -3 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: finalOuterRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: finalPinRef.current,
          pinSpacing: true,
          scrub: 0.9,
        },
      })
      // EMPTY CANVAS at 0% — only background visible
      // 10–20% small editorial labels
      tl.to(q("[data-animate='label']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.10 }, 0.10)
      // 20–35% IDEAS TO IMPACT
      tl.to(q("[data-animate='ideas']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.15 }, 0.20)
      // 35–50% LET'S
      tl.to(q("[data-animate='word-lets']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.15 }, 0.35)
      // 50–62% BUILD
      tl.to(q("[data-animate='word-build']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.12 }, 0.50)
      // 62–72% SOMETHING.
      tl.to(q("[data-animate='word-something']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.10 }, 0.62)
      // 72–80% mountain
      tl.to(q("[data-animate='mountain']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.08 }, 0.72)
      // 80–86% workspace/laptop
      tl.to(q("[data-animate='workspace']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.06 }, 0.80)
      // 86–91% code panel
      tl.to(q("[data-animate='code']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.05 }, 0.86)
      // 91–95% sticky notes, globe, doodles
      tl.to(q("[data-animate='note']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.04, stagger: 0.01 }, 0.91)
      tl.to(q("[data-animate='globe']"), { autoAlpha: 1, y: 0, x: 0, scale: 1, rotation: 0, duration: 0.04 }, 0.91)
      tl.to(q("[data-animate='deco']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, duration: 0.04, stagger: 0.01 }, 0.91)
      // 95–100% supporting text + social icons
      tl.to(q("[data-animate='text']"), { autoAlpha: 1, y: 0, x: 0, duration: 0.05, stagger: 0.01 }, 0.95)
      tl.to(q("[data-animate='social']"), { autoAlpha: 1, y: 0, x: 0, rotation: 0, scale: 1, duration: 0.05, stagger: 0.01 }, 0.95)
      tl.to(q("[data-animate='footer']"), { autoAlpha: 1, y: 0, duration: 0.05 }, 0.95)
    }, finalOuterRef)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === finalOuterRef.current) t.kill()
      })
    }
  }, [])

  // Wheel dampening — prevents a single extreme wheel/trackpad event from
  // jumping an enormous distance. Uses exponential compression rather than
  // a hard cap so fast scrolling still feels fast:
  //   ≤ 80px  → unchanged
  //   150px   → ~138px  (8%)
  //   300px   → ~203px  (32%)
  //   500px   → ~236px  (53%)
  //   1000px  → ~249px  (75%)
  React.useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const SOFT_CAP = 80
    const HARD_CAP = 250
    const RANGE = HARD_CAP - SOFT_CAP

    const handleWheel = (e: WheelEvent) => {
      let deltaPx = e.deltaY
      if (e.deltaMode === 1) deltaPx *= 40
      else if (e.deltaMode === 2) deltaPx = Math.sign(deltaPx) * window.innerHeight

      const abs = Math.abs(deltaPx)
      if (abs <= SOFT_CAP) return

      const dampened = HARD_CAP - RANGE * Math.exp(-(abs - SOFT_CAP) / RANGE)
      e.preventDefault()
      window.scrollBy(0, Math.sign(deltaPx) * dampened)
    }

    document.addEventListener("wheel", handleWheel, { passive: false })
    return () => document.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main id="home" className="relative">
      {/* Hamburger — the only visible chrome in the closed hero state */}
      <header className="pointer-events-none fixed left-0 top-0 z-[60] p-5 sm:p-8">
        <motion.button
          type="button"
          aria-label="Open navigation"
          onClick={() => setNavOpen(true)}
          className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          animate={{ opacity: navOpen ? 0 : 1, scale: navOpen ? 0.85 : 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: navOpen ? "none" : "auto" }}
        >
          <span className="flex flex-col items-center gap-[5px]" aria-hidden="true">
            <span className="block h-[3px] w-6 rounded-full bg-[#E8621A]" />
            <span className="block h-[3px] w-6 rounded-full bg-[#E8621A]" />
            <span className="block h-[3px] w-4 self-start rounded-full bg-[#E8621A]" />
          </span>
        </motion.button>
      </header>

      {/* Left slide-in navigation — translucent, hero stays visible through it */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key="hero-nav-scrim"
            aria-hidden="true"
            className="fixed inset-0 z-[55]"
            style={{ background: "transparent" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setNavOpen(false)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {navOpen && (
          <motion.aside
            key="hero-nav"
            aria-label="Primary navigation"
            className="fixed bottom-0 left-0 top-0 z-[58] flex w-[min(400px,84vw)] flex-col border-r border-white/10 bg-black/45 p-6 pt-5 backdrop-blur-[3px] sm:p-10 sm:pt-8"
            initial={{ x: "-102%" }}
            animate={{ x: 0 }}
            exit={{ x: "-102%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              aria-label="Close navigation"
              onClick={() => setNavOpen(false)}
              className="flex size-14 items-center justify-center rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
            >
              <span className="relative block size-6" aria-hidden="true">
                <span className="absolute left-0 top-1/2 block h-[3px] w-6 -translate-y-1/2 rotate-45 rounded-full bg-[#E8621A]" />
                <span className="absolute left-0 top-1/2 block h-[3px] w-6 -translate-y-1/2 -rotate-45 rounded-full bg-[#E8621A]" />
              </span>
            </button>
            <nav className="mt-14 flex flex-col gap-1 sm:mt-20">
              {HERO_NAV_ITEMS.map((item) => {
                const isActive = item.label === "HOME"
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => goToSection(item.href)}
                    className="group flex items-center gap-4 py-2 text-left"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-9 w-1.5 rounded-full transition-colors ${isActive ? "bg-[#E8621A]" : "bg-transparent group-hover:bg-white/25"}`}
                    />
                    <span
                      className={`block leading-none tracking-[0.01em] transition-colors ${isActive ? "text-white" : "text-white/55 group-hover:text-white"}`}
                      style={{ fontFamily: "'Anton', Impact, sans-serif", fontSize: "clamp(38px, 6vw, 56px)" }}
                    >
                      {item.label}
                    </span>
                  </button>
                )
              })}
            </nav>
            <p className="mt-auto font-mono text-[10px] tracking-[0.3em] text-white/40">
              ANKIT RAJ — PORTFOLIO
            </p>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Home hero — exact uploaded cinematic portrait as a static full-screen background */}
      <section aria-label="Intro" className="relative min-h-[100dvh] overflow-hidden bg-[#C8500F]">
        {/* static background photograph — never animated, moved, or filtered */}
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />

        {/* shifting UI layer — moves right together when the nav opens;
            the background photograph above stays completely static */}
        <motion.div
          className="relative flex min-h-[100dvh] flex-col"
          initial={false}
          animate={{ x: navOpen ? 120 : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* left editorial words */}
          <div className="absolute left-6 top-[30%] z-10 sm:left-12 sm:top-[32%]">
            <span className="block h-[3px] w-12 bg-white/90" aria-hidden="true" />
            <p className="mt-6 font-mono text-[12px] leading-[2.1] tracking-[0.34em] text-white/90 sm:text-[14px]">
              SIMPLE
              <br />
              IDEAS
              <br />
              BIGGER
              <br />
              IMPACT
            </p>
          </div>

          {/* signature + tagline */}
          <div className="absolute right-5 top-[44%] z-10 text-right sm:right-12 sm:top-[45%] lg:right-24">
            <p className="text-[56px] leading-[0.95] text-black sm:text-[84px] lg:text-[96px]">
              <SignatureName reduceMotion={reduceMotion} />
            </p>
            <p className="mt-4 font-mono text-[10px] leading-[1.9] tracking-[0.3em] text-black/80 sm:text-[12px]">
              FULL-STACK DEVELOPER
              <br />
              &amp; PROBLEM SOLVER
            </p>
          </div>

          {/* socials bottom-left */}
          <div className="absolute bottom-7 left-6 z-10 flex items-center gap-5 sm:bottom-9 sm:left-12">
            <a href="https://www.linkedin.com/in/ankit-raj-128763327/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white transition-opacity hover:opacity-70">
              <Linkedin className="size-5" />
            </a>
            <a href="https://www.instagram.com/r95ankit/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white transition-opacity hover:opacity-70">
              <Instagram className="size-5" />
            </a>
            <a href="https://github.com/Ankit95040" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white transition-opacity hover:opacity-70">
              <Github className="size-5" />
            </a>
            <a href="mailto:asrsingh95040@gmail.com" aria-label="Email" className="text-white transition-opacity hover:opacity-70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* scroll indicator bottom-right */}
          <button
            type="button"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="absolute bottom-7 right-6 z-10 flex items-center gap-3 sm:bottom-9 sm:right-12"
            aria-label="Scroll to explore"
          >
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-black/80 sm:size-14" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={2} className="size-5" aria-hidden="true">
                <path d="M12 4v16m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-left font-mono text-[10px] leading-[1.7] tracking-[0.28em] text-black/80 sm:text-[11px]">
              SCROLL
              <br />
              TO EXPLORE
            </span>
          </button>
        </motion.div>
      </section>

      {/* Must be thinking — editorial transition before Projects */}
      <MustBeThinkingTransition />

      {/* Projects — editorial 3-project system (unified layout, varied themes) */}
      <ProjectsEditorial />

      {/* Black transition + About editorial slide */}
      <div id="about">
        <AboutTransition />
      </div>

      {/* Final LET'S BUILD SOMETHING — editorial collage */}
      <section
        ref={finalOuterRef}
        id="contact"
        aria-label="Contact"
        className="relative w-full bg-[#F2F0EB] selection:bg-black selection:text-white"
        style={{ height: "300vh" }}
      >
        <div ref={finalPinRef} className="relative h-screen w-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.025]" aria-hidden="true" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

          <div className="relative flex h-full w-full flex-col px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
            <div data-animate="label" data-from="top" className="flex shrink-0 items-center gap-3 text-[9px] font-medium tracking-[0.18em] text-black/40">
              <span>IDEAS</span>
              <span className="text-black/20">TO</span>
              <span>IMPACT</span>
            </div>

          <div className="relative mt-2 grid flex-1 gap-4 lg:grid-cols-[1.02fr_1.38fr] lg:gap-6">
            <div className="relative z-10 flex flex-col">
              <h2
                className="font-black uppercase leading-[0.88] tracking-[-0.02em] text-black"
                style={{ fontFamily: "'Anton', Impact, sans-serif" }}
              >
                <span data-animate="word-lets" data-from="top" data-rotate className="block text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[60px]">
                  LET&apos;S
                </span>
                <span data-animate="word-build" data-from="top" data-rotate className="block text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[60px]">
                  BUILD
                </span>
                <span data-animate="word-something" data-from="top" data-rotate className="block text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[60px]">
                  <span className="inline-block -rotate-[1deg] bg-[#D6FF2A] px-2 py-1 text-black">SOMETHING.</span>
                </span>
              </h2>

              <p data-animate="text" data-from="bottom" className="mt-10 max-w-[420px] font-mono text-[10px] leading-[1.65] text-black/65 sm:text-[11px]">
                I&apos;m always interested in building thoughtful products, solving difficult engineering problems, and working on ideas that are worth shipping.
              </p>
              <p data-animate="text" data-from="bottom" className="mt-6 max-w-[420px] font-mono text-[10px] leading-[1.6] text-black/45 sm:text-[11px]">
                Have an idea, a project, or an opportunity? Let&apos;s talk.
              </p>

              <div data-animate="social" data-from="bottom" className="mt-8 flex gap-2.5">
                <a href="https://github.com/Ankit95040" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-9 items-center justify-center rounded-lg bg-black text-white shadow">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.07a9.4 9.4 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A9.5 9.5 0 0 0 12 2.5Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/ankit-raj-128763327/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-9 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true"><path d="M19.7 3H4.3A1.3 1.3 0 0 0 3 4.3v15.4A1.3 1.3 0 0 0 4.3 21h15.4a1.3 1.3 0 0 0 1.3-1.3V4.3A1.3 1.3 0 0 0 19.7 3ZM8.34 18.34H5.66V9.8h2.68v8.54ZM6.99 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm10.68 9.79h-2.67v-4.14c0-.99-.35-1.66-1.23-1.66-.67 0-1.07.45-1.24.89-.06.15-.08.36-.08.57v4.34H9.78s.03-7.04 0-7.77h2.67v1.1c.36-.54 1-1.32 2.43-1.32 1.77 0 3.1 1.16 3.1 3.65v4.34Z"/></svg>
                </a>
                <a href="https://www.instagram.com/r95ankit/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-9 items-center justify-center rounded-lg text-white shadow" style={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="mailto:asrsingh95040@gmail.com" aria-label="Email" className="flex size-9 items-center justify-center rounded-lg bg-[#EA4335] text-white shadow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" className="size-5" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>

              <div data-animate="text" data-from="bottom" className="mt-3 flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold italic leading-tight tracking-[0.06em] text-black/30" style={{ transform: "rotate(-1deg)" }}>
                  GOOD<br/>IDEAS<br/>BETTER<br/>CONVERSATIONS
                </span>
                <span className="text-black/20">↗</span>
              </div>

              <div data-animate="ideas" data-from="right" data-rotate className="absolute left-[42%] top-[18%] hidden rotate-[-2deg] bg-[#E8DCC8] px-3 py-2 shadow sm:block" style={{ clipPath: "polygon(1% 2%, 100% 0, 98% 100%, 0 98%)" }}>
                <p className="font-mono text-[10px] font-black leading-tight tracking-[0.08em] text-black">IDEAS<br/>&gt; CODE<br/>&gt; IMPACT</p>
              </div>
            </div>

            <div className="relative min-h-[380px] lg:min-h-0">
              <div data-animate="mountain" data-from="top" data-rotate className="absolute left-[2%] top-[2%] z-0 h-[42%] w-[80%] overflow-hidden rounded-sm bg-[#0A1F14] shadow-lg" style={{ clipPath: "polygon(0 6%, 100% 0, 100% 92%, 0 100%)" }}>
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop" alt="" className="h-full w-full object-cover opacity-90 grayscale" />
                <div className="absolute right-[10%] top-[14%] h-8 w-8 rounded-full bg-[#D6FF2A] opacity-90" aria-hidden="true" />
                <div className="absolute right-[4%] top-[8%] max-w-[130px] -rotate-2 bg-black px-2 py-1.5 shadow">
                  <p className="text-right font-mono text-[8px] font-bold leading-tight tracking-[0.06em] text-white">A Developer<br/>Who Cares About<br/>Real-World<br/>Problems.</p>
                </div>
              </div>

              <div data-animate="workspace" data-from="bottom" className="absolute bottom-[18%] left-[2%] right-[6%] z-10">
                <div className="relative overflow-hidden rounded-sm bg-[#0F0F0F] shadow-[0_12px_32px_rgba(0,0,0,0.6)]" style={{ clipPath: "polygon(0 2%, 100% 0, 100% 98%, 0 100%)" }}>
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop" alt="" className="h-[200px] w-full object-cover opacity-100 sm:h-[240px] lg:h-[280px]" />
                  <div data-animate="code" data-from="left" className="absolute bottom-[20%] left-[42%] right-[6%] top-[16%] overflow-hidden rounded-lg border border-white/10 bg-[#0A0A0A] shadow-xl">
                    <div className="h-full bg-[#0A0A0A] p-1">
                      <div className="grid h-full grid-cols-[1.1fr_1.6fr] gap-1">
                        <div className="space-y-1">
                          <div className="h-2 w-full rounded-sm bg-white/10" />
                          <div className="space-y-1 pt-1">
                            <div className="h-1 w-full rounded bg-white/5" />
                            <div className="h-1 w-5/6 rounded bg-white/5" />
                          </div>
                        </div>
                        <div className="rounded bg-[#111] p-1 font-mono text-[5px] leading-tight text-white/70">
                          <div className="text-[#7B7CFF]">const</div>
                          <div>build = () =&gt; {"{"}</div>
                          <div className="text-white/40">&nbsp;&nbsp;return &lt;Idea /&gt;</div>
                          <div>{"}"}</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-2 hidden items-center gap-1 font-mono text-[6px] tracking-[0.08em] text-white/60 sm:flex">
                      BUILD LEARN ITERATE REPEAT <span className="flex size-3 items-center justify-center rounded-full bg-[#D6FF2A] text-[7px] text-black">☺</span>
                    </div>
                  </div>
                </div>
                <div data-animate="note" data-from="right" data-rotate className="absolute -bottom-6 right-[32%] hidden rotate-[2deg] bg-[#FEF08A] px-2 py-1.5 shadow sm:block">
                  <p className="font-mono text-[8px] font-black leading-tight text-black">GOOD IDEAS<br/>TAKE TIME.</p>
                </div>
              </div>

              <div data-animate="globe" data-from="right" className="absolute right-[2%] top-[28%] z-20 hidden h-[140px] w-[140px] sm:block lg:h-[160px] lg:w-[160px]">
                <div className="absolute inset-0 rounded-full border border-[#D6FF2A]/40" aria-hidden="true" />
                <div className="absolute inset-[-8%] rounded-full border border-dashed border-black/10" aria-hidden="true" style={{ transform: "rotate(-12deg)" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px]">🌐</span>
                </div>
              </div>

              <div data-animate="note" data-from="right" data-rotate className="absolute bottom-[10%] right-[2%] z-10 hidden rotate-[3deg] bg-[#E8DCC8] px-2 py-1.5 shadow sm:block">
                <p className="font-mono text-[9px] font-black leading-tight tracking-[0.06em] text-black">TECH<br/>PEOPLE<br/>IMPACT</p>
              </div>
            </div>
          </div>

          <div data-animate="footer" data-from="bottom" className="mt-3 flex shrink-0 items-center justify-between gap-4 border-t border-black/10 pt-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-black tracking-[0.18em] text-black">LET&apos;S CONNECT</span>
              <span className="hidden h-px w-8 bg-black/15 sm:block" aria-hidden="true" />
              <span className="hidden text-[10px] tracking-[0.12em] text-black/40 sm:block">Build something together</span>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://github.com/Ankit95040" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex size-8 items-center justify-center rounded-full border border-black/10 bg-white text-black">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.09.68-.22.68-.48v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.07a9.4 9.4 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A9.5 9.5 0 0 0 12 2.5Z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/ankit-raj-128763327/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex size-8 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M19.7 3H4.3A1.3 1.3 0 0 0 3 4.3v15.4A1.3 1.3 0 0 0 4.3 21h15.4a1.3 1.3 0 0 0 1.3-1.3V4.3A1.3 1.3 0 0 0 19.7 3ZM8.34 18.34H5.66V9.8h2.68v8.54ZM6.99 8.55a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm10.68 9.79h-2.67v-4.14c0-.99-.35-1.66-1.23-1.66-.67 0-1.07.45-1.24.89-.06.15-.08.36-.08.57v4.34H9.78s.03-7.04 0-7.77h2.67v1.1c.36-.54 1-1.32 2.43-1.32 1.77 0 3.1 1.16 3.1 3.65v4.34Z"/></svg>
              </a>
              <a href="https://www.instagram.com/r95ankit/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex size-8 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" className="size-4"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="mailto:asrsingh95040@gmail.com" aria-label="Email" className="flex size-8 items-center justify-center rounded-full bg-[#EA4335] text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7" className="size-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
          </div>
        </div>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}</style>
      </section>
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
