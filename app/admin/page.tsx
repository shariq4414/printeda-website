"use client";

import { useEffect, useState } from "react";

import {
  RedirectToSignIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import { CldUploadWidget } from "next-cloudinary";

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
  design?: string;
}

export default function AdminPage() {

  const { isLoaded, isSignedIn, user } =
    useUser();

  const [orders, setOrders] =
    useState<OrderType[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [creating, setCreating] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      customerName: "",
      phone: "",
      product: "",
      quantity: 1,
      amount: 0,
      paid: 0,
      remaining: 0,
      status: "Order Received",
      design: "",
    });

  // =========================
  // ADMIN EMAIL
  // =========================
  const adminEmail =
    "hello.printeda@gmail.com";

  // =========================
  // FETCH ORDERS
  // =========================
  const fetchOrders = async () => {

    try {

      setLoading(true);

      const response = await fetch(
        "/api/orders",
        {
          cache: "no-store",
        }
      );

      const data =
        await response.json();

      setOrders(data.orders || []);

    } catch (error) {

      console.log(error);

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
  // CREATE ORDER
  // =========================
  const createOrder = async () => {

    if (creating) return;

    try {

      setCreating(true);

      const orderId =
        `PRT-${Math.floor(
          100000 +
          Math.random() * 900000
        )}`;

      const remaining =
        formData.amount -
        formData.paid;

      await fetch("/api/orders", {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          ...formData,
          orderId,
          remaining,
        }),
      });

      setShowModal(false);

      setFormData({
        customerName: "",
        phone: "",
        product: "",
        quantity: 1,
        amount: 0,
        paid: 0,
        remaining: 0,
        status: "Order Received",
        design: "",
      });

      fetchOrders();

    } catch (error) {

      console.log(error);

    } finally {

      setCreating(false);

    }
  };

  // =========================
  // DELETE ORDER
  // =========================
  const deleteOrder = async (
    id: string
  ) => {

    const confirmDelete =
      confirm(
        "Delete this order?"
      );

    if (!confirmDelete) return;

    try {

      await fetch(
        `/api/orders/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

    }
  };

  // =========================
  // LOADING
  // =========================
  if (!isLoaded) {

    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  // =========================
  // LOGIN CHECK
  // =========================
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  // =========================
  // ADMIN CHECK
  // =========================
  if (
    user?.primaryEmailAddress
      ?.emailAddress !== adminEmail
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
  const totalRevenue =
    orders.reduce(
      (acc, item) =>
        acc + item.amount,
      0
    );

  const totalPaid =
    orders.reduce(
      (acc, item) =>
        acc + item.paid,
      0
    );

  const totalRemaining =
    orders.reduce(
      (acc, item) =>
        acc + item.remaining,
      0
    );

  // =========================
  // SEARCH FILTER
  // =========================
  const filteredOrders =
    orders.filter((order) =>
      order.customerName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="min-h-screen bg-gray-100 p-6">

      {/* TOP BAR */}
      <div className="flex items-center justify-between mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Printeda Dashboard 
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back,
            {" "}
            {user?.firstName || "Admin"}
          </p>

        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="bg-black text-white px-5 py-3 rounded-xl font-semibold"
          >
            + Add Order
          </button>

          <UserButton />

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Total Orders
          </h2>

          <p className="text-3xl font-bold text-blue-600">
            {orders.length}
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Total Revenue
          </h2>

          <p className="text-3xl font-bold text-green-600">
            ₹ {totalRevenue}
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Received Payment
          </h2>

          <p className="text-3xl font-bold text-blue-500">
            ₹ {totalPaid}
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-xl font-semibold mb-2">
            Remaining Payment
          </h2>

          <p className="text-3xl font-bold text-red-600">
            ₹ {totalRemaining}
          </p>

        </div>

      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-2xl shadow-lg mb-6">

        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full">

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
                Design
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

              <th className="p-4 text-left">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredOrders.map(
              (order) => (

                <tr
                  key={order._id}
                  className="border-b"
                >

                  <td className="p-4">
                    {order.orderId}
                  </td>

                  <td className="p-4">
                    {order.customerName}
                  </td>

                  <td className="p-4">
                    {order.product}
                  </td>

                  <td className="p-4">

                    {order.design ? (

                      <a
                        href={order.design}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>

                    ) : (
                      "No Design"
                    )}

                  </td>

                  <td className="p-4">
                    ₹ {order.amount}
                  </td>

                  <td className="p-4 text-green-600">
                    ₹ {order.paid}
                  </td>

                  <td className="p-4 text-red-600">
                    ₹ {order.remaining}
                  </td>

                  <td className="p-4">
                    {order.status}
                  </td>

                  <td className="p-4 flex gap-2">

                    <a
                      href={`https://wa.me/91${order.phone}`}
                      target="_blank"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                      WhatsApp
                    </a>

                    <button
                      onClick={() =>
                        deleteOrder(
                          order._id
                        )
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-8 rounded-2xl w-full max-w-xl">

            <h2 className="text-3xl font-bold mb-6">
              Add New Order
            </h2>

            <div className="grid grid-cols-1 gap-4">

              <input
                placeholder="Customer Name"
                className="border p-3 rounded-xl"

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    customerName:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Phone"
                className="border p-3 rounded-xl"

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Product"
                className="border p-3 rounded-xl"

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    product:
                      e.target.value,
                  })
                }
              />

              <input
                type="number"
                placeholder="Quantity"
                className="border p-3 rounded-xl"

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity:
                      Number(
                        e.target.value
                      ),
                  })
                }
              />

              <input
                type="number"
                placeholder="Amount"
                className="border p-3 rounded-xl"

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount:
                      Number(
                        e.target.value
                      ),
                  })
                }
              />

              <input
                type="number"
                placeholder="Paid"
                className="border p-3 rounded-xl"

                onChange={(e) =>
                  setFormData({
                    ...formData,
                    paid:
                      Number(
                        e.target.value
                      ),
                  })
                }
              />

              {/* DESIGN UPLOAD */}
              <div>

                <label className="font-semibold">
                  Upload Design
                </label>

                <div className="mt-2">

                  <CldUploadWidget
                    uploadPreset="printeda"

                    onSuccess={(result: any) => {

                      setFormData({
                        ...formData,
                        design:
                          result.info.secure_url,
                      });

                    }}
                  >

                    {({ open }) => {

                      return (

                        <button
                          type="button"

                          onClick={() =>
                            open()
                          }

                          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
                        >
                          Upload Design
                        </button>
                      );
                    }}

                  </CldUploadWidget>

                </div>

                {formData.design && (

                  <img
                    src={formData.design}
                    alt="design"
                    className="w-32 h-32 object-cover rounded-xl mt-4 border"
                  />

                )}

              </div>

            </div>

            <div className="mt-4 text-lg font-semibold text-red-600">

              Remaining:
              ₹ {
                formData.amount -
                formData.paid
              }

            </div>

            <div className="flex gap-4 mt-6">

              <button
                onClick={createOrder}

                disabled={creating}

                className="bg-black text-white px-6 py-3 rounded-xl font-semibold"
              >
                {creating
                  ? "Saving..."
                  : "Save Order"}
              </button>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="bg-gray-300 px-6 py-3 rounded-xl font-semibold"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}