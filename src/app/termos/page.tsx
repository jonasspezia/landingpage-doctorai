import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso | DoctorAI - Teledoc Journey Medical",
  description: "Termos e condicoes de uso da plataforma DoctorAI. Leia atentamente antes de utilizar nossos servicos.",
};

export default function TermosPage() {
  return (
    <>
      <Header variant="light" />

      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-cinza-50 to-white py-12 border-b border-cinza-100">
          <div className="max-w-4xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-cinza-500 hover:text-dourado transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o inicio
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-preto">
              Termos de Uso
            </h1>
            <p className="text-cinza-500 mt-2">
              Ultima atualizacao: Janeiro de 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-5 py-12">
          <div className="prose prose-lg max-w-none">

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">1. Aceitacao dos Termos</h2>
              <p className="text-cinza-600 leading-relaxed">
                Ao acessar ou utilizar o DoctorAI (&quot;Plataforma&quot;), voce concorda com estes Termos de Uso.
                Se voce nao concordar com qualquer parte destes termos, nao devera utilizar a Plataforma.
                Estes termos constituem um contrato legal entre voce e a Teledoc Journey Medical
                (&quot;Teledoc&quot;, &quot;nos&quot;, &quot;nosso&quot;).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">2. Descricao do Servico</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                O DoctorAI e uma ferramenta de inteligencia artificial projetada para auxiliar profissionais
                de saude em tarefas administrativas e de documentacao, incluindo:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Transcricao de consultas medicas em tempo real</li>
                <li>Geracao automatica de prontuarios no formato SOAP</li>
                <li>Assistencia em pesquisas de literatura medica</li>
                <li>Chat com IA para duvidas clinicas gerais</li>
                <li>Organizacao e estruturacao de informacoes clinicas</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">3. Limitacoes Importantes</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-cinza-700 font-semibold mb-2">AVISO IMPORTANTE:</p>
                <p className="text-cinza-600">
                  O DoctorAI e uma ferramenta de ASSISTENCIA e NAO substitui o julgamento clinico do
                  profissional de saude. Todas as informacoes geradas pela IA devem ser revisadas
                  e validadas pelo medico responsavel antes de qualquer uso clinico.
                </p>
              </div>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>A IA pode gerar informacoes imprecisas ou incompletas</li>
                <li>O profissional de saude e integralmente responsavel pelas decisoes clinicas</li>
                <li>A Teledoc nao se responsabiliza por diagnosticos ou tratamentos baseados exclusivamente nas sugestoes da IA</li>
                <li>O uso da plataforma nao estabelece relacao medico-paciente entre a Teledoc e os pacientes atendidos</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">4. Elegibilidade e Registro</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                Para utilizar o DoctorAI, voce deve:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Ser profissional de saude devidamente registrado em seu conselho de classe (CRM, CRO, COREN, etc.)</li>
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Fornecer informacoes verdadeiras e precisas no cadastro</li>
                <li>Manter suas credenciais de acesso em sigilo</li>
                <li>Notificar imediatamente sobre qualquer uso nao autorizado de sua conta</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">5. Uso Aceitavel</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                Voce concorda em utilizar a Plataforma de forma etica e em conformidade com:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>O Codigo de Etica Medica e demais normas do CFM/CRM</li>
                <li>A Lei Geral de Protecao de Dados (LGPD - Lei 13.709/2018)</li>
                <li>As normas de sigilo medico-paciente</li>
                <li>Todas as leis e regulamentacoes aplicaveis</li>
              </ul>
              <p className="text-cinza-600 leading-relaxed mt-4">
                E expressamente proibido:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Compartilhar acesso com terceiros nao autorizados</li>
                <li>Utilizar a plataforma para fins ilegais ou antieticos</li>
                <li>Tentar acessar areas restritas do sistema</li>
                <li>Realizar engenharia reversa ou copiar o software</li>
                <li>Utilizar a IA para gerar conteudo falso ou enganoso</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">6. Pagamento e Assinatura</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                Os servicos do DoctorAI sao oferecidos mediante assinatura paga:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li><strong>Plano Profissional:</strong> R$ 97,00/mes, cobrado mensalmente</li>
                <li><strong>Plano Empresarial:</strong> R$ 149,00/mes, cobrado mensalmente</li>
              </ul>
              <p className="text-cinza-600 leading-relaxed mt-4">
                Condicoes de pagamento:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Pagamentos processados de forma segura via Stripe</li>
                <li>A assinatura e renovada automaticamente ao final de cada periodo</li>
                <li>Voce pode cancelar a qualquer momento sem multa</li>
                <li>Nao ha reembolso proporcional para periodos nao utilizados</li>
                <li>Os precos podem ser ajustados com aviso previo de 30 dias</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">7. Propriedade Intelectual</h2>
              <p className="text-cinza-600 leading-relaxed">
                Todo o conteudo da Plataforma, incluindo software, textos, graficos, logos, icones,
                imagens e modelos de IA, e de propriedade exclusiva da Teledoc Journey Medical ou
                de seus licenciadores. Voce nao adquire qualquer direito de propriedade sobre o
                software ou tecnologia ao utilizar a Plataforma.
              </p>
              <p className="text-cinza-600 leading-relaxed mt-4">
                O conteudo gerado pela IA a partir de suas informacoes permanece sob sua responsabilidade,
                e voce mantem os direitos sobre os dados clinicos de seus pacientes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">8. Limitacao de Responsabilidade</h2>
              <p className="text-cinza-600 leading-relaxed">
                A Teledoc fornece o DoctorAI &quot;como esta&quot; e &quot;conforme disponivel&quot;. Nao garantimos que:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2 mt-4">
                <li>O servico sera ininterrupto ou livre de erros</li>
                <li>As informacoes geradas pela IA serao sempre precisas ou completas</li>
                <li>O sistema atendera a todas as suas necessidades especificas</li>
              </ul>
              <p className="text-cinza-600 leading-relaxed mt-4">
                Em nenhuma hipotese a Teledoc sera responsavel por danos indiretos, incidentais,
                consequenciais ou punitivos, incluindo perda de lucros, dados ou oportunidades de negocio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">9. Rescisao</h2>
              <p className="text-cinza-600 leading-relaxed">
                Voce pode cancelar sua assinatura a qualquer momento atraves das configuracoes da conta
                ou entrando em contato conosco. A Teledoc pode suspender ou encerrar seu acesso em caso de:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2 mt-4">
                <li>Violacao destes Termos de Uso</li>
                <li>Uso indevido ou fraudulento da Plataforma</li>
                <li>Inadimplencia por mais de 30 dias</li>
                <li>Solicitacao de autoridades competentes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">10. Alteracoes nos Termos</h2>
              <p className="text-cinza-600 leading-relaxed">
                Podemos atualizar estes Termos periodicamente. Alteracoes significativas serao comunicadas
                por e-mail ou atraves de aviso na Plataforma. O uso continuado apos as alteracoes constitui
                aceitacao dos novos termos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">11. Disposicoes Gerais</h2>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li><strong>Lei Aplicavel:</strong> Estes termos sao regidos pelas leis do Brasil</li>
                <li><strong>Foro:</strong> Fica eleito o foro da Comarca de Porto Alegre/RS para dirimir quaisquer controversias</li>
                <li><strong>Integralidade:</strong> Estes termos constituem o acordo completo entre as partes</li>
                <li><strong>Tolerancia:</strong> A tolerancia quanto a qualquer violacao nao implica renuncia de direitos</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">12. Contato</h2>
              <p className="text-cinza-600 leading-relaxed">
                Para duvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-cinza-50 p-6 rounded-xl mt-4">
                <p className="text-cinza-700"><strong>Teledoc Journey Medical</strong></p>
                <p className="text-cinza-600">TELEDOC CURSOS LTDA</p>
                <p className="text-cinza-600 mt-2">
                  E-mail: <a href="mailto:teledoc@teledocmedical.com" className="text-dourado hover:underline">teledoc@teledocmedical.com</a>
                </p>
                <p className="text-cinza-600">
                  Site: <a href="https://teledocmedical.ai" target="_blank" rel="noopener noreferrer" className="text-dourado hover:underline">teledocmedical.ai</a>
                </p>
                <p className="text-cinza-600">Ilopolis, RS - Brasil</p>
              </div>
            </section>

          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-cinza-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-dourado hover:text-dourado-escuro transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para a pagina inicial
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
