"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/essential/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/essential/tabs"
import { ArrowRight, Code, Cloud, Smartphone, LineChart, Cpu, Globe, PenTool, Shield, Briefcase } from "lucide-react"
import Link from "next/link"
import styles from "@/styles/components/feature-section.module.css"

/**
 * Features Section Component
 * 
 * Showcase of services offered with tabbed navigation and card-based layout
 */
export function Features() {
    const services = {
        development: [
            {
                icon: <Code className="h-5 w-5" />,
                title: "Custom Software Development",
                description:
                    "Tailored software solutions designed to address your unique business challenges and requirements.",
            },
            {
                icon: <Smartphone className="h-5 w-5" />,
                title: "Mobile App Development",
                description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
            },
            {
                icon: <PenTool className="h-5 w-5" />,
                title: "UI/UX Design",
                description: "User-centered design that enhances usability, accessibility, and overall user satisfaction.",
            },
        ],
        cloud: [
            {
                icon: <Cloud className="h-5 w-5" />,
                title: "Cloud Migration",
                description:
                    "Seamless transition of your infrastructure and applications to secure, scalable cloud environments.",
            },
            {
                icon: <Cpu className="h-5 w-5" />,
                title: "DevOps Implementation",
                description: "Streamlined development processes with CI/CD pipelines and infrastructure automation.",
            },
            {
                icon: <Shield className="h-5 w-5" />,
                title: "Security & Compliance",
                description: "Robust security measures and compliance frameworks to protect your digital assets.",
            },
        ],
        strategic: [
            {
                icon: <Briefcase className="h-5 w-5" />,
                title: "Digital Transformation",
                description:
                    "Strategic guidance to help your organization leverage technology for business growth and innovation.",
            },
            {
                icon: <LineChart className="h-5 w-5" />,
                title: "Data Analytics & AI",
                description: "Advanced analytics and AI solutions that turn your data into actionable business insights.",
            },
            {
                icon: <Globe className="h-5 w-5" />,
                title: "Enterprise Integration",
                description: "Seamless integration of systems and applications across your organization's ecosystem.",
            },
        ],
    }

    return (
        <section id="services" className="bg-muted/50 py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm mb-4">
                        <span className="font-medium">Services</span>
                        <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
                        <span className="text-muted-foreground">What We Offer</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Comprehensive Technology Consulting Services
                    </h2>
                    <p className="mt-4 max-w-[700px] text-muted-foreground text-lg">
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
                                Cloud & DevOps
                            </TabsTrigger>
                            <TabsTrigger value="strategic" className="plastiky-tab">
                                Strategic
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="development">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.development.map((service, index) => (
                                <Card
                                    key={index}
                                    className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[rgba(50,107,255,0.05)] hover:to-[rgba(0,204,163,0.05)] shadow-sm"
                                >
                                    <CardHeader>
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.serviceIcon} mb-3 group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                                            {service.icon}
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-muted-foreground mb-6">
                                Our development team combines technical expertise with industry knowledge to deliver solutions that
                                drive business value.
                            </p>
                            <Link href="/services/development" className="inline-flex items-center text-primary hover:underline">
                                Learn more about our development services
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="cloud">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.cloud.map((service, index) => (
                                <Card
                                    key={index}
                                    className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[rgba(50,107,255,0.05)] hover:to-[rgba(0,204,163,0.05)] shadow-sm"
                                >
                                    <CardHeader>
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.serviceIcon} mb-3 group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                                            {service.icon}
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-muted-foreground mb-6">
                                We help organizations modernize their infrastructure, improve operational efficiency, and enhance
                                security posture.
                            </p>
                            <Link href="/services/cloud" className="inline-flex items-center text-primary hover:underline">
                                Explore our cloud and DevOps capabilities
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </TabsContent>

                    <TabsContent value="strategic">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.strategic.map((service, index) => (
                                <Card
                                    key={index}
                                    className="group border bg-background transition-all duration-300 hover:brand-shadow hover:scale-[1.02] hover:bg-gradient-to-br hover:from-[rgba(50,107,255,0.05)] hover:to-[rgba(0,204,163,0.05)] shadow-sm"
                                >
                                    <CardHeader>
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${styles.serviceIcon} mb-3 group-hover:shadow-md group-hover:scale-110 transition-all duration-300`}>
                                            {service.icon}
                                        </div>
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-muted-foreground mb-6">
                                Our strategic consulting services help businesses navigate digital transformation and leverage
                                technology for competitive advantage.
                            </p>
                            <Link href="/services/strategic" className="inline-flex items-center text-primary hover:underline">
                                Discover our strategic consulting approach
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
} 