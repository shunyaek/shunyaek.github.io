"use client"

import { motion } from "motion/react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"
import { plans, formatPrice, type Plan } from "@/lib/plans"

export function PricingSection() {

  return (
    <section id="pricing" className="w-full min-h-screen flex items-center justify-center snap-start py-12">
      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
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
            <span className="font-medium font-urbanist">pricing</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">simple & transparent</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">simple & transparent</span>
          </motion.div>

          <motion.h2
            className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="brand-gradient-text">choose the right plan</span> for your business
          </motion.h2>

          <motion.p
            className="lead-text text-base sm:text-lg max-w-4xl mx-auto px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            flexible pricing options from shunyaek.se designed to scale with your business needs. no hidden fees or
            long-term commitments.
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.2 }
              }}
              transition={{
                duration: 0.5,
                delay: 0.5 + (index * 0.15),
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <Card className="border bg-background/40 backdrop-blur-sm relative h-full flex flex-col transition-all duration-300 hover:brand-shadow hover:bg-gradient-to-br hover:from-[rgba(59,130,246,0.05)] hover:to-[rgba(16,185,129,0.05)]">
                {plan.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <div className="rounded-full brand-gradient-bg px-3 py-1 text-xs font-medium text-white font-urbanist">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-4xl font-bold">
                    <span className="brand-gradient-text">
                      {plan.displayName}
                    </span>
                  </CardTitle>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-playfair">{formatPrice(plan)}</span>
                    {plan.price.amount !== "custom" && (
                      <span className="text-muted-foreground font-urbanist">/{plan.price.cadence}</span>
                    )}
                  </div>
                  <CardDescription className="font-urbanist italic mb-1">
                    {plan.tagline}
                  </CardDescription>
                  <CardDescription className="font-urbanist">
                    {plan.target}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {plan.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className={`h-4 min-h-4 max-h-4 w-4 min-w-4 max-w-4 ${i % 2 === 0 ? "text-[#3B82F6]" : "text-[#10B981]"}`} />
                        <span className="font-urbanist">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <CustomButton
                    href={plan.price.amount === "custom" ? "#connect" : "/signup"}
                    className="w-full"
                  >
                    {plan.price.amount === "custom" ? "connect now" : "get started"}
                  </CustomButton>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solution CTA */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-playfair text-xl sm:text-2xl font-bold mb-2">need a custom solution?</h3>
          <p className="text-sm sm:text-base max-w-[600px] text-muted-foreground font-urbanist mb-6">
            connect with our team at shunyaek.se to discuss your specific requirements and get a tailored solution for
            your business.
          </p>
          <CustomButton href="#connect" className="inline-flex">
            connect now
          </CustomButton>
        </div>
      </div>
    </section>
  )
} 