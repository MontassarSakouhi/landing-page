"use client";

import { Building2, Globe, Shield } from "lucide-react";
import { motion, type PanInfo } from "framer-motion";
import { useEffect, useState } from "react";

const strategicValueCards = [
  {
    icon: Building2,
    title: "Build Ecosystem",
    description:
      "Foster partnerships and integrations that enhance product offerings and complement our ecosystem.",
    color: "teal",
  },
  {
    icon: Globe,
    title: "Explore New Products and Markets",
    description:
      "Enhance NEO Bank's product and service offerings to serve evolving customer needs and gain a foothold in emergent spaces.",
    color: "emerald",
  },
  {
    icon: Shield,
    title: "Minimize the Risk of Disruption",
    description:
      "Invest in future-defining technologies to protect core business from disruptive models.",
    color: "cyan",
  },
];

export function StrategicValue() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === strategicValueCards.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      setCurrentSlide((prev) => Math.max(0, prev - 1));
    } else if (offset < -100 || velocity < -500) {
      setCurrentSlide((prev) =>
        Math.min(strategicValueCards.length - 1, prev + 1),
      );
    }
  };

  return (
    <section
      id="ourvision"
      className="relative scroll-mt-24 z-10 py-20 px-6 bg-[#0C3A43]/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Driving Strategic Value
          </motion.h2>

          <motion.p
            className="text-md md:text-lg text-[#052E37] max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            NEOVentures is more than capital, it's a strategic investor fueling
            your growth story and success
          </motion.p>
        </motion.div>

        <div className="hidden md:grid [grid-template-columns:repeat(3,260px)] gap-2 lg:gap-10 place-items-center justify-center">
          {" "}
          {strategicValueCards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden w-full max-w-[260px] h-[300px] bg-[url('/cards-bg.png')] bg-cover bg-center rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,46,55,0.85)_0%,#18595E_100%)] group-hover:bg-[linear-gradient(180deg,rgba(24,89,94,0.87)_0%,#052E37_100%)] transition-all duration-1500 ease-in-out" />

              <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">
                <h1 className="text-3xl font-semibold">{card.title}</h1>
                <p className="text-sm opacity-90">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden relative overflow-hidden">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{
              left: -(strategicValueCards.length - 1) * 306,
              right: 0,
            }}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentSlide * 306 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {strategicValueCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={index}
                  className="min-w-[300px] px-3 shrink-0 flex justify-center"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div className="relative overflow-hidden w-[260px] h-[300px] bg-[url('/cards-bg.png')] bg-cover bg-center rounded-xl mx-auto">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,46,55,0.85)_0%,#18595E_100%)]" />
                    <div className="relative z-10 h-full flex flex-col justify-between p-5 text-white">
                      <h1 className="text-2xl font-semibold">{card.title}</h1>
                      <p className="text-sm opacity-90">{card.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {strategicValueCards.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-teal-600" : "bg-slate-300"
                }`}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ x: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-teal-100/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-emerald-100/40 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-1 h-1 bg-teal-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
