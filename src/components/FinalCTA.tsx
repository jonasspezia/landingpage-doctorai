"use client";

import { trackCTAClick } from "@/lib/analytics";
import { ArrowRight, Sparkles, Check, Clock, Shield, Zap, CreditCard, Crown } from "lucide-react";

// Links de pagamento do Stripe - Planos para médicos individuais
const STRIPE_LINKS = {
  essencial: "https://buy.stripe.com/5kQaEY3kEgEx0ytcHc2Ji0w",
  completo: "https://buy.stripe.com/9B68wQbRa2NH4OJdLg2Ji0x"
};

export default function FinalCTA() {
  const handleSubscribeEssencial = () => {
    trackCTAClick("final_cta", "Assinar Essencial R$97");
  };

  const handleSubscribeCompleto = () => {
    trackCTAClick("final_cta", "Assinar Completo R$149");
  };

  const handleTryFree = () => {
    trackCTAClick("final_cta", "Testar Grátis");
  };

  const benefits = [
    { icon: Clock, text: "Economize 2h/dia" },
    { icon: Shield, text: "100% seguro" },
    { icon: Zap, text: "Pronto em 2 min" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background - Single Layer */}
      <div className="absolute inset-0 bg-cinza-900" />

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-dark px-5 py-2.5 rounded-full mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-dourado" />
          <span className="text-sm font-medium text-white">Seu Copiloto Médico de IA</span>
        </div>

        {/* Headline */}
        <h2 className="text-h2 text-white mb-6 animate-fade-in-up delay-100">
          Pronto para ter uma{" "}
          <span className="gradient-text">IA médica</span> ao seu lado?
        </h2>

        <p className="text-lg md:text-xl text-cinza-400 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Converse com a IA, tire dúvidas clínicas e economize 2 horas por dia em documentação
        </p>

        {/* Price Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-200">
          {/* Essencial - Popular */}
          <div className="relative glass-dark rounded-2xl p-6 border border-dourado/30 w-full sm:w-auto">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-verde text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Zap className="w-3 h-3" />
                MAIS POPULAR
              </span>
            </div>
            <p className="text-cinza-400 text-sm mb-1">Essencial</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-extrabold gradient-text">R$97</span>
              <span className="text-cinza-400 text-sm">/mês</span>
            </div>
            <p className="text-cinza-500 text-xs mt-1">Chat IA, SOAP, Upload, Web Search</p>
          </div>

          {/* Completo */}
          <div className="glass-dark rounded-2xl p-6 border border-cinza-700 w-full sm:w-auto">
            <p className="text-cinza-400 text-sm mb-1">Completo</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-extrabold text-white">R$149</span>
              <span className="text-cinza-400 text-sm">/mês</span>
            </div>
            <p className="text-cinza-500 text-xs mt-1">+ Code Interpreter, Tools, Canais</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in-up delay-300">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-cinza-300">
              <div className="w-8 h-8 rounded-lg bg-verde/20 flex items-center justify-center">
                <benefit.icon className="w-4 h-4 text-verde" />
              </div>
              <span className="text-sm font-medium">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up delay-300">
          {/* Primary CTAs - Both Plans */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={STRIPE_LINKS.essencial}
              onClick={handleSubscribeEssencial}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 btn-gradient text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-glow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            >
              <CreditCard className="w-5 h-5" />
              Assinar Essencial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={STRIPE_LINKS.completo}
              onClick={handleSubscribeCompleto}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-cinza-800 hover:bg-cinza-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <Crown className="w-5 h-5" />
              Assinar Completo
            </a>
          </div>

          {/* Try Free */}
          <a
            href="https://doctorai.teledocmedical.ai"
            onClick={handleTryFree}
            className="text-dourado hover:text-dourado-claro text-sm font-medium transition-colors"
          >
            Testar gratis primeiro
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-cinza-500 animate-fade-in-up">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-verde" />
            Pagamento seguro
          </span>
          <span className="w-1 h-1 bg-cinza-600 rounded-full" />
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-verde" />
            Uso ilimitado
          </span>
          <span className="w-1 h-1 bg-cinza-600 rounded-full" />
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-verde" />
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  );
}
