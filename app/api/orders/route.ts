import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// =========================
// CREATE ORDER
// =========================
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      customerName,
      phone,
      product,
      quantity,
      amount,
      paid,
    } = body;

    // Remaining Amount
    const remaining = amount - paid;

    // Auto Generate Order ID
    const orderId =
      "PRT-" + Math.floor(100000 + Math.random() * 900000);

    // Create Order
    const order = await Order.create({
      orderId,
      customerName,
      phone,
      product,
      quantity,
      amount,
      paid,
      remaining,
      status: "Order Received",
    });

    return NextResponse.json({
      success: true,
      message: "Order Created Successfully 🚀",
      order,
    });

  } catch (error) {
    console.log("POST ERROR:", error);

    return NextResponse.json({
      success: false,
      message: "Failed to create order",
    });
  }
}



// =========================
// GET ALL ORDERS
// =========================
export async function GET() {
  try {
    await connectDB();

    // Fetch Orders
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      totalOrders: orders.length,
      orders,
    });

  } catch (error) {
    console.log("GET ERROR:", error);

    return NextResponse.json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
}