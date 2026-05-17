export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* LEFT - BRAND */}
        <div>
          <h3 className="text-blue-500 font-bold text-xl mb-2">
            PRINTEDA
          </h3>

          <p className="text-slate-400 text-sm mb-4">
            Powered by Anwar Computer
          </p>

          <p className="text-slate-500 text-sm leading-relaxed">
            Complete printing, branding & DSC solutions under one roof
            with premium quality and fast delivery.
          </p>

          {/* Trust Line */}
          <p className="text-green-400 text-sm mt-4">
            ⚡ Same-day printing available
          </p>
        </div>

        {/* MIDDLE - CONTACT */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Contact Info
          </h4>

          <ul className="text-slate-400 text-sm space-y-3">

            <li className="flex items-center gap-2">
              📍 Kala Aam, Bulandshahr
            </li>

            <li className="flex items-center gap-2">
              📞
              <a
                href="tel:+917599982088"
                className="hover:text-white transition"
              >
                +91 7599982088
              </a>
            </li>

            <li className="flex items-center gap-2">
              💬
              <a
                href="https://wa.me/917599982088"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition"
              >
                Chat on WhatsApp
              </a>
            </li>

          </ul>
        </div>

        {/* RIGHT - SERVICES */}
        <div>
          <h4 className="font-semibold mb-4 text-white">
            Our Services
          </h4>

          <div className="grid grid-cols-2 gap-2 text-slate-400 text-sm">

            <a href="#services" className="hover:text-white transition">
              Flex & Banner
            </a>

            <a href="#services" className="hover:text-white transition">
              DSC Services
            </a>

            <a href="#services" className="hover:text-white transition">
              Visiting Cards
            </a>

            <a href="#services" className="hover:text-white transition">
              T-Shirts
            </a>

            <a href="#services" className="hover:text-white transition">
              Stickers
            </a>

            <a href="#services" className="hover:text-white transition">
              ID Cards
            </a>

            <a href="#services" className="hover:text-white transition">
              Rubber Stamps
            </a>

            <a href="#services" className="hover:text-white transition">
              Trophies
            </a>

          </div>
        </div>

      </div>

      {/* TRUST LINE */}
      <div className="text-center mt-10 text-slate-500 text-sm">
        Trusted by 10,000+ customers since 2009
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-800 mt-6 pt-6 text-center text-slate-600 text-xs space-y-2">

        <p>© 2026 Printeda. All rights reserved.</p>

        {/* DEV CREDIT */}
        <p>
          Designed & Developed by{" "}
          <span className="text-slate-400">
            Er. Mohd Shariq (CSE)
            <br />

            <a
              href="tel:+917983764414"
              className="text-slate-500 hover:text-white transition"
            >
              7983764414
            </a>
          </span>
        </p>

      </div>
    </footer>
  );
}