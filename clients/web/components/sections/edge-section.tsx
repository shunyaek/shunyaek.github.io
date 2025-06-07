"use client"

import { motion } from "motion/react"
import { CustomButton } from "@/components/ui/custom-button"

export function EdgeSection() {
  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
          {/* Left Column - Header */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              <span className="font-medium font-urbanist">edge</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground italic font-urbanist hidden sm:inline">where engineering meets intention</span>
              <span className="text-muted-foreground italic font-urbanist sm:hidden">where engineering meets intention</span>
            </motion.div>

            <motion.h2
              className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="brand-gradient-text">engineers who understand business</span>
            </motion.h2>

            <motion.p
              className="lead-text text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              we are neither a code factory nor a bloated consultancy. we are engineers who understand business —
              and consultants who can ship code.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {[
                { title: "no corporate theatrics", text: "direct access to people who write code" },
                { title: "technical decisions aligned to business goals", text: "not engineering for engineering's sake" },
                { title: "speed meets stability", text: "fast iterations without cutting corners" }
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
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "intentionally small",
                description: "every project gets senior-level attention. every call has someone who's shipped things at scale. every decision is made with clarity and care."
              },
              {
                title: "platform-agnostic but opinionated",
                description: "we don't chase trends or push pre-built playbooks. we design for your business, your scale, and your goals."
              },
              {
                title: "the nuance advantage",
                description: "ability to zoom into low-level technical detail while keeping the high-level business goal in sight."
              },
              {
                title: "operate with integrity",
                description: "we'll tell you what you need to hear, not just what you want to. if we're not the right fit, we'll say so."
              },
              {
                title: "our mindset",
                description: "we don't hide behind buzzwords or inflated slideshows. what you see is what you get — direct access to experienced engineers and consultants who take pride in their craft. we care about long-term sustainability, not short-term theatrics.",
                className: "md:col-span-2"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className={`bg-background/40 backdrop-blur-sm border rounded-xl p-6 ${card.className || ''}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
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

        {/* Connect Now CTA */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <CustomButton href="#connect" />
        </motion.div>
      </div>
    </section>
  )
} 