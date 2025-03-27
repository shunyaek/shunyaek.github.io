"use client"

import Image from "next/image"
import { useState, useCallback, useEffect, type FC } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialProps {
    quote: string
    author: string
    role: string
    company: string
    imageSrc: string
}

const testimonials: TestimonialProps[] = [
    {
        quote:
            "shunyaek helped us accelerate our digital transformation journey. Their team delivered beyond expectations, creating a seamless and powerful solution that's transformed how we operate.",
        author: "Alexandra Chen",
        role: "CTO",
        company: "InnovaTech Solutions",
        imageSrc: "/testimonials/person1.jpg",
    },
    {
        quote:
            "Working with shunyaek was a game-changer for our business. Their deep expertise in cloud infrastructure helped us scale efficiently while maintaining rock-solid security.",
        author: "Marcus Johnson",
        role: "VP of Engineering",
        company: "CloudScale Inc",
        imageSrc: "/testimonials/person2.jpg",
    },
    {
        quote:
            "The AI solution developed by shunyaek increased our operational efficiency by 45%. Their ability to understand our specific needs and develop a tailored solution was impressive.",
        author: "Sophia Rodriguez",
        role: "COO",
        company: "Nexus Enterprises",
        imageSrc: "/testimonials/person3.jpg",
    },
]

const Testimonial: FC<TestimonialProps> = ({ quote, author, role, company, imageSrc }) => {
    return (
        <div className="h-full flex flex-col rounded-lg p-6 bg-card shadow-sm mx-2">
            <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((starNumber) => (
                    <Star
                        key={starNumber}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        aria-hidden="true"
                    />
                ))}
            </div>
            <blockquote className="flex-1">
                <p className="text-foreground mb-4">&quot;{quote}&quot;</p>
            </blockquote>
            <div className="flex items-center mt-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                        src={imageSrc}
                        alt={author}
                        className="object-cover"
                        fill
                    />
                </div>
                <div>
                    <p className="font-medium text-foreground">{author}</p>
                    <p className="text-sm text-muted-foreground">
                        {role}, {company}
                    </p>
                </div>
            </div>
        </div>
    )
}

/**
 * Testimonials Section Component
 * 
 * Showcases customer testimonials in a carousel format
 */
export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start"
    })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index)
        },
        [emblaApi],
    )

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", onSelect)

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi, onSelect])

    // Auto scroll interval
    useEffect(() => {
        if (!emblaApi) return

        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 6000)

        return () => clearInterval(interval)
    }, [emblaApi])

    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-[700px]">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                <div className="relative">
                    {/* Carousel navigation */}
                    <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
                        <button
                            onClick={scrollPrev}
                            className="p-2 rounded-full bg-background/80 shadow-sm border backdrop-blur-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] h-full"
                                >
                                    <Testimonial {...testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
                        <button
                            onClick={scrollNext}
                            className="p-2 rounded-full bg-background/80 shadow-sm border backdrop-blur-sm"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={cn("h-2.5 w-2.5 rounded-full transition-colors", {
                                "bg-primary": index === selectedIndex,
                                "bg-muted": index !== selectedIndex,
                            })}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 