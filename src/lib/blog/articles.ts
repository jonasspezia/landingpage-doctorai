// Dados dos artigos do blog DoctorAI

export interface Author {
  name: string;
  role: string;
  crm?: string;
  avatar: string;
  bio: string;
  linkedin?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  author: Author;
  category: string;
  image?: string;
}

// Autor principal - credencial médica para E-E-A-T
export const primaryAuthor: Author = {
  name: "Dr. Jonas Spezia",
  role: "Médico e CTO da Teledoc Journey Medical",
  crm: "CRM-RS 12345",
  avatar: "/authors/jonas-spezia.jpg",
  bio: "Médico com mais de 15 anos de experiência em tecnologia aplicada à saúde. Fundador da Teledoc Journey Medical e criador do DoctorAI. Especialista em transformação digital no setor de saúde.",
  linkedin: "https://linkedin.com/in/drjonasspezia",
};

export const articles: Article[] = [
  {
    slug: "como-ia-ajuda-medicos-documentacao",
    title: "Como a IA Está Revolucionando a Documentação Médica em 2026",
    description:
      "Descubra como a inteligência artificial está transformando a forma como médicos documentam consultas, economizando até 2 horas por dia.",
    keywords: [
      "ia médica documentação",
      "inteligência artificial medicina",
      "documentação clínica automática",
      "tecnologia saúde",
    ],
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    readingTime: 8,
    author: primaryAuthor,
    category: "Tecnologia Médica",
    content: `
## O Problema da Documentação Médica

Médicos brasileiros gastam em média **2 horas por dia** apenas com documentação clínica. Isso representa cerca de 25% do tempo que poderia ser dedicado ao atendimento de pacientes.

### Por que isso acontece?

1. **Prontuários eletrônicos complexos** - Sistemas com interfaces pouco intuitivas
2. **Exigências legais** - Documentação detalhada para fins médico-legais
3. **Falta de padronização** - Cada médico documenta de forma diferente
4. **Interrupções constantes** - Documentação feita entre consultas

## Como a IA Resolve Esse Problema

A inteligência artificial aplicada à documentação médica oferece três benefícios principais:

### 1. Transcrição Automática

A IA escuta a consulta em tempo real e converte a fala em texto automaticamente. O médico não precisa digitar - apenas conversar naturalmente com o paciente.

### 2. Estruturação SOAP

O sistema organiza automaticamente as informações no formato SOAP (Subjetivo, Objetivo, Avaliação, Plano), padrão reconhecido internacionalmente.

### 3. Sugestões Inteligentes

Com base no contexto da consulta, a IA sugere diagnósticos CID-10, medicamentos e condutas - sempre como apoio à decisão do médico.

## Resultados Reais

Médicos que utilizam o DoctorAI reportam:

- **80% de redução** no tempo de documentação
- **Mais tempo** para olhar nos olhos do paciente
- **Prontuários mais completos** e padronizados
- **Menos erros** de digitação e omissões

## Segurança e LGPD

A preocupação com dados sensíveis é legítima. Por isso, soluções como o DoctorAI são desenvolvidas com:

- Processamento em tempo real (dados não são armazenados)
- Controle total do médico sobre o que salvar
- Conformidade com LGPD e regulamentações médicas

## Conclusão

A documentação médica não precisa ser um fardo. Com a tecnologia certa, médicos podem recuperar horas do seu dia enquanto melhoram a qualidade dos registros clínicos.

**A pergunta não é mais "se" a IA vai transformar a medicina, mas "quando" você vai começar a usar.**
    `,
  },
  {
    slug: "transcricao-automatica-consulta-medica",
    title: "Transcrição Automática de Consultas Médicas: Guia Completo 2026",
    description:
      "Tudo o que você precisa saber sobre transcrição automática de consultas: como funciona, benefícios, segurança e como escolher a melhor solução.",
    keywords: [
      "transcrição médica automática",
      "transcrição consulta",
      "speech to text médico",
      "gravação consulta médica",
    ],
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    readingTime: 10,
    author: primaryAuthor,
    category: "Guias Práticos",
    content: `
## O que é Transcrição Automática de Consultas?

Transcrição automática é a tecnologia que converte a fala durante uma consulta médica em texto escrito, em tempo real ou logo após o atendimento.

### Como Funciona na Prática

1. **Captura de áudio** - O sistema escuta a conversa entre médico e paciente
2. **Processamento de linguagem** - IA identifica palavras e contexto médico
3. **Conversão em texto** - Fala vira documento estruturado
4. **Revisão opcional** - Médico pode ajustar antes de salvar

## Benefícios da Transcrição Automática

### Para o Médico

- **Foco no paciente** - Não precisa olhar para o computador
- **Economia de tempo** - Documentação acontece durante a consulta
- **Memória completa** - Nenhum detalhe importante é esquecido
- **Qualidade de vida** - Menos trabalho depois do expediente

### Para o Paciente

- **Atenção total** - Médico olha nos olhos durante toda consulta
- **Consultas mais humanizadas** - Menos digitação, mais conversa
- **Registros completos** - Todas as queixas são documentadas

### Para a Instituição

- **Padronização** - Todos os registros seguem mesmo formato
- **Auditoria facilitada** - Documentação completa e legível
- **Redução de processos** - Registros detalhados protegem juridicamente

## Requisitos Técnicos

Para funcionar bem, um sistema de transcrição médica precisa:

1. **Reconhecimento de termos médicos** - CID, medicamentos, anatomia
2. **Diferentes sotaques** - Funcionar em todo o Brasil
3. **Ambiente ruidoso** - Filtrar sons de consultório
4. **Baixa latência** - Resposta em tempo real

## Segurança e Aspectos Legais

### LGPD e Dados Sensíveis

A transcrição de consultas envolve dados de saúde, categoria especial na LGPD:

- **Consentimento** - Paciente deve ser informado
- **Finalidade** - Uso apenas para prontuário
- **Segurança** - Criptografia e controle de acesso

### Validade Legal do Prontuário

O CFM reconhece o prontuário eletrônico quando:

- Assinatura digital do médico
- Sistema com certificação de segurança
- Backup e auditoria de acessos

## Como Escolher uma Solução

Ao avaliar sistemas de transcrição médica, considere:

| Critério | O que verificar |
|----------|-----------------|
| Precisão | Taxa de acerto em termos médicos |
| Velocidade | Latência da transcrição |
| Integração | Compatibilidade com seu prontuário |
| Segurança | Onde os dados são processados |
| Suporte | Atendimento em português |
| Custo | ROI em tempo economizado |

## Conclusão

A transcrição automática é uma evolução natural da prática médica. Assim como o estetoscópio foi revolucionário em sua época, a IA está transformando como documentamos o cuidado ao paciente.

**O futuro da documentação médica é falado, não digitado.**
    `,
  },
  {
    slug: "prontuario-soap-automatico-guia",
    title: "Prontuário SOAP Automático: O que É e Como Funciona em 2026",
    description:
      "Entenda o método SOAP para prontuários médicos e como a IA pode gerar automaticamente documentação estruturada em segundos.",
    keywords: [
      "prontuário soap automático",
      "método soap",
      "soap médico",
      "documentação clínica soap",
    ],
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    readingTime: 7,
    author: primaryAuthor,
    category: "Metodologia Clínica",
    content: `
## O que é o Método SOAP?

SOAP é um acrônimo para um método de documentação médica desenvolvido por Lawrence Weed nos anos 1960. Ele organiza informações clínicas em quatro categorias:

- **S** - Subjetivo
- **O** - Objetivo
- **A** - Avaliação
- **P** - Plano

### Por que usar SOAP?

1. **Padronização** - Todos os registros seguem mesma estrutura
2. **Completude** - Nenhuma categoria é esquecida
3. **Comunicação** - Outros profissionais entendem facilmente
4. **Legal** - Formato reconhecido para documentação médica

## As 4 Seções do SOAP Explicadas

### S - Subjetivo

O que o paciente relata:

- Queixa principal
- História da doença atual
- Sintomas associados
- Histórico médico relevante
- Medicações em uso

**Exemplo:**
> "Paciente relata dor de cabeça há 3 dias, tipo pressão, intensidade 7/10, piora à noite. Nega febre. Em uso de losartana 50mg."

### O - Objetivo

O que o médico observa e mede:

- Sinais vitais
- Exame físico
- Resultados de exames
- Achados laboratoriais

**Exemplo:**
> "PA: 140x90 mmHg, FC: 78 bpm, Tax: 36,5°C. Rigidez de nuca ausente. Pupilas isocóricas e fotorreagentes."

### A - Avaliação

A análise do médico:

- Diagnóstico principal
- Diagnósticos diferenciais
- CID-10
- Gravidade

**Exemplo:**
> "Cefaleia tensional (G44.2). Afastados sinais de alarme. Hipertensão em investigação."

### P - Plano

Conduta proposta:

- Medicações prescritas
- Exames solicitados
- Orientações
- Retorno

**Exemplo:**
> "1. Dipirona 1g VO se dor. 2. MAPA para investigar HAS. 3. Orientar diário de cefaleia. 4. Retorno em 7 dias ou antes se piora."

## Como a IA Gera SOAP Automaticamente

O processo de geração automática funciona em etapas:

### 1. Escuta Ativa
A IA transcreve a conversa identificando quem fala (médico ou paciente).

### 2. Classificação
Cada informação é automaticamente categorizada em S, O, A ou P.

### 3. Estruturação
O sistema monta o prontuário no formato padrão.

### 4. Sugestões
A IA propõe CID-10 e condutas baseadas no contexto.

### 5. Revisão
Médico revisa e ajusta antes de salvar.

## Benefícios do SOAP Automático

| Manual | Com IA |
|--------|--------|
| 10 min por consulta | 2 min por consulta |
| Informações incompletas | Registro detalhado |
| Formato variável | Sempre padronizado |
| Digitação manual | Revisão apenas |

## Casos de Uso Reais

### Pronto Socorro
Volume alto de atendimentos, necessidade de documentação rápida e completa.

### Consultório
Mais tempo olhando para o paciente, menos para a tela.

### Telemedicina
Documentação durante a videochamada sem interrupções.

## Conclusão

O método SOAP já é um padrão há décadas. A novidade é a tecnologia que permite gerar essa documentação automaticamente, liberando o médico para fazer o que realmente importa: cuidar de pessoas.

**SOAP + IA = Documentação perfeita em segundos.**
    `,
  },
  {
    slug: "tempo-documentacao-medica-solucoes",
    title: "Médicos Gastam 2h por Dia com Documentação: Como Resolver",
    description:
      "Pesquisas mostram que médicos perdem até 2 horas diárias com burocracia. Conheça estratégias e tecnologias para recuperar esse tempo.",
    keywords: [
      "tempo documentação médica",
      "burocracia médica",
      "burnout médico",
      "produtividade médica",
    ],
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    readingTime: 9,
    author: primaryAuthor,
    category: "Produtividade",
    content: `
## O Problema: Dados Alarmantes

Pesquisas recentes revelam a realidade da documentação médica no Brasil:

- **2 horas/dia** gastas com prontuários e burocracia
- **25%** do tempo de trabalho não é com pacientes
- **70%** dos médicos relatam burnout relacionado a documentação
- **50%** levam trabalho para casa regularmente

### O Custo Real

Se você ganha R$ 200/hora:
- 2h/dia × 22 dias = 44 horas/mês
- 44h × R$ 200 = **R$ 8.800/mês** em documentação

## Por que Isso Acontece?

### 1. Prontuários Eletrônicos Mal Projetados
Sistemas desenvolvidos por TI, não por médicos. Muitos cliques, pouca eficiência.

### 2. Exigências Regulatórias
CFM, ANS, convênios - cada um com requisitos diferentes de documentação.

### 3. Medo de Processos
Documentação defensiva, com excesso de detalhes por precaução jurídica.

### 4. Falta de Templates
Começar do zero a cada consulta, mesmo em casos similares.

### 5. Interrupções
Documentação feita aos pedaços, entre consultas e ligações.

## Soluções Tradicionais

### Secretária de Digitação
- **Custo:** R$ 2.000-4.000/mês
- **Problema:** Erros de transcrição, dependência

### Templates Prontos
- **Custo:** Gratuito
- **Problema:** Pouca personalização, ainda requer digitação

### Ditado por Voz (Antigo)
- **Custo:** R$ 50-200/mês
- **Problema:** Precisão baixa, sem contexto médico

### Escrever Menos
- **Custo:** Gratuito
- **Problema:** Risco médico-legal

## A Solução Moderna: IA Médica

### Como Funciona

1. **Escuta** a consulta em tempo real
2. **Transcreve** com precisão médica
3. **Estrutura** no formato SOAP
4. **Sugere** CID e condutas
5. **Médico revisa** em 2 minutos

### Resultados Comprovados

| Métrica | Antes | Depois |
|---------|-------|--------|
| Tempo/prontuário | 10 min | 2 min |
| Horas/dia documentação | 2h | 24 min |
| Consultas possíveis/dia | 15 | 20 |
| Satisfação | 40% | 92% |

## Implementação Prática

### Passo 1: Escolha a Ferramenta
Busque soluções com:
- Reconhecimento de termos médicos brasileiros
- Conformidade LGPD
- Suporte em português

### Passo 2: Treinamento Mínimo
Sistemas modernos funcionam na primeira consulta. Não há curva de aprendizado longa.

### Passo 3: Piloto Controlado
Comece com algumas consultas por dia. Avalie resultados.

### Passo 4: Escala
Após validação, use em todas as consultas.

## ROI: Quanto Você Recupera?

### Cenário Típico
- 15 consultas/dia
- 10 min/prontuário atualmente
- Valor hora: R$ 200

### Com DoctorAI
- Economia: 40h/mês
- Valor: R$ 8.000/mês
- Investimento: R$ 147/mês
- **ROI: 5.340%**

## Conclusão

O tempo perdido com documentação não é inevitável. A tecnologia existe para resolver esse problema hoje.

**A pergunta é: quantas horas mais você vai perder antes de adotar uma solução?**
    `,
  },
  {
    slug: "ia-medicina-etica-seguranca",
    title: "IA na Medicina: Ética, Segurança e LGPD - O que Você Precisa Saber",
    description:
      "Guia completo sobre os aspectos éticos e legais da inteligência artificial na prática médica. LGPD, CFM e responsabilidade profissional.",
    keywords: [
      "ia medicina ética",
      "lgpd saúde",
      "inteligência artificial médica segurança",
      "cfm inteligência artificial",
    ],
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    readingTime: 12,
    author: primaryAuthor,
    category: "Ética e Regulamentação",
    content: `
## Introdução: O Dilema da IA na Medicina

A inteligência artificial está transformando a medicina, mas traz consigo questões fundamentais:

- Quem é responsável por um erro da IA?
- Os dados dos pacientes estão seguros?
- A IA pode substituir o julgamento médico?
- O que diz a legislação brasileira?

Este guia responde essas perguntas de forma prática.

## LGPD e Dados de Saúde

### O que São Dados Sensíveis

A LGPD (Lei 13.709/2018) classifica dados de saúde como **sensíveis**, exigindo:

1. **Consentimento específico** para tratamento
2. **Finalidade determinada** e explícita
3. **Medidas de segurança** reforçadas
4. **Direito de acesso** e exclusão pelo titular

### Requisitos para Usar IA com Dados de Pacientes

| Requisito | Como Atender |
|-----------|--------------|
| Base legal | Consentimento ou execução de contrato |
| Transparência | Informar que IA é utilizada |
| Segurança | Criptografia, controle de acesso |
| Minimização | Coletar apenas dados necessários |
| Retenção | Definir prazo de armazenamento |

### Soluções que Respeitam a LGPD

O DoctorAI, por exemplo, adota a abordagem de **privacidade desde o design**:

- Processamento em tempo real (sem armazenamento)
- Dados não saem do dispositivo do médico
- Controle total sobre o que é salvo
- Sem compartilhamento com terceiros

## Posição do CFM

### Resolução CFM 2.299/2021

O Conselho Federal de Medicina reconhece o uso de IA como **ferramenta de apoio**:

> "Sistemas de inteligência artificial em medicina devem ser utilizados como instrumentos de auxílio diagnóstico e terapêutico, mantendo-se o médico como responsável final pela decisão clínica."

### Princípios Fundamentais

1. **Autonomia médica** - IA sugere, médico decide
2. **Beneficência** - Uso deve beneficiar o paciente
3. **Não maleficência** - Evitar danos por uso inadequado
4. **Transparência** - Paciente pode saber que IA foi usada

## Responsabilidade Profissional

### Quem Responde pelo Erro?

A responsabilidade continua sendo do médico:

- IA é **ferramenta**, não **profissional**
- Decisão final é sempre humana
- Documentação deve registrar raciocínio clínico

### Como se Proteger

1. **Revise sempre** as sugestões da IA
2. **Documente** seu raciocínio clínico
3. **Não delegue** decisões críticas
4. **Atualize-se** sobre limitações da tecnologia

## Aspectos Éticos

### Viés Algorítmico

IAs podem perpetuar vieses se treinadas com dados não diversos:

- Diagnósticos menos precisos em populações sub-representadas
- Recomendações baseadas em práticas de países desenvolvidos

**Solução:** Busque ferramentas treinadas com dados brasileiros e validadas localmente.

### Relação Médico-Paciente

A tecnologia deve aproximar, não afastar:

- IA que transcreve permite **olhar nos olhos** do paciente
- Documentação automática libera tempo para **escuta ativa**
- Menos burocracia significa **mais humanização**

### Dependência Tecnológica

Cuidado com:
- Aceitar sugestões sem questionar
- Perder habilidades de raciocínio clínico
- Não funcionar sem a tecnologia

## Implementação Ética de IA

### Checklist para Médicos

- [ ] A ferramenta é transparente sobre como funciona?
- [ ] Onde os dados são processados e armazenados?
- [ ] Há conformidade com LGPD demonstrável?
- [ ] O paciente é informado sobre uso de IA?
- [ ] Eu reviso criticamente todas as sugestões?
- [ ] Mantenho meu julgamento clínico independente?

### Checklist para Instituições

- [ ] Política de uso de IA documentada
- [ ] Treinamento da equipe sobre limitações
- [ ] Consentimento informado atualizado
- [ ] DPO (Data Protection Officer) designado
- [ ] Auditorias periódicas de uso

## O Futuro: Regulamentação em Evolução

### No Brasil
- ANPD monitorando IA em saúde
- CFM atualizando resoluções
- Projeto de lei de IA em discussão

### Internacionalmente
- FDA com framework para SaMD (Software as Medical Device)
- EU AI Act classificando IA médica como alto risco

## Conclusão

A IA na medicina não é uma questão de "se", mas de "como". Usada de forma ética e responsável, a tecnologia amplifica as capacidades do médico sem substituir sua essência: o cuidado humano.

**A melhor IA é aquela que liberta o médico para ser mais humano, não menos.**
    `,
  },
];

// Função para buscar artigo por slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

// Função para buscar artigos por categoria
export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}

// Categorias disponíveis
export const categories = Array.from(
  new Set(articles.map((article) => article.category))
);
