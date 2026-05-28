import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="privacy-page">
        <header className="privacy-hero" data-navbar-theme="dark">
          <div className="privacy-hero__inner">
            <span className="label-tag">Instituto Viriatum</span>
            <h1 className="privacy-hero__title">Política de Privacidade</h1>
            <p className="privacy-hero__meta">
              Última atualização: maio de 2026
            </p>
          </div>
        </header>

        <section className="privacy-body" data-navbar-theme="dark">
          <div className="privacy-container">

            <div className="privacy-intro">
              <p>
                O Instituto Viriatum está comprometido com a proteção dos seus dados pessoais
                e com a transparência no tratamento das informações que você nos confia.
                Este documento descreve como coletamos, usamos, armazenamos e protegemos seus dados,
                em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
              </p>
            </div>

            <div className="privacy-toc">
              <p className="privacy-toc__label">Neste documento</p>
              <ol className="privacy-toc__list">
                <li><a href="#quem-somos">Quem somos</a></li>
                <li><a href="#dados-coletados">Dados que coletamos</a></li>
                <li><a href="#finalidades">Como utilizamos seus dados</a></li>
                <li><a href="#base-legal">Base legal do tratamento</a></li>
                <li><a href="#compartilhamento">Compartilhamento de dados</a></li>
                <li><a href="#retencao">Prazo de retenção</a></li>
                <li><a href="#seguranca">Segurança</a></li>
                <li><a href="#seus-direitos">Seus direitos (LGPD)</a></li>
                <li><a href="#cookies">Cookies e tecnologias similares</a></li>
                <li><a href="#contato">Como nos contatar</a></li>
              </ol>
            </div>

            <article className="privacy-sections">

              <section id="quem-somos" className="privacy-section">
                <h2 className="privacy-section__title">1. Quem somos</h2>
                <p>
                  O <strong>Instituto Viriatum</strong> é uma plataforma de telemedicina especializada em
                  saúde sexual e masculina, operada sob responsabilidade médica do <strong>Dr. Fábio A. de
                  Andrade</strong> (CRM 60877/PR). Nosso serviço conecta pacientes a atendimento médico
                  online individualizado, com foco em discrição, evidência científica e acompanhamento contínuo.
                </p>
                <div className="privacy-contact-card">
                  <p className="privacy-contact-card__label">Controlador de dados</p>
                  <p>Instituto Viriatum — Saúde Sexual Masculina</p>
                  <p>Responsável: Dr. Fábio A. de Andrade — CRM 60877/PR</p>
                  <p>E-mail: <a href="mailto:privacidade@viriatum.com.br">privacidade@viriatum.com.br</a></p>
                </div>
              </section>

              <section id="dados-coletados" className="privacy-section">
                <h2 className="privacy-section__title">2. Dados que coletamos</h2>
                <p>Coletamos apenas os dados estritamente necessários para a prestação dos serviços médicos:</p>

                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Categoria</th>
                        <th>Exemplos</th>
                        <th>Momento da coleta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Identificação</td>
                        <td>Nome completo</td>
                        <td>Formulário de triagem</td>
                      </tr>
                      <tr>
                        <td>Contato</td>
                        <td>Número de WhatsApp</td>
                        <td>Formulário de triagem</td>
                      </tr>
                      <tr>
                        <td>Dados de saúde</td>
                        <td>Queixa principal, idade, histórico clínico</td>
                        <td>Triagem e consulta médica</td>
                      </tr>
                      <tr>
                        <td>Navegação</td>
                        <td>Páginas visitadas, tempo de sessão</td>
                        <td>Automaticamente, ao acessar o site</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="privacy-callout privacy-callout--warn">
                  <p>
                    <strong>Dados de saúde são dados sensíveis.</strong> Tratamos suas informações
                    clínicas com nível máximo de proteção e sigilo profissional, conforme o
                    Código de Ética Médica e a LGPD.
                  </p>
                </div>
              </section>

              <section id="finalidades" className="privacy-section">
                <h2 className="privacy-section__title">3. Como utilizamos seus dados</h2>
                <p>Seus dados são utilizados exclusivamente para as seguintes finalidades:</p>
                <ul className="privacy-list">
                  <li>Agendamento e realização de consultas médicas online</li>
                  <li>Elaboração de protocolos terapêuticos individualizados</li>
                  <li>Comunicação sobre seu atendimento via WhatsApp</li>
                  <li>Acompanhamento evolutivo do seu tratamento</li>
                  <li>Cumprimento de obrigações legais e regulatórias (CFM, CRM)</li>
                  <li>Melhoria contínua dos nossos serviços (dados anonimizados)</li>
                </ul>
                <p>
                  <strong>Não utilizamos seus dados para fins publicitários, remarketing ou
                  venda a terceiros.</strong>
                </p>
              </section>

              <section id="base-legal" className="privacy-section">
                <h2 className="privacy-section__title">4. Base legal do tratamento</h2>
                <p>
                  Cada tratamento de dados realizado pelo Instituto Viriatum possui uma base legal
                  expressa na LGPD:
                </p>
                <div className="privacy-bases">
                  <div className="privacy-base-item">
                    <span className="privacy-base-item__tag">Art. 7º, II</span>
                    <div>
                      <strong>Cumprimento de obrigação legal</strong>
                      <p>Prontuário médico, notificação compulsória e demais obrigações do CFM.</p>
                    </div>
                  </div>
                  <div className="privacy-base-item">
                    <span className="privacy-base-item__tag">Art. 7º, V</span>
                    <div>
                      <strong>Execução do contrato de serviço de saúde</strong>
                      <p>Prestação da consulta médica e do acompanhamento contratado.</p>
                    </div>
                  </div>
                  <div className="privacy-base-item">
                    <span className="privacy-base-item__tag">Art. 7º, IX e 11º, I</span>
                    <div>
                      <strong>Consentimento</strong>
                      <p>Comunicações de saúde, pesquisa de satisfação e materiais informativos.</p>
                    </div>
                  </div>
                  <div className="privacy-base-item">
                    <span className="privacy-base-item__tag">Art. 11º, II, f</span>
                    <div>
                      <strong>Tutela da saúde</strong>
                      <p>Tratamento de dados de saúde para fins de diagnóstico e tratamento médico.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="compartilhamento" className="privacy-section">
                <h2 className="privacy-section__title">5. Compartilhamento de dados</h2>
                <p>
                  Seus dados podem ser compartilhados apenas com as seguintes categorias de
                  destinatários, sempre com salvaguardas adequadas:
                </p>
                <ul className="privacy-list">
                  <li>
                    <strong>Farmácias e laboratórios parceiros</strong> — somente quando necessário
                    para emissão de receitas ou realização de exames prescritos
                  </li>
                  <li>
                    <strong>Plataformas de telemedicina</strong> — para viabilizar as videoconsultas,
                    sob acordo de processamento de dados (DPA)
                  </li>
                  <li>
                    <strong>Autoridades regulatórias</strong> — quando exigido por lei ou determinação
                    judicial (CRM, ANPD, autoridades de saúde)
                  </li>
                </ul>
                <p>
                  <strong>Nunca vendemos, alugamos ou cedemos seus dados a terceiros
                  para fins comerciais.</strong>
                </p>
              </section>

              <section id="retencao" className="privacy-section">
                <h2 className="privacy-section__title">6. Prazo de retenção</h2>
                <p>Mantemos seus dados pelos seguintes prazos:</p>
                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Tipo de dado</th>
                        <th>Prazo de retenção</th>
                        <th>Fundamento</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Prontuário médico</td>
                        <td>20 anos</td>
                        <td>Resolução CFM 1.821/2007</td>
                      </tr>
                      <tr>
                        <td>Dados de contato</td>
                        <td>5 anos após o último atendimento</td>
                        <td>Art. 7º, IX LGPD + prazo prescricional</td>
                      </tr>
                      <tr>
                        <td>Dados de navegação</td>
                        <td>12 meses</td>
                        <td>Marco Civil da Internet (Lei 12.965/2014)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Após o término do prazo legal, os dados são excluídos ou anonimizados de forma irreversível.
                </p>
              </section>

              <section id="seguranca" className="privacy-section">
                <h2 className="privacy-section__title">7. Segurança</h2>
                <p>
                  Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
                  não autorizado, perda, destruição ou alteração:
                </p>
                <ul className="privacy-list">
                  <li>Transmissão de dados via protocolo HTTPS (TLS 1.3)</li>
                  <li>Acesso restrito ao prontuário — apenas o médico responsável e a equipe clínica vinculada</li>
                  <li>Autenticação de dois fatores nos sistemas internos</li>
                  <li>Revisões periódicas de acesso e política de privilégio mínimo</li>
                  <li>Plano de resposta a incidentes de segurança</li>
                </ul>
                <p>
                  Em caso de incidente de segurança que possa causar risco ou dano a titulares,
                  comunicaremos a ANPD e os afetados dentro dos prazos legais.
                </p>
              </section>

              <section id="seus-direitos" className="privacy-section">
                <h2 className="privacy-section__title">8. Seus direitos (LGPD)</h2>
                <p>
                  Como titular de dados, você possui os seguintes direitos garantidos pela LGPD
                  (Art. 18):
                </p>
                <div className="privacy-rights-grid">
                  <div className="privacy-right">
                    <span className="privacy-right__icon">I</span>
                    <div>
                      <strong>Confirmação e acesso</strong>
                      <p>Confirmar se tratamos seus dados e obter cópia deles.</p>
                    </div>
                  </div>
                  <div className="privacy-right">
                    <span className="privacy-right__icon">II</span>
                    <div>
                      <strong>Correção</strong>
                      <p>Solicitar a atualização de dados incompletos ou incorretos.</p>
                    </div>
                  </div>
                  <div className="privacy-right">
                    <span className="privacy-right__icon">III</span>
                    <div>
                      <strong>Anonimização ou eliminação</strong>
                      <p>Dados desnecessários ou tratados em desconformidade.</p>
                    </div>
                  </div>
                  <div className="privacy-right">
                    <span className="privacy-right__icon">IV</span>
                    <div>
                      <strong>Portabilidade</strong>
                      <p>Receber seus dados em formato estruturado para outro fornecedor.</p>
                    </div>
                  </div>
                  <div className="privacy-right">
                    <span className="privacy-right__icon">V</span>
                    <div>
                      <strong>Revogação do consentimento</strong>
                      <p>Retirar o consentimento a qualquer momento, sem ônus.</p>
                    </div>
                  </div>
                  <div className="privacy-right">
                    <span className="privacy-right__icon">VI</span>
                    <div>
                      <strong>Informação sobre compartilhamento</strong>
                      <p>Saber com quais entidades compartilhamos seus dados.</p>
                    </div>
                  </div>
                </div>
                <p>
                  Para exercer qualquer desses direitos, entre em contato pelo e-mail
                  <a href="mailto:privacidade@viriatum.com.br"> privacidade@viriatum.com.br</a>.
                  Responderemos em até 15 dias úteis.
                </p>
              </section>

              <section id="cookies" className="privacy-section">
                <h2 className="privacy-section__title">9. Cookies e tecnologias similares</h2>
                <p>
                  Utilizamos cookies estritamente necessários para o funcionamento do site. Não
                  utilizamos cookies de rastreamento, publicidade comportamental ou ferramentas
                  de analytics de terceiros sem o seu consentimento explícito.
                </p>
                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Cookie</th>
                        <th>Tipo</th>
                        <th>Finalidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sessão</td>
                        <td>Necessário</td>
                        <td>Manter estado de navegação e segurança da sessão</td>
                      </tr>
                      <tr>
                        <td>Preferências</td>
                        <td>Funcional</td>
                        <td>Salvar preferências de acessibilidade e idioma</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Você pode gerenciar ou bloquear cookies nas configurações do seu navegador.
                  O bloqueio de cookies necessários pode impactar a funcionalidade do site.
                </p>
              </section>

              <section id="contato" className="privacy-section">
                <h2 className="privacy-section__title">10. Como nos contatar</h2>
                <p>
                  Para dúvidas, solicitações relacionadas aos seus dados ou para exercer seus
                  direitos sob a LGPD:
                </p>
                <div className="privacy-contact-card privacy-contact-card--lg">
                  <p className="privacy-contact-card__label">Encarregado de Proteção de Dados (DPO)</p>
                  <p><strong>Instituto Viriatum — Saúde Sexual Masculina</strong></p>
                  <p>E-mail: <a href="mailto:privacidade@viriatum.com.br">privacidade@viriatum.com.br</a></p>
                  <p>Prazo de resposta: até 15 dias úteis</p>
                </div>
                <p>
                  Caso não receba resposta satisfatória, você tem o direito de peticionar
                  à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> pelo
                  canal <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.
                </p>
                <p>
                  Esta política pode ser atualizada periodicamente. Alterações relevantes
                  serão comunicadas por e-mail ou via WhatsApp aos nossos pacientes ativos.
                </p>
              </section>

            </article>

            <div className="privacy-back">
              <a id="privacy-back-home" href="/" className="btn btn--secondary">← Voltar ao site</a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
