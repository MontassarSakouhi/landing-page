"use client"

import { motion } from "framer-motion"

export function MobileMenu() {
  return (
    <motion.div
      className="md:hidden fixed top-6 right-6 z-20"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <motion.button className="text-white p-2" whileTap={{ scale: 0.9 }}>
        <motion.div className="w-6 h-0.5 bg-white mb-1" />
        <motion.div className="w-6 h-0.5 bg-white mb-1" />
        <motion.div className="w-6 h-0.5 bg-white" />
      </motion.button>
    </motion.div>
  )
}
