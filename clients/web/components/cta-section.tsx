"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/essential/card"
import { Check } from "lucide-react"
import { CustomButton } from "@/components/ui/essential/custom-button"
import { useThemeDetection } from "@/hooks/use-theme-detection"

export function CtaSection() {
  const { isDarkTheme, mounted } = useThemeDetection()

  const plans = [
    {
      name: "Starter",
      price: "$4999",
      description: "Perfect for small businesses and startups",
      features: ["Up to 5 users", "Basic analytics", "Standard support", "Core features", "1 project"],
    },
    {
      name: "Professional",
      price: "$9999",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 20 users",
        "Advanced analytics",
        "Priority support",
        "All core features",
        "Unlimited projects",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 dedicated support",
        "All features",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 z-0">
        {mounted && (
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url("/images/background2${isDarkTheme ? "-dark" : ""}.png")` }}
          />
        )}
        <div className="absolute inset-0 backdrop-blur-sm bg-background/30" />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm mb-4">
            <span className="font-medium font-urbanist">Pricing</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground font-urbanist">Simple & Transparent</span>
          </div>
          <h2 className="section-title">Choose the Right Plan for Your Business</h2>
          <p className="section-description mx-auto">
            Flexible pricing options from shunyaek.se designed to scale with your business needs. No hidden fees or
            long-term commitments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="border bg-background relative h-full flex flex-col transition-all duration-300 hover:brand-shadow hover:bg-gradient-to-br hover:from-[rgba(59,130,246,0.05)] hover:to-[rgba(16,185,129,0.05)]"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="rounded-full brand-gradient-bg px-3 py-1 text-xs font-medium text-white font-urbanist">
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-playfair">{plan.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-playfair">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground font-urbanist">/month</span>}
                </div>
                <CardDescription className="font-urbanist">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className={`h-4 w-4 ${i % 2 === 0 ? "text-[#3B82F6]" : "text-[#10B981]"}`} />
                      <span className="font-urbanist">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <CustomButton href={plan.price === "Custom" ? "/connect" : "/signup"} className="w-full">
                  {plan.price === "Custom" ? "Connect with Sales" : "Get Started"}
                </CustomButton>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold font-playfair">Need a Custom Solution?</h3>
          <p className="mt-2 max-w-[600px] text-muted-foreground font-urbanist">
            Connect with our sales team at shunyaek.se to discuss your specific requirements and get a tailored solution for
            your business.
          </p>
          <CustomButton href="/connect" className="mt-6 inline-flex">
            Connect Now
          </CustomButton>
        </div>
      </div>
    </section>
  )
}

