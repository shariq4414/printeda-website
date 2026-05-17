"use client";

import {
  Printer,
  ShieldCheck,
  Shirt,
  Sticker,
  Layers,
  IdCard,
  Map,
  Trophy,
  Zap,
  ArrowRight,
  Stamp
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Commercial Printing",
    description:
      "High-quality Flex, Banners, Posters & Offset printing for business branding.",
    icon: <Printer className="w-8 h-8 text-blue-600" />,
    features: ["Flex & Vinyl", "Visiting Cards", "Brochures"],
    link: "#contact",
  },
  {
    title: "Digital Signatures (DSC)",
    description:
      "Fast & secure Class 3 DSC for Income Tax, GST, and e-Tendering.",
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    features: ["Class 3 DSC", "DGFT", "e-Tendering"],
    link: "/services/dsc",
    highlight: true, // ⭐ MOST IMPORTANT
  },
  {
    title: "Custom T-Shirts & Mugs",
    description:
      "Personalized T-shirts, mugs & gifts for branding, events & gifting.",
    icon: <Shirt className="w-8 h-8 text-pink-600" />,
    features: ["Custom Prints", "Bulk Orders", "Premium Quality"],
    link: "#contact",
  },
  {
    title: "Advanced Sticker Cutting",
    description:
      "Precision die-cut stickers for branding, packaging & promotion.",
    icon: <Sticker className="w-8 h-8 text-orange-500" />,
    features: ["Die-Cut", "Gloss & Matte", "Custom Shapes"],
    link: "#contact",
  },
  {
    title: "Premium ID Cards",
    description:
      "High-quality PVC ID cards for schools, offices & events.",
    icon: <IdCard className="w-8 h-8 text-indigo-600" />,
    features: ["PVC Cards", "Lanyards", "Bulk Printing"],
    link: "#contact",
  },
  {
    title: "Map Lamination",
    description:
      "Durable lamination for maps, charts & important documents.",
    icon: <Map className="w-8 h-8 text-teal-600" />,
    features: ["Large Size", "Waterproof", "Long-lasting"],
    link: "#contact",
  },
  {
    title: "Trophies & Medals",
    description:
      "Customized trophies & medals for schools, events & corporate awards.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    features: ["Custom Design", "Bulk Orders", "Premium Finish"],
    link: "#contact",
  },
  {
    title: "Rubber Stamps (Mohr)",
    description:
    "Custom rubber stamps for offices, shops, and official use with clean and durable impressions.",
    icon: <Stamp className="w-8 h-8 text-red-600" />,
    features: ["Round & Rectangle", "Self-Inking", "Fast Delivery"],
    link: "#contact",
}
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-3">
            Everything You Need — All Under One Roof
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Our Services
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            From Digital Signatures to custom branding, we provide complete printing
            solutions for businesses, events, and individuals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <a href={service.link}>

                <div
                  className={`p-8 border rounded-3xl bg-white cursor-pointer
                  transition-all duration-300 group hover:-translate-y-2
                  hover:shadow-2xl hover:shadow-blue-100

                  ${
                    service.highlight
                      ? "border-blue-500 shadow-lg scale-105"
                      : "border-slate-100 hover:border-blue-300"
                  }
                `}
                >

                  {/* ⭐ Highlight Badge */}
                  {service.highlight && (
                    <span className="inline-block text-xs bg-blue-600 text-white px-3 py-1 rounded-full mb-3 font-bold">
                    🔥 Most Popular
                    </span>
                  )}

                  {/* Icon */}
                  <div className="mb-5 inline-block p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:scale-110 transition">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-500"
                      >
                        <Zap size={12} className="text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA inside card */}
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    Get Started <ArrowRight size={14} />
                  </div>

                </div>

              </a>
            </Reveal>
          ))}
        </div>

        {/* 🔥 Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-4">
            Not sure what you need?
          </p>

          <a
            href="https://wa.me/917599982088"
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