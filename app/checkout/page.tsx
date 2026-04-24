"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/Context/CartContext";
import { formatRupiah } from "@/utils/format";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🔥 Auto isi nama (biar keren)
  useEffect(() => {
    const savedName = localStorage.getItem("customerName");
    if (savedName) setCustomerName(savedName);
  }, []);

  useEffect(() => {
    localStorage.setItem("customerName", customerName);
  }, [customerName]);

  const router = useRouter();

  const handleCheckout = () => {
    if (!customerName || !address) {
      alert("Isi nama & alamat dulu bang 😄");
      return;
    }

    const phone = "6281546871098";

    const message = cart
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} (${item.qty}porsi) - ${formatRupiah(item.price * item.qty)}`,
      )
      .join("%0A");

    const totalText = `Total: ${formatRupiah(total)}`;

    const fullMessage = `Halo kak, saya mau order:%0A%0A
Nama: ${customerName}%0A
Alamat: ${address}%0A
Catatan: ${note || "-"}%0A
%0A${message}%0A%0A${totalText}`;

    window.open(`https://wa.me/${phone}?text=${fullMessage}`, "_blank");

    clearCart();
    localStorage.removeItem("customerName");
    setCustomerName("");
    setAddress("");
    setNote("");

    alert("Pesanan berhasil dikirim 🚀");

    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white text-white px-6 md:px-20 py-24">
      <h1 className="text-black text-3xl font-black mb-10">Checkout 🧾</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 🧾 ORDER LIST */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10">
          <h2 className="text-xl font-bold mb-6">Pesanan Kamu</h2>

          {cart.length === 0 ? (
            <p className="text-zinc-500">Keranjang kosong 😢</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-white/10 pb-3 hover:bg-zinc-900/50 p-2 rounded-lg transition"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-zinc-500">
                      {item.qty} x {formatRupiah(item.price)}
                    </p>
                  </div>

                  <p className="text-red-500 font-bold">
                    {formatRupiah(item.price * item.qty)}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* TOTAL */}
          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="text-sm text-zinc-400">Total</p>
            <h3 className="text-xl font-bold text-red-500">
              {formatRupiah(total)}
            </h3>
          </div>
        </div>

        {/* 📝 FORM */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 space-y-4">
          <h2 className="text-xl font-bold">Data Pemesan</h2>

          <input
            type="text"
            placeholder="Nama kamu..."
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 rounded outline-none"
          />

          <input
            type="text"
            placeholder="Alamat lengkap..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 rounded outline-none"
          />

          <textarea
            placeholder="Catatan (opsional)..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 rounded outline-none h-24 resize-none"
          />

          <button
            onClick={handleCheckout}
            className="w-full py-3 bg-green-600 hover:bg-green-700 font-bold rounded"
          >
            Order Via WhatsApp 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
