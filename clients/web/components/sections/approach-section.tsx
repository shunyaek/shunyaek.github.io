"use client"

export function ApproachSection() {
  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Header */}
          <div>
            <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="font-medium font-urbanist">approach</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground italic font-urbanist hidden sm:inline">first principles, lasting outcomes</span>
              <span className="text-muted-foreground italic font-urbanist sm:hidden">first principles, lasting outcomes</span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6">
              we don't just build software —
              <span className="brand-gradient-text"> we engineer outcomes</span>
            </h2>

            <p className="lead-text text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
              every engagement begins with a deep curiosity to understand your problem space from the ground up.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">discovery mindset</span> — we listen first, diagnose second, prescribe third
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">systems-level reasoning</span> — we think beyond immediate requirements
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">outcomes over outputs</span> — we optimize for business impact
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">deep partnership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                we embed ourselves into your workflow, not as vendors but as invested partners.
                your constraints become our constraints. your wins become our wins.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">pragmatic excellence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                our decisions balance engineering ideals with business realities.
                we ship what works, not what's theoretically perfect.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">long-term thinking</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                we design for evolution, not just delivery. code that adapts, systems that scale,
                decisions that age well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 