"use client"

import { BarChart3, MapPin, Network, Plus } from "lucide-react"
import { motion, type PanInfo } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const footprintStrategies = [
  {
    icon: BarChart3,
    title: "Investing in Saudi Startups in KSA",
    description: "Supporting local innovation and entrepreneurship within the Kingdom of Saudi Arabia.",
  },
  {
    icon: MapPin,
    title: "Localizing Global Startups into KSA",
    description: "Bringing international startups and solutions to the Saudi market.",
  },
  {
    icon: Network,
    title: "Supporting Saudi Startups Expanding Globally",
    description: "Helping Saudi startups scale and expand their reach to international markets.",
  },
  {
    icon: Plus,
    title: "Expanding Neo Solutions to Global Markets",
    description: "Taking NEO's innovative solutions and expanding them to global markets.",
  },
]

const footprintImages = [
  "/images/footprint-strategy-1.png",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
]

export function GlobalFootprint() {
  const [footprintSlide, setFootprintSlide] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth)
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const handleFootprintDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset > 100 || velocity > 500) {
      setFootprintSlide((prev) => Math.max(0, prev - 1))
    } else if (offset < -100 || velocity < -500) {
      setFootprintSlide((prev) => Math.min(footprintImages.length - 1, prev + 1))
    }
  }

  return (
      <section className="relative z-10 py-12 px-4 sm:px-6" style={{ backgroundColor: "#0f4c5c" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Growing Local and Global
                  <br />
                  <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Footprint strategy
                </span>
                </h2>
              </motion.div>

              <div className="space-y-6">
                {footprintStrategies.map((strategy, index) => {
                  const Icon = strategy.icon
                  return (
                      <motion.div
                          key={index}
                          className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10 }}
                      >
                        <motion.div
                            className="flex-shrink-0 w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                              animate={{
                                rotate: index === 1 ? [0, 360] : 0,
                                scale: [1, 1.05, 1],
                              }}
                              transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                              }}
                          >
                            <Icon className="w-6 h-6 text-teal-300" />
                          </motion.div>
                        </motion.div>

                        <div className="flex-1">
                          <motion.h3
                              className="text-lg font-bold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300"
                              initial={{ opacity: 0.8 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                              viewport={{ once: true }}
                          >
                            {strategy.title}
                          </motion.h3>
                          <motion.p
                              className="text-slate-300 leading-relaxed text-sm"
                              initial={{ opacity: 0.6 }}
                              whileInView={{ opacity: 0.8 }}
                              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                              viewport={{ once: true }}
                          >
                            {strategy.description}
                          </motion.p>
                        </div>
                      </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
            >
              <div ref={containerRef} className="relative rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-96 md:h-[500px]">
                <motion.div
                    className="flex h-full cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -(footprintImages.length - 1) * slideWidth, right: 0 }}
                    onDragEnd={handleFootprintDragEnd}
                    animate={{ x: -footprintSlide * slideWidth }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {footprintImages.map((imageSrc, index) => (
                      <motion.div key={index} className="min-w-full h-full flex-shrink-0 relative">
                        <div className="w-full h-full relative">
                          <Image
                              src={imageSrc}
                              alt={`Footprint strategy ${index + 1}`}
                              fill
                              className="object-cover"
                              priority={index === 0}
                          />
                          <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
                              animate={{ opacity: [0.3, 0.5, 0.3] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </div>
                      </motion.div>
                  ))}
                </motion.div>
                <motion.div
                    className="absolute inset-0 border-2 border-teal-400/20 rounded-2xl pointer-events-none"
                    animate={{
                      borderColor: ["rgba(20,184,166,0.2)", "rgba(20,184,166,0.4)", "rgba(20,184,166,0.2)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
