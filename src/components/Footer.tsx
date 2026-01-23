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
  FileText,
  Phone
} from "lucide-react";

// Dados da empresa
const COMPANY_DATA = {
  name: "DoctorAI",
  legalName: "Teledoc Journey Medical",
  corporateName: "TELEDOC CURSOS LTDA",
  cnpj: "51.986.681/0001-40",
  email: "teledoc@teledocmedical.com",
  phone: "+55 53 99909-2711",
  whatsapp: "5553999092711",
  address: {
    street: "Rua General Neto, nº 1840",
    complement: "Apto. 401, Bloco D, Centro",
    city: "Pelotas",
    state: "RS",
    zip: "96015-480",
    country: "Brasil"
  },
  social: {
    instagram: "https://instagram.com/teledocjourney",
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
    { label: "Especialidades", href: "/especialidades" },
    { label: "Calculadora ROI", href: "/calculadora" },
    { label: "Acessar Plataforma", href: COMPANY_DATA.urls.platform, external: true }
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Casos de Sucesso", href: "/casos" },
    { label: "Recursos Gratuitos", href: "/recursos" },
    { label: "FAQ", href: "#faq" }
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Segurança e LGPD", href: "/seguranca" }
  ],
  support: [
    { label: "Central de Suporte", href: "/suporte" },
    { label: "Integrações", href: "/integracoes" }
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
              <a
                href={`https://wa.me/${COMPANY_DATA.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cinza-400 hover:text-dourado transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-dourado" />
                {COMPANY_DATA.phone}
              </a>
              <div className="flex items-start gap-3 text-cinza-400 text-sm">
                <MapPin className="w-4 h-4 text-dourado mt-0.5" />
                <span>
                  {COMPANY_DATA.address.street}, {COMPANY_DATA.address.complement}<br />
                  {COMPANY_DATA.address.city}/{COMPANY_DATA.address.state} - {COMPANY_DATA.address.country}
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

            {/* Resources - dentro da mesma coluna para layout compacto */}
            <h4 className="text-white font-semibold mb-4 mt-6">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-cinza-400 hover:text-dourado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
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
                {COMPANY_DATA.corporateName} • CNPJ: {COMPANY_DATA.cnpj}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs flex-wrap justify-center md:justify-end">
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
              <Link
                href="/seguranca"
                className="text-cinza-500 hover:text-cinza-300 transition-colors"
              >
                Segurança
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
