const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: Date, required: true },
    embroideryReturn: String,
    fresh: String,
    Rgrade: String,
    buildWhat: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Report', ReportSchema);
