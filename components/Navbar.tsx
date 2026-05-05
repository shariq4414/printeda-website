"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/printedalogo.png"
            alt="Printeda Logo"
            width={260}
            height={80}
            priority
            className="object-contain scale-110 hover:scale-115 transition duration-300"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>

          <Link href="#gallery" className="hover:text-blue-600 transition">
          About us
          </Link>
          

          <Link href="/services/dsc" className="hover:text-blue-600 transition">
            DSC
          </Link>

          <Link href="#contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition">
              Contact Us
            </button>
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 bg-white border-t text-slate-700 font-medium">

          <Link href="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link href="#services" onClick={() => setOpen(false)} className="block">
            Services
          </Link>

          <Link href="#gallery" onClick={() => setOpen(false)} className="block">
            Work
          </Link>

          <Link href="/services/dsc" onClick={() => setOpen(false)} className="block">
            DSC
          </Link>

          <Link href="#contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
              Contact Us
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
}