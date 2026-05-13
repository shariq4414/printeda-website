"use client";

import { useState } from "react";

interface OrderType {
  orderId: string;
  customerName: string;
  product: string;
  amount: number;
  paid: number;
  remaining: number;
  status: string;
}

export default function TrackPage() {

  // =========================
  // STATES
  // =========================
  const [orderId, setOrderId] = useState("");

  const [order, setOrder] =
    useState<OrderType | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =========================
  // STATUS STEPS
  // =========================
  const steps = [
    "Order Received",
    "Designing",
    "Printing",
    "Packaging",
    "Ready",
    "Completed",
  ];

  // =========================
  // SEARCH ORDER
  // =========================
  const searchOrder = async () => {

    if (!orderId) {

      setError("Please enter Order ID");

      return;
    }

    try {

      setLoading(true);

      setError("");

      setOrder(null);

      const response = await fetch(
        `/api/orders/search?orderId=${orderId}`
      );

      const data = await response.json();

      if (!data.order) {

        setError("Order not found ❌");

        return;
      }

      setOrder(data.order);

    } catch (error) {

      console.log(error);

      setError("Something went wrong");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-3xl">

        {/* ========================= */}
        {/* HEADING */}
        {/* ========================= */}
        <div className="text-center mb-8">

          <h1 className="text-5xl font-bold mb-3 text-black">
            Track Your Order 📦
          </h1>

          <p className="text-gray-600">
            Enter your order ID to check live order status
          </p>

        </div>

        {/* ========================= */}
        {/* SEARCH BOX */}
        {/* ========================= */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <input
            type="text"
            placeholder="Enter Order ID (Example: PRT-123456)"
            value={orderId}
            onChange={(e) =>
              setOrderId(e.target.value)
            }
            className="flex-1 border-2 border-gray-300 p-4 rounded-2xl outline-none focus:border-black text-black placeholder:text-gray-500"
          />

          <button
            onClick={searchOrder}
            disabled={loading}
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all"
          >

            {loading
              ? "Searching..."
              : "Track Order"}

          </button>

        </div>

        {/* ========================= */}
        {/* ERROR */}
        {/* ========================= */}
        {error && (

          <div className="bg-red-100 text-red-600 p-4 rounded-2xl mb-6 text-center font-semibold">

            {error}

          </div>
        )}

        {/* ========================= */}
        {/* ORDER DETAILS */}
        {/* ========================= */}
        {order && (

          <div className="space-y-8">

            {/* ========================= */}
            {/* ORDER CARD */}
            {/* ========================= */}
            <div className="bg-gray-100 rounded-3xl p-6">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div>

                  <p className="text-gray-500 text-sm">
                    ORDER ID
                  </p>

                  <h2 className="text-2xl font-bold text-black">
                    {order.orderId}
                  </h2>

                </div>

                <div>

                  <span className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold">

                    {order.status}

                  </span>

                </div>

              </div>

              {/* ========================= */}
              {/* GRID */}
              {/* ========================= */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="bg-white p-5 rounded-2xl shadow-sm">

                  <p className="text-gray-500 text-sm mb-1">
                    Customer Name
                  </p>

                  <h3 className="font-bold text-lg text-black">
                    {order.customerName}
                  </h3>

                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm">

                  <p className="text-gray-500 text-sm mb-1">
                    Product
                  </p>

                  <h3 className="font-bold text-lg text-black">
                    {order.product}
                  </h3>

                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm">

                  <p className="text-gray-500 text-sm mb-1">
                    Total Amount
                  </p>

                  <h3 className="font-bold text-green-600 text-lg">
                    ₹ {order.amount}
                  </h3>

                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm">

                  <p className="text-gray-500 text-sm mb-1">
                    Remaining Payment
                  </p>

                  <h3 className="font-bold text-red-600 text-lg">
                    ₹ {order.remaining}
                  </h3>

                </div>

              </div>

            </div>

            {/* ========================= */}
            {/* ORDER PROGRESS */}
            {/* ========================= */}
            <div className="border border-gray-200 rounded-3xl p-6">

              <h2 className="text-2xl font-bold mb-6 text-black">
                Live Order Progress 🚀
              </h2>

              <div className="space-y-4">

                {steps.map((step, index) => {

                  const currentIndex =
                    steps.indexOf(order.status);

                  const completed =
                    index <= currentIndex;

                  return (

                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                        completed
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          completed
                            ? "bg-white text-green-600"
                            : "bg-gray-300 text-black"
                        }`}
                      >

                        {completed ? "✓" : index + 1}

                      </div>

                      <div>

                        <h3 className="font-semibold text-lg">
                          {step}
                        </h3>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}