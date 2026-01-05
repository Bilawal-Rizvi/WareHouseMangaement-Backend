const mongoose = require('mongoose');

const FabricDetailSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    item: String,
    party: String,
    duying: String,
    rateNo: String,
    total: Number,
    base: String,
    advance: Number,
    packing: String,
    duyingThane: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('FabricDetail', FabricDetailSchema);
