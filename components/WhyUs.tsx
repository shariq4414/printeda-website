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
            The Printeda Advantage
          </h2>

          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-6">
            100% Under One Roof Printing Solution
          </p>

          <p className="text-slate-600 max-w-xl mx-auto mb-16">
            From single custom orders to bulk business printing — we deliver
            unmatched quality, speed, and reliability trusted by 10,000+ clients.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1 (Highlighted) */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-white rounded-3xl border border-blue-500 
            shadow-lg scale-105 hover:shadow-2xl transition-all duration-300">

              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 inline-block">
                Most Important
              </span>

              <Layers className="mx-auto text-blue-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                Under One Roof
              </h3>

              <p className="text-sm text-slate-600">
                No need to visit multiple shops — everything available in one place.
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
                Modern Technology
              </h3>

              <p className="text-sm text-slate-600">
                Advanced machines for sharp, premium & consistent output.
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
                Trusted Since 2009
              </h3>

              <p className="text-sm text-slate-600">
                15+ years experience with 1000+ satisfied customers.
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
                Fast Delivery
              </h3>

              <p className="text-sm text-slate-600">
                urgent delivery available for business needs.
              </p>

            </div>
          </Reveal>

        </div>

        {/* 🔥 CTA (VERY IMPORTANT) */}
        <div className="mt-16">

          <p className="text-slate-600 mb-4">
            Ready to start your printing project?
          </p>

          <a
            href="https://wa.me/919719847661"
            target="_blank"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
          >
            Start Your Order <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}