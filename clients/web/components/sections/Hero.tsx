"use client"

import Image from "next/image"
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/Button"
import { useTheme } from "next-themes"
import styles from "@/styles/components/hero-section.module.css"

// Typewriter effect component
function TypewriterEffect() {
    const words = ["Transformation", "Innovation", "Evolution", "Journey", "Future", "Growth"]
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[currentWordIndex]
        const timeout = setTimeout(
            () => {
                // If deleting, remove the last character
                if (isDeleting) {
                    setCurrentText((prev) => prev.substring(0, prev.length - 1))

                    // If all characters are deleted, start typing the next word
                    if (currentText === "") {
                        setIsDeleting(false)
                        setCurrentWordIndex((prev) => (prev + 1) % words.length)
                    }
                }
                // If typing, add the next character
                else {
                    setCurrentText(word.substring(0, currentText.length + 1))

                    // If the word is complete, wait longer and then start deleting
                    if (currentText === word) {
                        setTimeout(() => {
                            setIsDeleting(true)
                        }, 1500) // Pause at the end of the word
                        return
                    }
                }
            },
            isDeleting ? 80 : 120,
        ) // Typing is slower than deleting

        return () => clearTimeout(timeout)
    }, [currentText, currentWordIndex, isDeleting])

    return (
        <span className="brand-gradient-text text-8xl relative font-extrabold">
            {currentText}
            <span className="absolute right-[-4px] top-0 animate-blink">|</span>
        </span>
    )
}

/**
 * Hero Section Component
 *
 * Main homepage hero section with animated typewriter effect and image carousel
 */
export function Hero() {
    const { theme, systemTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const isDarkTheme = mounted && (theme === "dark" || (theme === "system" && systemTheme === "dark"))

    useEffect(() => {
        setMounted(true)
    }, [])

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: "trimSnaps"
    })
    const [selectedIndex, setSelectedIndex] = useState(0)

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

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)
        onSelect()

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    // Auto-scroll the carousel
    useEffect(() => {
        if (!emblaApi) return

        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [emblaApi])

    const carouselImages = [
        { src: "/images/slide1.png", alt: "shunyaek presentation slide 1" },
        { src: "/images/slide2.png", alt: "shunyaek presentation slide 2" },
        { src: "/images/slide3.png", alt: "shunyaek presentation slide 3" },
        { src: "/images/slide4.png", alt: "shunyaek presentation slide 4" },
    ]

    return (
        <section
            className={`relative overflow-hidden ${isDarkTheme ? styles.heroBackgroundDark : styles.heroBackgroundLight} py-20 md:py-32`}
        >
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center rounded-full border bg-background/80 backdrop-blur-sm px-3 py-1 text-sm mb-4">
                            <span className="font-medium">shunyaek.se</span>
                            <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
                            <span className="text-muted-foreground">Innovative Solutions</span>
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl flex flex-col">
                            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold">Empowering Your Digital</span>
                            <span className="h-[1.5em] block">
                                <TypewriterEffect />
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            At shunyaek.se, we help businesses leverage cutting-edge technology to drive growth, efficiency, and
                            innovation in today's competitive landscape.
                        </p>
                        <div className="flex mt-4">
                            <Button variant="custom" href="/signup">Connect Now</Button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                                    >
                                        <Image
                                            src={`/placeholder.svg?height=32&width=32`}
                                            alt="User"
                                            width={32}
                                            height={32}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <span className="font-medium">500+</span> satisfied clients worldwide
                            </div>
                        </div>
                    </div>
                    <div className="relative mx-auto lg:ml-auto">
                        <div className={`relative rounded-lg border bg-background/80 backdrop-blur-sm p-2 shadow-xl ${styles.carouselShadow} w-[80%] mx-auto`}>
                            <div className="relative overflow-hidden rounded">
                                {/* Left navigation button */}
                                <button
                                    onClick={scrollPrev}
                                    className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur hover:bg-background"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>

                                {/* Right navigation button */}
                                <button
                                    onClick={scrollNext}
                                    className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur hover:bg-background"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                                <div className="absolute bottom-4 left-4 z-10 flex gap-2">
                                    {[0, 1, 2, 3].map((index) => (
                                        <button
                                            key={index}
                                            className={`h-2 w-2 rounded-full transition-colors ${selectedIndex === index
                                                ? "bg-gradient-to-r from-[#326BFF] to-[#00CCA3]"
                                                : "bg-muted-foreground/30"
                                                }`}
                                            onClick={() => scrollTo(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <div className={styles.embla} ref={emblaRef}>
                                    <div className={styles.embla__container}>
                                        {carouselImages.map((image, index) => (
                                            <div className={styles.embla__slide} key={index}>
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={640}
                                                    height={480}
                                                    className="rounded shadow-sm w-full h-auto"
                                                    priority={index === 0}
                                                    loading={index === 0 ? "eager" : "lazy"}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 rounded-lg border bg-background/80 backdrop-blur-sm p-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-[#00CCA3]" />
                                    <span className="text-sm font-medium">Trusted by industry leaders</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 