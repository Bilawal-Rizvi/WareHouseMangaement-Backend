const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const shopStokeRoutes = require('./routes/shopStokeRoutes');
const packingRoutes = require('./routes/packingRoutes');
const embroideryRoutes = require('./routes/embroideryRoutes');
const reportsRoutes = require('./routes/reportsRoutes');
const fabricDetailRoutes = require('./routes/fabricDetailRoutes');
const authRoutes = require('./routes/authRoutes');

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors({
  origin: 'https://ware-house-mangaement-frontend-ku3gnnbm4.vercel.app',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/shop_stoke', shopStokeRoutes);
app.use('/api/packing', packingRoutes);
app.use('/api/embroidery_details', embroideryRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/fabric_detail', fabricDetailRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ success: true, message: 'Server running', timestamp: new Date() }));

// Root
app.get('/', (req, res) => res.json({ message: 'Warehouse Management System API', version: '1.0.0' }));

// 404
app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));

// Error handler
app.use(errorHandler);

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

// Export for Vercel
module.exports = app;
