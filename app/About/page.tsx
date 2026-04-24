"use client";
import AboutSection from "@/components/AboutSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    // Gunakan h-screen kalau mau bener-bener pas seukuran layar,
    // tapi min-h-screen lebih aman buat konten panjang.
    <main className="bg-black min-h-screen w-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // pt-44 buat ngasih space dari Navbar yang fixed
        // pb-32 buat ngasih space di bawah biar nggak nempel footer
        className="flex-1 pt-44 md:pt-56 pb-32 px-6 md:px-12 flex items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto">
          <AboutSection />
        </div>
      </motion.div>
    </main>
  );
}
