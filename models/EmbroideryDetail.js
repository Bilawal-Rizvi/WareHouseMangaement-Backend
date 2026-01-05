const mongoose = require('mongoose');

const EmbroideryDetailSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    embroideryName: String,
    latNo: String,
    base: String,
    sendingDate: Date,
    receivingDate: Date,
    quantity: Number,
    fresh: String,
    rGrade: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('EmbroideryDetail', EmbroideryDetailSchema);
