"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-red-600 py-24 px-6 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 text-white/10 font-black text-[20rem] leading-none select-none pointer-events-none translate-x-20 translate-y-20">
        N3
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-5xl md:text-7xl font-black italic uppercase text-white mb-8"
        >
          Udah Laper <br /> Belum Nii Guys?
        </motion.h2>

        <p className="text-red-100 text-xl mb-12 font-medium">
          Barang kali ada yang mau di tanyakan boleh di klik tombol di bawah
          ini. <br className="hidden md:block" /> Delivery area Cianjur kota dan
          sekitarnya! Atau bisa langsung order melalui keranjang di pojok kanan
          atas nya kaka
        </p>

        <motion.a
          href="https://wa.me/6281546871098?text=Halo kak, saya mau tanya tentang menu Cilok N-Three"
          target="_blank"
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-red-600 px-12 py-5 rounded-full font-black text-2xl uppercase shadow-2xl hover:bg-zinc-100 transition-colors"
        >
          HUBUNGI KAMI
        </motion.a>
      </div>
    </section>
  );
}
