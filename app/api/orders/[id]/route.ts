import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";
import Order from "@/models/Order";

// ======================
// UPDATE ORDER
// ======================
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const updatedOrder =
      await Order.findByIdAndUpdate(
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

    return NextResponse.json(
      {
        success: false,
        message: "Update failed",
      },
      {
        status: 500,
      }
    );
  }
}

// ======================
// DELETE ORDER
// ======================
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {

  try {

    await connectDB();

    await Order.findByIdAndDelete(
      params.id
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed",
      },
      {
        status: 500,
      }
    );
  }
}