import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";

// =========================
// UPDATE ORDER
// =========================
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const body = await req.json();

    const params = await context.params;

    const updatedOrder = await Order.findByIdAndUpdate(
      params.id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      order: updatedOrder,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Update failed",
    });
  }
}

// =========================
// DELETE ORDER
// =========================
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const params = await context.params;

    await Order.findByIdAndDelete(params.id);

    return NextResponse.json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Delete failed",
    });
  }
}