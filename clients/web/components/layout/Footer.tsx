"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"
import { ContactButton } from "@/components/common/ContactButton"

interface FooterLink {
    label: string
    href: string
}

interface FooterSection {
    title: string
    links: FooterLink[]
}

/**
 * Footer Component
 *
 * Main site footer with navigation, contact information, and copyright
 */
export function Footer() {
    const footerSections: FooterSection[] = [
        {
            title: "Product",
            links: [
                { label: "Features", href: "/features" },
                { label: "Pricing", href: "/pricing" },
                { label: "Integrations", href: "/integrations" },
                { label: "Changelog", href: "/changelog" },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "About us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Documentation", href: "/docs" },
                { label: "Tutorials", href: "/tutorials" },
                { label: "Support", href: "/support" },
                { label: "Legal", href: "/legal" },
            ],
        },
    ]

    const contactInfo = {
        email: {
            value: "contact@shunyaek.se",
            href: "mailto:contact@shunyaek.se",
        },
        phone: {
            value: "(+46) 123-456-7890",
            href: "tel:+46123456789",
        },
        address: "Sveavägen 123, 111 57 Stockholm, Sweden",
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background border-t">
            <div className="container px-4 py-12 md:py-16 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Logo and company info */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image src="/logo.svg" alt="shunyaek Logo" width={40} height={40} />
                            <span className="text-xl font-bold">shunyaek</span>
                        </Link>
                        <p className="text-muted-foreground">
                            Creating innovative solutions for businesses to thrive in the digital era.
                        </p>
                        <div className="flex flex-col gap-3 mt-2">
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                                <ContactButton
                                    contactType="email"
                                    value={contactInfo.email.value}
                                    href={contactInfo.email.href}
                                    variant="link"
                                    className="p-0 h-auto"
                                />
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                                <ContactButton
                                    contactType="phone"
                                    value={contactInfo.phone.value}
                                    href={contactInfo.phone.href}
                                    variant="link"
                                    className="p-0 h-auto"
                                />
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-2 text-muted-foreground" aria-hidden="true" />
                                <span className="text-muted-foreground">{contactInfo.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation sections */}
                    {footerSections.map((section) => (
                        <div key={section.title} className="md:col-span-2">
                            <h3 className="font-semibold mb-3">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter signup */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold mb-3">Stay Updated</h3>
                        <p className="text-muted-foreground mb-4 text-sm">
                            Subscribe to our newsletter for updates and insights.
                        </p>
                        <div className="space-y-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full px-3 py-2 border rounded-md"
                                    aria-label="Email address"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom bar with copyright and social */}
                <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-8 mt-12">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} shunyaek AB. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Terms
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Privacy
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
} 