"use client"

import { useRef } from "react"
import { AboutUsSection } from "@/components/sections/about-us-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { MethodologySection } from "@/components/sections/methodology-section"
import { EdgeSection } from "@/components/sections/edge-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FocusSection } from "@/components/sections/focus-section"
import { WorkSection } from "@/components/sections/work-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { useThemeDetection } from "@/hooks/use-theme-detection"
import { useCurrentSection } from "@/hooks/use-current-section"
import styles from "@/styles/components/hero-section.module.css"

const sectionIds = [
  "about",
  "approach",
  "methodology",
  "edge",
  "services",
  "focus",
  "work",
  "pricing",
  "connect"
]

export function VerticalScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const totalSections = 9
  const currentSection = useCurrentSection(totalSections)
  const { isDarkTheme } = useThemeDetection()

  const scrollToSection = (index: number) => {
    const sectionId = sectionIds[index]
    if (sectionId) {
      const section = document.getElementById(sectionId)
      if (section) {
        const rect = section.getBoundingClientRect()
        const targetPosition = rect.top + window.scrollY

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <div className="relative">
      {/* Fixed Background */}
      <div
        className={`fixed inset-0 z-0 ${isDarkTheme ? styles.heroBackgroundDark : styles.heroBackgroundLight}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator
        currentSection={currentSection}
        totalSections={totalSections}
        onSectionClick={scrollToSection}
      />

      {/* Vertical Scroll Container */}
      <div className="relative z-10 snap-y snap-mandatory">
        <section id="about" className="w-full"><AboutUsSection /></section>
        <section id="approach" className="w-full"><ApproachSection /></section>
        <section id="methodology" className="w-full"><MethodologySection /></section>
        <section id="edge" className="w-full"><EdgeSection /></section>
        <section id="services" className="w-full"><ServicesSection /></section>
        <section id="focus" className="w-full"><FocusSection /></section>
        <section id="work" className="w-full"><WorkSection /></section>
        <section id="pricing" className="w-full"><PricingSection /></section>
        <section id="connect" className="w-full"><ConnectSection /></section>
      </div>
    </div>
  )
} 