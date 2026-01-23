"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  ChevronLeft,
  Download,
  FileText,
  BookOpen,
  Video,
  CheckCircle,
  Mail,
  ArrowRight,
  Lock,
} from "lucide-react";
import Footer from "@/components/Footer";

// Dados dos recursos
const resources = [
  {
    id: "guia-ia-medica",
    title: "Guia Completo: IA na Documentação Médica",
    description:
      "E-book de 25 páginas explicando como a inteligência artificial está transformando a documentação clínica. Inclui comparativo de ferramentas e checklist de implementação.",
    type: "E-book PDF",
    icon: BookOpen,
    pages: 25,
    downloadCount: "2.500+",
    tags: ["IA Médica", "Documentação", "Guia"],
    color: "dourado",
  },
  {
    id: "template-soap",
    title: "Templates SOAP para Todas as Especialidades",
    description:
      "Pacote com 15 templates de prontuário SOAP otimizados para diferentes especialidades médicas. Pronto para usar ou adaptar ao seu estilo.",
    type: "Templates Word/PDF",
    icon: FileText,
    pages: 15,
    downloadCount: "4.200+",
    tags: ["Templates", "SOAP", "Prontuário"],
    color: "verde",
  },
  {
    id: "webinar-produtividade",
    title: "Webinar: Produtividade Médica com IA",
    description:
      "Gravação de 45 minutos do nosso webinar sobre como médicos estão economizando 2+ horas por dia com tecnologia. Inclui Q&A com especialistas.",
    type: "Vídeo Gravado",
    icon: Video,
    pages: 45,
    downloadCount: "1.800+",
    tags: ["Webinar", "Produtividade", "Vídeo"],
    color: "azul",
  },
];

// Mapeamento de cores
const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  dourado: {
    bg: "bg-dourado/10",
    text: "text-dourado",
    border: "border-dourado/20",
  },
  verde: {
    bg: "bg-verde/10",
    text: "text-verde",
    border: "border-verde/20",
  },
  azul: {
    bg: "bg-azul/10",
    text: "text-azul",
    border: "border-azul/20",
  },
};

// JSON-LD schema
const digitalDocumentSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: resources.map((resource, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "DigitalDocument",
      name: resource.title,
      description: resource.description,
      provider: {
        "@type": "Organization",
        name: "Teledoc Journey Medical",
      },
      isAccessibleForFree: true,
    },
  })),
};

export default function RecursosPage() {
  const [email, setEmail] = useState("");
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent, resourceId: string) => {
    e.preventDefault();
    // Simular envio (em produção, integrar com serviço de email)
    console.log(`Resource requested: ${resourceId}, Email: ${email}`);
    setSelectedResource(resourceId);
    setIsSubmitted(true);
  };

  return (
    <>
      <Script
        id="digital-document-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalDocumentSchema) }}
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
              <Download className="w-5 h-5 text-dourado" />
              <span className="font-bold text-cinza-900">
                <span className="text-dourado">Recursos</span> Gratuitos
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
              <Download className="w-4 h-4" />
              100% Gratuito
            </div>
            <h1 className="text-h1 text-white mb-4">
              Recursos para{" "}
              <span className="gradient-text">acelerar</span> sua prática
            </h1>
            <p className="text-cinza-400 text-lg max-w-2xl mx-auto">
              E-books, templates e webinars gratuitos para médicos que querem
              otimizar sua documentação clínica.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource) => {
                const Icon = resource.icon;
                const colors = colorMap[resource.color];

                return (
                  <div
                    key={resource.id}
                    className="bg-white rounded-2xl shadow-soft overflow-hidden border border-cinza-100"
                  >
                    {/* Header */}
                    <div className={`${colors.bg} p-6`}>
                      <div
                        className={`w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-4 ${colors.text}`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`text-xs font-medium ${colors.text} ${colors.bg} px-2 py-1 rounded-full`}
                      >
                        {resource.type}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-cinza-900 mb-2">
                        {resource.title}
                      </h2>
                      <p className="text-cinza-600 text-sm mb-4">
                        {resource.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-cinza-100 text-cinza-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-cinza-500 mb-6">
                        <span>
                          {resource.type.includes("Vídeo")
                            ? `${resource.pages} min`
                            : `${resource.pages} páginas`}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {resource.downloadCount} downloads
                        </span>
                      </div>

                      {/* Form */}
                      {isSubmitted && selectedResource === resource.id ? (
                        <div className="bg-verde/10 rounded-xl p-4 text-center">
                          <CheckCircle className="w-8 h-8 text-verde mx-auto mb-2" />
                          <p className="text-verde font-medium text-sm">
                            Enviado! Verifique seu email.
                          </p>
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => handleSubmit(e, resource.id)}
                          className="space-y-3"
                        >
                          <div className="relative">
                            <Mail className="w-5 h-5 text-cinza-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="email"
                              placeholder="seu@email.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-cinza-200 focus:border-dourado focus:outline-none text-sm"
                            />
                          </div>
                          <button
                            type="submit"
                            className="w-full btn-gradient text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
                          >
                            Baixar Gratuitamente
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lock className="w-5 h-5 text-verde" />
              <span className="text-verde font-medium">
                Seus dados estão seguros
              </span>
            </div>
            <p className="text-cinza-600 mb-8">
              Usamos seu email apenas para enviar o material solicitado e,
              opcionalmente, novidades sobre IA médica. Você pode cancelar a
              qualquer momento.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <p className="text-3xl font-bold text-cinza-900">8.500+</p>
                <p className="text-cinza-500 text-sm">Downloads totais</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cinza-900">4.8/5</p>
                <p className="text-cinza-500 text-sm">Avaliação média</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cinza-900">100%</p>
                <p className="text-cinza-500 text-sm">Gratuito</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-h2 text-cinza-900 text-center mb-12">
              Explore mais conteúdo
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/blog"
                className="bg-white rounded-xl p-6 shadow-soft border border-cinza-100 card-hover group"
              >
                <BookOpen className="w-8 h-8 text-dourado mb-4" />
                <h3 className="font-semibold text-cinza-900 mb-2 group-hover:text-dourado transition-colors">
                  Blog
                </h3>
                <p className="text-cinza-600 text-sm">
                  Artigos educativos sobre IA médica e produtividade.
                </p>
              </Link>

              <Link
                href="/especialidades"
                className="bg-white rounded-xl p-6 shadow-soft border border-cinza-100 card-hover group"
              >
                <FileText className="w-8 h-8 text-verde mb-4" />
                <h3 className="font-semibold text-cinza-900 mb-2 group-hover:text-dourado transition-colors">
                  Especialidades
                </h3>
                <p className="text-cinza-600 text-sm">
                  Como o DoctorAI se adapta à sua área de atuação.
                </p>
              </Link>

              <Link
                href="/calculadora"
                className="bg-white rounded-xl p-6 shadow-soft border border-cinza-100 card-hover group"
              >
                <Download className="w-8 h-8 text-azul mb-4" />
                <h3 className="font-semibold text-cinza-900 mb-2 group-hover:text-dourado transition-colors">
                  Calculadora ROI
                </h3>
                <p className="text-cinza-600 text-sm">
                  Descubra quanto você pode economizar com o DoctorAI.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cinza-900">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-h2 text-white mb-4">
              Pronto para ir além dos{" "}
              <span className="gradient-text">recursos</span>?
            </h2>
            <p className="text-cinza-400 text-lg mb-8">
              Experimente o DoctorAI e veja a transformação na prática.
            </p>
            <a
              href="https://buy.stripe.com/5kQaEY3kEgEx0ytcHc2Ji0w"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3"
            >
              Comecar Agora - R$ 97/mes
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
