"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          const nav = document.getElementById("navbar");
          const navHeight = nav?.offsetHeight || 100;

          const y = el.getBoundingClientRect().top + window.scrollY - navHeight;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  return null;
}
