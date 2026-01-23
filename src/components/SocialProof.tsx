import { Brain, MessageSquare, Clock, Shield } from "lucide-react";

export default function SocialProof() {
  const features = [
    { icon: Brain, label: "Copiloto Médico de IA", description: "Inteligência clínica" },
    { icon: MessageSquare, label: "Chat Especializado", description: "Dúvidas médicas" },
    { icon: Clock, label: "Prontuário SOAP", description: "Geração automática" },
    { icon: Shield, label: "100% Seguro", description: "Dados protegidos" },
  ];

  return (
    <section className="relative bg-gradient-to-r from-cinza-900 via-preto to-cinza-900 py-12 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 bg-dots-pattern opacity-30" />

      {/* Glow effects */}
      <div className="absolute left-1/4 top-0 w-64 h-32 bg-dourado/10 blur-3xl" />
      <div className="absolute right-1/4 bottom-0 w-64 h-32 bg-dourado/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 text-center md:text-left"
            >
              <div className="flex w-12 h-12 rounded-xl bg-gradient-to-br from-dourado/20 to-dourado/5 items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-5 h-5 text-dourado" />
              </div>
              <div>
                <div className="text-lg md:text-xl font-bold text-white">
                  {feature.label}
                </div>
                <div className="text-sm text-cinza-400 font-medium">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
