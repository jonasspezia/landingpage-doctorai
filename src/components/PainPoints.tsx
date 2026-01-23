import { Clock, Frown, HeartCrack, ChevronDown } from "lucide-react";

export default function PainPoints() {
  const pains = [
    {
      icon: Clock,
      title: "Horas extras digitando",
      description: "Fica até tarde no consultório só para terminar os prontuários do dia",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Frown,
      title: "Consultas apressadas",
      description: "Precisa correr com o paciente para ter tempo de documentar",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: HeartCrack,
      title: "Burnout crescente",
      description: "A burocracia consome a energia que deveria ir para os pacientes",
      color: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-cinza-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cinza-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="inline-block text-cinza-500 text-sm font-semibold uppercase tracking-wider mb-3">
            O problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-preto">
            Você se identifica com isso?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 card-hover cursor-default"
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pain.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <pain.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-preto mb-3 group-hover:text-cinza-800 transition-colors">
                  {pain.title}
                </h3>
                <p className="text-cinza-500 leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow indicator */}
        <div className="flex justify-center pt-16">
          <div className="flex flex-col items-center gap-2 text-dourado animate-bounce">
            <span className="text-sm font-medium">A solução</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
