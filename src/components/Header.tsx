"use client";

import Link from "next/link";
import Image from "next/image";
import { CreditCard } from "lucide-react";

// Link de pagamento do Stripe - Plano Profissional R$97/mes
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/5kQaEY3kEgEx0ytcHc2Ji0w";

interface HeaderProps {
  variant?: "dark" | "light";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const isDark = variant === "dark";

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDark ? "bg-cinza-900 border-b border-cinza-800" : "bg-white border-b border-cinza-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-teledoc.png"
              alt="Teledoc Journey Medical"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className={`text-xl font-bold ${isDark ? "text-white" : "text-preto"}`}>
              Doctor<span className="text-dourado">AI</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/especialidades"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-cinza-400 hover:text-white"
                  : "text-cinza-600 hover:text-preto"
              }`}
            >
              Especialidades
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-cinza-400 hover:text-white"
                  : "text-cinza-600 hover:text-preto"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/calculadora"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-cinza-400 hover:text-white"
                  : "text-cinza-600 hover:text-preto"
              }`}
            >
              Calculadora
            </Link>
            <Link
              href="/#pricing"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-cinza-400 hover:text-white"
                  : "text-cinza-600 hover:text-preto"
              }`}
            >
              Preços
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://doctorai.teledocmedical.ai"
              className={`text-sm font-medium transition-colors ${
                isDark
                  ? "text-cinza-400 hover:text-white"
                  : "text-cinza-600 hover:text-preto"
              }`}
            >
              <span className="hidden sm:inline">Entrar</span>
            </a>
            <a
              href={STRIPE_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient text-white px-4 py-2 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-glow hover:shadow-glow-lg transition-all"
            >
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Assinar</span>
              <span className="sm:hidden">Assinar</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
