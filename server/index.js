// server/index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import requireAuth from './middleware/authMiddleware.js';
// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // frontend port
  credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);

// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});


  // testing jwt token
app.get('/api/protected', requireAuth, (req, res) => {
  res.json({ message: 'You are authorized!', user: req.user });
});


// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err.message);
});
