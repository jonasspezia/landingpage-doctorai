"use client";

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
  Image,
  Search,
  Key,
  Code,
  Wrench,
  Users,
  Crown,
  Building2,
  Mail
} from "lucide-react";

// Links de pagamento do Stripe
const STRIPE_LINKS = {
  essencial: "https://buy.stripe.com/5kQaEY3kEgEx0ytcHc2Ji0w",
  completo: "https://buy.stripe.com/9B68wQbRa2NH4OJdLg2Ji0x"
};

// Planos
const PLANS = {
  essencial: {
    name: "Essencial",
    price: 97,
    description: "Para medicos que querem otimizar sua rotina",
    icon: Zap,
    popular: true,
    features: [
      { icon: MessageSquare, text: "Chat com IA medica ilimitado" },
      { icon: FileText, text: "Prontuarios SOAP automaticos" },
      { icon: Mic, text: "Transcricao em tempo real" },
      { icon: Image, text: "Upload de imagens e exames" },
      { icon: Search, text: "Pesquisa web integrada" },
      { icon: Headphones, text: "Suporte por email" }
    ]
  },
  completo: {
    name: "Completo",
    price: 149,
    description: "Todos os recursos para maxima produtividade",
    icon: Crown,
    popular: false,
    features: [
      { icon: Check, text: "Tudo do plano Essencial" },
      { icon: Key, text: "API Keys personalizadas" },
      { icon: Code, text: "Code Interpreter avancado" },
      { icon: Wrench, text: "Ferramentas personalizadas" },
      { icon: Users, text: "Canais de colaboracao" },
      { icon: Headphones, text: "Suporte prioritario" }
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: null,
    description: "Para faculdades, clinicas e planos de saude",
    icon: Building2,
    popular: false,
    features: [
      { icon: Check, text: "Tudo do plano Completo" },
      { icon: Users, text: "100+ usuarios" },
      { icon: Shield, text: "SLA garantido 99.9%" },
      { icon: BookOpen, text: "Treinamento personalizado" },
      { icon: Wrench, text: "Integracoes customizadas" },
      { icon: Headphones, text: "Gerente de conta dedicado" }
    ]
  }
};

const benefits = [
  "Economize 2 horas por dia",
  "Documentacao mais completa",
  "Menos erros em prontuarios",
  "Foco total no paciente",
  "Atualizacoes automaticas",
  "Cancele quando quiser"
];

export default function Pricing() {
  const handleSubscribe = (plan: "essencial" | "completo" | "enterprise") => {
    trackCTAClick("pricing", `Assinar ${plan}`);
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background - Single Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-cinza-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 shadow-soft animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-dourado" />
            <span className="text-sm font-semibold text-cinza-700">Escolha seu plano</span>
          </div>

          <h2 className="text-h2 text-preto mb-4 animate-fade-in-up delay-100">
            Invista na sua{" "}
            <span className="gradient-text">produtividade</span>
          </h2>

          <p className="text-lg text-cinza-500 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Planos pensados para diferentes necessidades. Sem surpresas, sem taxas escondidas.
          </p>
        </div>

        {/* Pricing Cards - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Essencial Plan */}
          <div className="relative animate-fade-in-up delay-200">
            {/* Popular Badge */}
            <div className="flex justify-center mb-[-22px] relative z-10">
              <div className="btn-gradient px-6 py-2 rounded-full text-white text-sm font-bold shadow-glow flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Mais Popular
              </div>
            </div>

            <div className="relative bg-white rounded-3xl shadow-elevated overflow-hidden card-hover h-full">
              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dourado via-dourado-claro to-dourado" />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dourado/20 to-dourado/10 flex items-center justify-center">
                    <PLANS.essencial.icon className="w-5 h-5 text-dourado" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-preto">{PLANS.essencial.name}</h3>
                    <p className="text-xs text-cinza-500">{PLANS.essencial.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-cinza-500">R$</span>
                    <span className="text-4xl font-extrabold gradient-text">{PLANS.essencial.price}</span>
                    <span className="text-cinza-500">/mes</span>
                  </div>
                  <p className="text-xs text-cinza-400 mt-1">Cobrado mensalmente</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {PLANS.essencial.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <feature.icon className="w-4 h-4 text-dourado flex-shrink-0" />
                      <span className="text-sm text-cinza-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={STRIPE_LINKS.essencial}
                  onClick={() => handleSubscribe("essencial")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-gradient text-white w-full py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-glow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                >
                  <Shield className="w-4 h-4" />
                  Assinar Essencial
                </a>
              </div>
            </div>
          </div>

          {/* Completo Plan */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="h-[22px]" /> {/* Spacer to align with Essencial card */}

            <div className="relative bg-white rounded-3xl shadow-soft overflow-hidden card-hover h-full border-2 border-cinza-200">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cinza-200 to-cinza-100 flex items-center justify-center">
                    <PLANS.completo.icon className="w-5 h-5 text-cinza-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-preto">{PLANS.completo.name}</h3>
                    <p className="text-xs text-cinza-500">{PLANS.completo.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-cinza-500">R$</span>
                    <span className="text-4xl font-extrabold text-preto">{PLANS.completo.price}</span>
                    <span className="text-cinza-500">/mes</span>
                  </div>
                  <p className="text-xs text-cinza-400 mt-1">Cobrado mensalmente</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {PLANS.completo.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <feature.icon className="w-4 h-4 text-cinza-600 flex-shrink-0" />
                      <span className="text-sm text-cinza-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={STRIPE_LINKS.completo}
                  onClick={() => handleSubscribe("completo")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-cinza-900 hover:bg-preto text-white w-full py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <Crown className="w-4 h-4" />
                  Assinar Completo
                </a>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative animate-fade-in-up delay-400">
            <div className="h-[22px]" /> {/* Spacer to align */}

            <div className="relative bg-gradient-to-br from-cinza-900 to-cinza-800 rounded-3xl shadow-elevated overflow-hidden card-hover h-full">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <PLANS.enterprise.icon className="w-5 h-5 text-dourado" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{PLANS.enterprise.name}</h3>
                    <p className="text-xs text-cinza-400">{PLANS.enterprise.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-white">Sob consulta</span>
                  </div>
                  <p className="text-xs text-cinza-400 mt-1">Precos personalizados por volume</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {PLANS.enterprise.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <feature.icon className="w-4 h-4 text-dourado flex-shrink-0" />
                      <span className="text-sm text-cinza-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Link to form */}
                <a
                  href="mailto:teledoc@teledocmedical.com?subject=DoctorAI Enterprise - Solicitar Orcamento&body=Ola! Gostaria de solicitar um orcamento para o plano Enterprise do DoctorAI.%0A%0ANome da instituicao:%0ATipo (faculdade/clinica/plano de saude):%0ANumero de usuarios estimado:%0AContato:"
                  onClick={() => handleSubscribe("enterprise")}
                  className="group bg-dourado hover:bg-dourado-claro text-preto w-full py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Solicitar Orcamento
                </a>
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
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up">
          <h4 className="text-center text-lg font-bold text-preto mb-6">Comparativo de Planos</h4>
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-cinza-50">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-cinza-700">Recurso</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-dourado">
                    Essencial
                    <span className="ml-1 bg-verde/20 text-verde text-xs px-2 py-0.5 rounded-full">
                      POPULAR
                    </span>
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-cinza-700">Completo</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-cinza-700">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cinza-100">
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Valor mensal</td>
                  <td className="px-4 py-3 text-center text-sm font-bold text-dourado">R$97</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-cinza-700">R$149</td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-cinza-700">Sob consulta</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Usuarios</td>
                  <td className="px-4 py-3 text-center text-sm text-cinza-600">1</td>
                  <td className="px-4 py-3 text-center text-sm text-cinza-600">1</td>
                  <td className="px-4 py-3 text-center text-sm text-cinza-600">100+</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Chat IA ilimitado</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Prontuarios SOAP</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Upload de imagens</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Web Search</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">API Keys</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Code Interpreter</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Ferramentas avancadas</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">SLA garantido</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-cinza-600">Gerente de conta</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center text-cinza-400">-</td>
                  <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-verde mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center animate-fade-in-up">
          <p className="text-cinza-500 text-sm">
            Nao ficou satisfeito? <span className="font-semibold text-cinza-700">Cancele a qualquer momento</span> sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
