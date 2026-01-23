import { Users, FileText, Clock, Star } from "lucide-react";

export default function SocialProof() {
  const stats = [
    { number: "+500", label: "Médicos ativos", icon: Users },
    { number: "50.000+", label: "Consultas transcritas", icon: FileText },
    { number: "2h", label: "Economia média/dia", icon: Clock },
    { number: "4.9/5", label: "Avaliação média", icon: Star },
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
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 text-center md:text-left"
            >
              <div className="hidden md:flex w-12 h-12 rounded-xl bg-gradient-to-br from-dourado/20 to-dourado/5 items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5 text-dourado" />
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dourado to-dourado-claro">
                  {stat.number}
                </div>
                <div className="text-sm text-cinza-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
