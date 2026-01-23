import { ShieldCheck, Lock, Server, Eye } from "lucide-react";

export default function Guarantee() {
  const guarantees = [
    { icon: Lock, text: "Dados criptografados" },
    { icon: Server, text: "Nada armazenado" },
    { icon: Eye, text: "Privacidade total" },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-verde/5 via-verde/10 to-verde/5" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative max-w-5xl mx-auto px-5">
        <div className="glass rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 w-24 h-24 bg-verde/20 rounded-full blur-xl" />
            <div className="relative w-24 h-24 bg-gradient-to-br from-verde to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-preto mb-3">
              Seus dados <span className="text-verde">100% protegidos</span>
            </h3>
            <p className="text-cinza-600 mb-6 max-w-2xl">
              Não armazenamos gravações ou dados de pacientes. Tudo é processado de forma segura e descartado após uso. Você tem controle total.
            </p>

            {/* Mini Guarantees */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {guarantees.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-verde/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-verde" />
                  </div>
                  <span className="text-cinza-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
