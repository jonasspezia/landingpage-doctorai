"use client";

import { trackCTAClick } from "@/lib/analytics";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleCTAClick = () => {
    trackCTAClick("hero", "Começar Grátis Agora");
  };

  return (
    <section id="hero" className="relative pt-24 pb-20 overflow-hidden">
      {/* Background - Single Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 via-white to-white" />

      <div className="relative max-w-6xl mx-auto px-5 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full mb-8 shadow-soft animate-fade-in-up">
          <span className="flex items-center gap-2 text-verde font-semibold text-sm">
            <span className="w-2 h-2 bg-verde rounded-full" />
            Ativo agora
          </span>
          <span className="w-px h-4 bg-cinza-300" />
          <span className="text-cinza-600 text-sm font-medium">+500 médicos usando</span>
        </div>

        {/* Headline */}
        <h1 className="text-h1 text-preto mb-6 animate-fade-in-up delay-100">
          Seu{" "}
          <span className="gradient-text">Assistente de IA</span>
          <br />
          <span className="text-cinza-700">para Medicina</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-cinza-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Converse com uma IA especializada em saúde, tire dúvidas clínicas e{" "}
          <span className="font-semibold text-cinza-700">gere prontuários SOAP em segundos</span>.
          <br className="hidden sm:block" />
          Economize 2 horas por dia com documentação.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-5 mb-14 animate-fade-in-up delay-300">
          <a
            href="https://doctorai.teledocmedical.ai"
            onClick={handleCTAClick}
            className="group btn-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-glow-lg hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            Começar Grátis Agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-cinza-500">
              <svg className="w-4 h-4 text-verde" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              100% gratuito
            </span>
            <span className="w-1 h-1 bg-cinza-300 rounded-full" />
            <span className="flex items-center gap-2 text-cinza-500">
              <svg className="w-4 h-4 text-verde" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Sem cartão
            </span>
            <span className="w-1 h-1 bg-cinza-300 rounded-full" />
            <span className="flex items-center gap-2 text-cinza-500">
              <svg className="w-4 h-4 text-verde" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Pronto em 2 min
            </span>
          </div>
        </div>

        {/* Hero Image with Browser Frame */}
        <div className="relative max-w-5xl mx-auto animate-scale-in delay-300">
          {/* Browser Frame */}
          <div className="relative bg-cinza-900 rounded-2xl shadow-elevated overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-cinza-800 border-b border-cinza-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-cinza-700 rounded-lg px-4 py-1.5 text-xs text-cinza-400 max-w-md mx-auto flex items-center gap-2">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  doctorai.teledocmedical.ai
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <img
              src="/hero-screenshot.png"
              alt="Interface do DoctorAI mostrando transcrição automática"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
