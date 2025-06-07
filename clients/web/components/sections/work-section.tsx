"use client"

import { motion } from "motion/react"
import { CaseStudiesSection } from "@/components/sections/case-studies-section"
import { CustomButton } from "@/components/ui/custom-button"

export function WorkSection() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center snap-start py-6 sm:py-8 md:py-12">
      <div className="container relative z-10 px-0 md:px-0 max-w-full w-full mx-auto">
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12 px-4 sm:px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-medium font-urbanist">work</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">stories of impact, told through systems</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">stories of impact, told through systems</span>
          </motion.div>

          <motion.h2
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="brand-gradient-text">case studies</span> that speak volumes
          </motion.h2>

          <motion.p
            className="lead-text text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            real problems, thoughtful solutions, measurable impact. here's how we've helped our partners
            build meaningful technology that drives their business forward.
          </motion.p>
        </motion.div>

        {/* Use the existing comprehensive case studies section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <CaseStudiesSection />
        </motion.div>

        {/* Connect Now CTA */}
        <motion.div
          className="flex justify-center mt-0 sm:mt-0 px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <CustomButton href="#connect" />
        </motion.div>
      </div>
    </section>
  )
} 