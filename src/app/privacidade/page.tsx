import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade | DoctorAI - Teledoc Journey Medical",
  description: "Política de privacidade e proteção de dados do DoctorAI. Saiba como coletamos, usamos e protegemos suas informações.",
};

export default function PrivacidadePage() {
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
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-dourado" />
              <h1 className="text-3xl md:text-4xl font-bold text-preto">
                Política de Privacidade
              </h1>
            </div>
            <p className="text-cinza-500 mt-2">
              Última atualização: Janeiro de 2026
            </p>
          </div>
        </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-5 py-12">
        <div className="prose prose-lg max-w-none">

          {/* LGPD Notice */}
          <div className="bg-verde/10 border-l-4 border-verde p-4 mb-10">
            <p className="text-cinza-700 font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-verde" />
              Compromisso com a LGPD
            </p>
            <p className="text-cinza-600">
              Esta política foi elaborada em conformidade com a Lei Geral de Proteção de Dados
              (Lei 13.709/2018 - LGPD). Tratamos dados de saúde como dados sensíveis, com o
              mais alto nível de proteção.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">1. Introdução</h2>
            <p className="text-cinza-600 leading-relaxed">
              A Teledoc Journey Medical (&quot;Teledoc&quot;, &quot;nos&quot;, &quot;nosso&quot;) está comprometida com a
              proteção da privacidade de seus usuários. Esta Política de Privacidade explica como
              coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar
              o DoctorAI (&quot;Plataforma&quot;).
            </p>
            <p className="text-cinza-600 leading-relaxed mt-4">
              Ao utilizar nossa Plataforma, você concorda com as práticas descritas nesta política.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">2. Controlador dos Dados</h2>
            <div className="bg-cinza-50 p-6 rounded-xl">
              <p className="text-cinza-700"><strong>Controlador:</strong> Teledoc Journey Medical</p>
              <p className="text-cinza-600">Razão Social: TELEDOC CURSOS LTDA</p>
              <p className="text-cinza-600">CNPJ: 51.986.681/0001-40</p>
              <p className="text-cinza-600 mt-2">
                Encarregado de Dados (DPO): Dr. Jonas Spezia
              </p>
              <p className="text-cinza-600">
                E-mail: <a href="mailto:teledoc@teledocmedical.com" className="text-dourado hover:underline">teledoc@teledocmedical.com</a>
              </p>
              <p className="text-cinza-600">
                WhatsApp: <a href="https://wa.me/5553999092711" target="_blank" rel="noopener noreferrer" className="text-dourado hover:underline">+55 53 99909-2711</a>
              </p>
              <p className="text-cinza-600 mt-2">Rua General Neto, nº 1840, Apto. 401, Bloco D, Centro</p>
              <p className="text-cinza-600">Pelotas/RS - Brasil</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">3. Dados Coletados</h2>

            <h3 className="text-xl font-semibold text-cinza-800 mt-6 mb-3">3.1 Dados de Cadastro</h3>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li>Nome completo</li>
              <li>E-mail profissional</li>
              <li>Número de registro profissional (CRM, CRO, etc.)</li>
              <li>Especialidade médica</li>
              <li>Telefone (opcional)</li>
              <li>Dados de pagamento (processados pelo Stripe)</li>
            </ul>

            <h3 className="text-xl font-semibold text-cinza-800 mt-6 mb-3">3.2 Dados de Uso da Plataforma</h3>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li>Transcrições de consultas (processadas localmente ou na nuvem)</li>
              <li>Prontuários gerados (SOAP)</li>
              <li>Perguntas feitas ao chat de IA</li>
              <li>Logs de acesso e utilização</li>
              <li>Preferências e configurações</li>
            </ul>

            <h3 className="text-xl font-semibold text-cinza-800 mt-6 mb-3">3.3 Dados Técnicos</h3>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li>Endereço IP</li>
              <li>Tipo de navegador e dispositivo</li>
              <li>Sistema operacional</li>
              <li>Cookies e tecnologias similares</li>
            </ul>

            <div className="bg-dourado/10 border-l-4 border-dourado p-4 mt-6">
              <p className="text-cinza-700 font-semibold mb-2">Dados Sensíveis de Saúde:</p>
              <p className="text-cinza-600">
                Os dados de pacientes inseridos na plataforma sao considerados dados sensíveis
                conforme a LGPD. Estes dados sao processados exclusivamente para prestação do
                serviço contratado, sob responsabilidade do profissional de saúde usuário.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">4. Finalidades do Tratamento</h2>
            <p className="text-cinza-600 leading-relaxed mb-4">
              Utilizamos seus dados para as seguintes finalidades:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-dourado pl-4">
                <p className="font-semibold text-cinza-700">Prestação do Serviço</p>
                <p className="text-cinza-600 text-sm">Processar transcrições, gerar prontuários, responder perguntas via IA</p>
              </div>

              <div className="border-l-4 border-dourado pl-4">
                <p className="font-semibold text-cinza-700">Gestao da Conta</p>
                <p className="text-cinza-600 text-sm">Criar e manter sua conta, autenticação, suporte técnico</p>
              </div>

              <div className="border-l-4 border-dourado pl-4">
                <p className="font-semibold text-cinza-700">Cobrança</p>
                <p className="text-cinza-600 text-sm">Processar pagamentos, emitir notas fiscais, gerenciar assinaturas</p>
              </div>

              <div className="border-l-4 border-dourado pl-4">
                <p className="font-semibold text-cinza-700">Melhoria do Serviço</p>
                <p className="text-cinza-600 text-sm">Analisar uso para melhorar funcionalidades (dados anonimizados)</p>
              </div>

              <div className="border-l-4 border-dourado pl-4">
                <p className="font-semibold text-cinza-700">Comunicação</p>
                <p className="text-cinza-600 text-sm">Enviar atualizações, alertas de segurança, informações do serviço</p>
              </div>

              <div className="border-l-4 border-dourado pl-4">
                <p className="font-semibold text-cinza-700">Obrigações Legais</p>
                <p className="text-cinza-600 text-sm">Cumprir exigências legais, fiscais e regulatórias</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">5. Base Legal para o Tratamento</h2>
            <p className="text-cinza-600 leading-relaxed mb-4">
              Conforme a LGPD, o tratamento de dados e realizado com base em:
            </p>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li><strong>Execução de Contrato (Art. 7o, V):</strong> Para prestar os serviços contratados</li>
              <li><strong>Consentimento (Art. 7o, I):</strong> Para dados sensíveis e comunicações de marketing</li>
              <li><strong>Legítimo Interesse (Art. 7o, IX):</strong> Para melhoria de serviços e segurança</li>
              <li><strong>Obrigação Legal (Art. 7o, II):</strong> Para cumprimento de exigências legais</li>
              <li><strong>Tutela da Saúde (Art. 11, II, f):</strong> Para dados de saúde, em procedimento realizado por profissionais de saúde</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">6. Compartilhamento de Dados</h2>
            <p className="text-cinza-600 leading-relaxed mb-4">
              Seus dados podem ser compartilhados com:
            </p>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li><strong>Stripe:</strong> Processamento seguro de pagamentos</li>
              <li><strong>Provedores de Nuvem:</strong> Armazenamento seguro de dados (AWS, Google Cloud)</li>
              <li><strong>Provedores de IA:</strong> Processamento de linguagem natural (OpenAI, Anthropic) - apenas dados anonimizados quando possível</li>
              <li><strong>Autoridades:</strong> Quando exigido por lei ou ordem judicial</li>
            </ul>
            <p className="text-cinza-600 leading-relaxed mt-4">
              <strong>NÃO vendemos, alugamos ou comercializamos seus dados pessoais.</strong>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">7. Armazenamento e Seguranca</h2>

            <h3 className="text-xl font-semibold text-cinza-800 mt-6 mb-3">7.1 Medidas de Segurança</h3>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li>Criptografia de dados em trânsito (TLS 1.3) e em repouso (AES-256)</li>
              <li>Autenticação segura com hash de senhas</li>
              <li>Controle de acesso baseado em funções</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e redundantes</li>
              <li>Servidores em data centers certificados</li>
            </ul>

            <h3 className="text-xl font-semibold text-cinza-800 mt-6 mb-3">7.2 Retenção de Dados</h3>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li><strong>Dados de conta:</strong> Mantidos enquanto a conta estiver ativa + 5 anos</li>
              <li><strong>Dados de uso:</strong> 2 anos após a última atividade</li>
              <li><strong>Logs de acesso:</strong> 1 ano (conforme Marco Civil da Internet)</li>
              <li><strong>Dados fiscais:</strong> 5 anos (exigência legal)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">8. Seus Direitos (LGPD)</h2>
            <p className="text-cinza-600 leading-relaxed mb-4">
              Conforme a LGPD, você tem direito a:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Confirmação e Acesso</p>
                <p className="text-cinza-600 text-sm">Saber se tratamos seus dados e acessar uma cópia</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Correção</p>
                <p className="text-cinza-600 text-sm">Corrigir dados incompletos, inexatos ou desatualizados</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Anonimização/Bloqueio</p>
                <p className="text-cinza-600 text-sm">Anonimizar, bloquear ou eliminar dados desnecessários</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Portabilidade</p>
                <p className="text-cinza-600 text-sm">Receber seus dados em formato estruturado</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Eliminação</p>
                <p className="text-cinza-600 text-sm">Solicitar exclusão de dados tratados com consentimento</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Revogação</p>
                <p className="text-cinza-600 text-sm">Revogar consentimento a qualquer momento</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Informação</p>
                <p className="text-cinza-600 text-sm">Saber com quem compartilhamos seus dados</p>
              </div>
              <div className="bg-cinza-50 p-4 rounded-xl">
                <p className="font-semibold text-cinza-700">Oposição</p>
                <p className="text-cinza-600 text-sm">Opor-se a tratamento em desacordo com a lei</p>
              </div>
            </div>
            <p className="text-cinza-600 leading-relaxed mt-6">
              Para exercer seus direitos, entre em contato através do e-mail{" "}
              <a href="mailto:teledoc@teledocmedical.com" className="text-dourado hover:underline">
                teledoc@teledocmedical.com
              </a>
              . Responderemos em até 15 dias.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">9. Cookies</h2>
            <p className="text-cinza-600 leading-relaxed mb-4">
              Utilizamos cookies e tecnologias similares para:
            </p>
            <ul className="list-disc pl-6 text-cinza-600 space-y-2">
              <li><strong>Essenciais:</strong> Funcionamento básico da plataforma, autenticação</li>
              <li><strong>Funcionais:</strong> Salvar preferências e configurações</li>
              <li><strong>Analíticos:</strong> Entender como a plataforma é utilizada (Google Analytics)</li>
            </ul>
            <p className="text-cinza-600 leading-relaxed mt-4">
              Você pode gerenciar cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">10. Transferência Internacional</h2>
            <p className="text-cinza-600 leading-relaxed">
              Alguns de nossos provedores de servicos estão localizados fora do Brasil.
              Nesses casos, garantimos que a transferência ocorra com níveis adequados de proteção,
              seja por cláusulas contratuais padrão, seja por certificações de privacidade
              reconhecidas internacionalmente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">11. Menores de Idade</h2>
            <p className="text-cinza-600 leading-relaxed">
              O DoctorAI é destinado exclusivamente a profissionais de saúde maiores de 18 anos.
              Não coletamos intencionalmente dados de menores de idade. Se tomarmos conhecimento
              de tal coleta, os dados serão excluídos imediatamente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">12. Alterações nesta Política</h2>
            <p className="text-cinza-600 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Alterações significativas serão
              comunicadas por e-mail ou através de aviso na plataforma. A data da última atualização
              será sempre indicada no topo deste documento.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-cinza-900 mb-4">13. Contato e Reclamações</h2>
            <p className="text-cinza-600 leading-relaxed mb-4">
              Para dúvidas, solicitações ou reclamações sobre privacidade:
            </p>
            <div className="bg-cinza-50 p-6 rounded-xl">
              <p className="text-cinza-700"><strong>Teledoc Journey Medical</strong></p>
              <p className="text-cinza-600">TELEDOC CURSOS LTDA • CNPJ: 51.986.681/0001-40</p>
              <p className="text-cinza-600">Encarregado de Dados (DPO): Dr. Jonas Spezia</p>
              <p className="text-cinza-600 mt-2">
                E-mail: <a href="mailto:teledoc@teledocmedical.com" className="text-dourado hover:underline">teledoc@teledocmedical.com</a>
              </p>
              <p className="text-cinza-600">
                WhatsApp: <a href="https://wa.me/5553999092711" target="_blank" rel="noopener noreferrer" className="text-dourado hover:underline">+55 53 99909-2711</a>
              </p>
              <p className="text-cinza-600 mt-2">Rua General Neto, nº 1840, Apto. 401, Bloco D, Centro</p>
              <p className="text-cinza-600">Pelotas/RS - Brasil</p>
            </div>
            <p className="text-cinza-600 leading-relaxed mt-4">
              Você também tem o direito de apresentar reclamação à Autoridade Nacional de
              Proteção de Dados (ANPD) caso entenda que seus direitos foram violados.
            </p>
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
