import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { Article } from "@/lib/blog/articles";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${article.slug}`}
        className="block bg-cinza-900 rounded-2xl overflow-hidden card-hover group"
      >
        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-dourado/20 text-dourado px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-cinza-500 text-sm flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readingTime} min de leitura
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-dourado transition-colors">
            {article.title}
          </h2>

          <p className="text-cinza-400 mb-6 line-clamp-2">{article.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cinza-700 flex items-center justify-center text-white font-bold">
                {article.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{article.author.name}</p>
                <p className="text-cinza-500 text-xs">{formattedDate}</p>
              </div>
            </div>

            <span className="text-dourado flex items-center gap-2 font-medium group-hover:gap-3 transition-all">
              Ler artigo
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="block bg-white rounded-xl p-6 shadow-soft card-hover group border border-cinza-100"
    >
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-dourado" />
        <span className="text-dourado text-sm font-medium">{article.category}</span>
      </div>

      <h3 className="text-lg font-bold text-cinza-900 mb-2 group-hover:text-dourado transition-colors line-clamp-2">
        {article.title}
      </h3>

      <p className="text-cinza-600 text-sm mb-4 line-clamp-2">{article.description}</p>

      <div className="flex items-center justify-between text-sm">
        <span className="text-cinza-500 flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {article.readingTime} min
        </span>
        <span className="text-cinza-500">{formattedDate}</span>
      </div>
    </Link>
  );
}
