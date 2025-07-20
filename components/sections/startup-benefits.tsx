"use client"

import { TrendingUp, CreditCard, Settings, Award } from "lucide-react"
import { motion, type PanInfo } from "framer-motion"
import { useState } from "react"

const benefitsCards = [
  {
    icon: TrendingUp,
    title: "Market Access",
    description: "Provide startups access to SNB's clients and markets.",
    color: "teal",
  },
  {
    icon: CreditCard,
    title: "Access to Banking Services",
    description: "Offer SNB banking services, financial resources, and seamless technology integration.",
    color: "teal",
  },
  {
    icon: Settings,
    title: "Operational Support",
    description: "Tap into SNB's operational capacity and expertise to help startups scale.",
    color: "teal",
  },
  {
    icon: Award,
    title: "Reputational Gain",
    description: "Leverage SNB's strong brand to build credibility for startups.",
    color: "teal",
  },
]

export function StartupBenefits() {
  const [benefitsSlide, setBenefitsSlide] = useState(0)

  const handleBenefitsDragEnd = (event: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    if (offset > 100 || velocity > 500) {
      setBenefitsSlide((prev) => Math.max(0, prev - 1))
    } else if (offset < -100 || velocity < -500) {
      setBenefitsSlide((prev) => Math.min(benefitsCards.length - 1, prev + 1))
    }
  }

  return (
    <section className="relative z-10 py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="block">Uniquely Positioned for Your</span>
            <span className="block">Sustainable Growth</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-teal-500 font-semibold max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Specific benefits for startups
          </motion.p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefitsCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-white border border-slate-200 rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${card.color}-50/50 to-transparent opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.3 }}
                  />

                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`w-14 h-14 bg-${card.color}-100 rounded-xl flex items-center justify-center group-hover:bg-${card.color}-200 transition-colors duration-300`}
                    >
                      <motion.div
                        animate={{
                          rotate: index === 1 ? [0, 360] : 0,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                        }}
                      >
                        <Icon className={`w-7 h-7 text-${card.color}-600 group-hover:text-white transition-colors duration-300`} />
                      </motion.div>
                    </div>
                  </motion.div>

                  <div className="relative z-10">
                    <motion.h3
                      className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {card.title}
                    </motion.h3>

                    <motion.p
                      className="text-slate-600 leading-relaxed text-sm group-hover:text-white transition-colors duration-300"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {card.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className={`absolute -top-2 -right-2 w-12 h-12 bg-${card.color}-100/30 rounded-full blur-lg`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />

                  <motion.div
                    className={`absolute -bottom-2 -left-2 w-8 h-8 bg-${card.color}-200/20 rounded-full blur-md`}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: index * 0.4,
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
            dragConstraints={{ left: -(benefitsCards.length - 1) * 280, right: 0 }}
            onDragEnd={handleBenefitsDragEnd}
            animate={{ x: -benefitsSlide * 280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {benefitsCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={index}
                  className="min-w-[280px] px-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full">
                    <div className="mb-6">
                      <div className={`w-12 h-12 bg-${card.color}-100 rounded-xl flex items-center justify-center`}>
                        <motion.div
                          animate={{
                            rotate: index === 1 ? [0, 360] : 0,
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                            scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                          }}
                        >
                          <Icon className={`w-6 h-6 text-${card.color}-600`} />
                        </motion.div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {benefitsCards.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  benefitsSlide === index ? "bg-teal-600" : "bg-slate-300"
                }`}
                onClick={() => setBenefitsSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-100/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-1 h-1 bg-indigo-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  )
}
