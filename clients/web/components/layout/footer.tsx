"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { label: "about", href: "#about" },
    { label: "approach", href: "#approach" },
    { label: "methodology", href: "#methodology" },
    { label: "edge", href: "#edge" },
    { label: "services", href: "#services" },
    { label: "focus", href: "#focus" },
    { label: "work", href: "#work" },
    { label: "connect", href: "#connect" }
  ]

  return (
    <footer className="relative mt-auto">
      <div className="bg-background/60 backdrop-blur-md border-t border-white/20 shadow-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo and tagline */}
            <div className="flex flex-row items-center md:items-start justify-center gap-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-8 w-8 overflow-hidden">
                  <Image src="/logo.svg" alt="shunyaek Logo" width={32} height={32} className="h-full w-full" priority />
                </div>
                <span className="font-bold text-xl font-playfair">shunyaek.se</span>
              </Link>
              <p className="text-xs italic text-muted-foreground text-center md:text-left">
                bits to magic
              </p>
              {/* <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  privacy policy
                </Link>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  terms of service
                </Link>
              </div> */}
            </div>

            {/* Navigation Links */}
            {/* <div className="flex flex-1 flex-grow flex-wrap items-center justify-center gap-3">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
            </div> */}

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© {currentYear} shunyaek.se</p>
              {/* <p className="text-xs mt-1">all rights reserved</p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

