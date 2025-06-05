"use client"

export function EdgeSection() {
  return (
    <section className="w-full min-h-screen h-auto md:h-screen flex items-center justify-center snap-start py-8 md:py-0">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6">
              <span className="font-medium font-urbanist">edge</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground italic font-urbanist hidden sm:inline">where engineering meets intention</span>
              <span className="text-muted-foreground italic font-urbanist sm:hidden">where engineering meets intention</span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6">
              <span className="brand-gradient-text">engineers who understand business</span>
            </h2>

            <p className="lead-text text-base sm:text-lg mb-6 sm:mb-8 px-2 sm:px-0">
              we are neither a code factory nor a bloated consultancy. we are engineers who understand business —
              and consultants who can ship code.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">no corporate theatrics</span> — direct access to people who write code
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">technical decisions aligned to business goals</span> — not engineering for engineering's sake
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">speed meets stability</span> — fast iterations without cutting corners
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">intentionally small</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                every project gets senior-level attention. every call has someone who's shipped things at scale.
                every decision is made with clarity and care.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">platform-agnostic but opinionated</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                we don't chase trends or push pre-built playbooks. we design for your business,
                your scale, and your goals.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">the nuance advantage</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                ability to zoom into low-level technical detail while keeping the high-level
                business goal in sight.
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">operate with integrity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                we'll tell you what you need to hear, not just what you want to.
                if we're not the right fit, we'll say so.
              </p>
            </div>

            <div className="md:col-span-2 bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">our mindset</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                we don't hide behind buzzwords or inflated slideshows. what you see is what you get —
                direct access to experienced engineers and consultants who take pride in their craft.
                we care about long-term sustainability, not short-term theatrics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 