const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/ReportController');
const protect = require("../middleware/authMiddleware");
router.get('/search', protect, ReportController.search);
router.get('', protect, ReportController.getAll);
router.get('/:id', protect, ReportController.getById);
router.post('/', protect, ReportController.create);
router.put('/:id', protect, ReportController.update);
router.delete('/:id', protect, ReportController.delete);


module.exports = router;
