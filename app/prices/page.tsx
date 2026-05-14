"use client";

import {
  IndianRupee,
  Printer,
  BadgeIndianRupee,
} from "lucide-react";

export default function PricesPage() {

  const products = [

    {
      name: "Business Card",
      price: "₹250",
      qty: "100 pcs",
      desc: "Premium matte business cards",
    },

    {
      name: "PVC Card",
      price: "₹80",
      qty: "1 card",
      desc: "Waterproof PVC ID card",
    },

    {
      name: "Flex Banner",
      price: "₹25/sqft",
      qty: "Custom",
      desc: "High quality flex printing",
    },

    {
      name: "Pamphlet",
      price: "₹500",
      qty: "1000 pcs",
      desc: "A5 color pamphlet",
    },

    {
      name: "Poster",
      price: "₹120",
      qty: "1 poster",
      desc: "Glossy poster print",
    },

    {
      name: "Sticker",
      price: "₹150",
      qty: "50 pcs",
      desc: "Waterproof custom stickers",
    },

    {
      name: "Wedding Card",
      price: "₹35/card",
      qty: "100 pcs",
      desc: "Premium wedding invitation",
    },

    {
      name: "Bill Book",
      price: "₹450",
      qty: "1 book",
      desc: "Duplicate bill book printing",
    },

  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 p-8">

      {/* HEADER */}
      <div className="mb-10">

        <h1 className="text-5xl font-black flex items-center gap-4">

          <BadgeIndianRupee
            size={50}
            className="text-green-600"
          />

          Price List

        </h1>

        <p className="text-zinc-500 mt-3 text-lg">
          Updated Printing Rates
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {products.map(
          (
            item,
            index
          ) => (

            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-zinc-200 hover:-translate-y-1 transition-all"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-5">

                <div className="bg-green-100 p-4 rounded-2xl">

                  <Printer
                    className="text-green-600"
                  />

                </div>

                <div className="bg-black text-white px-4 py-2 rounded-2xl font-bold">

                  {item.qty}

                </div>

              </div>

              {/* NAME */}
              <h2 className="text-3xl font-black">

                {item.name}

              </h2>

              {/* DESC */}
              <p className="text-zinc-500 mt-3">

                {item.desc}

              </p>

              {/* PRICE */}
              <div className="mt-6 flex items-center gap-3">

                <IndianRupee
                  className="text-green-600"
                />

                <span className="text-4xl font-black text-green-600">

                  {item.price}

                </span>

              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}