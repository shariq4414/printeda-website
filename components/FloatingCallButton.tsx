"use client";

import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href="tel:+917599982088"
      aria-label="Call Printeda"
      className="
        fixed bottom-20 right-6
        bg-blue-600 text-white
        p-4 rounded-full
        shadow-xl hover:shadow-blue-300
        hover:scale-110
        transition duration-300
        z-50
      "
    >
      <Phone size={22} strokeWidth={2.5} />
    </a>
  );
}