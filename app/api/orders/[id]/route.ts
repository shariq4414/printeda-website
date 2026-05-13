import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

// ==========================
// UPDATE ORDER STATUS
// ==========================
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    await connectDB();

    // GET BODY
    const body = await req.json();

    // GET ID
    const { id } = await params;

    // UPDATE ORDER
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      message: "Order Updated Successfully 🚀",
      order: updatedOrder,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update order",
      },
      {
        status: 500,
      }
    );
  }
}