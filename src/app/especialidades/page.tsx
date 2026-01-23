import { Metadata } from "next";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Baby,
  Heart,
  Siren,
} from "lucide-react";
import { specialties } from "@/lib/specialties/data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DoctorAI para Especialidades Médicas | IA para Cada Área",
  description:
    "Descubra como o DoctorAI se adapta à sua especialidade médica. Pediatria, cardiologia, emergência e clínica geral - documentação automática personalizada.",
  keywords: [
    "ia médica especialidades",
    "software médico por especialidade",
    "prontuário automático especializado",
    "doctorai especialidades",
  ],
  openGraph: {
    title: "DoctorAI - IA Médica para Cada Especialidade",
    description:
      "Documentação automática adaptada para pediatras, cardiologistas, emergencistas e clínicos gerais.",
    type: "website",
    url: "https://teledocmedical.ai/especialidades",
  },
  alternates: {
    canonical: "/especialidades",
  },
};

// Mapeamento de ícones
const iconMap: Record<string, React.ReactNode> = {
  Baby: <Baby className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Siren: <Siren className="w-8 h-8" />,
  Stethoscope: <Stethoscope className="w-8 h-8" />,
};

// Mapeamento de cores
const colorMap: Record<string, string> = {
  azul: "bg-azul/10 text-azul border-azul/20",
  vermelho: "bg-vermelho/10 text-vermelho border-vermelho/20",
  verde: "bg-verde/10 text-verde border-verde/20",
  dourado: "bg-dourado/10 text-dourado border-dourado/20",
};

export default function EspecialidadesPage() {
  return (
    <>
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
              <Stethoscope className="w-5 h-5 text-dourado" />
              <span className="font-bold text-cinza-900">
                Doctor<span className="text-dourado">AI</span>
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
              <Stethoscope className="w-4 h-4" />
              Especialidades
            </div>
            <h1 className="text-h1 text-white mb-4">
              IA adaptada à sua{" "}
              <span className="gradient-text">especialidade</span>
            </h1>
            <p className="text-cinza-400 text-lg max-w-2xl mx-auto">
              O DoctorAI entende as particularidades de cada área médica.
              Documentação personalizada para o que você realmente precisa.
            </p>
          </div>
        </section>

        {/* Specialties Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-8">
              {specialties.map((specialty) => (
                <Link
                  key={specialty.slug}
                  href={`/especialidades/${specialty.slug}`}
                  className="bg-white rounded-2xl p-8 shadow-soft card-hover group border border-cinza-100"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${colorMap[specialty.color]}`}
                  >
                    {iconMap[specialty.icon]}
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-cinza-900 mb-2 group-hover:text-dourado transition-colors">
                    {specialty.name}
                  </h2>
                  <p className="text-cinza-600 mb-4">{specialty.description}</p>

                  {/* Use cases preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {specialty.useCases.slice(0, 3).map((useCase, index) => (
                      <span
                        key={index}
                        className="bg-cinza-100 text-cinza-600 px-3 py-1 rounded-full text-xs"
                      >
                        {useCase.title}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-cinza-100">
                    <div className="flex gap-4">
                      {specialty.stats.slice(0, 2).map((stat, index) => (
                        <div key={index}>
                          <p className="text-xl font-bold text-cinza-900">
                            {stat.value}
                          </p>
                          <p className="text-cinza-500 text-xs">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <span className="text-dourado flex items-center gap-1 font-medium group-hover:gap-2 transition-all">
                      Ver mais
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-h2 text-cinza-900 mb-4">
              Sua especialidade não está aqui?
            </h2>
            <p className="text-cinza-600 mb-8">
              O DoctorAI funciona para todas as especialidades médicas. O
              conhecimento abrangente da IA se adapta a qualquer contexto
              clínico.
            </p>
            <a
              href="https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold inline-flex items-center gap-2"
            >
              Experimentar Agora
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
