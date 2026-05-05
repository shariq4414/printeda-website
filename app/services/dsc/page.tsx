export default function DSCPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl text-slate-600 font-black mb-4">
            Digital Signature Certificates (DSC)
          </h1>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Get your Class 3 DSC issued quickly for GST, Income Tax, and e-Tendering. 
            Trusted service in Bulandshahr since 2009.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="bg-white p-8 rounded-3xl shadow-sm border">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                Why choose Printeda?
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>✅ Class 3 DSC for GST & e-Tender</li>
                <li>✅ Same-day approval (Paperless)</li>
                <li>✅ Token installation support</li>
                <li>✅ Trusted by 1000+ clients</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <h4 className="font-bold mb-2 text-slate-800">
                Documents Required:
              </h4>
              <p className="text-sm text-slate-600">
                PAN Card, Aadhaar Card, Mobile Number (for OTP verification)
              </p>
            </div>

          </div>

          {/* RIGHT SIDE CTA */}
          <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-bold mb-4">
                Apply for DSC Now
              </h3>

              <p className="mb-6 opacity-90 text-sm">
                Start your application in just 5 minutes. Fast approval & full support.
              </p>

              {/* Pricing Hint */}
              <p className="text-lg font-semibold mb-6">
                Starting from ₹1799*
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="https://wa.me/919719847661?text=Hi%20Printeda%2C%20I%20want%20to%20apply%20for%20DSC"
              target="_blank"
              className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-center hover:bg-slate-100 transition"
            >
              Apply via WhatsApp
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}