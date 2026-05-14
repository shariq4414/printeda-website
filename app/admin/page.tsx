"use client";

import { useEffect, useState } from "react";

import {
  RedirectToSignIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import {
  LayoutDashboard,
  ShoppingBag,
  IndianRupee,
  Wallet,
  Search,
  Trash2,
  Pencil,
  MessageCircle,
  Upload,
  PackageCheck,
} from "lucide-react";

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

  const {
    isLoaded,
    isSignedIn,
    user,
  } = useUser();

  const [orders, setOrders] =
    useState<OrderType[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [creating, setCreating] =
    useState(false);

  const [formData, setFormData] =
    useState({
      customerName: "",
      phone: "",
      product: "",
      quantity: 1,
      amount: 0,
      paid: 0,
      status: "Order Received",
    });

  const adminEmail =
    "hello.printeda@gmail.com";

  // =========================
  // FETCH ORDERS
  // =========================
  const fetchOrders = async () => {

    try {

      setLoading(true);

      const response =
        await fetch(
          "/api/orders",
          {
            cache: "no-store",
          }
        );

      const data =
        await response.json();

      setOrders(
        data.orders || []
      );

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

    if (
      isLoaded &&
      isSignedIn
    ) {

      fetchOrders();

    }

  }, [
    isLoaded,
    isSignedIn,
  ]);

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

      await fetch(
        "/api/orders",
        {
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
        }
      );

      setShowModal(false);

      setFormData({
        customerName: "",
        phone: "",
        product: "",
        quantity: 1,
        amount: 0,
        paid: 0,
        status: "Order Received",
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
  // UPLOAD DESIGN
  // =========================
  const uploadDesign = async (
    id: string
  ) => {

    const fileInput =
      document.createElement(
        "input"
      );

    fileInput.type = "file";

    fileInput.accept =
      "image/*";

    fileInput.click();

    fileInput.onchange =
      async () => {

        const file =
          fileInput.files?.[0];

        if (!file) return;

        try {

          const data =
            new FormData();

          data.append(
            "file",
            file
          );

          data.append(
            "upload_preset",
            "printeda"
          );

          const response =
            await fetch(
              "https://api.cloudinary.com/v1_1/dsxdkjl8h/image/upload",
              {
                method: "POST",
                body: data,
              }
            );

          const result =
            await response.json();

          if (
            !result.secure_url
          ) {

            alert(
              "Upload Failed"
            );

            return;
          }

          await fetch(
            `/api/orders/${id}`,
            {
              method: "PATCH",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify(
                {
                  design:
                    result.secure_url,
                }
              ),
            }
          );

          fetchOrders();

        } catch (error) {

          console.log(error);

          alert(
            "Something went wrong"
          );
        }
      };
  };

  // =========================
  // LOADING
  // =========================
  if (!isLoaded) {

    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-bold">
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
      ?.emailAddress !==
    adminEmail
  ) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-5xl font-bold">
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
        acc +
        item.remaining,
      0
    );

  // =========================
  // FILTER
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

    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 flex">

      {/* SIDEBAR */}
      <div className="w-72 bg-black text-white hidden lg:flex flex-col p-8">

        <h1 className="text-4xl font-black mb-12">
          Printeda 🚀
        </h1>

        <div className="space-y-4">

          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
            <LayoutDashboard />
            Dashboard
          </div>

          <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all">
            <ShoppingBag />
            Orders
          </div>

          <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all">
            <Wallet />
            Payments
          </div>

          <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all">
            <PackageCheck />
            Tracking
          </div>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">

        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              Printeda Dashboard
            </h1>

            <p className="text-zinc-500 mt-3 text-lg">
              Welcome back,
              {" "}
              {user?.firstName ||
                "Admin"}
            </p>

          </div>

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setShowModal(true)
              }
              className="bg-gradient-to-r from-black to-zinc-700 hover:scale-105 transition-all duration-300 text-white px-6 py-4 rounded-2xl font-bold shadow-2xl"
            >
              + Add Order
            </button>

            <UserButton />

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-lg font-semibold text-zinc-500">
                  Total Orders
                </h2>

                <p className="text-4xl font-black text-blue-600 mt-3">
                  {orders.length}
                </p>

              </div>

              <div className="bg-blue-100 p-4 rounded-2xl">
                <ShoppingBag className="text-blue-600" />
              </div>

            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-lg font-semibold text-zinc-500">
                  Total Revenue
                </h2>

                <p className="text-4xl font-black text-green-600 mt-3">
                  ₹ {totalRevenue}
                </p>

              </div>

              <div className="bg-green-100 p-4 rounded-2xl">
                <IndianRupee className="text-green-600" />
              </div>

            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-lg font-semibold text-zinc-500">
                  Received Payment
                </h2>

                <p className="text-4xl font-black text-blue-500 mt-3">
                  ₹ {totalPaid}
                </p>

              </div>

              <div className="bg-blue-100 p-4 rounded-2xl">
                <Wallet className="text-blue-500" />
              </div>

            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-lg font-semibold text-zinc-500">
                  Remaining
                </h2>

                <p className="text-4xl font-black text-red-500 mt-3">
                  ₹ {totalRemaining}
                </p>

              </div>

              <div className="bg-red-100 p-4 rounded-2xl">
                <Wallet className="text-red-500" />
              </div>

            </div>

          </div>

        </div>

        {/* SEARCH */}
        <div className="bg-white/70 backdrop-blur-xl p-5 rounded-3xl shadow-xl mb-8">

          <div className="flex items-center gap-4">

            <Search className="text-zinc-500" />

            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="w-full bg-transparent outline-none text-lg"
            />

          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">

          <table className="w-full">

            <thead className="bg-gradient-to-r from-black to-zinc-800 text-white">

              <tr>

                <th className="p-5 text-left">
                  Order ID
                </th>

                <th className="p-5 text-left">
                  Customer
                </th>

                <th className="p-5 text-left">
                  Product
                </th>

                <th className="p-5 text-left">
                  Design
                </th>

                <th className="p-5 text-left">
                  Amount
                </th>

                <th className="p-5 text-left">
                  Paid
                </th>

                <th className="p-5 text-left">
                  Remaining
                </th>

                <th className="p-5 text-left">
                  Status
                </th>

                <th className="p-5 text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan={9}
                    className="p-10 text-center text-xl font-bold"
                  >
                    Loading...
                  </td>

                </tr>

              ) : filteredOrders.length === 0 ? (

                <tr>

                  <td
                    colSpan={9}
                    className="p-10 text-center text-xl font-bold"
                  >
                    No Orders Found
                  </td>

                </tr>

              ) : (

                filteredOrders.map(
                  (order) => (

                    <tr
                      key={order._id}
                      className="border-b hover:bg-zinc-50 transition-all"
                    >

                      <td className="p-5 font-bold">
                        {order.orderId}
                      </td>

                      <td className="p-5">
                        {order.customerName}
                      </td>

                      <td className="p-5">
                        {order.product}
                      </td>

                      {/* DESIGN */}
                      <td className="p-5">

                        {order.design ? (

                          <div className="relative group w-32 h-24 rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-white">

                            <img
                              src={order.design}
                              alt="design"
                              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">

                              <a
                                href={order.design}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold"
                              >
                                View
                              </a>

                              <button
                                onClick={() =>
                                  uploadDesign(
                                    order._id
                                  )
                                }
                                className="bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-bold"
                              >
                                Replace
                              </button>

                            </div>

                          </div>

                        ) : (

                          <button
                            onClick={() =>
                              uploadDesign(
                                order._id
                              )
                            }
                            className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 hover:scale-105 transition-all text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2"
                          >

                            <Upload size={18} />

                            Upload

                          </button>

                        )}

                      </td>

                      <td className="p-5 font-bold">
                        ₹ {order.amount}
                      </td>

                      <td className="p-5 text-green-600 font-bold">
                        ₹ {order.paid}
                      </td>

                      <td className="p-5 text-red-500 font-bold">
                        ₹ {order.remaining}
                      </td>

                      {/* STATUS */}
                      <td className="p-5">

                        <select

                          value={order.status}

                          onChange={async (
                            e
                          ) => {

                            const newStatus =
                              e.target.value;

                            await fetch(
                              `/api/orders/${order._id}`,
                              {
                                method:
                                  "PATCH",

                                headers:
                                  {
                                    "Content-Type":
                                      "application/json",
                                  },

                                body:
                                  JSON.stringify(
                                    {
                                      status:
                                        newStatus,
                                    }
                                  ),
                              }
                            );

                            fetchOrders();
                          }}

                          className="border border-zinc-300 rounded-2xl px-4 py-3 bg-white shadow-sm outline-none"
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

                      {/* ACTION */}
                      <td className="p-5">

                        <div className="flex flex-wrap gap-3">

                          <button

                            onClick={async () => {

                              const paymentInput =
                                prompt(
                                  "Enter Paid Amount"
                                );

                              if (
                                paymentInput ===
                                null
                              ) return;

                              const newPayment =
                                Number(
                                  paymentInput
                                );

                              if (
                                isNaN(
                                  newPayment
                                )
                              ) return;

                              const updatedPaid =
                                order.paid +
                                newPayment;

                              const updatedRemaining =
                                order.amount -
                                updatedPaid;

                              const updatedStatus =
                                updatedRemaining <=
                                0
                                  ? "Completed"
                                  : order.status;

                              await fetch(
                                `/api/orders/${order._id}`,
                                {
                                  method:
                                    "PATCH",

                                  headers:
                                    {
                                      "Content-Type":
                                        "application/json",
                                    },

                                  body:
                                    JSON.stringify(
                                      {
                                        paid:
                                          updatedPaid,

                                        remaining:
                                          updatedRemaining <
                                          0
                                            ? 0
                                            : updatedRemaining,

                                        status:
                                          updatedStatus,
                                      }
                                    ),
                                }
                              );

                              fetchOrders();
                            }}

                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition-all text-white px-4 py-3 rounded-2xl flex items-center gap-2"
                          >

                            <Pencil size={18} />

                            Edit

                          </button>

                          <a
                            href={`https://wa.me/91${order.phone.replace(/\D/g, "")}`}
                            target="_blank"
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 transition-all text-white px-4 py-3 rounded-2xl flex items-center gap-2"
                          >

                            <MessageCircle size={18} />

                            WhatsApp

                          </a>

                          <button
                            onClick={() =>
                              deleteOrder(
                                order._id
                              )
                            }
                            className="bg-gradient-to-r from-red-500 to-rose-600 hover:scale-105 transition-all text-white px-4 py-3 rounded-2xl flex items-center gap-2"
                          >

                            <Trash2 size={18} />

                            Delete

                          </button>

                        </div>

                      </td>

                    </tr>
                  )
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-black mb-6">
              Add New Order 🚀
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                placeholder="Customer Name"
                className="border p-4 rounded-2xl"
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
                className="border p-4 rounded-2xl"
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
                className="border p-4 rounded-2xl"
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
                className="border p-4 rounded-2xl"
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
                className="border p-4 rounded-2xl"
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
                className="border p-4 rounded-2xl"
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

            </div>

            <div className="mt-6 text-xl font-bold text-red-500">

              Remaining:
              ₹ {
                formData.amount -
                formData.paid
              }

            </div>

            <div className="flex gap-4 mt-8">

              <button
                onClick={createOrder}
                className="bg-black text-white px-6 py-4 rounded-2xl font-bold"
              >
                {creating
                  ? "Saving..."
                  : "Save Order"}
              </button>

              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="bg-zinc-200 px-6 py-4 rounded-2xl font-bold"
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