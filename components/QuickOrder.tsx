"use client";

import { Send, IndianRupee, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function QuickOrder() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <Reveal>
          <p className="text-blue-600 font-semibold mb-3">
            Fast & Easy Ordering
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Order in 3 Simple Steps
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto mb-16">
            No complicated process — just send your design and get it printed quickly.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Step 1 */}
          <Reveal delay={0.1}>
            <div className="p-8 bg-white rounded-3xl border shadow-sm 
            hover:shadow-xl hover:border-blue-300 transition hover:-translate-y-2">

              <Send className="mx-auto text-blue-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                1. Send Your File
              </h3>

              <p className="text-sm text-slate-600">
                Share your design or requirement on WhatsApp.
              </p>

            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal delay={0.2}>
            <div className="p-8 bg-white rounded-3xl border shadow-sm 
            hover:shadow-xl hover:border-green-300 transition hover:-translate-y-2">

              <IndianRupee className="mx-auto text-green-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                2. Get Instant Price
              </h3>

              <p className="text-sm text-slate-600">
                Receive a quick quote within minutes.
              </p>

            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal delay={0.3}>
            <div className="p-8 bg-white rounded-3xl border shadow-sm 
            hover:shadow-xl hover:border-purple-300 transition hover:-translate-y-2">

              <Truck className="mx-auto text-purple-600 mb-4" size={34} />

              <h3 className="font-bold text-lg mb-2">
                3. Get Your Order
              </h3>

              <p className="text-sm text-slate-600">
                Same-day or fast delivery available.
              </p>

            </div>
          </Reveal>

        </div>

        {/* CTA */}
        <div className="mt-14">

          {/* 🔥 Urgency line */}
          <p className="text-sm text-slate-500 mb-4">
            ⚡ Most orders completed within 24 hours
          </p>

          <a
            href="https://wa.me/919719847661?text=Hi%2C%20I%20want%20to%20place%20a%20printing%20order"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition hover:scale-105"
          >
            📲 Send Your Design on WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}