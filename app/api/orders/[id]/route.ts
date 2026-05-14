import { NextResponse } from "next/server";

import connectDB from "@/lib/mongodb";

import Order from "@/models/Order";

// ======================
// UPDATE ORDER
// ======================
export async function PATCH(
  req: Request,
  context: any
) {

  try {

    await connectDB();

    const body =
      await req.json();

    const updatedOrder =
      await Order.findByIdAndUpdate(
        context.params.id,
        {
          $set: body,
        },
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
  context: any
) {

  try {

    await connectDB();

    await Order.findByIdAndDelete(
      context.params.id
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}