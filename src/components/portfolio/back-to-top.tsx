"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      setIsVisible(scrollTop > 240);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    document.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      document.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-[999] inline-flex size-12 items-center justify-center rounded-full text-[#0F172A] shadow-[0_18px_70px_rgba(15,23,42,0.14),inset_0_1px_10px_rgba(255,255,255,0.4)] backdrop-blur-xl transition duration-200 active:scale-[0.984] sm:bottom-7 sm:right-7 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ backgroundColor: "rgba(224, 240, 242, 0.74)" }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      }}
      type="button"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
