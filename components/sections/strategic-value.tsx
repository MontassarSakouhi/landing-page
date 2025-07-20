"use client"

import { Building2, Globe, Shield } from "lucide-react"
import { motion, type PanInfo } from "framer-motion"
import { useState } from "react"

const strategicValueCards = [
  {
    icon: Building2,
    title: "Build Ecosystem",
    description: "Foster partnerships and integrations that enhance product offerings and complement our ecosystem.",
    color: "teal",
  },
  {
    icon: Globe,
    title: "Explore New Products and Markets",
    description:
      "Enhance NEO's product and service offerings to serve evolving customer needs and gain a foothold in emergent spaces.",
    color: "emerald",
  },
  {
    icon: Shield,
    title: "Minimize the Risk of Disruption",
    description:
      "Invest in future-defining technologies to stay ahead of market disruption and maintain competitive advantage.",
    color: "cyan",
  },
]

export function StrategicValue() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleDragEnd = (event: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset > 100 || velocity > 500) {
      setCurrentSlide((prev) => Math.max(0, prev - 1))
    } else if (offset < -100 || velocity < -500) {
      setCurrentSlide((prev) => Math.min(strategicValueCards.length - 1, prev + 1))
    }
  }

  return (
    <section className="relative z-10 py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Driving Strategic Value
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            NEO Ventures is more than capital, it's a strategic investor fueling your growth story and success
          </motion.p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-12">
          {strategicValueCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative bg-white border border-slate-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${card.color}-50 to-transparent opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="text-center mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`w-20 h-20 bg-${card.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-${card.color}-200 transition-colors duration-300`}
                    >
                      <motion.div
                        animate={{
                          rotate: index === 1 ? [0, 360] : 0,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        }}
                      >
                        <Icon className={`w-10 h-10 text-${card.color}-600 group-hover:text-white transition-colors duration-300`} />
                      </motion.div>
                    </div>
                  </motion.div>

                  <div className="text-center relative z-10">
                    <motion.h3
                      className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {card.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 leading-relaxed group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {card.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className={`absolute -top-4 -right-4 w-16 h-16 bg-${card.color}-100/50 rounded-full blur-xl`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />

                  <motion.div
                    className={`absolute -bottom-4 -left-4 w-12 h-12 bg-${card.color}-200/30 rounded-full blur-lg`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.7,
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="md:hidden relative">
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{ left: -(strategicValueCards.length - 1) * 300, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{ x: -currentSlide * 300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {strategicValueCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={index}
                  className="min-w-[300px] px-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg h-full">
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 bg-${card.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <motion.div
                          animate={{
                            rotate: index === 1 ? [0, 360] : 0,
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                            scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                          }}
                        >
                          <Icon className={`w-8 h-8 text-${card.color}-600`} />
                        </motion.div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
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
  )
}
