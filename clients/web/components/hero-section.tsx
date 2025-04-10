"use client"

import Image from "next/image"
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState, useReducer } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { CustomButton } from "@/components/ui/essential/custom-button"
import { useThemeDetection } from "@/hooks/use-theme-detection"
import styles from "@/styles/components/hero-section.module.css"

// Typewriter effect component
function TypewriterEffect() {
  const words = ["Transformation", "Innovation", "Evolution", "Journey", "Future", "Growth"]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentIndex]
    const speed = isDeleting ? 100 : 150

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % words.length)
        } else {
          setCurrentText(currentText.slice(0, -1))
        }
      } else {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1))
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting])

  return (
    <span className="brand-gradient-text text-5xl sm:text-8xl relative font-playfair font-extrabold">
      {currentText}
      <span className="absolute right-[-4px] top-0 animate-blink">|</span>
    </span>
  )
}

export function HeroSection() {
  const { isDarkTheme } = useThemeDetection()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
    skipSnaps: true,
    dragFree: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Auto-scroll the carousel
  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        emblaApi.scrollNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi])

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
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const carouselImages = [
    { src: "/images/slide1.png", alt: "shunyaek presentation slide 1", width: 640, height: 480 },
    { src: "/images/slide2.png", alt: "shunyaek presentation slide 2", width: 640, height: 480 },
    { src: "/images/slide3.png", alt: "shunyaek presentation slide 3", width: 640, height: 480 },
    { src: "/images/slide4.png", alt: "shunyaek presentation slide 4", width: 640, height: 480 },
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
              <span className="font-medium font-urbanist">shunyaek.se</span>
              <div className="mx-2 h-1 w-1 rounded-full bg-foreground"></div>
              <span className="text-muted-foreground font-urbanist">bits to magic</span>
            </div>
            <h1 className="font-playfair text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl flex flex-col">
              <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold">Empowering Your Digital</span>
              <span className="h-[1.5em] block">
                <TypewriterEffect />
              </span>
            </h1>
            <p className="lead-text">
              At shunyaek.se, we help businesses leverage cutting-edge technology to drive growth, efficiency, and
              innovation in today's competitive landscape.
            </p>
            <div className="flex mt-4">
              <CustomButton href="/connect" />
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
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground font-urbanist">
                <span className="font-medium">500+</span> satisfied clients worldwide
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:ml-auto">
            <div
              className={`relative p-[2px] rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#10B981] shadow-xl ${styles.carouselShadow} w-[80%] mx-auto`}
            >
              <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg w-full h-full">
                <div className="relative overflow-hidden rounded">
                  {/* Left navigation button */}
                  <button
                    onClick={scrollPrev}
                    className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur hover:bg-background"
                    aria-label="View previous slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Right navigation button */}
                  <button
                    onClick={scrollNext}
                    className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur hover:bg-background"
                    aria-label="View next slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div
                    className="absolute bottom-4 left-4 z-10 flex gap-2"
                    role="tablist"
                    aria-label="Carousel navigation"
                  >
                    {[0, 1, 2, 3].map((index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors ${selectedIndex === index
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#10B981]"
                          : "bg-muted-foreground/30"
                          }`}
                        onClick={() => scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-selected={selectedIndex === index}
                        role="tab"
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
                            width={image.width}
                            height={image.height}
                            className="rounded shadow-sm w-full h-auto"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={index === 0 ? 90 : 75}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-lg border bg-background/80 backdrop-blur-sm p-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#10B981]" />
                    <span className="text-sm font-medium font-urbanist">Trusted by industry leaders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

