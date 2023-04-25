"use client"

import './globals.css'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

// export const metadata = {
//   title: 'shunyaek',
//   description: 'shunyaek.se',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./public/favicon.ico" sizes="any" />
        <link rel="icon" href="./public/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#4a4a4a" />
      </Head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
