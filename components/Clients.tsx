"use client";

import Reveal from "@/components/Reveal";

export default function Clients() {
  const clients = [
    "Schools & Colleges",
    "Retail Businesses",
    "Event Organizers",
    "Contractors",
    "Hospitals",
    "Local Brands",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <Reveal>
          <p className="text-blue-600 font-semibold mb-3">
            Trusted Across Bulandshahr
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Trusted by 10,000+ Clients
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto mb-12">
            From small businesses to large organizations — our work is trusted
            across multiple industries since 2009.
          </p>
        </Reveal>

        {/* 🔥 CLIENT SEGMENTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">

          {clients.map((client, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div
                className="bg-slate-50 border border-slate-100 rounded-2xl py-6 px-4
                hover:bg-white hover:shadow-xl hover:border-blue-200
                transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-sm font-semibold text-slate-700">
                  {client}
                </p>
              </div>
            </Reveal>
          ))}

        </div>

        {/* 🔥 STRONG TRUST BLOCK */}
        <div className="bg-slate-50 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 leading-relaxed">
            ⭐ Consistently delivering high-quality printing services for over{" "}
            <span className="font-bold text-blue-600">15+ years</span> with{" "}
            <span className="font-bold text-blue-600">10,000+ satisfied customers</span>.
          </p>
        </div>

        {/* 🔥 CTA */}
        <div>
          <p className="text-slate-600 mb-4">
            Join hundreds of businesses already working with Printeda
          </p>

          <a
            href="https://wa.me/919719847661"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </section>
  );
}