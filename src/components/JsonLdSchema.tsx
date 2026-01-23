import Script from "next/script";

export default function JsonLdSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Teledoc Journey Medical",
    alternateName: "DoctorAI",
    url: "https://teledocmedical.ai",
    logo: "https://teledocmedical.ai/logo-teledoc.png",
    sameAs: [
      "https://instagram.com/drjonasspezia",
      "https://linkedin.com/company/teledocmedical"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-51-99999-9999",
      contactType: "customer service",
      availableLanguage: ["Portuguese"]
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DoctorAI",
    applicationCategory: "MedicalApplication",
    operatingSystem: "Web Browser",
    description: "IA médica para prontuários automáticos. Transcreva consultas e gere SOAP em segundos.",
    offers: {
      "@type": "Offer",
      price: "147.00",
      priceCurrency: "BRL",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1"
    },
    author: {
      "@type": "Organization",
      name: "Teledoc Journey Medical"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como funciona a Inteligência Artificial do DoctorAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O DoctorAI usa IA avançada treinada em literatura médica e protocolos brasileiros. Você conversa naturalmente e recebe respostas instantâneas, como ter um especialista sempre disponível."
        }
      },
      {
        "@type": "Question",
        name: "Os dados dos pacientes são seguros no DoctorAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Não armazenamos dados de pacientes em servidores externos. A transcrição é temporária e você controla o que salvar."
        }
      },
      {
        "@type": "Question",
        name: "Posso confiar nas respostas da IA médica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A IA é ferramenta de apoio ao seu julgamento clínico. Prioriza protocolos brasileiros (MS, SUS, ANVISA) e sempre apresenta referências quando disponíveis."
        }
      },
      {
        "@type": "Question",
        name: "O DoctorAI funciona com qualquer prontuário eletrônico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Gera texto que você copia e cola em qualquer sistema. Não precisa integração técnica."
        }
      },
      {
        "@type": "Question",
        name: "Preciso instalar algo para usar o DoctorAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. Funciona 100% no navegador. Basta acessar e começar a conversar com a IA imediatamente."
        }
      },
      {
        "@type": "Question",
        name: "A IA médica funciona em qualquer especialidade?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Conhecimento abrangente em clínica médica, pediatria, cardiologia, emergência e todas as especialidades médicas."
        }
      },
      {
        "@type": "Question",
        name: "Quanto tempo leva para começar a usar o DoctorAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Menos de 5 minutos. Basta criar sua conta, acessar pelo navegador e começar a usar. Não há instalação, configuração ou treinamento obrigatório."
        }
      },
      {
        "@type": "Question",
        name: "O DoctorAI está em conformidade com a LGPD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O DoctorAI foi desenvolvido com privacidade desde o design. Não armazenamos dados de pacientes em nossos servidores. As transcrições são processadas em tempo real e você decide o que salvar localmente."
        }
      },
      {
        "@type": "Question",
        name: "Como funciona a transcrição de consultas médicas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Você ativa o microfone durante a consulta e o DoctorAI transcreve automaticamente a conversa em tempo real. Depois, a IA organiza as informações no formato SOAP com um clique."
        }
      },
      {
        "@type": "Question",
        name: "Posso cancelar a assinatura do DoctorAI a qualquer momento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. Sem fidelidade ou multa. Você pode cancelar sua assinatura diretamente pelo painel a qualquer momento e continua tendo acesso até o fim do período pago."
        }
      },
      {
        "@type": "Question",
        name: "O DoctorAI substitui o julgamento médico?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O DoctorAI é uma ferramenta de apoio à documentação e pesquisa. Todas as decisões clínicas são de responsabilidade exclusiva do profissional de saúde."
        }
      },
      {
        "@type": "Question",
        name: "Qual a diferença entre o plano mensal e anual do DoctorAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ambos oferecem acesso completo a todas as funcionalidades. O plano anual tem desconto de 17% (equivalente a R$ 122,50/mês vs R$ 147/mês no mensal)."
        }
      },
      {
        "@type": "Question",
        name: "Como o DoctorAI gera prontuários SOAP automaticamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A IA analisa a transcrição da consulta e organiza automaticamente em Subjetivo (queixa), Objetivo (exame), Avaliação (diagnóstico) e Plano (conduta). Você pode editar antes de copiar."
        }
      },
      {
        "@type": "Question",
        name: "O DoctorAI funciona para telemedicina e teleconsulta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Perfeitamente. A transcrição funciona em consultas presenciais e por videochamada. Ideal para médicos que fazem teleconsultas."
        }
      },
      {
        "@type": "Question",
        name: "A IA do DoctorAI possui base de conhecimento médico atualizada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. O DoctorAI é treinado com literatura médica recente, protocolos brasileiros (Ministério da Saúde, ANVISA, SUS) e diretrizes das principais sociedades médicas."
        }
      },
      {
        "@type": "Question",
        name: "Quanto custa o DoctorAI por mês?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O DoctorAI custa R$ 147/mês no plano mensal ou R$ 122,50/mês no plano anual (R$ 1.470/ano). Não há taxa de instalação ou custos ocultos."
        }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DoctorAI - IA Médica",
    alternateName: "Teledoc Journey Medical",
    url: "https://teledocmedical.ai",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://doctorai.teledocmedical.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://teledocmedical.ai"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Integrações",
        item: "https://teledocmedical.ai/integracoes"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Segurança",
        item: "https://teledocmedical.ai/seguranca"
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Termos de Uso",
        item: "https://teledocmedical.ai/termos"
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Política de Privacidade",
        item: "https://teledocmedical.ai/privacidade"
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
