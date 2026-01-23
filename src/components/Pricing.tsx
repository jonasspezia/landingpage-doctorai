"use client";

import { useState } from "react";
import { trackCTAClick } from "@/lib/analytics";
import {
  Check,
  Sparkles,
  MessageSquare,
  FileText,
  Mic,
  BookOpen,
  Headphones,
  Zap,
  Shield,
  Infinity,
  Tag
} from "lucide-react";

// Links de pagamento do Stripe - DoctorAI Ilimitado
const STRIPE_LINKS = {
  monthly: "https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u",
  yearly: "https://buy.stripe.com/eVqeVedZi1JDchbePk2Ji0v"
};

// Precos
const PRICES = {
  monthly: {
    value: 147,
    period: "mes",
    yearly_total: 1764
  },
  yearly: {
    value: 1470,
    monthly_equivalent: 122.5,
    period: "ano",
    savings: 294,
    months_free: 2
  }
};

const features = [
  {
    icon: MessageSquare,
    title: "Chat com IA Médica",
    description: "Converse e tire dúvidas clínicas 24/7"
  },
  {
    icon: FileText,
    title: "Prontuários SOAP",
    description: "Geração automática em segundos"
  },
  {
    icon: Mic,
    title: "Transcrição em Tempo Real",
    description: "Áudio de consultas convertido em texto"
  },
  {
    icon: BookOpen,
    title: "Base de Conhecimento",
    description: "Acesso à literatura médica atualizada"
  },
  {
    icon: Headphones,
    title: "Suporte Prioritário",
    description: "Atendimento dedicado por WhatsApp"
  },
  {
    icon: Infinity,
    title: "Uso Ilimitado",
    description: "Sem restrições de consultas ou mensagens"
  }
];

const benefits = [
  "Economize 2 horas por dia",
  "Documentação mais completa",
  "Menos erros em prontuários",
  "Foco total no paciente",
  "Atualizações automáticas",
  "Cancele quando quiser"
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const handleSubscribe = () => {
    const plan = isYearly ? "anual" : "mensal";
    trackCTAClick("pricing", `Assinar ${plan}`);
  };

  const currentLink = isYearly ? STRIPE_LINKS.yearly : STRIPE_LINKS.monthly;

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background - Single Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinza-50 via-white to-white" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 shadow-soft animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-dourado" />
            <span className="text-sm font-semibold text-cinza-700">Plano Único e Simples</span>
          </div>

          <h2 className="text-h2 text-preto mb-4 animate-fade-in-up delay-100">
            Invista na sua{" "}
            <span className="gradient-text">produtividade</span>
          </h2>

          <p className="text-lg text-cinza-500 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
            Um único plano com tudo incluso. Sem surpresas, sem taxas escondidas.
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-cinza-100 rounded-2xl animate-fade-in-up delay-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                !isYearly
                  ? "bg-white text-preto shadow-soft"
                  : "text-cinza-500 hover:text-cinza-700"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? "bg-white text-preto shadow-soft"
                  : "text-cinza-500 hover:text-cinza-700"
              }`}
            >
              Anual
              <span className="bg-verde/20 text-verde text-xs font-bold px-2 py-0.5 rounded-full">
                -2 MESES
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto pt-6">
          {/* Popular Badge - Outside card for visibility */}
          <div className="flex justify-center mb-[-22px] relative z-10 animate-fade-in-up delay-300">
            <div className="btn-gradient px-6 py-2 rounded-full text-white text-sm font-bold shadow-glow flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {isYearly ? "Melhor Valor" : "Mais Popular"}
            </div>
          </div>

          <div className="relative bg-white rounded-3xl shadow-elevated overflow-hidden card-hover animate-fade-in-up delay-300">
            {/* Gradient Border Top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dourado via-dourado-claro to-dourado" />

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Price */}
              <div className="p-8 md:p-12 flex flex-col justify-center border-b md:border-b-0 md:border-r border-cinza-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-preto mb-2">DoctorAI Ilimitado</h3>
                  <p className="text-cinza-500">Acesso completo a todas as funcionalidades</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {isYearly ? (
                    <>
                      {/* Yearly Price */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-cinza-500">R$</span>
                        <span className="text-6xl font-extrabold gradient-text">1.470</span>
                        <span className="text-cinza-500">/ano</span>
                      </div>
                      <p className="text-sm text-cinza-400 mt-2">
                        Equivale a <span className="font-semibold text-cinza-600">R$122,50/mes</span>
                      </p>

                      {/* Savings Badge */}
                      <div className="mt-4 inline-flex items-center gap-2 bg-verde/10 text-verde px-4 py-2 rounded-xl">
                        <Tag className="w-4 h-4" />
                        <span className="font-bold text-sm">Economia de R$294</span>
                        <span className="text-xs opacity-80">(2 meses gratis)</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Monthly Price */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-cinza-500">R$</span>
                        <span className="text-6xl font-extrabold gradient-text">147</span>
                        <span className="text-cinza-500">/mes</span>
                      </div>
                      <p className="text-sm text-cinza-400 mt-2">Cobrado mensalmente</p>

                      {/* Upsell to yearly */}
                      <button
                        onClick={() => setIsYearly(true)}
                        className="mt-4 inline-flex items-center gap-2 bg-dourado/10 text-dourado-escuro px-4 py-2 rounded-xl hover:bg-dourado/20 transition-colors"
                      >
                        <Tag className="w-4 h-4" />
                        <span className="font-semibold text-sm">Economize R$294 no plano anual</span>
                      </button>
                    </>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={currentLink}
                  onClick={handleSubscribe}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-glow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <Shield className="w-5 h-5" />
                  {isYearly ? "Assinar Anual" : "Assinar Mensal"}
                </a>

                {/* Trust */}
                <div className="flex items-center justify-center gap-4 mt-6 text-sm text-cinza-400">
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-verde" />
                    Pagamento seguro
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-verde" />
                    SSL
                  </span>
                </div>

                <p className="text-xs text-cinza-400 mt-4 text-center">
                  Cancele quando quiser. Sem multa, sem burocracia.
                </p>
              </div>

              {/* Right Side - Features */}
              <div className="p-8 md:p-12 bg-cinza-50/50">
                <h4 className="text-lg font-bold text-preto mb-6">Tudo incluso:</h4>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dourado/20 to-dourado/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-dourado" />
                      </div>
                      <div>
                        <p className="font-semibold text-cinza-700">{feature.title}</p>
                        <p className="text-sm text-cinza-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-in-up">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
              <Check className="w-5 h-5 text-verde flex-shrink-0" />
              <span className="text-sm font-medium text-cinza-700">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up">
          <h4 className="text-center text-lg font-bold text-preto mb-6">Comparativo de Planos</h4>
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-cinza-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-cinza-700"></th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-cinza-700">Mensal</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-dourado">
                    Anual
                    <span className="ml-2 bg-verde/20 text-verde text-xs px-2 py-0.5 rounded-full">
                      RECOMENDADO
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cinza-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-cinza-600">Valor mensal</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-cinza-700">R$147</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-verde">R$122,50</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-cinza-600">Total anual</td>
                  <td className="px-6 py-4 text-center text-sm text-cinza-500">R$1.764</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-cinza-700">R$1.470</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-cinza-600">Economia</td>
                  <td className="px-6 py-4 text-center text-sm text-cinza-400">-</td>
                  <td className="px-6 py-4 text-center text-sm font-bold text-verde">R$294 (2 meses)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-cinza-600">Todas as funcionalidades</td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-verde mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-verde mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-cinza-500 text-sm">
            Não ficou satisfeito? <span className="font-semibold text-cinza-700">Cancele a qualquer momento</span> sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
