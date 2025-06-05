"use client"

import { CustomButton } from "@/components/ui/custom-button"

export function ConnectSection() {
  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column - Header */}
          <div>
            <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="font-medium font-urbanist">connect</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground italic font-urbanist hidden sm:inline">no pitch. just conversation</span>
              <span className="text-muted-foreground italic font-urbanist sm:hidden">no pitch. just conversation</span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6">
              <span className="brand-gradient-text">let's build something meaningful, together</span>
            </h2>

            <p className="lead-text text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
              we don't do hard sells. we don't do bloated decks. and we definitely don't do copy-paste proposals.
              what we do is listen — really listen.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <span className="text-sm">early-stage founder looking for a product-minded engineering partner</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <span className="text-sm">platform team dealing with growing infrastructure complexity</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <span className="text-sm">business leader trying to untangle technical debt</span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Methods */}
          <div className="space-y-8">
            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <p className="text-sm font-medium mb-2">we keep things simple:</p>
              <p className="text-sm text-muted-foreground">
                one honest conversation to see if we're a good fit. no buzzwords, no smoke, no mirrors.
                just a clear-headed chat about your goals, challenges, and how we might help.
              </p>
            </div>
            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-8 text-center">
              <h3 className="font-playfair text-xl font-bold mb-4">ready to start the conversation?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                if it matters to you, it matters to us. we're always listening.
              </p>
              <CustomButton href="mailto:01@shunyaek.se" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 