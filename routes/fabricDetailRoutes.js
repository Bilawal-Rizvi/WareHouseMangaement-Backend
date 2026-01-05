const express = require('express');
const router = express.Router();
const FabricDetailController = require('../controllers/FabricDetailController');
const protect = require("../middleware/authMiddleware");
router.get('/search', protect, FabricDetailController.search);
router.get('', protect, FabricDetailController.getAll);
router.get('/:id', protect, FabricDetailController.getById);
router.post('/', protect, FabricDetailController.create);
router.put('/:id', protect, FabricDetailController.update);
router.delete('/:id', protect, FabricDetailController.delete);


module.exports = router;
