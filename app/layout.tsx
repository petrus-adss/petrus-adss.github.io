import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { PageSwitcher } from "@/components/page-switcher"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="font"
          href="https://www.adss.com/wp-content/themes/eprefix-bootstrap/fonts/Janna-Graphie-Light.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="https://www.adss.com/wp-content/themes/eprefix-bootstrap/fonts/Janna-Graphie-Light.woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="https://www.adss.com/wp-content/themes/eprefix-bootstrap/fonts/Janna-Graphie-Regular.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <PageSwitcher />
        <Analytics />
      </body>
    </html>
  )
}