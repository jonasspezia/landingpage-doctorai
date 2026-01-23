// Dados das especialidades médicas para SEO

export interface UseCase {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  quote: string;
}

export interface Specialty {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  color: string;
  icon: string;
  hero: {
    headline: string;
    subheadline: string;
    painPoints: string[];
  };
  useCases: UseCase[];
  faqs: FAQ[];
  testimonial: Testimonial;
  stats: {
    label: string;
    value: string;
  }[];
}

export const specialties: Specialty[] = [
  {
    slug: "pediatria",
    name: "Pediatria",
    title: "DoctorAI para Pediatras",
    description:
      "IA médica especializada em pediatria. Documentação automática de consultas pediátricas, crescimento, desenvolvimento e vacinação.",
    metaDescription:
      "DoctorAI para pediatras: prontuário automático com curvas de crescimento, marcos de desenvolvimento e calendário vacinal. Economize tempo na consulta pediátrica.",
    keywords: [
      "ia médica pediatria",
      "prontuário pediátrico automático",
      "documentação consulta pediátrica",
      "software pediatra",
    ],
    color: "azul",
    icon: "Baby",
    hero: {
      headline: "Documentação pediátrica em segundos",
      subheadline:
        "Foque na criança enquanto a IA cuida do prontuário. Curvas de crescimento, marcos de desenvolvimento e vacinação organizados automaticamente.",
      painPoints: [
        "Consultas curtas com crianças agitadas",
        "Pais ansiosos querendo toda atenção",
        "Documentação detalhada exigida",
        "Múltiplos parâmetros para acompanhar",
      ],
    },
    useCases: [
      {
        title: "Puericultura",
        description:
          "Acompanhamento de peso, altura e perímetro cefálico com plotagem automática nas curvas da OMS.",
      },
      {
        title: "Marcos de Desenvolvimento",
        description:
          "Registro estruturado dos marcos motores, cognitivos e de linguagem conforme idade.",
      },
      {
        title: "Calendário Vacinal",
        description:
          "Verificação automática do calendário vacinal com alertas de doses atrasadas ou próximas.",
      },
      {
        title: "Consulta de Rotina",
        description:
          "SOAP completo incluindo alimentação, sono, eliminações e orientações por faixa etária.",
      },
    ],
    faqs: [
      {
        question: "O DoctorAI reconhece termos específicos de pediatria?",
        answer:
          "Sim. O DoctorAI é treinado com vocabulário pediátrico brasileiro, incluindo marcos de desenvolvimento, escalas de avaliação (Denver, etc.) e protocolos do Ministério da Saúde para puericultura.",
      },
      {
        question: "Consigo documentar consultas rápidas com crianças agitadas?",
        answer:
          "Perfeitamente. A transcrição funciona em tempo real enquanto você examina a criança. Ao final, a IA já organizou tudo no formato SOAP, pronto para revisão rápida.",
      },
      {
        question: "As curvas de crescimento são geradas automaticamente?",
        answer:
          "O DoctorAI extrai os dados antropométricos da consulta e você pode exportar para seu sistema de curvas preferido. A documentação inclui percentis e z-scores quando informados.",
      },
    ],
    testimonial: {
      name: "Dra. Mariana Costa",
      role: "Pediatra",
      location: "São Paulo, SP",
      quote:
        "Com o DoctorAI, finalmente consigo olhar para a criança durante toda a consulta. Os pais percebem a diferença e confiam mais nas orientações. Minha produtividade dobrou.",
    },
    stats: [
      { label: "Redução no tempo de documentação", value: "75%" },
      { label: "Aumento na satisfação dos pais", value: "94%" },
      { label: "Consultas adicionais possíveis", value: "+8/dia" },
    ],
  },
  {
    slug: "cardiologia",
    name: "Cardiologia",
    title: "DoctorAI para Cardiologistas",
    description:
      "IA médica para cardiologia. Documentação automática de exames, laudos e acompanhamento de pacientes cardíacos.",
    metaDescription:
      "DoctorAI para cardiologistas: prontuário automático com interpretação de exames, laudos estruturados e acompanhamento de fatores de risco cardiovascular.",
    keywords: [
      "ia médica cardiologia",
      "laudo cardiológico automático",
      "documentação consulta cardiológica",
      "software cardiologista",
    ],
    color: "vermelho",
    icon: "Heart",
    hero: {
      headline: "Laudos cardíacos precisos e rápidos",
      subheadline:
        "Documentação estruturada para consultas cardiológicas. ECG, eco, teste ergométrico - tudo organizado automaticamente.",
      painPoints: [
        "Laudos complexos com múltiplos exames",
        "Acompanhamento de fatores de risco",
        "Pacientes crônicos com histórico extenso",
        "Prescrições com múltiplas drogas cardíacas",
      ],
    },
    useCases: [
      {
        title: "Consulta de Avaliação",
        description:
          "SOAP completo com estratificação de risco cardiovascular, escores validados e plano terapêutico.",
      },
      {
        title: "Laudos de Exames",
        description:
          "Estruturação automática de achados em ECG, ecocardiograma, holter e teste ergométrico.",
      },
      {
        title: "Acompanhamento de IC",
        description:
          "Documentação padronizada para insuficiência cardíaca incluindo classe funcional e ajuste de drogas.",
      },
      {
        title: "Prevenção Cardiovascular",
        description:
          "Registro estruturado de fatores de risco, metas terapêuticas e orientações de estilo de vida.",
      },
    ],
    faqs: [
      {
        question: "O DoctorAI calcula escores de risco cardiovascular?",
        answer:
          "O DoctorAI identifica os fatores de risco na consulta e facilita o registro estruturado. Você pode usar calculadoras integradas ou externas para escores como Framingham e ASCVD.",
      },
      {
        question: "Funciona para laudar exames cardiológicos?",
        answer:
          "Sim. Você pode ditar o laudo durante a análise do exame e o DoctorAI estrutura no formato padrão, incluindo medidas, achados e conclusão.",
      },
      {
        question: "Como lidar com pacientes que usam muitas medicações?",
        answer:
          "O DoctorAI transcreve a revisão de medicações da consulta e organiza por classe terapêutica, facilitando ajustes e evitando erros de transcrição.",
      },
    ],
    testimonial: {
      name: "Dr. Ricardo Almeida",
      role: "Cardiologista",
      location: "Rio de Janeiro, RJ",
      quote:
        "Meus laudos de ecocardiograma que levavam 10 minutos agora ficam prontos em 2. A qualidade melhorou porque consigo focar na análise, não na digitação.",
    },
    stats: [
      { label: "Tempo economizado por laudo", value: "8 min" },
      { label: "Redução de erros de transcrição", value: "95%" },
      { label: "Laudos adicionais por dia", value: "+12" },
    ],
  },
  {
    slug: "emergencia",
    name: "Emergência",
    title: "DoctorAI para Pronto Socorro",
    description:
      "IA médica para emergência e pronto atendimento. Documentação rápida em ambiente de alta demanda.",
    metaDescription:
      "DoctorAI para emergência: documentação rápida de atendimentos, classificação de risco e prontuário SOAP em segundos. Ideal para pronto socorro.",
    keywords: [
      "ia pronto socorro",
      "documentação emergência médica",
      "prontuário pronto atendimento",
      "software emergência",
    ],
    color: "verde",
    icon: "Siren",
    hero: {
      headline: "Documentação em tempo real na emergência",
      subheadline:
        "Alta demanda não significa documentação ruim. Transcrição automática enquanto você atende, prontuário completo ao final.",
      painPoints: [
        "Volume alto de atendimentos",
        "Tempo escasso entre pacientes",
        "Documentação médico-legal crítica",
        "Múltiplas interrupções constantes",
      ],
    },
    useCases: [
      {
        title: "Atendimento de Urgência",
        description:
          "Documentação simultânea ao atendimento, capturando queixa, exame e conduta em tempo real.",
      },
      {
        title: "Classificação de Risco",
        description:
          "Registro estruturado dos protocolos de classificação (Manchester, ESI) com justificativa documentada.",
      },
      {
        title: "Observação",
        description:
          "Evolução de pacientes em observação com horários, parâmetros e intercorrências registradas.",
      },
      {
        title: "Alta e Orientações",
        description:
          "Documentação de alta com orientações claras, sinais de alarme e encaminhamentos.",
      },
    ],
    faqs: [
      {
        question: "Funciona em ambiente barulhento de PS?",
        answer:
          "Sim. O DoctorAI usa algoritmos de supressão de ruído. Funciona bem em ambientes com múltiplas conversas, equipamentos e alarmes típicos de pronto socorro.",
      },
      {
        question: "Consigo documentar enquanto atendo politrauma?",
        answer:
          "Em situações críticas, você pode ativar a transcrição e focar 100% no paciente. Ao estabilizar, a IA já terá capturado as informações verbalizadas durante o atendimento.",
      },
      {
        question: "Como funciona para médicos plantonistas diferentes?",
        answer:
          "Cada médico tem seu perfil. O DoctorAI reconhece diferentes usuários e mantém preferências de documentação separadas.",
      },
    ],
    testimonial: {
      name: "Dr. Felipe Santos",
      role: "Emergencista",
      location: "Belo Horizonte, MG",
      quote:
        "No PS onde trabalho, atendo 40 pacientes por plantão. Antes, levava 3 horas extras só para documentar. Com o DoctorAI, saio no horário e com prontuários completos.",
    },
    stats: [
      { label: "Atendimentos documentados/hora", value: "+40%" },
      { label: "Tempo extra pós-plantão eliminado", value: "3h" },
      { label: "Completude da documentação", value: "98%" },
    ],
  },
  {
    slug: "clinica-geral",
    name: "Clínica Geral",
    title: "DoctorAI para Clínicos Gerais",
    description:
      "IA médica para medicina de família e clínica geral. Documentação versátil para atendimento de múltiplas condições.",
    metaDescription:
      "DoctorAI para clínicos gerais: prontuário automático para consultas diversas, acompanhamento de crônicos e atenção primária. Ideal para UBS e consultórios.",
    keywords: [
      "ia clínico geral",
      "prontuário atenção primária",
      "documentação consulta clínica",
      "software medicina família",
    ],
    color: "dourado",
    icon: "Stethoscope",
    hero: {
      headline: "Versatilidade para o dia a dia do clínico",
      subheadline:
        "De hipertensão a lombalgia, de ansiedade a diabetes - documentação adaptada para qualquer condição que aparecer no consultório.",
      painPoints: [
        "Variedade enorme de queixas",
        "Pacientes com múltiplas comorbidades",
        "Demanda alta em UBS e consultórios",
        "Acompanhamento longitudinal complexo",
      ],
    },
    useCases: [
      {
        title: "Consulta de Rotina",
        description:
          "SOAP completo para qualquer queixa, adaptando-se automaticamente ao contexto clínico apresentado.",
      },
      {
        title: "Acompanhamento de Crônicos",
        description:
          "Documentação estruturada para HAS, DM, dislipidemia e outras condições de acompanhamento prolongado.",
      },
      {
        title: "Queixas Diversas",
        description:
          "Da cefaleia à dor articular, o DoctorAI se adapta ao contexto e sugere os itens relevantes para cada caso.",
      },
      {
        title: "Prevenção e Rastreio",
        description:
          "Registro de exames preventivos, vacinas e orientações de saúde conforme faixa etária e fatores de risco.",
      },
    ],
    faqs: [
      {
        question: "O DoctorAI funciona para qualquer tipo de consulta?",
        answer:
          "Sim. O DoctorAI é treinado com conhecimento médico abrangente. Seja uma gripe, uma revisão de diabetes ou uma queixa emocional, o sistema se adapta ao contexto.",
      },
      {
        question: "Como lidar com pacientes que têm muitas queixas na mesma consulta?",
        answer:
          "O DoctorAI organiza múltiplas queixas separadamente no prontuário, permitindo documentar cada problema de forma estruturada mesmo em consultas complexas.",
      },
      {
        question: "Funciona em UBS com alto volume?",
        answer:
          "Perfeitamente. Muitos clínicos em UBS relatam que o DoctorAI foi essencial para manter qualidade de documentação mesmo com demanda elevada.",
      },
    ],
    testimonial: {
      name: "Dra. Camila Rodrigues",
      role: "Médica de Família",
      location: "Curitiba, PR",
      quote:
        "Na UBS, cada paciente é diferente. O DoctorAI me ajuda a documentar tudo corretamente sem perder tempo. Meus colegas já perceberam a diferença na qualidade dos meus prontuários.",
    },
    stats: [
      { label: "Redução no tempo de documentação", value: "80%" },
      { label: "Satisfação com a ferramenta", value: "96%" },
      { label: "Pacientes adicionais/dia", value: "+6" },
    ],
  },
];

// Função para buscar especialidade por slug
export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}
