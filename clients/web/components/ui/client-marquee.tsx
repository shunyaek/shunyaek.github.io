"use client"

import { motion } from "motion/react"
import Image from "next/image"

const clientsRow1 = [
  { name: "Oracle", logo: "/images/logos/oracle.png" },
  { name: "PayPal", logo: "/images/logos/paypal.png" },
  { name: "PepsiCo", logo: "/images/logos/pepsico.png" },
  { name: "Boston Consulting Group", logo: "/images/logos/bcg.png" },
  { name: "Cerner", logo: "/images/logos/cerner.png" },
  { name: "Humanata", logo: "/images/logos/humanata.png" },
]

const clientsRow2 = [
  { name: "Pegasus", logo: "/images/logos/pegasus.png" },
  { name: "Magnit", logo: "/images/logos/magnit.png" },
  { name: "TGS", logo: "/images/logos/tgs.png" },
  { name: "CO2AI", logo: "/images/logos/co2ai.png" },
  { name: "Aliveo", logo: "/images/logos/aliveo.png" },
]

export function ClientMarquee() {
  return (
    <div className="w-full py-0 sm:py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12"
      >
        <motion.h3
          className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="brand-gradient-text">partners who believed in our vision</span>
        </motion.h3>
      </motion.div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="bg-background/40 backdrop-blur-sm border rounded-xl relative overflow-hidden py-0 px-0 space-y-0">
          {/* First Marquee Row */}
          <div className="relative overflow-hidden pt-8 pb-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Track Row 1 */}
            <div className="flex animate-marquee">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-max">
                {clientsRow1.map((client, index) => (
                  <div
                    key={`row1-first-${index}`}
                    className="flex items-center justify-center mx-2 sm:mx-3 md:mx-4"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-4 sm:h-6 md:h-8 w-auto object-contain grayscale opacity-50 dark:invert dark:opacity-70"
                      style={{
                        maxHeight: '32px'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-max">
                {clientsRow1.map((client, index) => (
                  <div
                    key={`row1-second-${index}`}
                    className="flex items-center justify-center mx-2 sm:mx-3 md:mx-4"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-4 sm:h-6 md:h-8 w-auto object-contain grayscale opacity-50 dark:invert dark:opacity-70"
                      style={{
                        maxHeight: '32px'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Marquee Row */}
          <div className="relative overflow-hidden pb-8 pt-4">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 sm:w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Track Row 2 */}
            <div className="flex animate-marquee-reverse">
              {/* First set of logos */}
              <div className="flex items-center justify-center min-w-max">
                {clientsRow2.map((client, index) => (
                  <div
                    key={`row2-first-${index}`}
                    className="flex items-center justify-center mx-2 sm:mx-3 md:mx-4"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-4 sm:h-6 md:h-8 w-auto object-contain grayscale opacity-50 dark:invert dark:opacity-70"
                      style={{
                        maxHeight: '32px'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center min-w-max">
                {clientsRow2.map((client, index) => (
                  <div
                    key={`row2-second-${index}`}
                    className="flex items-center justify-center mx-2 sm:mx-3 md:mx-4"
                  >
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      width={120}
                      height={60}
                      className="h-4 sm:h-6 md:h-8 w-auto object-contain grayscale opacity-50 dark:invert dark:opacity-70"
                      style={{
                        maxHeight: '32px'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 