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
      totalOrders:
        orders.length,
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
// CREATE ORDER
// =========================
export async function POST(
  req: Request
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const order =
      await Order.create({
        orderId:
          body.orderId,

        customerName:
          body.customerName,

        phone:
          body.phone,

        product:
          body.product,

        quantity:
          body.quantity,

        amount:
          body.amount,

        paid:
          body.paid,

        remaining:
          body.remaining,

        status:
          body.status,

        design:
          body.design || "",
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