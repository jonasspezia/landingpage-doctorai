import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos de Uso | DoctorAI - Teledoc Journey Medical",
  description: "Termos e condições de uso da plataforma DoctorAI. Leia atentamente antes de utilizar nossos serviços.",
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
              Voltar para o início
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-preto">
              Termos de Uso
            </h1>
            <p className="text-cinza-500 mt-2">
              Última atualização: Janeiro de 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="max-w-4xl mx-auto px-5 py-12">
          <div className="prose prose-lg max-w-none">

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">1. Aceitação dos Termos</h2>
              <p className="text-cinza-600 leading-relaxed">
                Ao acessar ou utilizar o DoctorAI (&quot;Plataforma&quot;), você concorda com estes Termos de Uso.
                Se você não concordar com qualquer parte destes termos, não deverá utilizar a Plataforma.
                Estes termos constituem um contrato legal entre você e a Teledoc Journey Medical
                (&quot;Teledoc&quot;, &quot;nos&quot;, &quot;nosso&quot;).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">2. Descrição do Serviço</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                O DoctorAI e uma ferramenta de inteligência artificial projetada para auxiliar profissionais
                de saúde em tarefas administrativas e de documentação, incluindo:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Transcrição de consultas médicas em tempo real</li>
                <li>Geração automática de prontuários no formato SOAP</li>
                <li>Assistência em pesquisas de literatura médica</li>
                <li>Chat com IA para dúvidas clínicas gerais</li>
                <li>Organização e estruturação de informações clínicas</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">3. Limitações Importantes</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-cinza-700 font-semibold mb-2">AVISO IMPORTANTE:</p>
                <p className="text-cinza-600">
                  O DoctorAI é uma ferramenta de ASSISTÊNCIA e NÃO substitui o julgamento clínico do
                  profissional de saúde. Todas as informações geradas pela IA devem ser revisadas
                  e validadas pelo médico responsável antes de qualquer uso clínico.
                </p>
              </div>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>A IA pode gerar informações imprecisas ou incompletas</li>
                <li>O profissional de saúde é integralmente responsável pelas decisões clínicas</li>
                <li>A Teledoc não se responsabiliza por diagnósticos ou tratamentos baseados exclusivamente nas sugestões da IA</li>
                <li>O uso da plataforma não estabelece relação médico-paciente entre a Teledoc e os pacientes atendidos</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">4. Elegibilidade e Registro</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                Para utilizar o DoctorAI, você deve:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Ser profissional de saude devidamente registrado em seu conselho de classe (CRM, CRO, COREN, etc.)</li>
                <li>Ter pelo menos 18 anos de idade</li>
                <li>Fornecer informações verdadeiras e precisas no cadastro</li>
                <li>Manter suas credenciais de acesso em sigilo</li>
                <li>Notificar imediatamente sobre qualquer uso não autorizado de sua conta</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">5. Uso Aceitável</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                Você concorda em utilizar a Plataforma de forma ética e em conformidade com:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>O Código de Ética Médica e demais normas do CFM/CRM</li>
                <li>A Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)</li>
                <li>As normas de sigilo médico-paciente</li>
                <li>Todas as leis e regulamentações aplicáveis</li>
              </ul>
              <p className="text-cinza-600 leading-relaxed mt-4">
                É expressamente proibido:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Compartilhar acesso com terceiros não autorizados</li>
                <li>Utilizar a plataforma para fins ilegais ou antiéticos</li>
                <li>Tentar acessar áreas restritas do sistema</li>
                <li>Realizar engenharia reversa ou copiar o software</li>
                <li>Utilizar a IA para gerar conteúdo falso ou enganoso</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">6. Pagamento e Assinatura</h2>
              <p className="text-cinza-600 leading-relaxed mb-4">
                Os serviços do DoctorAI são oferecidos mediante assinatura paga:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li><strong>Plano Gratuito:</strong> R$ 0/mês, com 50 consultas mensais</li>
                <li><strong>Plano Completo:</strong> R$ 149,00/mês ou R$ 1.430,00/ano (20% de desconto)</li>
                <li><strong>Plano Institucional:</strong> Sob consulta, para hospitais e clínicas</li>
              </ul>
              <p className="text-cinza-600 leading-relaxed mt-4">
                Condições de pagamento:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li>Pagamentos processados de forma segura via Stripe</li>
                <li>A assinatura é renovada automaticamente ao final de cada período</li>
                <li>Você pode cancelar a qualquer momento sem multa</li>
                <li>Não há reembolso proporcional para períodos não utilizados</li>
                <li>Os preços podem ser ajustados com aviso prévio de 30 dias</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">7. Propriedade Intelectual</h2>
              <p className="text-cinza-600 leading-relaxed">
                Todo o conteúdo da Plataforma, incluindo software, textos, gráficos, logos, ícones,
                imagens e modelos de IA, é de propriedade exclusiva da Teledoc Journey Medical ou
                de seus licenciadores. Você não adquire qualquer direito de propriedade sobre o
                software ou tecnologia ao utilizar a Plataforma.
              </p>
              <p className="text-cinza-600 leading-relaxed mt-4">
                O conteúdo gerado pela IA a partir de suas informações permanece sob sua responsabilidade,
                e você mantém os direitos sobre os dados clínicos de seus pacientes.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-cinza-600 leading-relaxed">
                A Teledoc fornece o DoctorAI &quot;como está&quot; e &quot;conforme disponível&quot;. Não garantimos que:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2 mt-4">
                <li>O serviço será ininterrupto ou livre de erros</li>
                <li>As informações geradas pela IA serão sempre precisas ou completas</li>
                <li>O sistema atenderá a todas as suas necessidades específicas</li>
              </ul>
              <p className="text-cinza-600 leading-relaxed mt-4">
                Em nenhuma hipótese a Teledoc será responsável por danos indiretos, incidentais,
                consequenciais ou punitivos, incluindo perda de lucros, dados ou oportunidades de negócio.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">9. Rescisão</h2>
              <p className="text-cinza-600 leading-relaxed">
                Você pode cancelar sua assinatura a qualquer momento através das configurações da conta
                ou entrando em contato conosco. A Teledoc pode suspender ou encerrar seu acesso em caso de:
              </p>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2 mt-4">
                <li>Violação destes Termos de Uso</li>
                <li>Uso indevido ou fraudulento da Plataforma</li>
                <li>Inadimplência por mais de 30 dias</li>
                <li>Solicitação de autoridades competentes</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">10. Alterações nos Termos</h2>
              <p className="text-cinza-600 leading-relaxed">
                Podemos atualizar estes Termos periodicamente. Alterações significativas serão comunicadas
                por e-mail ou através de aviso na Plataforma. O uso continuado após as alterações constitui
                aceitação dos novos termos.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">11. Disposições Gerais</h2>
              <ul className="list-disc pl-6 text-cinza-600 space-y-2">
                <li><strong>Lei Aplicável:</strong> Estes termos são regidos pelas leis do Brasil</li>
                <li><strong>Foro:</strong> Fica eleito o foro da Comarca de Porto Alegre/RS para dirimir quaisquer controvérsias</li>
                <li><strong>Integralidade:</strong> Estes termos constituem o acordo completo entre as partes</li>
                <li><strong>Tolerância:</strong> A tolerância quanto a qualquer violação não implica renúncia de direitos</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cinza-900 mb-4">12. Contato</h2>
              <p className="text-cinza-600 leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <div className="bg-cinza-50 p-6 rounded-xl mt-4">
                <p className="text-cinza-700"><strong>Teledoc Journey Medical</strong></p>
                <p className="text-cinza-600">TELEDOC CURSOS LTDA</p>
                <p className="text-cinza-600">CNPJ: 51.986.681/0001-40</p>
                <p className="text-cinza-600 mt-2">
                  E-mail: <a href="mailto:teledoc@teledocmedical.com" className="text-dourado hover:underline">teledoc@teledocmedical.com</a>
                </p>
                <p className="text-cinza-600">
                  WhatsApp: <a href="https://wa.me/5553999092711" target="_blank" rel="noopener noreferrer" className="text-dourado hover:underline">+55 53 99909-2711</a>
                </p>
                <p className="text-cinza-600">
                  Site: <a href="https://teledocmedical.ai" target="_blank" rel="noopener noreferrer" className="text-dourado hover:underline">teledocmedical.ai</a>
                </p>
                <p className="text-cinza-600 mt-2">Rua General Neto, nº 1840, Apto. 401, Bloco D, Centro</p>
                <p className="text-cinza-600">Pelotas/RS - Brasil</p>
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
              Voltar para a página inicial
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
