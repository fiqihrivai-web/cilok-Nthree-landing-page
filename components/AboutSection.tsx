"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 overflow-hidden bg-gradient-to-br from-white via-red-50 to-white"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[140px] rounded-full" />

      {/* 🔥 GRID LINE (BIAR KAYA DESIGN TOOL 😈) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-black"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-black italic uppercase leading-none mb-8 tracking-tight">
            DIBALIK <br />
            <span className="text-red-600 text-7xl md:text-8xl">RASA</span>
          </h2>

          <p className="text-zinc-600 text-lg leading-relaxed italic max-w-md">
            "Berawal dari dapur rumahan di Cianjur, N-Three hadir untuk
            mendefinisikan ulang cara menikmati cilok. Kami percaya rasa yang
            jujur datang dari bahan berkualitas dan kuah rahasia yang dimasak
            berjam-jam."
          </p>

          {/* 🔥 SIGNATURE LINE */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-[2px] w-20 bg-red-600"></div>
            <span className="font-bold tracking-widest text-sm uppercase text-zinc-700">
              Original Recipe Since 2023
            </span>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >
          {/* LEFT COLUMN */}
          <div className="space-y-5 pt-10">
            {/* IMAGE */}
            <div className="group h-64 rounded-2xl overflow-hidden relative">
              <img
                src="/cooking-1.jpg"
                alt="Cook"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* 🔥 GLASS OVERLAY */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* CARD */}
            <div className="h-40 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center p-6 shadow-xl hover:scale-[1.02] transition">
              <span className="text-white font-black text-2xl uppercase italic text-center">
                Fresh Every Day
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-5">
            {/* 100% CARD */}
            <div className="h-40 rounded-2xl bg-white flex items-center justify-center shadow-lg border border-zinc-200 hover:scale-[1.02] transition">
              <span className="text-black font-black text-5xl">100%</span>
            </div>

            {/* IMAGE */}
            <div className="group h-80 rounded-2xl overflow-hidden relative">
              <img
                src="/ingredients.jpg"
                alt="Ingredients"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
