const mongoose = require('mongoose');

const PackingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    latNo: String,
    volumeNo: String,
    quantity: Number,
    Agrade: String,
    Bgrade: String,
    shirtFabric: String,
    dupptaFabric: String,
    embName: String,
    baseParty: String,
    dayingName: String,
    varient: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Packing', PackingSchema);
