const ShopStoke = require("../models/ShopStoke");

// ✅ Get all records for logged-in user
exports.getAll = async (req, res, next) => {
  try {
    const data = await ShopStoke.find({ user: req.user.id }).sort({ date: -1 });
    console.log(data);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

// ✅ Get single record by ID (only if belongs to user)
exports.getById = async (req, res, next) => {
  try {
    const record = await ShopStoke.findOne({ _id: req.params.id, user: req.user.id });
    if (!record) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: record });
  } catch (err) {
    next(err);
  }
};

// ✅ Create new record (associate with logged-in user)
exports.create = async (req, res, next) => {
  try {
    const newRecord = await ShopStoke.create({ ...req.body, user: req.user.id });
    res.status(201).json({ success: true, message: "Record created", data: newRecord });
  } catch (err) {
    next(err);
  }
};

// ✅ Update record (only if belongs to user)
exports.update = async (req, res, next) => {
  try {
    const { _id, ...updateData } = req.body; // remove _id
    const updated = await ShopStoke.findOneAndUpdate(
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
    const deleted = await ShopStoke.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    next(err);
  }
};

// ✅ Search records (user-specific)
exports.search = async (req, res, next) => {
  try {
    const q = req.query.q || "";
    const results = await ShopStoke.find({
      user: req.user.id,
      $or: [
        { shopNo: { $regex: q, $options: "i" } },
        { pandiName: { $regex: q, $options: "i" } },
        { volumeNo: { $regex: q, $options: "i" } },
      ],
    });
    res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
};
