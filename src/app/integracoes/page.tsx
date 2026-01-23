import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Copy,
  Clipboard,
  Monitor,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integrações | DoctorAI - Compatível com Qualquer Sistema",
  description:
    "O DoctorAI funciona com qualquer prontuário eletrônico. Gere prontuários SOAP e copie para seu sistema favorito. Sem integração técnica necessária.",
  keywords: [
    "integração prontuário eletrônico",
    "compatibilidade pep",
    "doctorai integração",
    "prontuário eletrônico ia",
    "sistema médico compatível",
  ],
  openGraph: {
    title: "Integrações | DoctorAI",
    description: "Compatível com qualquer prontuário eletrônico.",
    type: "website",
    url: "https://teledocmedical.ai/integracoes",
  },
  alternates: {
    canonical: "/integracoes",
  },
};

// Sistemas compatíveis (exemplos)
const compatibleSystems = [
  { name: "Tasy", category: "PEP Hospitalar" },
  { name: "MV Soul", category: "PEP Hospitalar" },
  { name: "Philips TOTVS", category: "PEP Hospitalar" },
  { name: "Wareline", category: "PEP Hospitalar" },
  { name: "iClinic", category: "Gestão de Clínicas" },
  { name: "Doctoralia", category: "Agendamento" },
  { name: "Shosp", category: "Gestão Hospitalar" },
  { name: "HiDoctor", category: "Gestão de Clínicas" },
  { name: "Amplimed", category: "PEP Ambulatorial" },
  { name: "Ninsaúde", category: "Gestão de Clínicas" },
  { name: "Feegow", category: "Gestão de Clínicas" },
  { name: "ProDoctor", category: "PEP" },
];

// Benefícios da abordagem universal
const benefits = [
  {
    icon: Zap,
    title: "Sem Espera por Integração",
    description:
      "Comece a usar imediatamente. Não precisa aguardar desenvolvimento de APIs ou aprovações de TI.",
  },
  {
    icon: Shield,
    title: "Independência Total",
    description:
      "Funciona mesmo se você trocar de sistema no futuro. Sua produtividade não fica presa a nenhum fornecedor.",
  },
  {
    icon: Clock,
    title: "Atualização Instantânea",
    description:
      "Novas funcionalidades do DoctorAI ficam disponíveis imediatamente, sem depender de atualizações do seu PEP.",
  },
  {
    icon: Globe,
    title: "Funciona em Qualquer Lugar",
    description:
      "Consultório, hospital, telemedicina, plantão. Use o DoctorAI onde estiver, em qualquer sistema.",
  },
];

// Como funciona
const howItWorks = [
  {
    step: 1,
    title: "Transcreva a Consulta",
    description:
      "Ative o microfone e converse normalmente com seu paciente. O DoctorAI transcreve em tempo real.",
  },
  {
    step: 2,
    title: "Gere o Prontuário SOAP",
    description:
      "Com um clique, a IA organiza a transcrição no formato SOAP estruturado e editável.",
  },
  {
    step: 3,
    title: "Copie para seu Sistema",
    description:
      "Use o botão de copiar e cole no campo de evolução do seu prontuário eletrônico. Pronto!",
  },
];

// JSON-LD schema
const integrationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DoctorAI",
  applicationCategory: "MedicalApplication",
  operatingSystem: "Web Browser",
  description:
    "IA médica compatível com qualquer prontuário eletrônico através de copiar e colar universal.",
  featureList: [
    "Compatível com qualquer PEP",
    "Funciona no navegador",
    "Sem integração técnica necessária",
    "Transcrição em tempo real",
    "Geração automática de SOAP",
  ],
};

export default function IntegracoesPage() {
  return (
    <>
      <Script
        id="integration-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(integrationSchema) }}
      />

      <Header variant="light" />

      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-cinza-900 to-cinza-800 py-16">
          <div className="max-w-4xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cinza-400 hover:text-dourado transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar para o início
            </Link>
            <div className="inline-flex items-center gap-2 bg-dourado/20 text-dourado px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Compatibilidade Universal
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Funciona com{" "}
              <span className="gradient-text">qualquer sistema</span>
            </h1>
            <p className="text-cinza-400 text-lg max-w-2xl">
              O DoctorAI foi projetado para ser universal. Gere prontuários
              formatados e cole em qualquer prontuário eletrônico — sem
              integração técnica, sem espera, sem complicação.
            </p>
          </div>
        </div>

        {/* How it Works */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-cinza-900 text-center mb-12">
              Como funciona na prática
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-dourado/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-dourado">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-semibold text-cinza-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cinza-600 text-sm">{item.description}</p>
                  {index < howItWorks.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-cinza-300 mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Visual Demo */}
            <div className="mt-12 bg-cinza-50 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="bg-white rounded-xl shadow-soft p-4 border border-cinza-100">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-cinza-100">
                      <div className="w-3 h-3 rounded-full bg-vermelho" />
                      <div className="w-3 h-3 rounded-full bg-dourado" />
                      <div className="w-3 h-3 rounded-full bg-verde" />
                      <span className="text-xs text-cinza-400 ml-2">
                        DoctorAI - Prontuário SOAP
                      </span>
                    </div>
                    <div className="text-xs text-cinza-600 space-y-2">
                      <p>
                        <strong className="text-cinza-800">S:</strong> Paciente
                        refere dor epigástrica há 3 dias...
                      </p>
                      <p>
                        <strong className="text-cinza-800">O:</strong> PA
                        120/80, FC 72, abdome doloroso à palpação...
                      </p>
                      <p>
                        <strong className="text-cinza-800">A:</strong> Hipótese
                        de gastrite aguda...
                      </p>
                      <p>
                        <strong className="text-cinza-800">P:</strong> Omeprazol
                        20mg, dieta branda...
                      </p>
                    </div>
                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-dourado text-white py-2 rounded-lg text-sm font-medium">
                      <Copy className="w-4 h-4" />
                      Copiar Prontuário
                    </button>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-dourado rotate-90 md:rotate-0" />

                <div className="flex-1">
                  <div className="bg-white rounded-xl shadow-soft p-4 border border-cinza-100">
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-cinza-100">
                      <Clipboard className="w-4 h-4 text-cinza-400" />
                      <span className="text-xs text-cinza-400">
                        Seu Prontuário Eletrônico
                      </span>
                    </div>
                    <div className="bg-cinza-50 rounded-lg p-3 min-h-[120px] border-2 border-dashed border-cinza-200 flex items-center justify-center">
                      <p className="text-cinza-400 text-sm text-center">
                        Cole aqui com
                        <br />
                        <kbd className="bg-cinza-200 px-2 py-1 rounded text-xs">
                          Ctrl+V
                        </kbd>
                      </p>
                    </div>
                    <p className="mt-3 text-xs text-verde flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      Funciona em qualquer sistema
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compatible Systems */}
        <section className="py-16 bg-cinza-50">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-cinza-900 text-center mb-4">
              Sistemas Compatíveis
            </h2>
            <p className="text-cinza-600 text-center mb-8">
              O DoctorAI funciona com qualquer sistema que aceite entrada de
              texto. Aqui estão alguns dos mais usados no Brasil:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {compatibleSystems.map((system, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-soft border border-cinza-100"
                >
                  <Check className="w-5 h-5 text-verde mx-auto mb-2" />
                  <p className="font-medium text-cinza-900 text-sm">
                    {system.name}
                  </p>
                  <p className="text-cinza-500 text-xs">{system.category}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-cinza-500 text-sm mt-6">
              Não encontrou seu sistema? Se ele aceita colar texto, funciona com
              o DoctorAI!
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-cinza-900 text-center mb-12">
              Por que a abordagem universal é melhor
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-6 bg-cinza-50 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-xl bg-dourado/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-dourado" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cinza-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-cinza-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Devices */}
        <section className="py-16 bg-cinza-50">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-cinza-900 text-center mb-8">
              Acesse de qualquer dispositivo
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <Monitor className="w-12 h-12 text-azul mx-auto mb-4" />
                <h3 className="font-semibold text-cinza-900 mb-2">
                  Computador
                </h3>
                <p className="text-cinza-600 text-sm">
                  Ideal para o consultório. Tela grande para visualizar e editar
                  prontuários.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <Smartphone className="w-12 h-12 text-verde mx-auto mb-4" />
                <h3 className="font-semibold text-cinza-900 mb-2">
                  Tablet / iPad
                </h3>
                <p className="text-cinza-600 text-sm">
                  Perfeito para rondas hospitalares e atendimentos em
                  movimento.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-soft">
                <Smartphone className="w-12 h-12 text-dourado mx-auto mb-4" />
                <h3 className="font-semibold text-cinza-900 mb-2">Celular</h3>
                <p className="text-cinza-600 text-sm">
                  Para teleconsultas e quando você precisa documentar em
                  qualquer lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-cinza-900">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para simplificar sua{" "}
              <span className="gradient-text">documentação</span>?
            </h2>
            <p className="text-cinza-400 text-lg mb-8">
              Comece agora e veja como é fácil gerar prontuários em segundos.
            </p>
            <a
              href="https://buy.stripe.com/5kQaEY3kEgEx0ytcHc2Ji0w"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-3"
            >
              Começar Agora - R$ 97/mês
              <ChevronRight className="w-5 h-5" />
            </a>
            <p className="text-cinza-500 text-sm mt-4">
              Garantia de 7 dias. Funciona com qualquer sistema.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
