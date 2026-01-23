import { Play } from "lucide-react";

export default function Demo() {
  return (
    <section id="demo" className="relative py-24 bg-cinza-900 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-5 text-center">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-xs font-bold text-dourado uppercase tracking-wider mb-6">
            <Play className="w-3 h-3" />
            Demonstração
          </span>
          <h2 className="text-h2 text-white mb-4">
            Veja o resultado em <span className="gradient-text">segundos</span>
          </h2>
          <p className="text-lg text-cinza-400 max-w-2xl mx-auto">
            O DoctorAI transforma sua consulta em prontuário estruturado automaticamente
          </p>
        </div>

        {/* Demo Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Browser Frame */}
          <div className="relative bg-cinza-800 rounded-2xl shadow-elevated overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-cinza-900 border-b border-cinza-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-cinza-800 rounded-lg px-4 py-1.5 text-xs text-cinza-500 max-w-md mx-auto flex items-center gap-2 justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  doctorai.teledocmedical.ai/soap
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <img
              src="/demo-soap.png"
              alt="Exemplo de SOAP gerado pelo DoctorAI"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
