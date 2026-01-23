import { UserPlus, FileEdit, Mic, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { number: 1, title: "Crie sua conta", description: "Cadastro rápido com email", icon: UserPlus },
    { number: 2, title: "Abra as Notas", description: "Clique no ícone de notas", icon: FileEdit },
    { number: 3, title: "Grave a consulta", description: "Ative o microfone", icon: Mic },
    { number: 4, title: "Gere o SOAP", description: "Peça para organizar", icon: Sparkles },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cinza-50 via-amber-50/30 to-cinza-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-dourado text-sm font-bold uppercase tracking-wider mb-3">
            Simples de usar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-preto">
            Comece em <span className="gradient-text">2 minutos</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-1">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-dourado/20 via-dourado to-dourado/20 rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-r from-dourado/20 via-dourado to-dourado/20 rounded-full animate-shimmer" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group text-center relative z-10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-28 h-28 mx-auto bg-gradient-to-br from-dourado/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Outer Ring */}
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dourado to-dourado-claro opacity-20 group-hover:opacity-40 transition-opacity" />

                    {/* Inner Circle */}
                    <div className="absolute inset-2 btn-gradient text-white rounded-full flex flex-col items-center justify-center shadow-glow group-hover:shadow-glow-lg group-hover:scale-105 transition-all duration-300">
                      <step.icon className="w-7 h-7 mb-1" />
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-preto mb-2 group-hover:text-dourado-escuro transition-colors">
                  {step.title}
                </h4>
                <p className="text-sm text-cinza-500 max-w-[150px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
