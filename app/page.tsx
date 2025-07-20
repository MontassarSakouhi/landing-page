"use client"

import { AnimatedBackground } from "@/components/shared/animated-background"
import { ScrollToTop } from "@/components/shared/scroll-to-top"
import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { WhoWeAre } from "@/components/sections/who-we-are"
import { StrategicValue } from "@/components/sections/strategic-value"
import { InvestmentFocus } from "@/components/sections/investment-focus"
import { StartupBenefits } from "@/components/sections/startup-benefits"
import { GlobalFootprint } from "@/components/sections/global-footprint"
import { PitchDeck } from "@/components/sections/pitch-deck"
import { Footer } from "@/components/sections/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <WhoWeAre />
      <StrategicValue />
      <InvestmentFocus />
      <StartupBenefits />
      <GlobalFootprint />
      <PitchDeck />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
