"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-[45px] h-[45px] rounded-[5px] bg-primary-black text-white hover:bg-accent-gold hover:text-primary-black transition-colors shadow-lg"
      aria-label="Rul til toppen"
    >
      <FaArrowUp className="w-5 h-5" />
    </button>
  );
}
