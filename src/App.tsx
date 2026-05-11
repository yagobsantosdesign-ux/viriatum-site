import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { StatsBar } from './components/sections/StatsBar'
import { PainPoints } from './components/sections/PainPoints'
import { HowItWorks } from './components/sections/HowItWorks'
import { Services } from './components/sections/Services'
import { Doctor } from './components/sections/Doctor'
import { Testimonials } from './components/sections/Testimonials'
import { LeadForm } from './components/sections/LeadForm'
import { FAQ } from './components/sections/FAQ'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { Obrigado } from './pages/Obrigado'
import { ObrigadoGoogle } from './pages/ObrigadoGoogle'
import { GoogleLanding } from './pages/GoogleLanding'

const path = window.location.pathname

export function App() {
  if (path === '/politica-de-privacidade') return <PrivacyPolicy />
  if (path === '/obrigado') return <Obrigado />
  if (path === '/obrigado_google') return <ObrigadoGoogle />
  if (path === '/google') return <GoogleLanding />

  return (
    <>
      <Navbar />
      <main>
        <div className="hero-wrapper">
          <Hero />
          <StatsBar />
        </div>
        <PainPoints />
        <HowItWorks />
        <Services />
        <Doctor />
        <Testimonials />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
