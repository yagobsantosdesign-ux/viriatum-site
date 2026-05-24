import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'

export function Tratamentos() {
  return (
    <>
      <Navbar />
      <main className="tratamentos-page" data-navbar-theme="dark">

        <section className="tratamentos-hero">
          <div className="tratamentos-hero__inner">
            <span className="label-tag">— TRATAMENTOS</span>
            <h1 className="tratamentos-hero__title">
              Disponível em produção.
            </h1>
            <p className="tratamentos-hero__sub">
              Esta rota é servida pelo app do Quiz (projeto <code>viriatum-quizz-produto</code>)
              via Vercel rewrites. Em desenvolvimento local você vê este placeholder
              porque rewrites só rodam em produção.
            </p>

            <div className="tratamentos-hero__actions">
              <a
                href="https://viriatum-quizz-produto.vercel.app/tratamentos"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                Abrir Quiz (preview)
              </a>
              <a href="/" className="btn btn--secondary">← Voltar ao início</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
