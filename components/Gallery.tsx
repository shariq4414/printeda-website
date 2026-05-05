"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { X } from "lucide-react";
import { url } from "inspector";

const projects = [
  {
    id: 1,
    category: "Flex Banner",
    title: "Event Flex Banner",
    img: "/gallery/banner1.jpg",
    tag: "Popular",
  },
  {
    id: 2,
    category: "Visiting Cards",
    title: "Premium Matte Cards",
    img: "/gallery/cards1.jpg",
    tag: "Premium",
  },
  {
    id: 3,
    category: "Vinyl Branding",
    title: "Shop Branding",
    img: "/gallery/vinyl1.jpg",
    tag: "Trending",
  },
  {
    id: 4,
    category: "DSC Service",
    title: "Digital Signature Token",
    img: "/gallery/dsc1.jpg",
    tag: "Fast Service",
  },
  {
    id: 5,
    category: "Custom T-Shirt",
    title: "Printed T-Shirts",
    img: "/gallery/tshirt1.jpg",
    tag: "Custom",
  },
  {
    id: 6,
    category: "Stickers",
    title: "Die-Cut Stickers",
    img: "/gallery/sticker1.jpg",
    tag: "Sharp Cut",
  },
  {
    id: 7,
    category: "ID Cards",
    title: "PVC ID Cards",
    img: "/gallery/idcard1.jpg",
    tag: "Bulk",
  },
  {
    id: 8,
    category: "Trophies",
    title: "Custom Awards",
    img: "/gallery/trophy1.jpg",
    tag: "Premium",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
          <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-3">
            Real Work. Real Results.
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Our Recent Work
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            See the quality and precision that 1000+ customers trust in Bulandshahr.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>

              <div
                onClick={() => setActiveImage(project.img)}
                className="cursor-pointer group relative overflow-hidden rounded-3xl shadow-md 
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >

                <div className="aspect-square relative">

                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* 🔥 Dynamic Badge */}
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {project.tag}
                  </span>

                  {/* 🔥 Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-center px-4">

                    <p className="text-white text-xs mb-1 uppercase">
                      {project.category}
                    </p>

                    <h4 className="text-white font-bold mb-2">
                      {project.title}
                    </h4>

                    <span className="text-blue-400 text-sm font-semibold">
                      Click to View
                    </span>

                  </div>

                </div>

              </div>

            </Reveal>
          ))}

        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-500 mb-4">
            Want similar results for your business?
          </p>

          <a
            href="https://wa.me/919719847661?text=Hi%2C%20I%20want%20printing%20like%20your%20recent%20work"
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition hover:scale-105"
          >
            Start Your Project
          </a>
        </div>

      </div>

      {/* 🔥 IMAGE MODAL */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          <img
            src={activeImage}
            className="max-w-[90%] max-h-[80%] rounded-xl shadow-2xl"
          />

        </div>
      )}
    </section>
  );
}