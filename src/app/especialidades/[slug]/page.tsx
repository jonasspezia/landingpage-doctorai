import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Stethoscope,
  Baby,
  Heart,
  Siren,
  Quote,
} from "lucide-react";
import { specialties, getSpecialtyBySlug } from "@/lib/specialties/data";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Gerar rotas estáticas
export async function generateStaticParams() {
  return specialties.map((specialty) => ({
    slug: specialty.slug,
  }));
}

// Gerar metadata dinâmico
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    return {
      title: "Especialidade não encontrada | DoctorAI",
    };
  }

  return {
    title: `${specialty.title} - IA Médica Especializada | DoctorAI`,
    description: specialty.metaDescription,
    keywords: specialty.keywords,
    openGraph: {
      title: specialty.title,
      description: specialty.metaDescription,
      type: "website",
      url: `https://teledocmedical.ai/especialidades/${specialty.slug}`,
    },
    alternates: {
      canonical: `/especialidades/${specialty.slug}`,
    },
  };
}

// Mapeamento de ícones
const iconMap: Record<string, React.ReactNode> = {
  Baby: <Baby className="w-10 h-10" />,
  Heart: <Heart className="w-10 h-10" />,
  Siren: <Siren className="w-10 h-10" />,
  Stethoscope: <Stethoscope className="w-10 h-10" />,
};

// Mapeamento de cores para bg
const colorBgMap: Record<string, string> = {
  azul: "bg-azul/10",
  vermelho: "bg-vermelho/10",
  verde: "bg-verde/10",
  dourado: "bg-dourado/10",
};

// Mapeamento de cores para texto
const colorTextMap: Record<string, string> = {
  azul: "text-azul",
  vermelho: "text-vermelho",
  verde: "text-verde",
  dourado: "text-dourado",
};

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  // JSON-LD schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: specialty.title,
    description: specialty.description,
    provider: {
      "@type": "Organization",
      name: "Teledoc Journey Medical",
    },
    areaServed: "BR",
    serviceType: "Medical Documentation Software",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: specialty.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
        name: "Especialidades",
        item: "https://teledocmedical.ai/especialidades",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: specialty.name,
        item: `https://teledocmedical.ai/especialidades/${specialty.slug}`,
      },
    ],
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-specialty-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-specialty-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-white border-b border-cinza-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-5 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/especialidades"
              className="flex items-center gap-2 text-cinza-600 hover:text-cinza-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Especialidades</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className={`${colorTextMap[specialty.color]}`}>
                {iconMap[specialty.icon]}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-cinza-900 py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Content */}
              <div className="flex-1">
                <div
                  className={`inline-flex items-center gap-2 ${colorBgMap[specialty.color]} ${colorTextMap[specialty.color]} px-4 py-2 rounded-full text-sm font-medium mb-6`}
                >
                  {iconMap[specialty.icon]}
                  {specialty.name}
                </div>

                <h1 className="text-h1 text-white mb-4">
                  {specialty.hero.headline}
                </h1>

                <p className="text-cinza-400 text-lg mb-8">
                  {specialty.hero.subheadline}
                </p>

                <a
                  href="https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
                >
                  Começar Agora
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>

              {/* Pain Points */}
              <div className="flex-1 bg-cinza-800 rounded-2xl p-8">
                <h3 className="text-white font-semibold mb-4">
                  Desafios que você enfrenta:
                </h3>
                <ul className="space-y-3">
                  {specialty.hero.painPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-cinza-400"
                    >
                      <span className="text-vermelho mt-1">✕</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-8 border-b border-cinza-100">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-3 gap-8">
              {specialty.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p
                    className={`text-3xl md:text-4xl font-bold ${colorTextMap[specialty.color]}`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-cinza-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-cinza-50">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-h2 text-cinza-900 text-center mb-12">
              Como o DoctorAI ajuda na {specialty.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {specialty.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft border border-cinza-100"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg ${colorBgMap[specialty.color]} flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className={`w-5 h-5 ${colorTextMap[specialty.color]}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cinza-900 mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-cinza-600 text-sm">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="bg-cinza-900 rounded-2xl p-8 md:p-12 relative">
              <Quote className="w-12 h-12 text-dourado/20 absolute top-8 left-8" />

              <blockquote className="text-xl md:text-2xl text-white font-medium mb-6 relative z-10">
                &ldquo;{specialty.testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cinza-700 flex items-center justify-center text-white font-bold">
                  {specialty.testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {specialty.testimonial.name}
                  </p>
                  <p className="text-cinza-400 text-sm">
                    {specialty.testimonial.role} • {specialty.testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-cinza-50">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-h2 text-cinza-900 text-center mb-12">
              Perguntas frequentes sobre DoctorAI para {specialty.name}
            </h2>

            <div className="space-y-4">
              {specialty.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft group"
                >
                  <summary className="font-semibold text-cinza-900 cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="text-dourado group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-cinza-600 mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-cinza-900">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-h2 text-white mb-4">
              Pronto para transformar sua{" "}
              <span className="gradient-text">{specialty.name.toLowerCase()}</span>?
            </h2>
            <p className="text-cinza-400 text-lg mb-8">
              Junte-se a centenas de{" "}
              {specialty.name === "Clínica Geral" ? "clínicos" : specialty.name.toLowerCase().replace("ia", "istas").replace("ência", "istas")} que já economizam horas por dia.
            </p>
            <a
              href="https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3"
            >
              Começar Agora - R$ 147/mês
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-cinza-500 text-sm mt-4">
              Cancele quando quiser. Sem fidelidade.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
