"use client";

import { useState } from "react";

import {
  CheckCheck,
  PackageCheck,
  LoaderCircle,
  Truck,
  Search,
} from "lucide-react";

export default function TrackPage() {

  const [orderId, setOrderId] =
    useState("");

  const [order, setOrder] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  // =========================
  // TRACK ORDER
  // =========================
  const trackOrder = async () => {

    if (!orderId) {

      alert("Enter Order ID");

      return;
    }

    try {

      setLoading(true);

      const response =
        await fetch(
          `/api/track?orderId=${orderId}`
        );

      const data =
        await response.json();

      if (!data.success) {

        alert("Order Not Found");

        setOrder(null);

        return;
      }

      setOrder(data.order);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  // =========================
  // TRACK STEPS
  // =========================
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
    order
      ? steps.findIndex(
          (step) =>
            step.name ===
            order.status
        )
      : -1;

  return (

    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 flex items-center justify-center p-5">

      {/* MAIN CARD */}
      <div className="w-full max-w-2xl">

        <div className="bg-white rounded-[35px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.12)] border border-zinc-200">

          {/* HEADER */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center px-6 py-10">

            <h1 className="text-5xl font-black tracking-tight">
              Track Your Order
            </h1>

            <p className="mt-3 text-white/80 text-lg">
              Live Order Tracking
            </p>

          </div>

          {/* SEARCH */}
          <div className="p-6 border-b border-zinc-200">

            <div className="flex gap-4">

              <div className="flex-1 flex items-center gap-3 border-2 border-zinc-200 rounded-2xl px-5 py-4 bg-white">

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
                  className="w-full outline-none text-lg bg-transparent"
                />

              </div>

              <button
                onClick={trackOrder}
                className="bg-black hover:scale-105 transition-all text-white px-8 rounded-2xl font-bold shadow-xl"
              >

                {
                  loading
                    ? "Tracking..."
                    : "Track Order"
                }

              </button>

            </div>

          </div>

          {/* SHOW ONLY IF ORDER FOUND */}
          {order && (

            <>

              {/* ORDER INFO */}
              <div className="bg-green-50 p-6 border-b border-green-100">

                <div className="space-y-5">

                  <div>

                    <p className="text-zinc-500 text-sm font-semibold">
                      ORDER ID
                    </p>

                    <h2 className="text-4xl font-black mt-2">
                      {order.orderId}
                    </h2>

                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="bg-white rounded-2xl p-5 border border-zinc-200">

                      <p className="text-zinc-500 text-sm">
                        Customer
                      </p>

                      <h3 className="font-black text-2xl mt-2">
                        {order.customerName}
                      </h3>

                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-zinc-200">

                      <p className="text-zinc-500 text-sm">
                        Product
                      </p>

                      <h3 className="font-black text-2xl mt-2">
                        {order.product}
                      </h3>

                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-zinc-200">

                      <p className="text-zinc-500 text-sm">
                        Amount
                      </p>

                      <h3 className="font-black text-3xl text-green-600 mt-2">
                        ₹ {order.amount}
                      </h3>

                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-zinc-200">

                      <p className="text-zinc-500 text-sm">
                        Remaining
                      </p>

                      <h3 className="font-black text-3xl text-red-500 mt-2">
                        ₹ {order.remaining}
                      </h3>

                    </div>

                  </div>

                </div>

              </div>

              {/* TRACKING */}
              <div className="p-8">

                <h2 className="text-4xl font-black mb-10">
                  Order Progress 🚀
                </h2>

                <div className="relative">

                  {/* GRAY LINE */}
                  <div className="absolute left-7 top-0 w-1 h-full bg-zinc-200 rounded-full" />

                  {/* GREEN ACTIVE LINE */}
                  <div
                    className="absolute left-7 top-0 w-1 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full transition-all duration-700"
                    style={{
                      height: `${
                        currentStep <= 0
                          ? 0
                          : (currentStep /
                              (steps.length - 1)) *
                            100
                      }%`,
                    }}
                  />

                  {/* STEPS */}
                  <div className="space-y-12">

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
                                className={`text-2xl font-black ${
                                  completed
                                    ? "text-black"
                                    : "text-zinc-400"
                                }`}
                              >

                                {step.name}

                              </h3>

                              <p
                                className={`mt-1 text-lg ${
                                  completed
                                    ? "text-green-600"
                                    : "text-zinc-400"
                                }`}
                              >

                                {
                                  completed
                                    ? "Completed"
                                    : "Pending"
                                }

                              </p>

                            </div>

                          </div>
                        );
                      }
                    )}

                  </div>

                </div>

              </div>

            </>
          )}

        </div>

      </div>

    </div>
  );
}