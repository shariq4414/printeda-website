"use client";

import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
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

          {/* 🔥 Trust Line */}
          <p className="text-green-600 font-semibold mb-2">
            ⭐ Trusted by 10,000+ Customers in Bulandshahr
          </p>

          {/* Subheadline */}
          <p className="text-blue-600 font-semibold mb-4">
            Fast • Affordable • Same-Day Delivery Available
          </p>

          {/* Description */}
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            From Digital Signatures to T-shirts, Banners, Stickers & Branding —
            everything in one place. No need to visit multiple shops.
          </p>

          {/* 🔥 CALL + WHATSAPP BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* Call Button */}
            <a href="tel:+919719847661">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                Call Now <Phone size={18} />
              </button>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919719847661?text=Hi%20Printeda%2C%20I%20want%20printing%20service"
              target="_blank"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition">
                WhatsApp Now <MessageCircle size={18} />
              </button>
            </a>

            {/* DSC Button */}
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
            <span>✔ Same-Day Service Available</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[400px] md:h-[500px]">

          <Image
            src="/hero-printing.jpg"
            alt="Printing Services"
            fill
            className="object-cover rounded-3xl shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow-md text-sm font-semibold">
            ⭐ Trusted by 10,000+ Clients
          </div>

        </div>

      </div>
    </section>
  );
}