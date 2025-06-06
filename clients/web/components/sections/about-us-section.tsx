"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { CustomButton } from "../ui/custom-button"

// Typewriter effect component
function TypewriterEffect() {
  const words = [
    "a product-minded partner",
    "your embedded team",
    "an engineering ally",
    "thoughtful technologists",
    "builders, not vendors",
    "consultants who code",
    "engineers who listen",
    "your fractional cto",
    "problem-solvers in disguise",
    "strategists who ship",
    "craftspeople with conviction",
    "calm in the chaos",
  ];
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentIndex]
    const speed = isDeleting ? 100 : 150
    let nestedTimer: NodeJS.Timeout | null = null

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % words.length)
        } else {
          setCurrentText(currentText.slice(0, -1))
        }
      } else {
        if (currentText === currentWord) {
          nestedTimer = setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }
      }
    }, speed)

    return () => {
      clearTimeout(timer)
      if (nestedTimer) {
        clearTimeout(nestedTimer)
      }
    }
  }, [currentText, currentIndex, isDeleting])

  return (
    <span className="brand-gradient-text text-4xl sm:text-6xl relative font-playfair font-extrabold">
      {currentText}
      <span className="text-6xl sm:text-7xl">|</span>
    </span>
  )
}

export function AboutUsSection() {
  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-4xl mx-auto text-center">
        <motion.div
          className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="font-medium font-urbanist">about</span>
          <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
          <span className="text-muted-foreground italic font-urbanist hidden sm:inline">crafting clarity in a world of noise</span>
          <span className="text-muted-foreground italic font-urbanist sm:hidden">crafting clarity in a world of noise</span>
        </motion.div>

        <motion.h1
          className="font-playfair text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl flex flex-col mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold">Empowering Your Digital</span> */}
          <span className="h-[1.5em] block">
            <TypewriterEffect />
          </span>
        </motion.h1>

        <motion.div
          className="max-w-3xl mx-auto space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="lead-text text-base sm:text-lg md:text-xl px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            @shunyaek.se, we're a small but mighty software and technology consulting agency,
            dedicated to transforming the digital landscape with precision and flair.
          </motion.p>

          <motion.p
            className="lead-text text-base sm:text-lg md:text-xl px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            viewport={{ once: true }}
          >
            we take the fundamental elements of technology — zeros and ones — and craft them
            into exceptional products and platforms that stand out in today's market.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 flex justify-center"
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