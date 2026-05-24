import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function Contato() {
  return (
    <>
      <Navbar />
      <main className="contato-page" data-navbar-theme="dark">

        <header className="contato-hero">
          <div className="contato-hero__inner">
            <span className="label-tag">— FALE CONOSCO</span>
            <h1 className="contato-hero__title">
              Estamos aqui para você.
            </h1>
            <p className="contato-hero__sub">
              Tire suas dúvidas, agende sua consulta ou converse com nossa equipe.
              Respondemos com discrição em até 24h.
            </p>
          </div>
        </header>

        <section className="contato-channels">
          <div className="contato-container">
            <div className="contato-grid">

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-card"
              >
                <span className="contato-card__label">WHATSAPP</span>
                <span className="contato-card__value">+55 (00) 00000-0000</span>
                <span className="contato-card__hint">Resposta em até 24h</span>
              </a>

              <a
                href="mailto:contato@viriatum.com.br"
                className="contato-card"
              >
                <span className="contato-card__label">E-MAIL</span>
                <span className="contato-card__value">contato@viriatum.com.br</span>
                <span className="contato-card__hint">Atendimento geral</span>
              </a>

              <a
                href="https://www.instagram.com/institutoviriatum/"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-card"
              >
                <span className="contato-card__label">INSTAGRAM</span>
                <span className="contato-card__value">@institutoviriatum</span>
                <span className="contato-card__hint">Conteúdo e bastidores</span>
              </a>

              <a
                href="mailto:privacidade@viriatum.com.br"
                className="contato-card"
              >
                <span className="contato-card__label">PRIVACIDADE / DPO</span>
                <span className="contato-card__value">privacidade@viriatum.com.br</span>
                <span className="contato-card__hint">Assuntos de LGPD</span>
              </a>

            </div>

            <div className="contato-meta">
              <div className="contato-meta__block">
                <span className="contato-meta__label">Horário de atendimento</span>
                <p>Segunda a sexta, das 9h às 19h<br />Sábados, das 9h às 13h</p>
              </div>

              <div className="contato-meta__block">
                <span className="contato-meta__label">Responsável técnico</span>
                <p>Dr. Fábio A. de Andrade<br />CRM 60877/PR</p>
              </div>
            </div>

            <div className="contato-back">
              <a href="/" className="btn btn--secondary">← Voltar ao início</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
