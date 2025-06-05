"use client"

export function MethodologySection() {
  return (
    <section className="w-full h-screen flex items-center justify-center snap-start">
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-sm mb-6">
            <span className="font-medium font-urbanist">methodology</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist">a structured path, built to adapt</span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
            <span className="brand-gradient-text">deliberate and dynamic</span> methodology
          </h2>

          <p className="lead-text text-lg max-w-3xl mx-auto">
            we balance engineering precision with business pragmatism, ensuring every decision
            is rooted in clarity, purpose, and outcomes.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Discovery Phase */}
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h3 className="font-playfair text-lg font-bold mb-3">discovery</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              absorb context, identify challenges, define success together
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>stakeholder interviews</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>technical archaeology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>constraint mapping</span>
              </div>
            </div>
          </div>

          {/* Blueprint Phase */}
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h3 className="font-playfair text-lg font-bold mb-3">blueprint</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              detailed, unambiguous foundations for focused development
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>architecture design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>technology selection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>implementation roadmap</span>
              </div>
            </div>
          </div>

          {/* Build Phase */}
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-playfair text-lg font-bold mb-3">build</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              iterative releases, constant feedback, continuous alignment
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>agile development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>regular demos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>collaborative refinement</span>
              </div>
            </div>
          </div>

          {/* Support Phase */}
          <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] flex items-center justify-center mb-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h3 className="font-playfair text-lg font-bold mb-3">support</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              post-launch refinement and technical clarity
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>performance monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>knowledge transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                <span>ongoing optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 