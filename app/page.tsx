import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import QuickOrder from "@/components/QuickOrder";
//import Gallery from "@/components/Gallery";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO (ONLY THIS — NO DUPLICATE) */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* PRODUCTS */}
      <Products />

      {/* WHY US */}
      <WhyUs />

      {/* ABOUT */}
      <About />

      {/* QUICK ORDER */}
      <QuickOrder />

      {/* GALLERY */}
      

      {/* CLIENTS */}
      <Clients />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </main>
  );
} 