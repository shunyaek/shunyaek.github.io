"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"
import { ThemeToggle } from "@/components/common/ThemeToggle"
import { useIsMobile } from "@/hooks/use-mobile"

/**
 * Navigation item interface
 */
interface NavItem {
    title: string
    href: string
    description?: string
}

/**
 * MobileNav component props
 */
interface MobileNavProps {
    items: NavItem[]
}

/**
 * MobileNav Component
 * 
 * Mobile navigation menu with off-canvas slide-in panel
 */
export function MobileNav({ items }: MobileNavProps) {
    const [open, setOpen] = useState(false)
    const isMobile = useIsMobile()

    // If we're not on mobile, don't render the component
    if (!isMobile) return null

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] pr-0">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between py-4 border-b">
                        <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
                            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
                            <span className="font-bold text-lg">shunyaek</span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    <nav className="flex-1 overflow-auto py-4">
                        <ul className="flex flex-col gap-1">
                            {items.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="flex flex-col px-4 py-3 hover:bg-accent rounded-lg"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="font-medium">{item.title}</span>
                                        {item.description && (
                                            <span className="text-sm text-muted-foreground">{item.description}</span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="py-4 border-t">
                        <div className="flex justify-between px-4">
                            <Button variant="outline" size="sm" href="/login">
                                Sign In
                            </Button>
                            <Button size="sm" href="/signup">
                                Get Started
                            </Button>
                        </div>
                        <div className="flex justify-end px-4 mt-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
} 