const mongoose = require("mongoose");

const ShopStokeSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    shopNo: { type: String },
    quantity: { type: Number },
    pandiName: { type: String },
    volumeNo: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShopStoke", ShopStokeSchema);

