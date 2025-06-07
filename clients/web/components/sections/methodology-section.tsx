"use client"

import { motion } from "motion/react"
import { CustomButton } from "@/components/ui/custom-button"

export function MethodologySection() {
  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-medium font-urbanist">methodology</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">a structured path, built to adapt</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">a structured path, built to adapt</span>
          </motion.div>

          <motion.h2
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="brand-gradient-text">deliberate and dynamic</span> methodology
          </motion.h2>

          <motion.p
            className="lead-text text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            we balance engineering precision with business pragmatism, ensuring every decision
            is rooted in clarity, purpose, and outcomes.
          </motion.p>
        </motion.div>

        {/* Methodology Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              number: "1",
              title: "discovery",
              description: "absorb context, identify challenges, define success together",
              items: ["stakeholder interviews", "technical archaeology", "constraint mapping"]
            },
            {
              number: "2",
              title: "blueprint",
              description: "detailed, unambiguous foundations for focused development",
              items: ["architecture design", "technology selection", "implementation roadmap"]
            },
            {
              number: "3",
              title: "build",
              description: "iterative releases, constant feedback, continuous alignment",
              items: ["agile development", "regular demos", "collaborative refinement"]
            },
            {
              number: "4",
              title: "support",
              description: "post-launch refinement and technical clarity",
              items: ["performance monitoring", "knowledge transfer", "ongoing optimization"]
            }
          ].map((phase, index) => (
            <motion.div
              key={index}
              className="bg-background/40 backdrop-blur-sm border rounded-xl p-6"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 0.5,
                delay: 0.5 + (index * 0.15),
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + (index * 0.15),
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <span className="text-white font-bold">{phase.number}</span>
              </motion.div>

              <motion.h3
                className="font-playfair text-lg font-bold mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.15) }}
                viewport={{ once: true }}
              >
                {phase.title}
              </motion.h3>

              <motion.p
                className="text-sm text-muted-foreground leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + (index * 0.15) }}
                viewport={{ once: true }}
              >
                {phase.description}
              </motion.p>

              <motion.div
                className="space-y-2 text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + (index * 0.15) }}
                viewport={{ once: true }}
              >
                {phase.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.1 + (index * 0.15) + (itemIndex * 0.1)
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connect Now CTA */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <CustomButton href="#connect" />
        </div>
      </div>
    </section>
  )
} 