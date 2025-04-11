import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "@/components/ui/essential/custom-button"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
    return (
        <header className="fixed top-4 z-50 mx-auto w-full max-w-[85rem] rounded-xl bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-10 w-10 overflow-hidden">
                            <Image src="/logo.svg" alt="shunyaek Logo" width={40} height={40} className="h-full w-full" priority />
                        </div>
                        <span className="font-bold text-xl font-playfair">shunyaek.se</span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#services" className="nav-link">
                        Services
                    </Link>
                    {/* <Link href="#case-studies" className="nav-link">
                        Case Studies
                    </Link> */}
                    {/* <Link href="/blog" className="nav-link">
                        Blog
                    </Link> */}
                    <Link href="#testimonials" className="nav-link">
                        Testimonials
                    </Link>
                    <Link href="#pricing" className="nav-link">
                        Pricing
                    </Link>
                    <Link href="/connect" className="nav-link">
                        Connect
                    </Link>
                    {/* <ThemeToggle /> */}
                </nav>
                <div className="flex items-center gap-4">
                    <CustomButton href="/connect" />
                    <MobileNav />
                </div>
            </div>
        </header>
    )
} 