import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { getBlogArticle, getBlogAuthor, getRelatedArticles } from "@/lib/data"

type Props = {
  params: { slug: string }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getBlogArticle(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1000,
          height: 500,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default async function BlogArticle({ params }: Props) {
  const article = await getBlogArticle(params.slug)

  if (!article) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Button asChild>
          <Link href="/#blog">Return to Blog</Link>
        </Button>
      </div>
    )
  }

  const author = await getBlogAuthor(article.author)
  const relatedArticles = await getRelatedArticles(article.id, 2)

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-6">
            <Link href="/#blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Main Page
            </Link>
          </Button>

          <div className="aspect-video relative mb-8 overflow-hidden rounded-lg">
            <Image
              src={article.image || "/placeholder.svg?height=500&width=1000"}
              alt={article.title}
              width={1000}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={new Date(article.date).toISOString()}>
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{article.title}</h1>

          {author && (
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10">
                <Image
                  src={author.image || "/placeholder.svg?height=40&width=40"}
                  alt={author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <span className="font-medium">{author.name}</span>
                <p className="text-sm text-muted-foreground">{author.position}</p>
              </div>
            </div>
          )}
        </div>

        <article className="prose prose-lg max-w-none dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {relatedArticles.length > 0 && (
          <div className="mt-16 border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedArticles.map((related: any) => (
                <div
                  key={related.id}
                  className="group relative overflow-hidden rounded-lg border bg-background shadow-md transition-all hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={related.image || "/placeholder.svg?height=300&width=500"}
                      alt={related.title}
                      width={500}
                      height={300}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <time dateTime={new Date(related.date).toISOString()}>
                        {new Date(related.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{related.category}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight">
                      <Link href={`/blog/${related.slug}`} className="hover:underline">
                        {related.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-muted-foreground">{related.excerpt}</p>
                    <div className="mt-4">
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${related.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 border-t pt-8">
          <Button asChild>
            <Link href="/#blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Main Page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
