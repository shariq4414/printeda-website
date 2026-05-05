"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const reviews = [
  {
    name: "Rahul Sharma",
    company: "School Manager",
    text: "School sports day ke liye wooden trophies aur medals ka bulk order diya tha. Finish ekdum premium thi aur delivery time par aayi. Great work by the team.",
  },
  {
    name: "Neha Aggarwal",
    company: "Tax Consultant",
    text: "Main pichle 5 saal se Anwar Computer se judi hui hoon aur inki service bhi utni hi fast hai. Mera Class 3 DSC token inhone same-day ready kar diya. Best in Kala Aam!",
  },
  {
    name: "Amit",
    company: "Event Organizer",
    text: "Humare staff ke ID cards aur flex banners ki quality ekdum top-notch thi. Printeda ka 'Under One Roof' concept waqai time bachata hai. Highly recommended.",
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
              What our long-term clients say about our work and service quality.
            </p>

            {/* TRUST STATS */}
            <div className="flex justify-center gap-8 text-sm text-blue-100">
              <span>⭐ 4.9 Rating</span>
              <span>👥 10,000+ Clients</span>
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
                <p className="mb-6 italic text-white/90 leading-relaxed">
                  "{review.text}"
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