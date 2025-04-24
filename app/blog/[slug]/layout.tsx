import type React from "react"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "5 E-commerce Integration Trends to Watch in 2023",
            image: "https://wisersell.com/placeholder.svg?height=500&width=1000",
            datePublished: "2023-04-15T08:00:00+08:00",
            dateModified: "2023-04-15T09:20:00+08:00",
            author: {
              "@type": "Person",
              name: "Alex Morgan",
            },
            publisher: {
              "@type": "Organization",
              name: "Iwastech",
              logo: {
                "@type": "ImageObject",
                url: "https://wisersell.com/logo.png",
              },
            },
            description:
              "Discover the latest trends in e-commerce integration that are helping businesses streamline operations and increase sales across multiple platforms.",
          }),
        }}
      />
      {children}
    </div>
  )
}
