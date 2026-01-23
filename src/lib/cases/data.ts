// Dados dos casos de sucesso do DoctorAI

export interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  role: string;
  specialty: string;
  location: string;
  avatar?: string;
  rating: number;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  quote: string;
  metrics: Metric[];
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    name: "Dr. Roberto Mendes",
    role: "Proprietário",
    specialty: "Clínica Médica",
    location: "São Paulo, SP",
    rating: 5,
    title: "Clínica aumentou atendimentos em 30% sem contratar mais médicos",
    summary:
      "Clínica com 5 médicos conseguiu aumentar capacidade de atendimento em 30% apenas otimizando o tempo de documentação.",
    challenge:
      "Nossa clínica atendia em média 80 pacientes por dia entre os 5 médicos. O gargalo não era a disponibilidade de consultórios ou agenda, mas o tempo que cada médico gastava documentando. Alguns levavam 15 minutos por prontuário.",
    solution:
      "Implementamos o DoctorAI em todos os consultórios. Os médicos passaram a usar a transcrição durante as consultas. O prontuário já sai pronto ao final do atendimento, precisando apenas de uma revisão rápida.",
    results:
      "Em 3 meses, passamos de 80 para 104 atendimentos diários. Os médicos relatam menos cansaço e mais qualidade de vida. O faturamento aumentou proporcionalmente sem investimento em infraestrutura.",
    quote:
      "O DoctorAI foi o melhor investimento que fiz na clínica nos últimos 5 anos. Retorno imediato e sustentável.",
    metrics: [
      {
        label: "Atendimentos/dia",
        before: "80",
        after: "104",
        improvement: "+30%",
      },
      {
        label: "Tempo/prontuário",
        before: "12 min",
        after: "3 min",
        improvement: "-75%",
      },
      {
        label: "Faturamento mensal",
        before: "R$ 160k",
        after: "R$ 208k",
        improvement: "+30%",
      },
      {
        label: "Satisfação médicos",
        before: "6/10",
        after: "9/10",
        improvement: "+50%",
      },
    ],
    tags: ["Clínica", "Aumento de Faturamento", "Produtividade"],
  },
  {
    id: "case-2",
    name: "Dra. Patrícia Lopes",
    role: "Pediatra Autônoma",
    specialty: "Pediatria",
    location: "Curitiba, PR",
    rating: 5,
    title: "Pediatra recuperou 2 horas do dia para a família",
    summary:
      "Médica autônoma conseguiu eliminar o trabalho de documentação que fazia em casa depois do expediente.",
    challenge:
      "Como pediatra autônoma, eu atendia de manhã e à tarde em consultórios diferentes. À noite, passava 2 horas finalizando prontuários em casa. Estava perdendo tempo com meus filhos por causa de burocracia médica.",
    solution:
      "Comecei a usar o DoctorAI durante as consultas. A transcrição automática captura tudo enquanto examino a criança. Ao final da consulta, reviso rapidamente e o prontuário está pronto.",
    results:
      "Eliminei completamente o trabalho noturno. Chego em casa e estou disponível para minha família. Minha qualidade de vida melhorou drasticamente. Ainda consegui incluir mais 3 pacientes por dia na agenda.",
    quote:
      "Voltei a jantar com meus filhos. Isso não tem preço. O DoctorAI devolveu minha vida pessoal.",
    metrics: [
      {
        label: "Trabalho em casa",
        before: "2h/dia",
        after: "0",
        improvement: "-100%",
      },
      {
        label: "Pacientes/dia",
        before: "18",
        after: "21",
        improvement: "+17%",
      },
      {
        label: "Qualidade de vida",
        before: "4/10",
        after: "9/10",
        improvement: "+125%",
      },
      {
        label: "Burnout",
        before: "Alto",
        after: "Baixo",
        improvement: "Resolvido",
      },
    ],
    tags: ["Pediatria", "Qualidade de Vida", "Autônomo"],
  },
  {
    id: "case-3",
    name: "Dr. Marcos Ferreira",
    role: "Coordenador Médico",
    specialty: "Emergência",
    location: "Belo Horizonte, MG",
    rating: 5,
    title: "PS reduziu tempo de espera em 25% com documentação mais rápida",
    summary:
      "Pronto Socorro de hospital privado conseguiu melhorar fluxo de atendimento otimizando a documentação dos plantonistas.",
    challenge:
      "Nosso PS atendia 200 pacientes por dia com 6 médicos por turno. O tempo de documentação era o principal gargalo. Pacientes esperavam porque médicos estavam ocupados escrevendo prontuários de atendimentos anteriores.",
    solution:
      "Implementamos o DoctorAI em todas as estações de trabalho. Os médicos passaram a documentar em tempo real durante o atendimento. A transição entre pacientes ficou mais fluida.",
    results:
      "O tempo médio de espera caiu de 45 para 34 minutos. A satisfação dos pacientes melhorou significativamente. Os médicos relatam menos estresse e prontuários mais completos para fins médico-legais.",
    quote:
      "A documentação deixou de ser gargalo. Agora o fluxo do PS é determinado pela capacidade real de atendimento, não pela burocracia.",
    metrics: [
      {
        label: "Tempo de espera",
        before: "45 min",
        after: "34 min",
        improvement: "-25%",
      },
      {
        label: "Atendimentos/turno",
        before: "33",
        after: "38",
        improvement: "+15%",
      },
      {
        label: "NPS pacientes",
        before: "32",
        after: "58",
        improvement: "+81%",
      },
      {
        label: "Completude docs",
        before: "72%",
        after: "95%",
        improvement: "+32%",
      },
    ],
    tags: ["Emergência", "Hospital", "Fluxo de Atendimento"],
  },
  {
    id: "case-4",
    name: "Dra. Fernanda Costa",
    role: "Médica de Família",
    specialty: "Clínica Geral",
    location: "Porto Alegre, RS",
    rating: 5,
    title: "UBS melhorou qualidade de prontuários mantendo volume de atendimentos",
    summary:
      "Unidade Básica de Saúde conseguiu melhorar a qualidade da documentação sem sacrificar a quantidade de atendimentos.",
    challenge:
      "Na UBS onde trabalho, a pressão por volume é grande. Acabávamos fazendo prontuários incompletos para dar conta da demanda. Isso gerava problemas de continuidade do cuidado e riscos legais.",
    solution:
      "Propus um piloto com o DoctorAI. Começamos com 2 médicos e os resultados foram tão bons que expandimos para toda a equipe. A gestão aprovou porque não impactou a produtividade.",
    results:
      "A qualidade dos prontuários melhorou drasticamente. Conseguimos manter o mesmo volume de atendimentos com documentação completa. As auditorias não identificam mais lacunas nos registros.",
    quote:
      "Provamos que é possível ter qualidade e quantidade ao mesmo tempo. O DoctorAI foi a chave para isso na nossa UBS.",
    metrics: [
      {
        label: "Completude prontuário",
        before: "58%",
        after: "94%",
        improvement: "+62%",
      },
      {
        label: "Atendimentos/dia",
        before: "25",
        after: "25",
        improvement: "Mantido",
      },
      {
        label: "Não-conformidades",
        before: "12/mês",
        after: "1/mês",
        improvement: "-92%",
      },
      {
        label: "Satisfação equipe",
        before: "5/10",
        after: "8/10",
        improvement: "+60%",
      },
    ],
    tags: ["UBS", "Atenção Primária", "Qualidade"],
  },
];

// Função para buscar caso por ID
export function getCaseById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}
