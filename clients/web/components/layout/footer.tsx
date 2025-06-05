"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "about", href: "#section-0" },
    { label: "services", href: "#section-4" },
    { label: "work", href: "#section-6" },
    { label: "connect", href: "#section-7" }
  ]

  return (
    <footer className="relative mt-auto">
      <div className="bg-background/60 backdrop-blur-md border-t border-white/20 shadow-xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and tagline */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-8 w-8 overflow-hidden">
                  <Image src="/logo.svg" alt="shunyaek Logo" width={32} height={32} className="h-full w-full" priority />
                </div>
                <span className="font-bold text-xl font-playfair">shunyaek.se</span>
              </Link>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                bits to magic
              </p>
            </div>

            {/* Quick navigation */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-muted-foreground">Quick Links:</span>
              <div className="flex items-center gap-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-3 py-1 rounded-full hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© {currentYear} shunyaek.se</p>
              <p className="text-xs mt-1">All rights reserved</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/30 my-6"></div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p>Made with ❤️ for innovative businesses</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

