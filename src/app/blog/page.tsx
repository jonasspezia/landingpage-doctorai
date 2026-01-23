import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, BookOpen, Search } from "lucide-react";
import { articles, categories } from "@/lib/blog/articles";
import ArticleCard from "@/components/blog/ArticleCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog - Artigos sobre IA Médica e Documentação Clínica | DoctorAI",
  description:
    "Artigos educativos sobre inteligência artificial na medicina, documentação clínica automática, prontuário SOAP e produtividade médica. Escrito por médicos.",
  keywords: [
    "blog ia médica",
    "artigos documentação médica",
    "inteligência artificial saúde",
    "prontuário eletrônico",
    "tecnologia médica",
  ],
  openGraph: {
    title: "Blog DoctorAI - IA Médica e Documentação Clínica",
    description:
      "Conteúdo educativo sobre tecnologia na medicina, escrito por profissionais de saúde.",
    type: "website",
    url: "https://teledocmedical.ai/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <>
      {/* Header simplificado */}
      <header className="bg-white border-b border-cinza-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-cinza-600 hover:text-cinza-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-dourado" />
              <span className="font-bold text-cinza-900">
                Blog Doctor<span className="text-dourado">AI</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-cinza-50">
        {/* Hero */}
        <section className="bg-cinza-900 py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-dourado/20 text-dourado px-4 py-2 rounded-full text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" />
                Blog Educativo
              </div>
              <h1 className="text-h1 text-white mb-4">
                Conhecimento para{" "}
                <span className="gradient-text">transformar</span> sua prática
              </h1>
              <p className="text-cinza-400 text-lg">
                Artigos sobre IA médica, documentação clínica e produtividade.
                Escrito por médicos, para médicos.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white border-b border-cinza-100">
          <div className="max-w-6xl mx-auto px-5 py-4">
            <div className="flex items-center gap-4 overflow-x-auto">
              <span className="text-cinza-500 text-sm whitespace-nowrap">Categorias:</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-cinza-100 text-cinza-700 hover:bg-dourado/10 hover:text-dourado transition-colors whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-sm font-semibold text-cinza-500 uppercase tracking-wider mb-6">
              Artigo em Destaque
            </h2>
            <ArticleCard article={featuredArticle} variant="featured" />
          </div>
        </section>

        {/* Other Articles */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-sm font-semibold text-cinza-500 uppercase tracking-wider mb-6">
              Mais Artigos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-cinza-900">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-h2 text-white mb-4">
              Receba conteúdo exclusivo
            </h2>
            <p className="text-cinza-400 mb-8">
              Novos artigos sobre IA médica diretamente no seu email. Sem spam,
              apenas conhecimento útil.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-cinza-800 border border-cinza-700 text-white placeholder:text-cinza-500 focus:outline-none focus:border-dourado"
              />
              <button className="btn-gradient text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
            <p className="text-cinza-600 text-xs mt-4">
              Ao se inscrever, você concorda com nossa Política de Privacidade.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
