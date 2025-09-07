"use client";

import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { WhoWeAre } from "@/components/sections/who-we-are";
import { StrategicValue } from "@/components/sections/strategic-value";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { InvestmentFocus } from "@/components/sections/investment-focus";
import { StartupBenefits } from "@/components/sections/startup-benefits";
import { GlobalFootprint } from "@/components/sections/global-footprint";
import { PitchDeck } from "@/components/sections/pitch-deck";
import { Footer } from "@/components/sections/footer";

export default function LandingPage() {
  const strategicWrapperRef = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: strategicWrapperRef,

    offset: ["start 80%", "end 35%"],
  });
  const bgOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.85, 1],
    [0, 1, 1, 0],
  );
  const bgTranslateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-10vh", "0vh", "10vh"],
  );

  return (
    <div className="min-h-screen   relative overflow-hidden">
      <motion.img
        src="/logo-transparent.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none fixed top-[200px] -translate-x-1/2 -translate-y-1/2 z-[1] w-full"
        style={{ opacity: bgOpacity, y: bgTranslateY }}
      />
      <Navbar />
      <Hero />
      <div className="relative z-20">
        <WhoWeAre />
      </div>
      <div ref={strategicWrapperRef} className="relative z-10">
        <StrategicValue />
      </div>
      <InvestmentFocus />
      <StartupBenefits />
      <GlobalFootprint />
      <PitchDeck />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
