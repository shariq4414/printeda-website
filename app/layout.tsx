import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCallButton from "@/components/FloatingCallButton";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Best Printing Shop & DSC Provider in Bulandshahr | Printeda",

  description:
    "Printeda (formerly Anwar Computer) is a trusted printing shop & Class 3 DSC provider in Bulandshahr offering flex printing, banners, visiting cards, stickers, T-shirts, branding, custom bottles & digital signature solutions since 2009.",

  keywords: [
    "Best printing shop in Bulandshahr",
    "Printing services Bulandshahr",
    "Flex banner printing Bulandshahr",
    "Class 3 DSC provider Bulandshahr",
    "Digital Signature Certificate Bulandshahr",
    "Visiting card printing Bulandshahr",
    "Sticker printing Bulandshahr",
    "Custom bottle printing Bulandshahr",
    "Graphic designing Bulandshahr",
    "T-shirt printing Bulandshahr",
    "Flex printing Kala Aam",
    "Printing shop Kala Aam",
    "Anwar Computer",
    "Printeda",
  ],

  openGraph: {
    title:
      "Best Printing Shop & DSC Provider in Bulandshahr | Printeda",

    description:
      "Printeda (formerly Anwar Computer) is a trusted printing shop & Class 3 DSC provider in Bulandshahr offering flex printing, banners, visiting cards, stickers, custom T-shirts, branding and digital signature solutions since 2009. Trusted by 10,000+ clients across Bulandshahr & nearby areas.",

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
    google: "f4675ceb6ffd382f",
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