"use client"

export function FocusSection() {
  const industries = [
    "fast-growing startups", "enterprise teams", "non-profits", "fintech & payments",
    "digital health", "internal tools", "developer platforms", "api ecosystems",
    "data-heavy backends", "logistics", "edtech", "open-source devtools", "consumer products"
  ]

  return (
    <section className="w-full h-screen flex items-center justify-center snap-start">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-sm mb-6">
            <span className="font-medium font-urbanist">section 5</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground font-urbanist">our focus</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            we work with <span className="brand-gradient-text">organizations who value craftsmanship</span>
          </h2>

          <p className="lead-text text-lg max-w-3xl mx-auto">
            regardless of industry or size, we're drawn to teams that share our commitment to thoughtful engineering
            and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industries */}
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <h3 className="font-playfair text-lg font-bold mb-4">industries we serve</h3>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="text-xs bg-background/60 backdrop-blur-sm border rounded-full px-3 py-1"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Teams */}
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <h3 className="font-playfair text-lg font-bold mb-4">teams that resonate with us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <div>
                  <div className="font-semibold text-sm mb-1">ambitious but pragmatic</div>
                  <div className="text-xs text-muted-foreground">big vision, grounded execution</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <div>
                  <div className="font-semibold text-sm mb-1">growth-oriented</div>
                  <div className="text-xs text-muted-foreground">scaling thoughtfully</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] mt-2"></div>
                <div>
                  <div className="font-semibold text-sm mb-1">believers in software as craft</div>
                  <div className="text-xs text-muted-foreground">more than just delivery tickets</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <h3 className="font-playfair text-lg font-bold mb-4">complex challenges that demand</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
                <div className="text-xs font-medium">thoughtful engineering</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
                <div className="text-xs font-medium">systems thinking</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
                <div className="text-xs font-medium">sustainable delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 