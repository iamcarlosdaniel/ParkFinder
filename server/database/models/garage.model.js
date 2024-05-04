import mongoose from "mongoose";

const dimensionsSchema = new mongoose.Schema(
  {
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
  {
    _id: false,
  }
);

const placeSchema = new mongoose.Schema(
  {
    place_number: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: dimensionsSchema,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const scheduleSchema = new mongoose.Schema(
  {
    weekdays: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      required: true,
    },
    check_in: {
      type: Date,
      required: true,
    },
    check_out: {
      type: Date,
      required: true,
    },
  },
  {
    _id: false,
  }
);

const garageSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    request_date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    places: [placeSchema],
    schedule: [scheduleSchema],
    state: {
      type: String,
      enum: ["available", "taken"],
      default: "available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Garage", garageSchema);
