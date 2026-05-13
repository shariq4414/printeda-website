import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// =========================
// SEARCH ORDER BY ORDER ID
// =========================
export async function GET(req: Request) {

  try {

    await connectDB();

    const { searchParams } = new URL(req.url);

    const orderId = searchParams.get("orderId");

    const order = await Order.findOne({
      orderId,
    });

    if (!order) {

      return NextResponse.json({
        success: false,
        message: "Order Not Found",
      });
    }

    return NextResponse.json({
      success: true,
      order,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Failed to search order",
    });
  }
}