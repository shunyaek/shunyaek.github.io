"use client"

import { useEffect, useRef, useState } from "react"
import { AboutUsSection } from "@/components/sections/about-us-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { MethodologySection } from "@/components/sections/methodology-section"
import { EdgeSection } from "@/components/sections/edge-section"
import { ServicesSection } from "@/components/sections/services-section"
import { FocusSection } from "@/components/sections/focus-section"
import { WorkSection } from "@/components/sections/work-section"
import { ConnectSection } from "@/components/sections/connect-section"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { useThemeDetection } from "@/hooks/use-theme-detection"
import styles from "@/styles/components/hero-section.module.css"

export function VerticalScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 8
  const { isDarkTheme } = useThemeDetection()

  useEffect(() => {
    const handleScroll = () => {
      const container = window
      const scrollTop = container.scrollY
      const windowHeight = container.innerHeight
      const currentIndex = Math.round(scrollTop / windowHeight)
      setCurrentSection(Math.min(currentIndex, totalSections - 1))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
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
        <section id="section-0" className="w-full"><AboutUsSection /></section>
        <section id="section-1" className="w-full"><ApproachSection /></section>
        <section id="section-2" className="w-full"><MethodologySection /></section>
        <section id="section-3" className="w-full"><EdgeSection /></section>
        <section id="section-4" className="w-full"><ServicesSection /></section>
        <section id="section-5" className="w-full"><FocusSection /></section>
        <section id="section-6" className="w-full"><WorkSection /></section>
        <section id="section-7" className="w-full"><ConnectSection /></section>
      </div>
    </div>
  )
} 