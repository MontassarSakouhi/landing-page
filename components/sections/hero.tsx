"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <main className="relative z-0 flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh] px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="block"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            NEO Ventures:
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-teal-200 to-emerald-200 bg-clip-text text-transparent"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Investing in the Future
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-teal-100 mb-12 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Fueling innovation and growth in Fintech and Lifestyle
        </motion.p>

        <motion.button
          className="group relative px-8 py-4 border-2 border-teal-400 text-white rounded-full overflow-hidden backdrop-blur-sm"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-teal-400/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Discover more</span>
        </motion.button>
      </div>
    </main>
  )
}
