

// const EmbroideryDetail = require("../models/EmbroideryDetail");


const FabricDetail = require("../models/FabricDetail");

// ✅ Get all records for logged-in user
exports.getAll = async (req, res, next) => {
  try {
    const data = await FabricDetail.find({ user: req.user.id }).sort({ date: -1 });
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

// ✅ Get single record by ID (only if belongs to user)
exports.getById = async (req, res, next) => {
  try {
    const record = await FabricDetail.findOne({ _id: req.params.id, user: req.user.id });
    if (!record) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: record });
  } catch (err) {
    next(err);
  }
};

// ✅ Create new record (associate with logged-in user)
exports.create = async (req, res, next) => {
  try {
    const newRecord = await FabricDetail.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, message: "Record created", data: newRecord });
  } catch (err) {
    next(err);
  }
};

// ✅ Update record (only if belongs to user)
exports.update = async (req, res, next) => {
  try {
    const { _id, ...updateData } = req.body; // remove _id
    const updated = await FabricDetail.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      updateData,
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Updated successfully", data: updated });
  } catch (err) {
    next(err);
  }
};

// ✅ Delete record (only if belongs to user)
exports.delete = async (req, res, next) => {
  try {
    const deleted = await FabricDetail.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};
// Search
exports.search = async (req, res, next) => {
  try {
    const q = req.query.q || '';
    const results = await FabricDetail.find({
      $or: [
        { item: { $regex: q, $options: 'i' } },
        { party: { $regex: q, $options: 'i' } },
        { duying: { $regex: q, $options: 'i' } },
        { rateNo: { $regex: q, $options: 'i' } },
        { base: { $regex: q, $options: 'i' } },
        { packing: { $regex: q, $options: 'i' } },
        { duyingThane: { $regex: q, $options: 'i' } }
      ]
    }).sort({ date: -1 });

    res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
};
