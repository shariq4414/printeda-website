import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Best Printing Shop in Bulandshahr | Class 3 DSC Provider in Kala Aam | Printeda",

  description:
    "Printeda (formerly Anwar Computer) is the best printing shop in Bulandshahr offering flex banners, visiting cards, stickers, T-shirts & Class 3 DSC services in Kala Aam. Trusted since 2009 with 10,000+ clients.",

  keywords: [
    "Best printing shop in Bulandshahr",
    "Printing services Bulandshahr",
    "Flex banner printing Kala Aam",
    "Class 3 DSC provider Kala Aam",
    "Digital Signature Certificate Bulandshahr",
    "Visiting card printing Bulandshahr",
    "Custom T-shirt printing Bulandshahr",
    "Sticker printing Bulandshahr",
    "Custom bottle printing Bulandshahr",
    "Graphic designing Bulandshahr",
    "Anwar Computer",
    "Printeda",
  ],

  openGraph: {
    title:
      "Best Printing Shop in Bulandshahr | Printeda",

    description:
      "Flex printing, banners, DSC & complete branding solutions in Kala Aam. Trusted since 2009.",

    url: "https://printeda.in",

    siteName: "Printeda",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "googlef4675ceb6ffd382f.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        
        <div className="flex-1 pb-20">
          {children}
        </div>

        {/* Floating Buttons */}
        <FloatingCallButton />
        <WhatsAppButton />

      </body>
    </html>
  );
}