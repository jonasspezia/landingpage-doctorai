import { MessageCircle, FileText, Check, Zap, Mic, Copy, FileCheck } from "lucide-react";

export default function Solution() {
  const solutions = [
    {
      icon: MessageCircle,
      title: "Assistente de IA",
      badge: "Inteligência Artificial",
      badgeColor: "bg-blue-500",
      description: "Converse naturalmente com uma IA médica treinada em protocolos brasileiros. Respostas instantâneas e contextuais.",
      features: [
        { icon: Zap, text: "Doses pediátricas e ajustes renais" },
        { icon: Zap, text: "Diagnóstico diferencial inteligente" },
        { icon: Zap, text: "Análise de interações medicamentosas" },
        { icon: Zap, text: "Interpretação de ECG e exames" },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Modo Notas",
      badge: "Documentação completa",
      badgeColor: "bg-dourado",
      description: "Grave a consulta e transforme em prontuário SOAP automaticamente.",
      features: [
        { icon: Mic, text: "Transcrição em tempo real" },
        { icon: FileCheck, text: "Geração automática de SOAP" },
        { icon: Copy, text: "Copiar para qualquer prontuário" },
        { icon: FileText, text: "Prescrições automáticas" },
      ],
      gradient: "from-dourado to-amber-500",
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/30 to-white" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 btn-gradient text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-glow">
            <Zap className="w-3 h-3" />
            A Solução
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-preto mb-4">
            DoctorAI:{" "}
            <span className="gradient-text">Inteligência Artificial</span>
            <br className="hidden sm:block" />para o médico moderno
          </h2>
          <p className="text-lg text-cinza-500 max-w-xl mx-auto">
            Dois modos poderosos: converse com a IA ou transcreva consultas
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative card-gradient-border card-hover rounded-2xl"
            >
              <div className="relative bg-white rounded-2xl p-8 lg:p-10 h-full">
                {/* Badge */}
                <span className={`inline-block ${solution.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-6`}>
                  {solution.badge}
                </span>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-preto">{solution.title}</h3>
                </div>

                {/* Description */}
                <p className="text-cinza-500 mb-8 text-lg">{solution.description}</p>

                {/* Features */}
                <ul className="space-y-4">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 group/item">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${solution.gradient} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-4 h-4 text-verde" />
                      </div>
                      <span className="text-cinza-600 group-hover/item:text-cinza-800 transition-colors">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
