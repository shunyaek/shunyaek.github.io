"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/essential/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/essential/sheet"
import { ArrowRight, Menu, X } from "lucide-react"
import { CustomButton } from "@/components/ui/essential/custom-button"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <Sheet
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen)
        if (!newOpen) {
          // Return focus to the trigger when closed
          setTimeout(() => triggerRef.current?.focus(), 100)
        }
      }}
    >
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col h-full" id="mobile-navigation">
          <div className="flex items-center justify-between border-b pb-4">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
              <div className="h-8 w-8 overflow-hidden">
                <Image src="/logo.svg" alt="Shunyaek Logo" width={32} height={32} className="h-full w-full" />
              </div>
              <span className="font-bold text-xl font-playfair">shunyaek.se</span>
            </Link>
            <SheetClose asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setOpen(false)
                  // Return focus to the trigger button after closing
                  setTimeout(() => {
                    (document.querySelector('[aria-label="Open menu"]') as HTMLElement)?.focus()
                  }, 100)
                }}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>
          <nav className="flex flex-col gap-4 py-6">
            <Link
              href="#services"
              className="text-lg font-medium transition-colors hover:text-primary font-urbanist"
              onClick={() => setOpen(false)}
            >
              services
            </Link>
            {/* <Link
              href="#case-studies"
              className="text-lg font-medium transition-colors hover:text-primary font-urbanist"
              onClick={() => setOpen(false)}
            >
              Case Studies
            </Link> */}
            <Link
              href="#testimonials"
              className="text-lg font-medium transition-colors hover:text-primary font-urbanist"
              onClick={() => setOpen(false)}
            >
              testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium transition-colors hover:text-primary font-urbanist"
              onClick={() => setOpen(false)}
            >
              pricing
            </Link>
            <Link
              href="/connect"
              className="text-lg font-medium transition-colors hover:text-primary font-urbanist"
              onClick={() => setOpen(false)}
            >
              connect
            </Link>
            {/* <div className="flex items-center">
              <span className="text-lg font-medium mr-2 font-urbanist">Theme:</span>
              <ThemeToggle />
            </div> */}
          </nav>
          <div className="mt-auto border-t pt-6 flex flex-col gap-4">
            <CustomButton href="/connect" onClick={() => setOpen(false)} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

