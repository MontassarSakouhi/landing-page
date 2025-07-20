"use client"

import { ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: showScrollTop ? 1 : 0,
        opacity: showScrollTop ? 1 : 0,
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
    >
      <motion.div
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{
          scale: [0, 1.5],
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}
