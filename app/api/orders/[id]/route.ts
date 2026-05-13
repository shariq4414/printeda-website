import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";


// ==========================
// UPDATE ORDER STATUS
// ==========================
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const body = await req.json();

    const updatedOrder = await Order.findByIdAndUpdate(
      params.id,
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

    return NextResponse.json({
      success: false,
      message: "Failed to update order",
    });
  }
}