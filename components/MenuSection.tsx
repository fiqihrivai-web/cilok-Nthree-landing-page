"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/Context/CartContext";
import { formatRupiah } from "@/utils/format";

const menuItems = [
  {
    id: 1,
    name: "CILOK KUAH ORI",
    price: 12000,
    desc: "Gurih, hangat, dan bikin nagih buat cemilan santai.",
    img: "/menu-ori.png",
  },
  {
    id: 2,
    name: "CILOK MERCON",
    price: 15000,
    desc: "Pedas gila, isian daging melimpah dengan kuah membara.",
    img: "/menu-mercon.png",
  },
  {
    id: 3,
    name: "CILOK SPECIAL",
    price: 18000,
    desc: "Komplit pake telur & tetelan sapi yang bikin kenyang.",
    img: "/menu-special.png",
  },
];

export default function MenuSection() {
  const { cart, addToCart } = useCart();

  return (
    <section
      id="menu"
      className="w-full py-24 px-6 md:px-16 bg-[#fdfdfd] relative overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW (BIAR NYAMBUNG HERO) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-red-500/20 blur-[120px] top-20 left-10"></div>
        <div className="absolute w-72 h-72 bg-yellow-400/20 blur-[120px] bottom-10 right-10"></div>
      </div>

      {/* 🔥 img pojok kanan atas */}
      <img
        src="/mh.png"
        alt="decoration"
        className="absolute -top-10 -right-5 w-40 md:w-56 opacity-90 rotate-[0deg] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 HEADER */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none tracking-tighter text-zinc-900">
            PILIH <span className="text-red-600">MENU</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mt-4 rounded-full"></div>
        </div>

        {/* 🔥 GRID MENU */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* 🔥 IMAGE */}
              <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* 🔥 PRICE BADGE */}
                <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-white text-xs font-black shadow-lg">
                  {formatRupiah(item.price)}
                </div>

                {/* 🔥 OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
              </div>

              {/* 🔥 CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>

                {/* 🔥 BUTTON */}
                <button
                  onClick={() => addToCart({ ...item, qty: 1 })}
                  className="text bg-red-700 w-full py-4 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gray-800 hover:text-black transition-all duration-300"
                >
                  KLIK UNTUK ORDER
                </button>
              </div>

              {/* 🔥 GLOW EFFECT */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500/10 blur-[60px] group-hover:bg-red-500/20 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
