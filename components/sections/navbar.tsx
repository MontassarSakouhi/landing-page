"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#aboutus" },
    { label: "Our Vision", href: "#ourvision" },
    { label: "Investment Focus", href: "#investmentfocus" },
    { label: "Contact Us", href: "#contactus" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 xl:px-48 py-6 bg-black/10 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src="/logo-white.png" alt="" className={"h-9"} />
      </motion.div>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
        {navLinks.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
          >
            <Link
              href={item.href}
              className="text-white hover:text-teal-200 transition-colors duration-300 relative group"
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-200"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden">
        <button
          aria-label="Open menu"
          className="text-white p-2 focus:outline-none"
          onClick={() => setMobileOpen(true)}
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      <motion.div
        className="hidden md:flex items-center space-x-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="#"
            className="text-white hover:text-teal-200 transition-colors duration-300 border rounded-full px-6 py-2"
          >
            Log in / Sign up
          </Link>
        </motion.div>
      </motion.div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/70 md:hidden">
          <div className="relative z-[70] w-full max-w-full bg-white rounded-b-xl shadow-2xl flex flex-col items-center pt-4 pb-8 px-6 mx-auto animate-slide-down">
            <button
              aria-label="Close menu"
              className="absolute top-4 right-4 text-gray-700 text-3xl focus:outline-none"
              onClick={() => setMobileOpen(false)}
            >
              &times;
            </button>
            <nav className="flex flex-col items-center gap-6 w-full mt-8">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-900 text-lg font-semibold hover:text-teal-600 transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-6 mt-8">
              <Link
                href="#"
                className="text-black hover:text-teal-200 transition-colors duration-300 border border-black rounded-full px-6 py-2"
              >
                Log in / Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
