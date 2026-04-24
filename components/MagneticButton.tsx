"use client";
import { useRef } from "react";

export default function MagneticButton({ children }: any) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current!.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="px-6 py-3 bg-red-600 text-white rounded-full text-sm font-bold transition-transform duration-200"
    >
      {children}
    </button>
  );
}
