import type React from "react"
import { defaultMetadata } from "./metadata"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Iwastech",
              url: "https://iwastech.com",
              logo: "https://iwastech.com/logo.png",
              sameAs: [
                "https://twitter.com/techsolutions",
                "https://www.linkedin.com/company/techsolutions",
                "https://github.com/techsolutions",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-123-456-7890",
                contactType: "customer service",
                availableLanguage: ["English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Park, Innovation Street",
                addressLocality: "Digital City",
                postalCode: "12345",
                addressCountry: "US",
              },
              description:
                "Iwastech provides e-commerce integration with WiserSell, cloud & DevOps consultancy, and custom software development services to help businesses grow.",
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
