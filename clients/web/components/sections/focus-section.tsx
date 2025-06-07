"use client"

import { motion } from "motion/react"
import { CustomButton } from "@/components/ui/custom-button"

export function FocusSection() {
  const industries = [
    "fast-growing startups", "enterprise teams", "non-profits", "fintech & payments",
    "digital health", "internal tools", "developer platforms", "api ecosystems",
    "data-heavy backends", "logistics", "edtech", "open-source devtools", "consumer products"
  ]

  const teamTypes = [
    {
      title: "ambitious but pragmatic",
      subtitle: "big vision, grounded execution"
    },
    {
      title: "growth-oriented",
      subtitle: "scaling thoughtfully"
    },
    {
      title: "believers in software as craft",
      subtitle: "more than just delivery tickets"
    }
  ]

  const challenges = [
    "thoughtful engineering",
    "systems thinking",
    "sustainable delivery"
  ]

  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12"
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
            <span className="font-medium font-urbanist">focus</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">depth over domain, intent over industry</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">depth over domain, intent over industry</span>
          </motion.div>

          <motion.h2
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            we work with <span className="brand-gradient-text">organizations who value craftsmanship</span>
          </motion.h2>

          <motion.p
            className="lead-text text-base sm:text-lg max-w-3xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            regardless of industry or size, we're drawn to teams that share our commitment to thoughtful engineering
            and sustainable growth.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Industries */}
          <motion.div
            className="bg-background/40 backdrop-blur-sm border rounded-xl p-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-playfair text-lg font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              industries we serve
            </motion.h3>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  className="text-xs bg-background/60 backdrop-blur-sm border rounded-full px-3 py-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.9 + (index * 0.05)
                  }}
                  viewport={{ once: true }}
                >
                  {industry}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Teams */}
          <motion.div
            className="bg-background/40 backdrop-blur-sm border rounded-xl p-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-playfair text-lg font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
            >
              teams that resonate with us
            </motion.h3>
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              viewport={{ once: true }}
            >
              {teamTypes.map((team, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.0 + (index * 0.1)
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{team.title}</div>
                    <div className="text-xs text-muted-foreground">{team.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-background/40 backdrop-blur-sm border rounded-xl p-6"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-playfair text-lg font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              viewport={{ once: true }}
            >
              complex challenges that demand
            </motion.h3>
            <motion.div
              className="grid grid-cols-3 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 1.1 + (index * 0.1)
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white text-xs font-bold"
                    initial={{ rotate: -180, scale: 0 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.2 + (index * 0.1)
                    }}
                    viewport={{ once: true }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="text-xs font-medium">{challenge}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Connect Now CTA */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <CustomButton href="#connect" />
        </motion.div>
      </div>
    </section>
  )
} 