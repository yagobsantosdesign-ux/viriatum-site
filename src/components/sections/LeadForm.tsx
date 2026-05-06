import { useState } from 'react'
import { AnimatedSection } from '../ui/AnimatedSection'

const concerns = [
  'Disfuncao Eretil',
  'Saude Sexual',
  'Reposicao Hormonal',
  'Bem-Estar Geral',
  'Outro',
]

const stats = [
  { value: '+500', label: 'Pacientes atendidos' },
  { value: '10', label: 'Anos de experiencia' },
  { value: '24h', label: 'Resposta medica' },
]

export function LeadForm() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="lf" id="triagem" data-navbar-theme="light">
      <div className="lf__inner">

        {/* Coluna esquerda */}
        <AnimatedSection className="lf__left" direction="left">
          <span className="label-tag">— AGENDE SUA CONSULTA</span>

          <h2 className="lf__title">
            Preencha seus dados. Nossa equipe agenda sua consulta.
          </h2>

          <p className="lf__sub">
            Sem triagem, sem burocracia. Deixe seu contato e um de
            nossos especialistas vai te chamar para agendar com discrição.
          </p>

          <div className="lf__stats">
            {stats.map((s) => (
              <div key={s.label} className="lf__stat">
                <span className="lf__stat-value">{s.value}</span>
                <span className="lf__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Card imagem */}
          <div className="lf__image-card" aria-hidden="true">
            <div className="lf__image-ph">
              <img src="/lf-image-card.webp" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <div className="lf__image-footer">
              <span className="lf__image-quote">"Ciencia impecavel.<br />Discrição impecavel."</span>
              <span className="lf__image-attr">Instituto Viriatum</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Coluna direita — formulario */}
        <AnimatedSection className="lf__form-wrap" direction="right">
          <div className="lf__form-card">

            <div className="lf__form-header">
              <svg className="lf__form-lock" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="9" width="12" height="10" rx="2" />
                <path d="M7 9V7a3 3 0 0 1 6 0v2" strokeLinecap="round" />
              </svg>
              <div>
                <p className="lf__form-title">Solicitar agendamento</p>
                <p className="lf__form-subtitle">Nossa equipe entra em contato com voce</p>
              </div>
            </div>

            <div className="lf__form-body">

              <div className="lf__field">
                <label className="lf__label">Primeiro nome</label>
                <input className="lf__input" type="text" placeholder="Como prefere ser chamado" />
              </div>

              <div className="lf__field">
                <label className="lf__label">WhatsApp</label>
                <input className="lf__input" type="tel" placeholder="(00) 00000-0000" />
              </div>

              <div className="lf__field">
                <label className="lf__label">Idade</label>
                <input className="lf__input" type="number" placeholder="Sua idade" />
              </div>

              <div className="lf__field">
                <label className="lf__label">Principal queixa</label>
                <div className="lf__chips">
                  {concerns.map((c) => (
                    <button
                      key={c}
                      type="button"
                      className={`lf__chip${selected === c ? ' lf__chip--active' : ''}`}
                      onClick={() => setSelected(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button type="button" className="lf__submit">
                Quero agendar minha consulta
              </button>

              <div className="lf__privacy">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13">
                  <rect x="3" y="7" width="10" height="8" rx="1.5" />
                  <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" strokeLinecap="round" />
                </svg>
                <span>100% confidencial — dados protegidos com criptografia</span>
              </div>

            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
