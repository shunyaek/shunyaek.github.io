"use client"

import { CaseStudiesSection } from "@/components/sections/case-studies-section"

export function WorkSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center snap-start py-6 sm:py-8 md:py-12">
      <div className="container relative z-10 px-0 md:px-0 max-w-full w-full mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="font-medium font-urbanist">work</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">stories of impact, told through systems</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">stories of impact, told through systems</span>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6">
            <span className="brand-gradient-text">case studies</span> that speak volumes
          </h2>

          <p className="lead-text text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-2">
            real problems, thoughtful solutions, measurable impact. here's how we've helped our partners
            build meaningful technology that drives their business forward.
          </p>
        </div>

        {/* Use the existing comprehensive case studies section */}
        <CaseStudiesSection />
      </div>
    </section>
  )
} 