"use client"

import { CustomButton } from "../ui/custom-button"

export function AboutUsSection() {
  return (
    <section className="w-full h-screen flex items-center justify-center snap-start">
      <div className="container relative z-10 px-4 md:px-6 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-sm mb-8">
          <span className="font-medium font-urbanist">about</span>
          <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
          <span className="text-muted-foreground italic font-urbanist">crafting clarity in a world of noise</span>
        </div>

        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-8">
          <span className="brand-gradient-text">shunyaek.se</span>
        </h1>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="lead-text text-lg md:text-xl">
            @shunyaek.se, we're a small but mighty software and technology consulting agency,
            dedicated to transforming the digital landscape with precision and flair.
          </p>

          <p className="lead-text text-lg md:text-xl">
            we take the fundamental elements of technology — zeros and ones — and craft them
            into exceptional products and platforms that stand out in today's market.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <CustomButton href="mailto:01@shunyaek.se" />
        </div>
      </div>
    </section>
  )
} 