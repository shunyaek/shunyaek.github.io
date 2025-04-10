"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/essential/card"
import { CustomButton } from "@/components/ui/essential/custom-button"
import { Pill } from "@/components/ui/essential/pill"

interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  image: string
  overview: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
  link: string
}

export function CaseStudiesSection() {
  const caseStudies: CaseStudy[] = [
    {
      id: "fintech-app",
      title: "FinTech Mobile App Redesign",
      client: "GlobalBank",
      industry: "Financial Services",
      image: "/placeholder.svg?height=400&width=600",
      overview: "Complete redesign and development of a mobile banking application serving over 2 million users.",
      challenge:
        "The existing app had poor user experience, outdated technology stack, and security vulnerabilities. User engagement was declining and customer complaints were increasing.",
      solution:
        "We implemented a complete redesign with a focus on intuitive UX, rebuilt the application using React Native, and integrated advanced security protocols.",
      results:
        "50% increase in daily active users, 35% reduction in customer support tickets, and 98% positive feedback on the new interface.",
      technologies: ["React Native", "Node.js", "GraphQL", "AWS"],
      link: "/case-studies/fintech-app",
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform Migration",
      client: "FashionRetail",
      industry: "Retail",
      image: "/placeholder.svg?height=400&width=600",
      overview: "Migration of a legacy e-commerce platform to a modern, scalable architecture.",
      challenge:
        "The client's existing platform couldn't handle peak traffic during sales events, had poor performance metrics, and limited integration capabilities.",
      solution:
        "We developed a microservices-based architecture using Next.js for the frontend and implemented a headless CMS approach for content management.",
      results:
        "300% improvement in page load times, 99.99% uptime during Black Friday sales, and 25% increase in conversion rates.",
      technologies: ["Next.js", "TypeScript", "Kubernetes", "Stripe"],
      link: "/case-studies/ecommerce-platform",
    },
    {
      id: "healthcare-analytics",
      title: "Healthcare Analytics Dashboard",
      client: "MediCorp",
      industry: "Healthcare",
      image: "/placeholder.svg?height=400&width=600",
      overview:
        "Development of a comprehensive analytics dashboard for healthcare providers to monitor patient outcomes and operational efficiency.",
      challenge:
        "The client needed to consolidate data from multiple sources, ensure HIPAA compliance, and provide actionable insights to medical staff.",
      solution:
        "We created a secure, real-time analytics platform with role-based access control and interactive visualizations of key performance indicators.",
      results:
        "Reduced report generation time by 85%, improved resource allocation efficiency by 30%, and enabled data-driven decision making across 12 hospital facilities.",
      technologies: ["React", "D3.js", "Python", "Azure"],
      link: "/case-studies/healthcare-analytics",
    },
    {
      id: "iot-platform",
      title: "IoT Monitoring System",
      client: "IndustrialTech",
      industry: "Manufacturing",
      image: "/placeholder.svg?height=400&width=600",
      overview:
        "Design and implementation of an IoT platform for monitoring industrial equipment across multiple facilities.",
      challenge:
        "The client needed real-time monitoring of thousands of sensors, predictive maintenance capabilities, and a system that could operate in environments with limited connectivity.",
      solution:
        "We developed a scalable IoT platform with edge computing capabilities, machine learning for predictive maintenance, and a responsive web dashboard.",
      results:
        "40% reduction in equipment downtime, 25% decrease in maintenance costs, and early detection of potential failures with 92% accuracy.",
      technologies: ["IoT", "TensorFlow", "AWS IoT", "React"],
      link: "/case-studies/iot-platform",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [animating, setAnimating] = useState(false)

  // Update visible count based on screen size
  const updateVisibleCount = () => {
    if (window.innerWidth < 768) {
      setVisibleCount(1)
    } else if (window.innerWidth < 1024) {
      setVisibleCount(2)
    } else {
      setVisibleCount(3)
    }
  }

  // Initialize visible count on component mount
  useEffect(() => {
    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const nextSlide = () => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev + 1) % (caseStudies.length - visibleCount + 1))
    setTimeout(() => setAnimating(false), 500)
  }

  const prevSlide = () => {
    if (animating) return
    setAnimating(true)
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - visibleCount : prev - 1))
    setTimeout(() => setAnimating(false), 500)
  }

  const visibleCaseStudies = caseStudies.slice(activeIndex, activeIndex + visibleCount)

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm mb-4">
            <span className="font-medium font-urbanist">Case Studies</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground font-urbanist">Success Stories</span>
          </div>
          <h2 className="section-title">Our Work in Action</h2>
          <p className="section-description mx-auto">
            Explore how we've helped businesses across various industries overcome challenges and achieve their goals
            with innovative digital solutions.
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-md hover:bg-muted transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground shadow-md hover:bg-muted transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Case studies grid/carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visibleCaseStudies.map((study) => (
              <Card
                key={study.id}
                className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium font-urbanist">{study.client}</p>
                      <p className="text-sm font-urbanist">{study.industry}</p>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="card-title">{study.title}</CardTitle>
                  <CardDescription className="card-description">{study.overview}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold font-playfair text-sm">Challenge</h4>
                      <p className="text-sm text-muted-foreground font-urbanist">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold font-playfair text-sm">Solution</h4>
                      <p className="text-sm text-muted-foreground font-urbanist">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold font-playfair text-sm">Results</h4>
                      <p className="text-sm text-muted-foreground font-urbanist">{study.results}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold font-playfair text-sm">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {study.technologies.map((tech) => (
                          <Pill key={tech} variant={"gradient"}>{tech}</Pill>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 mt-auto">
                  <Link
                    href={study.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline w-full justify-between"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <CustomButton href="/case-studies" className="inline-flex items-center">
            View All Case Studies
            <ExternalLink className="ml-2 h-4 w-4" />
          </CustomButton>
        </div>
      </div>
    </section>
  )
}

