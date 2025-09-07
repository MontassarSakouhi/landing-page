"use client";

import { motion, type PanInfo } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const footprintStrategies = [
  {
    iconSrc: "/icon1.png",
    title: "Investing in Saudi Startups in KSA",
  },
  {
    iconSrc: "/icon2.png",
    title: "Localizing Global Startups into KSA",
  },
  {
    iconSrc: "/icon3.png",
    title: "Supporting Saudi Startups Expanding Globally",
  },
  {
    iconSrc: "/icon4.png",
    title: "Expanding Neo Solutions to Global Markets",
  },
];

const footprintImages = [
  "/images/footprint-strategy-1.png",
  "/images/swiper2.png",
  "/images/swiper3.png",
  "/images/swiper4.png",
];

export function GlobalFootprint() {
  const [footprintSlide, setFootprintSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setSlideWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleFootprintDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      setFootprintSlide((prev) => Math.max(0, prev - 1));
    } else if (offset < -100 || velocity < -500) {
      setFootprintSlide((prev) =>
        Math.min(footprintImages.length - 1, prev + 1),
      );
    }
  };

  return (
    <section className="relative z-10 py-12 px-4 sm:px-6 bg-[linear-gradient(225.17deg,_#0C3A43_0.9%,_#052E37_100%)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              className={"text-[#00FFEA]"}
            >
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold  mb-6 leading-tight">
                Growing Local and Global
                <br />
                <span className="  bg-clip-text ">Footprint strategy</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {footprintStrategies.map((strategy, index) => {
                return (
                  <motion.div
                    key={index}
                    className="group flex items-center  space-x-4 p-1 md:p-4 rounded-xl hover:bg-white/5 transition-all duration-300 gap-3 md:gap-6 lg:gap-8"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      animate={{
                        rotate: index === 1 ? [0, 360] : 0,
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        rotate: {
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Image
                        src={strategy.iconSrc}
                        alt="icon"
                        width={50}
                        height={50}
                      />
                    </motion.div>

                    <div className="flex items-center">
                      <motion.h3
                        className="text-lg font-bold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                      >
                        {strategy.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                );
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
            <div
              ref={containerRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-96 md:h-[500px]"
            >
              <motion.div
                className="flex h-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{
                  left: -(footprintImages.length - 1) * slideWidth,
                  right: 0,
                }}
                onDragEnd={handleFootprintDragEnd}
                animate={{ x: -footprintSlide * slideWidth }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {footprintImages.map((imageSrc, index) => (
                  <motion.div
                    key={index}
                    className="min-w-full h-full flex-shrink-0 relative"
                  >
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
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {footprintImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      footprintSlide === index
                        ? "bg-[#00FFEA]"
                        : "bg-[#00FFEA]/10"
                    }`}
                    onClick={() => setFootprintSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-teal-400/20 rounded-2xl pointer-events-none"
                animate={{
                  borderColor: [
                    "rgba(20,184,166,0.2)",
                    "rgba(20,184,166,0.4)",
                    "rgba(20,184,166,0.2)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
