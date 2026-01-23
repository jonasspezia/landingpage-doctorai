"use client";

import { trackCTAClick } from "@/lib/analytics";
import { ArrowRight, Sparkles, Check, Clock, Shield, Zap, CreditCard, Tag } from "lucide-react";

// Links de pagamento do Stripe - DoctorAI Ilimitado
const STRIPE_LINKS = {
  monthly: "https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u",
  yearly: "https://buy.stripe.com/eVqeVedZi1JDchbePk2Ji0v"
};

export default function FinalCTA() {
  const handleSubscribeYearly = () => {
    trackCTAClick("final_cta", "Assinar Anual R$1.470");
  };

  const handleSubscribeMonthly = () => {
    trackCTAClick("final_cta", "Assinar Mensal R$147");
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
          <span className="text-sm font-medium text-white">Junte-se a +500 médicos</span>
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
          {/* Yearly - Recommended */}
          <div className="relative glass-dark rounded-2xl p-6 border border-dourado/30 w-full sm:w-auto">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-verde text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" />
                ECONOMIZE R$294
              </span>
            </div>
            <p className="text-cinza-400 text-sm mb-1">Plano Anual</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-extrabold gradient-text">R$1.470</span>
              <span className="text-cinza-400 text-sm">/ano</span>
            </div>
            <p className="text-cinza-500 text-xs mt-1">R$122,50/mês - 2 meses grátis</p>
          </div>

          {/* Monthly */}
          <div className="glass-dark rounded-2xl p-6 border border-cinza-700 w-full sm:w-auto">
            <p className="text-cinza-400 text-sm mb-1">Plano Mensal</p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-extrabold text-white">R$147</span>
              <span className="text-cinza-400 text-sm">/mês</span>
            </div>
            <p className="text-cinza-500 text-xs mt-1">Cobrado mensalmente</p>
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
          {/* Primary CTA - Subscribe Yearly */}
          <a
            href={STRIPE_LINKS.yearly}
            onClick={handleSubscribeYearly}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 btn-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-glow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            <CreditCard className="w-5 h-5" />
            Assinar Anual - Melhor Valor
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={STRIPE_LINKS.monthly}
              onClick={handleSubscribeMonthly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cinza-300 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
            >
              Prefiro pagar mensal
            </a>
            <span className="text-cinza-600">|</span>
            <a
              href="https://doctorai.teledocmedical.ai"
              onClick={handleTryFree}
              className="text-dourado hover:text-dourado-claro text-sm font-medium transition-colors"
            >
              Testar grátis primeiro
            </a>
          </div>
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
