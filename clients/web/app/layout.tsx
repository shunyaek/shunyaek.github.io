import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Urbanist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"
import { PostHogProvider } from './providers'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
})

export const metadata: Metadata = {
  title: "shunyaek.se | bits to magic",
  description: "Empowering businesses with innovative digital solutions to thrive in today's competitive landscape.",
  generator: "shunyaek.se",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${urbanist.variable} font-sans`}>
        <PostHogProvider>
          <ThemeProvider>
            <div className="w-full flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-1 w-full relative">
                {children}
              </main>
              <Footer />
              <Toaster />
            </div>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}