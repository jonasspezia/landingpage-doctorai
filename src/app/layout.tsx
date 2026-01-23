import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teledocmedical.ai"),
  title: "DoctorAI - Seu Copiloto Médico com IA | Teledoc Journey Medical",
  description: "Copiloto médico de IA. Tire dúvidas clínicas, pesquise literatura, gere prontuários SOAP automaticamente. Inteligência artificial especializada em medicina.",
  keywords: ["doctorai", "ia médica", "prontuário automático", "transcrição médica", "soap", "teledoc", "teledoc journey medical"],
  authors: [{ name: "Teledoc Journey Medical" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://teledocmedical.ai/",
    siteName: "Teledoc Journey Medical - DoctorAI",
    title: "DoctorAI - Economize 2h por dia com IA Médica",
    description: "Transcreva consultas e gere prontuário SOAP automaticamente. Grátis para começar.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teledoc Journey Medical - DoctorAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DoctorAI - Economize 2h por dia com IA",
    description: "Transcreva consultas e gere prontuário SOAP automaticamente.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        {/* DataLayer Init */}
        <Script
          id="datalayer-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({
                'pageType': 'landing_high_conversion',
                'pageName': 'DoctorAI LP',
                'pageCategory': 'produto',
                'product': 'DoctorAI',
                'productVersion': '6.5'
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
