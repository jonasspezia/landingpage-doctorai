import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ChevronLeft, Calculator, Clock, Shield, Award } from "lucide-react";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Calculadora ROI - Quanto Você Economiza com IA Médica | DoctorAI",
  description:
    "Calcule quanto tempo e dinheiro você pode economizar com o DoctorAI. Médicos economizam em média 40 horas por mês com documentação automática.",
  keywords: [
    "calculadora roi médico",
    "economia tempo médico",
    "documentação médica automática",
    "ia médica roi",
    "prontuário automático economia",
  ],
  openGraph: {
    title: "Calcule sua Economia com IA Médica | DoctorAI",
    description:
      "Descubra quanto tempo e dinheiro você pode economizar automatizando sua documentação clínica.",
    type: "website",
    url: "https://teledocmedical.ai/calculadora",
  },
  alternates: {
    canonical: "/calculadora",
  },
};

// JSON-LD HowTo Schema
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como Calcular o ROI do DoctorAI",
  description:
    "Passo a passo para calcular quanto você pode economizar com o DoctorAI",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Informe suas consultas diárias",
      text: "Ajuste o slider para indicar quantas consultas você realiza por dia.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Defina o tempo por prontuário",
      text: "Indique quantos minutos você gasta atualmente para documentar cada consulta.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Configure seus dias de trabalho",
      text: "Selecione quantos dias por semana você atende pacientes.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Informe o valor da sua hora",
      text: "Defina o valor médio da sua hora de trabalho para calcular a economia financeira.",
    },
  ],
  totalTime: "PT1M",
  tool: {
    "@type": "HowToTool",
    name: "Calculadora ROI DoctorAI",
  },
};

export default function CalculadoraPage() {
  return (
    <>
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

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
              <Calculator className="w-5 h-5 text-dourado" />
              <span className="font-bold text-cinza-900">
                Doctor<span className="text-dourado">AI</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-cinza-50">
        {/* Hero Section */}
        <section className="bg-cinza-900 py-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <div className="inline-flex items-center gap-2 bg-dourado/20 text-dourado px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              Ferramenta gratuita
            </div>
            <h1 className="text-h1 text-white mb-4">
              Quanto você pode{" "}
              <span className="gradient-text">economizar</span>?
            </h1>
            <p className="text-cinza-400 text-lg max-w-2xl mx-auto">
              Descubra em segundos quanto tempo e dinheiro você pode recuperar
              automatizando sua documentação clínica com o DoctorAI.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-5">
            <ROICalculator variant="full" />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-h2 text-center text-cinza-900 mb-12">
              Por que médicos escolhem o DoctorAI
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-dourado/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-dourado" />
                </div>
                <h3 className="text-lg font-semibold text-cinza-900 mb-2">
                  80% menos tempo
                </h3>
                <p className="text-cinza-600">
                  Documentação que levava 10 minutos agora leva apenas 2. Mais
                  tempo para pacientes, menos para burocracia.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-verde/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-verde" />
                </div>
                <h3 className="text-lg font-semibold text-cinza-900 mb-2">
                  100% LGPD
                </h3>
                <p className="text-cinza-600">
                  Dados processados em tempo real, sem armazenamento em
                  servidores externos. Você mantém o controle total.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-azul/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-azul" />
                </div>
                <h3 className="text-lg font-semibold text-cinza-900 mb-2">
                  Copiloto de IA
                </h3>
                <p className="text-cinza-600">
                  Inteligência artificial especializada em medicina para apoiar
                  sua prática clínica diária.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-h2 text-center text-cinza-900 mb-12">
              Perguntas sobre a calculadora
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-xl p-6 shadow-soft group">
                <summary className="font-semibold text-cinza-900 cursor-pointer list-none flex items-center justify-between">
                  Como a economia de 80% é calculada?
                  <span className="text-dourado group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-cinza-600 mt-4">
                  O DoctorAI automatiza a transcrição da consulta e gera o
                  prontuário SOAP em segundos. Estudos com nossos usuários
                  mostram redução média de 80% no tempo de documentação. Uma
                  tarefa de 10 minutos passa a levar cerca de 2 minutos.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-soft group">
                <summary className="font-semibold text-cinza-900 cursor-pointer list-none flex items-center justify-between">
                  O cálculo considera o investimento no DoctorAI?
                  <span className="text-dourado group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-cinza-600 mt-4">
                  Sim! O ROI (Retorno sobre Investimento) já desconta o valor da
                  assinatura mensal de R$ 149. Se o ROI mostra 500%, significa
                  que para cada R$ 1 investido, você recupera R$ 5 em valor de
                  tempo.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-soft group">
                <summary className="font-semibold text-cinza-900 cursor-pointer list-none flex items-center justify-between">
                  Como calcular o valor da minha hora?
                  <span className="text-dourado group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-cinza-600 mt-4">
                  Divida seu faturamento mensal pelo número de horas
                  trabalhadas. Por exemplo: se você fatura R$ 30.000 e trabalha
                  150 horas, sua hora vale R$ 200. Use esse valor para calcular
                  a economia real.
                </p>
              </details>

              <details className="bg-white rounded-xl p-6 shadow-soft group">
                <summary className="font-semibold text-cinza-900 cursor-pointer list-none flex items-center justify-between">
                  Posso atender mais pacientes com o tempo economizado?
                  <span className="text-dourado group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-cinza-600 mt-4">
                  Sim! A calculadora mostra quantas consultas adicionais são
                  possíveis com o tempo economizado. Muitos médicos optam por
                  usar esse tempo para melhorar qualidade de vida, enquanto
                  outros aproveitam para aumentar o faturamento.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-cinza-900">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-h2 text-white mb-4">
              Pronto para economizar{" "}
              <span className="gradient-text">tempo</span>?
            </h2>
            <p className="text-cinza-400 text-lg mb-8">
              Comece hoje e veja os resultados na primeira consulta.
            </p>
            <a
              href="https://buy.stripe.com/9B68wQbRa2NH4OJdLg2Ji0x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3 shadow-glow hover:shadow-glow-lg transition-all"
            >
              Começar Agora - R$ 149/mês
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
