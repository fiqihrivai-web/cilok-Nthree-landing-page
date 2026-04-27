"use client";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative bg-white py-32 px-6 overflow-hidden"
    >
      {/* 🔥 BACKGROUND GRADIENT RED HALUS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="
            backdrop-blur-2xl 
            bg-white/70 
            border border-black/5 
            shadow-[0_20px_60px_rgba(0,0,0,0.1)] 
            rounded-[40px] 
            overflow-hidden 
            flex flex-col md:flex-row
          "
        >
          {/* LEFT */}
          <div className="p-12 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-black italic uppercase mb-10 tracking-tighter text-black">
              Kunjungi <span className="text-red-600">Kami</span>
            </h2>

            <div className="space-y-8">
              {/* ADDRESS */}
              <div className="flex gap-4 group">
                <div className="bg-red-600 p-3 rounded-xl h-fit text-white group-hover:scale-110 transition">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-black">Alamat Utama</h4>
                  <p className="text-gray-600">
                    Perumahan Hukoci Blok R1 no 09,
                    <br />
                    Cianjur, Jawa Barat
                  </p>
                </div>
              </div>

              {/* TIME */}
              <div className="flex gap-4 group">
                <div className="bg-red-600 p-3 rounded-xl h-fit text-white group-hover:scale-110 transition">
                  <Clock size={22} />
                </div>

                <div>
                  <h4 className="font-bold text-lg text-black">
                    Jam Operasional
                  </h4>
                  <p className="text-gray-600">
                    Senin - Minggu: 10.00 - 21.00 WIB
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <div className="pt-6">
                <a
                  href="https://maps.app.goo.gl/PoXf7KJyu9fP4ZMF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3 
                    bg-black text-white 
                    hover:bg-red-600 
                    px-8 py-4 
                    rounded-2xl 
                    font-black uppercase italic 
                    transition-all duration-300 
                    hover:scale-105 active:scale-95
                    shadow-lg
                  "
                >
                  <Navigation size={18} />
                  Dapatkan Rute
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="bg-black md:w-1/2 h-96 md:h-auto min-h-[400px] relative">
            <div
              className="
                h-full w-full 
                rounded-2xl 
                overflow-hidden 
                border border-black/10 
                shadow-inner
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.644135245138!2d107.1633519!3d-6.8130456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e684ce2c00743bf%3A0xc15bb5fe90758e44!2sPerum%20Arwinda%20Asri!5e0!3m2!1sid!2sid!4v1712345678901!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="
                  grayscale contrast-110 
                  opacity-80 hover:opacity-100 
                  transition duration-500
                "
              />
            </div>

            {/* 🔥 OVERLAY GLOW */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
