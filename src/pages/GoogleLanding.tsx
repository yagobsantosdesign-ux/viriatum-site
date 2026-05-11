import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { HeroGoogle } from '../components/sections/HeroGoogle'
import { StatsBar } from '../components/sections/StatsBar'
import { PainPoints } from '../components/sections/PainPoints'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Services } from '../components/sections/Services'
import { Doctor } from '../components/sections/Doctor'
import { Testimonials } from '../components/sections/Testimonials'
import { LeadForm } from '../components/sections/LeadForm'
import { FAQ } from '../components/sections/FAQ'

export function GoogleLanding() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero-wrapper">
          <HeroGoogle />
          <StatsBar />
        </div>
        <PainPoints />
        <HowItWorks />
        <Services />
        <Doctor />
        <Testimonials />
        <LeadForm formId="c9488c1c-c7d9-45a0-8321-a6f944b85b11" redirectTo="/obrigado_google" />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
