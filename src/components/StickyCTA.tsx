"use client";

import { useState, useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { ArrowRight, Sparkles, CreditCard } from "lucide-react";

// Link de pagamento do Stripe - DoctorAI Ilimitado R$147/mes
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/6oU4gA1cw3RL4OJ4aG2Ji0u";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = () => {
    trackEvent("cta_click", { cta_location: "sticky_bar", cta_text: "Assinar R$147/mês" });
  };

  const handleTryFree = () => {
    trackEvent("cta_click", { cta_location: "sticky_bar", cta_text: "Testar Grátis" });
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cinza-900 via-preto to-cinza-900" />
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />

      {/* Border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dourado/50 to-transparent" />

      <div className="relative py-3 px-5 flex justify-center items-center gap-4 md:gap-6">
        {/* Text */}
        <div className="hidden md:flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-dourado" />
          <p className="text-white text-sm font-medium">
            <span className="text-dourado font-bold">DoctorAI</span> - IA médica ilimitada por{" "}
            <span className="text-dourado font-bold">R$147/mês</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* Subscribe Button */}
          <a
            href={STRIPE_PAYMENT_LINK}
            onClick={handleSubscribe}
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-gradient text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-glow hover:shadow-glow-lg transition-all"
          >
            <CreditCard className="w-4 h-4" />
            <span className="hidden sm:inline">Assinar Agora</span>
            <span className="sm:hidden">Assinar</span>
          </a>

          {/* Try Free Link */}
          <a
            href="https://doctorai.teledocmedical.ai"
            onClick={handleTryFree}
            className="text-cinza-300 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
          >
            <span className="hidden sm:inline">Testar grátis</span>
            <span className="sm:hidden">Grátis</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
