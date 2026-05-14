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
  Eye,
  PackageCheck,
  Plus,
} from "lucide-react";

// =========================
// TYPES
// =========================
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

  // =========================
  // CLERK
  // =========================
  const {
    isLoaded,
    isSignedIn,
    user,
  } = useUser();

  // =========================
  // STATES
  // =========================
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
      status: "Order Received",
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

      const response =
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
              design: "",
            }),
          }
        );

      const data =
        await response.json();

      if (!data.success) {

        alert(
          "Failed to create order"
        );

        return;
      }

      alert(
        "Order Created Successfully"
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

      alert(
        "Something went wrong"
      );

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

      const response =
        await fetch(
          `/api/orders/${id}`,
          {
            method: "DELETE",
          }
        );

      const data =
        await response.json();

      if (!data.success) {

        alert(
          "Delete Failed"
        );

        return;
      }

      alert(
        "Order Deleted"
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );
    }
  };

  // =========================
  // EDIT PAYMENT
  // =========================
  const editPayment = async (
    order: OrderType
  ) => {

    const paymentInput =
      prompt(
        "Enter New Payment"
      );

    if (
      paymentInput === null
    ) return;

    const newPayment =
      Number(paymentInput);

    if (
      isNaN(newPayment)
    ) {

      alert(
        "Invalid Amount"
      );

      return;
    }

    try {

      const updatedPaid =
        order.paid +
        newPayment;

      const updatedRemaining =
        order.amount -
        updatedPaid;

      const response =
        await fetch(
          `/api/orders/${order._id}`,
          {
            method: "PATCH",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              paid:
                updatedPaid,

              remaining:
                updatedRemaining <
                0
                  ? 0
                  : updatedRemaining,

              status:
                updatedRemaining <=
                0
                  ? "Completed"
                  : order.status,
            }),
          }
        );

      const data =
        await response.json();

      if (!data.success) {

        alert(
          "Update Failed"
        );

        return;
      }

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert(
        "Something went wrong"
      );
    }
  };

  // =========================
  // UPDATE STATUS
  // =========================
  const updateStatus = async (
    id: string,
    status: string
  ) => {

    try {

      await fetch(
        `/api/orders/${id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            status,
          }),
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

          const saveResponse =
            await fetch(
              `/api/orders/${id}`,
              {
                method: "PATCH",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  design:
                    result.secure_url,
                }),
              }
            );

          const saveData =
            await saveResponse.json();

          if (!saveData.success) {

            alert(
              "Database Save Failed"
            );

            return;
          }

          alert(
            "Design Uploaded"
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
  // SEARCH
  // =========================
  const filteredOrders =
    orders.filter((order) =>
      order.customerName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

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
  // LOADING
  // =========================
  if (!isLoaded) {

    return (
      <div className="min-h-screen flex items-center justify-center text-5xl font-bold">
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-5xl font-black">
        Access Denied ❌
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-zinc-100 via-white to-zinc-200 flex">

      {/* SIDEBAR */}
      <div className="w-72 bg-black text-white hidden lg:flex flex-col p-8">

        <h1 className="text-5xl font-black mb-14">
          Printeda 🚀
        </h1>

        <div className="space-y-4">

          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
            <LayoutDashboard />
            Dashboard
          </div>

          <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all cursor-pointer">
            <ShoppingBag />
            Orders
          </div>

          <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all cursor-pointer">
            <Wallet />
            Payments
          </div>

          <div className="flex items-center gap-4 hover:bg-white/10 p-4 rounded-2xl transition-all cursor-pointer">
            <PackageCheck />
            Tracking
          </div>

        </div>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-8">

        {/* TOPBAR */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-6xl font-black bg-gradient-to-r from-black to-zinc-500 bg-clip-text text-transparent">
              Printeda Dashboard
            </h1>

            <p className="text-zinc-500 text-xl mt-3">
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
              className="bg-gradient-to-r from-black to-zinc-700 hover:scale-105 transition-all duration-300 text-white px-7 py-4 rounded-2xl font-bold shadow-2xl flex items-center gap-2"
            >
              <Plus size={20} />
              Add Order
            </button>

            <UserButton />

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white/80 backdrop-blur-xl p-7 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 font-semibold">
                  Total Orders
                </p>

                <h2 className="text-5xl font-black text-blue-600 mt-4">
                  {orders.length}
                </h2>

              </div>

              <div className="bg-blue-100 p-5 rounded-3xl">
                <ShoppingBag className="text-blue-600" />
              </div>

            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-xl p-7 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 font-semibold">
                  Revenue
                </p>

                <h2 className="text-5xl font-black text-green-600 mt-4">
                  ₹ {totalRevenue}
                </h2>

              </div>

              <div className="bg-green-100 p-5 rounded-3xl">
                <IndianRupee className="text-green-600" />
              </div>

            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-xl p-7 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 font-semibold">
                  Paid
                </p>

                <h2 className="text-5xl font-black text-blue-500 mt-4">
                  ₹ {totalPaid}
                </h2>

              </div>

              <div className="bg-blue-100 p-5 rounded-3xl">
                <Wallet className="text-blue-500" />
              </div>

            </div>

          </div>

          <div className="bg-white/80 backdrop-blur-xl p-7 rounded-3xl shadow-xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-500 font-semibold">
                  Remaining
                </p>

                <h2 className="text-5xl font-black text-red-500 mt-4">
                  ₹ {totalRemaining}
                </h2>

              </div>

              <div className="bg-red-100 p-5 rounded-3xl">
                <Wallet className="text-red-500" />
              </div>

            </div>

          </div>

        </div>

        {/* SEARCH */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-5 mb-8">

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
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

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
                    className="p-10 text-center text-2xl font-bold"
                  >
                    Loading...
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

                          <div className="flex flex-col gap-3">

                            <a
                              href={
                                order.design
                              }
                              target="_blank"
                              className="flex items-center gap-2 text-blue-600 font-bold"
                            >
                              <Eye size={18} />
                              View
                            </a>

                            <button
                              onClick={() =>
                                uploadDesign(
                                  order._id
                                )
                              }
                              className="bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:scale-105 transition-all text-white px-4 py-3 rounded-2xl font-semibold"
                            >
                              Replace
                            </button>

                          </div>

                        ) : (

                          <button
                            onClick={() =>
                              uploadDesign(
                                order._id
                              )
                            }
                            className="bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:scale-105 transition-all text-white px-5 py-3 rounded-2xl font-semibold flex items-center gap-2"
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
                          value={
                            order.status
                          }
                          onChange={(e) =>
                            updateStatus(
                              order._id,
                              e.target.value
                            )
                          }
                          className="border border-zinc-300 rounded-2xl px-4 py-3 bg-white outline-none"
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
                            onClick={() =>
                              editPayment(
                                order
                              )
                            }
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition-all text-white px-4 py-3 rounded-2xl flex items-center gap-2"
                          >
                            <Pencil size={18} />
                            Edit
                          </button>

                          <a
                            href={`https://wa.me/91${order.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
`Your Order Update

Order ID: ${order.orderId}

Product: ${order.product}

Total Amount: ₹${order.amount}

Paid: ₹${order.paid}

Remaining: ₹${order.remaining}

Status: ${order.status}

Thank you for choosing Printeda 🚀`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
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

        {/* MODAL */}
        {showModal && (

          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="bg-white rounded-3xl p-8 w-full max-w-xl">

              <h2 className="text-4xl font-black mb-8">
                Add Order
              </h2>

              <div className="grid grid-cols-1 gap-4">

                <input
                  type="text"
                  placeholder="Customer Name"
                  value={
                    formData.customerName
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      customerName:
                        e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  placeholder="Phone"
                  value={
                    formData.phone
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone:
                        e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="text"
                  placeholder="Product"
                  value={
                    formData.product
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      product:
                        e.target.value,
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="number"
                  placeholder="Quantity"
                  value={
                    formData.quantity
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      quantity:
                        Number(
                          e.target.value
                        ),
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="number"
                  placeholder="Amount"
                  value={
                    formData.amount
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      amount:
                        Number(
                          e.target.value
                        ),
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

                <input
                  type="number"
                  placeholder="Paid"
                  value={
                    formData.paid
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      paid:
                        Number(
                          e.target.value
                        ),
                    })
                  }
                  className="border p-4 rounded-2xl"
                />

              </div>

              <div className="mt-5 text-xl font-bold text-red-500">

                Remaining:
                ₹ {
                  formData.amount -
                  formData.paid
                }

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={
                    createOrder
                  }
                  disabled={creating}
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

    </div>
  );
}