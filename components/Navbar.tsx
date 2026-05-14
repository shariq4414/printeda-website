"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Menu,
  X,
  PackageSearch,
} from "lucide-react";

import Image from "next/image";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  return (

    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
        >

          <Image
            src="/printedalogo.png"
            alt="Printeda Logo"
            width={260}
            height={80}
            priority
            className="object-contain hover:scale-105 transition duration-300"
          />

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-slate-700">

          <Link
            href="/"
            className="hover:text-blue-600 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="#services"
            className="hover:text-blue-600 transition-all duration-300"
          >
            Services
          </Link>

          <Link
            href="/services/dsc"
            className="hover:text-blue-600 transition-all duration-300"
          >
            DSC
          </Link>

          {/* TRACK ORDER */}
          <Link
            href="/track"
            className="flex items-center gap-2 bg-black hover:bg-zinc-800 text-white px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >

            <PackageSearch size={20} />

            Track Order

          </Link>

          {/* CONTACT */}
          <Link href="#contact">

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">

              Contact Us

            </button>

          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden bg-slate-100 p-2 rounded-xl"
          onClick={() =>
            setOpen(!open)
          }
        >

          {open ? (
            <X size={26} />
          ) : (
            <Menu size={26} />
          )}

        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 space-y-5 shadow-xl">

          <Link
            href="/"
            onClick={() =>
              setOpen(false)
            }
            className="block font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="#services"
            onClick={() =>
              setOpen(false)
            }
            className="block font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            Services
          </Link>

          <Link
            href="/services/dsc"
            onClick={() =>
              setOpen(false)
            }
            className="block font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            DSC
          </Link>

          {/* TRACK ORDER */}
          <Link
            href="/track"
            onClick={() =>
              setOpen(false)
            }
            className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-2xl font-bold shadow-lg"
          >

            <PackageSearch size={20} />

            Track Order

          </Link>

          {/* CONTACT */}
          <Link
            href="#contact"
            onClick={() =>
              setOpen(false)
            }
          >

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl font-bold shadow-lg">

              Contact Us

            </button>

          </Link>

        </div>
      )}

    </nav>
  );
}