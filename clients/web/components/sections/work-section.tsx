"use client"

import { CaseStudiesSection } from "@/components/sections/case-studies-section"

export function WorkSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center snap-start py-12">
      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-sm mb-6">
            <span className="font-medium font-urbanist">section 6</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground font-urbanist">our work</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            <span className="brand-gradient-text">case studies</span> that speak volumes
          </h2>

          <p className="lead-text text-lg max-w-4xl mx-auto">
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