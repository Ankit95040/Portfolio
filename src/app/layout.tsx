import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { LoadingScreen } from "@/components/loading-screen"
import IntroZoom from "@/components/intro-zoom"
import { ClickEffects } from "@/components/originkit/clickeffects"
import StyledComponentsRegistry from "./registry"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ankit Raj — Portfolio",
  description:
    "Full-stack developer focused on Java, Spring Boot, React, Next.js and modern AI-powered applications.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen bg-[#060608] text-white antialiased flex flex-col">
        <IntroZoom />
        <LoadingScreen />
        <ClickEffects />
        <div className="relative z-10 flex min-h-screen flex-col">
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
