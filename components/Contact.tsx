"use client";

import { useState } from "react";
import { Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [selectedService, setSelectedService] = useState("");
  const [customService, setCustomService] = useState("");

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Let’s Build Your <br />
              <span className="text-blue-400">Brand Together</span>
            </h2>

            <p className="text-green-400 font-semibold mb-3">
              ⚡ Fast Response • Same-Day Work Available
            </p>

            <p className="text-slate-400 mb-8 text-lg">
              10,000+ customers trust Printeda for fast, reliable & premium printing.
            </p>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917599982088?text=Hi%20Printeda%2C%20I%20want%20to%20start%20a%20printing%20project"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-semibold mb-10 transition"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            {/* INFO */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us</p>
                  <a
                    href="tel:+917599982088"
                    className="font-bold hover:text-blue-400 transition"
                  >
                    +91 7599982088
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-bold">Kala Aam, Bulandshahr</p>
                </div>
              </div>

            </div>

            {/* MAP (CLICKABLE) */}
            <div className="mt-10 rounded-xl overflow-hidden relative">

              <a
                href="https://maps.google.com?q=Kala+Aam+Bulandshahr"
                target="_blank"
                className="absolute inset-0 z-10"
              />

              <iframe
                src="https://www.google.com/maps?q=Kala+Aam+Bulandshahr&output=embed"
                width="100%"
                height="200"
                loading="lazy"
                className="border-0 w-full"
              ></iframe>

            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-8 rounded-3xl text-slate-900 shadow-2xl">

            {success ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-600 mb-3">
                  ✅ Inquiry Sent Successfully
                </h3>
                <p className="text-slate-600">
                  We’ll contact you shortly.
                </p>

                <a
                  href="https://wa.me/917599982088"
                  target="_blank"
                  className="inline-block mt-5 bg-green-500 text-white px-6 py-3 rounded-xl"
                >
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);

                  const formData = new FormData(e.currentTarget);

                  const finalService =
                    selectedService === "Other"
                      ? customService
                      : selectedService;

                  formData.set("service", finalService);

                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                  });

                  const data = await res.json();

                  if (data.success) {
                    setSuccess(true);

                    //const name = formData.get("name");
                    //const phone = formData.get("phone");

                    //const message = `Hi Printeda,
//Name: ${name}
//Phone: ${phone}
//Service: ${finalService}`;

  //                  window.open(
    //                  `https://wa.me/917599982088?text=${encodeURIComponent(message)}`,
      //                "_blank"
        //            );
                 }

                  setLoading(false);
                }}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="ea80bb76-99c7-4936-9ce6-08df99bbd9a1"
                />

                {/* 🔥 URGENCY */}
                <p className="text-xs text-orange-500 text-center">
                  ⚡ 90% inquiries answered within 10 minutes
                </p>

                {/* NAME */}
                <div>
                  <label className="text-sm font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-sm font-semibold">Select Service</label>

                  <select
                    required
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Choose...</option>
                    <option value="Visiting Cards">Visiting Cards</option>
                    <option value="Flex Banner">Flex Banner</option>
                    <option value="DSC">Class 3 DSC</option>
                    <option value="T-Shirts">Custom T-Shirts</option>
                    <option value="Stickers">Stickers</option>
                    <option value="Rubber Stamp">Rubber Stamp (Mohr)</option>
                    <option value="ID Cards">ID Cards</option>
                    <option value="Trophies">Trophies</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* CUSTOM */}
                {selectedService === "Other" && (
                  <div>
                    <label className="text-sm font-semibold">
                      Your Requirement
                    </label>
                    <input
                      type="text"
                      placeholder="Describe your requirement..."
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                      required
                      className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                )}

                {/* PHONE */}
                <div>
                  <label className="text-sm font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl flex items-center justify-center gap-2 transition font-semibold"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                  <Send size={18} />
                </button>

                {/* TRUST */}
                <p className="text-xs text-slate-500 text-center">
                  🔒 Your details are safe • ⚡ Response within 10–15 minutes
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}