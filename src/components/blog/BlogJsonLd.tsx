import Script from "next/script";
import { Article } from "@/lib/blog/articles";

interface BlogJsonLdProps {
  article: Article;
}

export default function BlogJsonLd({ article }: BlogJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || "https://teledocmedical.ai/og-blog-default.png",
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      url: article.author.linkedin,
    },
    publisher: {
      "@type": "Organization",
      name: "Teledoc Journey Medical",
      logo: {
        "@type": "ImageObject",
        url: "https://teledocmedical.ai/logo-teledoc.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://teledocmedical.ai/blog/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
    wordCount: article.content.split(/\s+/).length,
    timeRequired: `PT${article.readingTime}M`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://teledocmedical.ai",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://teledocmedical.ai/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://teledocmedical.ai/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
