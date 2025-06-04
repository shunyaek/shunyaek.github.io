import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="w-full bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="h-10 w-10 overflow-hidden">
                  <Image src="/logo.svg" alt="Shunyaek Logo" width={40} height={40} className="h-full w-full" />
                </div>
                <span className="font-bold text-xl font-playfair">shunyaek.se</span>
              </Link>
              <p className="text-muted-foreground font-urbanist">
                Empowering businesses with innovative digital solutions to thrive in today's competitive landscape.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-playfair">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground font-urbanist">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground font-urbanist">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-foreground font-urbanist">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-playfair">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/documentation" className="text-muted-foreground hover:text-foreground font-urbanist">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-muted-foreground hover:text-foreground font-urbanist">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-muted-foreground hover:text-foreground font-urbanist">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-muted-foreground hover:text-foreground font-urbanist">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 font-playfair">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="mailto:01@shunyaek.se"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-urbanist"
                  >
                    <Mail className="h-4 w-4" />
                    <span>01@shunyaek.se</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+917818888887"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 font-urbanist"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+91 7818888887</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-urbanist">
              © {new Date().getFullYear()} shunyaek.se. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground font-urbanist">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground font-urbanist">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground font-urbanist">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

