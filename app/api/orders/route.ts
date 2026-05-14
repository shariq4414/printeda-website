import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

// =========================
// GET ALL ORDERS
// =========================
export async function GET() {

  try {

    await connectDB();

    const orders =
      await Order.find()
        .sort({
          createdAt: -1,
        });

    return NextResponse.json({
      success: true,
      totalOrders: orders.length,
      orders,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch orders",
      },
      {
        status: 500,
      }
    );
  }
}

// =========================
// CREATE NEW ORDER
// =========================
export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const {
      orderId,
      customerName,
      phone,
      product,
      quantity,
      amount,
      paid,
      remaining,
      status,
      design,
    } = body;

    const order =
      await Order.create({
        orderId,
        customerName,
        phone,
        product,
        quantity,
        amount,
        paid,
        remaining,
        status,
        design,
      });

    return NextResponse.json({
      success: true,
      message:
        "Order Created Successfully 🚀",
      order,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create order",
      },
      {
        status: 500,
      }
    );
  }
}