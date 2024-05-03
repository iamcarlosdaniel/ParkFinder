import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    dimensions: {
      height: {
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      length: {
        type: Number,
        required: true,
      },
    },
    vin: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", carSchema);
