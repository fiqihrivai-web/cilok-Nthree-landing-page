"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingBag, X, Trash2 } from "lucide-react";
import { useCart } from "@/Context/CartContext";
import { formatRupiah } from "@/utils/format";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Menu", href: "/#menu", id: "menu" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Location", href: "/#location", id: "location" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  // ✅ HANDLE PAGE CHANGE (biar underline gak error)
  useEffect(() => {
    if (pathname !== "/") {
      setActive(""); // matiin underline di halaman lain
    } else {
      const hash = window.location.hash.replace("#", "");
      setActive(hash || "home");
    }
  }, [pathname]);

  // AUTO CLOSE CART
  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname]);

  // SCROLL SPY
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // ✅ STATUS OPEN + SAVE CART
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const checkTime = () => {
      const hour = new Date().getHours();
      setIsOpen(hour >= 7 && hour < 22);
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, [cart]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-[9999] pointer-events-auto transition-all duration-300 px-4 md:px-10 ${
        scrolled
          ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "py-4 bg-black/40 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link
          href="/#home"
          onClick={() => setActive("home")}
          className={`font-black italic tracking-tighter uppercase ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          N<span className="text-red-600">-THREE</span>
        </Link>

        {/* NAV */}
        <div
          className={`hidden lg:flex items-center ${
            scrolled ? "gap-x-6" : "gap-x-10"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (pathname !== "/") {
                  // 🚀 kalau bukan di homepage → langsung pindah page
                  return;
                }

                e.preventDefault();

                setActive(link.id);
                setIsCartOpen(false);

                const el = document.getElementById(link.id);
                const nav = document.getElementById("navbar");

                if (el && nav) {
                  const navHeight = nav.offsetHeight;

                  const y =
                    el.getBoundingClientRect().top + window.scrollY - navHeight;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });
                }
              }}
              className="relative"
            >
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.5em] transition ${
                  active === link.id
                    ? "text-red-600"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {link.name}
              </span>

              {active === link.id && (
                <motion.div
                  layoutId="underline"
                  transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 30,
                  }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-red-600"
                />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          {/* STATUS */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-white/10 rounded-full bg-zinc-900/50">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                  isOpen ? "bg-green-400" : "bg-red-400"
                } opacity-75`}
              />
              <span
                className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                  isOpen ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </span>

            <span
              className={`text-[8px] font-black uppercase ${
                isOpen ? "text-green-500" : "text-red-500"
              }`}
            >
              {isOpen ? "Open" : "Closed"}
            </span>
          </div>

          {/* ICON */}
          <div className="flex items-center gap-5 text-black">
            <button onClick={() => setIsSearchOpen(true)}>
              <Search size={18} />
            </button>

            <button onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingBag size={18} />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-[8px] flex items-center justify-center text-white font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* CART */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* 🔥 OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />

            {/* 🔥 CART PANEL */}
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-16 right-0 w-[340px] h-[calc(100vh-80px)] 
        bg-zinc-900 backdrop-blur-2xl 
        border-l border-white/10 
        shadow-[0_0_40px_rgba(0,0,0,0.6)] 
        z-50 p-6 flex flex-col"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-black">Your Cart 🛒</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-white hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>

              {/* CONTENT */}
              <div className="flex-1 overflow-y-auto pr-2">
                {cart.length === 0 ? (
                  <p className="text-zinc-500 text-center mt-20">
                    Keranjang kosong 😢
                  </p>
                ) : (
                  <AnimatePresence mode="popLayout">
                    <div className="flex flex-col gap-4">
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="flex justify-between items-center 
                    bg-white/5 hover:bg-white/10 
                    p-3 rounded-xl border border-white/5"
                        >
                          {/* LEFT */}
                          <div className="flex items-center gap-3">
                            <img
                              src={item.img}
                              className="w-14 h-14 rounded-xl object-cover 
                        shadow-lg hover:scale-105 transition"
                            />

                            <div>
                              <p className="text-sm font-bold">{item.name}</p>

                              <p className="text-xs text-zinc-400">
                                {item.qty} x {formatRupiah(item.price)}
                              </p>

                              <p className="text-xs text-red-500 font-bold">
                                {formatRupiah(item.price * item.qty)}
                              </p>

                              {/* QTY */}
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    decreaseQty(item.id);
                                  }}
                                  className="w-8 h-8 rounded-lg bg-white/10 
                            hover:bg-red-500/80 active:scale-90 
                            transition flex items-center justify-center"
                                >
                                  -
                                </button>

                                <span className="w-6 text-center font-bold">
                                  {item.qty}
                                </span>

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    increaseQty(item.id);
                                  }}
                                  className="w-8 h-8 rounded-lg bg-white/10 
                            hover:bg-green-500/80 active:scale-90 
                            transition flex items-center justify-center"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* DELETE */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                            className="p-2 rounded-lg hover:bg-red-500/20"
                          >
                            <Trash2 size={16} className="text-red-500" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </AnimatePresence>
                )}
              </div>

              {/* FOOTER */}
              {cart.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-zinc-400">Total</p>
                  <h3 className="text-xl font-black text-red-500 mb-4">
                    {formatRupiah(total)}
                  </h3>

                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      router.push("/checkout");
                    }}
                    className="w-full py-3 rounded-xl 
              bg-gradient-to-r from-green-500 to-green-600 
              hover:scale-[1.02] active:scale-95 
              transition font-bold shadow-lg"
                  >
                    Checkout 🚀
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
