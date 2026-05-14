"use client";

import { useState } from "react";

import {
  CheckCheck,
  PackageCheck,
  LoaderCircle,
  Truck,
} from "lucide-react";

export default function TrackPage() {

  const [orderId, setOrderId] =
    useState("PRT-395598");

  // DEMO ORDER
  const order = {
    orderId: "PRT-395598",
    customerName: "shariq",
    product: "Business Card",
    amount: 800,
    remaining: 400,
    status: "Processing",
  };

  // TRACK STEPS
  const steps = [
    {
      name: "Order Received",
      icon: PackageCheck,
    },

    {
      name: "Processing",
      icon: LoaderCircle,
    },

    {
      name: "Ready",
      icon: Truck,
    },

    {
      name: "Completed",
      icon: CheckCheck,
    },
  ];

  const currentStep =
    steps.findIndex(
      (step) =>
        step.name === order.status
    );

  return (

    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 flex items-center justify-center p-5">

      {/* MAIN CARD */}
      <div className="w-full max-w-xl">

        <div className="bg-white rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-zinc-200">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center px-6 py-10">

            <h1 className="text-4xl font-black tracking-tight">
              Track You Order
            </h1>

            <p className="mt-3 text-white/80">
              Live Order Tracking
            </p>

          </div>

          {/* SEARCH */}
          <div className="p-6 border-b border-zinc-200">

            <div className="space-y-4">

              <input
                type="text"
                value={orderId}
                onChange={(e) =>
                  setOrderId(
                    e.target.value
                  )
                }
                placeholder="Enter Order ID"
                className="w-full border-2 border-zinc-200 rounded-2xl px-5 py-4 outline-none focus:border-green-500 text-lg"
              />

              <button className="w-full bg-black hover:scale-[1.02] transition-all text-white py-4 rounded-2xl font-bold shadow-xl">

                Track Order

              </button>

            </div>

          </div>

          {/* ORDER INFO */}
          <div className="bg-green-50 p-6 border-b border-green-100">

            <div className="space-y-5">

              <div>

                <p className="text-zinc-500 text-sm font-semibold">
                  ORDER ID
                </p>

                <h2 className="text-2xl font-black mt-1">
                  {order.orderId}
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-white rounded-2xl p-4 border border-zinc-200">

                  <p className="text-zinc-500 text-sm">
                    Customer
                  </p>

                  <h3 className="font-bold text-lg mt-1">
                    {order.customerName}
                  </h3>

                </div>

                <div className="bg-white rounded-2xl p-4 border border-zinc-200">

                  <p className="text-zinc-500 text-sm">
                    Product
                  </p>

                  <h3 className="font-bold text-lg mt-1">
                    {order.product}
                  </h3>

                </div>

                <div className="bg-white rounded-2xl p-4 border border-zinc-200">

                  <p className="text-zinc-500 text-sm">
                    Amount
                  </p>

                  <h3 className="font-black text-green-600 text-2xl mt-1">
                    ₹ {order.amount}
                  </h3>

                </div>

                <div className="bg-white rounded-2xl p-4 border border-zinc-200">

                  <p className="text-zinc-500 text-sm">
                    Remaining
                  </p>

                  <h3 className="font-black text-red-500 text-2xl mt-1">
                    ₹ {order.remaining}
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* TRACKING */}
          <div className="p-8">

            <h2 className="text-2xl font-black mb-8">
              Order Progress 🚀
            </h2>

            <div className="relative">

              {/* LINE */}
              <div className="absolute left-7 top-0 w-1 h-full bg-zinc-200 rounded-full" />

              {/* ACTIVE LINE */}
              <div
                className="absolute left-7 top-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full transition-all duration-700"
                style={{
                  height: `${
                    (currentStep /
                      (steps.length - 1)) *
                    100
                  }%`,
                }}
              />

              {/* STEPS */}
              <div className="space-y-10">

                {steps.map(
                  (
                    step,
                    index
                  ) => {

                    const Icon =
                      step.icon;

                    const completed =
                      index <=
                      currentStep;

                    return (

                      <div
                        key={index}
                        className="relative flex items-center gap-5"
                      >

                        {/* ICON */}
                        <div
                          className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center border-4 shadow-xl transition-all duration-500 ${
                            completed
                              ? "bg-green-500 border-green-200 text-white"
                              : "bg-white border-zinc-300 text-zinc-400"
                          }`}
                        >

                          <Icon size={24} />

                        </div>

                        {/* TEXT */}
                        <div>

                          <h3
                            className={`text-xl font-black ${
                              completed
                                ? "text-black"
                                : "text-zinc-400"
                            }`}
                          >

                            {step.name}

                          </h3>

                          <p
                            className={`mt-1 ${
                              completed
                                ? "text-green-600"
                                : "text-zinc-400"
                            }`}
                          >

                            {completed
                              ? "Completed"
                              : "Pending"}

                          </p>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}