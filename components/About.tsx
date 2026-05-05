"use client";

import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <Reveal>
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 leading-tight">
              Modern Printing. <br className="hidden md:block" />
              <span className="text-blue-600">
                Rooted in Trust Since 2009
              </span>
            </h2>

            {/* BRAND LINE */}
            <p className="text-blue-600 font-semibold mb-4 text-base md:text-lg">
              More than a print shop — your complete branding partner.
            </p>

            {/* CORE MESSAGE */}
            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
              From Digital Signatures (DSC) to banners, T-shirts, stickers and complete branding —
              everything is available under one roof with premium quality and fast delivery.
            </p>

            {/* STORY */}
            <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed text-base md:text-lg">
              Printeda is the modern evolution of Anwar Computer — built on 15+ years of experience,
              upgraded with modern technology to deliver faster, better, and more reliable results.
            </p>

            {/* TRUST LINE */}
            <p className="text-slate-700 max-w-3xl mx-auto mt-4 leading-relaxed text-base md:text-lg font-medium">
              Proudly serving Bulandshahr since 2009 — trusted by 10,000+ clients for consistent quality and service.
            </p>

          </div>
        </Reveal>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">

          <Reveal delay={0.1}>
            <div className="p-4">
              <h3 className="text-3xl font-black text-blue-600">15+</h3>
              <p className="text-sm text-slate-500">Years Experience</p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-4">
              <h3 className="text-3xl font-black text-blue-600">10,000+</h3>
              <p className="text-sm text-slate-500">Clients Served</p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="p-4">
              <h3 className="text-3xl font-black text-blue-600">Same Day</h3>
              <p className="text-sm text-slate-500">Fast Delivery</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="p-4">
              <h3 className="text-3xl font-black text-blue-600">100%</h3>
              <p className="text-sm text-slate-500">Quality Focus</p>
            </div>
          </Reveal>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* ABOUT */}
          <Reveal delay={0.1}>
            <div className="p-8 border border-blue-400 rounded-3xl bg-white 
            shadow-lg scale-105 hover:shadow-2xl transition-all duration-300">

              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                Who We Are
              </span>

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                About Us
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Printeda is the upgraded version of Anwar Computer, offering
                complete printing and branding services under one roof with
                modern machines and trusted expertise.
              </p>

            </div>
          </Reveal>

          {/* VISION */}
          <Reveal delay={0.2}>
            <div className="p-8 border border-slate-100 rounded-3xl bg-white 
            hover:shadow-2xl hover:border-purple-300 transition-all duration-300 hover:-translate-y-2">

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Our Vision
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                To become the most trusted one-stop branding hub where individuals
                and businesses can get all printing solutions easily and quickly.
              </p>

            </div>
          </Reveal>

          {/* MISSION */}
          <Reveal delay={0.3}>
            <div className="p-8 border border-slate-100 rounded-3xl bg-white 
            hover:shadow-2xl hover:border-green-300 transition-all duration-300 hover:-translate-y-2">

              <h3 className="font-bold text-xl mb-3 text-slate-900">
                Our Mission
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                Deliver premium quality printing with fast turnaround, modern technology,
                and a smooth, hassle-free customer experience every time.
              </p>

            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">

          <p className="text-slate-600 mb-4 text-base">
            Ready to start your printing project?
          </p>

          <a
            href="https://wa.me/919719847661"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}