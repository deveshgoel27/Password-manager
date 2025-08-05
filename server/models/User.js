// 🔧 What is a "model"?
// In your backend, you're using MongoDB with Mongoose. A model is a representation of a collection in MongoDB. You're creating a User model to store users' data like:

// Email
// Hashed password

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
