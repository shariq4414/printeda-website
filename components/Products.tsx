"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Visiting Cards",
    price: "Starting ₹199",
    img: "/gallery/card.jpg",
    tag: "Best Seller",
  },
  {
    title: "Flex Banners",
    price: "Starting ₹20/sqft",
    img: "/gallery/flex.jpg",
    tag: "Hot Deal",
  },
  {
    title: "Rubber Stamp (Mohr)",
    price: "Starting ₹299",
    img: "/gallery/stamp.jpg",
    tag: "High Demand",
  },
  {
    title: "Custom T-Shirts",
    price: "Starting ₹399",
    img: "/gallery/tshirt.jpg",
    tag: "Popular",
  },
  {
    title: "Stickers",
    price: "Starting ₹99",
    img: "/gallery/stickers.jpg",
    tag: "Budget",
  },
  {
    title: "ID Cards",
    price: "Starting ₹120",
    img: "/gallery/idcards.jpg",
    tag: "Bulk Orders",
  },
  {
    title: "Trophies",
    price: "Starting ₹99",
    img: "/gallery/tropy.jpg",
    tag: "Premium",
  },
  {
    title: "Mugs Printing",
    price: "Starting ₹249",
    img: "/gallery/mug.jpg",
    tag: "Gift Item",
  },
];

export default function Products() {

  // 🔥 scroll function
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-3">
            Most Ordered Products
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Popular Products
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Affordable pricing with premium quality — trusted by 10,000+ customers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {products.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden 
              shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Tag */}
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {item.tag}
                </span>

                {/* 🔥 CLICKABLE OVERLAY */}
                <div
                  onClick={scrollToContact}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                  transition flex items-center justify-center cursor-pointer z-10"
                >
                  <span className="text-white font-semibold flex items-center gap-2">
                    Quick Order <ArrowRight size={16} />
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="font-bold text-lg text-slate-900 mb-1">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-bold text-sm mb-2">
                  {item.price}
                </p>

                <p className="text-xs text-slate-500 mb-4">
                  Limited time offer • Fast delivery available
                </p>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/919719847661?text=Hi%2C%20I%20want%20to%20order%20${item.title}`}
                  target="_blank"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-semibold transition"
                >
                  Order Now
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">
            Need bulk order or custom design?
          </p>

          <a
            href="https://wa.me/919719847661"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition hover:scale-105"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}