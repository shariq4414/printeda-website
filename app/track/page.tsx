"use client";

import { useState } from "react";

import {
  Search,
  PackageCheck,
  CheckCircle2,
} from "lucide-react";

export default function TrackPage() {

  const [orderId, setOrderId] =
    useState("PRT-395598");

  const order = {
    orderId: "PRT-395598",
    customerName: "shariq",
    product: "card",
    amount: 800,
    remaining: 400,
    status: "Order Received",
  };

  const steps = [
    "Order Received",
    "Designing",
    "Printing",
    "Packaging",
    "Ready",
    "Completed",
  ];

  const currentStep =
    steps.indexOf(order.status);

  return (

    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 flex items-center justify-center p-5">

      <div className="w-full max-w-3xl">

        {/* MAIN CARD */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_20px_80px_rgba(0,0,0,0.12)] rounded-[40px] p-8">

          {/* HEADER */}
          <div className="text-center mb-10">

            <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full text-sm font-bold mb-5 shadow-xl">

              <PackageCheck size={18} />

              LIVE TRACKING

            </div>

            <h1 className="text-5xl font-black tracking-tight">

              Track Your Order 📦

            </h1>

            <p className="text-zinc-500 mt-4 text-lg">

              Enter your order ID to check live order progress

            </p>

          </div>

          {/* SEARCH */}
          <div className="bg-white shadow-xl rounded-3xl p-4 border border-zinc-200 flex gap-4 mb-8">

            <div className="flex items-center gap-3 flex-1 px-4">

              <Search className="text-zinc-400" />

              <input
                type="text"
                value={orderId}
                onChange={(e) =>
                  setOrderId(
                    e.target.value
                  )
                }
                placeholder="Enter Order ID"
                className="w-full outline-none text-lg"
              />

            </div>

            <button className="bg-gradient-to-r from-black to-zinc-700 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">

              Track Order

            </button>

          </div>

          {/* ORDER CARD */}
          <div className="bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 rounded-[32px] p-7 shadow-lg mb-8">

            {/* TOP */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

              <div>

                <p className="text-zinc-500 font-medium">
                  ORDER ID
                </p>

                <h2 className="text-3xl font-black mt-1">
                  {order.orderId}
                </h2>

              </div>

              <div className="bg-green-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">

                {order.status}

              </div>

            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">

                <p className="text-zinc-500 text-sm font-medium">
                  Customer Name
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {order.customerName}
                </h3>

              </div>

              <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">

                <p className="text-zinc-500 text-sm font-medium">
                  Product
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {order.product}
                </h3>

              </div>

              <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">

                <p className="text-zinc-500 text-sm font-medium">
                  Total Amount
                </p>

                <h3 className="text-3xl font-black text-green-600 mt-2">
                  ₹ {order.amount}
                </h3>

              </div>

              <div className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-sm">

                <p className="text-zinc-500 text-sm font-medium">
                  Remaining Payment
                </p>

                <h3 className="text-3xl font-black text-red-500 mt-2">
                  ₹ {order.remaining}
                </h3>

              </div>

            </div>

          </div>

          {/* TRACKING */}
          <div className="bg-white border border-zinc-200 rounded-[32px] p-7 shadow-lg">

            <h2 className="text-3xl font-black mb-8 flex items-center gap-3">

              Live Order Progress 🚀

            </h2>

            <div className="space-y-5">

              {steps.map(
                (step, index) => {

                  const completed =
                    index <= currentStep;

                  return (

                    <div
                      key={index}
                      className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                        completed
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white border-green-500 shadow-[0_10px_40px_rgba(34,197,94,0.35)]"
                          : "bg-zinc-100 border-zinc-200"
                      }`}
                    >

                      <div className="flex items-center gap-5 px-6 py-5">

                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-black ${
                            completed
                              ? "bg-white text-green-600"
                              : "bg-zinc-300 text-black"
                          }`}
                        >

                          {completed ? (
                            <CheckCircle2 />
                          ) : (
                            index + 1
                          )}

                        </div>

                        <div>

                          <h3 className="text-xl font-bold">
                            {step}
                          </h3>

                          <p
                            className={`text-sm mt-1 ${
                              completed
                                ? "text-white/80"
                                : "text-zinc-500"
                            }`}
                          >
                            {completed
                              ? "Completed successfully"
                              : "Waiting for this step"}
                          </p>

                        </div>

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
  );
}