import { useEffect } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function ObrigadoGoogle() {
  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
      window.fbq('track', 'Lead')
    }
  }, [])

  return (
    <>
      <Navbar hideCta />
      <main className="thanks-page" data-navbar-theme="dark">

        {/* Coluna esquerda: espaço reservado para fotografia */}
        <div className="thanks__photo-wrap" aria-hidden="true">
          <img src="/obrigado-photo.webp" alt="" className="thanks__photo" />
        </div>

        {/* Coluna direita: mensagem */}
        <div className="thanks__content">
          <div className="thanks__inner">
            <span className="label-tag">— AGENDAMENTO</span>

            <h1 className="thanks__title">
              Recebemos seu contato!
            </h1>

            <p className="thanks__sub">
              Nossa equipe entrará em contato nos próximos minutos.
              Fique atento ao seu <strong>WhatsApp</strong>.
            </p>

            <div className="thanks__divider" aria-hidden="true" />

            <p className="thanks__note">
              Enquanto isso, se tiver dúvidas, fale diretamente<br />com a gente pelo Instagram.
            </p>

            <div className="thanks__actions">
              <a href="/google" className="thanks__btn-home">
                Voltar ao início
              </a>
              <a
                href="https://www.instagram.com/institutoviriatum/"
                target="_blank"
                rel="noopener noreferrer"
                className="thanks__btn-ig"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                </svg>
                institutoviriatum
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
