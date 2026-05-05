"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const reviews = [
  {
    name: "Rahul Sharma",
    company: "School Manager",
    text: "School sports day ke liye trophies aur banners ka bulk order diya tha. Sab kaam time par deliver hua aur quality bhi excellent thi. Team ka support bhi bahut achha tha.",
  },
  {
    name: "Neha Aggarwal",
    company: "Tax Consultant",
    text: "Main pichle 5 saal se Anwar Computer se judi hui hoon. DSC aur printing dono services fast aur reliable hain. Same-day DSC mil gaya, highly professional service.",
  },
  {
    name: "Amit Verma",
    company: "Event Organizer",
    text: "Event ke liye T-shirts, stickers aur banners print karwaye. Design se delivery tak sab smooth raha. 'Under One Roof' service concept sach me time bachata hai.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900 text-white border-t border-blue-500">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Trusted Since 2009
            </h2>

            <p className="text-blue-200 max-w-xl mx-auto mb-6">
              Real feedback from our customers across Bulandshahr who trust us for quality and fast service.
            </p>

            {/* TRUST STATS */}
            <div className="flex justify-center flex-wrap gap-6 text-sm text-blue-100 font-medium">
              <span>⭐ 4.9 Rating</span>
              <span>👥 10,000+ Clients Served</span>
              <span>📍 Bulandshahr</span>
            </div>

          </div>
        </Reveal>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <Reveal key={index} delay={index * 0.15}>

              <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md 
              hover:bg-white/20 hover:-translate-y-2 hover:shadow-2xl 
              transition-all duration-300 shadow-lg">

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="mb-6 italic text-white/90 leading-relaxed text-[15px]">
                  “{review.text}”
                </p>

                {/* Divider */}
                <div className="h-px bg-white/20 mb-4"></div>

                {/* User */}
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <p className="text-sm text-blue-200">{review.company}</p>
                </div>

              </div>

            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}