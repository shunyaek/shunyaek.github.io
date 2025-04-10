import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Urbanist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ApolloWrapper } from "@/components/providers/ApolloWrapper"
import { AuthProvider } from "@/lib/supabase/auth-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${urbanist.variable} font-sans`}>
        <ApolloWrapper>
          <AuthProvider>
            <ThemeProvider>
              <div className="w-full flex min-h-screen flex-col items-center justify-start">
                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Skip to main content
                </a>
                <Header />
                <main id="main-content" className="flex-1 w-full">
                  {children}
                </main>
                <Footer />
                <Toaster />
              </div>
            </ThemeProvider>
          </AuthProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}