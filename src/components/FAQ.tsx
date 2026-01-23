"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Shield, Laptop, Brain, Zap, Stethoscope } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como funciona a Inteligência Artificial?",
      answer: "O DoctorAI usa IA avançada treinada em literatura médica e protocolos brasileiros. Você conversa naturalmente e recebe respostas instantâneas, como ter um especialista sempre disponível.",
      icon: Brain,
    },
    {
      question: "Os dados dos pacientes são seguros?",
      answer: "Sim. Não armazenamos dados de pacientes em servidores externos. A transcrição é temporária e você controla o que salvar.",
      icon: Shield,
    },
    {
      question: "Posso confiar nas respostas da IA?",
      answer: "A IA é ferramenta de apoio ao seu julgamento clínico. Prioriza protocolos brasileiros (MS, SUS, ANVISA) e sempre apresenta referências quando disponíveis.",
      icon: Brain,
    },
    {
      question: "Funciona com qualquer prontuário?",
      answer: "Sim. Gera texto que você copia e cola em qualquer sistema. Não precisa integração técnica.",
      icon: Laptop,
    },
    {
      question: "Preciso instalar algo?",
      answer: "Não. Funciona 100% no navegador. Basta acessar e começar a conversar com a IA imediatamente.",
      icon: Zap,
    },
    {
      question: "A IA funciona em qualquer especialidade?",
      answer: "Sim. Conhecimento abrangente em clínica médica, pediatria, cardiologia, emergência e todas as especialidades médicas.",
      icon: Stethoscope,
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinza-50 via-white to-amber-50/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full text-xs font-bold text-dourado uppercase tracking-wider mb-6">
            <HelpCircle className="w-3 h-3" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-preto mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-lg text-cinza-500">
            Tudo que você precisa saber para começar
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const Icon = faq.icon;

            return (
              <div
                key={index}
                className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-elevated border-2 border-dourado/20"
                    : "bg-white/80 border border-cinza-200 hover:border-dourado/30 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left transition-colors"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-br from-dourado to-dourado-escuro text-white shadow-glow"
                      : "bg-cinza-100 text-cinza-500 group-hover:bg-dourado/10 group-hover:text-dourado"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Question */}
                  <span className={`flex-1 font-semibold transition-colors ${
                    isOpen ? "text-preto" : "text-cinza-700 group-hover:text-preto"
                  }`}>
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <ChevronDown className={`w-5 h-5 text-cinza-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-dourado" : ""
                  }`} />
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-cinza-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
