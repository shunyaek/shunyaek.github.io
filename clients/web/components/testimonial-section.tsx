import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/essential/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/essential/tabs"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "shunyaek.se has transformed how we approach digital solutions. Their innovative platform has helped us streamline operations and improve customer engagement.",
      author: "Sarah Johnson",
      title: "CTO, TechInnovate",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "Working with shunyaek.se has been a game-changer for our business. Their solutions are robust, scalable, and backed by exceptional support.",
      author: "Michael Chen",
      title: "Director of Operations, GlobalTech",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    {
      quote:
        "The platform's flexibility and powerful features have allowed us to adapt quickly to market changes and stay ahead of competition.",
      author: "Emma Rodriguez",
      title: "VP of Digital Strategy, FutureCorp",
      avatar: "/placeholder.svg?height=64&width=64",
    },
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm mb-4">
            <span className="font-medium font-urbanist">Testimonials</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground font-urbanist">Success Stories</span>
          </div>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-description mx-auto">
            Discover how shunyaek solutions have helped businesses across various industries achieve their goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-background hover:brand-shadow transition-all duration-300">
              <CardHeader className="pb-4">
                <Quote className={`h-8 w-8 ${index % 2 === 0 ? "text-[#3B82F6]/50" : "text-[#10B981]/50"}`} />
              </CardHeader>
              <CardContent className="pb-4">
                <p className="quote-text text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-playfair font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground font-urbanist">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

