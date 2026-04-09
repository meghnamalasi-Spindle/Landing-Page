import { AudienceSplit } from './components/AudienceSplit'
import { CompetitiveEdge } from './components/CompetitiveEdge'
import { CtaFooter } from './components/CtaFooter'
import { Differentiators } from './components/Differentiators'
import { ExecutionLoop } from './components/ExecutionLoop'
import { FAQ } from './components/FAQ'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MarketsPersonas } from './components/MarketsPersonas'
import { OfferingSection } from './components/OfferingSection'
import { PainOutcomes } from './components/PainOutcomes'
import { Pillars } from './components/Pillars'
import { ProductPreview } from './components/ProductPreview'
import { Statement } from './components/Statement'
import { Team } from './components/Team'
import { TrustStrip } from './components/TrustStrip'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-zinc-100 antialiased">
      <Header />
      <main>
        <Hero />
        <Statement />
        <OfferingSection />
        <Pillars />
        <ExecutionLoop />
        <AudienceSplit />
        <Differentiators />
        <MarketsPersonas />
        <PainOutcomes />
        <ProductPreview />
        <TrustStrip />
        <CompetitiveEdge />
        <Team />
        <FAQ />
      </main>
      <CtaFooter />
    </div>
  )
}

export default App
