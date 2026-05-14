import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    product: {
      type: String,
      required: true,
      trim: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 1,
    },

    amount: {
      type: Number,
      required: true,
      default: 0,
    },

    paid: {
      type: Number,
      required: true,
      default: 0,
    },

    remaining: {
      type: Number,
      required: true,
      default: 0,
    },

    status: {
      type: String,
      default: "Order Received",
    },

    // =========================
    // DESIGN FILE
    // =========================
    design: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order ||
  mongoose.model(
    "Order",
    OrderSchema
  );

export default Order;