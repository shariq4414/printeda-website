"use client";

import { useEffect, useState } from "react";

import {
  RedirectToSignIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";

interface OrderType {
  _id: string;
  orderId: string;
  customerName: string;
  phone: string;
  product: string;
  quantity: number;
  amount: number;
  paid: number;
  remaining: number;
  status: string;
}

export default function AdminPage() {

  // =========================
  // CLERK AUTH
  // =========================
  const { isLoaded, isSignedIn, user } = useUser();

  // =========================
  // STATES
  // =========================
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // ADMIN EMAIL
  // =========================
  const adminEmail = "hello.printeda@gmail.com";

  // =========================
  // FETCH ORDERS
  // =========================
  const fetchOrders = async () => {

    try {

      setLoading(true);

      const response = await fetch("/api/orders", {
        cache: "no-store",
      });

      const data = await response.json();

      console.log("API DATA:", data);

      if (data.success) {
        setOrders(data.orders || []);
      }

    } catch (error) {

      console.log("FETCH ERROR:", error);

    } finally {

      setLoading(false);

    }
  };

  // =========================
  // LOAD ORDERS
  // =========================
  useEffect(() => {

    if (isLoaded && isSignedIn) {
      fetchOrders();
    }

  }, [isLoaded, isSignedIn]);

  // =========================
  // LOADING USER
  // =========================
  if (!isLoaded) {

    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  // =========================
  // REDIRECT IF NOT LOGIN
  // =========================
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // =========================
  // CHECK ADMIN EMAIL
  // =========================
  if (
    user?.primaryEmailAddress?.emailAddress !== adminEmail
  ) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
        Access Denied ❌
      </div>
    );
  }

  // =========================
  // TOTALS
  // =========================
  const totalAmount = orders.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const totalRemaining = orders.reduce(
    (acc, item) => acc + item.remaining,
    0
  );

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* ========================= */}
      {/* TOP BAR */}
      {/* ========================= */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Printeda Admin Dashboard 🚀
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back, {user?.firstName || "Admin"}
          </p>

        </div>

        <UserButton />

      </div>

      {/* ========================= */}
      {/* STATS */}
      {/* ========================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        {/* TOTAL ORDERS */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Total Orders
          </h2>

          <p className="text-3xl font-bold text-blue-600">
            {orders.length}
          </p>

        </div>

        {/* TOTAL REVENUE */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Total Revenue
          </h2>

          <p className="text-3xl font-bold text-green-600">
            ₹ {totalAmount}
          </p>

        </div>

        {/* REMAINING */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Remaining Payment
          </h2>

          <p className="text-3xl font-bold text-red-600">
            ₹ {totalRemaining}
          </p>

        </div>

      </div>

      {/* ========================= */}
      {/* TABLE */}
      {/* ========================= */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full">

          {/* TABLE HEAD */}
          <thead className="bg-black text-white">

            <tr>

              <th className="p-4 text-left">
                Order ID
              </th>

              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Paid
              </th>

              <th className="p-4 text-left">
                Remaining
              </th>

              <th className="p-4 text-left">
                Status
              </th>

            </tr>

          </thead>

          {/* TABLE BODY */}
          <tbody>

            {loading ? (

              <tr>

                <td
                  className="p-4"
                  colSpan={7}
                >
                  Loading...
                </td>

              </tr>

            ) : orders.length === 0 ? (

              <tr>

                <td
                  className="p-4"
                  colSpan={7}
                >
                  No Orders Found
                </td>

              </tr>

            ) : (

              orders.map((order) => (

                <tr
                  key={order._id}
                  className="border-b hover:bg-gray-100"
                >

                  {/* ORDER ID */}
                  <td className="p-4 font-semibold">
                    {order.orderId}
                  </td>

                  {/* CUSTOMER */}
                  <td className="p-4">
                    {order.customerName}
                  </td>

                  {/* PRODUCT */}
                  <td className="p-4">
                    {order.product}
                  </td>

                  {/* AMOUNT */}
                  <td className="p-4 font-semibold">
                    ₹ {order.amount}
                  </td>

                  {/* PAID */}
                  <td className="p-4 text-green-600 font-semibold">
                    ₹ {order.paid}
                  </td>

                  {/* REMAINING */}
                  <td className="p-4 text-red-600 font-semibold">
                    ₹ {order.remaining}
                  </td>

                  {/* STATUS */}
                  <td className="p-4">

                    <select
                      value={order.status}

                      onChange={async (e) => {

                        const newStatus = e.target.value;

                        try {

                          await fetch(
                            `/api/orders/${order._id}`,
                            {
                              method: "PATCH",

                              headers: {
                                "Content-Type":
                                  "application/json",
                              },

                              body: JSON.stringify({
                                status: newStatus,
                              }),
                            }
                          );

                          fetchOrders();

                        } catch (error) {

                          console.log(error);

                        }
                      }}

                      className="border p-2 rounded-lg"
                    >

                      <option>
                        Order Received
                      </option>

                      <option>
                        Designing
                      </option>

                      <option>
                        Printing
                      </option>

                      <option>
                        Packaging
                      </option>

                      <option>
                        Ready
                      </option>

                      <option>
                        Completed
                      </option>

                    </select>

                  </td>

                </tr>

              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}