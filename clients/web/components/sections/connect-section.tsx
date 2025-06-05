"use client"

import { CustomButton } from "@/components/ui/custom-button"

export function ConnectSection() {
  const contactMethods = [
    {
      method: "email",
      value: "hello@shunyaek.se",
      href: "mailto:hello@shunyaek.se",
      icon: "📬"
    },
    {
      method: "website",
      value: "shunyaek.se",
      href: "https://shunyaek.se",
      icon: "🌐"
    },
    {
      method: "message",
      value: "+91 78188 88887",
      href: "tel:+917818888887",
      icon: "💬"
    }
  ]

  return (
    <section className="w-full h-screen flex items-center justify-center snap-start">
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Header */}
          <div>
            <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-sm mb-6">
              <span className="font-medium font-urbanist">section 7</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground font-urbanist">connect with us</span>
            </div>

            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6">
              <span className="brand-gradient-text">let's build something meaningful, together</span>
            </h2>

            <p className="lead-text text-lg mb-8">
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

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-6">
              <p className="text-sm font-medium mb-2">we keep things simple:</p>
              <p className="text-sm text-muted-foreground">
                one honest conversation to see if we're a good fit. no buzzwords, no smoke, no mirrors.
                just a clear-headed chat about your goals, challenges, and how we might help.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Methods */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="block bg-background/40 backdrop-blur-sm border rounded-xl p-6 hover:bg-background/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{contact.icon}</div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm mb-1">{contact.method}</div>
                      <div className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:translate-x-1 transition-transform">
                      →
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-background/40 backdrop-blur-sm border rounded-xl p-8 text-center">
              <h3 className="font-playfair text-xl font-bold mb-4">ready to start the conversation?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                if it matters to you, it matters to us. we're always listening.
              </p>
              <CustomButton href="mailto:hello@shunyaek.se" />
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                scroll up to explore our approach, or use the navigation dots →
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 