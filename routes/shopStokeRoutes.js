    const express = require("express");
    const router = express.Router();
    const shopController = require("../controllers/ShopStokeController");
    const protect = require("../middleware/authMiddleware");

    // 🔐 All routes protected
     router.get("/search", protect, shopController.search);
    router.get("", protect, shopController.getAll);
    router.get("/:id", protect, shopController.getById);
    router.post("/", protect, shopController.create);
    router.put("/:id", protect, shopController.update);
    router.delete("/:id", protect, shopController.delete);
   

    module.exports = router;
