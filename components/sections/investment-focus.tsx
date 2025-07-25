"use client"

import { Lightbulb, Smartphone, Target, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const keyCharacteristics = [
  {
    icon: Lightbulb,
    title: "Early-stage focus",
    description:
      "We invest at the earliest stages (Pre-Seed to Series A) to fuel innovation where it matters most - bringing your idea to product-fit and growth.",
  },
  {
    icon: Smartphone,
    title: "Digital & tech-driven",
    description:
      "Our investments are centered on scalable technologies that enable smarter, faster, and more connected solutions.",
  },
  {
    icon: Target,
    title: "Dual industry focus: Fintech & Lifestyle",
    description:
      "We target disruptive ventures in finance and lifestyle, where digital innovation transforms everyday experiences.",
  },
  {
    icon: Users,
    title: "Local and global impact",
    description:
      "We support startups that make an impact - either locally in Saudi Arabia or internationally - while scaling to shape the digital future.",
  },
]

export function InvestmentFocus() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative z-10 py-20 px-6" style={{ backgroundColor: "#0c3a43" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Investment Focus
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            NEO Ventures is positioned in the intersection of FinTech and Lifestyle - the frontier of innovation.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="relative max-w-4xl w-full" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <Image
              src="/images/investment-focus-diagram.png"
              alt="Investment Focus - FinTech and Lifestyle Intersection"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />

            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-cyan-400/5 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-300/40 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-cyan-300/40 rounded-full"
              animate={{
                y: [0, -8, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-center text-teal-300 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Key characteristics of target investments
          </motion.h3>

          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
            {keyCharacteristics.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative bg-transparent border-2 border-teal-400/30 rounded-2xl p-8 h-full hover:border-teal-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="flex items-center mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 bg-teal-400/20 rounded-full flex items-center justify-center mr-4">
                        <motion.div
                          animate={{
                            rotate: index === 1 ? [0, 360] : 0,
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                          }}
                        >
                          <Icon className="w-6 h-6 text-teal-300" />
                        </motion.div>
                      </div>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    </motion.div>

                    <motion.p
                      className="text-slate-300 leading-relaxed relative z-10"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {item.description}
                    </motion.p>

                    <motion.div
                      className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-400/5 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
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
              dragConstraints={{ left: -900, right: 0 }}
              animate={{ x: -currentSlide * 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {keyCharacteristics.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    className="min-w-[300px] px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-transparent border-2 border-teal-400/30 rounded-2xl p-6 h-full backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-teal-400/20 rounded-full flex items-center justify-center mr-3">
                          <motion.div
                            animate={{
                              rotate: index === 1 ? [0, 360] : 0,
                              scale: [1, 1.1, 1],
                            }}
                            transition={{
                              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                              scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                            }}
                          >
                            <Icon className="w-5 h-5 text-teal-300" />
                          </motion.div>
                        </div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      </div>

                      <p className="text-slate-300 leading-relaxed text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3].map((index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? "bg-teal-400" : "bg-slate-500"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/4 left-10 w-32 h-32 bg-teal-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-10 w-40 h-40 bg-emerald-500/8 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </section>
  )
}
