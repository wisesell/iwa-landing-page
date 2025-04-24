export async function getWebsiteData() {
  try {
    const response = await fetch("/data.json")
    if (!response.ok) {
      throw new Error("Failed to fetch website data")
    }
    return await response.json()
  } catch (error) {
    console.error("Error loading website data:", error)
    return null
  }
}

export async function getBlogData() {
  try {
    const response = await fetch("/blog.json")
    if (!response.ok) {
      throw new Error("Failed to fetch blog data")
    }
    return await response.json()
  } catch (error) {
    console.error("Error loading blog data:", error)
    return null
  }
}

export async function getBlogArticle(slug: string) {
  try {
    const blogData = await getBlogData()
    if (!blogData) return null

    return blogData.articles.find((article: any) => article.slug === slug) || null
  } catch (error) {
    console.error("Error loading blog article:", error)
    return null
  }
}

export async function getBlogAuthor(authorId: string) {
  try {
    const blogData = await getBlogData()
    if (!blogData) return null

    return blogData.authors.find((author: any) => author.id === authorId) || null
  } catch (error) {
    console.error("Error loading blog author:", error)
    return null
  }
}

export async function getBlogCategory(categoryId: string) {
  try {
    const blogData = await getBlogData()
    if (!blogData) return null

    return blogData.categories.find((category: any) => category.id === categoryId) || null
  } catch (error) {
    console.error("Error loading blog category:", error)
    return null
  }
}

export async function getRelatedArticles(articleId: string, limit = 3) {
  try {
    const blogData = await getBlogData()
    if (!blogData) return []

    const currentArticle = blogData.articles.find((article: any) => article.id === articleId)
    if (!currentArticle) return []

    // First try to get articles from relatedPosts
    if (currentArticle.relatedPosts && currentArticle.relatedPosts.length > 0) {
      const relatedArticles = currentArticle.relatedPosts
        .map((relatedId: string) => blogData.articles.find((article: any) => article.id === relatedId))
        .filter(Boolean)

      if (relatedArticles.length >= limit) {
        return relatedArticles.slice(0, limit)
      }
    }

    // If not enough related posts, get articles from the same category
    const sameCategory = blogData.articles.filter(
      (article: any) => article.id !== articleId && article.category === currentArticle.category,
    )

    // If still not enough, get the most recent articles
    const otherArticles = blogData.articles.filter(
      (article: any) => article.id !== articleId && article.category !== currentArticle.category,
    )

    return [...(sameCategory || []), ...(otherArticles || [])].slice(0, limit)
  } catch (error) {
    console.error("Error loading related articles:", error)
    return []
  }
}
