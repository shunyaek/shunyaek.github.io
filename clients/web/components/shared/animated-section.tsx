"use client"

import { motion } from "@motionone/react"
import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function AnimatedSection({ className, children, ...props }: ComponentProps<"section">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      inView={{ opacity: 1, y: 0 }}
      inViewOptions={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  )
}
