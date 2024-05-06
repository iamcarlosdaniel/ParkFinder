import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  garage_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Garage",
    required: true,
  },
  proposed_price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Request", requestSchema);
