"use client";

import { ShieldCheck, Zap, Clock, Layers, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Why Choose Printeda?
          </h2>

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-6">
            Complete Printing & Branding Under One Roof
          </p>

          <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-base md:text-lg">
            Whether it's a single custom print or bulk business order — we deliver
            fast, reliable, and high-quality results trusted by businesses and individuals across Bulandshahr.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-white rounded-3xl border border-blue-500 
            shadow-lg scale-105 hover:shadow-2xl transition-all duration-300">

              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                Most Popular
              </span>

              <Layers className="mx-auto text-blue-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                All-in-One Solution
              </h3>

              <p className="text-sm text-slate-600">
                From DSC to banners, T-shirts to branding — everything in one place.
              </p>

            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-white rounded-3xl border 
            shadow-sm hover:shadow-2xl hover:border-purple-300 
            transition-all duration-300 hover:-translate-y-2">

              <Zap className="mx-auto text-purple-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                Modern Machines
              </h3>

              <p className="text-sm text-slate-600">
                Latest printing technology for sharp, premium, and consistent quality.
              </p>

            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.3}>
            <div className="p-8 bg-white rounded-3xl border 
            shadow-sm hover:shadow-2xl hover:border-green-300 
            transition-all duration-300 hover:-translate-y-2">

              <ShieldCheck className="mx-auto text-green-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                15+ Years Experience
              </h3>

              <p className="text-sm text-slate-600">
                Serving Bulandshahr since 2009 with consistent quality and trusted service.
              </p>

            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal delay={0.4}>
            <div className="p-8 bg-white rounded-3xl border 
            shadow-sm hover:shadow-2xl hover:border-orange-300 
            transition-all duration-300 hover:-translate-y-2">

              <Clock className="mx-auto text-orange-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                Fast Turnaround
              </h3>

              <p className="text-sm text-slate-600">
                Same-day and urgent delivery options available for business needs.
              </p>

            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <div className="mt-16">

          <p className="text-slate-600 mb-4 text-base">
            Need printing urgently? Let’s get started today.
          </p>

          <a
            href="https://wa.me/919719847661"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
          >
            Chat on WhatsApp <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}