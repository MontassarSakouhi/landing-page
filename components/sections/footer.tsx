"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative z-10 py-16 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center space-x-3 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div className="relative" whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="flex items-center">

                  <img src="/2-1.png"  className={"w-[150px]"} alt=""/>


              </div>
            </motion.div>
          </motion.div>

          <motion.p
            className="text-slate-600 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Copyright © 2025 neov All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-teal-100/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-emerald-100/30 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </footer>
  )
}
