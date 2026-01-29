import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  MapPin,
  Award,
  Quote,
} from "lucide-react";
import { caseStudies } from "@/lib/cases/data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Casos de Sucesso - Médicos que Transformaram sua Rotina | DoctorAI",
  description:
    "Histórias reais de médicos que economizam horas por dia com o DoctorAI. Clínicas, hospitais e consultórios usando IA para documentação médica.",
  keywords: [
    "casos de sucesso doctorai",
    "depoimentos médicos ia",
    "resultados documentação automática",
    "médicos usando ia",
  ],
  openGraph: {
    title: "Casos de Sucesso | DoctorAI",
    description:
      "Histórias reais de médicos que transformaram sua rotina com IA.",
    type: "website",
    url: "https://teledocmedical.ai/casos",
  },
  alternates: {
    canonical: "/casos",
  },
};

// JSON-LD Review schema
const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "DoctorAI",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: caseStudies.length.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: caseStudies.map((caseStudy) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: caseStudy.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: caseStudy.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: caseStudy.quote,
    datePublished: "2026-01-22",
  })),
};

export default function CasosPage() {
  return (
    <>
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      {/* Header */}
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
              <Award className="w-5 h-5 text-dourado" />
              <span className="font-bold text-cinza-900">
                Casos de <span className="text-dourado">Sucesso</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-cinza-50">
        {/* Hero */}
        <section className="bg-cinza-900 py-16">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-dourado/20 text-dourado px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Casos Reais
            </div>
            <h1 className="text-h1 text-white mb-4">
              Médicos que{" "}
              <span className="gradient-text">transformaram</span> sua rotina
            </h1>
            <p className="text-cinza-400 text-lg max-w-2xl mx-auto">
              Histórias reais de profissionais que recuperaram horas do seu dia
              e melhoraram a qualidade da documentação clínica.
            </p>

            {/* Stats summary */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-dourado">80%</p>
                <p className="text-cinza-500 text-sm">Redução média no tempo</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-verde">5/5</p>
                <p className="text-cinza-500 text-sm">Avaliação média</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-azul">100%</p>
                <p className="text-cinza-500 text-sm">Recomendariam</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="space-y-12">
              {caseStudies.map((caseStudy, index) => (
                <article
                  key={caseStudy.id}
                  className="bg-white rounded-2xl shadow-soft overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-cinza-900 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-cinza-700 flex items-center justify-center text-white font-bold text-xl">
                          {caseStudy.name.charAt(0)}
                        </div>
                        <div>
                          <h2 className="text-white font-bold text-lg">
                            {caseStudy.name}
                          </h2>
                          <p className="text-cinza-400 text-sm">
                            {caseStudy.specialty} • {caseStudy.role}
                          </p>
                          <p className="text-cinza-500 text-xs flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {caseStudy.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: caseStudy.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-dourado fill-dourado"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-cinza-900 mb-4">
                      {caseStudy.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-cinza-100 text-cinza-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {caseStudy.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-cinza-50 rounded-xl p-4 text-center"
                        >
                          <p className="text-cinza-500 text-xs mb-1">
                            {metric.label}
                          </p>
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-cinza-400 text-sm line-through">
                              {metric.before}
                            </span>
                            <ChevronRight className="w-4 h-4 text-cinza-400" />
                            <span className="text-cinza-900 font-bold">
                              {metric.after}
                            </span>
                          </div>
                          <p className="text-verde text-xs font-semibold mt-1">
                            {metric.improvement}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Story sections */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-cinza-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-vermelho/10 text-vermelho text-xs flex items-center justify-center">
                            1
                          </span>
                          Desafio
                        </h4>
                        <p className="text-cinza-600 text-sm">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cinza-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-azul/10 text-azul text-xs flex items-center justify-center">
                            2
                          </span>
                          Solução
                        </h4>
                        <p className="text-cinza-600 text-sm">
                          {caseStudy.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-cinza-900 mb-2 flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-verde/10 text-verde text-xs flex items-center justify-center">
                            3
                          </span>
                          Resultados
                        </h4>
                        <p className="text-cinza-600 text-sm">
                          {caseStudy.results}
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-cinza-50 rounded-xl p-6 relative">
                      <Quote className="w-8 h-8 text-dourado/20 absolute top-4 left-4" />
                      <blockquote className="text-cinza-700 italic relative z-10 pl-6">
                        &ldquo;{caseStudy.quote}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cinza-900">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-h2 text-white mb-4">
              Quer ser o próximo caso de{" "}
              <span className="gradient-text">sucesso</span>?
            </h2>
            <p className="text-cinza-400 text-lg mb-8">
              Junte-se a centenas de médicos que já transformaram sua rotina com
              o DoctorAI.
            </p>
            <a
              href="https://buy.stripe.com/9B68wQbRa2NH4OJdLg2Ji0x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3"
            >
              Começar Agora - R$ 149/mês
              <TrendingUp className="w-5 h-5" />
            </a>
            <p className="text-cinza-500 text-sm mt-4">
              Garantia de 7 dias. Não gostou? Devolvemos seu dinheiro.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
