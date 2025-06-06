"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Cloud, Smartphone, LineChart, Cpu, Globe, PenTool, Shield, Briefcase } from "lucide-react"
import Image from "next/image"
import { CustomButton } from "@/components/ui/custom-button"

export function FeatureSection() {
  // Add custom styles for plastiky tabs
  const plastikyTabsStyle = `
    .service-icon {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1));
      color: #3B82F6;
    }
  `

  // Consolidated service definitions
  const allServices = {
    development: [
      {
        icon: <Code className="h-5 w-5" />,
        title: "Custom Software Development",
        description:
          "Tailored software solutions designed to address your unique business challenges and requirements.",
        image: "/images/mobile-app.png",
      },
      {
        icon: <Smartphone className="h-5 w-5" />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        image: "/images/mobile-app.png",
      },
      {
        icon: <PenTool className="h-5 w-5" />,
        title: "UI/UX Design",
        description: "User-centered design that enhances usability, accessibility, and overall user satisfaction.",
        image: "/images/frontend.png",
      },
      {
        icon: <Cloud className="h-5 w-5" />,
        title: "API Development",
        description: "Robust and scalable APIs to power your digital ecosystem.",
        image: "/images/backend.png",
      },
      {
        icon: <Cpu className="h-5 w-5" />,
        title: "DevOps",
        description: "Streamlined deployment pipelines and infrastructure management.",
        image: "/images/mobile-app.png",
      },
      {
        icon: <LineChart className="h-5 w-5" />,
        title: "AI Integration",
        description: "Incorporate artificial intelligence to enhance your applications.",
        image: "/images/mobile-app.png",
      },
    ],
    cloud: [
      {
        icon: <Cloud className="h-5 w-5" />,
        title: "Cloud Migration",
        description:
          "Seamless transition of your infrastructure and applications to secure, scalable cloud environments.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        icon: <Cpu className="h-5 w-5" />,
        title: "DevOps Implementation",
        description: "Streamlined development processes with CI/CD pipelines and infrastructure automation.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Security & Compliance",
        description: "Robust security measures and compliance frameworks to protect your digital assets.",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    strategic: [
      {
        icon: <Briefcase className="h-5 w-5" />,
        title: "Digital Transformation",
        description:
          "Strategic guidance to help your organization leverage technology for business growth and innovation.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        icon: <LineChart className="h-5 w-5" />,
        title: "Data Analytics & AI",
        description: "Advanced analytics and AI solutions that turn your data into actionable business insights.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        icon: <Globe className="h-5 w-5" />,
        title: "Enterprise Integration",
        description: "Seamless integration of systems and applications across your organization's ecosystem.",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }

  return (
    <section id="services" className="bg-muted/50 py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <style jsx>{plastikyTabsStyle}</style>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm mb-4">
            <span className="font-medium font-urbanist">Services</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
            <span className="text-muted-foreground font-urbanist">What We Offer</span>
          </div>
          <h2 className="section-title">Comprehensive Technology Consulting Services</h2>
          <p className="section-description mx-auto">
            We provide end-to-end software and technology solutions to help your business innovate, transform, and
            thrive in today's digital landscape.
          </p>
        </div>

        <Tabs defaultValue="development" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="plastiky-tabs grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="development" className="plastiky-tab">
                Development
              </TabsTrigger>
              <TabsTrigger value="cloud" className="plastiky-tab">
                Cloud
              </TabsTrigger>
              <TabsTrigger value="strategic" className="plastiky-tab">
                Strategic
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="development">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allServices.development.map((service, index) => (
                <Card
                  key={index}
                  className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[rgba(59,130,246,0.05)] hover:to-[rgba(16,185,129,0.05)] shadow-sm overflow-hidden"
                >
                  <div className="aspect-square w-full overflow-hidden relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm service-icon group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="card-title">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="card-description">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cloud">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allServices.cloud.map((service, index) => (
                <Card
                  key={index}
                  className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[rgba(59,130,246,0.05)] hover:to-[rgba(16,185,129,0.05)] shadow-sm overflow-hidden"
                >
                  <div className="aspect-square w-full overflow-hidden relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm service-icon group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="card-title">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="card-description">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="strategic">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allServices.strategic.map((service, index) => (
                <Card
                  key={index}
                  className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[rgba(59,130,246,0.05)] hover:to-[rgba(16,185,129,0.05)] shadow-sm overflow-hidden"
                >
                  <div className="aspect-square w-full overflow-hidden relative">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm service-icon group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="card-title">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="card-description">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Connect Now CTA */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <CustomButton href="mailto:01@shunyaek.se" />
        </div>
      </div>
    </section>
  )
}

