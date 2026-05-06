import { useState } from 'react'
import { motion } from 'motion/react'

export function Hero() {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá! Me chamo ${nome} e gostaria de iniciar minha avaliação no Instituto Viriatum. Meu WhatsApp: ${whatsapp}`
    )
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank')
  }

  const formCard = (extraClass = '') => (
    <div className={`hero-form-card ${extraClass}`}>
      <p className="hero-form-card__label">Agende sua consulta</p>
      <form className="hero-form-card__fields" onSubmit={handleSubmit}>
        <input
          className="hero-form-card__input"
          type="text"
          placeholder="NOME COMPLETO"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
        />
        <input
          className="hero-form-card__input"
          type="tel"
          placeholder="WHATSAPP"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
          required
        />
        <button className="hero-form-card__btn" type="submit">
          QUERO AGENDAR MINHA CONSULTA
        </button>
      </form>
      <p className="hero-form-card__disclaimer">
        Dados confidenciais — nossa equipe entra em contato.
      </p>
    </div>
  )

  return (
    <section className="hero-v2" id="inicio" data-navbar-theme="dark">
      {/* Glow decorativo — lado esquerdo */}
      <div className="hero-v2__glow" aria-hidden="true" />

      {/* ── Painel esquerdo: headline ── */}
      <div className="hero-v2__left">
        <div className="hero-v2__headline-block">
          <motion.h1
            className="hero-v2__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Seu desempenho sexual está{' '}
            <u>afetando sua vida?</u>
          </motion.h1>

          <motion.div
            className="hero-v2__divider"
            aria-hidden="true"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.35, scaleY: 1 }}
            style={{ originY: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <motion.p
            className="hero-v2__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Consulta médica online, protocolo individualizado e acompanhamento real. Nossa equipe agenda tudo para você.
          </motion.p>

          {/* Form visível apenas no mobile */}
          {formCard('hero-form-card--mobile')}
        </div>
      </div>

      {/* ── Painel direito: foto do médico + form na base ── */}
      <div className="hero-v2__right">
        <img
          className="hero-v2__bg-photo"
          src="/doctor.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-v2__right-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-form-card--desktop-wrapper"
          >
            {/* Form visível apenas no desktop */}
            {formCard('hero-form-card--desktop')}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
