"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  ExternalLink,
  Shield,
  FileText
} from "lucide-react";

// Dados da empresa
const COMPANY_DATA = {
  name: "DoctorAI",
  legalName: "Teledoc Journey Medical",
  corporateName: "TELEDOC CURSOS LTDA",
  cnpj: "Em processo de registro", // Atualizar quando disponível
  email: "teledoc@teledocmedical.com",
  phone: "+55 (54) 99999-9999", // Atualizar com telefone real
  address: {
    street: "Rua João Tomazini, 818",
    complement: "apt 02, Centro",
    city: "Ilopolis",
    state: "RS",
    zip: "95990-000",
    country: "Brasil"
  },
  social: {
    instagram: "https://instagram.com/drjonasspezia",
    linkedin: "https://linkedin.com/company/teledocmedical"
  },
  urls: {
    platform: "https://doctorai.teledocmedical.ai",
    website: "https://teledocmedical.ai"
  }
};

const footerLinks = {
  product: [
    { label: "Funcionalidades", href: "#features" },
    { label: "Preços", href: "#pricing" },
    { label: "Demonstração", href: "#demo" },
    { label: "Acessar Plataforma", href: COMPANY_DATA.urls.platform, external: true }
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" }
  ],
  support: [
    { label: "Suporte", href: `mailto:${COMPANY_DATA.email}` },
    { label: "FAQ", href: "#faq" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinza-900 border-t border-cinza-800">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-teledoc.png"
                alt="Teledoc Journey Medical"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div className="text-2xl font-bold text-white">
                Doctor<span className="text-dourado">AI</span>
              </div>
            </Link>
            <p className="text-cinza-400 text-sm mb-6 max-w-sm">
              Seu copiloto médico com inteligência artificial. Economize tempo com
              documentação automática e foque no que importa: seus pacientes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY_DATA.email}`}
                className="flex items-center gap-3 text-cinza-400 hover:text-dourado transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-dourado" />
                {COMPANY_DATA.email}
              </a>
              <div className="flex items-start gap-3 text-cinza-400 text-sm">
                <MapPin className="w-4 h-4 text-dourado mt-0.5" />
                <span>
                  {COMPANY_DATA.address.city}, {COMPANY_DATA.address.state} - {COMPANY_DATA.address.country}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href={COMPANY_DATA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-cinza-800 flex items-center justify-center text-cinza-400 hover:text-dourado hover:bg-cinza-700 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={COMPANY_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-cinza-800 flex items-center justify-center text-cinza-400 hover:text-dourado hover:bg-cinza-700 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cinza-400 hover:text-dourado transition-colors text-sm flex items-center gap-2"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <a
                      href={link.href}
                      className="text-cinza-400 hover:text-dourado transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-cinza-400 hover:text-dourado transition-colors text-sm flex items-center gap-2"
                  >
                    {link.label === "Termos de Uso" ? (
                      <FileText className="w-3 h-3" />
                    ) : (
                      <Shield className="w-3 h-3" />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-4 mt-6">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-cinza-400 hover:text-dourado transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Company Legal Info */}
      <div className="border-t border-cinza-800">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-cinza-500 text-xs text-center md:text-left">
              <p>
                &copy; {currentYear} {COMPANY_DATA.legalName}. Todos os direitos reservados.
              </p>
              <p className="mt-1">
                {COMPANY_DATA.corporateName}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs">
              <Link
                href="/termos"
                className="text-cinza-500 hover:text-cinza-300 transition-colors"
              >
                Termos
              </Link>
              <span className="text-cinza-700">|</span>
              <Link
                href="/privacidade"
                className="text-cinza-500 hover:text-cinza-300 transition-colors"
              >
                Privacidade
              </Link>
              <span className="text-cinza-700">|</span>
              <span className="text-cinza-500">
                LGPD Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
