import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ChevronLeft,
  Mail,
  Phone,
  MessageCircle,
  HelpCircle,
  Clock,
  FileText,
  Shield,
  ChevronDown,
  ExternalLink,
  Instagram,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Central de Suporte | DoctorAI - Teledoc Journey Medical",
  description:
    "Precisa de ajuda com o DoctorAI? Encontre respostas para suas dúvidas, entre em contato com nosso suporte ou acesse nossos recursos de autoatendimento.",
  keywords: [
    "suporte doctorai",
    "ajuda doctorai",
    "contato teledoc",
    "suporte médico ia",
    "atendimento doctorai",
  ],
  openGraph: {
    title: "Central de Suporte | DoctorAI",
    description: "Encontre ajuda e entre em contato com nosso suporte.",
    type: "website",
    url: "https://teledocmedical.ai/suporte",
  },
  alternates: {
    canonical: "/suporte",
  },
};

// Dados de contato
const CONTACT_DATA = {
  email: "teledoc@teledocmedical.com",
  phone: "+55 53 99909-2711",
  whatsapp: "5553999092711",
  instagram: "@teledocjourney",
  instagramUrl: "https://instagram.com/teledocjourney",
  hours: "Segunda a Sexta, 8h às 18h (horário de Brasília)",
  responseTime: "Em até 24 horas úteis",
};

// FAQs de suporte
const supportFaqs = [
  {
    category: "Conta e Acesso",
    questions: [
      {
        question: "Como faço para criar minha conta no DoctorAI?",
        answer:
          "Para criar sua conta, clique em 'Começar Agora' na página inicial. Você será redirecionado para a página de pagamento segura do Stripe. Após a confirmação do pagamento, receberá um e-mail com as instruções de acesso à plataforma.",
      },
      {
        question: "Esqueci minha senha. Como recupero?",
        answer:
          "Na tela de login da plataforma, clique em 'Esqueci minha senha'. Digite seu e-mail cadastrado e você receberá um link para redefinição de senha. Se não receber o e-mail em alguns minutos, verifique a pasta de spam.",
      },
      {
        question: "Posso alterar o e-mail da minha conta?",
        answer:
          "Sim. Entre em contato com nosso suporte via WhatsApp ou e-mail informando o e-mail atual e o novo e-mail desejado. Validaremos sua identidade e faremos a alteração.",
      },
    ],
  },
  {
    category: "Pagamento e Assinatura",
    questions: [
      {
        question: "Quais formas de pagamento são aceitas?",
        answer:
          "Aceitamos cartão de crédito (Visa, Mastercard, American Express, Elo) e cartão de débito. Os pagamentos são processados de forma segura pelo Stripe.",
      },
      {
        question: "Como cancelo minha assinatura?",
        answer:
          "Você pode cancelar sua assinatura a qualquer momento através do painel de gerenciamento da sua conta ou entrando em contato com nosso suporte. Não há multa de cancelamento e você continua com acesso até o fim do período pago.",
      },
      {
        question: "Existe período de teste gratuito?",
        answer:
          "Oferecemos garantia de satisfação de 7 dias. Se você não ficar satisfeito com o DoctorAI nos primeiros 7 dias, devolvemos 100% do valor pago, sem perguntas.",
      },
      {
        question: "Como solicito reembolso?",
        answer:
          "Para solicitar reembolso dentro do período de garantia (7 dias), entre em contato com nosso suporte via WhatsApp ou e-mail. O reembolso será processado em até 10 dias úteis na mesma forma de pagamento utilizada.",
      },
    ],
  },
  {
    category: "Uso da Plataforma",
    questions: [
      {
        question: "A transcrição funciona em qualquer idioma?",
        answer:
          "O DoctorAI é otimizado para português brasileiro. A transcrição funciona melhor em ambientes com pouco ruído de fundo. Para melhores resultados, use um microfone de qualidade.",
      },
      {
        question: "Posso usar o DoctorAI em mais de um dispositivo?",
        answer:
          "Sim. Como o DoctorAI funciona no navegador, você pode acessar de qualquer dispositivo (computador, tablet ou celular) com sua conta. Apenas um dispositivo pode estar ativo por vez.",
      },
      {
        question: "Os dados dos meus pacientes ficam salvos?",
        answer:
          "Não armazenamos dados de pacientes em nossos servidores. As transcrições são processadas em tempo real e você decide o que salvar localmente. Saiba mais em nossa Política de Privacidade.",
      },
      {
        question: "O DoctorAI integra com meu prontuário eletrônico?",
        answer:
          "O DoctorAI gera texto formatado que você pode copiar e colar em qualquer sistema de prontuário eletrônico. Não é necessária integração técnica.",
      },
    ],
  },
  {
    category: "Problemas Técnicos",
    questions: [
      {
        question: "O microfone não está funcionando. O que fazer?",
        answer:
          "Verifique se você permitiu acesso ao microfone no navegador. Vá em Configurações do navegador > Privacidade e Segurança > Configurações do site > Microfone e certifique-se que o DoctorAI está permitido. Tente também usar outro navegador (recomendamos Chrome ou Edge).",
      },
      {
        question: "A página está carregando lentamente.",
        answer:
          "Verifique sua conexão com a internet. O DoctorAI funciona melhor com conexões estáveis de pelo menos 5 Mbps. Tente limpar o cache do navegador e desabilitar extensões que possam interferir.",
      },
      {
        question: "Recebi um erro ao gerar o prontuário SOAP.",
        answer:
          "Se a transcrição estiver muito curta ou com muito ruído, a geração do SOAP pode falhar. Tente gravar novamente em um ambiente mais silencioso. Se o problema persistir, entre em contato com o suporte enviando o código de erro exibido.",
      },
    ],
  },
];

// JSON-LD schema
const supportSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Central de Suporte DoctorAI",
  description:
    "Página de suporte e atendimento ao cliente do DoctorAI - Teledoc Journey Medical",
  mainEntity: {
    "@type": "Organization",
    name: "Teledoc Journey Medical",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_DATA.phone,
      email: CONTACT_DATA.email,
      contactType: "customer service",
      availableLanguage: "Portuguese",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    },
  },
};

export default function SuportePage() {
  return (
    <>
      <Script
        id="support-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportSchema) }}
      />

      <Header variant="light" />

      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-cinza-50 to-white py-12 border-b border-cinza-100">
          <div className="max-w-4xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cinza-500 hover:text-dourado transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              Voltar para o início
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-preto">
              Central de Suporte
            </h1>
            <p className="text-cinza-500 mt-2">
              Estamos aqui para ajudar você a aproveitar ao máximo o DoctorAI.
            </p>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-xl font-bold text-cinza-900 mb-6">
              Canais de Atendimento
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${CONTACT_DATA.whatsapp}?text=Olá! Preciso de ajuda com o DoctorAI.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-verde/10 border border-verde/20 rounded-xl p-6 hover:bg-verde/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-verde/20 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-verde" />
                </div>
                <h3 className="font-semibold text-cinza-900 mb-1">WhatsApp</h3>
                <p className="text-cinza-600 text-sm mb-2">
                  Atendimento rápido pelo WhatsApp
                </p>
                <span className="text-verde font-medium text-sm flex items-center gap-1 group-hover:underline">
                  {CONTACT_DATA.phone}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_DATA.email}?subject=Suporte DoctorAI`}
                className="bg-azul/10 border border-azul/20 rounded-xl p-6 hover:bg-azul/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-azul/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-azul" />
                </div>
                <h3 className="font-semibold text-cinza-900 mb-1">E-mail</h3>
                <p className="text-cinza-600 text-sm mb-2">
                  Para assuntos mais complexos
                </p>
                <span className="text-azul font-medium text-sm group-hover:underline">
                  {CONTACT_DATA.email}
                </span>
              </a>

              {/* Instagram */}
              <a
                href={CONTACT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dourado/10 border border-dourado/20 rounded-xl p-6 hover:bg-dourado/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-dourado/20 flex items-center justify-center mb-4">
                  <Instagram className="w-6 h-6 text-dourado" />
                </div>
                <h3 className="font-semibold text-cinza-900 mb-1">Instagram</h3>
                <p className="text-cinza-600 text-sm mb-2">
                  Siga-nos para novidades
                </p>
                <span className="text-dourado font-medium text-sm flex items-center gap-1 group-hover:underline">
                  {CONTACT_DATA.instagram}
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* Hours Info */}
            <div className="mt-6 flex items-center gap-3 text-cinza-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>
                Horário de atendimento: {CONTACT_DATA.hours}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-cinza-500 text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>
                Tempo médio de resposta: {CONTACT_DATA.responseTime}
              </span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-cinza-50">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-cinza-900 mb-8">
              Perguntas Frequentes
            </h2>

            <div className="space-y-8">
              {supportFaqs.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-lg font-semibold text-cinza-800 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-dourado/10 flex items-center justify-center text-dourado text-sm">
                      {catIndex + 1}
                    </span>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => (
                      <details
                        key={faqIndex}
                        className="bg-white rounded-xl shadow-soft group"
                      >
                        <summary className="p-5 font-medium text-cinza-900 cursor-pointer list-none flex items-center justify-between hover:text-dourado transition-colors">
                          {faq.question}
                          <ChevronDown className="w-5 h-5 text-cinza-400 group-open:rotate-180 transition-transform" />
                        </summary>
                        <div className="px-5 pb-5 text-cinza-600">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-xl font-bold text-cinza-900 mb-6">
              Links Úteis
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/termos"
                className="flex items-center gap-3 p-4 bg-cinza-50 rounded-xl hover:bg-cinza-100 transition-colors"
              >
                <FileText className="w-5 h-5 text-cinza-500" />
                <span className="text-cinza-700 font-medium">Termos de Uso</span>
              </Link>
              <Link
                href="/privacidade"
                className="flex items-center gap-3 p-4 bg-cinza-50 rounded-xl hover:bg-cinza-100 transition-colors"
              >
                <Shield className="w-5 h-5 text-cinza-500" />
                <span className="text-cinza-700 font-medium">
                  Política de Privacidade
                </span>
              </Link>
              <Link
                href="/seguranca"
                className="flex items-center gap-3 p-4 bg-cinza-50 rounded-xl hover:bg-cinza-100 transition-colors"
              >
                <Shield className="w-5 h-5 text-cinza-500" />
                <span className="text-cinza-700 font-medium">
                  Segurança e LGPD
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-12 bg-cinza-900">
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-center">
              <h2 className="text-xl font-bold text-white mb-4">
                Teledoc Journey Medical
              </h2>
              <p className="text-cinza-400 text-sm mb-2">
                TELEDOC CURSOS LTDA • CNPJ: 51.986.681/0001-40
              </p>
              <p className="text-cinza-400 text-sm">
                Rua General Neto, nº 1840, Apto. 401, Bloco D, Centro
              </p>
              <p className="text-cinza-400 text-sm">Pelotas/RS - Brasil</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
