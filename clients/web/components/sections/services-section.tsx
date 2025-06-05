"use client"

export function ServicesSection() {
  const services = [
    {
      title: "full-stack development",
      description: "end-to-end product development, from frontend to backend, databases to deployment",
      features: ["web applications", "mobile apps", "api development", "database design", "cloud infrastructure"],
    },
    {
      title: "technical consulting",
      description: "strategic guidance on architecture, technology choices, and engineering processes",
      features: ["system architecture", "technology selection", "code reviews", "performance optimization", "scaling strategies"],
    },
    {
      title: "product strategy",
      description: "bridge the gap between business vision and technical execution",
      features: ["requirements analysis", "roadmap planning", "mvp definition", "user experience design", "market validation"],
    },
    {
      title: "team augmentation",
      description: "embed with your existing team to accelerate delivery and knowledge transfer",
      features: ["senior engineering", "mentoring", "best practices", "process improvement", "knowledge transfer"],
    },
    {
      title: "legacy modernization",
      description: "breathe new life into existing systems without disrupting business operations",
      features: ["system migration", "refactoring", "modernization", "integration", "risk mitigation"],
    },
    {
      title: "devops & infrastructure",
      description: "streamline deployment processes and optimize infrastructure for scale and reliability",
      features: ["ci/cd pipelines", "cloud migration", "monitoring", "security", "automation"],
    },
  ]

  return (
    <section className="w-full min-h-screen flex items-center justify-center snap-start py-12">
      <div className="container relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="font-medium font-urbanist">services</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground italic font-urbanist hidden sm:inline">engineering across the stack, designed for scale</span>
            <span className="text-muted-foreground italic font-urbanist sm:hidden">engineering across the stack, designed for scale</span>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tighter mb-4 sm:mb-6">
            <span className="brand-gradient-text">full-spectrum</span> technology services
          </h2>

          <p className="lead-text text-base sm:text-lg max-w-4xl mx-auto px-2 sm:px-0">
            from code to cloud — engineered with precision, delivered with purpose. we work as your technical co-founder,
            embedded engineering team, or trusted consulting partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <h3 className="font-playfair text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981]"></div>
                    <span className="text-xs text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 