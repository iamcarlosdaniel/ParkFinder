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

const periodSchema = new mongoose.Schema(
  {
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
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
    periods: [periodSchema],
  },
  {
    _id: false,
  }
);

const coordinatesSchema = new mongoose.Schema(
  {
    latitude: {
      type: String,
      required: true,
      trim: true,
    },
    longitude: {
      type: String,
      required: true,
      trim: true,
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
    coordinates: {
      type: coordinatesSchema,
      required: true,
    },
    places: [placeSchema],
    schedule: [scheduleSchema],
    rating: {
      type: Number,
    },
    price_hour: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      enum: ["available", "taken"],
      default: "available",
    },
    blocked_users: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Garage", garageSchema);
