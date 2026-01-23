import { Star, Quote, MessageCircle } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Antes ficava 2 horas após o expediente só digitando. Agora termino junto com o último paciente. Mudou minha vida.",
      author: "Dr. Ricardo M.",
      role: "Clínico Geral - SP",
      initials: "DR",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      text: "A transcrição é perfeita. Uso principalmente no plantão quando preciso de doses rápidas. Já salvou vários atendimentos.",
      author: "Dra. Marina S.",
      role: "Emergencista - RJ",
      initials: "DM",
      gradient: "from-dourado to-amber-500",
    },
    {
      text: "Uso há 3 meses e já não consigo imaginar trabalhar sem. O SOAP fica perfeito, só preciso revisar e pronto.",
      author: "Dr. Paulo F.",
      role: "Pediatra - RS",
      initials: "DP",
      gradient: "from-verde to-emerald-500",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-amber-50/20 to-white" />

      <div className="relative max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 btn-gradient text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-glow">
            <MessageCircle className="w-3 h-3" />
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-preto mb-4">
            O que os <span className="gradient-text">médicos</span> dizem
          </h2>
          <p className="text-lg text-cinza-500">
            Histórias reais de profissionais que transformaram sua rotina
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative card-gradient-border card-hover rounded-2xl"
            >
              <div className="relative bg-white rounded-2xl p-8 h-full">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-dourado/10 to-dourado/5 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-dourado fill-current" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 pt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-dourado fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-cinza-600 leading-relaxed mb-8">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-cinza-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-preto">{testimonial.author}</h4>
                    <p className="text-sm text-cinza-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
