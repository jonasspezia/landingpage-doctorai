import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/blog/articles";
import AuthorBio from "@/components/blog/AuthorBio";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import ArticleCard from "@/components/blog/ArticleCard";
import ShareButton from "@/components/blog/ShareButton";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Gerar rotas estáticas para todos os artigos
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

// Gerar metadata dinâmico
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo não encontrado | DoctorAI",
    };
  }

  return {
    title: `${article.title} | Blog DoctorAI`,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.keywords,
      url: `https://teledocmedical.ai/blog/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Artigos relacionados (mesma categoria, exceto o atual)
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Converter markdown básico para HTML
  const contentHtml = article.content
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-cinza-900 mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-cinza-900 mt-8 mb-3">$1</h3>')
    .replace(/^\*\*(.*)\*\*$/gim, '<strong class="font-semibold">$1</strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-dourado pl-4 italic text-cinza-600 my-4">$1</blockquote>')
    .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc text-cinza-700">$1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 list-decimal text-cinza-700">$2</li>')
    .replace(/\n\n/g, '</p><p class="text-cinza-700 leading-relaxed mb-4">')
    .replace(/\|(.+)\|/g, (match) => {
      // Simplificar tabelas em markdown
      return `<div class="overflow-x-auto my-4"><table class="w-full text-sm border-collapse">${match}</table></div>`;
    });

  return (
    <>
      <BlogJsonLd article={article} />

      {/* Header */}
      <header className="bg-white border-b border-cinza-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-cinza-600 hover:text-cinza-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Blog</span>
            </Link>
            <ShareButton title={article.title} />
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-5 py-12">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="flex items-center gap-1 text-dourado font-medium">
              <Tag className="w-4 h-4" />
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-cinza-500">
              <Clock className="w-4 h-4" />
              {article.readingTime} min de leitura
            </span>
            <span className="flex items-center gap-1 text-cinza-500">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cinza-900 leading-tight mb-6">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-cinza-600 mb-8 leading-relaxed">
            {article.description}
          </p>

          {/* Author compact */}
          <div className="pb-8 border-b border-cinza-100 mb-8">
            <AuthorBio author={article.author} variant="compact" />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-cinza-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: `<p class="text-cinza-700 leading-relaxed mb-4">${contentHtml}</p>`,
            }}
          />

          {/* Author full bio */}
          <div className="mt-12 pt-8 border-t border-cinza-100">
            <h3 className="text-sm font-semibold text-cinza-500 uppercase tracking-wider mb-4">
              Sobre o Autor
            </h3>
            <AuthorBio author={article.author} variant="full" />
          </div>

          {/* CTA */}
          <div className="mt-12 bg-cinza-900 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Pronto para economizar <span className="gradient-text">2 horas</span> por dia?
            </h3>
            <p className="text-cinza-400 mb-6">
              Experimente o DoctorAI e transforme sua documentação clínica.
            </p>
            <a
              href="https://buy.stripe.com/9B68wQbRa2NH4OJdLg2Ji0x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
            >
              Começar Agora
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-cinza-50 py-16">
            <div className="max-w-6xl mx-auto px-5">
              <h2 className="text-sm font-semibold text-cinza-500 uppercase tracking-wider mb-6">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
