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
// Connect to MongoDB
connectDB();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
  // console.log(`${req.method} ${req.url}`);
  next();
});



const authRoutes = require("./routes/authRoutes");
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
// Routes
app.use("/api/auth", authRoutes);
app.use('/api/shop_stoke',shopStokeRoutes );
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

