"use client"

import { motion } from "motion/react"
import { CustomButton } from "@/components/ui/custom-button"

export function ServicesSection() {
  const services = [
    {
      title: "full-stack development",
      description: "end-to-end product development, from frontend to backend, databases to deployment",
      features: ["web applications", "mobile apps", "api development", "database design", "cloud infrastructure"],
    },
    {
      title: "technical consulting",
      description: "strategic guidance on architecture, technology choices, and engineering processes",
      features: ["system architecture", "technology selection", "code reviews", "performance optimization", "scaling strategies"],
    },
    {
      title: "product strategy",
      description: "bridge the gap between business vision and technical execution",
      features: ["requirements analysis", "roadmap planning", "mvp definition", "user experience design", "market validation"],
    },
    {
      title: "team augmentation",
      description: "embed with your existing team to accelerate delivery and knowledge transfer",
      features: ["senior engineering", "mentoring", "best practices", "process improvement", "knowledge transfer"],
    },
    {
      title: "legacy modernization",
      description: "breathe new life into existing systems without disrupting business operations",
      features: ["system migration", "refactoring", "modernization", "integration", "risk mitigation"],
    },
    {
      title: "devops & infrastructure",
      description: "streamline deployment processes and optimize infrastructure for scale and reliability",
      features: ["ci/cd pipelines", "cloud migration", "monitoring", "security", "automation"],
    },
  ]

  return (
    <section className="w-full min-h-screen flex items-center justify-center snap-start py-12">
      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
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
            <span className="font-medium font-urbanist">services</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">engineering across the stack, designed for scale</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">engineering across the stack, designed for scale</span>
          </motion.div>

          <motion.h2
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="brand-gradient-text">full-spectrum</span> technology services
          </motion.h2>

          <motion.p
            className="lead-text text-base sm:text-lg max-w-4xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            from code to cloud — engineered with precision, delivered with purpose. we work as your technical co-founder,
            embedded engineering team, or trusted consulting partner.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
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
                delay: 0.6 + (index * 0.1),
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="font-playfair text-lg font-bold mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="text-sm text-muted-foreground leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 1.0 + (index * 0.1) + (featureIndex * 0.05)
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connect Now CTA */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <CustomButton href="#connect" />
        </motion.div>
      </div>
    </section>
  )
} 