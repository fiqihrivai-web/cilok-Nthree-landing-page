"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdfdfd] overflow-hidden pt-24 px-4 md:px-8"
    >
      {/* 🔥 BACKGROUND GRADIENT GLOW */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-red-500/30 blur-[120px] top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-red-400/30 blur-[120px] bottom-10 right-10"></div>
      </div>

      {/* 🔥 GRAIN TEXTURE */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.15]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.7"
              numOctaves="3"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-20 text-center px-4">
        {/* ⭐ RATING */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-1 text-yellow-400 mb-4 text-xl"
        >
          ⭐⭐⭐⭐⭐
        </motion.div>

        {/* 🔥 TITLE */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-col items-center"
        >
          {/* CILOK */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem] font-black italic leading-none uppercase tracking-tighter text-zinc-900"
          >
            CILOK
          </motion.h1>

          {/* N-THREE */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem] font-black italic leading-none uppercase tracking-tighter text-red-600"
          >
            N-THREE
          </motion.h1>

          {/* HOME MADE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5 }}
            className="mt-6 md:mt-10 text-lg sm:text-2xl md:text-4xl tracking-[0.3em] text-red-500"
          >
            𝓗𝓸𝓶𝓮 𝓜𝓪𝓭𝓮
          </motion.div>
        </motion.div>
        {/* 🔥 FLOATING EMOJI */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -left-6 md:-left-10 text-4xl md:text-5xl hidden md:block"
        >
          🧂
        </motion.div>

        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -bottom-10 md:-bottom-20 -right-10 md:-right-40 text-5xl md:text-6xl hidden md:block"
        >
          🥢🍜
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-10 right-2 md:right-0 text-3xl md:text-4xl hidden md:block"
        >
          🌶️
        </motion.div>
      </div>

      {/* 🔥 HERO IMAGE */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative mt-12 z-20 px-6"
      >
        <div className="relative">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border-[8px] md:border-[12px] border-white overflow-hidden shadow-2xl">
            <img
              src="/cilok-hero.png"
              alt="Cilok N-Three"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </motion.div>

      {/* 🔥 img pojok kiri bawah */}
      <img
        src="/leaf.png"
        alt="decoration"
        className="absolute bottom-0 left-0 w-28 sm:w-36 md:w-48 opacity-80 pointer-events-none"
      />

      {/* 🔥 img pojok kanan bawah */}
      <img
        src="/chili.png"
        alt="decoration"
        className="absolute -bottom-2 -right-2 w-32 sm:w-40 md:w-48 opacity-80 pointer-events-none"
      />
    </section>
  );
}
