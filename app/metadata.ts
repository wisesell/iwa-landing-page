import type { Metadata } from "next"

// Default metadata for the site
export const defaultMetadata: Metadata = {
  title: {
    default: "Iwastech | E-commerce Integration & Cloud Solutions",
    template: "%s | Iwastech",
  },
  description:
    "Iwastech provides e-commerce integration with WiserSell, cloud & DevOps consultancy, and custom software development services to help businesses grow.",
  keywords: [
    "e-commerce integration",
    "WiserSell",
    "cloud consultancy",
    "DevOps",
    "software development",
    "IT services",
  ],
  authors: [{ name: "Iwastech Team" }],
  creator: "Iwastech",
  publisher: "Iwastech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://wisersell.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wisersell.com",
    title: "Iwastech | E-commerce Integration & Cloud Solutions",
    description:
      "Iwastech provides e-commerce integration with WiserSell, cloud & DevOps consultancy, and custom software development services to help businesses grow.",
    siteName: "Iwastech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iwastech - Transforming Business Through Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iwastech | E-commerce Integration & Cloud Solutions",
    description:
      "Iwastech provides e-commerce integration with WiserSell, cloud & DevOps consultancy, and custom software development services to help businesses grow.",
    images: ["/twitter-image.jpg"],
    creator: "@Iwastech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}
