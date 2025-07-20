"use client"

import { motion } from "framer-motion"

export function WhoWeAre() {
  return (
    <section className="relative z-10 py-0 pb-6 sm:py-20 px-6 bg-gradient-to-b from-transparent to-slate-50/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >


          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="block">Investing in Possibility.</span>
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Building What's Next.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            NEO Ventures (NEOV) is a venture capital fund, as part of SNB capital, purpose-built to drive innovation at
            the intersection of technology, finance, and lifestyle. We invest in bold ideas, back visionary founders,
            and build partnerships that expand the digital frontier.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4">
                  <motion.div
                    className="w-6 h-6 border-2 border-teal-400 rounded-full relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <div className="absolute inset-1 border border-teal-400 rounded-full"></div>
                    <div className="absolute inset-2 bg-teal-400 rounded-full"></div>
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </motion.div>

              <motion.p
                className="text-slate-300 leading-relaxed relative z-10"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                To be a leading strategic investor vehicle that drives innovation, builds a robust digital ecosystem,
                and explores new frontiers in products and markets, ultimately enhancing SNB's offerings and market
                position.
              </motion.p>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-500/5 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mr-4">
                  <motion.div
                    className="w-6 h-6 relative"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-emerald-400 rounded-full"></div>
                    <motion.div
                      className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-slate-800 rounded-full"
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </motion.div>

              <motion.p
                className="text-slate-300 leading-relaxed relative z-10"
                initial={{ opacity: 0.8 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                To invest in early-stage digital startups within Fintech and Lifestyle sectors, fueled by advanced
                technologies, to accelerate innovation, complement core offerings, and grow our local and global
                presence in line with SNB's strategic choices.
              </motion.p>

              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/4 w-2 h-2 bg-teal-400/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-emerald-400/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </section>
  )
}
