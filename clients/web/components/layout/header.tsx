"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useCurrentSection } from "@/hooks/use-current-section"

const sectionLabels = [
    { label: "about", shortLabel: "01", href: "#about" },
    { label: "approach", shortLabel: "02", href: "#approach" },
    { label: "methodology", shortLabel: "03", href: "#methodology" },
    { label: "edge", shortLabel: "04", href: "#edge" },
    { label: "services", shortLabel: "05", href: "#services" },
    { label: "focus", shortLabel: "06", href: "#focus" },
    { label: "work", shortLabel: "07", href: "#work" },
    { label: "pricing", shortLabel: "08", href: "#pricing" },
    { label: "connect", shortLabel: "09", href: "#connect" }
]

export function Header() {
    const currentSection = useCurrentSection(sectionLabels.length)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Mark header as stable after component mounts
    useEffect(() => {
        // Only manage on mobile/tablet
        if (window.innerWidth <= 1024) {
            // Mark header as stable after a brief delay
            const timer = setTimeout(() => {
                document.body.classList.add('header-stable')
            }, 1000) // Shorter delay to preserve animations

            return () => {
                clearTimeout(timer)
                document.body.classList.remove('header-stable')
            }
        }
    }, [])

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <header className="fixed top-3 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[calc(100vw-1rem)] sm:max-w-none">
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

                    {/* Tablet Navigation (md to lg) */}
                    <div className="hidden md:flex lg:hidden items-center gap-2 px-4 py-3">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 mr-3">
                            <div className="h-5 w-5 overflow-hidden">
                                <Image src="/logo.svg" alt="shunyaek Logo" width={20} height={20} className="h-full w-full" priority />
                            </div>
                            <span className="font-bold text-xs font-playfair">shunyaek.se</span>
                        </Link>

                        {/* Compact section buttons for tablet */}
                        <div className="flex items-center gap-1">
                            {sectionLabels.map((section, index) => (
                                <Link
                                    key={index}
                                    href={section.href}
                                    className={`text-xs font-medium transition-all duration-200 w-7 h-7 rounded-full flex items-center justify-center ${currentSection === index
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

                    {/* Mobile Navigation (below md) */}
                    <div className="md:hidden flex items-center justify-between px-4 py-3 gap-4">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-5 w-5 overflow-hidden">
                                <Image src="/logo.svg" alt="shunyaek Logo" width={20} height={20} className="h-full w-full" priority />
                            </div>
                            <span className="font-bold text-xs font-playfair">shunyaek.se</span>
                        </Link>

                        {/* Current section indicator + menu button */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={handleMobileMenuClose}
                    />

                    {/* Menu Content */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[calc(100vw-2rem)] max-w-sm">
                        <div className="bg-background/95 backdrop-blur-md border rounded-2xl shadow-xl p-4">
                            <div className="grid grid-cols-2 gap-3">
                                {sectionLabels.map((section, index) => (
                                    <Link
                                        key={index}
                                        href={section.href}
                                        onClick={handleMobileMenuClose}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${currentSection === index
                                            ? 'text-white bg-gradient-to-r from-[#3B82F6] to-[#10B981] shadow-lg'
                                            : 'text-foreground hover:bg-muted/50'
                                            }`}
                                    >
                                        <span className="text-xs font-medium opacity-60">{section.shortLabel}</span>
                                        <span className="text-sm font-medium">{section.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
} 