"use client";

import { useState } from "react";
import { trackCTAClick } from "@/lib/analytics";
import {
  Check,
  MessageSquare,
  FileText,
  Mic,
  BookOpen,
  Headphones,
  Zap,
  Shield,
  Image,
  Search,
  Key,
  Code,
  Wrench,
  Users,
  Crown,
  Building2,
  Mail,
  ArrowRight
} from "lucide-react";

// Links de pagamento do Stripe
const STRIPE_LINKS = {
  completo: "https://buy.stripe.com/9B68wQbRa2NH4OJdLg2Ji0x",
  completoAnual: "https://buy.stripe.com/fZu8wQdZi9c5epjdLg2Ji0D"
};

// Planos
const PLANS = {
  gratuito: {
    name: "Gratuito",
    price: 0,
    description: "Para conhecer a plataforma",
    icon: Zap,
    cta: "Começar Grátis",
    ctaStyle: "secondary",
    features: [
      { icon: MessageSquare, text: "50 consultas por mês", included: true },
      { icon: BookOpen, text: "Citações de PubMed e SciELO", included: true },
      { icon: FileText, text: "Prontuários SOAP básicos", included: true },
      { icon: Search, text: "Pesquisa em literatura médica", included: true },
      { icon: Headphones, text: "Suporte por email", included: true },
      { icon: Mic, text: "Transcrição em tempo real", included: false },
      { icon: Image, text: "Upload de imagens", included: false }
    ]
  },
  completo: {
    name: "Completo",
    priceMonthly: 149,
    priceAnnual: 1430,
    description: "Acesso total e ilimitado ao DoctorAI",
    icon: Crown,
    cta: "Assinar Completo",
    ctaStyle: "primary",
    popular: true,
    features: [
      { icon: MessageSquare, text: "Consultas ilimitadas", included: true },
      { icon: BookOpen, text: "Citações completas com abstract", included: true },
      { icon: FileText, text: "Prontuários SOAP avançados", included: true },
      { icon: Mic, text: "Transcrição em tempo real", included: true },
      { icon: Image, text: "Upload de imagens e exames", included: true },
      { icon: Search, text: "DeepConsult (pesquisa profunda)", included: true },
      { icon: Code, text: "API de integração", included: true },
      { icon: Headphones, text: "Suporte prioritário", included: true }
    ]
  },
  enterprise: {
    name: "Institucional",
    price: null,
    description: "Para hospitais, clínicas e faculdades",
    icon: Building2,
    cta: "Falar com Comercial",
    ctaStyle: "dark",
    features: [
      { icon: Check, text: "Tudo do plano Completo", included: true },
      { icon: Users, text: "Usuários ilimitados", included: true },
      { icon: Shield, text: "SLA garantido 99.9%", included: true },
      { icon: BookOpen, text: "Treinamento da equipe", included: true },
      { icon: Wrench, text: "Integrações com PEP/EMR", included: true },
      { icon: Key, text: "API dedicada", included: true },
      { icon: Headphones, text: "Gerente de conta dedicado", included: true }
    ]
  }
};

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const isAnnual = billingCycle === "annual";

  const handleSubscribe = (plan: string) => {
    trackCTAClick("pricing", `Assinar ${plan}`);
  };

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cinza-50/50 to-white" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <Crown className="w-4 h-4 text-dourado" />
            <span className="text-sm font-medium text-cinza-700">Planos</span>
          </div>

          <h2 className="text-h2 text-preto mb-4">
            Escolha o Plano{" "}
            <span className="gradient-text">Ideal para Você</span>
          </h2>

          <p className="text-lg text-cinza-500 max-w-2xl mx-auto">
            Comece gratuitamente e evolua conforme suas necessidades.
            Sem compromisso, cancele quando quiser.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-cinza-100 p-1 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-white text-preto shadow-soft"
                  : "text-cinza-500 hover:text-cinza-700"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-white text-preto shadow-soft"
                  : "text-cinza-500 hover:text-cinza-700"
              }`}
            >
              Anual
              <span className="ml-1.5 text-xs font-semibold text-verde">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Gratuito */}
          <div className="bg-white rounded-2xl p-6 shadow-soft border border-cinza-100 hover:border-cinza-200 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cinza-100 flex items-center justify-center">
                <PLANS.gratuito.icon className="w-5 h-5 text-cinza-600" />
              </div>
              <div>
                <h3 className="font-semibold text-preto">{PLANS.gratuito.name}</h3>
                <p className="text-xs text-cinza-500">{PLANS.gratuito.description}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-preto">R$0</span>
                <span className="text-cinza-500">/mês</span>
              </div>
              <p className="text-xs text-cinza-400 mt-1">Para sempre</p>
            </div>

            <div className="space-y-3 mb-6">
              {PLANS.gratuito.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  {feature.included ? (
                    <Check className="w-4 h-4 text-verde flex-shrink-0" />
                  ) : (
                    <span className="w-4 h-4 text-cinza-300 flex-shrink-0">—</span>
                  )}
                  <span className={`text-sm ${feature.included ? 'text-cinza-700' : 'text-cinza-400'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="https://doctorai.teledocmedical.ai"
              onClick={() => handleSubscribe("gratuito")}
              className="block w-full py-3 px-4 rounded-xl font-medium text-center border-2 border-cinza-200 text-cinza-700 hover:border-cinza-300 hover:bg-cinza-50 transition-colors"
            >
              {PLANS.gratuito.cta}
            </a>
          </div>

          {/* Completo - Destacado */}
          <div className="relative bg-white rounded-2xl p-6 shadow-elevated border-2 border-dourado/30">
            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-dourado text-white text-xs font-medium px-3 py-1 rounded-full">
                {isAnnual ? "20% de desconto" : "Recomendado"}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-dourado/10 flex items-center justify-center">
                <PLANS.completo.icon className="w-5 h-5 text-dourado" />
              </div>
              <div>
                <h3 className="font-semibold text-preto">{PLANS.completo.name}</h3>
                <p className="text-xs text-cinza-500">{PLANS.completo.description}</p>
              </div>
            </div>

            <div className="mb-6">
              {isAnnual ? (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-cinza-500">R$</span>
                    <span className="text-3xl font-bold gradient-text">1.430</span>
                    <span className="text-cinza-500">/ano</span>
                  </div>
                  <p className="text-xs text-cinza-400 mt-1">
                    <span className="line-through">R$1.788/ano</span>
                    {" · "}Equivale a R$119/mês
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-cinza-500">R$</span>
                    <span className="text-3xl font-bold gradient-text">{PLANS.completo.priceMonthly}</span>
                    <span className="text-cinza-500">/mês</span>
                  </div>
                  <p className="text-xs text-cinza-400 mt-1">Cobrado mensalmente</p>
                </>
              )}
            </div>

            <div className="space-y-3 mb-6">
              {PLANS.completo.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dourado flex-shrink-0" />
                  <span className="text-sm text-cinza-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <a
              href={isAnnual ? STRIPE_LINKS.completoAnual : STRIPE_LINKS.completo}
              onClick={() => handleSubscribe(isAnnual ? "completo-anual" : "completo")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-center btn-gradient text-white shadow-soft hover:shadow-elevated transition-all"
            >
              {PLANS.completo.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-cinza-900 rounded-2xl p-6 shadow-elevated">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <PLANS.enterprise.icon className="w-5 h-5 text-dourado" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{PLANS.enterprise.name}</h3>
                <p className="text-xs text-cinza-400">{PLANS.enterprise.description}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">Sob consulta</span>
              </div>
              <p className="text-xs text-cinza-400 mt-1">Preço por volume de usuários</p>
            </div>

            <div className="space-y-3 mb-6">
              {PLANS.enterprise.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-dourado flex-shrink-0" />
                  <span className="text-sm text-cinza-300">{feature.text}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:comercial@teledocmedical.ai?subject=DoctorAI Institucional - Solicitar Proposta"
              onClick={() => handleSubscribe("enterprise")}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-center bg-white text-cinza-900 hover:bg-cinza-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {PLANS.enterprise.cta}
            </a>
          </div>
        </div>

        {/* Garantia */}
        <div className="mt-12 text-center">
          <p className="text-sm text-cinza-500">
            Não ficou satisfeito?{" "}
            <span className="font-medium text-cinza-700">Cancele a qualquer momento</span>, sem burocracia.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-cinza-100 rounded-xl max-w-2xl mx-auto">
          <p className="text-xs text-cinza-500 text-center">
            <strong>Nota:</strong> O DoctorAI é uma ferramenta de apoio à decisão clínica.
            Não substitui o julgamento profissional do médico ou a avaliação presencial do paciente.
          </p>
        </div>
      </div>
    </section>
  );
}
