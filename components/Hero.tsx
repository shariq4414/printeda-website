"use client";

import { Printer, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase mb-6">
            <span className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></span>
            Since 2009 • Formerly Anwar Computer
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 leading-tight">
            Complete Printing Solution <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-blue-600 font-semibold mb-4">
            Your Complete Printing & Branding Solution
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            No need to visit multiple shops — from Digital Signatures to T-shirts,
            Banners, Stickers & Branding — everything in one place with fast delivery.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                Start Printing <Printer size={18} />
              </button>
            </a>

            <a href="/services/dsc">
              <button className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-800 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition">
                Apply for DSC <ShieldCheck size={18} />
              </button>
            </a>
          </div>

          {/* Trust Strip */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500 font-medium">
            <span>✔ 15+ Years Experience</span>
            <span>✔ 10,000+ Clients Served</span>
            <span>✔ Trusted Since 2009</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] md:h-[500px]">

          <Image
            src="/hero-printing.jpg"  // 👉 put real image in public folder
            alt="Printing Services"
            fill
            className="object-cover rounded-3xl shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-slate px-4 py-2 rounded-xl shadow-md text-sm font-semibold">
            ⭐ Trusted by 10,000+ Clients
          </div>

        </div>

      </div>
    </section>
  );
}