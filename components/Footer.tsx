"use client";

import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black/80 backdrop-blur-xl border-t border-white/10 pt-20 pb-10 px-6 md:px-16 relative overflow-hidden">
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-72 h-72 bg-red-600 blur-[120px] absolute -top-20 -left-20"></div>
        <div className="w-72 h-72 bg-purple-600 blur-[120px] absolute bottom-0 right-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black italic tracking-tighter mb-6">
              N-<span className="text-red-600">THREE</span>
            </h2>

            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Mendefinisikan ulang cara menikmati cilok dengan bahan berkualitas
              dan resep rahasia dari dapur rumahan di Cianjur.
            </p>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
              Follow Us
            </h4>

            <div className="flex gap-6">
              {/* Instagram */}
              <motion.div whileHover={{ y: -6, scale: 1.15 }}>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                  <span className="absolute inset-0 rounded-full bg-red-700 blur-md opacity-0 group-hover:opacity-60 transition"></span>
                </Link>
              </motion.div>

              {/* Facebook */}
              <motion.div whileHover={{ y: -6, scale: 1.15 }}>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-all duration-300"
                >
                  <FaFacebookF size={20} />
                  <span className="absolute inset-0 rounded-full bg-blue-700 blur-md opacity-0 group-hover:opacity-60 transition"></span>
                </Link>
              </motion.div>

              {/* WhatsApp */}
              <motion.div whileHover={{ y: -6, scale: 1.15 }}>
                <Link
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-400 transition-all duration-300"
                >
                  <FaWhatsapp size={20} />
                  <span className="absolute inset-0 rounded-full bg-green-700 blur-md opacity-0 group-hover:opacity-60 transition"></span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
              Location
            </h4>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Perumahan Arwinda Asri <br />
              Blok L1, Cianjur, <br />
              Jawa Barat.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">
            © {currentYear} N-Three Cilok Kuah. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-zinc-500 hover:text-white text-[10px] uppercase tracking-widest transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-red-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
