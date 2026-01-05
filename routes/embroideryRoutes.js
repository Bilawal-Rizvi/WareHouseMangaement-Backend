const express = require('express');
const router = express.Router();
const EmbroideryDetailController = require('../controllers/EmbroideryDetailController');
const protect = require("../middleware/authMiddleware");
router.get('/search', protect, EmbroideryDetailController.search);
router.get('', protect, EmbroideryDetailController.getAll);
router.get('/:id', protect, EmbroideryDetailController.getById);
router.post('/', protect, EmbroideryDetailController.create);
router.put('/:id', protect, EmbroideryDetailController.update);
router.delete('/:id', protect, EmbroideryDetailController.delete);


module.exports = router;
