"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const sectionLabels = [
    { label: "about", shortLabel: "01", href: "#about" },
    { label: "approach", shortLabel: "02", href: "#approach" },
    { label: "methodology", shortLabel: "03", href: "#methodology" },
    { label: "edge", shortLabel: "04", href: "#edge" },
    { label: "services", shortLabel: "05", href: "#services" },
    { label: "focus", shortLabel: "06", href: "#focus" },
    { label: "work", shortLabel: "07", href: "#work" },
    { label: "connect", shortLabel: "08", href: "#connect" }
]

export function Header() {
    const [currentSection, setCurrentSection] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight

            // Calculate which section we're closest to
            const currentIndex = Math.floor((scrollTop + windowHeight / 2) / windowHeight)
            const boundedIndex = Math.min(Math.max(currentIndex, 0), sectionLabels.length - 1)

            setCurrentSection(boundedIndex)
        }

        // Initial call to set the current section
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto">
            <div className="bg-background/60 backdrop-blur-md border border-white/20 rounded-full shadow-xl">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-2 px-6 py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 mr-4">
                        <div className="h-6 w-6 overflow-hidden">
                            <Image src="/logo.svg" alt="shunyaek Logo" width={24} height={24} className="h-full w-full" priority />
                        </div>
                        <span className="font-bold text-sm font-playfair">shunyaek.se</span>
                    </Link>

                    {/* Divider */}
                    <div className="h-4 w-px bg-border/50 mx-2"></div>

                    {/* Section Navigation */}
                    {sectionLabels.map((section, index) => (
                        <Link
                            key={index}
                            href={section.href}
                            className={`text-xs font-medium transition-all duration-200 px-3 py-1 rounded-full ${currentSection === index
                                ? 'text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981] shadow-lg'
                                : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                                }`}
                        >
                            {section.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile/Tablet Navigation */}
                <div className="lg:hidden">
                    <div className="flex items-center gap-3 px-4 py-3">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-6 w-6 overflow-hidden">
                                <Image src="/logo.svg" alt="shunyaek Logo" width={24} height={24} className="h-full w-full" priority />
                            </div>
                            <span className="font-bold text-sm font-playfair">shunyaek.se</span>
                        </Link>

                        {/* Compact section buttons */}
                        <div className="flex items-center gap-1 ml-3">
                            {sectionLabels.map((section, index) => (
                                <Link
                                    key={index}
                                    href={section.href}
                                    className={`text-xs font-medium transition-all duration-200 w-8 h-8 rounded-full flex items-center justify-center ${currentSection === index
                                        ? 'text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981] shadow-lg'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-white/10'
                                        }`}
                                    title={section.label}
                                >
                                    {section.shortLabel}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
} 