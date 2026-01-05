const express = require('express');
const router = express.Router();
const PackingController = require('../controllers/PackingController');
const protect = require("../middleware/authMiddleware");
router.get('/search', protect, PackingController.search);
router.get('', protect, PackingController.getAll);
router.get('/:id', protect, PackingController.getById);
router.post('/', protect, PackingController.create);
router.put('/:id', protect, PackingController.update);
router.delete('/:id', protect, PackingController.delete);


module.exports = router;
