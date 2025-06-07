"use client"

import { motion } from "motion/react"
import { CustomButton } from "@/components/ui/custom-button"
import { ClientMarquee } from "@/components/ui/client-marquee"

export function ApproachSection() {
  return (
    <section className="w-full min-h-screen h-auto flex items-center justify-center snap-start py-8 md:py-12">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="font-medium font-urbanist">approach</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground italic font-urbanist hidden sm:inline">first principles, lasting outcomes</span>
              <span className="text-muted-foreground italic font-urbanist sm:hidden">first principles, lasting outcomes</span>
            </motion.div>

            <motion.h2
              className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              we don't just build software —
              <span className="brand-gradient-text"> we engineer outcomes</span>
            </motion.h2>

            <motion.p
              className="lead-text text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              every engagement begins with a deep curiosity to understand your problem space from the ground up.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { title: "discovery mindset", text: "we listen first, diagnose second, prescribe third" },
                { title: "systems-level reasoning", text: "we think beyond immediate requirements" },
                { title: "outcomes over outputs", text: "we optimize for business impact" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">{item.title}</span> — {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "deep partnership",
                description: "we embed ourselves into your workflow, not as vendors but as invested partners. your constraints become our constraints. your wins become our wins."
              },
              {
                title: "pragmatic excellence",
                description: "our decisions balance engineering ideals with business realities. we ship what works, not what's theoretically perfect."
              },
              {
                title: "long-term thinking",
                description: "we design for evolution, not just delivery. code that adapts, systems that scale, decisions that age well."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-background/40 backdrop-blur-sm border rounded-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + (index * 0.1),
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <h3 className="font-playfair text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Client Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-12"
        >
          <ClientMarquee />
        </motion.div>

        {/* Connect Now CTA */}
        <div className="flex justify-center mt-6 sm:mt-8 mb-4">
          <CustomButton href="#connect" />
        </div>
      </div>
    </section>
  )
} 