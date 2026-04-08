import { CtaFooter } from './components/CtaFooter'
import { FAQ } from './components/FAQ'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pillars } from './components/Pillars'
import { ProductPreview } from './components/ProductPreview'
import { Team } from './components/Team'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 antialiased">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <HowItWorks />
        <ProductPreview />
        <Team />
        <FAQ />
      </main>
      <CtaFooter />
    </div>
  )
}

export default App
